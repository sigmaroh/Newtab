/*// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});*/
// $( document ).ready(function() {
	   $(function(){
		// var elements  =document.getElementsByTagName("*");
		// 	for (var i=0; i<elements.length; i++){	
		// 		var element  =elements[i];
		// 		if(typeof element.childNodes !== "undefined"){
		// 			if(element.childNodes.length>0){
		// 				for (var j=0; j<element.chilNodes.length; j++){
							
		// 					var node = element.childNode[j];
		// 					if(node.nodeType==3){
		// 						var text = node.nodeValue;
		// 						var replacedText = text.replace('/[quote]/gi/','Hellow World');
		// 						if(replacedText!==text){
		// 							element.replaceChild(document.createTextNode($replacedText),text);	
		// 						}
								
		// 					}
		// 				}
		// 			}
		// 		}
		// 	}
		// alert('hellow world');
		console.log('Output of new tab extension');
		// var imgs = document.getElementsByTagName("img");for(var i=0, l=imgs.length; i<l; i++) {imgs[i].src = "http://4.bp.blogspot.com/-hmmgeAynFzY/VDdocIRN2GI/AAAAAAAAHzQ/0Sa9xa6sWu8/s1600/pC6xENv.gif "; }
		});

// });


