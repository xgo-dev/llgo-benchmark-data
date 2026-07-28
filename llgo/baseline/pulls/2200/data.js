window.BENCHMARK_DATA = {
  "lastUpdate": 1785212679008,
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
      },
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
          "id": "6eca55320c6e807131d8b5ee6736b294f8e87733",
          "message": "ci: track baseline benchmarks",
          "timestamp": "2026-07-28T01:18:52Z",
          "url": "https://github.com/xgo-dev/llgo/commit/6eca55320c6e807131d8b5ee6736b294f8e87733"
        },
        "date": 1785212603017,
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
      },
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
          "id": "6eca55320c6e807131d8b5ee6736b294f8e87733",
          "message": "ci: track baseline benchmarks",
          "timestamp": "2026-07-28T01:18:52Z",
          "url": "https://github.com/xgo-dev/llgo/commit/6eca55320c6e807131d8b5ee6736b294f8e87733"
        },
        "date": 1785212648459,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "compile/cprintf",
            "value": 362077314,
            "range": "359620707..4465399796",
            "unit": "ns",
            "extra": "median of 3 consecutive runs"
          },
          {
            "name": "run/cprintf",
            "value": 1343963,
            "range": "1315190..1556843",
            "unit": "ns",
            "extra": "median of 7 consecutive runs"
          },
          {
            "name": "compile/println",
            "value": 371262628,
            "range": "360276982..371395578",
            "unit": "ns",
            "extra": "median of 3 consecutive runs"
          },
          {
            "name": "run/println",
            "value": 1708431,
            "range": "1663193..1723684",
            "unit": "ns",
            "extra": "median of 7 consecutive runs"
          },
          {
            "name": "compile/fmtprintf",
            "value": 3309694023,
            "range": "3247881971..30269025543",
            "unit": "ns",
            "extra": "median of 3 consecutive runs"
          },
          {
            "name": "run/fmtprintf",
            "value": 2699023,
            "range": "2683990..2834316",
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
      },
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
          "id": "6eca55320c6e807131d8b5ee6736b294f8e87733",
          "message": "ci: track baseline benchmarks",
          "timestamp": "2026-07-28T01:18:52Z",
          "url": "https://github.com/xgo-dev/llgo/commit/6eca55320c6e807131d8b5ee6736b294f8e87733"
        },
        "date": 1785212657799,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMergeCompilerFlags (github.com/goplus/llgo/internal/clang)",
            "value": 144.9,
            "unit": "ns/op",
            "extra": "2108050 times"
          },
          {
            "name": "BenchmarkMergeLinkerFlags (github.com/goplus/llgo/internal/clang)",
            "value": 94.34,
            "unit": "ns/op",
            "extra": "3150387 times"
          },
          {
            "name": "BenchmarkLookupPCRandom (github.com/goplus/llgo/internal/build/funcinfo)",
            "value": 12.35,
            "unit": "ns/op",
            "extra": "23355454 times"
          },
          {
            "name": "BenchmarkGlobalRead (github.com/goplus/llgo/test/llgoext)",
            "value": 1.759,
            "unit": "ns/op",
            "extra": "170632345 times\n4 procs"
          },
          {
            "name": "BenchmarkTLSRead (github.com/goplus/llgo/test/llgoext)",
            "value": 2.164,
            "unit": "ns/op",
            "extra": "142159363 times\n4 procs"
          },
          {
            "name": "BenchmarkGLSRead (github.com/goplus/llgo/test/llgoext)",
            "value": 1.758,
            "unit": "ns/op",
            "extra": "170844081 times\n4 procs"
          },
          {
            "name": "BenchmarkGlobalWrite (github.com/goplus/llgo/test/llgoext)",
            "value": 2.807,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTLSWrite (github.com/goplus/llgo/test/llgoext)",
            "value": 2.805,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkGLSWrite (github.com/goplus/llgo/test/llgoext)",
            "value": 2.806,
            "unit": "ns/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkDirectCall (github.com/goplus/llgo/test/llgoext)",
            "value": 1.757,
            "unit": "ns/op",
            "extra": "170727906 times\n4 procs"
          },
          {
            "name": "BenchmarkInterfaceCall (github.com/goplus/llgo/test/llgoext)",
            "value": 8.475,
            "unit": "ns/op",
            "extra": "35546020 times\n4 procs"
          },
          {
            "name": "BenchmarkDefer (github.com/goplus/llgo/test/llgoext)",
            "value": 55.9,
            "unit": "ns/op",
            "extra": "5018880 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelBuffered (github.com/goplus/llgo/test/llgoext)",
            "value": 36.32,
            "unit": "ns/op",
            "extra": "8260292 times\n4 procs"
          },
          {
            "name": "BenchmarkChannelHandoff (github.com/goplus/llgo/test/llgoext)",
            "value": 23070,
            "unit": "ns/op",
            "extra": "12658 times\n4 procs"
          },
          {
            "name": "BenchmarkRuntimeGetG (github.com/goplus/llgo/test/llgoext)",
            "value": 4.921,
            "unit": "ns/op",
            "extra": "60799932 times\n4 procs"
          },
          {
            "name": "BenchmarkGoroutine (github.com/goplus/llgo/test/llgoext)",
            "value": 41408,
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
      },
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
          "id": "6eca55320c6e807131d8b5ee6736b294f8e87733",
          "message": "ci: track baseline benchmarks",
          "timestamp": "2026-07-28T01:18:52Z",
          "url": "https://github.com/xgo-dev/llgo/commit/6eca55320c6e807131d8b5ee6736b294f8e87733"
        },
        "date": 1785212667482,
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
    ],
    "macOS program build and run time": [
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
        "date": 1785211481018,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "compile/cprintf",
            "value": 302364041,
            "range": "299312625..3573893583",
            "unit": "ns",
            "extra": "median of 3 consecutive runs"
          },
          {
            "name": "run/cprintf",
            "value": 2338708,
            "range": "2220417..2396500",
            "unit": "ns",
            "extra": "median of 7 consecutive runs"
          },
          {
            "name": "compile/println",
            "value": 362351625,
            "range": "351319000..370886375",
            "unit": "ns",
            "extra": "median of 3 consecutive runs"
          },
          {
            "name": "run/println",
            "value": 3411333,
            "range": "3278875..5431416",
            "unit": "ns",
            "extra": "median of 7 consecutive runs"
          },
          {
            "name": "compile/fmtprintf",
            "value": 2881375083,
            "range": "2607951834..24512103875",
            "unit": "ns",
            "extra": "median of 3 consecutive runs"
          },
          {
            "name": "run/fmtprintf",
            "value": 17492292,
            "range": "16701208..18372250",
            "unit": "ns",
            "extra": "median of 7 consecutive runs"
          }
        ]
      },
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
          "id": "6eca55320c6e807131d8b5ee6736b294f8e87733",
          "message": "ci: track baseline benchmarks",
          "timestamp": "2026-07-28T01:18:52Z",
          "url": "https://github.com/xgo-dev/llgo/commit/6eca55320c6e807131d8b5ee6736b294f8e87733"
        },
        "date": 1785212676373,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "compile/cprintf",
            "value": 301477792,
            "range": "298931209..3998016750",
            "unit": "ns",
            "extra": "median of 3 consecutive runs"
          },
          {
            "name": "run/cprintf",
            "value": 2542291,
            "range": "2397291..3466709",
            "unit": "ns",
            "extra": "median of 7 consecutive runs"
          },
          {
            "name": "compile/println",
            "value": 338310375,
            "range": "334632875..351194416",
            "unit": "ns",
            "extra": "median of 3 consecutive runs"
          },
          {
            "name": "run/println",
            "value": 3126625,
            "range": "3015375..3475542",
            "unit": "ns",
            "extra": "median of 7 consecutive runs"
          },
          {
            "name": "compile/fmtprintf",
            "value": 3184766292,
            "range": "2961621334..23798984458",
            "unit": "ns",
            "extra": "median of 3 consecutive runs"
          },
          {
            "name": "run/fmtprintf",
            "value": 19651416,
            "range": "19174417..21212833",
            "unit": "ns",
            "extra": "median of 7 consecutive runs"
          }
        ]
      }
    ],
    "macOS compiler and core language": [
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
        "date": 1785211495077,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMergeCompilerFlags (github.com/goplus/llgo/internal/clang)",
            "value": 107,
            "unit": "ns/op",
            "extra": "3023026 times"
          },
          {
            "name": "BenchmarkMergeLinkerFlags (github.com/goplus/llgo/internal/clang)",
            "value": 70.29,
            "unit": "ns/op",
            "extra": "4087766 times"
          },
          {
            "name": "BenchmarkLookupPCRandom (github.com/goplus/llgo/internal/build/funcinfo)",
            "value": 11.42,
            "unit": "ns/op",
            "extra": "25081952 times"
          },
          {
            "name": "BenchmarkGlobalRead (github.com/goplus/llgo/test/llgoext)",
            "value": 1.215,
            "unit": "ns/op",
            "extra": "287506866 times\n3 procs"
          },
          {
            "name": "BenchmarkTLSRead (github.com/goplus/llgo/test/llgoext)",
            "value": 1.091,
            "unit": "ns/op",
            "extra": "284725652 times\n3 procs"
          },
          {
            "name": "BenchmarkGLSRead (github.com/goplus/llgo/test/llgoext)",
            "value": 1.197,
            "unit": "ns/op",
            "extra": "258141680 times\n3 procs"
          },
          {
            "name": "BenchmarkGlobalWrite (github.com/goplus/llgo/test/llgoext)",
            "value": 1.017,
            "unit": "ns/op",
            "extra": "269823806 times\n3 procs"
          },
          {
            "name": "BenchmarkTLSWrite (github.com/goplus/llgo/test/llgoext)",
            "value": 1.016,
            "unit": "ns/op",
            "extra": "312092816 times\n3 procs"
          },
          {
            "name": "BenchmarkGLSWrite (github.com/goplus/llgo/test/llgoext)",
            "value": 0.9863,
            "unit": "ns/op",
            "extra": "298685410 times\n3 procs"
          },
          {
            "name": "BenchmarkDirectCall (github.com/goplus/llgo/test/llgoext)",
            "value": 1.026,
            "unit": "ns/op",
            "extra": "284998650 times\n3 procs"
          },
          {
            "name": "BenchmarkInterfaceCall (github.com/goplus/llgo/test/llgoext)",
            "value": 4.595,
            "unit": "ns/op",
            "extra": "58742901 times\n3 procs"
          },
          {
            "name": "BenchmarkDefer (github.com/goplus/llgo/test/llgoext)",
            "value": 32.99,
            "unit": "ns/op",
            "extra": "8301040 times\n3 procs"
          },
          {
            "name": "BenchmarkChannelBuffered (github.com/goplus/llgo/test/llgoext)",
            "value": 23.69,
            "unit": "ns/op",
            "extra": "10564201 times\n3 procs"
          },
          {
            "name": "BenchmarkChannelHandoff (github.com/goplus/llgo/test/llgoext)",
            "value": 7105,
            "unit": "ns/op",
            "extra": "43316 times\n3 procs"
          },
          {
            "name": "BenchmarkRuntimeGetG (github.com/goplus/llgo/test/llgoext)",
            "value": 2.664,
            "unit": "ns/op",
            "extra": "100000000 times\n3 procs"
          },
          {
            "name": "BenchmarkGoroutine (github.com/goplus/llgo/test/llgoext)",
            "value": 27873,
            "unit": "ns/op",
            "extra": "100 times\n3 procs"
          }
        ]
      }
    ]
  }
}