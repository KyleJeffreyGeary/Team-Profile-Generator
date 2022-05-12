const Manager = require('../lib/Manager')
const manager = new Manager('Kyle', '1234', 'gearykyle24@gmail.com', '24');

test('create manager object', () => {
    expect(manager.name).toBe('Kyle');
    expect(manager.id).toBe('1234');
    expect(manager.email).toBe('gearykyle24@gmail.com');
    expect(manager.officeNumber).toBe('24')
});

test('get office number', () => {
    expect(manager.getOfficeNumber()).toBe('24');
});

test('get role of manager', () => {
    expect(manager.getRole()).toBe('Manager');
})