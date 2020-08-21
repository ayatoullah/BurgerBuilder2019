
//            ass1, ass2, ass3

function Student_class(_std_id, _std_name, _std_degree, _std_age, _std_department) {
    //if (typeof Student_class == "function") {
    //    console.log(_std_id, _std_name, _std_degree, _std_age, _std_department);
    //}
    //else {
        this.std_name = _std_name;
        this.std_degree = parseInt(_std_degree);
        this.std_age = parseInt(_std_age);
        this.std_department = _std_department;

        var std_id = _std_id;

        this.set_id = function (_id) {
            std_id = _id;
        }

        this.get_id = function () {
            return std_id;
        }

        this.printArr = function () {
            console.log("id",std_id, this.std_name, this.std_degree, this.std_age, this.std_department);
        }
    }


//var first_std = new Student_class(1, "hm", 100, 26, "SD");

var arr_length=0;
var stud = new String("");
var st_arr = new String("");
var sum = 0;
var sort_arr = [];
var std_arr = [];
var sort_res = [];
var new_arr = [];
var filter_std = [];
var sort_deg = [];

do {
    arr_length = prompt("enter no of student");
}
while (arr_length == "");


arr_length = parseInt(arr_length);


for (var i = 0; i < arr_length; i++) {

    stud = prompt("enter student inf name,degree,age,dept in order");

    if (stud == "") {
        i--;
    }
    else {
        st_arr = stud.split(",");
        std_arr.push(new Student_class(i, st_arr[0], st_arr[1], st_arr[2], st_arr[3].toLowerCase()));
        //new_arr[i] = std_arr;
       }
       
    }   



//for (var j = 0; j < arr_length; j++) {
    
//    new_arr[j,0] = j;
//    new_arr[j,1] = st_arr[0];
//    new_arr[j,2] = st_arr[1];
//    new_arr[j,3] = st_arr[2];
//    new_arr[j,4] = st_arr[3];
//}


std_arr.forEach(function (element) {
    element.printArr();
});

for (var i = 0; i < arr_length; i++) {
    sum += parseInt(st_arr[2]);
}

alert("sum= " + sum);
alert("av= " + (sum / arr_length));



//}

//    ass4


console.log(" ----------- sort  -------------");

//std_fin_inf.sort(function (a, b) {
//    a = a.std_department;
//});



//std_dept.sort(function (a, b) {
//    return a - b;
//});

//std_dept.forEach(function (element) {
//    element.toString();
//});

sort_res = std_arr.sort(function (a, b) {

    A = a.std_department;
    B = b.std_department;

    if (A > B) {
       // res_sort.push(a.get_id, a.std_name, a.std_grade, a._std_age, a.std_dept);
        return 1;
    }
    else if (A < B) {
       // res_sort.push(b.get_id, b.std_name, a.std_grade, a._std_age, a.std_dept);
        return -1;
    }
    else {
        return 0;
    }
   
});

sort_res.forEach(function (element) {
    element.printArr();
});

console.log(" ----------- sort -------------");

sort_deg = sort_res.sort(function (a, b) {
    x = a.std_degree;
    y = b.std_degree;

    if (x < y)
        return 1;
    if (x > y)
        return -1;
    else
        return 0;
});


sort_deg.forEach(function (element) {
    element.printArr();
});


console.log("  -------------    filter  ---------------  ")

filter_std = std_arr.filter(function (element) {
    return element.std_degree >= 60;
});


filter_std.forEach(function (element) {
    element.printArr();
});



////     ass5

//console.log(" ----------- filter  -------------");

//res = std_grade.filter(function (element, index) {
//    if (element > 60)
//    {
//        console.log(std_inf[index]);
//    }
//    //return element > 60;
//});



