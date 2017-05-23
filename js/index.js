  $(document).ready(function() {
    $("#button").on("click", function(){
      var string = document.getElementById("search-box").value;
      console.log(string);
    });
      var link = "https://en.wikipedia.org/w/api.php?action=opensearch&search=zyz&limit=1&namespace=0&format=jsonfm?callback=?"
      $.getJSON(link, function(json) {
        console.log(JSON.stringify(json));
      });
  });