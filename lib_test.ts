import { assertEquals } from "jsr:@std/assert";
import Vargs, { Constructor } from "./lib.ts";

Deno.test(function vargTest() {
  const args = new Vargs([1, 2, () => {
    console.log("gg");
  }]);
  assertEquals(args.length, 3);
  assertEquals(args.length, 3);
  assertEquals(args.callbackGiven(), false);
  const args2 = new Constructor([1, 2, () => {
    console.log("gg");
  }], () => {});
  assertEquals(args2.callbackGiven(), true);
});

Deno.test(async function importTest() {
  const Vargs = (await import("./lib.ts")).Constructor;
  const args = new Vargs(["a", 1, () => {
    console.log("123");
  }], () => {
    console.log("ggg");
    return false;
  });
  console.log(args.array);
  args.callbackGiven();
  args.callback;
});
