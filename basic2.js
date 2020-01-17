function f_color() {
    var out;
    var end_ = " it is!";
    var color = document.getElementById("color_in").value;
    switch(color) {
        case "Red":
            out = "Red" + end_;
        break;
        case "Yellow":
            out = "Yellow" + end_;
        break;
        case "Green": 
            out = "Green" + end_;
        break
        default: 
            out = "Try again bud"
    }
    document.getElementById("out").innerHTML = out;
}