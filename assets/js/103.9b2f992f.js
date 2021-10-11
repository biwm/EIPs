(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{512:function(e,t,a){"use strict";a.r(t);var i=a(46),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),a("p",[e._v("Include an explicit definition of the acceptable timestamp drift in the protocol specification.")]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("On the basis that both Geth and Parity implement the same timestamp validation requirements, this should be written into the reference specification.")]),e._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v("There is a lack of clarity about how accurate timestamps in the block header must be. The yellow paper describes the timestamp as")]),e._v(" "),a("blockquote",[a("p",[e._v("A scalar value equal to the reasonable output of Unix’s time() at this block’s inception")])]),e._v(" "),a("p",[e._v("This causes "),a("a",{attrs:{href:"https://ethereum.stackexchange.com/questions/5924/how-do-ethereum-mining-nodes-maintain-a-time-consistent-with-the-network/5926#5926",target:"_blank",rel:"noopener noreferrer"}},[e._v("confusion"),a("OutboundLink")],1),e._v(" about the safe use of the "),a("code",[e._v("TIMESTAMP")]),e._v(" opcode (solidity's "),a("code",[e._v("block.timestamp")]),e._v(" or "),a("code",[e._v("now")]),e._v(") in smart contract development.")]),e._v(" "),a("p",[e._v("Differing interpretations of 'reasonable' may create a risk of consenus failures.")]),e._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("p",[e._v("The yellow paper should define a timestamp as:")]),e._v(" "),a("blockquote",[a("p",[e._v("A scalar value equal to the output of Unix’s time() at this block’s inception. For the purpose of block validation, it must be greater than the previous block's timestamp, and no more than 15 seconds greater than system time.")])]),e._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("p",[e._v("Both "),a("a",{attrs:{href:"https://github.com/ethereum/go-ethereum/blob/4e474c74dc2ac1d26b339c32064d0bac98775e77/consensus/ethash/consensus.go#L45",target:"_blank",rel:"noopener noreferrer"}},[e._v("Geth"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://github.com/paritytech/parity-ethereum/blob/73db5dda8c0109bb6bc1392624875078f973be14/ethcore/src/verification/verification.rs#L296-L307",target:"_blank",rel:"noopener noreferrer"}},[e._v("Parity"),a("OutboundLink")],1),e._v(" reject blocks with timestamp more than 15 seconds in the future. This establishes a defacto standard, which should be made explicit in the reference specification.")]),e._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),a("p",[e._v("It may be necessary to relax this requirement for blocks which were mined early in the main chain's history, if they would be considered invalid.")]),e._v(" "),a("h2",{attrs:{id:"test-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[e._v("#")]),e._v(" Test Cases")]),e._v(" "),a("p",[e._v("These would be important to have.")]),e._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("p",[e._v('_The implementations must be completed before any EIP is given status "Final", but it need not be completed before the EIP is accepted. While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.\n_')]),e._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),a("p",[e._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);