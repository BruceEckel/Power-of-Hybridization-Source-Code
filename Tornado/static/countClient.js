(function() {
  var ws;
  ws = new WebSocket("ws://localhost:8888/socket");
  ws.onopen = function() {
    return $('body').append('<div>Opened</div>');
  };
  ws.onmessage = function(event) {
    return $('#data').html('<div>' + event.data + '</div>');
  };
  ws.onerror = function(event) {
    return $('body').append('<div>Error:' + event + ' ' + '</div>');
  };
  ws.onclose = function(event) {
    return $('body').append('<div>Close:' + event.reason + '</div>');
  };
  $(function() {
    return $('body').append('<div>Start</div>');
  });
}).call(this);
