//Portions of code are from the instructor's office hours tutorial.
console.log("app.js loaded");

function init() {
    //Populate dropdown
    var dropdown = d3.select("#selDataset");

    d3.json("data/samples.json").then(d => {
        console.log(d);

        var sampleNames = d.names;

        
        sampleNames.forEach(sample => {
            dropdown.append("option")
                .text(sample)
                .property("value", sample);
        });

    //Get initial selected dropdown value
    optionSelected(sampleNames[0]);

    });
};

function optionSelected(selectedSample){
    console.log(selectedSample);

    //Draw graphs and get demo data
    drawGraph(selectedSample);
    drawChart(selectedSample);
    getDemoData(selectedSample);

};

function drawGraph(selectedSample){
    console.log(`Draw Bargraph for ${selectedSample}`);

    d3.json("data/samples.json").then(d => {

        var samples = d.samples;
        var resultArray = samples.filter(s => s.id == selectedSample);
        var result = resultArray[0];

        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;

        
        xticks = sample_values.slice(0,10).reverse();
        yticks = otu_ids.slice(0,10).map(otuID => `OTU ${otuID}`).reverse();

        var barTrace = {
            x: xticks,
            y: yticks,
            type: "bar",
            text: otu_labels.slice(0,10).reverse(),
            orientation: "h"
        }

        var barData = [barTrace];

        var barLayout = {
            title: "Top 10 Bacteria Cultures Found",
            margin: {t:30, l:150}
        }

        Plotly.newPlot("bar", barData, barLayout);
        console.log(result);

    });

};
function drawChart(selectedSample){
    console.log(`Draw Bubble Chart for ${selectedSample}`);

    // d3.json("data/samples.json").then(d => {

    //     var samples = d.samples;
    //     var resultArray = samples.filter(s => s.id == selectedSample);
    //     var result = resultArray[0];

    //     console.log(result);

    // });

};
function getDemoData(selectedSample){
    console.log(`Show Demographic Data for ${selectedSample}`);

    // d3.json("data/samples.json").then(d => {

    //     var metadata = d.metadata;
    //     var resultArray = metadata.filter(m => m.id == selectedSample);
    //     var result = resultArray[0];

    //     console.log(result);

    // });

};

init();