// Dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
// const { connect } = require("http2");
// const { finished } = require("stream");
// const { appendFile } = require("fs");


// Connection to mysql
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "1199",
    database: "employee_record_db"


});
// connection.connect(function (err) {
//     if (err) throw err;
//     console.log("connected to sql");
//     runSearch();

// });
runSearch()


// Basic Function
function runSearch() {
    inquirer
        .prompt([{
            name: "choices",
            type: "list",
            message: "What would you like to do?",
            choices: ["View department", "View role", "View employees", "Add role",
                "Add employee", "Add department",
                "Update employee role", "End session"]

        }])
        .then(function (answer) {
            console.log(answer.choices);
            switch (answer.choices) {
                case "View department":

                    viewDepartment();
                    break;

                case "View role":
                    viewRole();
                    break;

                case "View employees":
                    viewEmployees();
                    break;

                case "Add role":
                    addRole();
                    break;

                case "Add employee":
                    addEmployee();
                    break;

                case "Add department":
                    addDepartment();
                    break;


                case "Update employee role":
                    updateEmpRole();
                    break;

                case "End session":
                    process.exit();
                    break;

                default:
                    console.log("default");



            }

        })
        .catch(function (error) {
            console.log(error)
        })

}

function viewDepartment() {
    console.log('view department')
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table('Department', res);
        runSearch()
    })
}
function viewRole() {
    console.log('view role')
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        console.table('Role', res);
        runSearch()
    })
}

function viewEmployees() {
    console.log('view employees')
    connection.query("SELECT * FROM employee", function (err, res) {
        console.table('Employees', res);
        runSearch()

    })
}


function addEmployee() {

    inquirer.prompt([{

        type: "input",
        name: "firstName",
        message: "What is the employee first name?"

    },
    {
        type: "input",
        name: "lastName",
        message: "What is the employee last name?"

    },
    {

        name: "role",
        type: "number",
        message: "What is the employees role ID?"

    },
    {
        type: "number",
        name: "managerId",
        message: "What is the employee manager's ID?",
        default: "1"

    }

    ]).then(function (res) {
        connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?) ",
            [res.firstName, res.lastName, res.role, res.managerId], function (err, res) {


                if (err) throw err;
                console.table(res);
                runSearch();
            }
        )
    })
}
function addDepartment() {

    inquirer.prompt([{
        type: "input",
        name: "department",
        message: "What is the department that you like to add?"
    }
    ]).then(function (res) {
        connection.query("INSERT INTO department (name) VALUES (?)", res.department, function (err, res) {
            if (err) throw err;

            runSearch();
        })
    })
}
function addRole() {
    inquirer.prompt([
        {
            message: "enter title",
            type: "input",
            name: "title"
        }, {
            message: "enter salary",
            type: "number",
            name: "salary"

        }, {
            message: "enter department ID:",
            type: "number",
            name: "department_id"

        }


    ]).then(function (input) {
        connection.query("INSERT INTO role (title, salary, department_id) VALUES (?,?,?) ",
            [input.title, input.salary, input.department_id], function (err, res) {
                if (err) throw err;

                runSearch();
            })
    })
}
function updateEmpRole() {
    // console.log('update Employee role')
    inquirer.prompt([
        {
            message: "Which employee would you like to update?",
            type: "input",
            name: "first_name"
        }, {
            message: "enter the new role ID:",
            type: "input",
            name: "role_id"
        }
    ]).then(function (res) {
        connection.query("UPDATE employee SET role_id = ? WHERE first_name = ?", [res.role_id, res.first_name], function (err, res) {
            if (err) throw err;
            runSearch();
        })

    })
}









