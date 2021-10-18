/*eslint-env browser*/


var inventory = 
[ 
    [4588, "Tshirt", 10, "$15.99"], 
    [2566, "Jeans", 30, "$39.99"], 
    [2887, "Jacket", 25, "$38.99"], 
    [7555, "Coat", 45, "$45.99"], 
    [4963, "Trousers", 55, "$54.99"]                               
 ];

function displayMenu()
{
    window.console.log("Product Inventory Management System");
    window.console.log("");
    window.console.log("Command Menu");
    window.console.log("View - view all products");
    window.console.log("Update - update a product ");
    window.console.log("Exit - exit the programm");
    window.console.log("");
 }



 function display(inventory)
{
    inventory.forEach(function(item)
    {
        window.console.log(item[0] +" "+item[1]+" "+"("+item[2]+") "+item[3]);
    });
    window.console.log("");
 }



function update(inventory)
{
    var sku_choice = window.prompt("Enter an sku number");
    var sku = Number(sku_choice);
    if(!isNaN(sku) && sku != null && sku >= 0)
    {
        var quantity_choice = window.prompt("Enter new stock quantity");
        var quantity = Number(quantity_choice);

        if(!isNaN(quantity) && quantity!= null && quantity >=0)
	{
            var updated_record = false;
            for(var i=0; i<inventory.length ; i++)
            {
                
                if(inventory[i][0] == sku)
                {
                    inventory[i][2] = quantity;
                    updated_record = true;
                    window.console.log("Updated succesfully !!");
                    break;
                }
            }
            if(updated_record == false)
            {
                window.console.log("Could not find a valid record to update");
            }
           // inventory[sku_position][2] = quantity;
            window.console.log("");
        }
        else
	{
            window.alert("Enter a valid quantity number");
        }
    }
    else
    {
        window.alert("Enter a valid sku number");
    }
}

 function main()
{
    displayMenu();
    
     while(true)
    {
        var command= window.prompt("Enter the command");
        if(command !== null)
	{
            command = command.toLowerCase();
            if(command === "view")
	    {
                display(inventory);
            }
            else if(command === "update")
	    {
                update(inventory);
            }
            else if(command === "exit")
	    {
                break;
            }
            else if(command === "")
	    {
               
                window.alert("An empty command is not a valid input");
            }
            else
	    {
                window.alert("Not a valid input");
            }
        }
        else
	{
            break;
        }
     }
     window.console.log("Program terminated");
    }
 main();





