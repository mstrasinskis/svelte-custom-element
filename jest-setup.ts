import "@testing-library/jest-dom";
import { configure } from "@testing-library/svelte";
// jsdom does not implement TextEncoder
// Polyfill the encoders with node
import { TextDecoder, TextEncoder } from "util";

global.TextEncoder = TextEncoder;

// Environment Variables Setup

// testing-library setup
configure({
  testIdAttribute: "data-tid",
});
