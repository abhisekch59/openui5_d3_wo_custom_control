sap.ui.define([], function () {
    return function () {
        // available configuration options
        var _innerRadius = 5
        var _outerRadius = 30
        var _width = 60
        var _height = 60

        // Chart
        var my = function (selection) {
            selection.each(function (d, i) {
                //setting the outer and inner radius
                var arc = d3.svg.arc().outerRadius(_outerRadius).innerRadius(_innerRadius)
                
                //setting the "values" of each of the segments of the donut chart
                var pie = d3.layout.pie().value(function (d) {
                    return d.score
                })

                //this will be the selector for the tooltip
                var toolTipDiv = d3.select(".donutTooltip")

                //create the donut chart
                var g = d3.select(this).append('g')
                    .attr('transform', 'translate(' + _width / 2 + ',' + _height / 2 + ')')

                g.selectAll('path')
                    .data(pie(d))
                    .enter()
                    .append('path')
                    .attr('d', arc)
                    .attr('fill', function (d) {
                        return d.data.color //this has to be changed as per the data binded
                    })
                    .attr('stroke', 'black')
                    .style('stroke-width', '1px')
                    //here goes logic when we enter into or hover over a particulare segment
                    .on("mousemove", function (d) {
                        toolTipDiv
                            .style("left", d3.event.pageX + 10 + "px")
                            .style("top", d3.event.pageY - 25 + "px")
                            .style("opacity", 1)
                            .html(d.data.name + "<br>" + d.data.score)
                    })
                    //tooltip must be hidden once we move out
                    .on("mouseout", function (d) {
                        toolTipDiv
                            .style("opacity", 0)
                    })
            })
        }

        // getter/setter for outerRadius
        my.outerRadius = function (outerRadius) {
            if (!arguments.length) return _outerRadius
            _outerRadius = outerRadius
            return my
        }

        // getter/setter for innerRadius
        my.innerRadius = function (innerRadius) {
            if (!arguments.length) return _innerRadius
            _innerRadius = innerRadius
            return my
        }

        // getter/setter for width
        my.width = function (width) {
            if (!arguments.length) return _width
            _width = width
            return my
        }

        // getter/setter for height
        my.height = function (height) {
            if (!arguments.length) return _height
            _height = height
            return my
        }
        return my
    }
})