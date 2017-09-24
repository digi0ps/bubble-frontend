var lineData = [ { "x": 1,   "y": 100},  { "x": 20,  "y": 30},{ "x": 40,  "y": 100}, { "x": 60,  "y": 40},{ "x": 80,  "y": 100},  { "x": 100, "y": 50}, {"x": 120, "y": 100}];

function HillChart(id, url){
  var con = "#" + id;
  
  var dline = d3.line()
    .x((d) => d.x)
    .y((d) => d.y)
    .curve(d3.curveMonotoneX)
  
  var svg = d3.select(con)
    .append("svg")
    .attr("width", "800")
    .attr("height", "200");
  
  var lineChart = svg.append("path")
    .attr("d", dline(lineData))
    .attr("fill", "none")
    .attr("stroke", "red")
    .attr("stroke-width", 2);  
}
