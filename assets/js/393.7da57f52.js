(window.webpackJsonp=window.webpackJsonp||[]).push([[393],{819:function(t,s,n){"use strict";n.r(s);var a=n(46),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"summary"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),n("p",[t._v("A simple non fungible token standard that allows batching tokens into lots and settling p2p atomic transfers in one transaction. You can test out an example implementation on rinkeby here: https://rinkeby.etherscan.io/address/0xffab5ce7c012bc942f5ca0cd42c3c2e1ae5f0005 and view the repo here: https://github.com/alpha-wallet/ERC-Example")]),t._v(" "),n("h2",{attrs:{id:"purpose"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#purpose"}},[t._v("#")]),t._v(" Purpose")]),t._v(" "),n("p",[t._v("While other standards allow the user to transfer a non-fungible token, they require one transaction per token, this is heavy on gas and partially responsible for clogging the ethereum network. There are also few definitions for how to do a simple atomic swap.")]),t._v(" "),n("h2",{attrs:{id:"rinkeby-example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rinkeby-example"}},[t._v("#")]),t._v(" Rinkeby example")]),t._v(" "),n("p",[t._v("This standard has been implemented in an example contract on rinkeby: https://rinkeby.etherscan.io/address/0xffab5ce7c012bc942f5ca0cd42c3c2e1ae5f0005")]),t._v(" "),n("h2",{attrs:{id:"specification"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),n("h3",{attrs:{id:"function-name-constant-returns-string-name"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#function-name-constant-returns-string-name"}},[t._v("#")]),t._v(" function name() constant returns (string name)")]),t._v(" "),n("p",[t._v("returns the name of the contract e.g. CarLotContract")]),t._v(" "),n("h3",{attrs:{id:"function-symbol-constant-returns-string-symbol"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#function-symbol-constant-returns-string-symbol"}},[t._v("#")]),t._v(" function symbol() constant returns (string symbol)")]),t._v(" "),n("p",[t._v("Returns a short string of the symbol of the in-fungible token, this should be short and generic as each token is non-fungible.")]),t._v(" "),n("h3",{attrs:{id:"function-balanceof-address-owner-public-view-returns-uint256-balance"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#function-balanceof-address-owner-public-view-returns-uint256-balance"}},[t._v("#")]),t._v(" function balanceOf(address _owner) public view returns (uint256[] balance)")]),t._v(" "),n("p",[t._v("Returns an array of the users balance.")]),t._v(" "),n("h3",{attrs:{id:"function-transfer-address-to-uint256-tokens-public"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#function-transfer-address-to-uint256-tokens-public"}},[t._v("#")]),t._v(" function transfer(address _to, uint256[] _tokens) public;")]),t._v(" "),n("p",[t._v("Transfer your unique tokens to an address by adding an array of the token indices. This compares favourable to ERC721 as you can transfer a bulk of tokens in one go rather than one at a time. This has a big gas saving as well as being more convenient.")]),t._v(" "),n("h3",{attrs:{id:"function-transferfrom-address-from-address-to-uint256-tokens-public"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#function-transferfrom-address-from-address-to-uint256-tokens-public"}},[t._v("#")]),t._v(" function transferFrom(address _from, address _to, uint256[] _tokens) public;")]),t._v(" "),n("p",[t._v("Transfer a variable amount of tokens from one user to another. This can be done from an authorised party with a specified key e.g. contract owner.")]),t._v(" "),n("h2",{attrs:{id:"optional-functions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#optional-functions"}},[t._v("#")]),t._v(" Optional functions")]),t._v(" "),n("h3",{attrs:{id:"function-totalsupply-constant-returns-uint256-totalsupply"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#function-totalsupply-constant-returns-uint256-totalsupply"}},[t._v("#")]),t._v(" function totalSupply() constant returns (uint256 totalSupply);")]),t._v(" "),n("p",[t._v("Returns the total amount of tokens in the given contract, this should be optional as assets might be allocated and issued on the fly. This means that supply is not always fixed.")]),t._v(" "),n("h3",{attrs:{id:"function-ownerof-uint256-tokenid-public-view-returns-address-owner"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#function-ownerof-uint256-tokenid-public-view-returns-address-owner"}},[t._v("#")]),t._v(" function ownerOf(uint256 _tokenId) public view returns (address _owner);")]),t._v(" "),n("p",[t._v("Returns the owner of a particular token, I think this should be optional as not every token contract will need to track the owner of a unique token and it costs gas to loop and map the token id owners each time the balances change.")]),t._v(" "),n("h3",{attrs:{id:"function-trade-uint256-expirytimestamp-uint256-tokenindices-uint8-v-bytes32-r-bytes32-s-public-payable"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#function-trade-uint256-expirytimestamp-uint256-tokenindices-uint8-v-bytes32-r-bytes32-s-public-payable"}},[t._v("#")]),t._v(" function trade(uint256 expiryTimeStamp, uint256[] tokenIndices, uint8 v, bytes32 r, bytes32 s) public payable")]),t._v(" "),n("p",[t._v("A function which allows a user to sell a batch of non-fungible tokens without paying for the gas fee (only the buyer has to) in a p2p atomic swap. This is achieved by signing an attestation containing the amount of tokens to sell, the contract address, an expiry timestamp, the price and a prefix containing the ERC spec name and chain id. A buyer can then pay for the deal in one transaction by attaching the appropriate ether to satisfy the deal.")]),t._v(" "),n("p",[t._v("This design is also more efficient as it allows orders to be done offline until settlement as opposed to creating orders in a smart contract and updating them. The expiry timestamp protects the seller against people using old orders.")]),t._v(" "),n("p",[t._v("This opens up the gates for a p2p atomic swap but should be optional to this standard as some may not have use for it.")]),t._v(" "),n("p",[t._v("Some protections need to be added to the message such as encoding the chain id, contract address and the ERC spec name to prevent replays and spoofing people into signing message that allow a trade.")]),t._v(" "),n("h2",{attrs:{id:"interface"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#interface"}},[t._v("#")]),t._v(" Interface")]),t._v(" "),n("div",{staticClass:"language-solidity line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-solidity"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("contract")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ERC165")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// @notice Query if a contract implements an interface")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// @param interfaceID The interface identifier, as specified in ERC-165")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// @dev Interface identification is specified in ERC-165. This function")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///  uses less than 30,000 gas.")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// @return `true` if the contract implements `interfaceID` and")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///  `interfaceID` is not 0xffffffff, `false` otherwise")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("supportsInterface")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes4")]),t._v(" interfaceID"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("view")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ERC875")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* is ERC165 */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Transfer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" _from"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" _to"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" tokenIndices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constant")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("symbol")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constant")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" symbol"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("balanceOf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" _owner"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("view")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" _balances"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("transfer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" _to"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" _tokens"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("transferFrom")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" _from"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" _to"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" _tokens"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//If you want the standard functions with atomic swap trading added")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ERC875WithAtomicSwapTrading")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" ERC875 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("trade")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" expiryTimeStamp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" tokenIndices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint8")]),t._v(" v"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" s\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("payable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br")])]),n("h2",{attrs:{id:"example-implementation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-implementation"}},[t._v("#")]),t._v(" Example implementation")]),t._v(" "),n("p",[t._v("Please visit this "),n("a",{attrs:{href:"https://github.com/alpha-wallet/ERC875",target:"_blank",rel:"noopener noreferrer"}},[t._v("repo"),n("OutboundLink")],1),t._v(" to see an example implementation")]),t._v(" "),n("h2",{attrs:{id:"copyright"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),n("p",[t._v("Copyright and related rights waived via "),n("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC0"),n("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);s.default=e.exports}}]);