const Intern = require('../lib/Intern')
const intern = new Intern('Kyle', '1234', 'gearykyle24@gmail.com', 'Case Western');

test('create the intern object', () => {
    expect(intern.name).toBe('Kyle');
    expect(intern.id).toBe('1234');
    expect(intern.email).toBe('gearykyle24@gmail.com');
    expect(intern.school).toBe('Case Western');
});

test('get the intern school', () => {
    expect(intern.school).toBe('Case Western');
});

test('get role of Intern', () => {
    expect(intern.getRole()).toBe("Intern");
})