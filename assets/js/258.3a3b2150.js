(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{841:function(e,t,a){"use strict";a.r(t);var n=a(46),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),a("p",[e._v("A standard for Governance contracts that holds the administrative ownership of other smart contracts with voting power distributed as "),a("code",[e._v("ERC-20")]),e._v(" tokens.")]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("The following standard defines the implementation of a standard API for a Governance smart contract based on "),a("code",[e._v("ERC-20")]),e._v(". Existing "),a("code",[e._v("ERC-173")]),e._v(" compatible contracts can upgrade from private key wallet ownership to a Governance smart contract. Adhering to a standard API enables general tools to populate governance information of various projects, thus increasing transparency.")]),e._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v("Traditionally, many contracts that require that they be owned or controlled in some way use "),a("code",[e._v("ERC-173")]),e._v(" which standardized the use of ownership in the smart contracts. For example to withdraw funds or perform administrative actions.")]),e._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("contract")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("dApp")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("doSomethingAdministrative")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("external")]),e._v(" onlyOwner "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// admin logic that can be performed by a single wallet")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("Often, such administrative rights for a contract are written for maintenance purpose but users need to trust the owner. Rescue operations by an owner have raised questions on decentralised nature of the projects. Also, there is a possibility of compromise of an owner's private key.")]),e._v(" "),a("p",[e._v("At present, many governance implementations by ambitious projects need users to visit a specific UI to see governance information about their project. Some examples of live implementations having different API that does the same thing are "),a("a",{attrs:{href:"https://github.com/compound-finance/compound-protocol/blob/master/contracts/Governance/GovernorAlpha.sol#L27",target:"_blank",rel:"noopener noreferrer"}},[e._v("Compound Governance"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/Uniswap/governance/blob/master/contracts/GovernorAlpha.sol#L27",target:"_blank",rel:"noopener noreferrer"}},[e._v("Uniswap Governance"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://github.com/sushiswap/sushiswap/blob/master/contracts/GovernorAlpha.sol#L45",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sushiswap Governance"),a("OutboundLink")],1),e._v(". It's just like if the ERC-20 standard wasn't finalized, then token projects would have their own block explorer. Adhering to a standard API would enable general tools (like Etherscan) to populate governance information, thus increasing transparency to users. Using widely popular "),a("code",[e._v("ERC-20")]),e._v(" token as a governance token, existing tools built to work with "),a("code",[e._v("ERC-20")]),e._v(" can already display voters. This can result in a wide adoption for contract governance over private key based ownership.")]),e._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("p",[e._v("A Governance contract that is compliant with "),a("code",[e._v("ERC-2767")]),e._v(" shall implement the following interfaces:")]),e._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/// @title ERC-2767 Governance")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/// @dev ERC-165 InterfaceID: 0xd8b04e0e")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ERC2767")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("is")]),e._v(" ERC165 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/// @notice Gets number votes required for achieving consensus")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/// @dev Should cost less than 30000 gas")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/// @return Required number of votes for achieving consensus")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("quorumVotes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("external")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("view")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("returns")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/// @notice The address of the Governance ERC20 token")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("token")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("external")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("view")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("returns")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("h3",{attrs:{id:"erc-20-governance-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#erc-20-governance-token"}},[e._v("#")]),e._v(" "),a("code",[e._v("ERC-20")]),e._v(" Governance Token")]),e._v(" "),a("p",[e._v("An "),a("code",[e._v("ERC-2767")]),e._v(" Governance Contract should reference an address through "),a("code",[e._v("token()")]),e._v(" that implements "),a("code",[e._v("ERC-20")]),e._v(" interface. "),a("code",[e._v("token()")]),e._v(" is allowed to return self address ("),a("code",[e._v("address(this)")]),e._v("), if "),a("code",[e._v("ERC-20")]),e._v(" functionalities are implemented in the same contract (one can consider checking out Diamond Standard "),a("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-2535",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("ERC-2535")]),a("OutboundLink")],1),e._v(" to optimise contract size).")]),e._v(" "),a("p",[e._v("Implementations are allowed to have varying "),a("code",[e._v("ERC-20")]),e._v("'s "),a("code",[e._v("totalSupply()")]),e._v(" (through any standard of minting or burning). But having a fixed "),a("code",[e._v("quorumVotes()")]),e._v(" return value in this case would cause required votes consensus in "),a("code",[e._v("%")]),e._v(" with respect to "),a("code",[e._v("totalSupply()")]),e._v(" to change. To automatically account for this, any custom logic under "),a("code",[e._v("quorumVotes()")]),e._v(" is allowed to return for e.g. "),a("code",[e._v("51%")]),e._v(" of "),a("code",[e._v("totalSupply()")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"erc-165-interface-identification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#erc-165-interface-identification"}},[e._v("#")]),e._v(" "),a("code",[e._v("ERC-165")]),e._v(" Interface Identification")]),e._v(" "),a("p",[e._v("An "),a("code",[e._v("ERC-2767")]),e._v(" Governance Contract should also implement "),a("code",[e._v("ERC-165")]),e._v(". This helps general tools to identify whether a contract is a "),a("code",[e._v("ERC-2767")]),e._v(" Governance contract.")]),e._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ERC165")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/// @notice Query if a contract implements an interface")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/// @param interfaceID The interface identifier, as specified in ERC-165")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/// @dev Interface identification is specified in ERC-165. This function")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("///  uses less than 30,000 gas.")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/// @return `true` if the contract implements `interfaceID` and")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("///  `interfaceID` is not 0xffffffff, `false` otherwise")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("supportsInterface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes4")]),e._v(" interfaceID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("external")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("view")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("returns")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("p",[e._v("The goals of this EIP have been the following:")]),e._v(" "),a("ul",[a("li",[e._v("Standardize API of Governance contracts to make it easy for analysis tools to be built.")]),e._v(" "),a("li",[e._v("Encourage use of "),a("code",[e._v("ERC-20")]),e._v(" based weighted governance over existing multi-sig ("),a("em",[e._v("generally limited to 50 max owners")]),e._v(") for big projects.")]),e._v(" "),a("li",[e._v("Encourage existing "),a("code",[e._v("ERC-173")]),e._v(" ownership smart contracts / projects to move to Governance based ownership by removing the effort needed to host custom UI for their project.")]),e._v(" "),a("li",[e._v("Encourage availability of publicly audited governance contracts, just like "),a("code",[e._v("ERC-20")]),e._v(" which anyone can use.")]),e._v(" "),a("li",[e._v("Make it possible to utilize existing "),a("code",[e._v("ERC-20")]),e._v(" tools for owners of governance token analysis.")]),e._v(" "),a("li",[e._v("Make future protocols possible that need to interact with governances of multiple projects.")]),e._v(" "),a("li",[e._v("Keep this EIP minimal and allow another EIPs to standardize any specific functionalities.")])]),e._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),a("p",[e._v("Smart contracts that are "),a("code",[e._v("ERC-173")]),e._v(" compliant can transfer their ownership to a Governance contract. This enables such contracts to become compatible with "),a("code",[e._v("ERC-2767")]),e._v(" Governance.")]),e._v(" "),a("p",[e._v("However, there are some existing projects with governance implementations and most of them have custom APIs ("),a("a",{attrs:{href:"https://github.com/compound-finance/compound-protocol/blob/master/contracts/Governance/GovernorAlpha.sol#L27",target:"_blank",rel:"noopener noreferrer"}},[e._v("Compound Governance"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/Uniswap/governance/blob/master/contracts/GovernorAlpha.sol#L27",target:"_blank",rel:"noopener noreferrer"}},[e._v("Uniswap Governance"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://github.com/sushiswap/sushiswap/blob/master/contracts/GovernorAlpha.sol#L45",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sushiswap Governance"),a("OutboundLink")],1),e._v("), since a standard did not exist. Not having an "),a("code",[e._v("ERC-2767")]),e._v(" compatible governance contract means only that general tools might not be able to populate their governance information without including some special code for the project.")]),e._v(" "),a("p",[e._v("For existing governance contracts to get compatible with "),a("code",[e._v("ERC-2767")]),e._v(":")]),e._v(" "),a("ol",[a("li",[e._v("Projects can deploy a new governance contract and transfer ownership to it to be "),a("code",[e._v("ERC-2767")]),e._v(" compatible. This is suitable for those who use Multi-sig wallets for Governance.")]),e._v(" "),a("li",[e._v("It is understood that redeploying governance contracts would be a troublesome task, and contracts who already have functionality similar to "),a("code",[e._v("ERC-20")]),e._v(" based (weighted votes) have a bit advanced way to avoid it. Basically, they can create a forwarder contract implements "),a("code",[e._v("ERC-2767")]),e._v(" and forwards all calls to the actual non-standard methods. Projects can list the forwarder contract to display the information project's governance info without requiring any custom code in analysys tool, but this might have certain limitations depending on the project's existing governance implementation. Specification of forwarder contract is out of scope for this EIP and it may be addressed in another EIP if required.")])]),e._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("p",[e._v("The reference implementations are available in this "),a("a",{attrs:{href:"https://github.com/zemse/contract-ownership-governance",target:"_blank",rel:"noopener noreferrer"}},[e._v("repository"),a("OutboundLink")],1),e._v(". Publicly audited implementations will be included in future.")]),e._v(" "),a("h2",{attrs:{id:"security-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[e._v("#")]),e._v(" Security Considerations")]),e._v(" "),a("p",[e._v("Implementers are free to choose between On-chain and Off-chain consensus. Exact specification is out of scope for this standard (open for other EIPs to standardize). However, this section mentions points that implementers can consider.")]),e._v(" "),a("h4",{attrs:{id:"on-chain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-chain"}},[e._v("#")]),e._v(" On-chain")]),e._v(" "),a("p",[e._v("In such implementations, community can create transaction proposals and vote on it by sending on-chain transactions.")]),e._v(" "),a("ul",[a("li",[e._v("OpenZeppelin Snapshots can be used to prevent double voting.")])]),e._v(" "),a("h4",{attrs:{id:"off-chain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#off-chain"}},[e._v("#")]),e._v(" Off-chain")]),e._v(" "),a("ul",[a("li",[e._v("The signatures in off-chain governance implementation can follow recommendations of "),a("code",[e._v("ERC-191")]),e._v(" or "),a("code",[e._v("ERC-712")]),e._v(".")]),e._v(" "),a("li",[e._v("To prevent replaying signatures, it'd be best if executer is required to sort the signatures based on increasing addresses.")])]),e._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),a("p",[e._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);