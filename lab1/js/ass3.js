var str_sen = "thequickbrownfoxjumpsoverthelazydog";
var str_res = " ";

for (var i = 0; i < str_sen.length; i++) {
    if (str_res.indexOf(str_sen.charAt(i)) < 0) {
        str_res += str_sen[i];
    }
}
console.log("before " + str_sen);
console.log("after " + str_res);