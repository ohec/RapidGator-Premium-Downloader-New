// ==UserScript==
// @id             rapidgator.net-7e6088c3-1cfb-4bcf-9118-9384bcc236f3@scriptish
// @name           RapidGator Clicker
// @version        1.0
// @namespace      rapidgatorclicker
// @author         Mikey Cawley
// @description    
// @include        http://rapidgator.net/file/*
// @run-at         document-end
// ==/UserScript==


if(document.title == "File not found") {
	console.log('File not found - Closing');
	unsafeWindow.close();
	//console.log(unsafeWindow);
} else {
	var allLinks, thisLink;
	allLinks = document.evaluate('//div[@class=\'btm\']/p/a', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
	for (var i = 0; i < allLinks.snapshotLength; i++) {
		thisLink = allLinks.snapshotItem(i);
		console.log(thisLink.href);

		//unsafeWindow.location.href = thisLink.href;
		thisLink.click();
		// do something with thisLink
	}
}
