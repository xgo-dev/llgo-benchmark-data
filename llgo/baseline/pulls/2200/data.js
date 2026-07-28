window.BENCHMARK_DATA = {
  "lastUpdate": 1785211452351,
  "repoUrl": "https://github.com/xgo-dev/llgo",
  "entries": {
    "Linux program binary size": [
      {
        "commit": {
          "author": {
            "name": "Li Jie",
            "username": "cpunion",
            "email": "cpunion@gmail.com"
          },
          "committer": {
            "name": "Li Jie",
            "username": "cpunion",
            "email": "cpunion@gmail.com"
          },
          "id": "8882604a922d127756c83602a0ec303bd17bf0b9",
          "message": "ci: track baseline benchmarks",
          "timestamp": "2026-07-28T01:18:52Z",
          "url": "https://github.com/xgo-dev/llgo/commit/8882604a922d127756c83602a0ec303bd17bf0b9"
        },
        "date": 1785211397850,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "binary/cprintf/file",
            "value": 18520,
            "unit": "bytes"
          },
          {
            "name": "binary/cprintf/text",
            "value": 410,
            "unit": "bytes"
          },
          {
            "name": "binary/cprintf/data",
            "value": 12843,
            "unit": "bytes"
          },
          {
            "name": "binary/cprintf/bss",
            "value": 2641,
            "unit": "bytes"
          },
          {
            "name": "binary/println/file",
            "value": 72128,
            "unit": "bytes"
          },
          {
            "name": "binary/println/text",
            "value": 21225,
            "unit": "bytes"
          },
          {
            "name": "binary/println/data",
            "value": 29061,
            "unit": "bytes"
          },
          {
            "name": "binary/println/bss",
            "value": 1213,
            "unit": "bytes"
          },
          {
            "name": "binary/fmtprintf/file",
            "value": 2212832,
            "unit": "bytes"
          },
          {
            "name": "binary/fmtprintf/text",
            "value": 759353,
            "unit": "bytes"
          },
          {
            "name": "binary/fmtprintf/data",
            "value": 981297,
            "unit": "bytes"
          },
          {
            "name": "binary/fmtprintf/bss",
            "value": 323428,
            "unit": "bytes"
          }
        ]
      }
    ],
    "Linux program build and run time": [
      {
        "commit": {
          "author": {
            "name": "Li Jie",
            "username": "cpunion",
            "email": "cpunion@gmail.com"
          },
          "committer": {
            "name": "Li Jie",
            "username": "cpunion",
            "email": "cpunion@gmail.com"
          },
          "id": "8882604a922d127756c83602a0ec303bd17bf0b9",
          "message": "ci: track baseline benchmarks",
          "timestamp": "2026-07-28T01:18:52Z",
          "url": "https://github.com/xgo-dev/llgo/commit/8882604a922d127756c83602a0ec303bd17bf0b9"
        },
        "date": 1785211445819,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "compile/cprintf",
            "value": 341809984,
            "range": "341219011..11128966483",
            "unit": "ns",
            "extra": "median of 3 consecutive runs"
          },
          {
            "name": "run/cprintf",
            "value": 1239423,
            "range": "1214787..1286863",
            "unit": "ns",
            "extra": "median of 7 consecutive runs"
          },
          {
            "name": "compile/println",
            "value": 331546448,
            "range": "330495376..336882951",
            "unit": "ns",
            "extra": "median of 3 consecutive runs"
          },
          {
            "name": "run/println",
            "value": 1588140,
            "range": "1538547..1789560",
            "unit": "ns",
            "extra": "median of 7 consecutive runs"
          },
          {
            "name": "compile/fmtprintf",
            "value": 3170252114,
            "range": "3144724351..28937173898",
            "unit": "ns",
            "extra": "median of 3 consecutive runs"
          },
          {
            "name": "run/fmtprintf",
            "value": 2443160,
            "range": "2404597..2815469",
            "unit": "ns",
            "extra": "median of 7 consecutive runs"
          }
        ]
      }
    ]
  }
}