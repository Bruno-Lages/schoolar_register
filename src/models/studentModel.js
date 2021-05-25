import  Sequelize, {Model} from 'sequelize';

module.exports = class Student extends Model{
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            last_name: Sequelize.STRING,
            email: Sequelize.STRING,
            birthday: Sequelize.DATE,
        }, {
            sequelize
        });
    };
};