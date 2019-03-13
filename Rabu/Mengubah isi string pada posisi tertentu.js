
var str = 'Hello World';

console.log(ganti(str,"o","e"));


function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}
function ganti(str, lama, baru) {
    tmp = "";
    for(var i = 0; i < str.length; i++) {
        if(str[i] === lama) tmp += baru;
        else tmp += str[i];
    }
    return tmp;
}
