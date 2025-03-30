// Write your solution in this file!
let employee = {
        name : "Val",
        streetAddress : "Leeds",
}
console.log(employee);

function updateEmployeeWithKeyAndValue(employee, key, value){
    let newEmployee = {...employee}
    return newEmployee = {name : "Sam", streetAddress : "11 Broadway"};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee["name"] = "Sam";
    employee["streetAddress"] = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    let copyEmployee = {...employee};
    delete copyEmployee.name;
    return copyEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee;
}