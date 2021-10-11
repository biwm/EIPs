(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{748:function(t,e,a){"use strict";a.r(e);var s=a(46),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[t._v("#")]),t._v(" Simple Summary")]),t._v(" "),a("p",[t._v("Provide access to original transaction data.")]),t._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),a("p",[t._v("This EIP introduces the following three EVM instructions: "),a("code",[t._v("ORIGINDATALOAD")]),t._v(", "),a("code",[t._v("ORIGINDATASIZE")]),t._v(", and "),a("code",[t._v("ORIGINDATACOPY")]),t._v(".")]),t._v(" "),a("p",[t._v("These three instructions are meant to provide access to the original transaction's "),a("code",[t._v("data")]),t._v(" payload, enabling a gas-efficient way of accessing large data payloads in cross-contract calls.")]),t._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),a("p",[t._v("As the Ethereum development scene matures, more ambitious and complex features are introduced into smart contracts more often than not requiring the utilization of complex and at times large data structures. Given the inherent limits of the EVM, however, transporting large data structures in between contracts is a costly task that can at times lead to even futile scenarios whereby the gas consumption of such an operation is impossible to execute within the gas limit bounds as well as without sacrificing a large chunk of ETH to facilitate its gas cost.")]),t._v(" "),a("p",[t._v("The purpose of this EIP is to render these features viable by introducing a way via which multi-contract systems are able to access the same in-memory data source without necessarily transmitting the full payload between them.")]),t._v(" "),a("p",[t._v("This EIP enables elaborate smart contract features to become part of a larger call-chain by efficiently reading data from the original transaction payload rather than requiring the data to be passed in as call-level data. Its inclusion will mainly benefit advanced trustless schemes to manifest, such as efficient verification of Merkle Patricia trees validating the storage value of a particular Ethereum block or EVM-based layer 2 solutions.")]),t._v(" "),a("p",[t._v("A side-effect of this change is that smart contract systems relying entirely on origin data inherently guarantee that the data they receive has not been malformed by an intermediate smart contract call.")]),t._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),a("h3",{attrs:{id:"origindataload-0x47-origindatasize-0x48-and-origindatacopy-0x49"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#origindataload-0x47-origindatasize-0x48-and-origindatacopy-0x49"}},[t._v("#")]),t._v(" ORIGINDATALOAD ("),a("code",[t._v("0x47")]),t._v("), ORIGINDATASIZE ("),a("code",[t._v("0x48")]),t._v(") and ORIGINDATACOPY ("),a("code",[t._v("0x49")]),t._v(")")]),t._v(" "),a("p",[t._v("These instructions are meant to operate similarly to their call-prefixed counterparts with the exception that they instead operate on the original "),a("code",[t._v("data")]),t._v(" of a transaction instead of the current call's data. In detail:")]),t._v(" "),a("ul",[a("li",[t._v("ORIGINDATALOAD ("),a("code",[t._v("0x47")]),t._v(") performs similarly to CALLDATALOAD ("),a("code",[t._v("0x35")]),t._v(")")]),t._v(" "),a("li",[t._v("ORIGINDATASIZE ("),a("code",[t._v("0x48")]),t._v(") performs similarly to CALLDATASIZE ("),a("code",[t._v("0x36")]),t._v(")")]),t._v(" "),a("li",[t._v("ORIGINDATACOPY ("),a("code",[t._v("0x49")]),t._v(") performs similarly to CALLDATACOPY ("),a("code",[t._v("0x37")]),t._v(")")])]),t._v(" "),a("p",[t._v("As the data is retrieved once again from the execution environment, the costs for the three instructions will be "),a("code",[t._v("G_verylow")]),t._v(", "),a("code",[t._v("G_base")]),t._v(" and "),a("code",[t._v("G_base + G_verylow * (number of words copied, rounded up)")]),t._v(" respectively.")]),t._v(" "),a("p",[t._v("The transaction data the "),a("code",[t._v("ORIGINDATA*")]),t._v(" opcodes operate on will be equivalent to the "),a("code",[t._v("calldata")]),t._v(" specified in the "),a("code",[t._v("args*")]),t._v(" parameter to the nearest "),a("code",[t._v("AUTHCALL")]),t._v(" ("),a("code",[t._v("0xf7")]),t._v(") up the stack.  If there is no "),a("code",[t._v("AUTHCALL")]),t._v(" in the stack then "),a("code",[t._v("ORIGINDATA*")]),t._v(" will operate on the transaction's original "),a("code",[t._v("data")]),t._v(" field.")]),t._v(" "),a("p",[t._v("This interaction ensures full compatibility with "),a("RouterLink",{attrs:{to:"/eip-3074.html"}},[t._v("EIP-3074")]),t._v(" and ensures that no form of discrimination is introduced back into the system by this EIP e.g. by contracts entirely relying on "),a("code",[t._v("ORIGINDATA*")]),t._v(" and thus allowing only EOAs to supply data to them.")],1),t._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[t._v("#")]),t._v(" Rationale")]),t._v(" "),a("h3",{attrs:{id:"authcall-0xf7-interaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authcall-0xf7-interaction"}},[t._v("#")]),t._v(" AUTHCALL ("),a("code",[t._v("0xf7")]),t._v(") Interaction")]),t._v(" "),a("p",[t._v("The "),a("RouterLink",{attrs:{to:"/eip-3074.html"}},[t._v("EIP-3074")]),t._v(" that will be part of the London fork has introduced a new call instruction called "),a("code",[t._v("AUTHCALL")]),t._v(" ("),a("code",[t._v("0xf7")]),t._v(") that will replace a transaction's "),a("code",[t._v("ORIGIN")]),t._v(" ("),a("code",[t._v("0x32")]),t._v(") with the context variable "),a("code",[t._v("authorized")]),t._v(". The intention of "),a("code",[t._v("AUTHCALL")]),t._v(" is to prevent discrimination between smart contracts and EOAs which "),a("code",[t._v("ORIGIN")]),t._v(" initially facilitated and as a result, it is sensible also replace the values retrieved by the "),a("code",[t._v("ORIGINDATA*")]),t._v(" opcodes to the ones used in the "),a("code",[t._v("AUTHCALL")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"naming-conventions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#naming-conventions"}},[t._v("#")]),t._v(" Naming Conventions")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("ORIGIN")]),t._v("-prefixed instructions attempted to conform to the existing naming convention of "),a("code",[t._v("CALL")]),t._v("-prefixed instructions given the existence of the "),a("code",[t._v("ORIGIN")]),t._v(" ("),a("code",[t._v("0x32")]),t._v(") instruction which is equivalent to the "),a("code",[t._v("CALLER")]),t._v(" ("),a("code",[t._v("0x33")]),t._v(") instruction but on the original transaction's context.")]),t._v(" "),a("h3",{attrs:{id:"instruction-address-space"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instruction-address-space"}},[t._v("#")]),t._v(" Instruction Address Space")]),t._v(" "),a("p",[t._v("The instruction address space of the "),a("code",[t._v("0x30-0x3f")]),t._v(" has been exhausted by calls that already provide information about the execution context of a call so a new range had to be identified that is suitable for the purposes of the EIP.")]),t._v(" "),a("p",[t._v("Given that the "),a("RouterLink",{attrs:{to:"/eip-1344.html"}},[t._v("EIP-1344")]),t._v(" "),a("code",[t._v("CHAINID")]),t._v(" opcode was included at "),a("code",[t._v("0x46")]),t._v(", it made sense to include additional transaction-related data beyond it since the Chain ID is also included in transaction payloads apart from the blocks themselves, rendering the "),a("code",[t._v("0x46-0x4f")]),t._v(" address space reserved for more transaction-related data that may be necessary in the future, such as the EOA's nonce.")],1),t._v(" "),a("h3",{attrs:{id:"gas-costs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gas-costs"}},[t._v("#")]),t._v(" Gas Costs")]),t._v(" "),a("p",[t._v("The opcodes ORIGINDATALOAD ("),a("code",[t._v("0x47")]),t._v("), ORIGINDATASIZE ("),a("code",[t._v("0x48")]),t._v("), and ORIGINDATACOPY ("),a("code",[t._v("0x49")]),t._v(") essentially perform the same thing as opcodes CALLDATALOAD ("),a("code",[t._v("0x35")]),t._v("), CALLDATASIZE ("),a("code",[t._v("0x36")]),t._v("), and CALLDATACOPY ("),a("code",[t._v("0x37")]),t._v(") respectively and thus share the exact same gas costs.")]),t._v(" "),a("h3",{attrs:{id:"instruction-space-pollution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instruction-space-pollution"}},[t._v("#")]),t._v(" Instruction Space Pollution")]),t._v(" "),a("p",[t._v("One can argue that multiple new EVM instructions pollute the EVM instruction address space and could cause issues in assigning sensible instruction codes to future instructions. This particular issue was assessed and a methodology via which the raw RLP encoded transaction may be accessible to the EVM was ideated. This would "),a("em",[t._v("future-proof")]),t._v(" the new instruction set as it would be usable for other members of the transaction that may be desired to be accessible on-chain in the future, however, it would also cause a redundancy in the "),a("code",[t._v("ORIGIN")]),t._v(" opcode.")]),t._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[t._v("#")]),t._v(" Backwards Compatibility")]),t._v(" "),a("p",[t._v("The EIP does not alter or adjust existing functionality provided by the EVM and as such, no known issues exist.")]),t._v(" "),a("h2",{attrs:{id:"test-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[t._v("#")]),t._v(" Test Cases")]),t._v(" "),a("p",[t._v("TODO.")]),t._v(" "),a("h2",{attrs:{id:"security-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[t._v("#")]),t._v(" Security Considerations")]),t._v(" "),a("h3",{attrs:{id:"introspective-contracts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introspective-contracts"}},[t._v("#")]),t._v(" Introspective Contracts")]),t._v(" "),a("p",[t._v("Atomically, the "),a("code",[t._v("ORIGINDATALOAD")]),t._v(" and "),a("code",[t._v("ORIGINDATACOPY")]),t._v(" values should be considered insecure as they can easily be spoofed by creating an entry smart contract with the appropriate function signature and arguments that consequently invokes other contracts within the call chain. In brief, one should always assume that "),a("code",[t._v("tx.data != calldata")]),t._v(" and these instructions should not be used as an introspection tool alone.")]),t._v(" "),a("h3",{attrs:{id:"denial-of-service-attack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#denial-of-service-attack"}},[t._v("#")]),t._v(" Denial-of-Service Attack")]),t._v(" "),a("p",[t._v("An initial concern that may arise from this EIP is the additional contextual data that must be provided at the software level of nodes to the EVM in order for it to be able to access the necessary data via the "),a("code",[t._v("ORIGINDATALOAD")]),t._v(" and "),a("code",[t._v("ORIGINDATACOPY")]),t._v(" instructions.")]),t._v(" "),a("p",[t._v("This would lead to an increase in memory consumption, however, this increase should be negligible if at all existent given that the data of a transaction should already exist in memory as part of its execution process; a step in the overall inclusion of a transaction within a block.")]),t._v(" "),a("h3",{attrs:{id:"multi-contract-system-gas-reduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-contract-system-gas-reduction"}},[t._v("#")]),t._v(" Multi-Contract System Gas Reduction")]),t._v(" "),a("p",[t._v("Given that most complex smart contract systems deployed on Ethereum today rely on cross-contract interactions whereby values are passed from one contract to another via function calls, the "),a("code",[t._v("ORIGIN")]),t._v("-prefixed instruction set would enable a way for smart contract systems to acquire access to the original transaction data at any given step in the call chain execution which could result in cross-contract calls ultimately consuming less gas if the data passed between them is reduced as a side-effect of this change.")]),t._v(" "),a("p",[t._v("The gas reduction, however, would be an implementation-based optimization that would also be solely applicable for rudimentary memory arguments rather than storage-based data, the latter of which is most commonly utilized in these types of calls. As a result, the overall gas reduction observed by this change will be negligible for most implementations.")]),t._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),a("p",[t._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC0"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=i.exports}}]);