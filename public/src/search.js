
var key = 'api_key=2c8a02fa36fb5299dcd97bbc84609899';
var ImgPath = "http://image.tmdb.org/t/p/";
<<<<<<< HEAD
//var urls = ["", "/cgi-bin/LWP.pl?url=http://en.wikipedia.org", ""];
=======
var urls = ["", "/cgi-bin/LWP.pl?url=http://en.wikipedia.org", ""];
>>>>>>> 1eb53e9c0d9a13b5a300a950c2076781aa329bd9
var RTkey = "pfwh96pvezces4nybpv7qf8f";

$(function() {

  $("#Films").autocomplete({
  
    source: function(request, response) {
      $.getJSON("http://api.themoviedb.org/3/search/tv?" + key, {
        query: request.term
      }, function(tvs) {
        response(tvs.results);

      });
    },
    minLength: 2, 
    delay: 200, 
    focus: function(event, tv) {
      //an item is being focussed on
      $(this).val(tv.item.name);
      return false;
    }
   
  }).data("uiAutocomplete")._renderItem = function(ul, tv) {
    console.log(tv)
<<<<<<< HEAD
    if (tv.poster_path){  var inner_html = "<a><img width='45' height='68' src=" + ImgPath + "w92" + tv.poster_path + "> <strong>" + tv.name + "</strong>  " + tv.first_air_date + " </a>";
    return $("<li></li>")
      .data("item.autocomplete", tv)
      .append(inner_html)
      .appendTo(ul);} else {

          var inner_html = "<a> <strong>" + tv.name + "</strong>  " + tv.first_air_date + " </a>";
=======
    var inner_html = "<a><img width='45' height='68' src=" + ImgPath + "w92" + tv.poster_path + "> <strong>" + tv.name + "</strong> (" + tv.first_air_date + ")</a>";
>>>>>>> 1eb53e9c0d9a13b5a300a950c2076781aa329bd9
    return $("<li></li>")
      .data("item.autocomplete", tv)
      .append(inner_html)
      .appendTo(ul);
<<<<<<< HEAD
      }
  
=======
>>>>>>> 1eb53e9c0d9a13b5a300a950c2076781aa329bd9
  };



})
