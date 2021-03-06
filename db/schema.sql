DROP DATABASE IF EXISTS employee_record_db;
CREATE DATABASE employee_record_db;

USE employee_record_db;


CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT, 
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY (id)

);
CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id)

);


CREATE TABLE manager(
  id INT NOT NULL,
  manager_name VARCHAR(30) NOT NULL

  );