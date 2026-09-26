"use client";

import { cookies } from "@/data/cookies";

export function CookieManageLink() {
  if (!cookies.requiresConsent) return null;

  function reopen() {
    try {
      localStorage.removeItem(cookies.storageKey);
    } catch {
      /* ignore */
    }
    window.location.reload();
  }

  return (
    <button
      type="button"
      onClick={reopen}
      className="text-sand-200/80 transition-colors hover:text-sand-50"
    >
      {cookies.banner.manageLabel}
    </button>
  );
}