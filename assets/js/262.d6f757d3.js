(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{680:function(e,t,a){"use strict";a.r(t);var o=a(46),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("If a transaction has a "),a("code",[e._v("to")]),e._v(" of address "),a("code",[e._v("x")]),e._v(", then the "),a("code",[e._v("data")]),e._v(" of the transaction will be treated as EVM bytecode and it will be executed from the context of the "),a("code",[e._v("CALLER")]),e._v(" of the transaction (aka: the transaction signer).")]),e._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v("Many Ethereum DApps presently require users to approve multiple transactions in order to produce one effect - for example, the common pattern of first approving a contract to spend a token, then calling that contract. This results in a poor user-experience, and complicates the experience of interacting with DApps.")]),e._v(" "),a("p",[e._v("Making it possible for externally owned accounts to execute EVM bytecode directly allows a single transaction to execute multiple contract calls, allowing DApps to provide a streamlined experience, where every interaction results in at most one transaction.")]),e._v(" "),a("p",[e._v('While this is in principle possible today using contract wallets, other UX issues, such as the need to fund a sending account with gas money, lack of support for contract wallets in browser integrations, and lack of a consistent API for contract wallets has led to poor adoption of these.This EIP is a way of enhancing the utility of existing EOAs, in the spirit of "don\'t let the perfect be the enemy of the good".')]),e._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("p",[e._v("A new reserved address is specified at "),a("code",[e._v("x")]),e._v(", in the range used for precompiles. When a transaction is sent to this address from an externally owned account, the payload of the transaction is treated as EVM bytecode, and executed with the signer of the transaction as the current account. For clarity:")]),e._v(" "),a("ul",[a("li",[e._v("The "),a("code",[e._v("ADDRESS")]),e._v(" opcode returns the address of the EOA that signed the transaction.")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("BALANCE")]),e._v(" opcode returns the balance of the EOA that signed the transaction.")]),e._v(" "),a("li",[e._v("Any "),a("code",[e._v("CALL")]),e._v(" operations that send value take their value from the EOA that signed the transaction.")]),e._v(" "),a("li",[a("code",[e._v("CALL")]),e._v(" will set the "),a("code",[e._v("CALLER")]),e._v(" to the EOA (not "),a("code",[e._v("x")]),e._v(").")]),e._v(" "),a("li",[a("code",[e._v("DELEGATECALL")]),e._v(" preserves the EOA as the owning account.")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("CALLER")]),e._v(" and "),a("code",[e._v("ORIGIN")]),e._v(" opcodes both return the address of the EOA that signed the transaction.")]),e._v(" "),a("li",[e._v("There is no code associated with the precompile address. "),a("code",[e._v("CODE*")]),e._v(" and "),a("code",[e._v("EXTCODE*")]),e._v(" opcodes behave the same as they do for any empty address.")]),e._v(" "),a("li",[a("code",[e._v("CALLDATA*")]),e._v(" opcodes operate on the transaction payload as expected.")]),e._v(" "),a("li",[a("code",[e._v("SLOAD")]),e._v(" and "),a("code",[e._v("SSTORE")]),e._v(" operate on the storage of the EOA. As a result, an EOA can have data in storage, that persists between transactions.")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("SELFDESTRUCT")]),e._v(" opcode does nothing.")]),e._v(" "),a("li",[e._v("All other opcodes behave as expected for a call to a contract address.")]),e._v(" "),a("li",[e._v("The transaction is invalid if there is any value attached.")]),e._v(" "),a("li",[e._v("A call to the precompile address from a contract has no special effect and is equivalent to a call to a nonexistent precompile or an empty address.")])]),e._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("p",[e._v("The intent of this EIP is for the new precompile to act in all ways possible like a "),a("code",[e._v("DELEGATECALL")]),e._v(" from an externally owned account. Some changes are required to reflect the fact that the code being executed is not stored on chain, and for special cases such as "),a("code",[e._v("SELFDESTRUCT")]),e._v(", to prevent introducing new edge-cases such as the ability to zero-out an EOA's nonce.")]),e._v(" "),a("p",[e._v("A precompile was used rather than a new EIP-2718 transaction type because a precompile allows us to have a rich transaction with any type of EIP-2718 transaction.")]),e._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),a("p",[e._v("This EIP introduces a new feature that will need to be implemented in a future hard fork. No backwards compatibility issues with existing code are expected.")]),e._v(" "),a("p",[e._v("Contracts or DApps that assume that an EOA cannot atomically perform multiple operations may be affected by this change, as this now makes it possible for EOAs to execute multiple atomic operations together. The authors do not believe this is a significant use-case, as this 'protection' is already trivially defeated by miners.")]),e._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),a("p",[e._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);