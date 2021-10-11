(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{499:function(t,s,a){"use strict";a.r(s);var e=a(46),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v('In smart contracts, we will need methods to handle cryptographic attestations to a users identifier or abilities. Let\'s say we have a real estate agent, KiwiRealtors, that provides an "expression of interest" function though a smart contract and requires the users to provide an attestation that they are a resident of New Zealand or Australia, as a legal requirement. This has actually happened in the New Zealand property market and it is the perfect example of a need to handle such attestations.')]),t._v(" "),a("p",[t._v("However, it is not practical for a smart contract to explicitly trust an attestation issuer. There are multiple issuers who can provide an attestation to a person's residency - a local Justice of the Peace, the land title office, local police, passport authority etc. We envision a model where the effort to manage the list of qualified issuers is practically outsourced to a list.")]),t._v(" "),a("p",[t._v("Anyone can publish a list of issuers. Only the most trusted and carefully maintained lists gets popular use.")]),t._v(" "),a("h3",{attrs:{id:"purpose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purpose"}},[t._v("#")]),t._v(" Purpose")]),t._v(" "),a("p",[t._v("This ERC provides a smart contract interface for anyone to manage a list of attestation issuers. A smart contract would explicitly trust a list, and therefore all attestations issued by the issuers on the list.")]),t._v(" "),a("h3",{attrs:{id:"draft-implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#draft-implementation"}},[t._v("#")]),t._v(" Draft implementation")]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* The purpose of this contract is to manage the list of attestation\n     * issuer contracts and their capacity to fulfill requirements\n     */")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("contract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ManagedListERC")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* a manager is the steward of a list. Only he/she/it can change the\n       * list by removing/adding attestation issuers to the list.\n\n       * An issuer in the list is represented by their contract\n       * addresses, not by the attestation signing keys managed by such a\n       * contract.\n       */")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t      "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t      "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// short description of what the list entails")]),t._v("\n\t      "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" capacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// serves as a filter for the attestation signing keys")]),t._v("\n\t  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* if a smart contract specifies a list, only attestation issued\n\t   * by issuers on that list is accepted. Furthermore, if that\n\t   * list has a non-empty capacity, only attestations signed by a\n\t   * signing key with that capacity is accepted. */")]),t._v("\n\n\t    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" issuerContracts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// all these addresses are contracts, no signing capacity")]),t._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint")]),t._v(" expiry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// find which list the sender is managing, then add an issuer to it")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addIssuer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" issuerContractAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//return false if the list identified by the sender doesn't have this issuer in the list")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeIssuer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" issuerContractAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" List listToRemoveIssuerFrom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* called by services, e.g. Kiwi Properties or James Squire */")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* loop through all issuer's contract and execute validateKey() on\n       * every one of them in the hope of getting a hit, return the\n       * contract address of the first hit. Note that there is an attack\n       * method for one issuer to claim to own the key of another which\n       * is mitigated by later design. */")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//loop through the issuers array, calling validate on the signingKeyOfAttestation")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getIssuerCorrespondingToAttestationKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" list_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" signingKeyOfAttestation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* for simplicity we use sender's address as the list ID,\n\t * accepting these consequences: a) if one user wish to maintain\n\t * several lists with different capacity, he or she must use a\n\t * different sender address for each. b) if the user replaced the\n\t * sender's key, either because he or she suspects the key is\n\t * compromised or that it is lost and reset through special means,\n\t * then the list is still identified by the first sender's\n\t * address.\n      */")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("List list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* replace list manager's key with the new key */")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceListIndex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("List list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" manager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br"),a("span",{staticClass:"line-number"},[t._v("50")]),a("br"),a("span",{staticClass:"line-number"},[t._v("51")]),a("br"),a("span",{staticClass:"line-number"},[t._v("52")]),a("br"),a("span",{staticClass:"line-number"},[t._v("53")]),a("br"),a("span",{staticClass:"line-number"},[t._v("54")]),a("br"),a("span",{staticClass:"line-number"},[t._v("55")]),a("br"),a("span",{staticClass:"line-number"},[t._v("56")]),a("br"),a("span",{staticClass:"line-number"},[t._v("57")]),a("br")])]),a("p",[t._v("Click "),a("a",{attrs:{href:"https://github.com/alpha-wallet/blockchain-attestation/blob/master/ethereum/trustlist/ManagedList.sol",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(" to see an example implementation of this ERC")]),t._v(" "),a("h3",{attrs:{id:"related-erc-s"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-erc-s"}},[t._v("#")]),t._v(" Related ERC's")]),t._v(" "),a("p",[t._v("#1387 #1386")])])}),[],!1,null,null,null);s.default=n.exports}}]);