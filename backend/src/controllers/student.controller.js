// Controller: merr kërkesën HTTP, validon, thërret service-in dhe kthen përgjigjen
const studentService = require('../services/student.service');

exports.getAll = (req, res) => {
  res.json(studentService.findAll());
};

exports.getById = (req, res) => {
  const student = studentService.findById(Number(req.params.id));
  if (!student) {
    return res.status(404).json({ message: 'Studenti nuk u gjet' });
  }
  res.json(student);
};

exports.create = (req, res) => {
  const { emri, mbiemri, email } = req.body;

  if (!emri || !mbiemri || !email) {
    return res.status(400).json({ message: 'Emri, mbiemri dhe email janë të detyrueshme' });
  }

  const student = studentService.create({ emri, mbiemri, email });
  res.status(201).json(student);
};

exports.remove = (req, res) => {
  const deleted = studentService.remove(Number(req.params.id));
  if (!deleted) {
    return res.status(404).json({ message: 'Studenti nuk u gjet' });
  }
  res.status(204).send();
};
