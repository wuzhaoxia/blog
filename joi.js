const Joi = require('joi');
const schema = {
    username: Joi.string().alphanum().min(2).max(30)
    // password: Joi.string()
    //     .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    //
    // repeat_password: Joi.ref('password'),
    //
    // access_token: [
    //     Joi.string(),
    //     Joi.number()
    // ],
    //
    // birth_year: Joi.number()
    //     .integer()
    //     .min(1900)
    //     .max(2013),
    //
    // email: Joi.string()
    //     .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
};
async function run(){
    try{
        await Joi.validate({ username: 'abc' },schema);
    }catch (ex){
        console.log(ex);
        return;
    }
    console.log('验证通过')
}
run();