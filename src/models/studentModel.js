import  Sequelize, {Model} from 'sequelize';

module.exports = class Student extends Model{
    static init(sequelize) {
        super.init({
            name: {
                type: Sequelize.STRING,
                defaultValue: '',
                Validate: {
                    len: {
                        args: [3, 50]
                    }
                }
            },
            last_name: {
                type: Sequelize.STRING,
                defaultValue: '', 
                Validate: {
                    len: {
                        args: [3, 100]
                    }
                }
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                Validate: {
                    isEmail: {
                        msg: 'invalid email'
                    },
                    isUnique(value, next) {
                        User.findOne({ where: { email: value } })
                          .then((user) => {
                            if (user) {
                              return next('existent email');
                            }
                            return next();
                          })
                          .catch((err) => next(err));
                        }
                }
            },

            birthday: {
                type: Sequelize.DATE
            }
        }, {
            sequelize
        });
    };
};