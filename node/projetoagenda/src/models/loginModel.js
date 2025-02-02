const mongoose = require('mongoose');
const validator = require('validator')
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body){
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async login(){
    this.valida();
    if(this.errors.length > 0) return;
    this.user = await LoginModel.fundOne({email: this.body.email});

    if(!this.user) {
      this.errors.push('Usuário não existente.');
      return;
    }

    if(!bcryptjs.compareSync(this.body.password, this.user.password)){
      this.errors.push('Senha inválida.');
      this.user = null;
      return; 
    }
  }

  async register(){
    this.valida();
    if(this.errors.length > 0) return;

    await this.userExists();

    if(this.errors.length > 0) return;

    const salt = bcryptjs.genSaltSync(); 
    this.body.password = bcryptjs.hashSync(this.body.password, salt);
       
    this.user = await LoginModel.create(this.body);
  }

  async userExists(){
    this.user = await LoginModel.fundOne({email: this.body.email});
    if(this.user) this.errors.push('E-mail já cadastrado!');
  }

  valida(){
    this.cleanUp();

    //validação do email
    if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido!');

    // caracteres min e max da senha
    if(this.body.password.lenght < 3 || this.password.lenght > 50){
      this.errors.push('As enha precisa ter entre 3 e 50 caracteres!');
    }
  }

  cleanUp(){
    for(const key in this.body){
      if(typeof this.body[key] !== 'string'){
        this.body[key] = '';
      }
    }

    this.body = {
      email: this.body.email,
      password: this.body.password
    }

  }
}

module.exports = Login;