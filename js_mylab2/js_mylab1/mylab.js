//*************************duplicate******************************************
var DuplicateNumber = [2, 3, 2, 1];
var nonDup_Num = [];
for (var i = 0; i < DuplicateNumber.length; i++)
{

    if (nonDup_Num.indexof(DuplicateNumber[i]) == -1)
        nonDup_Num.push(DuplicateNumber[i]);
}
//*****************************sort******************************************
var unsortedarr = [1, 2, 3, 5, 4];
//ascending************************
sortedarr = unsortedarr.sort(function (a, b) { return a - b; })
//descending*********************
sortedarr = unsortedarr.sort(function (a,b) { return b-a; })


//*****************************filter******************************
var longWords = DuplicateNumber.filter(function (DuplicateNumber) {

    return DuplicateNumber > 50;
});
//**************MAX*********************MIN*****************
var unsortedarr = [1, 2, 3, 5, 4];
sortedarr = unsortedarr.sort(function (a, b) { return a - b; })
sortedarr = unsortedarr.sort(function (a, b) { return b - a; })
//>>>>>>>>>>>>>>>>>>>ASS2>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//.....................sum........................................

function sum()
{
    var sum= 0;
    for (i in arguments)
    {
        sum += arr[i];

    }
    return arguments;
}
//............calling.......
sum(1, 2);

//****************************product********************
//......................parameters as arguments..........
function product() {
    var product = 1;
    for (i in arguments) {
        product *= arguments[i];

    }
    return product;
}
//calling
product(2, 3);
//6
//***********************with parameter array***************************************
    function product(arr) {
        var product = 1;
        for (i in arr) {
            product *= arr[i];

        }
        return product;
}
    function sum(arr) {
        var sum = 0;
        for (i in arr) {
            sum+= arr[i];

        }
        return sum;
    }
//***************************Random*******************************************
    function random_num() {
        return Math.random();
    }
    a = random_num();
//****************************area********************************************
    function _myarea(radius)
        {
            const pi= 3.14;
            var area = Math.PI * (radius*radius);
            return area;
        }
            

    //calling
    result = _myarea(7);
//***************************random*************************************************
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    var arr = [2, 11, 37, 42];
    arr = shuffle(arr);
    console.log(arr);
///$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$     LAB3      $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$



  //********constructor*************

function Student() {
    this.name;  // this refers to the caller object
    this.age;
    this.grade;
    this.department;
    this.print= function ()  // sayName function in human
    {
        console.log(this.name);
        console.log(this.age);
        console.log(this.grade);
        console.log(this.department);

    }
}

var obj = new Student();
obj.name = "Mohamed";
obj.age = 22;
obj.print(); // alert Mohamed
//**************student_array***********
stud_array = []
window.prompt("enter length of array", stud_array.length);
for (i in stud_array)
{
    window.prompt("enter name", stud_array[new Student = {};]);
    window.prompt("enter age", stud_array[0]);
    window.prompt("enter grade", stud_array[0]);
    window.prompt("enter department", stud_array[0]);
}








