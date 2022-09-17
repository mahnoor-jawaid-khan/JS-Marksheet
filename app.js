//Marksheet 

document.write("Marksheet  <br>")
document.write("Total Marks - 500 <br>")


// function for addition
function markSheet(phy, chem, maths, bio, eng){
    var addmarks = phy + chem + maths + bio + eng;
    return addmarks;
}

var total = markSheet(70,86,98,74,99);  // calling function
document.write("Total obt Marks - " + total + "<br>  ");

// funtion for percentage
function percentage(totalmarks)
{
    var per = total/500*100;
    return per;
}

var marksper = percentage(total)
document.write("Percentage - " + marksper);


