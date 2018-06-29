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

// making spiral
function spiral(arr, direction = 'left') {

	if (direction == 'left') {
		coord = 'y'
		sign = '-'
		signCount = 2
	}

	if (direction == 'up') {
		coord = 'x'
		sign = '-'
		signCount = 1
	}

	if (direction == 'right') {
		coord = 'y'
		sign = '+'
		signCount = 2
	}

	if (direction == 'down') {
		coord = 'x'
		sign = '+'
		signCount = 1
	}

	result = []
	x = y = Math.floor(arr.length/2)
	result.push(arr[x][y])
	count = 1
	k = 1

	max = Math.floor(arr.length) - 1
	while (k <= max) {

		for (a = 1; a <= k; a++) {
			if (coord == 'x') {
				(sign == '+') ? x++ : x--
			}

			if (coord == 'y') {
				(sign == '+') ? y++ : y--
			}

			result.push(arr[x][y])
		}

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
	return result
}

function signToggle() {
	sign = (sign == '+') ? '-' : '+'
}

function coordToggle() {
	coord = (coord == 'x') ? 'y' : 'x'
}

document.getElementById('result').innerHTML = 'Результат: ' + spiral(matrix)
