n = 3
m = n*2-1

// making matrix
nums = []
for (i = 0; i < m; i++) {
	nums[i] = []
	var row = document.createElement('tr')
	row.id = "tr-"+i
	document.getElementById('test').appendChild(row)
	for (j = 0; j < m; j++) {
		var cell = document.createElement('td')
		num = Math.floor(Math.random() * 1001)
		nums[i][j] = num
		cell.innerHTML = num
		document.getElementById('tr-'+i).appendChild(cell)
	}
}

// making result
center = Math.floor(m/2)
result = []
result.push(nums[center][center])
document.getElementById('result').innerHTML = result
