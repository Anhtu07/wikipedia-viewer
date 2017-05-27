$(document).ready(function() {
  var string = "";
  $("#button").on("click", function() {
    string = document.getElementById("search-box").value;
    $.getJSON(
      "https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&search=" +
        string +
        "&callback=?",
      function(json) {
        var content = "";
        var page_titles = json[1];
        var page_descriptions = json[2];
        var page_link = json[3];
        for (var i = 0; i < page_titles.length; i++) {
          content +=
            "<div style = 'font-size: 13px; background-color: #D3D3D3; text-align:left; margin-left: 12%; margin-right: 12%; margin-top: 30px; border-style: solid; border-right: 0px; border-top: 0px; border-bottom: 0px; border-radius: 2px'> <a href = " +
            page_link[i] +
            ">" +
            "<h1 style='font-size: 85%; padding : 10 0 10 5 px'>" +
            page_titles[i] +
            "</h1>" +
            "</a>" +
            "<p>" +
            page_descriptions[i] +
            "</p>" +
            "</div>";
        }
        $("#button").html(content);
        console.log(JSON.stringify(json[3]));
      }
    );
  });
});
document
  .getElementById("search-box")
  .addEventListener("keydown", function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      string = document.getElementById("search-box").value;

      $.getJSON(
        "https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&search=" +
          string +
          "&callback=?",
        function(json) {
          var content = "";
          var page_titles = json[1];
          var page_descriptions = json[2];
          var page_link = json[3];
          for (var i = 0; i < page_titles.length; i++) {
              content +=
            "<div style = 'font-size: 13px; background-color: #D3D3D3; text-align:left; margin-left: 12%; margin-right: 12%; margin-top: 30px; border-style: solid; border-right: 0px; border-top: 0px; border-bottom: 0px; border-radius: 2px'> <a href = " +
            page_link[i] +
            ">" +
            "<h1 style='font-size: 85%; padding : 10 0 10 5 px'>" +
            page_titles[i] +
            "</h1>" +
            "</a>" +
            "<p>" +
            page_descriptions[i] +
            "</p>" +
            "</div>";
          }
          $("#button").html(content);
        }
      );
    }
  });