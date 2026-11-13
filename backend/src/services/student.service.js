// Service: logjika e të dhënave.
// Tani përdor një listë në memorie; më vonë mund të zëvendësohet me databazë
// (MongoDB, MySQL, PostgreSQL...) pa ndryshuar controller-in apo routes.
const Student = require('../models/student.model');

let studentet = [
  new Student(1, 'Arta', 'Krasniqi', 'arta.krasniqi@uni.edu'),
  new Student(2, 'Blerim', 'Gashi', 'blerim.gashi@uni.edu'),
  new Student(3, 'Dren', 'Berisha', 'dren.berisha@uni.edu'),
];
let nextId = 4;

exports.findAll = () => studentet;

exports.findById = (id) => studentet.find((s) => s.id === id);

exports.create = ({ emri, mbiemri, email }) => {
  const student = new Student(nextId++, emri, mbiemri, email);
  studentet.push(student);
  return student;
};

exports.remove = (id) => {
  const lenBefore = studentet.length;
  studentet = studentet.filter((s) => s.id !== id);
  return studentet.length < lenBefore;
};
