(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{510:function(e,t,s){"use strict";s.r(t);var a=s(46),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"simple-summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),s("p",[e._v("This EIP proposes a classification scheme for security weaknesses in Ethereum smart contracts.")]),e._v(" "),s("h2",{attrs:{id:"abstract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),s("p",[e._v("The SWC is a smart contract specific software weakness classification scheme for developers, tool vendors and security practitioners. The SWC is loosely aligned to the terminologies and structure used in the "),s("a",{attrs:{href:"https://cwe.mitre.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Common Weakness Enumeration - CWE"),s("OutboundLink")],1),e._v(" scheme while overlaying a wide range of weakness variants that are specific to smart contracts.")]),e._v(" "),s("p",[e._v("The goals of the SWC scheme are as follows:")]),e._v(" "),s("ul",[s("li",[e._v("Provide a straightforward way to classify weaknesses in smart contract systems.")]),e._v(" "),s("li",[e._v("Provide a straightforward way to identify the weakness(es) that lead to a vulnerability in a smart contract system.")]),e._v(" "),s("li",[e._v("Define a common language for describing weaknesses in smart contract systems' architecture, design and code.")]),e._v(" "),s("li",[e._v("Train and increase the performance of smart contract security analysis tools.")])]),e._v(" "),s("h2",{attrs:{id:"motivation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),s("p",[e._v("In the software security industry, it is a widely accepted practice to use a common terminology and to classify security related bugs and errors with a standardized scheme. While this has not stopped vulnerabilities from appearing in software, it has helped communities focusing on web applications, network protocols, IOT devices and various other fields to educate users and developers to understand the nature of security related issues in their software. It has also allowed the security community to quickly understand vulnerabilities that occur in production systems to perform root cause analysis or triage findings from various security analysis sources. In recent years various organizations and companies also published vulnerability data to find the most widespread security issues based on collected vulnerability data. Two examples that are widely used and referred to are the "),s("a",{attrs:{href:"https://www.sans.org/top25-software-errors",target:"_blank",rel:"noopener noreferrer"}},[e._v("SANS TOP 25 Most Dangerous Software Errors"),s("OutboundLink")],1),e._v(" and the "),s("a",{attrs:{href:"https://www.owasp.org/index.php/Top_10-2017_Top_10",target:"_blank",rel:"noopener noreferrer"}},[e._v("OWASP TOP 10"),s("OutboundLink")],1),e._v(". None of those publications would have been possible without a common classification scheme.")]),e._v(" "),s("p",[e._v("At present no such weakness classification scheme exists for weaknesses specific to Ethereum Smart Contracts. Common language and awareness of security weaknesses is mostly derived from academic papers, best practice guides and published articles. Findings from audit reports and security tool analysis add to the wide range of terminologies that is used to describe the discovered weaknesses. It is often time consuming to understand the technical root cause and the risk associated to findings from different sources even for security experts.")]),e._v(" "),s("h2",{attrs:{id:"rationale"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),s("p",[e._v("While recognizing the current gap, the SWC does not aim to reinvent the wheel in regards to classification of security weaknesses. It rather proposes to build on top of what has worked well in other parts of the software security community -  specifically the Common Weakness Enumeration (CWE), a list of software vulnerability types that stands out in terms of adoption and breadth of coverage. While CWE does not describe any weaknesses specific to smart contracts, it does describe related weaknesses at higher abstraction layers. This EIP proposes to create smart contract specific variants while linking back to the larger spectrum of software errors and mistakes listed in the CWE that different platforms and technologies have in common.")]),e._v(" "),s("h2",{attrs:{id:"specification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),s("p",[e._v("Before discussing the SWC specification it is important to describe the terminology used:")]),e._v(" "),s("ul",[s("li",[e._v("Weakness: A software error or mistake that in the right conditions can by itself or coupled with other weaknesses lead to a vulnerability.")]),e._v(" "),s("li",[e._v("Vulnerability: A weakness or multiple weaknesses which directly or indirectly lead to an undesirable state in a smart contract system.")]),e._v(" "),s("li",[e._v("Variant: A specific weakness that is described in a very low detail specific to Ethereum smart contracts. Each variant is assigned an unique SWC ID.")]),e._v(" "),s("li",[e._v("Relationships: CWE has a wide range of "),s("em",[e._v("Base")]),e._v(" and "),s("em",[e._v("Class")]),e._v(" types that group weaknesses on higher abstraction layers. The CWE uses "),s("em",[e._v("Relationships")]),e._v(" to link SWC smart contract weakness variants to existing "),s("em",[e._v("Base")]),e._v(" or "),s("em",[e._v("Class")]),e._v(" CWE types. "),s("em",[e._v("Relationships")]),e._v(" are  used to provide context on how SWCs are linked to the wider group of software security weaknesses and to be able to generate useful visualisations and insights through issue data sets. In its current revision it is proposed to link a SWC to its closest parent in the CWE.")]),e._v(" "),s("li",[e._v("SWC ID: A numeric identifier linked to a variant (e.g. SWC-101).")]),e._v(" "),s("li",[e._v("Test Case: A test case constitutes a micro-sample or real-world smart contract that demonstrates concrete instances of one or multiple SWC variants. Test cases serve as the basis for meaningful weakness classification and are useful to security analysis tool developers.")])]),e._v(" "),s("p",[e._v("The SWC in its most basic form links a numeric identifier to a weakness variant. For example the identifier "),s("em",[e._v("SWC-101")]),e._v(" is linked to the "),s("em",[e._v("Integer Overflow and Underflow")]),e._v(" variant. While a list with the weakness title and a unique id is useful by itself, it would also be ambiguous without further details. Therefore the SWC recommends to add a definition and test cases to any weakness variant.")]),e._v(" "),s("p",[s("strong",[e._v("SWC definition")])]),e._v(" "),s("p",[e._v("A SWC definition is formatted in markdown to allow good readability and tools to process them easily. It consists of the following attributes.")]),e._v(" "),s("ul",[s("li",[e._v("Title: A name for the weakness that points to the technical root cause.")]),e._v(" "),s("li",[e._v("Relationships: Links a CWE "),s("em",[e._v("Base")]),e._v(" or "),s("em",[e._v("Class")]),e._v(" type to its CWE variant. The "),s("em",[e._v("Integer Overflow and Underflow")]),e._v(" variant for example is linked to "),s("a",{attrs:{href:"https://cwe.mitre.org/data/definitions/682.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("CWE-682 - Incorrect Calculation"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("li",[e._v("Description: Describes the nature and potential impact of the weakness on the contract system.")]),e._v(" "),s("li",[e._v("Remediation: Describes ways on how to fix the weakness.")]),e._v(" "),s("li",[e._v("References: Links to external references that contain relevant additional information on the weakness.")])]),e._v(" "),s("p",[s("strong",[e._v("Test cases")])]),e._v(" "),s("p",[e._v("Test cases include crafted as well as real-world samples of vulnerable smart contracts. A single test case consists of three components:")]),e._v(" "),s("ol",[s("li",[e._v("Source code of a smart contract sample; e.g. Solidity, Vyper, etc.")]),e._v(" "),s("li",[e._v("Compiled asset from an EVM compiler in machine readable format; e.g. JSON or ethPM.")]),e._v(" "),s("li",[e._v("Test result configuration that describes which and how many instances of a weakness variant can be found in a given sample. The YAML schema for the proposed test case configuration is listed below.")])]),e._v(" "),s("div",{staticClass:"language-YAML line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" SWC config\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" object\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" description\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" issues\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("properties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" string\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("issues")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Issues\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" array\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("items")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Issue\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" object\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" id\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" count\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("properties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" string\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" number\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("locations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("items")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("bytecode_offsets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n              "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" object\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("line_numbers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n              "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" object\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br")])]),s("h2",{attrs:{id:"implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),s("p",[e._v("The Smart Contract Weakness Classification registry located in this "),s("a",{attrs:{href:"https://github.com/SmartContractSecurity/SWC-registry",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub repository"),s("OutboundLink")],1),e._v(" uses the SWC scheme proposed in this EIP. A GitHub Pages rendered version is also available "),s("a",{attrs:{href:"https://smartcontractsecurity.github.io/SWC-registry/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"copyright"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),s("p",[e._v("Copyright and related rights waived via "),s("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),s("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);