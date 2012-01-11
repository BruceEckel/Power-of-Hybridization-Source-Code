ws = new WebSocket("ws://localhost:8888/socket");

ws.onopen = ->
  $('body').append('<div>Opened</div>');

ws.onmessage = (event) ->
  $('#data').html('<div>' + event.data + '</div>');

ws.onerror = (event) ->
  $('body').append('<div>Error:' + event + ' ' + '</div>');

ws.onclose = (event) ->
  $('body').append('<div>Close:' + event.reason + '</div>');

$ ->
  $('body').append('<div>Start</div>');
