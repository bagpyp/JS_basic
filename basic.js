// I don't think this is very clever

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year; 
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    var display = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
    document.getElementById("Keywords_and_Constructors").innerHTML = display;    
}

// trying myself, should be doing console logs I think!

function person(surname,yearsOld) {
    this.LastName = surname; 
    this.Age = yearsOld;
}

var Robbie = new person("Cunningham",27);

function myNextFunction() {
    var display = "Robbie " + Robbie.LastName + " is " + Robbie.Age + "."
    document.getElementById("New_and_This").innerHTML = display;
}

// county county
function count_function() {
    document.getElementById("Counting").innerHTML = count();
    function count() {
        var start = 9;
        function plusOne() {start += 1;}
        plusOne();
        return start;
    }
}

function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds -= 1;
        document.getElementById("timer").innerHTML = seconds;
        setTimeout(tick, 1000);
    if (seconds == -1) {
        alert("Time's up!")
    }
    }
    tick()
}

var d = new Date()
var time = d.getHours()
console.log(time>12==time<0)

