//Creates 'lil Javascripter object
lilJSter = {}

_ = lilJSter //Shortcut

//Test Variables
var lat = ['a', ['b', ['c', ['b', ['d']]]]], //list of atoms
		tup = [1,[2,[3,[4,[5]]]]],
		num = 8,
		atom = 'hi mom',
		null_list = null, //See little Javascripter description
		list_lat2 = s("((five  plums) (four) (eleven  green  oranges))"),
		list_lat = s("((how much (wood)) could ((a (wood)  chuck)) (((chuck))) (if (a) ((wood chuck))) could  chuck wood)");

//((how much (wood)) could ((a (wood)  chuck)) (((chuck))) (if (a) ((wood chuck))) could  chuck wood) 

//Tests
function test(fn,a) {
	return a ? 
		(function(){
			//Functions with 2 arguments
			console.log('Applying 2 arguments to ' + fn.name)
			console.log('Lat: ' + fn(a, lat));
			console.log('List of Lat: ' + fn(a, list_lat));
		})() :
		//Functions with one argument
		(function(){
			console.log('Applying single argument to ' + fn.name);
			console.log('Lat: ' + fn(lat));
			console.log('Atom: ' + fn(atom));
			console.log('Number: ' + fn(num));
			console.log('List of Lat: ' + fn(list_lat));
			return true;
		})();
}
