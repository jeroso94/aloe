
module.exports = (sequelize, DataTypes) => {
    const job = sequelize.define('jobs', {
        job_title: { 
            type: DataTypes.TEXT, 
            allowNull: false
        },
        company_name: { 
            type: DataTypes.TEXT, 
            allowNull: false
        },
        description: { 
            type: DataTypes.TEXT, 
            allowNull: false
        },
        salary: { 
            type: DataTypes.INTEGER, 
            allowNull: true
        }
    });
    return job;
};