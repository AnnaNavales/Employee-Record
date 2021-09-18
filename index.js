const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
const { connect } = require("http2");

let connection = mysql.createConnection({
    host: "localHost",
    port: 3306,
    user: "root",
    password: "1199",
    database: "employee_record_db"


});
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id" + connect.threadId + "\n");
    runSearch();

});

function runSearch() {
    inquirer
        .prompt({
            name: "whatDo",
            type: "list",
            message: "What would you like to do?",
            choices: ["View all departments.", "View all employees",
                "View all employees by department", "View all emoloyees"]

        })
        .then(function (answer) {
            switch (answer.whatDo) {
                case "View all department.":
                    viewDepartments();
                    break;

                case "View all employees.":
                    viewEmployees();
                    break;

                case "View all employees by department.":
                    viewEmpByDepartment();
                    break;

                case "View all employees by manager.":
                    viewEmpByMgr();
                    break;
                case "Add employee.":
                    addEmployee();
                    break;
                case "Remove employee.":
                    removeEmployee();
                    break;
                case "Update employee.":
                    updateEmployee();
                    break;
                case "Update employee role.":
                    updateEmpRole();
                    break;
                case "Update employee manager.":
                    updateEmpMgr();
                    break;
                case "End session.":
                    endSession();
                    break;

            }

        });

}

function viewDepartments() {
    connection.query("SELECT id, dept_name, salary", function (err, res) {
        if (err) throw err;
        console.table('Departments', res);
        runSearch()
    })
}

function viewEmployees() {
    let query = "SELECT employee.id, employee.first_name, employee.last_name, department.dept_name,"
    query += "FROM employee";
    query += "INNER JOIN department ON employee.emp_dept = department.dept_name";
    query += "INNER JOIN roles ON department.id = roles.department_id";
    query += "LEFT JOIN manager ON employee.manager_id = manager.id";

    connection.query(query, function (err, res) {
        console.table('All Employees', res);
        runSearch()

    })
}

function viewEmpByDepartment() {
    let query = "SELECT department.dept_name, employee.id, employee.first_name, employee.last_name, department.dept_name,"
    query += "FROM department";
    query += "INNER JOIN employee ON employee.emp_dept = department.dept_name";
    query += "ORDER BY department.dept_name";

    connection.query(query, function (err, res) {
        console.table('Employees By Manager', res);
        runSearch()

    })

}

function viewEmpByMgr() {
    console.log("view emps by Mgr.")
    let query = "SELECT manager.id, manager.mgr_name, employee.first_name, employee.last_name,"
    query += "FROM manager";
    query += "INNER JOIN employee ON manager.id = employee.manager_id";
    query += "ORDER BY manager.mgr_name";


    connection.query(query, function (err, res) {
        console.table('Employees By Manager', res);
        runSearch()

    })

}
