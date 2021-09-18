use employee_record_db
INSERT INTO department(name)
VALUES('Engineering');

INSERT INTO department(name)
VALUES('Legal');

INSERT INTO department(name)
VALUES('Finance');

INSERT INTO department(name)
VALUES('Sales');


INSERT INTO role(title, salary, department_id)
VALUES('Engineering',180000,1);

INSERT INTO role(title, salary, department_id)
VALUES('Legal',200000,1);

INSERT INTO role(title, salary, department_id)
VALUES('Finance',150000,1);

INSERT INTO role(title, salary, department_id)
VALUES('Sales',100000,1);


INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES('Anneka', 'Luck', 1, 2);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES('John', 'Wick', 1, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES('Lana', 'Well', 1, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES('Dana', 'Alberti', 1, 5);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES('Marge', 'Liams', 1, 6);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES('Christina', 'Michaels', 1, 7);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES('Amber', 'Wall', 1, 8);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES('Zach', 'Carr', 1, 9);