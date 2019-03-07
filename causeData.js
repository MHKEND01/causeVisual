var dataC = d3.csv("mendel.csv");

var drawChart = function(data)
{
var width = 400;
var height = 200;
var barWidth = width/data.length;

var svg = d3.select("svg")
            .attr("width", width)
            .attr("height",height)
            .style("float","left");
svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", function(d,i)
  {
    return i * barWidth;

  })
  .attr("y",function(d)
  {

  return height - d.Observed*0.5;
}
)
.attr("width", barWidth - 5)
.attr("height", function(d){return d.Observed*0.5})
.attr("fill", "teal")

svg.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .text(function(d){return d.Observed})
    .attr("x", function(d,i)
  {
    return (i * barWidth) + (barWidth/5);

  })
  .attr("y",function(d)
  {

  return (height - d.Observed*.5) - 10;
}
)
.attr("font-family", "sans-serif")
.attr("font-size", "12px")
.attr("fill", "black")

var Labels = d3.select("body")
  .append("svg")
  .attr("width", 500)
  .attr("height", 20)
  .style("float","left")
  .style("clear", "left")

  Labels.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text(function(d){return d.Class})
      .attr("x", function(d,i)
    {
      return (i * barWidth);

    })
    .attr("y",function(d)
    {

    return 17;
  }
  )
  .attr("font-family", "sans-serif")
  .attr("font-size", "12px")
  .attr("fill", "black")
};

dataC.then(function(data)
{
  drawChart(data);
console.log("data",data);
},
function(err)
{
console.log(err);
}
);
