(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{729:function(t,e,v){"use strict";v.r(e);var _=v(46),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"simple-summary"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[t._v("#")]),t._v(" Simple Summary")]),t._v(" "),v("p",[t._v("Remove gas refunds for SSTORE and SELFDESTRUCT.")]),t._v(" "),v("h2",{attrs:{id:"motivation"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),v("p",[t._v('Gas refunds for SSTORE and SELFDESTRUCT were originally introduced to motivate application developers to write applications that practice "good state hygiene", clearing storage slots and contracts that are no longer needed. However, they are not widely used for this, and poor state hygiene continues to be the norm. It is now widely accepted that the only solution to state growth is some form of '),v("a",{attrs:{href:"https://hackmd.io/@HWeNw8hNRimMm2m2GH56Cw/state_size_management",target:"_blank",rel:"noopener noreferrer"}},[t._v("statelessness or state expiry"),v("OutboundLink")],1),t._v(", and if such a solution is implemented, then disused storage slots and contracts would start to be ignored automatically.")]),t._v(" "),v("p",[t._v("Gas refunds additionally have multiple harmful consequences:")]),t._v(" "),v("ul",[v("li",[t._v("Refunds give rise to "),v("a",{attrs:{href:"https://gastoken.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GasToken"),v("OutboundLink")],1),t._v('. GasToken has benefits in moving gas space from low-fee periods to high-fee periods, but it also has downsides to the network, particularly in exacerbating state size (as state slots are effectively used as a "battery" to save up gas) and inefficiently clogging blockchain gas usage')]),t._v(" "),v("li",[t._v("Refunds increase block size variance. The theoretical maximum amount of actual gas consumed in a block is nearly twice the on-paper gas limit (as refunds add gas space for subsequent transactions in a block, though refunds are capped at 50% of a transaction's gas used). This is "),v("a",{attrs:{href:"https://notes.ethereum.org/@vbuterin/eip_1559_spikes",target:"_blank",rel:"noopener noreferrer"}},[t._v("not fatal"),v("OutboundLink")],1),t._v(", but is still undesirable, especially given that refunds can be used to maintain 2x usage spikes for far longer than EIP 1559 can.")])]),t._v(" "),v("h2",{attrs:{id:"specification"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),v("h3",{attrs:{id:"parameters"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Constant")]),t._v(" "),v("th",[t._v("Value")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("FORK_BLOCK")])]),t._v(" "),v("td",[t._v("TBD")])])])]),t._v(" "),v("p",[t._v("For blocks where "),v("code",[t._v("block.number >= FORK_BLOCK")]),t._v(", the following changes apply.")]),t._v(" "),v("p",[t._v("Do not apply the "),v("code",[t._v("refund")]),t._v(".")]),t._v(" "),v("p",[t._v("The description above is sufficient to describe the change, but for the sake of clarity we enumerate all places where gas refunds are currently used and which should/could be removed within a node implementation.")]),t._v(" "),v("ol",[v("li",[v("p",[t._v('Remove all use of the "refund counter" in SSTORE gas accounting, as defined in '),v("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-2200",target:"_blank",rel:"noopener noreferrer"}},[t._v("EIP 2200"),v("OutboundLink")],1),t._v(". Particularly:")]),t._v(" "),v("ul",[v("li",[t._v("If a storage slot is changed and the "),v("em",[t._v("current value")]),t._v(" equals the "),v("em",[t._v("original value")]),t._v(", but does not equal the "),v("em",[t._v("new value")]),t._v(", "),v("code",[t._v("SSTORE_RESET_GAS")]),t._v(" is deducted (plus "),v("code",[t._v("COLD_SLOAD_COST")]),t._v(" if "),v("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-2929#sstore-changes",target:"_blank",rel:"noopener noreferrer"}},[t._v("prescribed by EIP 2929 rules"),v("OutboundLink")],1),t._v("), but no modifications to the refund counter are made.")]),t._v(" "),v("li",[t._v("If a storage slot is changed and the "),v("em",[t._v("current value")]),t._v(" equals neither the "),v("em",[t._v("new value")]),t._v(" nor the "),v("em",[t._v("original value")]),t._v(" (regardless of whether or not the latter two are equal), "),v("code",[t._v("SLOAD_GAS")]),t._v(" is deducted (plus "),v("code",[t._v("COLD_SLOAD_COST")]),t._v(" if "),v("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-2929#sstore-changes",target:"_blank",rel:"noopener noreferrer"}},[t._v("prescribed by EIP 2929 rules"),v("OutboundLink")],1),t._v("), but no modifications to the refund counter are made.")])])]),t._v(" "),v("li",[v("p",[t._v("Remove the "),v("code",[t._v("SELFDESTRUCT")]),t._v(" refund.")])])]),t._v(" "),v("h2",{attrs:{id:"rationale"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[t._v("#")]),t._v(" Rationale")]),t._v(" "),v("p",[t._v("A full removal of refunds is the simplest way to solve the issues with refunds; any gains from partial retention of the refund mechanism are not worth the complexity that that would leave remaining in the Ethereum protocol.")]),t._v(" "),v("h2",{attrs:{id:"backwards-compatibility"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[t._v("#")]),t._v(" Backwards Compatibility")]),t._v(" "),v("p",[t._v("Refunds are currently only applied "),v("em",[t._v("after")]),t._v(" transaction execution, so they cannot affect how much gas is available to any particular call frame during execution. Hence, removing them will not break the ability of any code to execute, though it will render some applications economically nonviable.")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://gastoken.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GasToken"),v("OutboundLink")],1),t._v(" in particular will become valueless. DeFi arbitrage bots, which today frequently use either established GasToken schemes or a custom alternative to reduce on-chain costs, would benefit from rewriting their code to remove calls to these no-longer-functional gas storage mechanisms.")]),t._v(" "),v("h2",{attrs:{id:"implementation"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),v("p",[t._v("An implementation can be found here: https://gist.github.com/holiman/460f952716a74eeb9ab358bb1836d821#gistcomment-3642048")]),t._v(" "),v("h2",{attrs:{id:"test-case-changes"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#test-case-changes"}},[t._v("#")]),t._v(" Test case changes")]),t._v(" "),v("ul",[v("li",[t._v('The "original", "1st", "2nd", "3rd" columns refer to the value of storage slot 0 before the execution and after each SSTORE.')]),t._v(" "),v("li",[t._v('The "Berlin (cold)" column gives the post-Berlin (EIP 2929) gas cost assuming the storage slot had not yet been accessed.')]),t._v(" "),v("li",[t._v('The "Berlin (hot)" column gives the post-Berlin gas cost assuming the storage slot has already been accessed.')]),t._v(" "),v("li",[t._v('The "Berlin (hot) + norefund" column gives the post-Berlin gas cost assuming the storage slot has already been accessed, '),v("strong",[t._v("and assuming this EIP has been implemented")]),t._v(".")])]),t._v(" "),v("p",[t._v("Gas costs are provided with refunds subtracted; if the number is negative this means that refunds exceed gas costs. The 50% refund limit is not applied (due to the implied assumption that this code is only a small fragment of a much larger execution).")]),t._v(" "),v("p",[t._v("If refunds were to be removed, this would be the comparative table")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Code")]),t._v(" "),v("th",[t._v("Original")]),t._v(" "),v("th",[t._v("1st")]),t._v(" "),v("th",[t._v("2nd")]),t._v(" "),v("th",[t._v("3rd")]),t._v(" "),v("th",[t._v("Istanbul")]),t._v(" "),v("th",[t._v("Berlin (cold)")]),t._v(" "),v("th",[t._v("Berlin (hot)")]),t._v(" "),v("th",[t._v("Berlin (hot)+norefund")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("0x60006000556000600055")])]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("1612")]),t._v(" "),v("td",[t._v("2312")]),t._v(" "),v("td",[t._v("212")]),t._v(" "),v("td",[t._v("212")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("0x60006000556001600055")])]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("20812")]),t._v(" "),v("td",[t._v("22212")]),t._v(" "),v("td",[t._v("20112")]),t._v(" "),v("td",[t._v("20112")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("0x60016000556000600055")])]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("1612")]),t._v(" "),v("td",[t._v("2312")]),t._v(" "),v("td",[t._v("212")]),t._v(" "),v("td",[t._v("20112")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("0x60016000556002600055")])]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("2")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("20812")]),t._v(" "),v("td",[t._v("22212")]),t._v(" "),v("td",[t._v("20112")]),t._v(" "),v("td",[t._v("20112")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("0x60016000556001600055")])]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("20812")]),t._v(" "),v("td",[t._v("22212")]),t._v(" "),v("td",[t._v("20112")]),t._v(" "),v("td",[t._v("20112")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("0x60006000556000600055")])]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("-9188")]),t._v(" "),v("td",[t._v("-9888")]),t._v(" "),v("td",[t._v("-11988")]),t._v(" "),v("td",[t._v("3012")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("0x60006000556001600055")])]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("1612")]),t._v(" "),v("td",[t._v("2312")]),t._v(" "),v("td",[t._v("212")]),t._v(" "),v("td",[t._v("3012")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("0x60006000556002600055")])]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("2")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("5812")]),t._v(" "),v("td",[t._v("5112")]),t._v(" "),v("td",[t._v("3012")]),t._v(" "),v("td",[t._v("3012")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("0x60026000556000600055")])]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("2")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("-9188")]),t._v(" "),v("td",[t._v("-9888")]),t._v(" "),v("td",[t._v("-11988")]),t._v(" "),v("td",[t._v("3012")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("0x60026000556003600055")])]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("2")]),t._v(" "),v("td",[t._v("3")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("5812")]),t._v(" "),v("td",[t._v("5112")]),t._v(" "),v("td",[t._v("3012")]),t._v(" "),v("td",[t._v("3012")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("0x60026000556001600055")])]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("2")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("1612")]),t._v(" "),v("td",[t._v("2312")]),t._v(" "),v("td",[t._v("212")]),t._v(" "),v("td",[t._v("3012")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("0x60026000556002600055")])]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("2")]),t._v(" "),v("td",[t._v("2")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("5812")]),t._v(" "),v("td",[t._v("5112")]),t._v(" "),v("td",[t._v("3012")]),t._v(" "),v("td",[t._v("3012")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("0x60016000556000600055")])]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("-9188")]),t._v(" "),v("td",[t._v("-9888")]),t._v(" "),v("td",[t._v("-11988")]),t._v(" "),v("td",[t._v("3012")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("0x60016000556002600055")])]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("2")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("5812")]),t._v(" "),v("td",[t._v("5112")]),t._v(" "),v("td",[t._v("3012")]),t._v(" "),v("td",[t._v("3012")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("0x60016000556001600055")])]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("1612")]),t._v(" "),v("td",[t._v("2312")]),t._v(" "),v("td",[t._v("212")]),t._v(" "),v("td",[t._v("212")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("0x600160005560006000556001600055")])]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("21618")]),t._v(" "),v("td",[t._v("22318")]),t._v(" "),v("td",[t._v("20218")]),t._v(" "),v("td",[t._v("40118")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("0x600060005560016000556000600055")])]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("-8382")]),t._v(" "),v("td",[t._v("-9782")]),t._v(" "),v("td",[t._v("-11882")]),t._v(" "),v("td",[t._v("5918")])])])]),t._v(" "),v("h2",{attrs:{id:"security-considerations"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[t._v("#")]),t._v(" Security Considerations")]),t._v(" "),v("p",[t._v("TBD")]),t._v(" "),v("h2",{attrs:{id:"copyright"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),v("p",[t._v("Copyright and related rights waived via "),v("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC0"),v("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=a.exports}}]);