n = 3
m = n*2-1

// making matrix
matrix = []
for (i = 0; i < m; i++) {
	matrix[i] = []
	var row = document.createElement('tr')
	row.id = "tr-"+i
	document.getElementById('test').appendChild(row)
	for (j = 0; j < m; j++) {
		var cell = document.createElement('td')
		num = Math.floor(Math.random() * 1001)
		matrix[i][j] = num
		cell.innerHTML = num
		document.getElementById('tr-'+i).appendChild(cell)
	}
}

// making result
result = []
x = y = Math.floor(matrix.length/2)
result.push(matrix[x][y])
coord = 'y'
sign = '-'

for (k = 1; k <= Math.floor(matrix.length); k++) {

	l = (sign == '+') ? k : -k

	if (coord == 'x') {
		result.push(matrix[x+l][y])
	}

	if (coord == 'y') {
		result.push(matrix[x][y+l])
	}

}

function signToggle() {
	sign = (sign == '+') ? '-' : '+'
}

function coordToggle() {
	coord = (coord == 'x') ? 'y' : 'x'
}

document.getElementById('result').innerHTML = coord
