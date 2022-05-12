const Employee = require ('../lib/Employee');
const employee = new Employee('Kyle', '1234', 'gearykyle24@gmail.com');

test('create employee object', () => {

    expect(employee.name).toBe('Kyle');
    expect(employee.id).toBe('1234');
    expect(employee.email).toBe('gearykyle24@gmail.com');
});

test('gets the employee name', () => {

    expect(employee.getName()).toBe('Kyle');
});

test('gets the employee id', () => {

    expect(employee.getId()).toBe('1234');
});

test('gets the employee email', () => {

    expect(employee.getEmail()).toBe('gearykyle24@gmail.com');
});

test('get role of employee', () => {

    expect(employee.getRole()).toBe("Employee");
})
