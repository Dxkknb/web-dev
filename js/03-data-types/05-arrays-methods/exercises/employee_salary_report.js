/*
	Employee Salary Report
 */
const employees = [
	{ id: 1, name: "John", department: "IT", salary: 4500 },
	{ id: 2, name: "Sarah", department: "HR", salary: 3800 },
	{ id: 3, name: "Peter", department: "IT", salary: 5200 },
	{ id: 4, name: "Emma", department: "Finance", salary: 6100 },
	{ id: 5, name: "Lucas", department: "HR", salary: 4200 }
];

// TODO: Total payroll
const totalPayroll = (employees) => {
	return employees.reduce((total, employee) => total + employee.salary, 0);
}

console.log("Total payroll:", totalPayroll(employees));

// TODO: Average salary
const averageSalary = (employees) => {
	return Math.round(totalPayroll(employees) / employees.length);
}

console.log("Average salary:", averageSalary(employees));

// TODO: Highest salary
const highestSalary = (employees) => {
	const copyEmployees = [...employees];
	copyEmployees.sort((employee1, employee2) => employee2.salary - employee1.salary);

	return copyEmployees.at(0);
}

console.log("Highest salary:", highestSalary(employees));

// TODO: Lowest salary
const lowestSalary = (employees) => {
	const copyEmployees = [...employees];
	copyEmployees.sort((employee1, employee2) => employee1.salary - employee2.salary);

	return copyEmployees.at(0);
}

console.log("Lowest salary:", lowestSalary(employees));

// TODO: Employees per department

const employeesPerDepartment = (employees) => {
	const departments = {};

	for (const employee of employees) {
		if (!(Object.keys(departments).includes(employee.department))) {
			departments[employee.department] = [];
			departments[employee.department].push(employee);
		}else {
			departments[employee.department].push(employee);
		}
	}

	return departments;
};

console.log("Employees per department:", employeesPerDepartment(employees));

// TODO: Salary increase by 10%

const increasedSalaries = (employees) => {
	return employees.map((employee) => {
		return {...employee, salary: employee.salary + employee.salary * 0.1}
	});
}

console.log("Increased salaries:", increasedSalaries(employees));

// TODO: departments list (without duplicates)

const departmentList = (employees) => {
	const departments = [];

	for (const employee of employees) {
		if (!departments.includes(employee.department)) {
			departments.push(employee.department);
		}
	}

	return departments;
}

console.log("Departments:", departmentList(employees));