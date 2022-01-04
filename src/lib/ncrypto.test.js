const nocloudCryptoInit = require("./ncrypto.js");

const sample_cert = `-----BEGIN CERTIFICATE-----
MIIFFTCCAv2gAwIBAgIUGkgu9yuKqUOZOydGAYLlvv+AtuIwDQYJKoZIhvcNAQEL
BQAwGjEYMBYGA1UEAwwPemVyby5jbGllbnQubmV0MB4XDTIxMTIwOTA3MzgzNVoX
DTIyMDEwODA3MzgzNVowGjEYMBYGA1UEAwwPemVyby5jbGllbnQubmV0MIICIjAN
BgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAuyMth5TgBlCdV7MW9P4CtZCzX6It
V4TK6LGkuzEfUocAuNSHxjetNusNPQ3vC2WuUg5U3OzIbIolWatzWm/su5Z+XvRB
i1E1cn3HZwEes43BJ8mxNRba/WSRgTBdyCpdMwmwnPXzACXOeQw14IeYgHdPh3pi
hOHLBydz96FPqvC/gYg3f7ilXgrH+Y0KPCX731tKZBASQcX3djd0AReTeBo2hTRJ
CLbomKoJ3YFsZH69h7ghk8xOfV641zVWI2Rcl0i3Akvkyiws5UpeL8zc4xCDDAuj
kqJKLZOxuFJJiz8zybn56Up+lWJv+kb3n6nhBsGNGog7PkwCI+QrtFBwjfb5oy0W
7HKmPFRMx5/b15gyKCUNEdNEZ0HipbRsoFolHJ98FLRw7Ub4vx8SoFPrJqozdsrN
fC9ZwFetcNNi/P/bA77cv/iZVag+ESouj7wlCQzdlBN1ds5MlyyVAidYIDTEiWwJ
mtdEjCKwrE1fWiiCRUoO90d2yHoLEkAK49gLvXWE37vI4Zfd9gWsVwqzil7shLrq
hBwF/yiO+u+KBEKbdAMAOICdxZkC+di+PQkt4Cmu3543v99srS2IIsaoIXV9eFnZ
nxRQNbZ1JQ9xbBiahPAzbTyFXqwsa04tXBC+0bP0ns9A4+Oi/QDP0V6/XfwBgmse
zkC0IdxHl0xfk+cCAwEAAaNTMFEwHQYDVR0OBBYEFDsdoXK2jGXNacmww6yWgmlu
PCE/MB8GA1UdIwQYMBaAFDsdoXK2jGXNacmww6yWgmluPCE/MA8GA1UdEwEB/wQF
MAMBAf8wDQYJKoZIhvcNAQELBQADggIBAHdwhQu59dS02a04zKN1XztGaH+/5ETt
Dfg6YlrVX55Rt4Glvx8gzKS3mjYFMMuYKzp4koHFaXkZnBUGVKoCfYJ9jzWHUCwB
S1ehsk4uzpW/U3gIbhugHLJa50QFBc9KZlkILymGDohlZoBqVuPMZssi/wa4miE8
zVPmBJyrjJq+oH7QoePHz2gSfK4DkGCQ1yW9nH7ZD4RW92SHKTa+g4JxBonY8vpE
IRNjAjqmB8ZCGt31jGSN7KwnSIO5+A929WvuxGbw3o3RKQVcRgQ3ujfMivzYGXhN
POB9RBQSkIuRpZ3MGC1ibaETXnWKZHIiuMK0jLA8ZBbo6rAlnMyKcfioCyh7+eT0
qEIEk/l7lnnDdw+r5sinEA9Hfpp/50sl0VXm06Buwt/1kVJ3d0aPVMI7V7aXtunR
d8uN4SPYkN6HmPi4EWccuvyF3ofH27snAPUhnATYdR2ImymMVUj/mhu3t1M4RsUg
r+usU88drrGQQduEUtWuiTDg3Ez85X5KNQgXN/OWfDPgyZzEkxPN9seRU5RV10Yh
S738YjHrqetut3fM3DFlLkXQX+bGV+Iyw5gppbkXclIXWZdSM2+sMJZokGpo1n9n
NGV0j/i5WvVL8ffN4mV6LvT1dQWHZvvMUmidcb3+uBGeubmEQizutcZ5No56QVOf
sPfYCb5h++Eb
-----END CERTIFICATE-----`;

describe("ncrypto.wasm Tests", () => {
  beforeAll(async () => {
    await nocloudCryptoInit();
  });

  test("Hashing works", () => {
    bytes = Uint8Array.from(Array.from(sample_cert, (x) => x.charCodeAt(0)));
    expect(HashCertificateSha256(bytes)).toBe(
      "419d3335b2b533526d4e7f6f1041b3c492d086cad0f5876739800ffd51659545"
    );
  });
});
