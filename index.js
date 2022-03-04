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