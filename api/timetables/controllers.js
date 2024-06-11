const timetableService = require('./service');

// GET /api/timetables
const getAllTimetables = async (req, res) => {
  try {
    const timetables = await timetableService.getAllTimetables();
    res.json(timetables);
  } catch (err) {
    console.error('Error fetching timetables', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// GET /api/timetables/:id
const getTimetableById = async (req, res) => {
  try {
    const { id } = req.params;
    const timetable = await timetableService.getTimetableById(id);
    if (timetable) {
      res.json(timetable);
    } else {
      res.status(404).json({ error: 'Timetable not found' });
    }
  } catch (err) {
    console.error('Error fetching timetable', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// GET /api/timetables/teacher/:teacher_id
const getTimetableByTeacherId = async (req, res) => {
  try {
    const { teacher_id } = req.params;
    const timetable = await timetableService.getTimetableByTeacherId(teacher_id);
    if (timetable.length > 0) {
      res.json(timetable);
    } else {
      res.status(404).json({ error: 'Timetable not found' });
    }
  } catch (err) {
    console.error('Error fetching timetable', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// POST /api/timetables
const createTimetable = async (req, res) => {
  try {
    const newTimetableData = req.body;
    const createdTimetable = await timetableService.createTimetable(newTimetableData);
    res.status(201).json(createdTimetable);
  } catch (err) {
    console.error('Error creating timetable', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// PUT /api/timetables/:id
const updateTimetable = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTimetableData = req.body;
    const updatedTimetable = await timetableService.updateTimetable(id, updatedTimetableData);
    res.json(updatedTimetable);
  } catch (err) {
    if (err.message === 'Timetable not found') {
      res.status(404).json({ error: 'Timetable not found' });
    } else {
      console.error('Error updating timetable', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

// DELETE /api/timetables/:id
const deleteTimetable = async (req, res) => {
  try {
    const { id } = req.params;
    await timetableService.deleteTimetable(id);
    res.json({ message: 'Timetable deleted successfully' });
  } catch (err) {
    if (err.message === 'Timetable not found') {
      res.status(404).json({ error: 'Timetable not found' });
    } else {
      console.error('Error deleting timetable', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = {
  getAllTimetables,
  getTimetableById,
  createTimetable,
  updateTimetable,
  deleteTimetable,
  getTimetableByTeacherId,
  
};