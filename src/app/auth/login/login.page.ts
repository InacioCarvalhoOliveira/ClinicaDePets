import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FireserviceService } from 'src/app/fireservice.service';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email: any;
  public password: any;

  constructor(
    public router: Router,
    public fireService: FireserviceService,
    private nav: NavController,
    private alertController: AlertController
  ) {}

  users = [];
  ngOnInit() {}

  login() {
    try {
      this.fireService
        .loginWithEmail({ email: this.email, password: this.password })
        .then((res) => {
          if (res.user) {
            this.fireService.getDetails({ uid: res.user.uid }).subscribe(
              (details: any) => {
                console.log(details);
                alert('Bem-vindo(a) ' + details['name']);
                this.nav.navigateForward('tabs', details['name']);
              },
              (err) => {
                console.log(err);
              }
            );
          }
        })
        .catch((err) => {
          alert(err.message);
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    } finally {
      const usersData = JSON.stringify(this.users);
      localStorage.setItem('users', usersData);
      alert('Bem-vindo(a) ' + this.email);
      this.nav.navigateForward('auth/login');
    }
  }

  signup() {
    this.router.navigateByUrl('signup');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header:
        'Insira o seu email e enviaremos um link para você voltar a acessar a sua conta.',
      buttons: ['Cancelar', 'Enviar'],
      inputs: [
        {
          placeholder: 'E-mail',
          type: 'text',
        },
      ],
    });

    await alert.present();
  }
}
