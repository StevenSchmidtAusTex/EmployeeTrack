const mysql = require('mysql2');
const consoleTable = require('console.table');
const inquirer = require('inquirer');
// Authentification
const db=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'password',
        database:'employee_db'
    }
);
// Initial Connection to database
db.connect((err) => {
    if(err) {
        throw err;}
    console.log('Connected to employee database.');
    Menu();
});
// Main menu option list
function Menu() {
    inquirer
        .prompt([
            {
                type:"list",
                pageSize: 8,
                name: "options",
                message: "What would you like to do?",
                choices: [
                    "See Departments",
                    "See Employees",
                    "See Roles",
                    "Add Department",
                    "Add Role",
                    "Add Employee",
                    "Update Role",
                    "Exit"
                ]
            }
        ])
        .then((response) => {
            // Submenu option list
            switch (response.options) {
                case "See Departments":
                    seeDepartments();
                    break;
                case "See Roles":
                    seeRoles();
                    break;
                case "See Employees":
                    seeEmployees();
                    break;
                case "Add Department":
                    addDepartment();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Update Role":
                    updateRole();
                    break;
                case "Exit":
                    db.end();
                    break;
                default:
                    console.log("Please select a valid response");
            }
        });
}
// View Departments Option
function seeDepartments() {
    const sql = `SELECT * 
    FROM department 
    ORDER BY name`;
        db.query(sql,(err, result) => {
        if (err){
            throw err;
        }
        console.table(result);
        Menu();
    });
}
// View Roles Option
function seeRoles() {
    const sql =`SELECT role.id, role.title, department.name AS department, role.salary 
    FROM role 
    LEFT JOIN department 
    ON role.department_id = department.id`;
    
    db.query(sql,(err, result) => {
        if (err) {
            throw err;
        }
        console.table(result);
        Menu();
    });
}
// View Employees Option
function seeEmployees() {
    const sql =`SELECT emp.id, emp.first_name, emp.last_name, role.title, department.name AS department, role.salary, CONCAT (manager.first_name, ' ', manager.last_name) AS manager
    FROM employee emp
    LEFT JOIN employee manager
    ON emp.manager_id = manager.id
    LEFT JOIN role
    ON emp.role_id = role.id
    LEFT JOIN department
    ON role.department_id = department.id`;
    
    db.query(sql,(err, result) => {
        if (err) {
            throw err;
        }
        console.table(result);
        Menu();
    });
}
// create new department
function addDepartment() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "deptName",
                message: "What is the name of the department?"
            }
        ])
        .then((response) => {
            const sql = `INSERT INTO department (name) 
            VALUES (?)`
            const params = [response.deptName];
            db.query(sql, params, (err, res) => {
                if (err) {
                    throw err;
                }
                console.log(`Added ${response.deptName} to the database`);
                Menu();
            });
        });
}