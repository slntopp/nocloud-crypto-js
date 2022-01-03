const fs = require("fs");
const path = require("path");
require("./wasm_exec.js");

describe("ncrypto.wasm Tests", () => {
  let wasmInstance;
  const go = new Go();

  beforeAll(async () => {
    const wasmPath = path.resolve(__dirname, ".", "ncrypto.wasm");
    const buffer = fs.readFileSync(wasmPath);
    const results = await WebAssembly.instantiate(buffer, go.importObject);
    wasmInstance = results.instance.exports;
  });

  test("Hashing works", () => {
    console.dir(wasmInstance.sha256HashCertificate([]));
    // expect(sha256HashCertificate()).toBe("abcdef");
  });
});
