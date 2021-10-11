(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{691:function(t,e,a){"use strict";a.r(e);var i=a(46),s=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[t._v("#")]),t._v(" Simple Summary")]),t._v(" "),a("p",[t._v("Add a "),a("code",[t._v("SET_INDESTRUCTIBLE (0xA8)")]),t._v(" opcode that prevents the contract from calling "),a("code",[t._v("SELFDESTRUCT (0xFF)")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),a("p",[t._v("The intended use case would be for contracts to make their first byte of code be the "),a("code",[t._v("SET_INDESTRUCTIBLE")]),t._v(" opcode if they wish to serve as libraries that guarantee to users that their code will exist unmodified forever. This is useful in account abstraction as well as other contexts.")]),t._v(" "),a("p",[t._v("Unlike EIPs that disable the "),a("code",[t._v("SELFDESTRUCT")]),t._v(" opcode entirely, this EIP does not modify behavior of any existing contracts.")]),t._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),a("p",[t._v("Add a transaction-wide global variable "),a("code",[t._v("globals.indestructible: Set[Address]")]),t._v(" (i.e. a variable that operates the same way as the selfdestructs set), initialized to the empty set.")]),t._v(" "),a("p",[t._v("Add a "),a("code",[t._v("SET_INDESTRUCTIBLE")]),t._v(" opcode at "),a("code",[t._v("0xA8")]),t._v(", with gas cost "),a("code",[t._v("G_base")]),t._v(", that adds the current "),a("code",[t._v("callee")]),t._v(" to the "),a("code",[t._v("globals.indestructible")]),t._v(" set. If in the current execution context the "),a("code",[t._v("callee")]),t._v(" is in "),a("code",[t._v("globals.indestructible")]),t._v(", the "),a("code",[t._v("SELFDESTRUCT")]),t._v(" opcode throws an exception.")]),t._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[t._v("#")]),t._v(" Rationale")]),t._v(" "),a("p",[t._v("Alternative proposals to this include:")]),t._v(" "),a("ul",[a("li",[t._v("Simply banning "),a("code",[t._v("SELFDESTRUCT")]),t._v(" outright. This would be ideal, but has larger backwards compatibility issues.")]),t._v(" "),a("li",[t._v("Using a local variable instead of a global variable. This is problematic because it would be broken by "),a("code",[t._v("DELEGATECALL")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[t._v("#")]),t._v(" Backwards Compatibility")]),t._v(" "),a("p",[t._v("TBD")]),t._v(" "),a("h2",{attrs:{id:"security-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[t._v("#")]),t._v(" Security Considerations")]),t._v(" "),a("p",[t._v("This breaks forward compatibility with "),a("em",[t._v("some")]),t._v(" forms of state rent, which would simply delete contracts that get too old without paying some maintenance fee. However, this is not the case with all state size control schemes; for example this is not an issue if we use "),a("a",{attrs:{href:"https://ledgerwatch.github.io/regenesis_plan.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ReGenesis"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("If "),a("code",[t._v("SELFDESTRUCT")]),t._v(" is ever removed in the future, this EIP would simply become a no-op.")]),t._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),a("p",[t._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC0"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=s.exports}}]);