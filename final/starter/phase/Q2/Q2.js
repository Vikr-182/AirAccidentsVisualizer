function compare(a, b) {
    if (a.value < b.value) return 1;
    if (a.value > b.value) return -1;
    return 0;
}



var margin = {
    top: 60,
    right: 30,
    bottom: 40,
    left: 60
}
width = 700 - margin.left - margin.right;
height = 600 - margin.top - margin.bottom;

var xScale = d3.scaleLinear().range([0, width]);


d3.csv("First.csv", function (data) {

    console.log("hat");
    console.log(data);
    console.log("bat");

    for (var i = 0; i < data.length; i++) {
        //console.log("a_sort");
        console.log("beforesortinfor");
        console.log(data[i].Name);
        console.log(data[i].X2011);
        console.log(data[i].X2011);

        console.log("beforesortoutfor");

    }

    //data.sort()

    var xval = "X2011"
    var yval = "Y2011"
    var rval = "R2011"

    data.sort(function (a, b) {
        return +eval("a." + xval) - +eval("b." + xval);
    });


    for (var i = 0; i < data.length; i++) {

        console.log("aftersortinfor");
        console.log(data[i].Name);
        console.log(eval("data[i]." + xval));
        console.log(eval("data[i]." + yval));
        console.log(eval("data[i]." + rval));

        console.log("aftersortoutfor");
    }

    xScale.domain([0, d3.max(data, function (d) {
        console.log("x");
        console.log(eval("d." + xval));

        return eval("d." + xval);
    })]);


    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);
    var r = d3.scaleLinear().range([0, 32]);
    // Scale the range of the data
    x.domain(d3.extent(data, function (d) {
        console.log("x");
        console.log(eval("d." + xval));

        return eval("d." + xval);
    }));
    y.domain([0, d3.max(data, function (d) {

        console.log("y");
        console.log(eval("d." + yval));

        return eval("d." + yval);
    })]);


    r.domain([0, d3.max(data, function (d) {

        console.log("r");
        console.log(eval("d." + rval));
        return eval("d." + rval);
    })]);



    var valueline = d3.line()
        .x(function (d) {
            return x(eval("d." + xval));
        })
        .y(function (d) {
            return y(eval("d." + yval));
        });


    var svg = d3.select("#scatter").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



    var path = svg.selectAll(".dot")
        .data(data)
        .enter().append("circle")
        .attr("r", function (d) {
            return r(eval("d." + rval));
        })
        .attr("cx", function (d) {
            return xScale(eval("d." + xval));
        })
        .attr("cy", function (d) {
            return y(eval("d." + yval));
        })
        .attr("stroke", "#32CD32")
        .attr("class", "dot")
        .attr("stroke-width", 1.5)
        .attr("fill", "#FFFFFF")
        .on("mouseover.zero", function (d) {
            return tooltip.style("visibility", "visible").text(d.Name + ": " + eval("d." + xval) + ", " + eval("d." + yval) + ", " + eval("d." + rval));
        })
        .on("mouseover.one", function (d) {
            console.log(this)
            return this.style.fill = "red";
        })
        .on("mousemove", function (d) {
            return tooltip.style("top", (event.pageY - 10) + "px").style("left", (event.pageX + 10) + "px").text(d.Name + ": " + eval("d." + xval) + ", " + eval("d." + yval) + ", " + eval("d." + rval));
        })
        .on("mouseout.zero", function (d) {
            return tooltip.style("visibility", "hidden");

        })
        .on("mouseout.one", function (d) {
            console.log(this)
            return this.style.fill = "white";
        });

    var year = "data"
    // xScale.domain(eval(year).map(function (d) { return d.X2011; }));

    var xxaxis = svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale).tickFormat(function (d) {
            return d3.format(".2f")(d)
        }));
    // .scale(xScale))


    xxaxis.append("text")
        .attr("y", height - 250)
        .attr("x", width - 100)
        .attr("text-anchor", "end")
        .attr("stroke", "blue")


    var yaxis = svg.append("g")
        .call(d3.axisLeft(y).tickFormat(function (d) {
            return "$" + d3.format(".2f")(d)
        }));

    xxaxis.selectAll("text").style("stroke", "blue");

    yaxis.selectAll("text").style("stroke", "blue");

    xxaxis.selectAll("line").style("stroke", "purple");

    yaxis.selectAll("line").style("stroke", "green");




    var tooltip = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("font-family", "sans-serif")
        .style("font-size", "10px")
        .style("z-index", "10")
        .style("visibility", "hidden");





    const buttons = d3.selectAll('input');
    buttons.on('change', function (d) {

 
        var yeary = this.value
    

        if (yeary == "2011") { xval = "X2011"; yval = "Y2011"; rval = "R2011" }
        else if (yeary == "2012") { xval = "X2012"; yval = "Y2012"; rval = "R2012" }
        else if (yeary == "2013") { xval = "X2013"; yval = "Y2013"; rval = "R2013" }






        xScale.domain([0, d3.max(data, function (d) {
            console.log("x");
            console.log(eval("d." + xval));

            return eval("d." + xval);
        })]);


        x.domain(d3.extent(data, function (d) {
            console.log("x");
            console.log(eval("d." + xval));

            return eval("d." + xval);
        }));
        y.domain([0, d3.max(data, function (d) {

            console.log("y");
            console.log(eval("d." + yval));

            return eval("d." + yval);
        })]);
        r.domain([0, d3.max(data, function (d) {

            console.log("r");
            console.log(eval("d." + rval));
            return eval("d." + rval);
        })]);

        valueline = d3.line()
            .x(function (d) {
                return x(eval("d." + xval));
            })
            .y(function (d) {
                return y(eval("d." + yval));
            });





        var tex = svg.selectAll(".tick")
        //  .call(d3.axisBottom().scale(xScale))
        // .data(xScale)
        console.log(tex)
        tex.remove()





        xxaxis = svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(xScale).tickFormat(function (d) {
                return d3.format(".2f")(d)
            }));
        // .scale(xScale))


        xxaxis.append("text")
            .attr("y", height - 250)
            .attr("x", width - 100)
            .attr("text-anchor", "end")
            .attr("stroke", "blue")


        var yaxis = svg.append("g")
            .call(d3.axisLeft(y).tickFormat(function (d) {
                return "$" + d3.format(".2f")(d)
            }));



        xxaxis.selectAll("text").style("stroke", "blue");

        yaxis.selectAll("text").style("stroke", "blue");

        xxaxis.selectAll("line").style("stroke", "purple");

        yaxis.selectAll("line").style("stroke", "green");


        var circle = svg.selectAll(".dot")
            .data(data);
        console.log(circle)

        circle.exit().remove();//remove unneeded circles

        console.log(circle)





        circle.transition()
            .duration(500)
            // .data(data)
            // .enter().append("circle")
            .attr("r", function (d) {
                return r(eval("d." + rval))
            })
            .attr("cx", function (d) {
                return xScale(eval("d." + xval));
            })
            .attr("cy", function (d) {
                return y(eval("d." + yval));
            })
            .attr("stroke", "#32CD32")
            .attr("stroke-width", 1.5)
            .attr("fill", "#FFFFFF")

    });

});
