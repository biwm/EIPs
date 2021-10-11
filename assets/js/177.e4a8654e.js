(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{589:function(t,e,a){"use strict";a.r(e);var s=a(46),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[t._v("#")]),t._v(" Simple Summary")]),t._v(" "),a("p",[t._v("An extension to the "),a("RouterLink",{attrs:{to:"/eip-20.html"}},[t._v("ERC-20")]),t._v(" standard token that allows Token wallet owners to request a wallet to be funded, by calling the smart contract and attaching a fund instruction string.")],1),t._v(" "),a("h2",{attrs:{id:"actors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#actors"}},[t._v("#")]),t._v(" Actors")]),t._v(" "),a("h4",{attrs:{id:"token-wallet-owners"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#token-wallet-owners"}},[t._v("#")]),t._v(" Token Wallet Owners")]),t._v(" "),a("p",[t._v("The person or company who owns the wallet, and will order a token fund request into the wallet.")]),t._v(" "),a("h4",{attrs:{id:"token-contract-owner-agent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#token-contract-owner-agent"}},[t._v("#")]),t._v(" Token contract owner / agent")]),t._v(" "),a("p",[t._v("The entity, company responsible/owner of the token contract, and token issuing/minting. This actor is in charge of trying to fulfill all fund request(s), reading the fund instruction(s), and correlate the private payment details.")]),t._v(" "),a("h4",{attrs:{id:"orderer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orderer"}},[t._v("#")]),t._v(" Orderer")]),t._v(" "),a("p",[t._v("An actor who is enabled to initiate funding orders on behalf of a token wallet owner.")]),t._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),a("p",[t._v("Token wallet owners (or approved addresses) can order tokenization requests through  blockchain. This is done by calling the "),a("code",[t._v("orderFund")]),t._v(" or "),a("code",[t._v("orderFundFrom")]),t._v(" methods, which initiate the workflow for the token contract operator to either honor or reject the fund request. In this case, fund instructions are provided when submitting the request, which are used by the operator to determine the source of the funds to be debited in order to do fund the token wallet (through minting).")]),t._v(" "),a("p",[t._v("In general, it is not advisable to place explicit routing instructions for debiting funds on a verbatim basis on the blockchain, and it is advised to use a private communication alternatives, such as private channels, encrypted storage or similar,  to do so (external to the blockchain ledger). Another (less desirable) possibility is to place these instructions on the instructions field in encrypted form.")]),t._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),a("p",[t._v("Nowadays most of the token issuing/funding request, based on any fiat based payment method  need a previous centralized transaction, to be able to get the desired tokens issued on requester's wallet.\nIn the aim of trying to bring all the needed steps into decentralization, exposing all the needed steps of token lifecycle and payment transactions, a funding request can allow wallet owner to initiate the funding request via  blockchain.\nKey benefits:")]),t._v(" "),a("ul",[a("li",[t._v("Funding and payment traceability is enhanced bringing the initiation into the ledger. All payment stat\ns can be stored on chain.")]),t._v(" "),a("li",[t._v("Almost all money/token lifecycle is covered via a decentralized approach, complemented with private communications which is common use in the ecosystem.")])]),t._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IFundable")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* is ERC-20 */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FundStatusCode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Nonexistent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        Ordered"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        InProcess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        Executed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        Rejected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        Cancelled\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("authorizeFundOperator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" orderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("revokeFundOperator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" orderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("orderFund")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("calldata")]),t._v(" operationId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("calldata")]),t._v(" instructions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("orderFundFrom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("calldata")]),t._v(" operationId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" walletToFund"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("calldata")]),t._v(" instructions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cancelFund")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("calldata")]),t._v(" operationId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("processFund")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("calldata")]),t._v(" operationId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("executeFund")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("calldata")]),t._v(" operationId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rejectFund")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("calldata")]),t._v(" operationId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("calldata")]),t._v(" reason"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isFundOperatorFor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" walletToFund"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" orderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("view")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("retrieveFundData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" orderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("calldata")]),t._v(" operationId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("view")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" walletToFund"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("memory")]),t._v(" instructions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FundStatusCode status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FundOrdered")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" orderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" operationId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" instructions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FundInProcess")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" orderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" operationId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FundExecuted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" orderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" operationId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FundRejected")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" orderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" operationId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" reason"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FundCancelled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" orderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" operationId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FundOperatorAuthorized")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" walletToFund"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" orderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FundOperatorRevoked")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" walletToFund"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" orderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br")])]),a("h3",{attrs:{id:"functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),a("h4",{attrs:{id:"authorizefundoperator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorizefundoperator"}},[t._v("#")]),t._v(" authorizeFundOperator")]),t._v(" "),a("p",[t._v("Wallet owner, authorizes a given address to be fund orderer.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("orderer")]),t._v(" "),a("td",[t._v("The address of the orderer.")])])])]),t._v(" "),a("h4",{attrs:{id:"revokefundoperator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#revokefundoperator"}},[t._v("#")]),t._v(" revokeFundOperator")]),t._v(" "),a("p",[t._v("Wallet owner, revokes a given address to be fund orderer.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("orderer")]),t._v(" "),a("td",[t._v("The address of the orderer.")])])])]),t._v(" "),a("h4",{attrs:{id:"orderfund"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orderfund"}},[t._v("#")]),t._v(" orderFund")]),t._v(" "),a("p",[t._v("Creates a fund request, that will be processed by the token operator. The function must revert if the operation ID has been used before.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("operationId")]),t._v(" "),a("td",[t._v("The unique ID to identify the request")])]),t._v(" "),a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[t._v("The amount to be funded.")])]),t._v(" "),a("tr",[a("td",[t._v("instruction")]),t._v(" "),a("td",[t._v("A string including the payment instruction.")])])])]),t._v(" "),a("h4",{attrs:{id:"orderfundfrom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orderfundfrom"}},[t._v("#")]),t._v(" orderFundFrom")]),t._v(" "),a("p",[t._v("Creates a fund request, on behalf of a wallet owner, that will be processed by the token operator. The function must revert if the operation ID has been used before.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("operationId")]),t._v(" "),a("td",[t._v("The unique ID to identify the request")])]),t._v(" "),a("tr",[a("td",[t._v("walletToFund")]),t._v(" "),a("td",[t._v("The wallet to be funded on behalf.")])]),t._v(" "),a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[t._v("The amount to be funded.")])]),t._v(" "),a("tr",[a("td",[t._v("instruction")]),t._v(" "),a("td",[t._v("A string including the payment instruction.")])])])]),t._v(" "),a("h4",{attrs:{id:"cancelfund"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cancelfund"}},[t._v("#")]),t._v(" cancelFund")]),t._v(" "),a("p",[t._v("Cancels a funding request.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("operationId")]),t._v(" "),a("td",[t._v("The unique ID to identify the request that is going to be cancelled. This can only be done by token holder, or the fund initiator.")])])])]),t._v(" "),a("h4",{attrs:{id:"processfund"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#processfund"}},[t._v("#")]),t._v(" processFund")]),t._v(" "),a("p",[t._v("Marks a funding request as on process. After the status is on process, order cannot be cancelled.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("operationId")]),t._v(" "),a("td",[t._v("The unique ID to identify the request is in process.")])])])]),t._v(" "),a("h4",{attrs:{id:"executefund"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#executefund"}},[t._v("#")]),t._v(" executeFund")]),t._v(" "),a("p",[t._v("Issues the amount of tokens and marks a funding request as executed.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("operationId")]),t._v(" "),a("td",[t._v("The unique ID to identify the request that has been executed.")])])])]),t._v(" "),a("h4",{attrs:{id:"rejectfund"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rejectfund"}},[t._v("#")]),t._v(" rejectFund")]),t._v(" "),a("p",[t._v("Rejects a given operation with a reason.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("operationId")]),t._v(" "),a("td",[t._v("The unique ID to identify the request that has been executed.")])]),t._v(" "),a("tr",[a("td",[t._v("reason")]),t._v(" "),a("td",[t._v("The specific reason that explains why the fund request was rejected. EIP 1066 codes can be used")])])])]),t._v(" "),a("h4",{attrs:{id:"isfundoperatorfor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isfundoperatorfor"}},[t._v("#")]),t._v(" isFundOperatorFor")]),t._v(" "),a("p",[t._v("Checks that given player is allowed to order fund requests, for a given wallet.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("walletToFund")]),t._v(" "),a("td",[t._v("The wallet to be funded, and checked for approval permission.")])]),t._v(" "),a("tr",[a("td",[t._v("orderer")]),t._v(" "),a("td",[t._v("The address of the orderer, to be checked for approval permission.")])])])]),t._v(" "),a("h4",{attrs:{id:"retrievefunddata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retrievefunddata"}},[t._v("#")]),t._v(" retrieveFundData")]),t._v(" "),a("p",[t._v("Retrieves all the fund request data. Only operator, tokenHolder, and orderer can get the given operation data.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("operationId")]),t._v(" "),a("td",[t._v("The unique ID to identify the fund order.")])])])]),t._v(" "),a("h3",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),a("h4",{attrs:{id:"fundordered"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fundordered"}},[t._v("#")]),t._v(" FundOrdered")]),t._v(" "),a("p",[t._v("Emitted when an token wallet owner orders a funding request.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("operationId")]),t._v(" "),a("td",[t._v("The unique ID to identify the request")])]),t._v(" "),a("tr",[a("td",[t._v("walletToFund")]),t._v(" "),a("td",[t._v("The wallet that the player is allowed to start funding requests")])]),t._v(" "),a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[t._v("The amount to be funded.")])]),t._v(" "),a("tr",[a("td",[t._v("instruction")]),t._v(" "),a("td",[t._v("A string including the payment instruction.")])])])]),t._v(" "),a("h4",{attrs:{id:"fundinprocess"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fundinprocess"}},[t._v("#")]),t._v(" FundInProcess")]),t._v(" "),a("p",[t._v("Emitted when an operator starts a funding request after validating the instruction, and the operation is marked as in process.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("orderer")]),t._v(" "),a("td",[t._v("The address of the fund request orderer.")])]),t._v(" "),a("tr",[a("td",[t._v("operationId")]),t._v(" "),a("td",[t._v("The unique ID to identify the fund.")])])])]),t._v(" "),a("h4",{attrs:{id:"fundexecuted"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fundexecuted"}},[t._v("#")]),t._v(" FundExecuted")]),t._v(" "),a("p",[t._v("Emitted when an operator has executed a funding request.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("orderer")]),t._v(" "),a("td",[t._v("The address of the fund request orderer.")])]),t._v(" "),a("tr",[a("td",[t._v("operationId")]),t._v(" "),a("td",[t._v("The unique ID to identify the fund.")])])])]),t._v(" "),a("h4",{attrs:{id:"fundrejected"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fundrejected"}},[t._v("#")]),t._v(" FundRejected")]),t._v(" "),a("p",[t._v("Emitted when an operator has rejected a funding request.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("orderer")]),t._v(" "),a("td",[t._v("The address of the fund request orderer.")])]),t._v(" "),a("tr",[a("td",[t._v("operationId")]),t._v(" "),a("td",[t._v("The unique ID to identify the fund.")])]),t._v(" "),a("tr",[a("td",[t._v("reason")]),t._v(" "),a("td",[t._v("The specific reason that explains why the fund request was rejected. EIP 1066 codes can be used")])])])]),t._v(" "),a("h4",{attrs:{id:"fundcancelled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fundcancelled"}},[t._v("#")]),t._v(" FundCancelled")]),t._v(" "),a("p",[t._v("Emitted when a token holder, orderer,  has cancelled a funding request. This can only be done if the operator hasn't put the funding order in process.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("orderer")]),t._v(" "),a("td",[t._v("The address of the fund request orderer.")])]),t._v(" "),a("tr",[a("td",[t._v("operationId")]),t._v(" "),a("td",[t._v("The unique ID to identify the fund.")])])])]),t._v(" "),a("h4",{attrs:{id:"fundoperatorauthorized"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fundoperatorauthorized"}},[t._v("#")]),t._v(" FundOperatorAuthorized")]),t._v(" "),a("p",[t._v("Emitted when a given player, operator, company or a given persona, has been approved to start fund request for a given token holder.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("walletToFund")]),t._v(" "),a("td",[t._v("The wallet that the player is allowed to start funding requests")])]),t._v(" "),a("tr",[a("td",[t._v("orderer")]),t._v(" "),a("td",[t._v("The address that allows the the player to start requests.")])])])]),t._v(" "),a("h4",{attrs:{id:"fundoperatorrevoked"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fundoperatorrevoked"}},[t._v("#")]),t._v(" FundOperatorRevoked")]),t._v(" "),a("p",[t._v("Emitted when a given player has been revoked initiate funding requests.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("walletToFund")]),t._v(" "),a("td",[t._v("The wallet that the player is allowed to start funding requests")])]),t._v(" "),a("tr",[a("td",[t._v("orderer")]),t._v(" "),a("td",[t._v("The address that allows the the player to start requests.")])])])]),t._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[t._v("#")]),t._v(" Rationale")]),t._v(" "),a("p",[t._v("This standards provides a functionality to allow token holders to start funding requests in a decentralized way.")]),t._v(" "),a("p",[t._v("It's important to highlight that the token operator, need to process all funding request, updating the fund status based on the linked payment that will be done.")]),t._v(" "),a("p",[t._v("Funding instruction format is open. ISO payment standard like is a good start point,")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("operationId")]),t._v(" is a string and not something more gas efficient to allow easy traceability of the hold and allow human readable ids. It is up to the implementer if the string should be stored on-chain or only its hash, as it is enough to identify a hold.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("operationId")]),t._v(" is a competitive resource. It is recommended, but not required, that the hold issuers used a unique prefix to avoid collisions.")]),t._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[t._v("#")]),t._v(" Backwards Compatibility")]),t._v(" "),a("p",[t._v("This EIP is fully backwards compatible as its implementation extends the functionality of "),a("RouterLink",{attrs:{to:"/eip-20.html"}},[t._v("ERC-20")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),a("p",[t._v("The GitHub repository "),a("a",{attrs:{href:"https://github.com/IoBuilders/fundable-token",target:"_blank",rel:"noopener noreferrer"}},[t._v("IoBuilders/fundable-token"),a("OutboundLink")],1),t._v(" contains the work in progress implementation.")]),t._v(" "),a("h2",{attrs:{id:"contributors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributors"}},[t._v("#")]),t._v(" Contributors")]),t._v(" "),a("p",[t._v("This proposal has been collaboratively implemented by "),a("a",{attrs:{href:"https://adhara.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("adhara.io"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://io.builders/",target:"_blank",rel:"noopener noreferrer"}},[t._v("io.builders"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),a("p",[t._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC0"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=n.exports}}]);