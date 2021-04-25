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

    //Get selected dropdown value
    var selectedSample = sampleNames[0];

    console.log(selectedSample);

    

    });
};

function optionChanged(selectedSample){
    console.log(selectedSample);
};

init();