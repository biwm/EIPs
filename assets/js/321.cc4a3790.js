(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{743:function(e,t,o){"use strict";o.r(t);var a=o(46),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"simple-summary"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),o("p",[e._v("Add a four step block rule to Clique that should reduce block production deadlocks")]),e._v(" "),o("h2",{attrs:{id:"abstract"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),o("p",[e._v('The current specification of Clique allows for multiple competing blocks from producers but does not\nprovide any strategies to pick blocks aside from the current "highest total difficulty" rule. This\nEIP proposes a four step choice rule of highest total difficulty, shortest chain, most recently\nin-turn, and lowest hash. This would prevent deadlocks that have occurred in production systems.')]),e._v(" "),o("h2",{attrs:{id:"motivation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),o("p",[e._v("There has been more than one deadlock in the Goerli multi-client Clique network. The number of\nactive validators was greater than 1/2 of the available validators so a chain halt should not have\noccurred. The halt was resolved by an inactive validator coming back on line. The state of the chain\nwas in one of two configurations of 8 validators that can result in a chain halt. Three of the four\nclients observed a choice sequence of lowest total difficulty followed by first observed block. Geth\nadded one extra rule of preferring the shortest chain before preferring the first observed block.\nThis fork would have resolved itself with Geth's rule, but there is still a configuration where the\nchain can halt with a shortest chain rule.")]),e._v(" "),o("h2",{attrs:{id:"specification"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),o("p",[e._v("When a Clique validator is arbitrating the canonical status between two different chain head blocks,\nthey should choose the canonical block with the following ordered priorities.")]),e._v(" "),o("ol",[o("li",[e._v("Choose the block with the most total difficulty.")]),e._v(" "),o("li",[e._v("Then choose the block with the lowest block number.")]),e._v(" "),o("li",[e._v("Then choose the block whose validator had the least recent in-turn block assignment.")]),e._v(" "),o("li",[e._v("Then choose the block with the lowest hash.")])]),e._v(" "),o("p",[e._v("When resolving rule 3 clients should use the following formula, where "),o("code",[e._v("validator_index")]),e._v(" is the integer\nindex of the validator that signed the block when sorted as per epoch checkpointing,\n"),o("code",[e._v("header_number")]),e._v(" is the number of the header, and "),o("code",[e._v("validator_count")]),e._v(" is the count of the current\nvalidators. Clients should choose the block with the "),o("strong",[e._v("largest")]),e._v(" value. Note that an in-turn block\nis considered to be the most recent in-turn block.")]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("(header_number - validator_index) % validator_count\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("p",[e._v("When resolving rule 4 the hash should be converted into an unsigned 256 bit integer.")]),e._v(" "),o("h2",{attrs:{id:"rationale"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),o("p",[e._v("Two scenarios of a halted chain are known based on the current total difficulty then first observed\nrule. One of the scenarios is also resistant to the shortest chain rule.")]),e._v(" "),o("p",[e._v("For the first scenario where chains of different lengths can halt consider a block with 8\nvalidators, whose addresses sort to the same order as their designation in this example. A fully\nin-order chain exists and validator number 8 has just produced an in-turn block and then validators\n5, 7 and 8 go offline, leaving validators 1 to 6 to produce blocks. Two forks form, one with an\nin-order block from validator 1 and then an out of order block from validator 3. The second fork\nforms from validators 2, 4, and 6 in order. Both have a net total difficulty of 3 more than the\ncommon ancestor. So in this case if both forks become aware of the other fork then both are\nconsidered equally viable and neither set of validators should switch to the newly observed fork. In\nthis case, adding a shortest chain rule would break the deadlock as the even numbered validators\nwould adopt the shorter chain.")]),e._v(" "),o("p",[e._v("For the second scenario with the same validator set and in-order chain with validator 7 having just\nproduced an in order block, then validators 7 and 8 go offline. Two forks form, 1,3,5 on one side\nand 2,4,6 on the other. Both forks become aware of the other fork after producing their third block.\nIn this case both forks have equal total difficulty and equal length. So Geth's rule would not break\nthe tie and only the arrival of one of the missing validators fix the chain. In a worst case\nscenario the odd and even chains would produce a block for 7 and 8 respectively, and chain halt\nwould result with no validators that have not chosen a fork. Only a manual rollback would fix this.")]),e._v(" "),o("p",[e._v("One consideration when formulating the rules is that the block choice should be chosen so that it\nwould encourage the maximum amount of in-order blocks. Selecting a chain based on shortest chain\nimplicitly prefers the chain with more in-order blocks. When selecting between competing out of\norder chains the validator who is closest to producing an in-order block in the future should have\ntheir chain declined so that they are available to produce an in-order block sooner.")]),e._v(" "),o("p",[e._v("At least one client has been observed producing multiple blocks at the same height with the same\ndifficulty, so a final catch-all standard of lowest block hash should break any remaining ties.")]),e._v(" "),o("h2",{attrs:{id:"backwards-compatibility"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),o("p",[e._v("The current block choice rules are a mix of most total difficulty and most total difficulty plus\nshortest chain.")]),e._v(" "),o("p",[e._v("As long as the majority of the active validators implement the block choice rules then a client who\nonly implements the existing difficulty based rule will eventually align with the chain preferred by\nthese rules. If less than a majority implement these rules then deadlocks can still occur, and\ndepend on the first observation of problematic blocks, which is no worse than the current situation.")]),e._v(" "),o("p",[e._v("If clients only partially implement the rule as long as every higher ranked rule is also implemented\nthen the situation will be no worse than today.")]),e._v(" "),o("h2",{attrs:{id:"security-considerations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[e._v("#")]),e._v(" Security Considerations")]),e._v(" "),o("p",[e._v("Malicious and motivated attackers who are participating in the network can force the chain to halt\nwith well crafted block production. With a fully deterministic choice rule the opportunity to halt\nis diminished. Attackers still have the same opportunities to flood the network with multiple blocks\nat the same height. A deterministic rule based on the lowest hash reduces the impact of such a\nflooding attack. A malicious validator could exploit this deterministic rule to produce a\nreplacement block. Such an attack exists in current implementations but a deterministic hash rule\nmakes such replacements more likely. However the impact of such an attack seems low to trivial at\nthis time.")]),e._v(" "),o("h2",{attrs:{id:"copyright"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),o("p",[e._v("Copyright and related rights waived via "),o("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),o("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=i.exports}}]);