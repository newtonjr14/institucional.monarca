import { createHmac, timingSafeEqual } from "node:crypto";
import {
  deleteCookie,
  getCookie,
  setCookie,
} from "@tanstack/react-start/server";

const COOKIE = "monarca_admin";

export function adminSecret() {
  return process.env["ADMIN_PASSWORD"] ?? "monarca-admin";
}

function sessionToken() {
  return createHmac("sha256", adminSecret()).update("session").digest("hex");
}

export function isAdmin() {
  const value = getCookie(COOKIE);
  if (!value) return false;
  const expected = sessionToken();
  const left = Buffer.from(value);
  const right = Buffer.from(expected);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

export function assertAdmin() {
  if (!isAdmin()) {
    throw new Error("Não autorizado.");
  }
}

export function loginWithPassword(password: string) {
  const expected = Buffer.from(adminSecret());
  const given = Buffer.from(password);
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) {
    return false;
  }
  setCookie(COOKIE, sessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return true;
}

export function logoutAdminSession() {
  deleteCookie(COOKIE, { path: "/" });
}
