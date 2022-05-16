function calculate () {
    var billamt = document.getElementById("billamt").value; // all variables and ids
    var serviceamt = document.getElementById("service").value;
    var peopleamt = document.getElementById("peopleamt").value;
    //enter the values
    if(billamt === "" || serviceamt === 0) {
        alert("Please enter value");
        return;
    }
    // enter the people amounts
    if(peopleamt === "" || peopleamt <= 0) {
        peopleamt = 1;
        document.getElementById("each").style.display = "none";
    }
    else {
        document.getElementById("each").style.display = "block";
    }
    var total = (billamt * serviceamt)/peopleamt;

    total = Math.round(total * 100)/100; // total payment calculation

    total = total.toFixed(2); // only two value after point
    
    document.getElementById("tips").style.display = "block";
    document.getElementById("tip").innerHTML= total;

}
//calculate the values
document.getElementById("tips").style.display="none";
document.getElementById("each").style.display="none";

document.getElementById("btn").onclick = function () {
    calculate();
}