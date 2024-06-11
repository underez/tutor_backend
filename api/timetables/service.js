const Timetable = require('../../models/timetable');

const getAllTimetables = async () => {
  return await Timetable.findAll();
};

const getTimetableById = async (timetable_id) => {
  return await Timetable.findByPk(timetable_id);
};

const getTimetableByTeacherId = async (teacher_id) => {
  return await Timetable.findAll({
    where: { teacher_id: teacher_id }
  });
};

const createTimetable = async (timetableData) => {
  return await Timetable.create(timetableData);
};

const updateTimetable = async (timetableId, timetableData) => {
  const [numRowsUpdated, updatedRows] = await Timetable.update(timetableData, {
    where: { timetable_id: timetableId },
    returning: true,
  });

  if (numRowsUpdated === 1) {
    return updatedRows[0];
  } else {
    throw new Error('Timetable not found');
  }
};

const deleteTimetable = async (timetableId) => {
  const numRowsDeleted = await Timetable.destroy({
    where: { timetable_id: timetableId },
  });

  if (numRowsDeleted === 1) {
    return { message: 'Timetable deleted successfully' };
  } else {
    throw new Error('Timetable not found');
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