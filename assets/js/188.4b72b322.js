(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{600:function(e,t,a){"use strict";a.r(t);var r=a(46),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),a("p",[e._v("This change reduces the gas cost of using precompiled contracts.")]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("Reduce the base gas cost of calling precompiles using "),a("code",[e._v("STATICCALL")]),e._v(" from 700 to 40. This should allow more efficient use of precompiles as well as precompiles with a total cost below 700.")]),e._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v('The Spurious Dragon hard fork increased the cost of calls significantly to account for loading contract code from the state without making an exception for precompiles, whose "code" is always loaded.')]),e._v(" "),a("p",[e._v("This made use of certain precompiles impractical.")]),e._v(" "),a("p",[e._v("FIXME: extend this with recent reasoning about ECC repricings.")]),e._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("p",[e._v("After block "),a("code",[e._v("HF")]),e._v(" the "),a("code",[e._v("STATICCALL")]),e._v(" ("),a("code",[e._v("0xfa")]),e._v(") instruction charges different basic gas cost (G"),a("sub",[e._v("call")]),e._v(" in "),a("a",{attrs:{href:"https://github.com/ethereum/yellowpaper",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yellow Paper"),a("OutboundLink")],1),e._v("'s notation) depending on the destination address provided:")]),e._v(" "),a("ul",[a("li",[e._v("for precompiles (address range as per "),a("RouterLink",{attrs:{to:"/eip-1352.html"}},[e._v("EIP-1352")]),e._v(") the cost is "),a("code",[e._v("40")])],1),e._v(" "),a("li",[e._v("for every other address the cost remains unchanged ("),a("code",[e._v("700")]),e._v(")")])]),e._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("p",[e._v("Only the "),a("code",[e._v("STATICCALL")]),e._v(" instruction was changed to reduce the impact of the change. This should not be a limiting factor, given precompiles (currently) do not have a state and cannot change the state.\nHowever, contracts created and deployed before Byzantium likely will not use "),a("code",[e._v("STATICCALL")]),e._v(" and as a result this change will not reduce their costs.")]),e._v(" "),a("p",[e._v("Contrary to EIP-1109 gas reduction to "),a("code",[e._v("0")]),e._v(" is not proposed. The cost "),a("code",[e._v("40")]),e._v(" is kept as a cost representing the context switching needed.")]),e._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),a("p",[e._v("This EIP should be backwards compatible. The only effect is that the cost is reduced. Since the cost is not reduced to zero, it should not be possible for a malicious proxy contract, when deployed before\nthe "),a("code",[e._v("HF")]),e._v(", to do any state changing operation.")]),e._v(" "),a("h2",{attrs:{id:"test-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[e._v("#")]),e._v(" Test Cases")]),e._v(" "),a("p",[e._v("TBA")]),e._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("p",[e._v("TBA")]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("p",[e._v("This has been previously suggested as part of "),a("RouterLink",{attrs:{to:"/eip-1109.html"}},[e._v("EIP-1109")]),e._v(" and "),a("a",{attrs:{href:"https://github.com/ethereum/EIPs/pull/1231",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIP-1231"),a("OutboundLink")],1),e._v(".\nHowever EIP-1109 was later changed to a very different approach. The author "),a("a",{attrs:{href:"https://ethereum-magicians.org/t/eip-1109-remove-call-costs-for-precompiled-contracts/447/7",target:"_blank",rel:"noopener noreferrer"}},[e._v("has suggested to change EIP-1109"),a("OutboundLink")],1),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"acknowledgements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgements"}},[e._v("#")]),e._v(" Acknowledgements")]),e._v(" "),a("p",[e._v("Jordi Baylina (@jbaylina) and Matthew Di Ferrante (@mattdf) who have proposed this before.")]),e._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),a("p",[e._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);