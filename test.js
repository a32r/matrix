n = 2
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

max = Math.floor(matrix.length) - 1
while (k <= max) {
// console.log('k = ' + Math.floor(matrix.length))
// while (k <= 4) {

	for (a = 1; a <= k; a++) {
		if (coord == 'x') {
			(sign == '+') ? x++ : x--
		}

		if (coord == 'y') {
			(sign == '+') ? y++ : y--
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
		if (k == max) {
			count++
		} else {
			count = 1
			k++
		}
	} else if (count < 2) {
		count++
	} else if (count > 2) {
		break
	}

}

function signToggle() {
	sign = (sign == '+') ? '-' : '+'
}

function coordToggle() {
	coord = (coord == 'x') ? 'y' : 'x'
}

document.getElementById('result').innerHTML = 'Результат: ' + result
