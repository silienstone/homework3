//A function that takes at least three arguments and returns the result of some set of operations using those arguments
const area_Of_Trapezoid = function(base1,base2,height)
{

	return (base1 + base2)/2*height;

};


//-A function that takes no arguments and returns something
const Gayane_Is_Real = function()
{

	return false;

};


//A function that takes arguments, does something but does not return anything
const miBan = function(x,y)
{
	const pow_number = Math.pow(x,y);
	console.log(pow_number);
};


 //A function called fullName that takes as argument first name and last name and returns the full name of the person 

 const fullName = function(f_name,l_name)
 {
 	return f_name + " " + l_name;
 };


 //A function that takes three strings and returns the string that is the longest.

const longest_string = function(str1,str2,str3) 
{
	const length_1 = str1.length;
	const length_2 = str2.length;
	const length_3 = str3.length;
	if (( length_1 - length_2)*(length_1 - length_3)*(length_2 - length_3) != 0)
	{
		if(str1.length > str2.length && str1.length > str3.length)
		{
			return str1;
		}
		else if (str2.length > str3.length) 
		{
			return str2;
		}
		else
		{
			return str3;
		}
	}

	else if (length_1 === length_2 === length_3) {
		return str1 + "," + str2 + "," + str3;
	}
	else if(length_1 === length_2){
		if(length_1 > length_3){
			return str1 + "," + str2;
		}else {return  str3}
	}
	else if(length_1 === length_3){
		if(length_1 > length_2){
			return str1 + "," + str3;
		}else {return  str2}
	}
	else if(length_2 === length_2){
		if(length_2 > length_1){
			return str2 + "," + str3;
		}else {return  str1}
	}

};
//-A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger - 6 points


const Astxazard_erkinq_aranc_astxeri = function(a,b)
{
	if (a===b) {return 0;}
	else if (a > b) {return 1;}
	else {return -1;}
};

//-A function that takes three inputs and returns the first truethy value (example:  firstTruethy(0, '', 1); should return 1) - 6 points

const truethy=function(val1, val2, val3)
{
	if(!!val1){
		return val1;
	}
	else if (!!val2){
		return val2;
	}
	else if (!!val3){
		return val3;
	}
	else return "error";
}