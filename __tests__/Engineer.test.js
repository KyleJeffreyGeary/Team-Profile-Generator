const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Kyle', '1234', 'gearykyle24@gmail.com', 'KyleJeffreyGeary');
test('create engineer object', () => {
    expect(engineer.name).toBe('Kyle');
    expect(engineer.id).toBe('1234');
    expect(engineer.email).toBe('gearykyle24@gmail.com');
    expect(engineer.github).toBe('KyleJeffreyGeary')
});

test('get engineer github value', () => {
    expect(engineer.github).toBe('KyleJeffreyGeary')
});

test('get role of Engineer', () => {
    expect(engineer.getRole()).toBe('Engineer')
})