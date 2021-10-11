(window.webpackJsonp=window.webpackJsonp||[]).push([[329],{752:function(e,t,a){"use strict";a.r(t);var i=a(46),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),a("p",[e._v("Defines a new transaction type with constraints on ancestor block hash, block author, and/or block timestamp.")]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("We introduce a new EIP-2718 transaction type with the format "),a("code",[e._v("0x4 || rlp([chainId, chainContext, nonce, gasPrice, gasLimit, to, value, data, access_list, yParity, senderR, senderS])")]),e._v(".")]),e._v(" "),a("p",[e._v("This proposed "),a("code",[e._v("chainContext")]),e._v(" element adds a constraint on the validity of a transaction to a chain segment meeting the referenced value(s). Four contexts are defined as subclasses of this type:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("segmentId")])]),e._v(" "),a("li",[a("code",[e._v("eligibleMinerList")])]),e._v(" "),a("li",[a("code",[e._v("ineligibleMinerList")])]),e._v(" "),a("li",[a("code",[e._v("expiry")])])]),e._v(" "),a("p",[e._v("These contexts can be used in arbitrary combinations. Annotated context value combinations are referenced by a composite integer prefix on the annotation.")]),e._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v("Establish a protocol-based mechanism with which transactions are able to articulate constraints on eligible chain contexts.\nGenerally, these constraints give the consumer (the transactor) an ability to express requirements about the transaction's relationship to blockchain data and its provenance.")]),e._v(" "),a("ul",[a("li",[e._v("Restrict transaction applicability to a chain context that is currently available and reasoned about under some subjective view.\n"),a("ul",[a("li",[e._v("Introduces a way for transactions to describe a dependency on their current view of a chain.")])])]),e._v(" "),a("li",[e._v("Restrict transaction applicability to a chain context following some foregoing block (and its transactions).\n"),a("ul",[a("li",[e._v('Introduces a way for transactions to describe ancestral dependencies at a "macro" (block) level.\nIndirectly, this offers a way for a transaction to depend on the presence of another, so long as the dependent transaction is in a different block.')])])]),e._v(" "),a("li",[e._v("Restrict transaction applicability to blocks benefitting, or "),a("em",[e._v("not")]),e._v(" benefitting, a preferred/spurned miner address or addresses.\n"),a("ul",[a("li",[e._v("Introduces an opportunity/market for miners to compete for consumers' transactions; under the status quo, the current miner-transaction processing service is almost perfectly homogeneous from the consumer perspective.")])])]),e._v(" "),a("li",[e._v("Restrict transaction applicability time span.\n"),a("ul",[a("li",[e._v("Introduces an alternative (to the status quo) way for consumers/transactors to have transactions invalidated/ejected from the transaction pool.")])])])]),e._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("h3",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("FORK_BLOCK_NUMBER")]),e._v(" "),a("code",[e._v("TBD")])]),e._v(" "),a("li",[a("code",[e._v("TRANSACTION_TYPE_NUMBER")]),e._v(" "),a("code",[e._v("0x4")]),e._v(".  See EIP-2718.")])]),e._v(" "),a("p",[e._v("As of "),a("code",[e._v("FORK_BLOCK_NUMBER")]),e._v(", a new EIP-2718 transaction is introduced with "),a("code",[e._v("TransactionType")]),e._v(" "),a("code",[e._v("TRANSACTION_TYPE_NUMBER")]),e._v(".")]),e._v(" "),a("p",[e._v("The EIP-2718 "),a("code",[e._v("TransactionPayload")]),e._v(" for this transaction is "),a("code",[e._v("rlp([chainId, chainContext, nonce, gasPrice, gasLimit, to, value, data, access_list, yParity, senderR, senderS])")]),e._v(".")]),e._v(" "),a("p",[e._v("The EIP-2718 "),a("code",[e._v("ReceiptPayload")]),e._v(" for this transaction is "),a("code",[e._v("rlp([status, cumulativeGasUsed, logsBloom, logs])")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"definitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#definitions"}},[e._v("#")]),e._v(" Definitions")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("chainContext")]),e._v(". The transaction is only valid for blockchain data satisfying ALL OF the annotations.")]),e._v(" "),a("li",[a("code",[e._v("ANNOTATION_COMPOSITE_PREFIX")]),e._v(". A positive integer between "),a("code",[e._v("1")]),e._v(" and "),a("code",[e._v("0xff")]),e._v(" that represents the set of subclass annotations in the "),a("code",[e._v("chainContext")]),e._v(" ("),a("em",[e._v("ie.")]),e._v(" "),a("em",[e._v("which")]),e._v(" chain context subclasses should the provided values be applied to). This value should be the sum of the subclass' "),a("code",[e._v("ANNOTATION_PREFIX")]),e._v("s.")]),e._v(" "),a("li",[a("code",[e._v("ANNOTATION_PREFIX")]),e._v("s are defined for Subclasses as octal-derived positive integers, limited to the set "),a("code",[e._v("2^0,2^1,2^2,2^3,2^4,2^5,2^6,2^7")]),e._v(".")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("chainContext")]),e._v(" value should be of the form "),a("code",[e._v("ANNOTATION_COMPOSITE_PREFIX || [{subclass value}...]")]),e._v(", where")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("...")]),e._v(' means "zero or more of the things to the left," and')]),e._v(" "),a("li",[a("code",[e._v("||")]),e._v(" denotes the byte/byte-array concatenation operator.")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("chainContext")]),e._v(" value should be encoded as "),a("code",[e._v("ANNOTATION_COMPOSITE_PREFIX || rlp[{subclass value}...]")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"validation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validation"}},[e._v("#")]),e._v(" Validation")]),e._v(" "),a("p",[e._v("The values defined as subclasses below acts as constraints on transaction validity for specific chain contexts.\nTransactions defining constraints which are not satisfied by their chain context should be rejected as invalid.\nBlocks containing invalid transactions should be rejected as invalid themselves, per the "),a("em",[e._v("status quo")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"subclass-combination"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subclass-combination"}},[e._v("#")]),e._v(" Subclass Combination")]),e._v(" "),a("p",[a("code",[e._v("chainContext")]),e._v(" values annotating more than one subclass reference should provide those values in the following sequential order:")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("ANCESTOR_ID")])]),e._v(" "),a("li",[a("code",[e._v("ELIGIBLE_MINER_LIST")])]),e._v(" "),a("li",[a("code",[e._v("INELIGIBLE_MINER_LIST")])]),e._v(" "),a("li",[a("code",[e._v("EXPIRY")])])]),e._v(" "),a("p",[e._v("As above, the "),a("code",[e._v("ANNOTATION_COMPOSITE_PREFIX")]),e._v(" should be the sum of the designated subclass' "),a("code",[e._v("ANNOTATION_PREFIX")]),e._v("s.")]),e._v(" "),a("h3",{attrs:{id:"subclasses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subclasses"}},[e._v("#")]),e._v(" Subclasses")]),e._v(" "),a("ul",[a("li",[e._v("An "),a("code",[e._v("ANNOTATION_PREFIX")]),e._v(" value is used to represent each of the available context subclasses.")])]),e._v(" "),a("h4",{attrs:{id:"ancestorid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ancestorid"}},[e._v("#")]),e._v(" "),a("code",[e._v("ancestorId")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("ANNOTATION_PREFIX")]),e._v(" "),a("code",[e._v("1")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("ANCESTOR_ID")]),e._v(" "),a("code",[e._v("bytes")]),e._v(". A byte array between 4 and 12 bytes in length.")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("ANCESTOR_ID")]),e._v(" is a reference to a specific block by concatenating the byte representation of a block number and the first 4 bytes of its hash.\nThe block number's should be encoded as a big endian value and should have left-padding 0's removed.\nThe block number value may be omitted in case of reference to the genesis block.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("ANCESTOR_ID")]),e._v(" value should be RLP encoded as a byte array for hashing and transmission.")]),e._v(" "),a("h4",{attrs:{id:"eligibleminerlist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eligibleminerlist"}},[e._v("#")]),e._v(" "),a("code",[e._v("eligibleMinerList")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("ANNOTATION_PREFIX")]),e._v(" "),a("code",[e._v("2")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("ELIGIBLE_MINER_LIST")]),e._v(" "),a("code",[e._v("[address...]")]),e._v(". A list of addresses.")]),e._v(" "),a("li",[a("code",[e._v("MAX_ELEMENTS")]),e._v(" "),a("code",[e._v("3")]),e._v(". The maximum number of addresses that can be provided.")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("ELIGIBLE_MINER_LIST")]),e._v(" value is an array of unique, valid addresses.\nAny block containing a transaction using this value must have a block beneficiary included in this set.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("ELIGIBLE_MINER_LIST")]),e._v(" value should be of the type "),a("code",[e._v("[{20 bytes}+]")]),e._v(", where "),a("code",[e._v("+")]),e._v(' means "one or more of the thing to the left."\nNon-unique values are not permitted.')]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("ELIGIBLE_MINER_LIST")]),e._v(" value should be RLP encoded for hashing and transmission.")]),e._v(" "),a("p",[e._v("An "),a("code",[e._v("ELIGIBLE_MINER_LIST")]),e._v(" value may NOT be provided adjacent to an "),a("code",[e._v("INELIGIBLE_MINER_LIST")]),e._v(" value.")]),e._v(" "),a("h4",{attrs:{id:"ineligibleminerlist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ineligibleminerlist"}},[e._v("#")]),e._v(" "),a("code",[e._v("ineligibleMinerList")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("ANNOTATION_PREFIX")]),e._v(" "),a("code",[e._v("4")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("INELIGIBLE_MINER_LIST")]),e._v(" "),a("code",[e._v("[address...]")]),e._v(". A list of addresses.")]),e._v(" "),a("li",[a("code",[e._v("MAX_ELEMENTS")]),e._v(" "),a("code",[e._v("3")]),e._v(". The maximum number of addresses that can be provided.")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("INELIGIBLE_MINER_LIST")]),e._v(" value is an array of unique, valid addresses.\nAny block containing a transaction using this value must not have a block beneficiary included in this set.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("INELIGIBLE_MINER_LIST")]),e._v(" value should be of the type "),a("code",[e._v("[{20 bytes}+]")]),e._v(", where "),a("code",[e._v("+")]),e._v(' means "one or more of the thing to the left."\nNon-unique values are not permitted.')]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("INELIGIBLE_MINER_LIST")]),e._v(" value should be RLP encoded for hashing and transmission.")]),e._v(" "),a("p",[e._v("An "),a("code",[e._v("INELIGIBLE_MINER_LIST")]),e._v(" value may NOT be provided adjacent to an "),a("code",[e._v("ELIGIBLE_MINER_LIST")]),e._v(" value.")]),e._v(" "),a("h4",{attrs:{id:"expiry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expiry"}},[e._v("#")]),e._v(" "),a("code",[e._v("expiry")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("ANNOTATION_PREFIX")]),e._v(" "),a("code",[e._v("8")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("EXPIRY")]),e._v(" "),a("code",[e._v("integer")]),e._v(". A positive, unsigned scalar.")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("EXPIRY")]),e._v(" value is a scalar equal to the maximum valid block "),a("code",[e._v("timestamp")]),e._v(" for a block including this transaction.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("EXPIRY")]),e._v(" value should be RLP encoded as an integer for hashing and transmission.")]),e._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("h3",{attrs:{id:"subclasses-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subclasses-2"}},[e._v("#")]),e._v(" Subclasses")]),e._v(" "),a("p",[e._v("Subclasses are defined with a high level of conceptual independence, and can be modified and/or extended independently from this EIP.\nTheir specification definitions allow arbitrary mutual ("),a("code",[e._v("AND")]),e._v(") combinations.")]),e._v(" "),a("p",[e._v("This design is intended to form a proposal which offers a concrete set of specifics while doing so with enough flexibility for extension or modification later.")]),e._v(" "),a("h4",{attrs:{id:"annotation-prefix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#annotation-prefix"}},[e._v("#")]),e._v(" "),a("code",[e._v("ANNOTATION_PREFIX")])]),e._v(" "),a("p",[a("code",[e._v("ANNOTATION_PREFIX")]),e._v(" values' use of octal-derived values, ie. "),a("code",[e._v("1, 2, 4, 8, 16, 32, 64, 128")]),e._v(", follows a conventional pattern of representing combinations from a limited set uniquely and succinctly, eg. Unix-style file permissions.\nThis EIP defines four of the eight possible context subclasses; this seems to leave plenty of room for future growth in this direction if required.\nIf this limit is met or exceeded, doing so will require a hard fork "),a("em",[e._v("de facto")]),e._v(" (by virtue of making consensus protocol facing changes to transaction validation schemes), so revising this scheme as needed should be only incidental and trivial.")]),e._v(" "),a("h4",{attrs:{id:"ancestorid-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ancestorid-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("ancestorId")])]),e._v(" "),a("p",[e._v("Constrains the validity of a transaction by referencing a prior canonical block by number and hash.\nThe transaction is only valid when included in a block which has the annotated block as an ancestor.")]),e._v(" "),a("p",[e._v('Practically, the "designated allowable chain segment" can be understood as the segment of blocks from '),a("code",[e._v("0..ancestorId")]),e._v(" inclusive.")]),e._v(" "),a("h5",{attrs:{id:"redundancy-to-chainid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redundancy-to-chainid"}},[e._v("#")]),e._v(" Redundancy to "),a("code",[e._v("chainId")])]),e._v(" "),a("p",[e._v("This pattern can be understood as a correlate of "),a("a",{attrs:{href:"./eip-155"}},[e._v("EIP-155")]),e._v("'s "),a("code",[e._v("chainId")]),e._v(" specification.\nEIP155 defines the restriction of transactions between chains; limiting the applicability of any EIP-155 transaction to a chain with the annotated ChainID.\n"),a("code",[e._v("ancestorId")]),e._v(' further restricts transaction application to one subsection ("segment") of one chain.')]),e._v(" "),a("p",[e._v("From this constraint hierarchy, we note that an implementation of "),a("code",[e._v("ancestorId")]),e._v(" can make "),a("code",[e._v("chainId")]),e._v(" conceptually redundant.")]),e._v(" "),a("h5",{attrs:{id:"so-why-keep-chainid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#so-why-keep-chainid"}},[e._v("#")]),e._v(" So why keep "),a("code",[e._v("chainId")]),e._v("?")]),e._v(" "),a("p",[a("code",[e._v("chainId")]),e._v(" is maintained as an invariant because:")]),e._v(" "),a("ul",[a("li",[e._v("The use of the transaction type proposed by this EIP is optional, implying the continued necessity of "),a("code",[e._v("chainId")]),e._v(" in the protocol infrastructure and tooling for legacy and other transaction types.")]),e._v(" "),a("li",[e._v("The presence of "),a("code",[e._v("ancestorId")]),e._v(" in the transaction type proposed by this EIP is optional. If the value is not filled by an RCC transaction, the demand for "),a("code",[e._v("chainId")]),e._v(" remains.")]),e._v(" "),a("li",[e._v("A "),a("code",[e._v("chainId")]),e._v(" value is not necessarily redundant to "),a("code",[e._v("ancestorId")]),e._v(", namely in cases where forks result in living chains. For example, an "),a("code",[e._v("ancestorId")]),e._v(" reference to block "),a("code",[e._v("1_919_999")]),e._v(" would be ambiguous between Ethereum and Ethereum Classic.")]),e._v(" "),a("li",[e._v("It would be possible to specify the omission of "),a("code",[e._v("chainId")]),e._v(" in case of "),a("code",[e._v("ancestorId")]),e._v("'s use. This would add infrastructural complexity for the sake of removing the few bytes "),a("code",[e._v("chainId")]),e._v(" typically requires; we do not consider this trade-off worth making.\n"),a("ul",[a("li",[a("code",[e._v("chainId")]),e._v(" is used as the "),a("code",[e._v("v")]),e._v(" value (of "),a("code",[e._v("v,r,s")]),e._v(") in the transaction signing scheme; removing or modifying this incurs complexity at a level below encoded transaction fields, demanding additional infrastructural complexity for implementation.")])])]),e._v(" "),a("li",[e._v("The proposed design for "),a("code",[e._v("ancestorId")]),e._v(" does not provide perfect precision (at the benefit of byte-size savings).\nIn the small chance that the value is ambiguous, the "),a("code",[e._v("chainId")]),e._v(" maintains an infallible guarantee for a transaction's chain specificity.")])]),e._v(" "),a("h4",{attrs:{id:"eligibleminerlist-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eligibleminerlist-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("eligibleMinerList")])]),e._v(" "),a("p",[e._v("The transaction is only valid when included in a block having an "),a("code",[e._v("etherbase")]),e._v(' contained in the annotated list of addresses.\nThe use of "whitelist" ('),a("code",[e._v("eligibleMinerList")]),e._v(') in conjunction with a "blacklist" ('),a("code",[e._v("ineligibleMinerList")]),e._v(") is logically inconsistent; their conjunction is not allowed.")]),e._v(" "),a("p",[e._v("A "),a("code",[e._v("MAX_ELEMENTS")]),e._v(" limit of "),a("code",[e._v("3")]),e._v(" is chosen to balance the interests of limiting the potential size of transactions, and to provide a sufficient level of articulation for the user. At the time of writing, the top 3 miners of Ethereum (by block, measured by known public addresses) account for 52% of all blocks produced.")]),e._v(" "),a("h4",{attrs:{id:"ineligibleminerlist-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ineligibleminerlist-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("ineligibleMinerList")])]),e._v(" "),a("p",[e._v("The transaction is only valid when included in a block having an "),a("code",[e._v("etherbase")]),e._v(" "),a("em",[e._v("not")]),e._v(' contained in the annotated list of addresses.\nThe use of "blacklist" ('),a("code",[e._v("ineligibleMinerList")]),e._v(') in conjunction with a "whitelist" ('),a("code",[e._v("eligibleMinerList")]),e._v(") is logically inconsistent; their conjunction is not allowed.")]),e._v(" "),a("p",[e._v("A "),a("code",[e._v("MAX_ELEMENTS")]),e._v(" limit of "),a("code",[e._v("3")]),e._v(" is chosen to balance the interests of limiting the potential size of transactions, and to provide a sufficient level of articulation for the user. At the time of writing, the top 3 miners of Ethereum (by block, measured by known public addresses) account for 52% of all blocks produced.")]),e._v(" "),a("h4",{attrs:{id:"expiry-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expiry-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("expiry")])]),e._v(" "),a("p",[e._v("The transaction is only valid when included in a block having a "),a("code",[e._v("timestamp")]),e._v(" less than the value annotated.\nA positive integer is used because that corresponds to the specified type of block "),a("code",[e._v("timestamp")]),e._v(" header values.")]),e._v(" "),a("h3",{attrs:{id:"subclass-combination-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subclass-combination-2"}},[e._v("#")]),e._v(" Subclass Combination")]),e._v(" "),a("p",[e._v("Since subclasses use octal-based values for "),a("code",[e._v("ANNOTATION_PREFIX")]),e._v(", they can be distinguishably combined as sums, provided as we assume annotation cardinality (ie ordering).\nFor example:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("ANNOTATION_PREFIX")]),e._v(" "),a("code",[e._v("1")]),e._v(" signals "),a("code",[e._v("ancestorId")]),e._v(" exclusively.")]),e._v(" "),a("li",[a("code",[e._v("ANNOTATION_PREFIX")]),e._v(" "),a("code",[e._v("2")]),e._v(" signals "),a("code",[e._v("eligibleMinerList")]),e._v(" exclusively.")]),e._v(" "),a("li",[a("code",[e._v("ANNOTATION_PREFIX")]),e._v(" "),a("code",[e._v("4")]),e._v(" signals "),a("code",[e._v("ineligibleMinerList")]),e._v(" exclusively.")]),e._v(" "),a("li",[a("code",[e._v("ANNOTATION_PREFIX")]),e._v(" "),a("code",[e._v("8")]),e._v(" signals "),a("code",[e._v("expiry")]),e._v(" exclusively.")]),e._v(" "),a("li",[a("code",[e._v("ANNOTATION_PREFIX")]),e._v(" "),a("code",[e._v("1+2=3")]),e._v(" combines "),a("code",[e._v("ancestorId")]),e._v(" and "),a("code",[e._v("eligibleMinerList")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("ANNOTATION_PREFIX")]),e._v(" "),a("code",[e._v("1+4=5")]),e._v(" combines "),a("code",[e._v("ancestorId")]),e._v(" and "),a("code",[e._v("ineligibleMinerList")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("ANNOTATION_PREFIX")]),e._v(" "),a("code",[e._v("1+8=9")]),e._v(" combines "),a("code",[e._v("ancestorId")]),e._v(" and "),a("code",[e._v("expiry")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("ANNOTATION_PREFIX")]),e._v(" "),a("code",[e._v("1+2+8=11")]),e._v(" combines "),a("code",[e._v("ancestorId")]),e._v(" and "),a("code",[e._v("eligibleMinerList")]),e._v(" and "),a("code",[e._v("expiry")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("ANNOTATION_PREFIX")]),e._v(" "),a("code",[e._v("1+4+8=13")]),e._v(" combines "),a("code",[e._v("ancestorId")]),e._v(" and "),a("code",[e._v("ineligibleMinerList")]),e._v(" and "),a("code",[e._v("expiry")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("ANNOTATION_PREFIX")]),e._v(" "),a("code",[e._v("2+4=6")]),e._v(" is NOT PERMITTED. It would combine "),a("code",[e._v("eligibleMinerList")]),e._v(" and "),a("code",[e._v("ineligibleMinerList")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("ANNOTATION_PREFIX")]),e._v(" "),a("code",[e._v("1+2+4+8=15")]),e._v(" is NOT PERMITTED. It would combine "),a("code",[e._v("eligibleMinerList")]),e._v(" and "),a("code",[e._v("ineligibleMinerList")]),e._v(" (and "),a("code",[e._v("ancestorId")]),e._v(" and "),a("code",[e._v("expiry")]),e._v(").")])]),e._v(" "),a("p",[e._v("Since ordering is defined and demanded for multiple values, annotated references remain distinguishable. For example:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("chainContext")]),e._v(" "),a("code",[e._v("3[e4e1c0e78b1ec3,[Df7D7e053933b5cC24372f878c90E62dADAD5d42]]")]),e._v(" - Transaction can only be included in a block having a canonical ancestor block numbered "),a("code",[e._v("15_000_000")]),e._v(" and with a hash prefixed with the bytes "),a("code",[e._v("e78b1ec3")]),e._v(", and if the containing block uses "),a("code",[e._v("Df7D7e053933b5cC24372f878c90E62dADAD5d42")]),e._v(" as the beneficiary.")]),e._v(" "),a("li",[a("code",[e._v("chainContext")]),e._v(" "),a("code",[e._v("10[[Df7D7e053933b5cC24372f878c90E62dADAD5d42],1619008030]")]),e._v(" - Transaction can only be included in a block naming "),a("code",[e._v("Df7D7e053933b5cC24372f878c90E62dADAD5d42")]),e._v(" as the "),a("code",[e._v("etherbase")]),e._v(" beneficiary, and which has a timestamp greater than "),a("code",[e._v("1619008030")]),e._v(" (Wed Apr 21 07:27:10 CDT 2021).")])]),e._v(" "),a("h3",{attrs:{id:"eip-2930-inheritance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eip-2930-inheritance"}},[e._v("#")]),e._v(" EIP-2930 Inheritance")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-2930",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIP-2930 Optional Access List Type Transaction"),a("OutboundLink")],1),e._v(' is used as an assumed "base" transaction type for this proposal.\nHowever, this is NOT a conceptual dependency; the included '),a("code",[e._v("accessList")]),e._v(" portion of this proposal (the only differential from post-EIP-155 legacy transaction fields) can readily be removed.\nStanding on the shoulders of EIP-2930 is only intended to support and further the adoption of next-generation transactions.")]),e._v(" "),a("h3",{attrs:{id:"signature-target"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signature-target"}},[e._v("#")]),e._v(" Signature target")]),e._v(" "),a("p",[e._v("The signature signs over the transaction type as well as the transaction data.\nThis is done to ensure that the transaction cannot be “re-interpreted” as a transaction of a different type.")]),e._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),a("p",[e._v("There are no known backward compatibility issues.")]),e._v(" "),a("h2",{attrs:{id:"test-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[e._v("#")]),e._v(" Test Cases")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Segment ID")]),e._v(" "),a("th",[e._v("Block Number")]),e._v(" "),a("th",[e._v("Canonical Block Hash")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("e78b1ec3")])]),e._v(" "),a("td",[a("code",[e._v("0")])]),e._v(" "),a("td",[a("code",[e._v("0xe78b1ec31bcb535548ce4b6ef384deccad1e7dc599817b65ab5124eeaaee3e58")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("01e78b1ec3")])]),e._v(" "),a("td",[a("code",[e._v("1")])]),e._v(" "),a("td",[a("code",[e._v("0xe78b1ec31bcb535548ce4b6ef384deccad1e7dc599817b65ab5124eeaaee3e58")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("e4e1c0e78b1ec3")])]),e._v(" "),a("td",[a("code",[e._v("15_000_000")])]),e._v(" "),a("td",[a("code",[e._v("0xe78b1ec31bcb535548ce4b6ef384deccad1e7dc599817b65ab5124eeaaee3e58")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("e8d4a50fffe78b1ec3")])]),e._v(" "),a("td",[a("code",[e._v("999_999_999_999")])]),e._v(" "),a("td",[a("code",[e._v("0xe78b1ec31bcb535548ce4b6ef384deccad1e7dc599817b65ab5124eeaaee3e58")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("7fffffffffffffffe78b1ec3")])]),e._v(" "),a("td",[a("code",[e._v("9223372036854775807")])]),e._v(" "),a("td",[a("code",[e._v("0xe78b1ec31bcb535548ce4b6ef384deccad1e7dc599817b65ab5124eeaaee3e58")])])])])]),e._v(" "),a("p",[e._v("Further test cases, TODO.")]),e._v(" "),a("h2",{attrs:{id:"security-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[e._v("#")]),e._v(" Security Considerations")]),e._v(" "),a("h3",{attrs:{id:"why-4-bytes-of-a-block-hash-is-safe-enough-for-the-ancestorid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-4-bytes-of-a-block-hash-is-safe-enough-for-the-ancestorid"}},[e._v("#")]),e._v(' Why 4 bytes of a block hash is "safe enough" for the '),a("code",[e._v("ancestorId")])]),e._v(" "),a("p",[a("strong",[e._v("TL;DR")]),e._v(": The chance of an ineffectual "),a("code",[e._v("ancestorId")]),e._v(" is about 1 in between ~4 billion and ~40 billion, with the greater chance for intentional duplication scenarios, eg. malicious reorgs.")]),e._v(" "),a("p",[a("strong",[e._v("If a collision "),a("em",[e._v("does")]),e._v(" happen")]),e._v(", that means the transaction will be valid on both segments (as is the case under the status quo).")]),e._v(" "),a("p",[e._v('Four bytes, instead of the whole hash (32 bytes), was chosen only to reduce the amount of information required to cross the wire to implement this value.\nUsing the whole hash would result in a "perfectly safe" implementation, and every additional byte reduces the chance of collision exponentially.')]),e._v(" "),a("p",[e._v("The goal of the "),a("code",[e._v("ancestorId")]),e._v(" is to disambiguate one chain segment from another, and in doing so, enable a transaction to define with adequate precision which chain it needs to be on.\nWhen a transaction's "),a("code",[e._v("ancestorId")]),e._v(" references a block, we want to be pretty sure that that reference won't get confused with a different block than the one the author of the transaction had in mind.")]),e._v(" "),a("p",[e._v("We assume the trait of collision resistance is uniformly applicable to all possible subsets of the block hash value, so our preference of using the "),a("em",[e._v("first")]),e._v(" 4 bytes is arbitrary and functionally equivalent to any other subset of equal length.")]),e._v(" "),a("p",[e._v("For the sake of legibility and accessibility, the following arguments will reference the hex representation of 4 bytes, which is 8 characters in length, eg. "),a("code",[e._v("e78b1ec3")]),e._v(".")]),e._v(" "),a("p",[e._v("The chance of a colliding "),a("code",[e._v("ancestorId")]),e._v(" is "),a("code",[e._v("1/(16^8=4_294_967_296)")]),e._v(" times whatever we take the chance of the existence of an equivalently-numbered block (on an alternative chain) to be. Assuming a generous ballpark chance of 10% ("),a("code",[e._v("1/10")]),e._v(") for any given block having a public uncle, this yields "),a("code",[e._v("(1/(16^8=4_294_967_296) * 1/10")]),e._v('. Note that this ballpark assumes "normal" chain and network behavior. In the case of an enduring competing chain segment, this value rises to 100% ('),a("code",[e._v("1")]),e._v(").")]),e._v(" "),a("h3",{attrs:{id:"eligibleminerlist-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eligibleminerlist-3"}},[e._v("#")]),e._v(" "),a("code",[e._v("eligibleMinerList")])]),e._v(" "),a("p",[e._v("Miners who do not find themselves listed in an annotated "),a("code",[e._v("eligibleMinerList")]),e._v(" should be expected to immediately remove the transaction from their transaction pool.")]),e._v(" "),a("p",[e._v("In a pessimistic outlook, we should also expect that these ineligible nodes would not offer rebroadcasts of these transactions, potentially impacting the distribution (and availability) of the transactions to their intended miners. On the other hand, miners are incentivized to make themselves available for reception of such transactions, and there are many ways this is feasible both on-network and off-.")]),e._v(" "),a("p",[e._v("The author of a transaction using the "),a("code",[e._v("eligibleMinerList")]),e._v(' must assume that the "general availability" of the blockchain state database for such a transaction will be lower than a nonrestrictive transaction (since only a subset of miners will be able to process the transaction).')]),e._v(" "),a("p",[e._v("A final consideration is the economics of a whitelisted miner concerning the processing order of transactions in which they are whitelisted and those without whitelists.\nTransactions without whitelists would appear at first glean to be more competitive, and thus should be processed with priority.\nHowever, miners following such a strategy may find their reputation diminished, and, in the worst case, see the assertive preferences of transaction authors shift to their competitors and beyond their reach.")]),e._v(" "),a("h3",{attrs:{id:"ineligibleminerlist-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ineligibleminerlist-3"}},[e._v("#")]),e._v(" "),a("code",[e._v("ineligibleMinerList")])]),e._v(" "),a("p",[e._v("In addition to the concerns and arguments presented by "),a("code",[e._v("eligibleMinerList")]),e._v(" above, there is a unique concern for "),a("code",[e._v("ineligibleMinerList")]),e._v(": in order for a miner entity to avoid ineligibility by a blacklist, they only need to use an alternative adhoc address as the block beneficiary.\nIn principle, this is ineluctable.")]),e._v(" "),a("p",[e._v('However, there are associated costs to the "dodging" miner that should be considered.')]),e._v(" "),a("ul",[a("li",[e._v("The creation of an account requires time and energy. But indeed, this work can be done at any convenient time and circumstance. Probably marginal, but non-zero.")]),e._v(" "),a("li",[e._v('The transfer of funds from multiple accounts requires a commensurate number of transactions. Block rewards are applied after transactions are processed, so the miner is unable to simultaneously shift funds from an adhoc account to a target account in the same block they mine (which would otherwise be a "free" transaction).')]),e._v(" "),a("li",[e._v("In using an adhoc address to dodge a blacklist, the miner may also cause their ineligibility from contemporary whitelist transactions.")])]),e._v(" "),a("h3",{attrs:{id:"validation-costs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validation-costs"}},[e._v("#")]),e._v(" Validation costs")]),e._v(" "),a("p",[e._v("Miner lists and expiry depend on easily cached and contextually available conditions (ie. the containing block header). The infrastructural overhead costs for enforcing these validations are expected to be nominal.")]),e._v(" "),a("p",[e._v("Validation of "),a("code",[e._v("ancestorId")]),e._v(" demands the assertion of a positive database hit by block number (thereby cross-referencing a stored block's hash).\nThis necessary lookup can be (and maybe already is) cached, but we must expect less than 100% hits on cached values, since the lookup value is arbitrary.\nWith that in mind, however, the value provided to a transaction using a deep "),a("code",[e._v("ancestorId")]),e._v(" is increasingly marginal, so we should expect\nmost transactions using this field to use a relatively small set of common, shallow, cache-friendly values.")]),e._v(" "),a("h3",{attrs:{id:"transaction-size-increase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-size-increase"}},[e._v("#")]),e._v(" Transaction size increase")]),e._v(" "),a("p",[e._v("The proposed additional fields potentially increase transaction size.\nThe proposed fields are not associated with any gas costs, establishing no protocol-defined economic mitigation for potential spam.\nHowever, transactions which are considered by a miner to be undesirable can be simply dropped from the transaction pool and ignored.")]),e._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),a("p",[e._v("Copyright and related rights waved via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);