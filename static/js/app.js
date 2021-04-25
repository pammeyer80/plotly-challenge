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
    console.log("Draw Bargraph");
};
function drawChart(selectedSample){
    console.log("Draw Bubble Chart");
};
function getDemoData(selectedSample){
    console.log("Show Demographic Data");

};

init();