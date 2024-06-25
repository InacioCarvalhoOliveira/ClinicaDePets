import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { FireserviceService } from 'src/app/fireservice.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    public email:any;
    public password:any;
    public password02:any;
    public name:any;
    public sobrenome:any;
    public sexo:string = '';

    constructor(
      public fireService:FireserviceService,
      private nav: NavController, 
      private alertController: AlertController
    ) { }

    firstname: string = '';
    lastname: string = '';
    #email:string = '';
    #password:string = '';
    password2:string = '';
    datanasc = '';
    genero: string = '';
    cep: string | undefined;
    endereco: any | undefined;
    numero: string = '';
    complemento: string = '';
    bairro: string | undefined;
    cidade: string | undefined;
    estado: string | undefined;
  
    users = [];
  
    
  
    limparFormulario = () => {
      this.endereco = ''
      this.bairro = ''
      this.cidade = ''
      this.estado = ''
    }
  
    preencherFormulario = (obj: any) => {
      this.endereco = obj.logradouro
      this.bairro = obj.bairro
      this.cidade = obj.localidade
      this.estado = obj.uf
    }

    async apiName(){
      const name = this.name;
      const url = 'https://api.genderize.io?name=' + name;

      const response = await fetch(url);
      const prom = response.text();
      prom.then((x:any) => {
        x = JSON.parse(x);
        this.sexo = x.gender
        if(this.sexo == 'male'){
          this.sexo = 'masculino';
        }else if(this.sexo == 'female'){
          this.sexo ='feminino';
        }
      })
   }
  
    async callAPICEP() {
      this.limparFormulario()
  
      const cep = this.cep
      const url = `https://viacep.com.br/ws/${cep}/json/`;
      
      if (this.cep?.length == 8) {
        const dados = await fetch(url)
        const prom = dados.text()
  
        prom.then((x: any) => {
          let obj = JSON.parse(x)
          this.preencherFormulario(obj)
        })
      } else {
        this.endereco = 'CEP incorreto'
      }
    }
  
    ngOnInit() {
      const aux: any = localStorage.getItem('users');
      this.users = aux ? JSON.parse(aux) : [];
    }

    signup() {
      if (this.password !== this.password02) {
        alert("As senhas não coincidem.");
        return;
      }
    
      try {
        this.fireService.signup({email: this.email, password: this.password}).then(res => {
          if (res.user) {
            const data = {
              email: this.email,
              password: this.password,
              name: this.name,
              sobrenome: this.sobrenome,
              sexo: this.sexo,
              uid: res.user.uid
            };
            this.fireService.saveDetails(data).then(() => {
              alert('Conta criada com sucesso!');
              this.nav.navigateForward('auth/login');
            }).catch(err => {
              console.log(err);
            });
          }
        }).catch(err => {
          alert(err.message);
          console.log(err);
        });
      } catch (err) {
        console.log(err);
      } finally {
        const usersData = JSON.stringify(this.users);
        localStorage.setItem('users', usersData);
        alert('Conta criada com sucesso!');
              this.nav.navigateForward('auth/login');
      }
    }
  
  }