// Get the context of the canvas element we want to select

function showGraph(){
    var ctx = document.getElementById("myChart").getContext("2d");

    var data = {
        labels: window.label,
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: window.datapoints
            }
        ]
    };

    var myLineChart = new Chart(ctx).Line(data);
}