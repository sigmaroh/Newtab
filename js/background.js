/*// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});*/
$( document ).ready(function() {
	   $(function(){
	// var url = "http://quotes.rest/qod.json";
	var url = "http://quotes.rest/qod.json";
	var quote = $("#quoteblock");// the id of the heading
	$.get(url, function (data) {
		var the_quote = data;
		quote.text('"'+the_quote.contents.quotes[0].quote+'"');
		var author = $("#author");// id of author
		author.text(the_quote.contents.quotes[0].author);
		});
	});
	   var time = new Date().toLocaleTimeString();
	  var date = new Date().toDateString();


	function dateToYMD(date) {
    var strArray=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var d = date.getDate();
    var m = strArray[date.getMonth()];
    var y = date.getFullYear();
    return '' + (d <= 9 ? '0' + d : d) + ' ' + m + ' ' + y;
}
	  $('#time').html(time);
	  $('#date').html(date);
	   // $('body').css('background-image', 'url("http://sanjayraut.com.np/images/me.jpg")');


	  document.addEventListener('DOMContentLoaded', function() {
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      chrome.storage.local.get('name', function(result) {
        if (result != undefined && result.name != undefined) {
            document.getElementById('user_name').innerHtml = result.name;
        }
    });
    document.getElementById('save').onclick = function() {
        chrome.storage.local.set({'name': document.getElementById('name').value});
    };
    });
  }, false);
}, false);
});

