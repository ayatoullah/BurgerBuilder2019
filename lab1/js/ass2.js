var str_sen = new String("Egpt");
var str_res = new String(" ");

for (var i = 0; i < str_sen.length; i++) {
    if (str_sen[i] == str_sen[i].toLowerCase()) {
        str_res += str_sen[i].replace(str_sen[i], str_sen[i].toUpperCase());
    }
    else
        str_res += str_sen[i].replace(str_sen[i], str_sen[i].toLowerCase());
}
console.log("before " + str_sen);
console.log("after " + str_res);