(function() {
  var getData;
  getData = function() {
    $.post("/", {
      mod: $(".text").val(),
      num: Math.random() * Math.PI * 2
    }, function(result) {
      return $("#data").html(result.dat + " " + result.txt).hide().fadeIn(500);
    });
    return setTimeout(getData, 2000);
  };
  $(function() {
    return getData();
  });
}).call(this);
