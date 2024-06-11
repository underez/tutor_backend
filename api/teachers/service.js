const teacher = require('../../models/teacher'); 


const getAllteachers = async () => {
  return await teacher.findAll();
};

const getteacherById = async (teacher_id) => {
  return await teacher.findByPk(teacher_id);
};

const createteacher = async (teacherData) => {
  return await teacher.create(teacherData);
};

const updateteacher = async (teacherId, teacherData) => {
  const [numRowsUpdated, updatedRows] = await teacher.update(teacherData, {
    where: { teacher_id: teacherId },
    returning: true,
  });

  if (numRowsUpdated === 1) {
    return updatedRows[0];
  } else {
    throw new Error('teacher not found');
  }
};

const deleteteacher = async (teacherId) => {
  const numRowsDeleted = await teacher.destroy({
    where: { teacher_id: teacherId },
  });

  if (numRowsDeleted === 1) {
    return { message: 'teacher deleted successfully' };
  } else {
    throw new Error('teacher not found');
  }
};



module.exports = {
  getAllteachers,
  getteacherById,
  createteacher,
  updateteacher,
  deleteteacher,
 
};