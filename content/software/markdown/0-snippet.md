# VSCode - Markdown 代码片段

```json
"markdown li": {
  "prefix": "j:mdl",
  "description": "li",
  "body": [
    "* "
  ]
},
"markdown a": {
  "prefix": "j:mda",
  "description": "a",
  "body": [
    "[$1]($2)"
  ],
},
"markdown lia": {
  "prefix": "j:mdla",
  "description": "li中的a",
  "body": [
    "* [$1]($2)"
  ],
},
"markdown img": {
  "prefix": "j:mdi",
  "description": "img",
  "body": [
    "![$1]($2)"
  ]
},
"markdown code": {
  "prefix": "j:mdc",
  "description": "code",
  "body": [
    "```${1:js}",
    "$2",
    "```"
  ],
},
"markdown table": {
  "prefix": "j:mdt",
  "description": "table",
  "body": [
    "| 左对齐        | 居中           | 右对齐  |",
    "| ------------ |:-------------:| -----:|",
    "| 列1           | 列2           | 列3   |",
  ]
},
```