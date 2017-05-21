  $(document).ready(function() {
    $("#button").on("click", function(){
      var string = document.getElementById("search-box").value;
      console.log(string);
    });
  });