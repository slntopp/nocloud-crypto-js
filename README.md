# NoCloud Crypto (JavaScript)

Some functions which might be or are needed by NoCloud Web Apps

## Usage

The following will register bunch of global functions

```javascript
const nocloudCryptoInit = require("./ncrypto.js");
// * * *
{
    await nocloudCryptoInit()
}
```

## Functions

* [HashCertificateSha256](#HashCertificateSha256)

### HashCertificateSha256

Makes SHA256 hash from PEM passed as bytes Array. Array must be `Uint8Array`. Example:

```javascript
certificate = "-----BEGIN CERTIFICATE-----//////-----END CERTIFICATE-----"
bytes = Uint8Array.from(Array.from(certificate, (x) => x.charCodeAt(0)));
HashCertificateSha256(bytes) // => 12bk4sdd......
```
