window.BENCHMARK_DATA = {
  "lastUpdate": 1785211472379,
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
    ],
    "Linux compiler and core language": [
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
        "date": 1785211458920,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMergeCompilerFlags (github.com/goplus/llgo/internal/clang)",
            "value": 152.6,
            "unit": "ns/op",
            "extra": "1998505 times"
          },
          {
            "name": "BenchmarkMergeLinkerFlags (github.com/goplus/llgo/internal/clang)",
            "value": 99.38,
            "unit": "ns/op",
            "extra": "2983882 times"
          },
          {
            "name": "BenchmarkLookupPCRandom (github.com/goplus/llgo/internal/build/funcinfo)",
            "value": 14.35,
            "unit": "ns/op",
            "extra": "21473804 times"
          },
          {
            "name": "BenchmarkGlobalRead (github.com/goplus/llgo/test/llgoext)",
            "value": 1.556,
            "unit": "ns/op",
            "extra": "192502136 times\n4 procs"
          },
          {
            "name": "BenchmarkTLSRead (github.com/goplus/llgo/test/llgoext)",
            "value": 1.88,
            "unit": "ns/op",
            "extra": "160595359 times\n4 procs"
          },
          {
            "name": "BenchmarkGLSRead (github.com/goplus/llgo/test/llgoext)",
            "value": 1.556,
            "unit": "ns/op",
            "extra": "192572308 times\n4 procs"
          },
          {
            "name": "BenchmarkGlobalWrite (github.com/goplus/llgo/test/llgoext)",
            "value": 2.479,
            "unit": "ns/op",
            "extra": "121116510 times\n4 procs"
          },
          {
            "name": "BenchmarkTLSWrite (github.com/goplus/llgo/test/llgoext)",
            "value": 2.487,
            "unit": "ns/op",
            "extra": "120044929 times\n4 procs"
          },
          {
            "name": "BenchmarkGLSWrite (github.com/goplus/llgo/test/llgoext)",
            "value": 2.488,
            "unit": "ns/op",
            "extra": "120653590 times\n4 procs"
          },
          {
            "name": "BenchmarkDirectCall (github.com/goplus/llgo/test/llgoext)",
            "value": 1.558,
            "unit": "ns/op",
            "extra": "192834447 times\n4 procs"
          },
          {
            "name": "BenchmarkInterfaceCall (github.com/goplus/llgo/test/llgoext)",
            "value": 8.104,
            "unit": "ns/op",
            "extra": "37066982 times\n4 procs"
          },
          {
            "name": "BenchmarkDefer (github.com/goplus/llgo/test/llgoext)",
            "value": 51.58,
            "unit": "ns/op",
            "extra": "5300221 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelBuffered (github.com/goplus/llgo/test/llgoext)",
            "value": 34.01,
            "unit": "ns/op",
            "extra": "8835969 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelHandoff (github.com/goplus/llgo/test/llgoext)",
            "value": 25430,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkRuntimeGetG (github.com/goplus/llgo/test/llgoext)",
            "value": 4.672,
            "unit": "ns/op",
            "extra": "64312100 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutine (github.com/goplus/llgo/test/llgoext)",
            "value": 43961,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          }
        ]
      }
    ],
    "macOS program binary size": [
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
        "date": 1785211469079,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "binary/cprintf/file",
            "value": 84752,
            "unit": "bytes"
          },
          {
            "name": "binary/cprintf/text",
            "value": 15477,
            "unit": "bytes"
          },
          {
            "name": "binary/cprintf/data",
            "value": 192,
            "unit": "bytes"
          },
          {
            "name": "binary/cprintf/bss",
            "value": 17,
            "unit": "bytes"
          },
          {
            "name": "binary/println/file",
            "value": 126848,
            "unit": "bytes"
          },
          {
            "name": "binary/println/text",
            "value": 37208,
            "unit": "bytes"
          },
          {
            "name": "binary/println/data",
            "value": 8833,
            "unit": "bytes"
          },
          {
            "name": "binary/println/bss",
            "value": 268,
            "unit": "bytes"
          },
          {
            "name": "binary/fmtprintf/file",
            "value": 2345936,
            "unit": "bytes"
          },
          {
            "name": "binary/fmtprintf/text",
            "value": 1155465,
            "unit": "bytes"
          },
          {
            "name": "binary/fmtprintf/data",
            "value": 365688,
            "unit": "bytes"
          },
          {
            "name": "binary/fmtprintf/bss",
            "value": 320356,
            "unit": "bytes"
          }
        ]
      }
    ]
  }
}