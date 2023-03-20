function light(on){
    var pic;
    if(on==0){
        pic="on.png"
    }
    else{
        pic="off.png"
    }
    document.getElementById("pic").src=pic;

}