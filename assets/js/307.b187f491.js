(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{728:function(e,t,a){"use strict";a.r(t);var i=a(46),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),a("p",[e._v("Phases out the "),a("code",[e._v("SSTORE")]),e._v(" and "),a("code",[e._v("SELFDESTRUCT")]),e._v(" gas refunds.")]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("This EIP would define a block when the "),a("code",[e._v("SSTORE")]),e._v(" and "),a("code",[e._v("SELFDESTRUCT")]),e._v(" refunds would begin to diminish.\nThe refund would step linearly downward, eroding the implicit value of such refunds at an accelerating pace.")]),e._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v("Refunds increase block elasticity, so the block gas target can exceed the number established by miners by up to 2x.\nThis can cause hesitancy for miners to increase the block gas target.")]),e._v(" "),a("p",[e._v("Refunds, tokenized or not, are valuable to their holders, especially during congestion.\nIf refunds must be removed, a gradual change in their value would be less-disruptive to the gas market than sudden abolition.\nRefund consumption would proceed, especially during periods of congestion, and the refunds would be cleaned up from the state.\nRefund creation, driven by demand, would naturally diminish as the efficiency of the refunds fall.\nAs the refund value approaches the activation cost, the implicit value of the refunds will approach zero, but in periods of congestion they will be cleaned up.")]),e._v(" "),a("p",[e._v("This change is less work for the protocol developers than compensation and cleanup, while likely still achieving cleanup.")]),e._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("p",[e._v("Parameters:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("FORK_BLOCK_NUM")]),e._v(": EIP-3300 activation block")]),e._v(" "),a("li",[a("code",[e._v("REFUND_DECAY_STEP")]),e._v(": 1 gas")]),e._v(" "),a("li",[a("code",[e._v("REFUND_DECAY_FREQUENCY")]),e._v(": 100 blocks")])]),e._v(" "),a("p",[e._v("Computed:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("REFUND_DECAY")]),e._v(": "),a("code",[e._v("REFUND_DECAY_STEP * ceil((block.number + 1 - FORK_BLOCK_NUM) / REFUND_DECAY_FREQUENCY)")])])]),e._v(" "),a("p",[e._v("On the block this EIP activates, and again every "),a("code",[e._v("REFUND_DECAY_FREQUENCY")]),e._v(" blocks, all gas refunds, including "),a("code",[e._v("SELFDESTRUCT")]),e._v(" and "),a("code",[e._v("SSTORE")]),e._v(" would diminish by "),a("code",[e._v("REFUND_DECAY_STEP")]),e._v(", until 0.\nThe current difference is called the "),a("code",[e._v("REFUND_DECAY")]),e._v(", which shall be subtracted from each gas refund.")]),e._v(" "),a("p",[e._v("For gas-cost regimes with refund removals that cancel prior refunds, the invariant that the refund counter cannot go negative will be preserved by diminishing the magnitude of those removals by "),a("code",[e._v("REFUND_DECAY")]),e._v(", until 0.")]),e._v(" "),a("h3",{attrs:{id:"eip-2929"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eip-2929"}},[e._v("#")]),e._v(" EIP-2929")]),e._v(" "),a("p",[e._v("The refunds as of EIP-2929 are as follows:")]),e._v(" "),a("ul",[a("li",[e._v("24000 for SELFDESTRUCT")]),e._v(" "),a("li",[a("code",[e._v("SSTORE_RESET_GAS - SLOAD_GAS")]),e._v(" (5000 - 100)")]),e._v(" "),a("li",[a("code",[e._v("SSTORE_SET_GAS - SLOAD_GAS")]),e._v(" (20000 - 100)")]),e._v(" "),a("li",[a("code",[e._v("SSTORE_SET_GAS - SLOAD_GAS")]),e._v(" (20000 - 100)")]),e._v(" "),a("li",[a("code",[e._v("SSTORE_CLEARS_SCHEDULE")]),e._v(" (15000)")])]),e._v(" "),a("p",[e._v("Each of these refunds would be decreased by the current "),a("code",[e._v("REFUND_DECAY")]),e._v(".")]),e._v(" "),a("p",[e._v("There is also a case where "),a("code",[e._v("SSTORE_CLEARS_SCHEDULE")]),e._v(" is removed from the refund counter.\nThat removal will also diminish by "),a("code",[e._v("REFUND_DECAY_STEP")]),e._v(" until 0, maintaining the non-negative refund counter invariant.")]),e._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("p",[e._v("Persisted refunds would become worthless before they fall below their activation cost.\nOnce the refunds are worthless, they can be removed by another hard fork without waiting for 0.\nThe rate of diminishing specified would currently require (24000-5000) * 100 = 1,900,000 blocks for "),a("code",[e._v("SELFDESTRUCT")]),e._v(" and (15000-5000) * 100 = 1,000,000 blocks for "),a("code",[e._v("SSTORE")]),e._v(".\nThis timeframe is currently about a year, which should be enough flexibility for the remaining refunds to be consumed.")]),e._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),a("p",[e._v("This proposal breaks gas refunds, which contribute to block elasticity.\nThe effect of this will be increased gas price volatility: higher highs and lower lows.")]),e._v(" "),a("p",[e._v("Because the refund counter is separate from the gas counter, the block-to-block gas changes will not break "),a("code",[e._v("eth_estimateGas")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),a("p",[e._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);