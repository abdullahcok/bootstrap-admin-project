new Chart(document.getElementById("doughnut-chart"), {
	type: 'doughnut',
	data: {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				label: "Daily Stats",
				backgroundColor: ["#042d48", "#4e9ba5", "#07775f", "#865d52", "#961107", "#1d1d1d", "#FE642E"],
				data: [100, 500, 250, 300, 140, 500, 300]
        }
      ]
	},
	options: {
		title: {
			display: true,
			text: 'Monthly Stats'
		}
	}
});
