const Login = require('../models/loginModel')

exports.index = (req, res) => { 
    if(req.session.user) return res.render('login-logado');
    return res.render('login');
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

exports.login = async function (req, res) {
    try{
        const login = new Login(req.body)
        await login.loging();

        if(login.errors.length > 0) {
            req.flash('error', login.errors);
            req.session.save(function(){
                return res.redirect('back');
            })
            return;
        }

        req.flash('sucess', 'Vocẽ entrou no sistema!');
        req.session.user = login.user;
        req.session.save(function(){
            return res.redirect('back');
        })
    }catch(e){
        console.log(e);
        return res.render('404');
    }
    
};

exports.logout = (req, res) => {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
            return res.render('404');
        }
        return res.redirect('/');
    });
}