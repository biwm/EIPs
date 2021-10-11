(window.webpackJsonp=window.webpackJsonp||[]).push([[397],{824:function(t,s,a){"use strict";a.r(s);var e=a(46),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[t._v("#")]),t._v(" Simple Summary")]),t._v(" "),a("p",[t._v("A protocol for services providing token ownership and transfer validation.")]),t._v(" "),a("h1",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),a("p",[t._v("This standard provides a registry contract method for authorizing token transfers. By nature, this covers both initially issuing tokens to users (ie: transfer from contract to owner), transferring tokens between users, and token spends.")]),t._v(" "),a("h1",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),a("p",[t._v("The tokenization of assets has wide application, not least of which is financial instruments such as securities and security tokens. Most jurisdictions have placed legal constraints on what may be traded, and who can hold such tokens which are regarded as securities. Broadly this includes KYC and AML validation, but may also include time-based spend limits, total volume of transactions, and so on.")]),t._v(" "),a("p",[t._v("Regulators and sanctioned third-party compliance agencies need some way to link off-chain compliance information such as identity and residency to an on-chain service. The application of this design is broader than legal regulation, encompassing all manner of business logic permissions for the creation, management, and trading of tokens.")]),t._v(" "),a("p",[t._v("Rather than each token maintaining its own whitelist (or other mechanism), it is preferable to share on-chain resources, rules, lists, and so on. There is also a desire to aggregate data and rules spread across multiple validators, or to apply complex behaviours (ex. switching logic, gates, state machines) to apply distributed data to an application.")]),t._v(" "),a("h1",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),a("h2",{attrs:{id:"tokenvalidator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tokenvalidator"}},[t._v("#")]),t._v(" "),a("code",[t._v("TokenValidator")])]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TokenValidator")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("check")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" _token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" _subject\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),t._v(" statusCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("check")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" _token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" _from"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" _to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" _amount\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),t._v(" statusCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("h3",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),a("h4",{attrs:{id:"check-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-2"}},[t._v("#")]),t._v(" "),a("code",[t._v("check")]),t._v("/2")]),t._v(" "),a("p",[a("code",[t._v("function check(address _token, address _subject) public returns (byte _resultCode)")])]),t._v(" "),a("blockquote",[a("p",[t._v("parameters")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("_token")]),t._v(": the token under review")]),t._v(" "),a("li",[a("code",[t._v("_subject")]),t._v(": the user or contract to check")])]),t._v(" "),a("p",[a("em",[t._v("returns")]),t._v(" an ERC1066 status code")])]),t._v(" "),a("h4",{attrs:{id:"check-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-4"}},[t._v("#")]),t._v(" "),a("code",[t._v("check")]),t._v("/4")]),t._v(" "),a("p",[a("code",[t._v("function check(address token, address from, address to, uint256 amount) public returns (byte resultCode)")])]),t._v(" "),a("blockquote",[a("p",[t._v("parameters")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("_token")]),t._v(": the token under review")]),t._v(" "),a("li",[a("code",[t._v("_from")]),t._v(": in the case of a transfer, who is relinquishing token ownership")]),t._v(" "),a("li",[a("code",[t._v("_to")]),t._v(": in the case of a transfer, who is accepting token ownership")]),t._v(" "),a("li",[a("code",[t._v("_amount")]),t._v(": The number of tokens being transferred")])]),t._v(" "),a("p",[a("em",[t._v("returns")]),t._v(" an ERC1066 status code")])]),t._v(" "),a("h2",{attrs:{id:"validatedtoken"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validatedtoken"}},[t._v("#")]),t._v(" "),a("code",[t._v("ValidatedToken")])]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ValidatedToken")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Validation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" subject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" result\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Validation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" statusCode\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("h3",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),a("h4",{attrs:{id:"validation-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validation-2"}},[t._v("#")]),t._v(" "),a("code",[t._v("Validation")]),t._v("/2")]),t._v(" "),a("p",[a("code",[t._v("event Validation(address indexed subject, byte indexed resultCode)")])]),t._v(" "),a("p",[t._v("This event MUST be fired on return from a call to a "),a("code",[t._v("TokenValidator.check/2")]),t._v(".")]),t._v(" "),a("blockquote",[a("p",[t._v("parameters")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("subject")]),t._v(": the user or contract that was checked")]),t._v(" "),a("li",[a("code",[t._v("statusCode")]),t._v(": an ERC1066 status code")])])]),t._v(" "),a("h4",{attrs:{id:"validation-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validation-4"}},[t._v("#")]),t._v(" "),a("code",[t._v("Validation")]),t._v("/4")]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Validation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" statusCode\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("This event MUST be fired on return from a call to a "),a("code",[t._v("TokenValidator.check/4")]),t._v(".")]),t._v(" "),a("blockquote",[a("p",[t._v("parameters")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("from")]),t._v(": in the case of a transfer, who is relinquishing token ownership")]),t._v(" "),a("li",[a("code",[t._v("to")]),t._v(": in the case of a transfer, who is accepting token ownership")]),t._v(" "),a("li",[a("code",[t._v("amount")]),t._v(": The number of tokens being transferred")]),t._v(" "),a("li",[a("code",[t._v("statusCode")]),t._v(": an ERC1066 status code")])])]),t._v(" "),a("h1",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[t._v("#")]),t._v(" Rationale")]),t._v(" "),a("p",[t._v("This proposal includes a financial permissions system on top of any financial token. This design is not a general roles/permission system. In any system, the more you know about the context where a function will be called, the more powerful your function can be. By restricting ourselves to token transfers (ex. ERC20 or EIP-777), we can make assumptions about the use cases our validators will need to handle, and can make the API both small, useful, and extensible.")]),t._v(" "),a("p",[t._v("The events are fired by the calling token. Since "),a("code",[t._v("Validator")]),t._v("s may aggregate or delegate to other "),a("code",[t._v("Validator")]),t._v("s, it would generate a lot of useless events were it the\n"),a("code",[t._v("Validator")]),t._v("'s responsibility. This is also the reason why we include the "),a("code",[t._v("token")]),t._v(" in the "),a("code",[t._v("call/4")]),t._v(" arguments: a "),a("code",[t._v("Validator")]),t._v(" cannot rely on "),a("code",[t._v("msg.sender")]),t._v(" to determine the token that the call is concerning.")]),t._v(" "),a("p",[t._v("We have also seen a similar design from "),a("a",{attrs:{href:"https://github.com/harborhq/r-token",target:"_blank",rel:"noopener noreferrer"}},[t._v("R-Token"),a("OutboundLink")],1),t._v(" that uses an additional field: "),a("code",[t._v("spender")]),t._v(". While there are potential use cases for this, it's not widely used enough to justify passing a dummy value along with every call. Instead, such a call would look more like this:")]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("approve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" spender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint")]),t._v(" amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" success"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("validator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("check")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" spender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" okStatusCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        allowed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("spender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Approval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" spender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("A second "),a("code",[t._v("check/2")]),t._v(" function is also required, that is more general-purpose, and does not specify a transfer amount or recipient. This is intended for general checks, such as checking roles (admin, owner, &c), or if a user is on a simple whitelist.")]),t._v(" "),a("p",[t._v("We have left the decision to make associated "),a("code",[t._v("Validator")]),t._v(" addresses public, private, or hardcoded up to the implementer. The proposed design does not include a centralized registry. It also does not include an interface for a "),a("code",[t._v("Validated")]),t._v(" contract. A token may require one or many "),a("code",[t._v("Validator")]),t._v("s for different purposes, requiring different validations for different, or just a single "),a("code",[t._v("Validator")]),t._v(". The potential use cases are too varied to provide a single unified set of methods. We have provided a set of example contracts "),a("a",{attrs:{href:"https://github.com/Finhaven/ValidatedToken/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(" that may be inherited from for common use cases.")]),t._v(" "),a("p",[t._v("The status codes in the "),a("code",[t._v("byte")]),t._v(" returns are unspecified. Any status code scheme may be used, though a general status code proposal is fortcoming.")]),t._v(" "),a("p",[t._v("By only defining the validation check, this standard is widely compatible with ERC-20, EIP-721, EIP-777, future token standards, centralized and decentralized exchanges, and so on.")]),t._v(" "),a("h1",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/expede/validated-token/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Reference implementation"),a("OutboundLink")],1)]),t._v(" "),a("h1",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),a("p",[t._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC0"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);s.default=n.exports}}]);