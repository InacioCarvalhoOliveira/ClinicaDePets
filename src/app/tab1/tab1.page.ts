import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FireserviceService } from 'src/app/fireservice.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  agendamento:any = [];
  userDetails: any;

  constructor(
    private fireService: FireserviceService,
    private nav: NavController
  ) 
  { }

  ngOnInit() { 
    this.getUserProfile(); 
  }

  ionViewWillEnter(){
    this.detail  = this.detail
    const aux:any = localStorage.getItem('agendamento');
    this.agendamento = JSON.parse(aux);
  }

  deletar(item: any){
    this.agendamento = this.agendamento.filter((el: any) => el != item)
    localStorage.setItem('agendamento', JSON.stringify(this.agendamento))
  }

  detail(item: any){
    this.nav.navigateForward('clinica/agendamento-detail', item)
  }

  getUserProfile() {
    this.fireService.getUserDetails().subscribe(details => {
      this.userDetails = details;
    }, err => {
      console.log(err);
    });
  }
  

}