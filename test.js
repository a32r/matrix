n = 2
m = n*2-1
for (i = 0; i < m; i++) {
	var row = document.createElement('tr')
	row.id = "tr-"+i
	document.getElementById('test').appendChild(row)
	for (j = 0; j < m; j++) {
		var cell = document.createElement('td')
		cell.innerHTML = j
		document.getElementById('tr-'+i).appendChild(cell)
	}
}
