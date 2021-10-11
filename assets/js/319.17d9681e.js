(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{741:function(t,v,e){"use strict";e.r(v);var _=e(46),a=Object(_.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"simple-summary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[t._v("#")]),t._v(" Simple Summary")]),t._v(" "),e("p",[t._v("Remove gas refunds for SELFDESTRUCT, and restrict gas refunds for SSTORE to one specific case.")]),t._v(" "),e("h2",{attrs:{id:"motivation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),e("p",[t._v('Gas refunds for SSTORE and SELFDESTRUCT were originally introduced to motivate application developers to write applications that practice "good state hygiene", clearing storage slots and contracts that are no longer needed. However, they are not widely used for this, and poor state hygiene continues to be the norm. It is now widely accepted that the only solution to state growth is some form of statelessness or state expiry, and if such a solution is implemented, then disused storage slots and contracts would start to be ignored automatically.')]),t._v(" "),e("p",[t._v("Gas refunds additionally have multiple harmful consequences:")]),t._v(" "),e("ul",[e("li",[t._v('Refunds give rise to GasToken. GasToken has benefits in moving gas space from low-fee periods to high-fee periods, but it also has downsides to the network, particularly in exacerbating state size (as state slots are effectively used as a "battery" to save up gas) and inefficiently clogging blockchain gas usage')]),t._v(" "),e("li",[t._v("Refunds increase block size variance. The theoretical maximum amount of actual gas consumed in a block is nearly twice the on-paper gas limit (as refunds add gas space for subsequent transactions in a block, though refunds are capped at 50% of a transaction's gas used). This is not fatal, but is still undesirable, especially given that refunds can be used to maintain 2x usage spikes for far longer than EIP 1559 can.")])]),t._v(" "),e("h3",{attrs:{id:"the-mutex-usecase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-mutex-usecase"}},[t._v("#")]),t._v(" The mutex usecase")]),t._v(" "),e("p",[t._v("There are two typical ways to implement mutexes: '0-1-0' and '1-2-1. Let's see how they differ")]),t._v(" "),e("ul",[e("li",[t._v("'0-1-0':\n"),e("ul",[e("li",[t._v("Istanbul: 1612")]),t._v(" "),e("li",[t._v("Berlin: 212")]),t._v(" "),e("li",[t._v("NoRefund: 20112")]),t._v(" "),e("li",[t._v("EIP-3403: 1112")])])]),t._v(" "),e("li",[t._v("'1-2-1':\n"),e("ul",[e("li",[t._v("Istanbul: 1612")]),t._v(" "),e("li",[t._v("Berlin: 212")]),t._v(" "),e("li",[t._v("NoRefund: 3012")]),t._v(" "),e("li",[t._v("EIP-3403: 3012")])])])]),t._v(" "),e("p",[e("strong",[t._v("Note")]),t._v(": In reality, there are never a negative gas cost, since the refund is capped at 0.5 * gasUsed.\nHowever, these tables show the negative values, since a more real-world scenario would likely spend the\nextra gas on other operations.'")]),t._v(" "),e("h2",{attrs:{id:"specification"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),e("h3",{attrs:{id:"parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Constant")]),t._v(" "),e("th",[t._v("Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("FORK_BLOCK")])]),t._v(" "),e("td",[t._v("TBD")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("SSTORE_REFUND_GAS")])]),t._v(" "),e("td",[t._v("19000")])])])]),t._v(" "),e("p",[t._v("For blocks where "),e("code",[t._v("block.number >= FORK_BLOCK")]),t._v(", the following changes apply.")]),t._v(" "),e("ol",[e("li",[t._v("Remove the "),e("code",[t._v("SELFDESTRUCT")]),t._v(" refund.")]),t._v(" "),e("li",[t._v("Remove the "),e("code",[t._v("SSTORE")]),t._v(" refund in all cases except for one specific case: if the "),e("em",[t._v("new value")]),t._v(" and "),e("em",[t._v("original value")]),t._v(" of the storage slot both equal 0 but the "),e("em",[t._v("current value")]),t._v(" does not (those terms being defined as in "),e("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-1283",target:"_blank",rel:"noopener noreferrer"}},[t._v("EIP-1283"),e("OutboundLink")],1),t._v("), refund "),e("code",[t._v("SSTORE_REFUND_GAS")]),t._v(" gas.")])]),t._v(" "),e("h2",{attrs:{id:"rationale"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[t._v("#")]),t._v(" Rationale")]),t._v(" "),e("p",[t._v("Preserving refunds in the "),e("code",[t._v("new = original = 0 != current")]),t._v(" case ensures that a few key use cases that deserve favorable gas cost treatment continue to receive favorable gas cost treatment, particularly:")]),t._v(" "),e("ul",[e("li",[t._v("Anti-reentrancy locks (typically flipped from 0 to 1 right before a child call begins, and then flipped back to 0 when the child call ends)")]),t._v(" "),e("li",[t._v('ERC20 approve-and-send (the "approved value" goes from zero to nonzero when the token transfer is approved, and then back to zero when the token transfer processes)')])]),t._v(" "),e("p",[t._v("It also preserves two key goals of EIP 3298:")]),t._v(" "),e("ol",[e("li",[t._v("Gas tokens continue to be non-viable, because each 19000 refund is only possible because of 19000 extra gas that was paid for flipping that storage slot from zero to nonzero earlier in the same transaction, so you can't clear some storage slots and use that saved gas to fill others.")]),t._v(" "),e("li",[t._v("The total amount of gas "),e("em",[t._v("spent on execution")]),t._v(" is capped at the gas limit. Every 19000 refund for flipping a storage slot non from zero -> zero is only possible because of 19000 extra gas paid for flipping that slot from zero -> nonzero earlier in the same transaction; that gas paid for a storage write and expansion that were both reverted and so do not actually need to be applied to the Merkle tree. Hence, this extra gas does not contribute to risk.")])]),t._v(" "),e("h2",{attrs:{id:"backwards-compatibility"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[t._v("#")]),t._v(" Backwards Compatibility")]),t._v(" "),e("p",[t._v("Refunds are currently only applied "),e("em",[t._v("after")]),t._v(" transaction execution, so they cannot affect how much gas is available to any particular call frame during execution. Hence, removing them will not break the ability of any code to execute, though it will render some applications economically nonviable.")]),t._v(" "),e("p",[t._v("Gas tokens in particular will become valueless. DeFi arbitrage bots, which today frequently use either established gas token schemes or a custom alternative to reduce on-chain costs, would benefit from rewriting their code to remove calls to these no-longer-functional gas storage mechanisms.")]),t._v(" "),e("h2",{attrs:{id:"test-cases"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[t._v("#")]),t._v(" Test Cases")]),t._v(" "),e("h3",{attrs:{id:"_2929-gas-costs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2929-gas-costs"}},[t._v("#")]),t._v(" 2929 Gas Costs")]),t._v(" "),e("p",[t._v("Note, there is a difference between 'hot' and 'cold' slots. This table shows the values as of "),e("RouterLink",{attrs:{to:"/eip-2929.html"}},[t._v("EIP-2929")]),t._v(" assuming that all touched storage slots were already 'hot' (the difference being a one-time cost of "),e("code",[t._v("2100")]),t._v(" gas).")],1),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Code")]),t._v(" "),e("th",[t._v("Used Gas")]),t._v(" "),e("th",[t._v("Refund")]),t._v(" "),e("th",[t._v("Original")]),t._v(" "),e("th",[t._v("1st")]),t._v(" "),e("th",[t._v("2nd")]),t._v(" "),e("th",[t._v("3rd")]),t._v(" "),e("th",[t._v("Effective gas (after refund)")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("0x60006000556000600055")])]),t._v(" "),e("td",[t._v("212")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("212")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x60006000556001600055")])]),t._v(" "),e("td",[t._v("20112")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("20112")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x60016000556000600055")])]),t._v(" "),e("td",[t._v("20112")]),t._v(" "),e("td",[t._v("19900")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("212")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x60016000556002600055")])]),t._v(" "),e("td",[t._v("20112")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("2")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("20112")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x60016000556001600055")])]),t._v(" "),e("td",[t._v("20112")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("20112")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x60006000556000600055")])]),t._v(" "),e("td",[t._v("3012")]),t._v(" "),e("td",[t._v("15000")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("-11988")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x60006000556001600055")])]),t._v(" "),e("td",[t._v("3012")]),t._v(" "),e("td",[t._v("2800")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("212")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x60006000556002600055")])]),t._v(" "),e("td",[t._v("3012")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("2")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("3012")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x60026000556000600055")])]),t._v(" "),e("td",[t._v("3012")]),t._v(" "),e("td",[t._v("15000")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("2")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("-11988")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x60026000556003600055")])]),t._v(" "),e("td",[t._v("3012")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("2")]),t._v(" "),e("td",[t._v("3")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("3012")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x60026000556001600055")])]),t._v(" "),e("td",[t._v("3012")]),t._v(" "),e("td",[t._v("2800")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("2")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("212")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x60026000556002600055")])]),t._v(" "),e("td",[t._v("3012")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("2")]),t._v(" "),e("td",[t._v("2")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("3012")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x60016000556000600055")])]),t._v(" "),e("td",[t._v("3012")]),t._v(" "),e("td",[t._v("15000")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("-11988")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x60016000556002600055")])]),t._v(" "),e("td",[t._v("3012")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("2")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("3012")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x60016000556001600055")])]),t._v(" "),e("td",[t._v("212")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("212")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x600160005560006000556001600055")])]),t._v(" "),e("td",[t._v("40118")]),t._v(" "),e("td",[t._v("19900")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("20218")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x600060005560016000556000600055")])]),t._v(" "),e("td",[t._v("5918")]),t._v(" "),e("td",[t._v("17800")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("-11882")])])])]),t._v(" "),e("h3",{attrs:{id:"with-eip-3403-partial-refunds"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#with-eip-3403-partial-refunds"}},[t._v("#")]),t._v(" With EIP-3403 partial refunds")]),t._v(" "),e("p",[t._v("If refunds were to be partially removed, as specified "),e("a",{attrs:{href:"https://github.com/ethereum/EIPs/pull/3403/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(", this would be the comparative table. "),e("strong",[t._v("This table also assumes touched storage slots were already 'hot'")]),t._v(".")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Code")]),t._v(" "),e("th",[t._v("Used Gas")]),t._v(" "),e("th",[t._v("Refund")]),t._v(" "),e("th",[t._v("Original")]),t._v(" "),e("th",[t._v("1st")]),t._v(" "),e("th",[t._v("2nd")]),t._v(" "),e("th",[t._v("3rd")]),t._v(" "),e("th",[t._v("Effective gas (after refund)")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("0x60006000556000600055")])]),t._v(" "),e("td",[t._v("212")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("212")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x60006000556001600055")])]),t._v(" "),e("td",[t._v("20112")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("20112")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x60016000556000600055")])]),t._v(" "),e("td",[t._v("20112")]),t._v(" "),e("td",[t._v("19000")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("1112")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x60016000556002600055")])]),t._v(" "),e("td",[t._v("20112")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("2")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("20112")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x60016000556001600055")])]),t._v(" "),e("td",[t._v("20112")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("20112")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x60006000556000600055")])]),t._v(" "),e("td",[t._v("3012")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("3012")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x60006000556001600055")])]),t._v(" "),e("td",[t._v("3012")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("3012")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x60006000556002600055")])]),t._v(" "),e("td",[t._v("3012")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("2")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("3012")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x60026000556000600055")])]),t._v(" "),e("td",[t._v("3012")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("2")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("3012")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x60026000556003600055")])]),t._v(" "),e("td",[t._v("3012")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("2")]),t._v(" "),e("td",[t._v("3")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("3012")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x60026000556001600055")])]),t._v(" "),e("td",[t._v("3012")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("2")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("3012")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x60026000556002600055")])]),t._v(" "),e("td",[t._v("3012")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("2")]),t._v(" "),e("td",[t._v("2")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("3012")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x60016000556000600055")])]),t._v(" "),e("td",[t._v("3012")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("3012")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x60016000556002600055")])]),t._v(" "),e("td",[t._v("3012")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("2")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("3012")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x60016000556001600055")])]),t._v(" "),e("td",[t._v("212")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("212")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x600160005560006000556001600055")])]),t._v(" "),e("td",[t._v("40118")]),t._v(" "),e("td",[t._v("19000")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("21118")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("0x600060005560016000556000600055")])]),t._v(" "),e("td",[t._v("5918")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("5918")])])])]),t._v(" "),e("h2",{attrs:{id:"security-considerations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[t._v("#")]),t._v(" Security Considerations")]),t._v(" "),e("p",[t._v("Refunds are not visible to transaction execution, so this should not have any impact on transaction execution logic.")]),t._v(" "),e("p",[t._v("The maximum amount of gas that can be spent on execution in a block is limited to the gas limit, if we do not count zero-to-nonzero SSTOREs that were later reset back to zero. It is okay to not count those, because if such an SSTORE is reset, storage is not expanded and the client does not need to actually adjust the Merke tree; the gas consumption is refunded, but the effort normally required by the client to process those opcodes is also cancelled. "),e("strong",[t._v("Clients should make sure to not do a storage write if "),e("code",[t._v("new_value = original_value")]),t._v("; this was a prudent optimization since the beginning of Ethereum but it becomes more important now.")])]),t._v(" "),e("h2",{attrs:{id:"copyright"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),e("p",[t._v("Copyright and related rights waived via "),e("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC0"),e("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);v.default=a.exports}}]);