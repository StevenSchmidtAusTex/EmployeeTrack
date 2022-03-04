INSERT INTO department (name)
VALUES 
     c  ("IT Help Desk"),
       ("Sales"),
       ("Human Resources");

INSERT INTO role (title, salary, department_id)
VALUES 
       ("Software Lead", 150000.0, 1),
       ("Software Developer", 65000.0, 1),
       ("Sales Director", 120000.0, 2),
       ("Salesperson", 55000.0, 2),
       ("Supervisor", 65000.0, 2),
       ("Payroll Specialist", 45000.0, 3),
       ("Human Resources Manager", 95000.0, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
       ("John", "Wall", 1, null),
       ("Jacob", "Kirkland", 2, 1),
       ("Jingleheimer", "Backette", 2, 1),
       ("Alfred", "Smith", 5, null),
       ("Archibald", "Lewis", 5, null),
       ("Francis", "Beaumont", 3, 4),
       ("Susan", "Strong", 3, 4),
       ("Stephanie", "Butler", 3, 5),
       ("Chandler", "Schmidt", 4, 5),
       ("Vanessa", "Lorette", 6, null),
       ("Megan", "Dwight", 6, null),
       ("Alex", "Surrand", 7, 10),
       ("Prishna", "Pashtun", 7, 10),
       ("David", "Chang", 7, 11),
       ("Dmitri", "Vlendovna", 7, 10);