---
title: "Get Tokens"
---

Fetch a list of many - if not all - of the tokens an Ethereum address owns. The result contains ERC20 tokens, as well as NFTs or other variants.

## Request

```javascript
curl -X GET \
  -H 'Content-Type: application/json' \
  https://api.cinder.cloud/api/ethereum/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2/tokens
```

## Example Response Observable

```json
[
  {
        "token": {
            "address": "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07",
            "symbol": "OMG"
        },
        "balance": "11370618,135394",
        "rawBalance": 1.1370618135394136e+25
    },
    {
        "token": {
            "address": "0x744d70FDBE2Ba4CF95131626614a1763DF805B9E",
            "symbol": "SNT"
        },
        "balance": "228172855,171682",
        "rawBalance": 2.281728551716821e+26
    }
]
```
