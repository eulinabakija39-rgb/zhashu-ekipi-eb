const User = require('../models/user.model');

// Të dhëna testuese për përdoruesit (mock data)
let users = [
new User(1, 'Eulina Bakija', 'eb71255@universum-ks.org', 'student'),
new User(2, 'Admin User', 'admin@universum-ks.org', 'admin')
];

let nextId = 3;

exports.findAll = () => {
return users;
};

exports.findById = (id) => {
return users.find(u => u.id === id);
};

exports.create = (id, emri, mbiemri, email, roli) => {
const newUser = new User(id || nextId++, emri, mbiemri, email, roli);
users.push(newUser);
return newUser;
};

exports.remove = (id) => {
const index = users.findIndex(u => u.id === id);
if (index !== -1) {
return users.splice(index, 1)[0];
}
return null;
};