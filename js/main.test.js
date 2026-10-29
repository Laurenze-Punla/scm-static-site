"use strict";

/**
 * Jest tests for onPageLoad()
 *
 * DEMO COMMIT 1 — Failing Test
 * The second test deliberately asserts the wrong expected value
 * to show the test job blocking deployment.
 */

const { onPageLoad } = require("./main");

// ─── Test Suite ───────────────────────────────────────────────────────────────

describe("onPageLoad()", () => {
  // ── PASSING TEST ──────────────────────────────────────────────────────────
  test("returns a welcome message containing the provided username", () => {
    const result = onPageLoad("Alice");
    expect(result.message).toBe(
      "Welcome, Alice! SCM Static Site loaded successfully."
    );
  });

  // ── FAILING TEST (intentional) ────────────────────────────────────────────
  // This test expects the wrong string on purpose to demonstrate the
  // test gate blocking the deploy job.
  test("INTENTIONAL FAIL: returns a numeric timestamp", () => {
    const result = onPageLoad("Alice");
    // Wrong assertion — timestamp is a number, not a string
    expect(typeof result.timestamp).toBe("string"); // ← will fail; it is 'number'
  });
});
