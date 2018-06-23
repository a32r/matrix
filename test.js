n = 3
document.write(Math.pow(2*n-1,2))
for (i = 0; i < Math.pow(2*n-1,2); i++) {
	var cell = document.createElement('div')
	cell.innerHTML = i
	document.getElementById('test').appendChild(cell)
}
