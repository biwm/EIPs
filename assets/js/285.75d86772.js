(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{705:function(t,e,s){"use strict";s.r(e);var a=s(46),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"simple-summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[t._v("#")]),t._v(" Simple Summary")]),t._v(" "),s("p",[t._v("Add "),s("code",[t._v("eth_symbol")]),t._v(" method to the JSON-RPC that returns the symbol of the native coin of the network.")]),t._v(" "),s("h2",{attrs:{id:"abstract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),s("p",[t._v("The new method "),s("code",[t._v("eth_symbol")]),t._v(" ("),s("code",[t._v("eth_")]),t._v("-namespaced) has no parameters and returns a string of the native coin of the network. For the Ethereum mainnet this will be "),s("code",[t._v("ETH")]),t._v(", other networks will have other symbols.")]),t._v(" "),s("h2",{attrs:{id:"motivation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),s("p",[t._v("Wallets that deal with multiple networks need some basic information for every blockchain that they connect to. One of those things is the symbol of the native coin of the network. Instead of requiring the user to research and manually add the symbol it could be provided to the wallet via this proposed JSON-RPC endpoint and used automatically. There are lists of networks with symbols like https://github.com/ethereum-lists/chains where a user can manually look up the correct values. But this information could easily come from the network itself.")]),t._v(" "),s("h2",{attrs:{id:"specification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),s("p",[t._v("Method: "),s("code",[t._v("eth_symbol")]),t._v(".")]),t._v(" "),s("p",[t._v("Params: none.")]),t._v(" "),s("p",[t._v("Returns: "),s("code",[t._v("result")]),t._v(" - the native coin symbol, string")]),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("curl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POST")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"jsonrpc":"2.0","method":"eth_symbol","params":[],"id":1}\'')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Result")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jsonrpc"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ETH"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h2",{attrs:{id:"rationale"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[t._v("#")]),t._v(" Rationale")]),t._v(" "),s("p",[t._v("This endpoint is similar to "),s("RouterLink",{attrs:{to:"/eip-695.html"}},[t._v("EIP-695")]),t._v(" but it provides the symbol instead of "),s("code",[t._v("chainId")]),t._v(". It provides functionality that is already there for "),s("RouterLink",{attrs:{to:"/eip-20.html"}},[t._v("ERC-20")]),t._v(" tokens, but not yet for the native coin of the network. Alternative naming of "),s("code",[t._v("eth_nativeCurrencySymbol")]),t._v(" was considered, but the context and the fact that it just returns one value makes it clear that that it returns the symbol for the native coin of the network.")],1),t._v(" "),s("h2",{attrs:{id:"security-considerations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[t._v("#")]),t._v(" Security Considerations")]),t._v(" "),s("p",[t._v("It is a read only endpoint. The information is only as trusted as the JSON-RPC node itself, it could supply wrong information and thereby trick the user in believing he/she is dealing with another native coin.")]),t._v(" "),s("h2",{attrs:{id:"copyright"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),s("p",[t._v("Copyright and related rights waived via "),s("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC0"),s("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=n.exports}}]);