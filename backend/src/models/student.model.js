// Modeli i entitetit Student
class Student {
  constructor(id, emri, mbiemri, email) {
    this.id = id;
    this.emri = emri;
    this.mbiemri = mbiemri;
    this.email = email;
  }
}

module.exports = Student;
