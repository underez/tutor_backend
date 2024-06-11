// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const teacherService = require('./service');

// GET /api/teachers
const getAllteachers = async (req, res) => {
  try {
    const teachers = await teacherService.getAllteachers();
    res.json(teachers);
  } catch (err) {
    console.error('Error fetching teachers', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// GET /api/teachers/:id
const getteacherById = async (req, res) => {
  try {
    const { id } = req.params;
    const teacher = await teacherService.getteacherById(id);
    if (teacher) {
      res.json(teacher);
    } else {
      res.status(404).json({ error: 'teacher not found' });
    }
  } catch (err) {
    console.error('Error fetching teacher', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// POST /api/teachers
const createteacher = async (req, res) => {
  try {
    const newteacherData = req.body;
    const createdteacher = await teacherService.createteacher(newteacherData);
    res.status(201).json(createdteacher);
  } catch (err) {
    console.error('Error creating teacher', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// PUT /api/teachers/:id
const updateteacher = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedteacherData = req.body;
    const updatedteacher = await teacherService.updateteacher(id, updatedteacherData);
    res.json(updatedteacher);
  } catch (err) {
    if (err.message === 'teacher not found') {
      res.status(404).json({ error: 'teacher not found' });
    } else {
      console.error('Error updating teacher', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

// DELETE /api/teachers/:id
const deleteteacher = async (req, res) => {
  try {
    const { id } = req.params;
    await teacherService.deleteteacher(id);
    res.json({ message: 'teacher deleted successfully' });
  } catch (err) {
    if (err.message === 'teacher not found') {
      res.status(404).json({ error: 'teacher not found' });
    } else {
      console.error('Error deleting teacher', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

// const checkUsernameExists = async (req, res) => {
//   try {
//     const { username } = req.params;
//     const teacher = await teacherService.getteacherByUsername(username);
//     if (teacher) {
//       res.json(true);
//     } else {
//       res.json(false);
//     }
//   } catch (err) {
//     console.error('Error checking username', err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// const login = async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const teacher = await teacherService.getteacherByUsername(username);
//     if (!teacher) {
//       return res.status(400).json({ error: 'Invalid username or password' });
//     }

//     const isMatch = await bcrypt.compare(password, teacher.password);
//     if (!isMatch) {
//       return res.status(400).json({ error: 'Invalid username or password' });
//     }

//     const payload = {
//       teacher: {
//         id: teacher.teacher_id
//       }
//     };

//     const token = jwt.sign(payload, 'secret_token', { expiresIn: '1h' });

//     // ส่งข้อมูลผู้ใช้กลับไปพร้อมกับ token
//     res.json({ token, user: { id: teacher.teacher_id, username: teacher.username, name: teacher.name, surname: teacher.surname } });
//   } catch (err) {
//     console.error('Error logging in', err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };


module.exports = {
  getAllteachers,
  getteacherById,
  createteacher,
  updateteacher,
  deleteteacher,
//   checkUsernameExists,
//   login
};