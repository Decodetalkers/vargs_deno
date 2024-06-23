import { assertEquals } from "jsr:@std/assert";
import Vargs, { Constructor } from "./lib.ts";

Deno.test(function vargTest() {
  const args = new Vargs([1, 2, () => {
    console.log("gg");
  }]);
  assertEquals(args.length, 3);
  assertEquals(args.length, 3);
  assertEquals(args.callbackGiven, false);
  const args2 = new Constructor([1, 2, () => {
    console.log("gg");
  }], () => {});
  assertEquals(args2.callbackGiven, true);
});
