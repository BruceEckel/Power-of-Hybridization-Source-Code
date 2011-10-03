getData = ->
  $.post "/",
    { mod: $(".text").val(), num: Math.random() * Math.PI * 2 },
    (result) ->
      $("#data").html(result.dat + " " + result.txt).hide().fadeIn(500)
  setTimeout getData, 2000 # Repeat every 2 seconds

$ ->
  getData()
