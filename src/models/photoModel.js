import  Sequelize, {Model} from 'sequelize';

module.exports = class Photo extends Model{
    static init(sequelize) {
        super.init({
            original_name: {
                type: Sequelize.STRING,
                defaultValue: '',
                Validate: {
                    notEmpty: {
                        msg: 'empty name'
                    }
                }
            },

            filename: {
                type: Sequelize.STRING,
                defaultValue: '', 
                Validate: {
                    notEmpty: {
                        msg: 'empty name'
                    }
                }
            }

            

        }, {
            sequelize
        });
    };

    static associate(models){
        this.belongsTo(models.Student, {foreignKey: 'student_id' });
    }
};