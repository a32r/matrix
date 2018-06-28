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
coord = 'y'
sign = '-'
count = 1
signCount = 2
result.push(matrix[x][y])
k = 1

console.log('coordinates(' + x + ', ' + y + ')')

// while (k <= Math.floor(matrix.length)) {
while (k <= 2) {

	for (a = 1; a <= k; a++) {
		l = (sign == '+') ? a : -a

		if (coord == 'x') {
			x = x + l
		}

		if (coord == 'y') {
			y = y + l
		}

		result.push(matrix[x][y])
	}

	console.log('coordinates(' + x + ', ' + y + ')')

	coordToggle()

	if (signCount == 2) {
		signToggle()
		signCount = 1
	} else {
		signCount++
	}

	if (count == 2) {
		count = 1
		k++
	} else {
		count++
	}

}

function signToggle() {
	sign = (sign == '+') ? '-' : '+'
}

function coordToggle() {
	coord = (coord == 'x') ? 'y' : 'x'
}

document.getElementById('result').innerHTML = result
