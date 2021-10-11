(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{389:function(e,t,a){e.exports=a.p+"assets/img/run3.total-bars-5.afb8c0d9.png"},390:function(e,t,a){e.exports=a.p+"assets/img/run3.total-bars-6.e681ef3c.png"},391:function(e,t,a){e.exports=a.p+"assets/img/geth_processing.b35d1486.png"},392:function(e,t,a){e.exports=a.p+"assets/img/SLOAD-run3.09565c36.png"},393:function(e,t,a){e.exports=a.p+"assets/img/BALANCE-run3.76182183.png"},558:function(e,t,a){"use strict";a.r(t);var s=a(46),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"simple-summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),s("p",[e._v("This EIP proposes repricing certain opcodes, to obtain a good balance between gas expenditure and resource consumption.")]),e._v(" "),s("h2",{attrs:{id:"abstract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),s("p",[e._v("The growth of the Ethereum state has caused certain opcodes to be more resource-intensive at this point than\nthey were previously. This EIP proposes to raise the "),s("code",[e._v("gasCost")]),e._v(" for those opcodes.")]),e._v(" "),s("h2",{attrs:{id:"motivation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),s("p",[e._v("An imbalance between the price of an operation and the resource consumption (CPU time, memory etc)\nhas several drawbacks:")]),e._v(" "),s("ul",[s("li",[e._v("It could be used for attacks, by filling blocks with underpriced operations which causes excessive block processing time.")]),e._v(" "),s("li",[e._v("Underpriced opcodes cause a skewed block gas limit, where sometimes blocks finish quickly but other blocks with similar gas use finish slowly.")])]),e._v(" "),s("p",[e._v("If operations are well-balanced, we can maximise the block gaslimit and have a more stable processing time.")]),e._v(" "),s("h2",{attrs:{id:"specification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),s("p",[e._v("At block "),s("code",[e._v("N")]),e._v(",")]),e._v(" "),s("ul",[s("li",[e._v("The "),s("code",[e._v("SLOAD")]),e._v(" ("),s("code",[e._v("0x54")]),e._v(") operation changes from "),s("code",[e._v("200")]),e._v(" to "),s("code",[e._v("800")]),e._v(" gas,")]),e._v(" "),s("li",[e._v("The "),s("code",[e._v("BALANCE")]),e._v(" ("),s("code",[e._v("0x31")]),e._v(") operation changes from "),s("code",[e._v("400")]),e._v(" to "),s("code",[e._v("700")]),e._v(" gas,")]),e._v(" "),s("li",[e._v("The "),s("code",[e._v("EXTCODEHASH")]),e._v(" ("),s("code",[e._v("0x3F")]),e._v(") operation changes from "),s("code",[e._v("400")]),e._v(" to "),s("code",[e._v("700")]),e._v(" gas,")]),e._v(" "),s("li",[e._v("A new opcode, "),s("code",[e._v("SELFBALANCE")]),e._v(" is introduced at "),s("code",[e._v("0x47")]),e._v(".\n"),s("ul",[s("li",[s("code",[e._v("SELFBALANCE")]),e._v(" pops "),s("code",[e._v("0")]),e._v(" arguments off the stack,")]),e._v(" "),s("li",[s("code",[e._v("SELFBALANCE")]),e._v(" pushes the "),s("code",[e._v("balance")]),e._v(" of the current address to the stack,")]),e._v(" "),s("li",[s("code",[e._v("SELFBALANCE")]),e._v(" is priced as "),s("code",[e._v("GasFastStep")]),e._v(", at "),s("code",[e._v("5")]),e._v(" gas.")])])])]),e._v(" "),s("h2",{attrs:{id:"rationale"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),s("p",[e._v("Here are two charts, taken from a full sync using Geth. The execution time was measured for every opcode, and aggregated for 10K blocks. These bar charts show the top 25 'heavy' opcodes in the ranges 5M to 6M and 6M to 7M:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(389),alt:"bars1"}}),e._v(" "),s("img",{attrs:{src:a(390),alt:"bars2"}})]),e._v(" "),s("p",[e._v("Note: It can also be seen that the "),s("code",[e._v("SLOAD")]),e._v(" moves towards the top position. The "),s("code",[e._v("GASPRICE")]),e._v(" ("),s("code",[e._v("0x3a")]),e._v(") opcode has position one which I believe can be optimized away within the client -- which is not the case with "),s("code",[e._v("SLOAD")]),e._v("/"),s("code",[e._v("BALANCE")]),e._v(".")]),e._v(" "),s("p",[e._v("Here is another chart, showing a full sync with Geth. It represents the blocks "),s("code",[e._v("0")]),e._v(" to "),s("code",[e._v("5.7M")]),e._v(", and highlights what the block processing time is spent on.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(391),alt:"geth"}})]),e._v(" "),s("p",[e._v("It can be seen that "),s("code",[e._v("storage_reads")]),e._v(" and "),s("code",[e._v("account_reads")]),e._v(" are the two most significant factors contributing to the block processing time.")]),e._v(" "),s("h3",{attrs:{id:"sload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sload"}},[e._v("#")]),e._v(" "),s("code",[e._v("SLOAD")])]),e._v(" "),s("p",[s("code",[e._v("SLOAD")]),e._v(" was repriced at "),s("RouterLink",{attrs:{to:"/eip-150.html"}},[e._v("EIP-150")]),e._v(", from "),s("code",[e._v("50")]),e._v(" to "),s("code",[e._v("200")]),e._v(".\nThe following graph shows a go-ethereum full sync, where each data point represents\n10K blocks. During those 10K blocks, the execution time for the opcode was aggregated.")],1),e._v(" "),s("p",[s("img",{attrs:{src:a(392),alt:"graph"}})]),e._v(" "),s("p",[e._v("It can be seen that the repricing at "),s("RouterLink",{attrs:{to:"/eip-150.html"}},[e._v("EIP-150")]),e._v(" caused a steep drop, from around "),s("code",[e._v("67")]),e._v(" to "),s("code",[e._v("23")]),e._v(".\nAround block "),s("code",[e._v("5M")]),e._v(", it started reaching pre-"),s("RouterLink",{attrs:{to:"/eip-150.html"}},[e._v("EIP-150")]),e._v(" levels, and at block "),s("code",[e._v("7M")]),e._v("\nit was averaging on around "),s("code",[e._v("150")]),e._v(" - more than double pre-eip-150 levels.")],1),e._v(" "),s("p",[e._v("Increasing the cost of "),s("code",[e._v("SLOAD")]),e._v(" by "),s("code",[e._v("4")]),e._v(" would bring it back down to around "),s("code",[e._v("40")]),e._v(".\nIt is to be expected that it will rise again in the future, and may need future repricing, unless\nstate clearing efforts are implemented before that happens.")]),e._v(" "),s("h3",{attrs:{id:"balance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#balance"}},[e._v("#")]),e._v(" "),s("code",[e._v("BALANCE")])]),e._v(" "),s("p",[s("code",[e._v("BALANCE")]),e._v(" (a.k.a "),s("code",[e._v("EXTBALANCE")]),e._v(") is an operation which fetches data from the state trie. It was repriced at "),s("RouterLink",{attrs:{to:"/eip-150.html"}},[e._v("EIP-150")]),e._v(" from "),s("code",[e._v("20")]),e._v(" to "),s("code",[e._v("400")]),e._v(".")],1),e._v(" "),s("p",[s("img",{attrs:{src:a(393),alt:"graph"}})]),e._v(" "),s("p",[e._v("It is comparable to "),s("code",[e._v("EXTCODESIZE")]),e._v(" and "),s("code",[e._v("EXTCODEHASH")]),e._v(", which are priced at "),s("code",[e._v("700")]),e._v(" already.")]),e._v(" "),s("p",[e._v("It has a built-in high variance, since it is often used for checking the balance of "),s("code",[e._v("this")]),e._v(",\nwhich is a inherently cheap operation, however, it can be used to lookup the balance of arbitrary account which often require trie (disk) access.")]),e._v(" "),s("p",[e._v("In hindsight, it might have been a better choice to have two\nopcodes: "),s("code",[e._v("EXTBALANCE(address)")]),e._v(" and "),s("code",[e._v("SELFBALANCE")]),e._v(", and have two different prices.")]),e._v(" "),s("ul",[s("li",[e._v("This EIP proposes to extend the current opcode set.\n"),s("ul",[s("li",[e._v("Unfortunately, the opcode span "),s("code",[e._v("0x3X")]),e._v(" is already full, hence the suggestion to place "),s("code",[e._v("SELFBALANCE")]),e._v(" in the "),s("code",[e._v("0x4X")]),e._v(" range.")]),e._v(" "),s("li",[e._v("As for why it is priced at "),s("code",[e._v("5")]),e._v(" ("),s("code",[e._v("GasFastStep")]),e._v(") instead of "),s("code",[e._v("2")]),e._v(" ("),s("code",[e._v("GasQuickStep")]),e._v("), like other similar operations: the EVM execution engine still needs a lookup into the (cached) trie, and "),s("code",[e._v("balance")]),e._v(", unlike "),s("code",[e._v("gasPrice")]),e._v(" or "),s("code",[e._v("timeStamp")]),e._v(", is not constant during the execution, so it has a bit more inherent overhead.")])])])]),e._v(" "),s("h3",{attrs:{id:"extcodehash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extcodehash"}},[e._v("#")]),e._v(" "),s("code",[e._v("EXTCODEHASH")])]),e._v(" "),s("p",[s("code",[e._v("EXTCODEHASH")]),e._v(" was introduced in Constantinople, with "),s("RouterLink",{attrs:{to:"/eip-1052.html"}},[e._v("EIP-1052")]),e._v(". It was priced at "),s("code",[e._v("400")]),e._v(" with the reasoning:")],1),e._v(" "),s("blockquote",[s("p",[e._v("The gas cost is the same as the gas cost for the "),s("code",[e._v("BALANCE")]),e._v(" opcode because the execution of the "),s("code",[e._v("EXTCODEHASH")]),e._v(" requires the same account lookup as in "),s("code",[e._v("BALANCE")]),e._v(".")])]),e._v(" "),s("p",[e._v("Ergo, if we increase "),s("code",[e._v("BALANCE")]),e._v(", we should also increase "),s("code",[e._v("EXTCODEHASH")])]),e._v(" "),s("h2",{attrs:{id:"backwards-compatibility"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),s("p",[e._v("The changes require a hardfork. The changes have the following consequences:")]),e._v(" "),s("ul",[s("li",[e._v("Certain calls will become more expensive.")]),e._v(" "),s("li",[e._v("Default-functions which access the storage and may in some cases require more than"),s("code",[e._v("2300")]),e._v(" gas (the minimum gas that is always available in calls).")]),e._v(" "),s("li",[e._v("Contracts that assume a certain fixed gas cost for calls (or internal sections) may cease to function.\n"),s("ul",[s("li",[e._v("A fixed gas cost is specified in "),s("RouterLink",{attrs:{to:"/eip-165.html"}},[e._v("ERC-165")]),e._v(" and implementations of this interface do use the affected opcodes.\n"),s("ul",[s("li",[e._v("The ERC-165 method "),s("code",[e._v("supportsInterface")]),e._v(" must return a "),s("code",[e._v("bool")]),e._v(" and use at most "),s("code",[e._v("30,000")]),e._v(" gas.")]),e._v(" "),s("li",[e._v("The two example implementations from the EIP were, at the time of writing\n"),s("ol",[s("li",[s("code",[e._v("586")]),e._v(" gas for any input, and")]),e._v(" "),s("li",[s("code",[e._v("236")]),e._v(" gas, but increases linearly with a higher number of supported interfaces")])])])])],1),e._v(" "),s("li",[e._v("It is unlikely that any ERC-165 "),s("code",[e._v("supportsInterface")]),e._v(" implementation will go above "),s("code",[e._v("30.000")]),e._v(" gas. That would require that the second variant is used, and thirty:ish interfaces are supported.")]),e._v(" "),s("li",[e._v("However, these operations have already been repriced earlier, so there is a historical precedent that 'the gascost for these operations may change', which should have prevented such fixed-gas-cost assumptions from being implemented.")])])])]),e._v(" "),s("p",[e._v("I expect that certain patterns will be less used, for example the use of multiple modifiers which "),s("code",[e._v("SLOAD")]),e._v("s the same opcode will be merged into one. It may also lead to less "),s("code",[e._v("log")]),e._v(" operations containing "),s("code",[e._v("SLOAD")]),e._v("ed values that are not strictly necessary.")]),e._v(" "),s("h2",{attrs:{id:"test-cases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[e._v("#")]),e._v(" Test Cases")]),e._v(" "),s("p",[e._v("Testcases that should be implemented:")]),e._v(" "),s("ul",[s("li",[e._v("Test that "),s("code",[e._v("selfbalance == balance(address)")]),e._v(",")]),e._v(" "),s("li",[e._v("Test that "),s("code",[e._v("balance(this)")]),e._v(" costs as before,")]),e._v(" "),s("li",[e._v("Test that "),s("code",[e._v("selfbalance")]),e._v(" does not pop from stack")]),e._v(" "),s("li",[e._v("Gascost verification of "),s("code",[e._v("SLOAD")]),e._v(", "),s("code",[e._v("EXTCODEHASH")]),e._v(" and "),s("code",[e._v("SELFBALANCE")])]),e._v(" "),s("li",[e._v("Verify that "),s("code",[e._v("SELFBALANCE")]),e._v(" is invalid before Istanbul")])]),e._v(" "),s("p",[e._v("Some testcases have been implemented as statetests at https://github.com/holiman/IstanbulTests/tree/master/GeneralStateTests")]),e._v(" "),s("h2",{attrs:{id:"implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),s("p",[e._v("This EIP has not yet been implemented in any client.\nBoth these opcodes have been repriced before, and the client internals for managing reprices are already in place.")]),e._v(" "),s("h3",{attrs:{id:"selfbalance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#selfbalance"}},[e._v("#")]),e._v(" "),s("code",[e._v("SELFBALANCE")])]),e._v(" "),s("p",[e._v("This is the implementation for the new opcode in go-ethereum:")]),e._v(" "),s("div",{staticClass:"language-golang line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("\nfunc opSelfBalance(pc *uint64, interpreter *EVMInterpreter, contract *Contract, memory *Memory, stack *Stack) ([]byte, error) {\n\tstack.push(interpreter.intPool.get().Set(interpreter.evm.StateDB.GetBalance(contract.Address())\n\treturn nil, nil\n}\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("h2",{attrs:{id:"security-considerations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[e._v("#")]),e._v(" Security considerations")]),e._v(" "),s("ul",[s("li",[e._v("See backwards compatibility section.")]),e._v(" "),s("li",[e._v("There are no special edgecases regarding "),s("code",[e._v("SELFBALANCE")]),e._v(", if we define it as "),s("code",[e._v("BALANCE")]),e._v(" with "),s("code",[e._v("address")]),e._v(" instead of popping an address from the stack -- since "),s("code",[e._v("BALANCE")]),e._v(" is already well-defined.")]),e._v(" "),s("li",[e._v("It should be investigated if Solidity contains any hardcoded expectations on the gas cost of these operations.")]),e._v(" "),s("li",[e._v("In many cases, a recipient of "),s("code",[e._v("ether")]),e._v(" from a "),s("code",[e._v("CALL")]),e._v(" will want to issue a "),s("code",[e._v("LOG")]),e._v(". The "),s("code",[e._v("LOG")]),e._v(" operation costs "),s("code",[e._v("375")]),e._v(" plus "),s("code",[e._v("375")]),e._v(" per topic. If the "),s("code",[e._v("LOG")]),e._v(" also wants to do an "),s("code",[e._v("SLOAD")]),e._v(", this change may make some such transfers fail.")])]),e._v(" "),s("h2",{attrs:{id:"copyright"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),s("p",[e._v("Copyright and related rights waived via "),s("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),s("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);