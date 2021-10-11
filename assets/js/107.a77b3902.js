(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{516:function(e,t,a){"use strict";a.r(t);var s=a(46),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"meta-reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meta-reference"}},[e._v("#")]),e._v(" Meta reference")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/eip-608.html"}},[e._v("Tangerine Whistle")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("FORK_BLKNUM")]),e._v(" "),a("th",[e._v("CHAIN_ID")]),e._v(" "),a("th",[e._v("CHAIN_NAME")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("2,463,000")]),e._v(" "),a("td",[e._v("1")]),e._v(" "),a("td",[e._v("Main net")])])])]),e._v(" "),a("h3",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("p",[e._v("If "),a("code",[e._v("block.number >= FORK_BLKNUM")]),e._v(", then:")]),e._v(" "),a("ul",[a("li",[e._v("Increase the gas cost of EXTCODESIZE to 700 (from 20).")]),e._v(" "),a("li",[e._v("Increase the base gas cost of EXTCODECOPY to 700 (from 20).")]),e._v(" "),a("li",[e._v("Increase the gas cost of BALANCE to 400 (from 20).")]),e._v(" "),a("li",[e._v("Increase the gas cost of SLOAD to 200 (from 50).")]),e._v(" "),a("li",[e._v("Increase the gas cost of CALL, DELEGATECALL, CALLCODE to 700 (from 40).")]),e._v(" "),a("li",[e._v("Increase the gas cost of SELFDESTRUCT to 5000 (from 0).")]),e._v(" "),a("li",[e._v("If SELFDESTRUCT hits a newly created account, it triggers an additional gas cost of 25000 (similar to CALLs).")]),e._v(" "),a("li",[e._v("Increase the recommended gas limit target to 5.5 million.")]),e._v(" "),a("li",[e._v('Define "all but one 64th" of '),a("code",[e._v("N")]),e._v(" as "),a("code",[e._v("N - floor(N / 64)")]),e._v(".")]),e._v(" "),a("li",[e._v("If a call asks for more gas than the maximum allowed amount (i.e. the total amount of gas remaining in the parent after subtracting the gas cost of the call and memory expansion), do not return an OOG error; instead, if a call asks for more gas than all but one 64th of the maximum allowed amount, call with all but one 64th of the maximum allowed amount of gas (this is equivalent to a version of EIP-90"),a("sup",[a("a",{attrs:{href:"https://github.com/ethereum/EIPs/issues/90",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),a("OutboundLink")],1)]),e._v(" plus EIP-114"),a("sup",[a("a",{attrs:{href:"https://github.com/ethereum/EIPs/issues/114",target:"_blank",rel:"noopener noreferrer"}},[e._v("2"),a("OutboundLink")],1)]),e._v("). CREATE only provides all but one 64th of the parent gas to the child call.")])]),e._v(" "),a("p",[e._v("That is, substitute:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("        extra_gas = (not ext.account_exists(to)) * opcodes.GCALLNEWACCOUNT + \\\n            (value > 0) * opcodes.GCALLVALUETRANSFER\n        if compustate.gas < gas + extra_gas:\n            return vm_exception('OUT OF GAS', needed=gas+extra_gas)\n        submsg_gas = gas + opcodes.GSTIPEND * (value > 0)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("With:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("        def max_call_gas(gas):\n          return gas - (gas // 64)\n\n        extra_gas = (not ext.account_exists(to)) * opcodes.GCALLNEWACCOUNT + \\\n            (value > 0) * opcodes.GCALLVALUETRANSFER\n        if compustate.gas < extra_gas:\n            return vm_exception('OUT OF GAS', needed=extra_gas)\n        if compustate.gas < gas + extra_gas:\n            gas = min(gas, max_call_gas(compustate.gas - extra_gas))\n        submsg_gas = gas + opcodes.GSTIPEND * (value > 0)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("h3",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("p",[e._v('Recent denial-of-service attacks have shown that opcodes that read the state tree are under-priced relative to other opcodes. There are software changes that have been made, are being made and can be made in order to mitigate the situation; however, the fact will remain that such opcodes will be by a substantial margin the easiest known mechanism to degrade network performance via transaction spam. The concern arises because it takes a long time to read from disk, and is additionally a risk to future sharding proposals as the "attack transactions" that have so far been most successful in degrading network performance would also require tens of megabytes to provide Merkle proofs for. This EIP increases the cost of storage reading opcodes to address this concern. The costs have been derived from an updated version of the calculation table used to generate the 1.0 gas costs: https://docs.google.com/spreadsheets/d/15wghZr-Z6sRSMdmRmhls9dVXTOpxKy8Y64oy9MvDZEQ/edit#gid=0; the rules attempt to target a limit of 8 MB of data that needs to be read in order to process a block, and include an estimate of 500 bytes for a Merkle proof for SLOAD and 1000 for an account.')]),e._v(" "),a("p",[e._v("This EIP aims to be simple, and adds a flat penalty of 300 gas on top of the costs calculated in this table to account for the cost of loading the code (~17–21 kb in the worst case).")]),e._v(" "),a("p",[e._v("The EIP 90 gas mechanic is introduced because without it, all current contracts that make calls would stop working as they use an expression like "),a("code",[e._v("msg.gas - 40")]),e._v(' to determine how much gas to make a call with, relying on the gas cost of calls being 40. Additionally, EIP 114 is introduced because, given that we are making the cost of a call higher and less predictable, we have an opportunity to do it at no extra cost to currently available guarantees, and so we also achieve the benefit of replacing the call stack depth limit with a "softer" gas-based restriction, thereby eliminating call stack depth attacks as a class of attack that contract developers have to worry about and hence increasing contract programming safety. Note that with the given parameters, the de-facto maximum call stack depth is limited to ~340 (down from ~1024), mitigating the harm caused by any further potential quadratic-complexity DoS attacks that rely on calls.')]),e._v(" "),a("p",[e._v("The gas limit increase is recommended so as to preserve the de-facto transactions-per-second processing capability of the system for average contracts.")]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ol",[a("li",[e._v("EIP-90, https://github.com/ethereum/EIPs/issues/90")]),e._v(" "),a("li",[e._v("EIP-114, https://github.com/ethereum/EIPs/issues/114")])])])}),[],!1,null,null,null);t.default=r.exports}}]);