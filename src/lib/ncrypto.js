/*
Copyright © 2021-2022 Nikita Ivanovski info@slnt-opp.xyz

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const fs = require("fs");
const path = require("path");
require("./wasm_exec.js");

let wasm;

async function init() {
  const go = new Go();
  const wasmPath = path.resolve(__dirname, ".", "ncrypto.wasm");
  const buffer = fs.readFileSync(wasmPath);
  const results = await WebAssembly.instantiate(buffer, go.importObject);
  console.log("Instance", results.instance);
  wasm = results.instance.exports;
}

function sha256HashCertificate(cert) {
  console.log("invoked");
  bytes = Array.from(cert, (x) => x.charCodeAt(0));
  console.log(bytes, wasm);
  console.log(wasm.sha256HashCertificate(bytes));
  return "abcdef";
}

module.exports = (() => {
  return {
    init: init(),
    sha256HashCertificate,
  };
})();
