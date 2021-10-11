(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{709:function(s,t,a){"use strict";a.r(t);var e=a(46),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[s._v("#")]),s._v(" Simple Summary")]),s._v(" "),a("p",[s._v("Add basefee field to "),a("code",[s._v("eth_getBlockByNumber")]),s._v(" RPC endpoint response.")]),s._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[s._v("#")]),s._v(" Abstract")]),s._v(" "),a("p",[s._v("Adds "),a("code",[s._v("baseFee")]),s._v(" property to the "),a("code",[s._v("eth_getBlockByNumber")]),s._v(" JSON-RPC request "),a("code",[s._v("result")]),s._v(" object.  This property will contain the value of the base fee for any block after the EIP-1559 fork.")]),s._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[s._v("#")]),s._v(" Motivation")]),s._v(" "),a("p",[a("RouterLink",{attrs:{to:"/eip-1559.html"}},[s._v("EIP-1559")]),s._v(" introduces a base fee per gas in protocol.\nThis value is maintained under consensus as a new field in the block header structure.\nUsers may need value of the base fee at a given block. Base fee value is important to make gas price predictions more accurate.")],1),s._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[s._v("#")]),s._v(" Specification")]),s._v(" "),a("h3",{attrs:{id:"eth-getblockbynumber"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-getblockbynumber"}},[s._v("#")]),s._v(" "),a("code",[s._v("eth_getBlockByNumber")])]),s._v(" "),a("h4",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),a("p",[s._v("Returns information about a block specified by number.\nEvery block returned by this endpoint whose block number is before the "),a("RouterLink",{attrs:{to:"/eip-1559.html"}},[s._v("EIP-1559")]),s._v(" fork block "),a("strong",[s._v("MUST NOT")]),s._v(" include a "),a("code",[s._v("baseFee")]),s._v(" field.\nEvery block returned by this endpoint whose block number is on or after the "),a("RouterLink",{attrs:{to:"/eip-1559.html"}},[s._v("EIP-1559")]),s._v(" fork block "),a("strong",[s._v("MUST")]),s._v(" include a "),a("code",[s._v("baseFee")]),s._v(" field.")],1),s._v(" "),a("h4",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[s._v("#")]),s._v(" Parameters")]),s._v(" "),a("p",[s._v("Parameters remain unchanged.")]),s._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns"}},[s._v("#")]),s._v(" Returns")]),s._v(" "),a("p",[s._v("For the full specification of "),a("code",[s._v("eth_getBlockByNumber")]),s._v(" see "),a("RouterLink",{attrs:{to:"/eip-1474.html"}},[s._v("EIP-1474")]),s._v(".\nAdd a new JSON field to the "),a("code",[s._v("result")]),s._v(" object for block headers containing a base fee (post "),a("RouterLink",{attrs:{to:"/eip-1559.html"}},[s._v("EIP-1559")]),s._v(" fork block).")],1),s._v(" "),a("ul",[a("li",[s._v("{"),a("RouterLink",{attrs:{to:"/eip-1474.html#quantity"}},[a("code",[s._v("Quantity")])]),s._v("} "),a("code",[s._v("baseFee")]),s._v(" - base fee for this block")],1)]),s._v(" "),a("h4",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Request")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -X POST --data "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{\n    "id": 1559,\n    "jsonrpc": "2.0",\n    "method": "eth_getBlockByNumber",\n    "params":["latest", true]\n}\'')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Response")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1559")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2.0"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"result"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"difficulty"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0x027f07"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"extraData"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0x0000000000000000000000000000000000000000000000000000000000000000"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"baseFee"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0x7"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gasLimit"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0x9f759"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gasUsed"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0x9f759"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hash"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"logsBloom"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"miner"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0x4e65fda2159562a496f9f3522f89122a3088497a"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nonce"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0xe04d296d2460cfb8472af2c5fd05b5a214109c25688d3704aed5484f9a7792f2"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"number"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0x1b4"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"parentHash"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0x9646252be9520f6e71339a8df9c55e4d7619deeb018d2a3f2d21fc165dde5eb5"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sha3Uncles"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"size"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0x027f07"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stateRoot"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0xd5855eb08b3387c0af375e9cdb6acfc05eb8f519e419b874b6ff2ffda7ed1dff"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"timestamp"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0x54e34e8e"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"totalDifficulty"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0x027f07"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"transactions"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"transactionsRoot"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uncles"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br")])]),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[s._v("#")]),s._v(" Rationale")]),s._v(" "),a("p",[s._v("The addition of a single parameter instead of introducing a whole new endpoint was the simplest change that would be easiest to get integrated.\nFor backward compatibility we decided to not include the base fee in the response for pre-1559 blocks.")]),s._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[s._v("#")]),s._v(" Backwards Compatibility")]),s._v(" "),a("p",[s._v("Backwards compatible. Calls related to block prior to "),a("RouterLink",{attrs:{to:"/eip-1559.html"}},[s._v("EIP-1559")]),s._v(" fork block will omit the base fee field in the response.")],1),s._v(" "),a("h2",{attrs:{id:"security-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[s._v("#")]),s._v(" Security Considerations")]),s._v(" "),a("p",[s._v("The added field ("),a("code",[s._v("baseFee")]),s._v(") is informational and does not introduce technical security issues.")]),s._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[s._v("#")]),s._v(" Copyright")]),s._v(" "),a("p",[s._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[s._v("CC0"),a("OutboundLink")],1),s._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);