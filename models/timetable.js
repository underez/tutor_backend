const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Timetable = sequelize.define('timetables', {
  timetable_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  start: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isbooked:{
    type: DataTypes.BOOLEAN,
    defaultValue : false,
  },
  teacher_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'teachers',
      key: 'teacher_id',
    },
  },
});

module.exports = Timetable;