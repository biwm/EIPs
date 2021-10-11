(window.webpackJsonp=window.webpackJsonp||[]).push([[374],{798:function(t,e,a){"use strict";a.r(e);var s=a(46),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[t._v("#")]),t._v(" Simple Summary")]),t._v(" "),a("p",[t._v("This EIP proposes to make contract creation fail on an account with nonempty code or non-zero nonce.")]),t._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),a("p",[t._v("Some test cases in the consensus test suite try to deploy a contract at an address already with nonempty code. Although such cases can virtually never happen on the main network before the Constantinople fork block, the test cases detected discrepancies in clients' behavior.  Currently, the Yellow Paper says that the contract creation starts with the empty code and the initial nonce even in the case of address collisions. To simplify the semantics, this EIP proposes that address collisions cause failures of contract creation.")]),t._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),a("p",[t._v("This EIP has no practical relevance to the main net history, but simplifies testing and reasoning.")]),t._v(" "),a("p",[t._v("This EIP has no effects after Constantinople fork because "),a("RouterLink",{attrs:{to:"/eip-86.html"}},[t._v("EIP-86")]),t._v(" contains the changes proposed in this EIP. Even before the Constantinople fork, this EIP has no practical relevance because the change is visible only in case of a hash collision of keccak256.")],1),t._v(" "),a("p",[t._v("Regarding testing, this EIP relieves clients from supporting reversion of code overwriting.")]),t._v(" "),a("p",[t._v("Regarding reasoning, this EIP establishes an invariant that non-empty code is never modified.")]),t._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),a("p",[t._v("If "),a("code",[t._v("block.number >= 0")]),t._v(", when a contract creation is on an account with non-zero nonce or non-empty code, the creation fails as if init code execution resulted in an exceptional halt.  This applies to contract creation triggered by a contract creation transaction and by CREATE instruction.")]),t._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[t._v("#")]),t._v(" Rationale")]),t._v(" "),a("p",[t._v("It seems impractical to implement never-used features just for passing tests.  Client implementations will be simpler with this EIP.")]),t._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[t._v("#")]),t._v(" Backwards Compatibility")]),t._v(" "),a("p",[t._v("This EIP is backwards compatible on the main network.")]),t._v(" "),a("h2",{attrs:{id:"test-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[t._v("#")]),t._v(" Test Cases")]),t._v(" "),a("p",[t._v("At least the BlockchainTest called "),a("code",[t._v("createJS\\_ExampleContract\\_d0g0v0\\_EIP158")]),t._v(" will distinguish clients that implement this EIP.")]),t._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),a("p",[t._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC0"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=i.exports}}]);