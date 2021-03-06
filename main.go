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

package main

import (
	"crypto/sha256"
	"crypto/x509"
	"encoding/hex"
	"encoding/pem"
	"fmt"
	"syscall/js"
)

func HashCertificateSha256(this js.Value, args []js.Value) interface{} {
	in := make([]byte, args[0].Get("length").Int())
	js.CopyBytesToGo(in, args[0])
	block, _ := pem.Decode(in)
	cert, err := x509.ParseCertificate(block.Bytes)
	if err != nil {
		return fmt.Sprintf("Error: %s", err.Error())
	}
	hash := sha256.Sum256(cert.Raw)
	return hex.EncodeToString(hash[:])
}

func main() {
	wait := make(chan struct{}, 0)
	js.Global().Set("HashCertificateSha256", js.FuncOf(HashCertificateSha256))
	<-wait
}