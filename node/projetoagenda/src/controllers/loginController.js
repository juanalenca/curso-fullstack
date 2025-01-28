const Login = require('../models/loginModel')

exports.index = (req, res) => {
    res.render('login');
    return;
};
exports.register = async function (req, res) {
    try{
        const login = new Login(req.body)
        await login.register();

        if(login.errors.length > 0) {
            req.flash('error', login.errors);
            req.session.save(function(){
                return res.redirect('back');
            })
            return;
        }

        req.flash('sucess', 'Seu usuário foi criado com sucesso!');
        req.session.save(function(){
            return res.redirect('back');
        })
    }catch(e){
        console.log(e);
        return res.render('404');
    }
    
};
