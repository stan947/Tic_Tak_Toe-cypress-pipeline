import { test, expect } from "vitest";
import calculateWinner from "./calculateWinner";

test("detects a horizontal win", () => {
  expect(calculateWinner(["X", "X", "X", null, null, null, null, null, null])).toBe("X");
});

test("detects a vertical win", () => {
  expect(calculateWinner(["X", null, null, "X", null, null, "X", null, null])).toBe("X");
});

test("detects a diagonal win", () => {
  expect(calculateWinner(["X", null, null, null, "X", null, null, null, "X"])).toBe("X");
});

test("returns null if no winner", () => {
  expect(calculateWinner([null, null, null, null, null, null, null, null, null])).toBe(null);
});