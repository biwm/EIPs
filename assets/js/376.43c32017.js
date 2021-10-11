(window.webpackJsonp=window.webpackJsonp||[]).push([[376],{800:function(e,a,t){"use strict";t.r(a);var o=t(46),r=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"simple-summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),t("p",[e._v("This EIP adds an additional opcode to the EVM which will return a finalized blocks reward value.")]),e._v(" "),t("h2",{attrs:{id:"abstract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),t("p",[e._v("In the EVM, the 0x40 opcodes are reserved for "),t("code",[e._v("Block Information")]),e._v(". Currently reserved opcodes are:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("0X40 BLOCKHASH")])]),e._v(" "),t("li",[t("code",[e._v("0X41 COINBASE")])]),e._v(" "),t("li",[t("code",[e._v("0X42 TIMESTAMP")])]),e._v(" "),t("li",[t("code",[e._v("0X43 NUMBER")])]),e._v(" "),t("li",[t("code",[e._v("0X44 DIFFICULTY")])]),e._v(" "),t("li",[t("code",[e._v("0X45 GASLIMIT")])])]),e._v(" "),t("p",[e._v("This EIP would add an additional opcode, "),t("code",[e._v("0x46 BLOCKREWARD")]),e._v(", which would return the block reward for any finalized block. The finalized block reward would include the base reward, uncle payments, and gas.")]),e._v(" "),t("h2",{attrs:{id:"motivation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),t("p",[e._v("Per EIP-649 ( #669 ) periodic block reward reductions/variance are now planned in the roadmap, however, this EIP is consensus system agnostic and is most useful in decentralized pool operations and for any contract that benefits from knowing a block reward payout(i.e. Merge mined tokens)")]),e._v(" "),t("h2",{attrs:{id:"specification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),t("p",[e._v("After block "),t("code",[e._v("n")]),e._v(" all clients should process opcode "),t("code",[e._v("0x46")]),e._v(" as follows:")]),e._v(" "),t("ul",[t("li",[e._v("Value: "),t("code",[e._v("0x46")])]),e._v(" "),t("li",[e._v("Mnemonic: "),t("code",[e._v("BLOCKREWARD")])]),e._v(" "),t("li",[e._v("δ:"),t("code",[e._v("0")]),e._v(" nothing removed from stack")]),e._v(" "),t("li",[e._v("α:"),t("code",[e._v("1")]),e._v(" block reward added to stack")]),e._v(" "),t("li",[e._v("Description: "),t("code",[e._v("Get the block's reward emission")])]),e._v(" "),t("li",[e._v("GasCost: "),t("code",[e._v("G<sub>base</sub>")])])]),e._v(" "),t("p",[e._v("Where:"),t("code",[e._v("µ'<sub>s</sub>[0] ≡ I<sub>HR</sub>")])]),e._v(" "),t("h2",{attrs:{id:"rationale"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),t("h3",{attrs:{id:"contract-mining-pools"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contract-mining-pools"}},[e._v("#")]),e._v(" Contract Mining Pools")]),e._v(" "),t("p",[e._v("For distributed consensus systems(staking pools and mining pools) ad hoc groups combine resources in order to reduce variance in payouts. Broadly, pool operations function by allowing a collective of  miners / stakers  to verify their contribution to solving PoW or staking share by periodically submitting solutions which are is representative of the miners probability of finding a true block.")]),e._v(" "),t("p",[e._v("In all these schemes "),t("code",[e._v("B")]),e._v(" stands for a block reward minus pool fee and "),t("code",[e._v("p")]),e._v(" is a probability of finding a block in a share attempt ( "),t("code",[e._v("p=1/D")]),e._v(", where "),t("code",[e._v("D")]),e._v(" is current block difficulty).")]),e._v(" "),t("p",[e._v("Some common methods of mining pool payout are pay-per-share, "),t("code",[e._v("R = B * p")]),e._v(", proportional ["),t("code",[e._v("R = B * (n/N)")]),e._v(" where "),t("code",[e._v("n")]),e._v(" is amount of a miners shares, and "),t("code",[e._v("N")]),e._v(" is amount of all shares in this round.], and pay-per-last-N-shares ["),t("code",[e._v("R = B * (n/N)")]),e._v(" where miner's reward is calculated on a basis of "),t("code",[e._v("N")]),e._v(" last shares, instead of all shares for the last round]. All of these methods are predicated on knowing the block reward paid for a given block. In order to provide a trust minimized solution, "),t("code",[e._v("0x46")]),e._v(" can be used to call a blocks reward for computing payouts.")]),e._v(" "),t("h3",{attrs:{id:"merge-mined-tokens"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#merge-mined-tokens"}},[e._v("#")]),e._v(" Merge mined tokens")]),e._v(" "),t("p",[e._v("Contracts could create tokens which could be variably ‘minted’ as a function of block reward by calling "),t("code",[e._v("0x46")])]),e._v(" "),t("h2",{attrs:{id:"backwards-compatibility"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),t("h3",{attrs:{id:"currently-deployed-contracts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#currently-deployed-contracts"}},[e._v("#")]),e._v(" Currently deployed contracts")]),e._v(" "),t("p",[e._v("No impact")]),e._v(" "),t("h3",{attrs:{id:"current-clients"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#current-clients"}},[e._v("#")]),e._v(" Current clients")]),e._v(" "),t("p",[e._v("This EIP would be incompatible with currently deployed clients that are not able to handle "),t("code",[e._v("0x46")]),e._v(" and would process all transactions and block containing the opcode as invalid.")]),e._v(" "),t("p",[e._v("Implementation should occur as part of a coordinated hardfork.")]),e._v(" "),t("h2",{attrs:{id:"implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),t("h2",{attrs:{id:"further-reading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further reading")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Mining_pool",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mining Pools"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("The Yellow Paper Appendix H. Virtual Machine Specification section H.2")]),e._v(" "),t("h2",{attrs:{id:"copyright"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),t("p",[e._v("Copyright and related rights waived via "),t("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),t("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);a.default=r.exports}}]);