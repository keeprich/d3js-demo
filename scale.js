// CREATING A SIMPLE axis

// d3.axisTop()
// d3.axisRight()
// d3.axisBottom()
// d3.axisLeft()

var data = [39, 45, 78, 93, 48, 59, 64, 39, 94, 65, 84, 64, 22, 12];

var svgWidth = 500;
var svgHeight = 300;

var svg = d3.select('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight)

    var xScale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, svgWidth]);

    var yScale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([svgHeight, 0]);

        var x_axis = d3.axisBottom().scale(xScale);

        var y_axis = d3.axisLeft().scale(yScale);

        svg.append('g')
            .attr('transform', 'translate(50, 10)')
            .call(y_axis);

            var xAxisTranslate = svgHeight - 20;

  svg.append('g')
                .attr('transform', 'translate(50, ' + xAxisTranslate +')')
                .call(x_axis);