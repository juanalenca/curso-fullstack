export default class Login{
    constructor(formClass){
        this.form = document.querySelector(formClass)
    }
    init(){
        this.events()
    }
    events(){
        if(this.form) return
        this.form.addEventListener('submit', e => {
            e.preventDefault()
            this.validate(e)
        })
    }
    validate(e){
        const el = e.target
        const emailInput = el.querySelector('input[name="email"]')
        const passworlInput = el.querySelector('input[name="passworl"]')
        let error = false

        if(!validator.isEmail(emailInput.value)){
            alert('Email inválido!')
            error = true
        }

        if(passworlInput.value.length < 3 || passworlInput.value.length > 50){
            alert('Senha precisa ter entre 3 e 50 caracteres!')
            error = true
        }

        if(!error) el.submit()
    }
}