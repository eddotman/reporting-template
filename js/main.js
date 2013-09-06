$(document).ready( function() {

	var ctx1 = $("#Chart1").get(0).getContext("2d");
	var ctx2 = $("#Chart2").get(0).getContext("2d");
	var ctx3 = $("#Chart3").get(0).getContext("2d");
	var Chart1 = new Chart(ctx1);
	var Chart2 = new Chart(ctx2);
	var Chart3 = new Chart(ctx3);
	
	var data1 = {
		labels : ["January","February","March","April","May","June","July"],
		datasets : [
			{
				fillColor : "rgba(80,220,80,0.5)",
				strokeColor : "rgba(80,220,80,1)",
				pointColor : "rgba(80,220,80,1)",
				pointStrokeColor : "#fff",
				data : [65,59,90,81,56,55,40]
			},
			{
				fillColor : "rgba(80,80,205,0.5)",
				strokeColor : "rgba(80,80,205,1)",
				pointColor : "rgba(80,80,205,1)",
				pointStrokeColor : "#fff",
				data : [28,48,40,19,96,27,100]
			}
		]
	};

	var data2 = [
		{
			value: 30,
			color:"#F7464A"
		},
		{
			value : 50,
			color : "#E2EAE9"
		},
		{
			value : 100,
			color : "#D4CCC5"
		},
		{
			value : 40,
			color : "#949FB1"
		},
		{
			value : 120,
			color : "#4D5360"
		}

	];

	var data3 = {
		labels : ["January","February","March","April","May","June","July"],
		datasets : [
			{
				fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "rgba(220,220,220,1)",
				data : [65,59,90,81,56,55,40]
			},
			{
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(151,187,205,1)",
				data : [28,48,40,19,96,27,100]
			}
		]
	};

	new Chart(ctx1).Line(data1);
	new Chart(ctx2).Doughnut(data2);
	new Chart(ctx3).Bar(data3);
});