const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,            // Type UUID
        defaultValue: DataTypes.UUIDV4,  // Génère automatiquement un UUID v4
        primaryKey: true                 // Clé primaire
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'users',
    timestamps: true
});

module.exports = User;