/**                                                                 
 * Глобальные перемнные                                        
 *   
 */ 

var mass1 = [];
var bl = true;
var count;
var n;
var trash;
var s = [];

/**                                                              
  * Функция sim проверка на симметричность                       
  *                                                              
  * Проверяем отношения на симметричность, т.е находим наличие пары xRy и yRx в массиве и прверяем наличие 
  * симметричных значений относительно главной диагонали              
  * @param trash                                                   
  *                                                              
  * return true|false                                                
  */


function sim(){
	for(var i = 0; i < trash.length; i++){
		count = 1;
		for(var j = 0; j < trash.length; j++){
			if (trash[i][0] == trash[j][1] && trash[i][1] == trash[j][0]){
				count++;
			}
		}
		if(count == 1){
			return false;
		}
	}
	return true;
}

/**                                                              
  * Функция antisim проверка на антисимметричность                       
  *                                                              
  * Проверяем отношения на антисимметричность, т.е находим наличие пары xRy и yRx в массиве и прверяем наличие 
  * антисимметричных значений относительно главной диагонали              
  * @param trash                                                   
  *                                                              
  * return true|false                                                
  */

function antisim(){
	for(var i = 0; i < n; i++){
		for(var j = 0; j < n; j++){
			if (s[i][j] * s[j][i] != 0){
				return false;
			}
		}
	}
	return true;
}

/**                                        
	* Функция cos проверка на кососимметричность  т.е проверяем отстутсвие пары xRy и yRx в массиве, учитывая исключение 0R0 
	*                                                                                                              
	* @param s                                          
	* @param n
	*                                                              
	* return true|false                                                                                                                                      
	*                                                             
*/

function cos() {
	for (var i = 0; i < n; i++) {
	    for (var j = 0; j < n; j++) {
	        if (s[i][j] != -s[j][i]) {
	            return false;
	        }
	    }
	}
	return true;
}

/**                                                              
  * Функция refl проверка на рефлексивность                    
  *                                                              
  * Проверяем введенное отношение на свойство рефлексивности. Находим пары вида xRx, причем (x,x) принадлежат R.                     
  *                                                              
  * @param n                                                  
  * @param s       
  * return true|false                                       
  */
function refl(){
	for (var i = 1; i < n; i++) {
        if (s[i-1][i-1] != s[i][i])
        	return false;
	}
	return true;
}

/**                                        
	* Функция tranz передает итоговый результат в DOM дерево
	*                                                     
	*                                                              
	* @param result строка с результатом работы                                           
	* 
	*                                                              
	* return NULL                                                                                                        
	* Метод split позволяет разбить строки на массив подстрок                                  
	*                                                              
	*
*/
function tranz() {
	count = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
			for (var z = 0; z < n; z++) {
				if (+s[i][z] * +s[z][j] != 0 && count == 0) {
					count = 1;
				}
			}
            if (count > s[i][j]) {
                return false;
			}
			count = 0;
		}
	}
	return true;
}

/**                                        
	* Функция result передает итоговый результат в DOM дерево
	*                                                     
	*                                                              
	* @param result строка с результатом работы                                           
	* 
	*                                                              
	* return NULL                                                                                                        
	* Метод split позволяет разбить строки на массив подстрок                                  
	*                                                              
	*
*/

function result(){
	var result = "";
	if(sim()){
		result = "да";
	}else{
		result = "нет";
	}
	document.getElementById('sim').innerHTML = result;
	
	if(antisim()){
		result = "да";
	}else{
		result = "нет";
	}
	document.getElementById('antisim').innerHTML = result;
	
	if(tranz()){
		result = "да";
	}else{
		result = "нет";
	}
	document.getElementById('tranz').innerHTML = result;
	
	if(refl()){
		result = "да";
	}else{
		result = "нет";
	}
	document.getElementById('refl').innerHTML = result;

	if(cos()){
		result = "да";
	}else{
		result = "нет";
	}
	document.getElementById('cos').innerHTML = result;
}

/**                                        
	* Функция masson создает из массива элементов матрицу
	*                                                     
	*                                                              
	* @param s готовая матрица размером                                            
	* @param trash
	* @param n
	* @param ns вспомогательный элемент для изменения размера матрицы
	*                                                              
	* return NULL                                                                                                        
	* Метод split позволяет разбить строки на массив подстрок                                  
	*                                                              
	*
*/

function masson(){
	var k = "";
	s = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	var a, b;
	var len = trash.length;
	var ns;
	var s_count = 4;
	if (n != s_count){
		if (n > s_count) {
			ns = n - s_count;
			for(var i = 0; i < ns; i++){
				s.splice(1, 0, [0, 0, 0, 0]);
			}
			for(var i = 0; i < n; i++){
				for(var j = 0; j < ns; j++){
					s[i].splice(1, 0, 0);
				}
			}
		}else if (n < s_count) {
			ns = s_count-n;
			s.splice(1, ns);
			for(var i = 0; i < s.length; i++){
				s[i].splice(1,ns);
			}
		}
		s_count = n;
		console.log(s);
	}
	for(var i = 0; i < len; i++){
		a = trash[i][0] - 1;
		b = trash[i][1] - 1;
		if (a >= 0 && b >= 0){
			s[a][b] = '1';
		}else{
			continue;
		}
	}
	for(var i = 0; i < n; i++){
		for(var j = 0; j < n; j++){
			k += s[i][j] + " ";
		}
		k += "\n"
	}
	document.getElementById('matr').innerHTML = k;
}

/**                                        
	* Функция check проверка массива на неверно введенные или пустые элементы
	*                                                     
	*                                                              
	* @param mass1 массив входных элементов                                                
	* @param trash массив, содержащий координаты матрицы
	* @param n размер матрицы
	*                                                              
	* return NULL                                                                                                        
	* Метод split позволяет разбить строки на массив подстрок                                
	*                                                              
	*
*/	

function check(){
	var trash1;
	n = document.getElementById('n').value;
	mass1 = document.getElementById('mass1').value;
	mass1 = mass1.split('\n');
	for(var i = 0; i < mass1.length; i++){
		trash = mass1[i].split(' ');
		if(trash.length != 2 || trash[1] == "" || trash[0] == ""){
			alert("В строке "+ ++i +" данные введены неверно");
			return;
		}
		for(var j = 0; j < trash.length; j++) {
			if (trash[j] > n){
				alert("Значение " + ++j + " в строке " + ++i + " не соответсвует виду координат данного размера массива");
				return;
			}
		}
	}
	for(var i = 0; i < mass1.length; i++){
		trash1 = mass1[i].split(' ');
		for(var j = 0; j < trash1.length; j++){
			trash[i] = trash1;
		}
	}
	if(mass1.length != trash.length){
		trash.splice(1,1);
	}
	masson();
	result();
}