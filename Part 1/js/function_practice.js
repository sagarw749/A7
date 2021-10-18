

var result;

//half of number
function halfNumber(number)
{
    result = number / 2;
    window.console.log("Half of " + number + " is equal to " + result );
    return result;
}

halfNumber(5);

//square of number
function squareNumber(number)
{
    result = number * number;
    window.console.log("The square of the number  " + number + " is " + result );
    return result;
}

squareNumber(3);

//percentOf() 
function percentOf(number_1, number_2) 
{
    result = (number_1 / number_2)*100;
   window.console.log(number_1 + " is " + result + "% of " +  number_2 );
    return result;
}

percentOf(2,4);

//Modulus
function Modulus(number_1, number_2) 
{
    result = (number_2 % number_1);
    window.console.log(result + " is the modulus of " +  number_1 + " and " + number_2 );
    return result; 
}

Modulus(4,10);


function sum()
{
    var sum = 0;
    var choice = window.prompt("Enter the numbers, seprated by commas");
    var temp = choice.split(",");
    //document.write("temp" + temp +"<br>");

    var sum_Calculated = true;
  
    for(var i=0; i<temp.length; i++)
    {
        if(isNaN(temp[i]))
	{
            window.alert("Enter a valid number. "+ temp[i] +" is not valid");
            sum_Calculated = false;
            break;            
        }
        else
	{
            // converting string to a number and add it to the sum
            sum += Number(temp[i]);
        }
    }
    if(sum_Calculated){
        window.console.log("Sum: "+ sum);
    }     
   
}

sum(); 
  