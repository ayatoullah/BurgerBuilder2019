function Student_class(_std_id,_std_name,_std_degree,_std_age,_std_department)
{
    if (typeof Student_class == "function")
    {
        console.log(_std_id, _std_name, _std_degree, _std_age, _std_department);
    }
    else
    {
        this.std_name = _std_name;
        this.std_degree = _std_degree;
        this.std_age = _std_age;
        this.std_department = _std_department;

        var std_id = _std_id;

        this.set_id = function (_id) {
            std_id = _id;
        }

        this.get_id = function () {
            return std_id;
        }

        this.toString = function () {
            console.log(std_id, this.std_name, this.std_degree, this.std_age, this.std_department);
        }
    }
}

var first_std = new Student_class(1, "hm", 100, 26, "SD");