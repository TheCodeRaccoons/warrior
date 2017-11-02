var chartData = {
    "barCircleWeb":[
        {"index":0.1, "value":18, "fill":"#BBDDF5", "label":"L"},
        {"index":0.2, "value":13, "fill":"#A5D1F1", "label":"M"},
        {"index":0.3, "value":16, "fill":"#8EC6EE", "label":"M"},
        {"index":0.4, "value":24, "fill":"#78BBEB", "label":"J"},
        {"index":0.5, "value":19, "fill":"#61B0E8", "label":"V"},
        {"index":0.6, "value":19, "fill":"#4BA4E4", "label":"S"},
        {"index":0.7, "value":18, "fill":"#3499E1", "label":"D"}
    ]
};

function drawBarCircleChart(data,target,values,labels){
    var w = 362,
        h = 362,
        size = data[0].value * 1.8,
        radius = 200,
        sectorWidth = 0.1,
        radScale = 35,
        sectorScale = 1.45,
        target = d3.select(target),
        valueText = d3.select(values),
        labelText = d3.select(labels);


    var arc = d3.svg.arc()
        .innerRadius(function(d,i){return (d.index/sectorScale) * radius + radScale; })
        .outerRadius(function(d,i){return ((d.index/sectorScale) + (sectorWidth/sectorScale)) * radius + radScale; })
        .startAngle(Math.PI)
        .endAngle(function(d) { return Math.PI + (d.value / size) * 2 * Math.PI; });
    
    var path = target.selectAll("path")
        .data(data);

    //TODO: seperate color and index from data object, make it a pain to update object order
    path.enter().append("svg:path")
        .attr("fill",function(d,i){return d.fill})
    .attr("stroke","#D1D3D4")
        .transition()
        .ease("elastic")
        .duration(1000)
        .delay(function(d,i){return i*100})
        .attrTween("d", arcTween);
        
    valueText.selectAll("tspan").data(data).enter()
        .append("tspan")
        .attr({
            x:50,
            y:function(d,i){return i*14},       
            "text-anchor":"end"
        })
        .text(function(d,i){return data[i].value});
    
    labelText.selectAll("tspan").data(data).enter()
        .append("tspan")
        .attr({
            x:0,
            y:function(d,i){return i*14}
        })
        .text(function(d,i){return data[i].label});

    function arcTween(b) {
        var i = d3.interpolate({value: 0}, b);
        return function(t) {
            return arc(i(t));
        };
    }
}

// Animation Queue
setTimeout(function(){drawBarCircleChart(chartData.barCircleWeb,"#circleBar-web-chart","#circleBar-web-values","#circleBar-web-labels")},500); 

d3.select("#circleBar-web-icon")
    .transition()
    .delay(500)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-web-text")
    .transition()
    .delay(750)
    .duration(500)
    .attr("opacity","1"); 
d3.select("#circleBar-web-clipLabels")
    .transition()
    .delay(600)
    .duration(1250)
    .attr("height","150");
