google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var infoGraph = [];
var titlesChart = ["Dia", "Valor","Tipo"];
infoGraph.push(titlesChart);

console.log(moviments);

moviments.forEach((item)=>{
  console.log(item)	    
  chartItem = [item.date , item.type, parseFloat(item.value)];
  infoGraph.push(chartItem);
})

var data = google.visualization.arrayToDataTable(infoGraph);


var options = {
title: 'Movimentos do Livro',
curveType: 'function',
legend: { position: 'bottom' }
};

var chart = new google.visualization.AreaChart(document.getElementById('curve_chart'));

chart.draw(data, options);
}