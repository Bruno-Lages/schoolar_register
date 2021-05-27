const {Model} = require('sequelize');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = class User extends Model{
    static init(sequelize){
        super.init({
            name: {
                type: Sequelize.STRING,
                validate: {
                    len: {
                        args: [3, 100],
                        msg: 'name invalid'
                    }
                }
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
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
            password_hash: {
                type: Sequelize.STRING,
            },

            password: {
                type: Sequelize.VIRTUAL,
                validate: {
                    len: {
                        args: [6, 30],
                        msg: 'the password must have between 6 and 30 characters'
                    }
                }
            }
        }, {
            sequelize
        });

        this.addHook('beforeCreate', async user => {
            if (user.password){
            user.password_hash = await bcrypt.hash(user.password, 8);
            }
        });

    };

    checkPassword(password){
        return bcrypt.compare(password, this.password_hash);
    }
};