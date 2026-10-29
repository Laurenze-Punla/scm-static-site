"use strict";

/**
 * Jest tests for onPageLoad()
 *
 * DEMO COMMIT 2 — All Tests Passing
 * Both tests now assert correct values, unblocking the deploy job.
 */

const { onPageLoad } = require("./main");

// ─── Test Suite ───────────────────────────────────────────────────────────────

describe("onPageLoad()", () => {
  // ── PASSING TEST 1 ────────────────────────────────────────────────────────
  test("returns a welcome message containing the provided username", () => {
    const result = onPageLoad("Alice");
    expect(result.message).toBe(
      "Welcome, Alice! SCM Static Site loaded successfully."
    );
  });

  // ── PASSING TEST 2 ────────────────────────────────────────────────────────
  // Fixed: timestamp is indeed a number, so we assert 'number'.
  test("returns a numeric timestamp", () => {
    const result = onPageLoad("Alice");
    expect(typeof result.timestamp).toBe("number"); // ← correct assertion
  });
});
