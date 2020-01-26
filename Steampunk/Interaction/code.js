var light;
function main(){
    light = false
}
function turn_light() {
    var body = document.getElementById("body")
    if(light == false) {
        body.setAttribute("class","light")
        light = true
    }
    else{
        body.setAttribute("class","dark")
        light = false
    }
    console.log("Switch")
}
