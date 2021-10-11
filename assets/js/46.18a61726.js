(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{458:function(t,e,s){"use strict";s.r(e);var a=s(46),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"simple-summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[t._v("#")]),t._v(" Simple Summary")]),t._v(" "),s("p",[t._v("To specify the mapping protocol between resources stored on IPFS and ENS(Ethereum Naming Service).")]),t._v(" "),s("h2",{attrs:{id:"abstract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),s("p",[t._v("The following standard details the implementation of how to combine the IPFS cryptographic hash unique fingerprint with ENS public resolver. This standard provides a functionality to get and set IPFS online resources to ENS resolver.")]),t._v(" "),s("p",[t._v("We think that this implementation is not only aim to let more developers and communities to provide more use cases, but also leverage the human-readable features to gain more user adoption accessing decentralized resources. We considered the IPFS ENS resolver mapping standard a cornerstone for building future Web3.0 service.")]),t._v(" "),s("h2",{attrs:{id:"motivation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),s("p",[t._v("To build fully decentralized web service, it’s necessary to have a decentralized file storage system. Here comes the IPFS, for three following advantages :")]),t._v(" "),s("ul",[s("li",[t._v("Address large amounts of data, and has unique cryptographic hash for every record.")]),t._v(" "),s("li",[t._v("Since IPFS is also based on peer to peer network, it can be really helpful to deliver large amounts of data to users, with safer way and lower the millions of cost for the bandwidth.")]),t._v(" "),s("li",[t._v("IPFS stores files in high efficient way via tracking version history for every file, and removing the duplications across the network.")])]),t._v(" "),s("p",[t._v("Those features makes perfect match for integrating into ENS, and these make users can easily access content through ENS, and show up in the normal browser.")]),t._v(" "),s("h2",{attrs:{id:"specification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),s("p",[t._v("The condition now is that the IPFS file fingerprint using base58 and in the meantime, the Ethereum uses hex in API to encode the binary data. So that need a way to process the condition requires not only we need to transfer from IPFS to Ethereum, but also need to convert it back.")]),t._v(" "),s("p",[t._v("To solve these requirements, we can use binary buffer bridging that gap."),s("br"),t._v("\nWhen mapping the IPFS base58 string to ENS resolver, first we convert the Base58 to binary buffer, turn the buffer to hex encrypted format, and save to the contract. Once we want to get the IPFS resources address represented by the specific ENS, we can first find the mapping information stored as hex format before, extract the hex format to binary buffer, and finally turn that to IPFS Base58 address string.")]),t._v(" "),s("h2",{attrs:{id:"rationale"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[t._v("#")]),t._v(" Rationale")]),t._v(" "),s("p",[t._v("To implement the specification, need two methods from ENS public resolver contract, when we want to store IPFS file fingerprint to contract, convert the Base58 string identifier to the hex format and invoke the "),s("code",[t._v("setMultihash")]),t._v(" method below :")]),t._v(" "),s("div",{staticClass:"language-solidity line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMultihash")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),t._v(" hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("only_owner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Whenever users need to visit the ENS content, we call the "),s("code",[t._v("multihash")]),t._v(" method to get the IPFS hex data, transfer to the Base58 format, and return the IPFS resources to use.")]),t._v(" "),s("div",{staticClass:"language-solidity line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("multihash")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"test-cases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[t._v("#")]),t._v(" Test Cases")]),t._v(" "),s("p",[t._v("To implement the way to transfer from base58 to hex format and the reverse one, using the ‘multihashes’ library to deal with the problem."),s("br"),t._v("\nThe library link : "),s("a",{attrs:{href:"https://www.npmjs.com/package/multihashes",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.npmjs.com/package/multihashes"),s("OutboundLink")],1),s("br"),t._v("\nTo implement the method transfer from IPFS(Base58) to hex format :")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" multihash "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'multihashes'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("toHex")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ipfsHash")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" buf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" multihash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromB58String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ipfsHash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0x'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" multihash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toHexString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("To implement the method transfer from hex format to IPFS(Base58) :")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" multihash "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'multihashes'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("toBase58")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("contentHash")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" hex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" contentHash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("substring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" buf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" multihash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromHexString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" multihash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toB58String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h2",{attrs:{id:"implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),s("p",[t._v("The use case can be implemented as browser extension. Users can easily download the extension, and easily get decentralized resources by just typing the ENS just like we normally type the DNS to browser the website. Solve the current pain for normal people can not easily visit the total decentralized website.")]),t._v(" "),s("p",[t._v("The workable implementation repository : "),s("a",{attrs:{href:"https://github.com/PortalNetwork/portal-network-browser-extension",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/PortalNetwork/portal-network-browser-extension"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"copyright"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),s("p",[t._v("Copyright and related rights waived via "),s("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC0"),s("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=n.exports}}]);