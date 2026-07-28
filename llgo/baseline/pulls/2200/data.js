window.BENCHMARK_DATA = {
  "lastUpdate": 1785211405736,
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
    ]
  }
}