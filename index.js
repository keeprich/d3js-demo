// DOM SELECTION AND MANIPULATION

d3.select('h1').style('color', 'red')
  .attr('class', 'heading')
  .text('Updating the only text');


d3.select('body')
  .style('color', 'silver')
  .append('p')
  .text('Esther always say I inly think about my Self');

d3.select('body')
  .style('color', 'silver')
  .append('p')
  .text('Esther always say I inly think about my Self');


d3.selectAll('p')
  .style('border', 'red solid 4px')

  // DOM SELECTION AND MANIPULATION

//   DATA LOADING AND BINDING

var dataset1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

d3.select('body')
    .selectAll('h2')
    .data(dataset1)
    .enter()
    .append('h2')
    // .text('D3 is awesome!!')
    .text(function(d) {
        return d;
    })

//   DATA LOADING AND BINDING

//   CREATING A SIMPLE BAR CHART

// var dataset = [12, 34, 45, 87, 64, 654, 123, 120, 45, 53, 543, 76, 90, 43];
var dataset = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0.1 ];

var svgWidth = 500;
var svgHeight = 300;
var barPadding = 5;
var barWidth = (svgWidth / dataset.length);

// making use of Scales to help make small dataset visible
var yScale = d3.scaleLinear()
.domain([0, d3.max(dataset)])
.range([0, svgHeight]);

var svg = d3.select('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight)

    var barChart = svg.selectAll('rect')
        .data(dataset)
        .enter()
        .append('rect')
        .attr('y', function(d) {
            return svgHeight - yScale(d)
        })
        // .attr('y', function(d) {
        //     return svgHeight - d
        // })
        .attr('height' , function(d) {
            return yScale(d);
        })
        // .attr('height' , function(d) {
        //     return d;
        // })
        .attr('width', barWidth - barPadding)
        .attr('transform', function(d, i) {
            var translate = [barWidth * i, 0];
            return 'translate(' + translate + ')';
        })
        // adding color to barchart
        // .attr("fill", function(d){
        //      return d.y = "red"});
        // OR
        .attr('fill', 'yellow');

// adding labels to barchart
var text = svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(function(d) {
        return d;
    })
    .attr('y', function(d, i) {
        return svgHeight - d - 2;
    })

    .attr('x', function(d, i) {
        return barWidth * i;
    })

    .attr('fill', 'red');


//   CREATING A SIMPLE BAR CHART


