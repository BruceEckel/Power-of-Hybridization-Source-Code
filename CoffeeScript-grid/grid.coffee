cell = (row, col) ->
  "<td id='#{row}X#{col}' style='border-style:solid;border-width:8px;'></td>"

row = (ncols, row) ->
  '<tr>' +  (cell(row, col) for col in [0..ncols]).join('') + "</tr>\n"

table = (nrows, ncols) ->
  '<table>\n' + (row(ncols, n) for n in [0..nrows]).join('') + '</table>'

randomRGBColor = ->
  val = -> Math.floor(Math.random()*255)
  "rgb(" + val() + "," + val() + "," + val() + ")"

randomize = (nrows, ncols) ->
  for r in [0..nrows]
    for c in [0..ncols]
      $('#' + "#{r}X#{c}").css("border-color", randomRGBColor())
  setTimeout (-> randomize nrows, ncols), 1000

$ ->
  rows = 30; cols = 60
  $("#board").html(table rows, cols)
  randomize rows, cols