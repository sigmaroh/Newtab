$(document).ready(function(){
    // alert('working');
    // window.addEventListener('load', function load(event) {
       /*change image */
       chrome.storage.local.get('image', function(result) {

        if (result != undefined && result.image != undefined) {
            // document.getElementById('user_name').innerHtml = result.name;
             $('#user_image').attr('src',result.image);
        }else{

            $('#user_image').attr('src','https://picsum.photos/1600/900/?random');
        }
    });
       /*change image ends */
    chrome.storage.local.get('name', function(result) {

        if (result != undefined && result.name != undefined) {
            // document.getElementById('user_name').innerHtml = result.name;
             $('#user_name').html(result.name);
        }
    });

    $('#name').on('change',function() {
        var data = $(this).val().replace(/(?:^|\s)\w/g, function (match) {
           return match.toUpperCase();
        })
        chrome.storage.local.set({'name': data});
        $('#user_name').html(data);
    });
    $('#name').on('keyup',function() {
        if($(this).val()!=''){
         var data = $(this).val().replace(/(?:^|\s)\w/g, function (match) {
           return match.toUpperCase();
        })
        $('#user_name').html(data);
    }


    });


chrome.storage.local.get('location', function(result) {

        if (result != undefined && result.location != undefined) {
            // document.getElementById('user_name').innerHtml = result.name;
             $('#location').html('<i class="fa fa-map-marker" aria-hidden="true"></i> '+result.location);
        }else{
            $('#location').html('<i class="fa fa-map-marker" aria-hidden="true"></i> '+'N/A');
        }
    });

    $('#loc').on('change',function() {
        var data = $(this).val().replace(/(?:^|\s)\w/g, function (match) {
           return match.toUpperCase();
        })
        chrome.storage.local.set({'location': data});
        $('#location').html('<i class="fa fa-map-marker" aria-hidden="true"></i> '+data);
    });
    $('#loc').on('keyup',function() {
        if($(this).val()!=''){
         var data = $(this).val().replace(/(?:^|\s)\w/g, function (match) {
           return match.toUpperCase();
        })
        $('#location').html('<i class="fa fa-map-marker" aria-hidden="true"></i> '+data);
    }

    });

/* image url */



    $('#imgts').on('change',function() {
        var data  =$(this).val();
        if(data!=''){
            chrome.storage.local.set({'image': data});
            $('#user_image').attr('src',data);
        }
    });
    // $('#img').on('keyup',function() {
    //     if($(this).val()!=''){
    //      var data = $(this).val().replace(/(?:^|\s)\w/g, function (match) {
    //        return match.toUpperCase();
    //     })
    //     $('#location').html('<i class="fa fa-map-marker" aria-hidden="true"></i> '+data);
    // }


// });
//     var query = "SELECT * FROM feed WHERE url='http://feeds.feedburner.com/Tutorialzine' LIMIT 2";

//     // Storing the seconds since the epoch in now:
//     var now = (new Date()).getTime()/1000;

//     // If there is no cache set in localStorage, or the cache is older than 1 hour:
//     if(!localStorage.cache || now - parseInt(localStorage.time) > 1*60*60)
//     {
//         $.get("http://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent(query)+"&format=json&callback=?",function(msg){

//             // msg.query.results.item is an array:
//             var items = msg.query.results.item;
//             var htmlString = "";

//             for(var i=0;i<items.length;i++)
//             {
//                 var tut = items[i];

//                 // Extracting the post ID from the permalink:
//                 var id = tut.guid.content.match(/(\d+)$/)[0];

//                 // Looping and generating the markup of the tutorials:

//                 htmlString += '<div class="tutorial">\
//                                 <img src="https://tutorialzine.com/img/posts/'+id+'.jpg" />\
//                                 <h2>'+tut.title+'</h2>\
//                                 <p>'+tut.description+'</p>\
//                                 <a href="'+tut.link+'" target="_blank">Read more</a>\
//                                 </div>';
//             }

//             // Setting the cache
//             localStorage.cache  = htmlString;
//             localStorage.time   = now;

//             // Updating the content div:
//             $('#content').html(htmlString);
//         },'json');
//     }
//     else{
//         // The cache is fresh, use it:
//         $('#content').html(localStorage.cache);
//     }
});
// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, {data: text}, function(response) {
//             $('#status').html('changed data in page');
//             console.log('success');
//         });
//     });
// });