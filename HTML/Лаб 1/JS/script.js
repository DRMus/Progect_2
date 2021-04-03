	var mass1 = []
	var mass2 = []
	var bl = true
	var percent = ['0', '2', '4', '6', '8']
	var notPercent = ['1', '3', '5', '7', '9']
	var all = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

	
	function union()
	{
		return mass1+', '+mass2
	}
	function intersection()
	{
		var val = []
		for(var i = 0; i < mass1.length; i++)
		{
			if(mass2.indexOf(mass1[i]) != -1){
				val.push(mass1[i])
			}
		}
		return val
		
	}
	function addition()
	{
		var val = []
		for(var i = 0; i < mass1.length; i++)
		{
			if(mass2.indexOf(mass1[i]) === -1){
				val.push(mass1[i])
			}
		}
		return val
	}
	
	function symdif()
	{
		var val = []
		for(var i = 0; i < mass1.length; i++)
		{
			if(mass2.indexOf(mass1[i]) === -1){
				val.push(mass1[i])
			}
			if(mass1.indexOf(mass2[i]) === -1){
				val.push(mass2[i])
			}
		}
		return val
	}
	
	function rasch()
	{
		var result = ""
		
		result = 'Объединение: '
		result += union()
		document.getElementById('union').innerHTML = result
		result = 'Пересечение: '
		result += intersection()
		document.getElementById('intersection').innerHTML = result
		result = 'Дополнение: '
		result += addition()
		document.getElementById('addition').innerHTML = result
		result = 'Симметрическая разность: '
		result += symdif()
		document.getElementById('symdif').innerHTML = result
	}
	
	function start()
	{
		mass1 = document.getElementById('mass1').value
		mass2 = document.getElementById('mass2').value
		mass1 = mass1.split(' ')
		mass2 = mass2.split(' ')
		console.log(mass1)
		for(var i = 0; i < mass1.length; i++){
			if(mass1[i].length != 4 || percent.indexOf(mass1[i][0]) === -1 || notPercent.indexOf(mass1[i][1]) === -1 || all.indexOf(mass1[i][2]) === -1 || all.indexOf(mass1[i][3]) === -1){
				alert("Данные введены неверно")
				return;
			}
		}
		for(var i = 0; i < mass2.length; i++){
			if(mass2[i].length != 4 || percent.indexOf(mass2[i][0]) === -1 || notPercent.indexOf(mass2[i][1]) === -1 || all.indexOf(mass2[i][2]) === -1 || all.indexOf(mass2[i][3]) === -1){
				alert("Данные введены неверно")
				return;
			}
		}
			rasch()
	}
	