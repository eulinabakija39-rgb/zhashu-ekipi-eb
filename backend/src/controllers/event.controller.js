// Controller: merr kërkesën HTTP, validon, thërret service-in dhe kthen përgjigjen
const eventService = require('../services/event.service');

exports.getAll = (req, res) => {
  res.json(eventService.findAll());
};

exports.getById = (req, res) => {
  const event = eventService.findById(Number(req.params.id));
  if (!student) {
    return res.status(404).json({ message: 'Eventi nuk u gjet' });
  }
  res.json(event);
};

exports.create = (req, res) => {
  const { titulli, pershkrimi, data, vendndodhja } = req.body;

  if (!titulli || !pershkrimi || !data || !vendndodhja) {
    return res.status(400).json({ message: 'Te gjitha fushat janë të detyrueshme' });
  }

  const newEvent = eventService.create({ titulli, pershkrimi, data, vendndodhja });
  res.status(201).json(newEvent);
};

exports.remove = (req, res) => {
  const deleted = eventService.remove(Number(req.params.id));
  if (!deleted) {
    return res.status(404).json({ message: 'Eventi nuk u gjet' });
  }
  res.status(204).send();
};
