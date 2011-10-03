(function() {
  var cell, randomRGBColor, randomize, row, table;
  cell = function(row, col) {
    return "<td id='" + row + "X" + col + "' style='border-style:solid;border-width:8px;'></td>";
  };
  row = function(ncols, row) {
    var col;
    return '<tr>' + ((function() {
      var _results;
      _results = [];
      for (col = 0; 0 <= ncols ? col <= ncols : col >= ncols; 0 <= ncols ? col++ : col--) {
        _results.push(cell(row, col));
      }
      return _results;
    })()).join('') + "</tr>\n";
  };
  table = function(nrows, ncols) {
    var n;
    return '<table>\n' + ((function() {
      var _results;
      _results = [];
      for (n = 0; 0 <= nrows ? n <= nrows : n >= nrows; 0 <= nrows ? n++ : n--) {
        _results.push(row(ncols, n));
      }
      return _results;
    })()).join('') + '</table>';
  };
  randomRGBColor = function() {
    var val;
    val = function() {
      return Math.floor(Math.random() * 255);
    };
    return "rgb(" + val() + "," + val() + "," + val() + ")";
  };
  randomize = function(nrows, ncols) {
    var c, r;
    for (r = 0; 0 <= nrows ? r <= nrows : r >= nrows; 0 <= nrows ? r++ : r--) {
      for (c = 0; 0 <= ncols ? c <= ncols : c >= ncols; 0 <= ncols ? c++ : c--) {
        $('#' + ("" + r + "X" + c)).css("border-color", randomRGBColor());
      }
    }
    return setTimeout((function() {
      return randomize(nrows, ncols);
    }), 1000);
  };
  $(function() {
    var cols, rows;
    rows = 30;
    cols = 60;
    $("#board").html(table(rows, cols));
    return randomize(rows, cols);
  });
}).call(this);
