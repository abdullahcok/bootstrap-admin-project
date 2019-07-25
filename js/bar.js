new Chart(document.getElementById("bar-chart"), {
	type: 'bar',
	data: {
		labels: ["1st", "2nd", "3rd", "4th"],
		datasets: [
			{
				label: "Products Ordered",
				backgroundColor: ["#f15025", "#a610e5", "#2b5cb9", "#740d06"],
				data: [30, 40, 90, 145]
        }
      ]
	},
	options: {
		legend: {
			display: false
		},
		title: {
			display: true,
			text: 'Weekly Stats'
		}
	}
});
