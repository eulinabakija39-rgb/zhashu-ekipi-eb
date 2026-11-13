// Modeli i entitetit Event
class Event {
  constructor(id, titulli, pershkrimi, data, vendndodhja) {
    this.id = id;
    this.titulli = titulli;
    this.pershkrimi = pershkrimi;
    this.data = data;
    this.vendndodhja = vendndodhja;
  }
}

module.exports = Event;
