// Service: logjika e të dhënave.
// Tani përdor një listë në memorie; më vonë mund të zëvendësohet me databazë
// (MongoDB, MySQL, PostgreSQL...) pa ndryshuar controller-in apo routes.
const Event = require('../models/event.model');

let eventet = [
  new Event(1, "Konference Tech", "Fjalim rreth zhvillimit Web", "2026.11.03", "Prishtine"),
  new Event(2, "Workshop JavaScript", "Mesime praktike mbi Node.js", "2026.12.04", "Ferizaj"),
];
let nextId = 3;

exports.findAll = () => eventet;

exports.findById = (id) => eventet.find((e) => e.id === id);

exports.create = ({ titulli, pershkrimi, data, vendndodhja }) =>{
  const newEvent = new Event (nextId++, titulli, pershkrimi, data, vendndodhja);
  eventet.push(newEvent);
  return newEvent;
};

exports.remove = (id) => {
  const lenBefore = eventet.length;
  studentet = eventet.filter((e) => e.id !== id);
  return eventet.length < lenBefore;
};
