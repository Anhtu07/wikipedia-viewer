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
            "<div style = 'font-size: 10px; background-color: #D3D3D3; text-align:left; margin-left: 7%; margin-right: 7%; margin-top: 30px; border-style: solid; border-right: 5px; border-top: 5px; border-bottom: 5px; border-radius: 2px'> <a href = " +
            page_link[i] +
            ">" +
            "<h1 style='font-size: 75%'>" +
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
              "<div style = 'font-size: 10px; background-color: #D3D3D3; text-align:left; margin-left: 7%; margin-right: 7%; margin-top: 30px; border-style: solid; border-right: 5px; border-top: 5px; border-bottom: 5px; border-radius: 2px'> <a href = " +
              page_link[i] +
              ">" +
              "<h1 style='font-size: 75%'>" +
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