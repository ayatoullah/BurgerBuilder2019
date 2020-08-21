var str_sen = new String("Web Development Tutorial");
var str_split = new String(" ");
var str_res = new String(" ");

var str_split = str_sen.split(" ");
str_res = str_split[0];
for (var j = 1; j < str_split.length; j++) {
    if (str_split[j].length > str_res.length)
    {
        str_res = str_split[j];
    }
}
console.log("after " + str_res);