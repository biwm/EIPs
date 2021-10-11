(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{686:function(e,t,o){"use strict";o.r(t);var a=o(46),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"abstract"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),o("p",[e._v("Code merkleization, along with binarification of the trie and gas cost bump of state accessing opcodes, are considered as the main levers for decreasing block witness sizes in stateless or partial-stateless Eth1x roadmaps. Here we specify a fixed-sized chunk approach to code merkleization and outline how the transition of existing contracts to this model would look like.")]),e._v(" "),o("h2",{attrs:{id:"motivation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),o("p",[e._v("Bytecode is currently the "),o("a",{attrs:{href:"https://github.com/mandrigin/ethereum-mainnet-bin-tries-data",target:"_blank",rel:"noopener noreferrer"}},[e._v("second contributor"),o("OutboundLink")],1),e._v(" to block witness size, after the proof hashes. Transitioning the trie from hexary to binary reduces the hash section of the witness by 3x, thereby making code the first contributor. By breaking contract code into chunks and committing to those chunks in a merkle tree, stateless clients would only need the chunks that were touched during a given transaction to execute it.")]),e._v(" "),o("h2",{attrs:{id:"specification"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),o("p",[e._v("This specification assumes that "),o("RouterLink",{attrs:{to:"/eip-2584.html"}},[e._v("EIP-2584")]),e._v(" is deployed, and the merkleization rules and gas costs are proposed accordingly. What follows is structured to have two sections:")],1),e._v(" "),o("ol",[o("li",[e._v("How a given contract code is split into chunks and then merkleized")]),e._v(" "),o("li",[e._v("How to merkleize all existing contract codes during a hardfork")])]),e._v(" "),o("h3",{attrs:{id:"constants-and-definitions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#constants-and-definitions"}},[e._v("#")]),e._v(" Constants and Definitions")]),e._v(" "),o("h4",{attrs:{id:"constants"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#constants"}},[e._v("#")]),e._v(" Constants")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("CHUNK_SIZE")]),e._v(": 32 (bytes)")]),e._v(" "),o("li",[o("code",[e._v("KEY_LENGTH")]),e._v(": 2 (bytes)")]),e._v(" "),o("li",[o("code",[e._v("MAX_CHUNK_COUNT")]),e._v(": "),o("code",[e._v("0xfffc")])]),e._v(" "),o("li",[o("code",[e._v("VERSION_KEY")]),e._v(": "),o("code",[e._v("0xfffd")])]),e._v(" "),o("li",[o("code",[e._v("CODELEN_KEY")]),e._v(": "),o("code",[e._v("0xfffe")])]),e._v(" "),o("li",[o("code",[e._v("CODEHASH_KEY")]),e._v(": "),o("code",[e._v("0xffff")])]),e._v(" "),o("li",[o("code",[e._v("VERSION")]),e._v(": 0")]),e._v(" "),o("li",[o("code",[e._v("EMPTY_CODE_ROOT")]),e._v(": "),o("code",[e._v("0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470")]),e._v(" (=="),o("code",[e._v("keccak256('')")]),e._v(")")]),e._v(" "),o("li",[o("code",[e._v("HF_BLOCK_NUMBER")]),e._v(": to be defined")])]),e._v(" "),o("h4",{attrs:{id:"definitions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#definitions"}},[e._v("#")]),e._v(" Definitions")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("BE(x, N)")]),e._v(": casts "),o("code",[e._v("x")]),e._v(" to an unsigned integer of "),o("code",[e._v("N")]),e._v(" bytes and returns its big-endian representation")])]),e._v(" "),o("h3",{attrs:{id:"code-merkleization"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#code-merkleization"}},[e._v("#")]),e._v(" Code merkleization")]),e._v(" "),o("p",[e._v("For an account record "),o("code",[e._v("A")]),e._v(" with code "),o("code",[e._v("C")]),e._v(", the field "),o("code",[e._v("A.codeHash")]),e._v(" is replaced with "),o("code",[e._v("codeRoot")]),e._v(". "),o("code",[e._v("codeRoot")]),e._v(" is "),o("code",[e._v("EMPTY_CODE_ROOT")]),e._v(" if "),o("code",[e._v("C")]),e._v(" is empty. Otherwise it contains the root of "),o("code",[e._v("codeTrie")]),e._v(", a "),o("a",{attrs:{href:"https://hackmd.io/uCWOpSrUQaytBgcO0MVkTQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("binary trie"),o("OutboundLink")],1),e._v(" with the following leaves:")]),e._v(" "),o("ul",[o("li",[e._v("Key: "),o("code",[e._v("VERSION_KEY")]),e._v(", value: "),o("code",[e._v("BE(VERSION, 1)")])]),e._v(" "),o("li",[e._v("Key: "),o("code",[e._v("CODELEN_KEY")]),e._v(", value: "),o("code",[e._v("BE(length(C), 4)")])]),e._v(" "),o("li",[e._v("Key: "),o("code",[e._v("CODEHASH_KEY")]),e._v(", value: "),o("code",[e._v("keccak256(C)")])])]),e._v(" "),o("p",[e._v("In addition to the above, "),o("code",[e._v("codeTrie")]),e._v(" commits to a list of code "),o("code",[e._v("chunks = [(FIO_0, code_0), ..., (FIO_n, code_n)]")]),e._v(" which are derived from "),o("code",[e._v("C")]),e._v(" in a way that:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("n < MAX_CHUNK_COUNT")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("code_0 || ... || code_n == C")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("length(code_i) == CHUNK_SIZE")]),e._v(" where "),o("code",[e._v("0 <= i < n")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("length(code_n) <= CHUNK_SIZE")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("FIO_i")]),e._v(" is the offset of the first instruction within the chunk. It should only be greater than zero if the last instruction in "),o("code",[e._v("code_i-1")]),e._v(" is a multi-byte instruction (like "),o("code",[e._v("PUSHN")]),e._v(") crossing the chunk boundary. It is set to "),o("code",[e._v("CHUNK_SIZE")]),e._v(" in the case where all bytes of a chunk are data.")])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("i")]),e._v("th element of "),o("code",[e._v("chunks")]),e._v(" is stored in "),o("code",[e._v("codeTrie")]),e._v(" with:")]),e._v(" "),o("ul",[o("li",[e._v("Key: "),o("code",[e._v("BE(i, KEY_LENGTH)")])]),e._v(" "),o("li",[e._v("Value: "),o("code",[e._v("BE(FIO_i, 1) || code_i")]),e._v(", where "),o("code",[e._v("||")]),e._v(" stands for byte-wise concatenation")])]),e._v(" "),o("h4",{attrs:{id:"contract-creation-gas-cost"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#contract-creation-gas-cost"}},[e._v("#")]),e._v(" Contract creation gas cost")]),e._v(" "),o("p",[e._v("As of now there is a charge of 200 gas per byte of the code stored in state by contract creation operations, be it initiated via "),o("code",[e._v("CREATE")]),e._v(", "),o("code",[e._v("CREATE2")]),e._v(", or an external transaction. This per byte cost is to be increased from "),o("code",[e._v("200")]),e._v(" to "),o("code",[e._v("TBD")]),e._v(" to account for the chunking and merkleization costs.")]),e._v(" "),o("h3",{attrs:{id:"updating-existing-code-transition-process"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#updating-existing-code-transition-process"}},[e._v("#")]),e._v(" Updating existing code (transition process)")]),e._v(" "),o("p",[e._v("The transition process involves reading all contracts in the state and applying the above procedure to them. A benchmark showing how long this process will take is still pending, but intuitively it should take longer than the time between two blocks (in the order of hours). Hence we recommend clients to pre-process the changes before the EIP is activated.")]),e._v(" "),o("p",[e._v("Code has the nice property that it is (mostly) static. Therefore clients can maintain a mapping of "),o("code",[e._v("[accountAddress -> codeRoot]")]),e._v(" which stores the results for the contracts they have already merkleized. During this pre-computation phase, whenever a new contract is created its "),o("code",[e._v("codeRoot")]),e._v(" is computed, and added to the mapping. Whenever a contract self-destructs, its corresponding entry is removed.")]),e._v(" "),o("p",[e._v("At block "),o("code",[e._v("HF_BLOCK_NUMBER")]),e._v(" when the EIP gets activated, before executing any transaction the client must update the account record for all contracts with non-empty code in the state to replace the "),o("code",[e._v("codeHash")]),e._v(" field with the pre-computed "),o("code",[e._v("codeRoot")]),e._v(". EoA accounts will keep their "),o("code",[e._v("codeHash")]),e._v(" value as "),o("code",[e._v("codeRoot")]),e._v(". "),o("em",[e._v("Accounts with empty code will keep their "),o("code",[e._v("codeHash")]),e._v(" value as "),o("code",[e._v("codeRoot")]),e._v(".")])]),e._v(" "),o("h2",{attrs:{id:"rationale"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),o("h3",{attrs:{id:"hexary-vs-binary-trie"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hexary-vs-binary-trie"}},[e._v("#")]),e._v(" Hexary vs binary trie")]),e._v(" "),o("p",[e._v("The Ethereum mainnet state is encoded as of now in a hexary Merkle Patricia Tree. As part of the Eth1x roadmap, a transition to a "),o("a",{attrs:{href:"https://ethresear.ch/t/binary-trie-format/7621",target:"_blank",rel:"noopener noreferrer"}},[e._v("binary trie"),o("OutboundLink")],1),e._v(" has been "),o("a",{attrs:{href:"https://medium.com/@mandrigin/stateless-ethereum-binary-tries-experiment-b2c035497768",target:"_blank",rel:"noopener noreferrer"}},[e._v("investigated"),o("OutboundLink")],1),e._v(" with the goal of reducing witness sizes. Because code chunks are also stored in the trie, this EIP would benefit from the witness size reduction offered by the binarification. Therefore we have decided to explicitly state "),o("RouterLink",{attrs:{to:"/eip-2584.html"}},[e._v("EIP-2584")]),e._v(" to be a requirement of this change. Note that if code merkleization is included in a hard-fork beforehand, then all code must be re-merkleized after the binary transition.")],1),e._v(" "),o("h3",{attrs:{id:"chunk-size"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#chunk-size"}},[e._v("#")]),e._v(" Chunk size")]),e._v(" "),o("p",[e._v("The current recommended chunk size of 32 bytes has been selected based on a few observations. Smaller chunks are more efficient (i.e. have higher "),o("a",{attrs:{href:"https://ethresear.ch/t/some-quick-numbers-on-code-merkelization/7260/3",target:"_blank",rel:"noopener noreferrer"}},[e._v("chunk utilization"),o("OutboundLink")],1),e._v("), but incur a larger hash overhead (i.e. number of hashes as part of the proof) due to a higher trie depth. Larger chunks are less efficient, but incur less hash overhead. We plan to run a larger experiment comparing various chunk sizes to arrive at a final recommendation.")]),e._v(" "),o("h3",{attrs:{id:"first-instruction-offset"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#first-instruction-offset"}},[e._v("#")]),e._v(" First instruction offset")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("firstInstructionOffset")]),e._v(" fields allows safe jumpdest analysis when a client doesn't have all the chunks, e.g. a stateless clients receiving block witnesses.")]),e._v(" "),o("p",[e._v("Note: there could be an edge case when computing FIO for the chunks where the data bytes at the end of a bytecode (last chunk) resemble a multi-byte instruction. This case can be safely ignored.")]),e._v(" "),o("h3",{attrs:{id:"gas-cost-of-code-accessing-opcodes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gas-cost-of-code-accessing-opcodes"}},[e._v("#")]),e._v(" Gas cost of code-accessing opcodes")]),e._v(" "),o("p",[e._v("How merkleized code is stored in the client database affects the performance of code-accessing opcodes, i.e: CALL, CALLCODE, DELEGATECALL, STATICCALL, EXTCODESIZE, EXTCODEHASH, and EXTCODECOPY. Storing the code trie with all intermediate nodes in the database implies multiple look-ups to fetch the code of the callee, which is more than the current one look-up (excluding the trie traversal to get the account) required. Note CODECOPY and CODESIZE are not affected since the code for the current contract has already been loaded to memory.")]),e._v(" "),o("p",[e._v("The gas cost analysis in this section assumes a specific way of storing it. In this approach clients only merkleize code once during creation to compute "),o("code",[e._v("codeRoot")]),e._v(", but then discard the chunks. They instead store the full bytecode as well as the metadata fields in the database. We believe per-chunk metering for calls would be more easily solvable by witness metering in the stateless model.")]),e._v(" "),o("h3",{attrs:{id:"different-chunking-logic"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#different-chunking-logic"}},[e._v("#")]),e._v(" Different chunking logic")]),e._v(" "),o("p",[e._v("We have considered an alternative option to package chunks, where each chunk is prepended with its "),o("code",[e._v("chunkLength")]),e._v(" and would only contain complete opcodes (i.e. any multi-byte opcode not fitting the "),o("code",[e._v("CHUNK_SIZE")]),e._v(" would be deferred to the next chunk).")]),e._v(" "),o("p",[e._v("This approach has downsides compared to the one specified:")]),e._v(" "),o("ol",[o("li",[e._v("Requires a larger "),o("code",[e._v("CHUNK_SIZE")]),e._v(" -- at least 33 bytes to accommodate the "),o("code",[e._v("PUSH32")]),e._v(" instruction.")]),e._v(" "),o("li",[e._v("It is more wasteful. For example, "),o("code",[e._v("DUP1 PUSH32 <32-byte payload>")]),e._v(" would be encoded as two chunks, the first chunk contains only "),o("code",[e._v("DUP1")]),e._v(", and the second contains only the "),o("code",[e._v("PUSH32")]),e._v(" instruction with its payload.")]),e._v(" "),o("li",[e._v("Calculating the number of chunks is not trivial and would have to be stored explicitly in the metadata.")])]),e._v(" "),o("p",[e._v("Additionally we have reviewed many other options (basic block based, Solidity subroutines (requires determining the control flow), EIP-2315 subroutines). This EIP however only focuses on the chunk-based option.")]),e._v(" "),o("h3",{attrs:{id:"rlp-and-ssz"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rlp-and-ssz"}},[e._v("#")]),e._v(" RLP and SSZ")]),e._v(" "),o("p",[e._v("To remain consistent with the binary transition proposal we avoid using RLP for serializing the leaf values. We have furthermore considered SSZ for both serializing data and merkleization and remain open to adopting it, but decided to use the binary trie format for simplicity.")]),e._v(" "),o("h3",{attrs:{id:"metadata-fields"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#metadata-fields"}},[e._v("#")]),e._v(" Metadata fields")]),e._v(" "),o("p",[e._v("The metadata fields "),o("code",[e._v("version")]),e._v(", "),o("code",[e._v("codeLen")]),e._v(" and "),o("code",[e._v("codeHash")]),e._v(" are added mostly to facilitate a cheaper implementation of "),o("code",[e._v("EXTCODESIZE")]),e._v(" and "),o("code",[e._v("EXTCODEHASH")]),e._v(" in a stateless paradigm. The version field allows for differentiating between bytecode types (e.g. "),o("RouterLink",{attrs:{to:"/eip-615.html"}},[e._v("EVM1.5/EIP-615")]),e._v(", "),o("RouterLink",{attrs:{to:"/eip-2315.html"}},[e._v("EIP-2315")]),e._v(", etc.) or code merkleization schemes (or merkleization settings, such as larger "),o("code",[e._v("CHUNK_SIZE")]),e._v(") in future.")],1),e._v(" "),o("p",[e._v("Instead of encoding "),o("code",[e._v("codeHash")]),e._v(" and "),o("code",[e._v("codeSize")]),e._v(" in the metadata, they could be made part of the account. In our opinion, the metadata is a more concise option, because EoAs do not need these fields, resulting in either additional logic (to omit those fields in the accounts) or calculation (to include them in merkleizing the account).")]),e._v(" "),o("p",[e._v("An alternative option to the version field would be to add an account-level field: either following "),o("RouterLink",{attrs:{to:"/eip-1702.html"}},[e._v("EIP-1702")]),e._v(", or by adding an "),o("code",[e._v("accountKind")]),e._v(" field (with potential options: "),o("code",[e._v("eoa")]),e._v(", "),o("code",[e._v("merkleized_evm_chunk32")]),e._v(", "),o("code",[e._v("merkleized_eip2315_chunk64")]),e._v(", etc.) as the first member of the account. One benefit this could provide is omitting "),o("code",[e._v("codeHash")]),e._v(" for EoAs.")],1),e._v(" "),o("h3",{attrs:{id:"the-keys-in-the-code-trie-and-key-length"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-keys-in-the-code-trie-and-key-length"}},[e._v("#")]),e._v(" The keys in the code trie (and "),o("code",[e._v("KEY_LENGTH")]),e._v(")")]),e._v(" "),o("p",[e._v("As explained in the specification above, the keys in the code trie are indices of the "),o("code",[e._v("chunks")]),e._v(" array. Having a key length of 2 bytes means the trie can address 65536 - 3 (minus metadata fields) chunks, which corresponds to ~2Mb code size. That allows for roughly ~85x increase in the code size limit in future without requiring a change in merkleization.")]),e._v(" "),o("h3",{attrs:{id:"alternate-values-of-coderoot-for-eoas"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#alternate-values-of-coderoot-for-eoas"}},[e._v("#")]),e._v(" Alternate values of codeRoot for EoAs")]),e._v(" "),o("p",[e._v("This proposal changes the meaning of the fourth field ("),o("code",[e._v("codeHash")]),e._v(") of the account. Prior to this change, that field represents the Keccak-256 hash of the bytecode, which is logically hash of an empty input for EoAs.")]),e._v(" "),o("p",[e._v("Since "),o("code",[e._v("codeHash")]),e._v(" is replaced with "),o("code",[e._v("codeRoot")]),e._v(", the root hash of the code trie, the value would be different for EoAs under the new rules: the root of the "),o("code",[e._v("codeTrie(metadata=[codeHash=keccak256(''), codeSize=0])")]),e._v(". An alternative would be simply using the hash of an empty trie. Or to avoid introducing yet another constant (the result of the above), one could also consider using "),o("code",[e._v("codeRoot = 0")]),e._v(" for EoAs.")]),e._v(" "),o("p",[e._v("However, we wanted to maintain compatibility with "),o("RouterLink",{attrs:{to:"/eip-1052.html"}},[e._v("EIP-1052")]),e._v(" and decided to keep matters simple by using the hash of empty input ("),o("code",[e._v("c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470")]),e._v(") for EoAs.")],1),e._v(" "),o("h2",{attrs:{id:"backwards-compatibility"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),o("p",[e._v("From the perspective of contracts, the design aims to be transparent, with the exception of changes in gas costs.")]),e._v(" "),o("p",[e._v("Outside of the interface presented for contracts, this proposal introduces major changes to the way contract code is stored, and needs a substantial modification of the Ethereum state. Therefore it can only be introduced via a hard fork.")]),e._v(" "),o("h2",{attrs:{id:"test-cases"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[e._v("#")]),e._v(" Test Cases")]),e._v(" "),o("p",[e._v("TBD")]),e._v(" "),o("p",[e._v("Show the "),o("code",[e._v("codeRoot")]),e._v(" for the following cases:")]),e._v(" "),o("ol",[o("li",[o("code",[e._v("code=''")])]),e._v(" "),o("li",[o("code",[e._v("code='PUSH1(0) DUP1 REVERT'")])]),e._v(" "),o("li",[o("code",[e._v("code='PUSH32(-1)'")]),e._v(" (data passing through a chunk boundary)")])]),e._v(" "),o("h2",{attrs:{id:"implementation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),o("p",[e._v("The implementation of the chunking and merkleization logic in Typescript can be found "),o("a",{attrs:{href:"https://github.com/ewasm/biturbo/blob/merklize-mainnet-blocks/src/relayer/bytecode.ts#L172",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(", and in Python "),o("a",{attrs:{href:"https://github.com/hugo-dc/code-chunks/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(". Please note neither of these examples currently use a binary tree.")]),e._v(" "),o("h2",{attrs:{id:"security-considerations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[e._v("#")]),e._v(" Security Considerations")]),e._v(" "),o("p",[e._v("TBA")]),e._v(" "),o("h2",{attrs:{id:"copyright"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),o("p",[e._v("Copyright and related rights waived via "),o("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),o("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=i.exports}}]);