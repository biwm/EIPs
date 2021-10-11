(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{459:function(e,t,a){"use strict";a.r(t);var n=a(46),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("This presents a method to replace the usual signup/login design pattern with a minimal ethereum native scheme, that doesn’t require passwords, backing up private keys nor typing seed phrases. From the user point of view it will be very similar to patterns they’re already used to with second factor authentication (without relying in a central server), but for dapp developers it requires a new way to think about ethereum transactions.")]),e._v(" "),a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),a("p",[e._v("The unique identifier of the user is a contract which implements both Identity and the Executable Signed Messages ERCs. The user should not need provide this address directly, only a ens name pointing to it. These types of contracts are indirectly controlled by private keys that can sign messages indicating intents, which are then deployed to the contract by a third party (or a decentralized network of deployers).")]),e._v(" "),a("p",[e._v('In this context, therefore, a device "logging into" an app using an identity, means that the device will generate a private key locally and then request an authorization to add that key as one of the signers of that identity, with a given set of permissions. Since that private key is only used for signing messages, it is not required to hold ether, tokens or assets, and if lost, it can be simply be replaced by a new one – the user\'s funds are kept on the identity contract.')]),e._v(" "),a("p",[e._v("In this context, ethereum accounts are used in a manner more similar to auth tokens, rather than unique keys.")]),e._v(" "),a("p",[e._v("The login process is as follows:")]),e._v(" "),a("h4",{attrs:{id:"_1-request-a-name-from-the-user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-request-a-name-from-the-user"}},[e._v("#")]),e._v(" 1) Request a name from the user")]),e._v(" "),a("p",[e._v("The first step of the process is to request from the user the ENS name that points to their identity. If the user doesn’t have a login set up, the app should–if they have an integrated identity manager–provide an option to provide a subdomain or a name they own.")]),e._v(" "),a("p",[a("strong",[e._v("UX Note:")]),e._v(" there are many ways to provide this interface, the app can ask if they want to signup/login before hand or simply directly ask them to type the name. Note that since it’s trivial to verify if a username exists, your app should adapt to it gracefully and not require the user to type their name twice. If they ask to signup and provide a name that exists then ask them if they want to login using that name, or similarly if they ask to connect to an existing name but type a non-existent name show them a nice alert and ask them if they want to create that name now. Don’t force them to type the same name twice in two different fields.")]),e._v(" "),a("h4",{attrs:{id:"_2-a-create-a-new-identity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-a-create-a-new-identity"}},[e._v("#")]),e._v(" 2.a) Create a new identity")]),e._v(" "),a("p",[e._v("If the user doesn’t have an identity, the app should provide the option to create one for them. Each app must have one or more domains they control which they can create immediate subdomains on demand. The app therefore will make these actions on the background:")]),e._v(" "),a("ol",[a("li",[e._v("Generate a private key which it will keep saved locally on the device or browser, the safest way possible.")]),e._v(" "),a("li",[e._v("Create (or set up) an identity contract which supports both ERC720 and ERC1077")]),e._v(" "),a("li",[e._v("Register the private key created on step 1 as the "),a("em",[e._v("only")]),e._v(" admin key of the contract (the app must not add any app-controlled key, except as recovery option - see 5)")]),e._v(" "),a("li",[e._v("Register the requested subdomain and transfer its ownership to the contract (while the app controls the main domain and may keep the option to reassign them at will, the ownership of the subdomain itself should belong to the identity, therefore allowing them to transfer it)")]),e._v(" "),a("li",[e._v("(Optionally) Register a recovery method on the contract, which allows the user to regain access to the contract in case the main key is lost.")])]),e._v(" "),a("p",[e._v("All those steps can be designed to be set up in a single ethereum transaction. Since this step is not free, the app reserves the right to charge for registering users, or require the user to be verified in a sybil resistant manner of the app’s choosing (captcha, device ID registration, proof of work, etc)")]),e._v(" "),a("p",[e._v("The user shouldn’t be forced to wait for transaction confirmation times. Instead, have an indicator somewhere on the app the shows the progress and then allow the user to interact with your app normally. It’s unlikely that they’ll need the identity in the first few minutes and if something goes wrong (username gets registered at the same time), you can then ask the user for an action.")]),e._v(" "),a("p",[a("strong",[e._v("Implementation note:")]),e._v(" in order to save gas, some of these steps can be done in advance. The app can automatically deploy a small number of contracts when the gas price is low, and set up all their main variables to be 0xFFFFFF...FFFFF. These should be considered ‘vacant’ and when the user registers one, they will get a gas discount for freeing up space on the chain. This has the added benefit of allowing the user a choice in contract address/icon.")]),e._v(" "),a("h4",{attrs:{id:"_2-b-connect-to-an-existing-identity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-b-connect-to-an-existing-identity"}},[e._v("#")]),e._v(" 2.b) Connect to an existing identity")]),e._v(" "),a("p",[e._v("If the user wants to connect with an existing identity, then the first thing the app needs to understand is what level of privilege it’s going to ask for:")]),e._v(" "),a("p",[a("strong",[e._v("Manager")]),e._v(" the higher level, allows the key to initiate or sign transactions that change the identity itself, like adding or removing keys. An app should only require this level if it integrates an identity manager. Depending on how the identity is set up, it might require signature from more keys before these transactions can be deployed.")]),e._v(" "),a("p",[a("strong",[e._v("Action")]),e._v(" this level allows the key to initiate or sign transactions on address other than itself. It can move funds, ether, assets etc. An app should only require this level of privilege if it’s a general purpose wallet or browser for sending ethereum transactions. Depending on how the identity is set up, it might require signature from more keys before these transactions can be deployed.")]),e._v(" "),a("p",[a("strong",[e._v("Encryption")]),e._v(" the lower level has no right to initiate any transactions, but it can be used to represent the user in specific instances or off-chain signed messages. It’s the ideal level of privilege for games, chat or social media apps, as they can be used to sign moves, send messages, etc. If a game requires actual funds (say, to start a game with funds in stake) then it should still use the encryption level, and then require the main wallet/browser of the user to sign messages using the ethereum URI standard.")]),e._v(" "),a("p",[e._v("Once the desired level is known, the app must take these steps:")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("Generate a private key")]),e._v(" which it will keep saved locally on the device or browser, the safest way possible.")]),e._v(" "),a("li",[a("strong",[e._v("Query ens")]),e._v(" to figure the existing address of the identity")]),e._v(" "),a("li",[a("strong",[e._v("Generate the bytecode")]),e._v(" for a transaction calling the function "),a("code",[e._v("addKey(PUBLICKEY,LEVEL)")]),e._v(".")]),e._v(" "),a("li",[a("strong",[e._v("Broadcast a transaction request on a whisper channel")]),e._v(" or some other decentralized network of peers. Details on this step require further discussions")]),e._v(" "),a("li",[a("strong",[e._v("If web3 is available")]),e._v(" then attempt calling web3.eth.sendTransaction. This can be automatic or prompted by user action.")]),e._v(" "),a("li",[a("strong",[e._v("Attempt calling a URI")]),e._v(" if the app supports "),a("RouterLink",{attrs:{to:"/eip-681.html"}},[e._v("URL format for transaction requests EIP")]),e._v(" then attempt calling this. This can be automatic or prompted by user action.")],1),e._v(" "),a("li",[a("strong",[e._v("Show a QR code")]),e._v(": with an EIP681 formatted URL. That QR code can be clickable to attempt to retry the other options, but it should be done last: if step 1 works, the user should receive a notification on their compatible device and won't need to use the QR code.")])]),e._v(" "),a("p",[e._v("Here's an example of a EIP681 compatible address to add a public key generated locally in the app:")]),e._v(" "),a("p",[a("code",[e._v("ethereum:bob.example.eth?function=addKey(address='0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef',uint=1)")])]),e._v(" "),a("p",[e._v("If adding the new key requires multiple signatures, or if the app receiving that request exclusiveky deals with executable signed messages and has no ether on itself, then it should follow the steps in the next section on how to request transactions.")]),e._v(" "),a("p",[e._v("As before, the user shouldn’t be forced to wait for transaction confirmation times. Instead, have an indicator somewhere on the app the shows the progress and then allow the user to interact with your app normally.")]),e._v(" "),a("h4",{attrs:{id:"_3-request-transactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-request-transactions"}},[e._v("#")]),e._v(" 3) Request transactions")]),e._v(" "),a("p",[e._v("After step 2, the end result should be that your app should have the identity address of the user, their main ens name and a private key, whose public account is listed on the identity as one of their keys, with roles being either manager, action or encryption. Now it can start using that information to sign and execute transactions.")]),e._v(" "),a("p",[a("strong",[e._v("Not all transactions need to be on chain")]),e._v(", actually most common uses of signed messages should be off chain. If you have a chat app, for instance, you can use the local key for signing messages and sending it to the other parties, and they can just query the identity contract to see if that key actually comes from the user. If you have a game with funds at stake, only the first transaction moving funds and setting up the initial game needs to be executed by the identity: at each turn the players can sign a hash of the current state of the board and at the end, the last two plays can be used to determine the winner. Notice that keys can be revoked at any time, so your app should take that in consideration, for instance saving all keys at the start of the game. Keys that only need this lower level of privilege, should be set at level 4 (encryption).")]),e._v(" "),a("p",[e._v("Once you decided you actually need an on-chain transaction, follow these steps:")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("Figure out the TO, FROM, VALUE and DATA")]),e._v(". These are the basics of any ethereum transaction. "),a("code",[e._v("from")]),e._v(" is the compatible contract you want the transaction to be deployed from.")]),e._v(" "),a("li",[a("strong",[e._v("Check the privilege level you need:")]),e._v(" if the "),a("code",[e._v("to")]),e._v(" and "),a("code",[e._v("from")]),e._v(" fields are the same contract, ie, if the transaction requires the identity to act upon itself (for instance, when adding or removing a key) then you need level 1 (management), otherwise it's 2 (action). Verify if the key your app owns correspond to the required level.")]),e._v(" "),a("li",[a("strong",[e._v("Verify how many keys are required")]),e._v(" by calling "),a("code",[e._v("requiredSignatures(uint level)")]),e._v(" on the target contract")]),e._v(" "),a("li",[a("strong",[e._v("Figure out gasLimit")]),e._v(": Estimate the gas cost of the desired transaction, and add a margin (recommended: add 100k gas)")]),e._v(" "),a("li",[a("strong",[e._v("Figure out gasToken and gasPrice")]),e._v(":  Check the current gas price considering network congestions and the market price of the token the user is going to pay with. Leave gasToken as 0 for ether. Leave gasPrice as 0 if you are deploying it yourself and subsidizing the costs elsewhere.")]),e._v(" "),a("li",[a("strong",[e._v("Sign an executable signed transaction")]),e._v(" by following that standard.")])]),e._v(" "),a("p",[e._v("After having all the signed executable message, we need to deploy it to the chain. If the transaction only requires a single signature, then the app provider can deploy it themselves. Send the transaction to the "),a("code",[e._v("from")]),e._v(" address and attempt to call the function "),a("code",[e._v("executeSigned")]),e._v(", using the parameters and signature you just collected.")]),e._v(" "),a("p",[e._v("If the transaction need to collect more signatures or the app doesn't have a deployable server, the app should follow these steps:")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("Broadcast the transaction on a whisper channel")]),e._v(" or some other decentralized network of peers. Details on this step require further discussions")]),e._v(" "),a("li",[a("strong",[e._v("If web3 is available")]),e._v(" then attempt calling web3.eth.personal_sign. This can be automatic or prompted by user action.")]),e._v(" "),a("li",[a("strong",[e._v("Show a QR code")]),e._v(": with the signed transaction and the new data to be signed. That QR code can be clickable to attempt to retry the other options, but it should be done last: if step 1 works, the user should receive a notification on their compatible device and won't need to use the QR code.")])]),e._v(" "),a("p",[e._v("The goal is to keep broadcasting signatures via whisper until a node that is willing to deploy them is able to collect all messages.")]),e._v(" "),a("p",[e._v("Once you've followed the above steps, watch the transaction pool to any transaction to that address and then take the user to your app. Once you seen the desired transaction, you can stop showing the QRcode and proceed with the app, while keeping some indication that the transaction is in progress. Subscribe to the event "),a("code",[e._v("ExecutedSigned")]),e._v(" of the desired contract: once you see the transaction with the nonce, you can call it a success. If you see a different transaction with the same or higher nonce (or timestamp) then you consider the transaction permanently failed and restart the process.")]),e._v(" "),a("h3",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("p",[e._v("No working examples of this implementation exists, but many developers have expressed interest in adopting it. This section will be edited in the future to reflect that.")]),e._v(" "),a("h3",{attrs:{id:"conclusion-and-future-improvements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion-and-future-improvements"}},[e._v("#")]),e._v(" Conclusion and future improvements")]),e._v(" "),a("p",[e._v("This scheme would allow much more lighter apps, that don't require to hold ether, and can keep unlocked private keys on the device to be able to send messages and play games without requesting user prompt every time. More work is needed to standardize common decentralized messaging protocols as well as open source tools for deployment nodes, in order to create a decentralized and reliable layer for message deployment.")]),e._v(" "),a("h3",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=qF2lhJzngto",target:"_blank",rel:"noopener noreferrer"}},[e._v("Universal Logins talk at UX Unconf, Toronto"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),a("p",[e._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);