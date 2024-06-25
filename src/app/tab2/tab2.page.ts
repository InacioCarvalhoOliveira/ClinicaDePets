import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FireserviceService } from 'src/app/fireservice.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  nome = '';
  hora = '';
  userDetails: any;
  nomeDoutor = '';
  dataAgendamento: any = '';
  horaAgendamento: string = '';

  agendamento:any = []

  profissionais:any = [] //para aparecer os profissionais p agendar

  constructor(
    private nav: NavController,
    public router:Router,
    public fireService:FireserviceService
    ) { }

  ngOnInit() {
  }
  

  ionViewWillEnter(){
    const aux:any = localStorage.getItem('profissionais');
    this.profissionais = JSON.parse(aux);
    const aux2:any = localStorage.getItem('agendamento');
    this.agendamento = JSON.parse(aux2);
  }

  isDataSuperiorHoje(dataAgendamento: Date): boolean {
    const hoje = new Date(); // Obtém a data atual
  
    // Verifica se a data de agendamento é superior à data atual
    if (dataAgendamento > hoje) {
      return true; // A data de agendamento é superior à data atual
    } else {
      return false; // A data de agendamento não é superior à data atual
    }
  }

  save(){
    
    const nomedoutor = this.nomeDoutor
    const dataAgendamento = this.dataAgendamento
    const hora = this.horaAgendamento

    const obj:any = {nomedoutor, dataAgendamento, hora}
    const data = JSON.stringify(this.agendamento.concat(obj))
    localStorage.setItem('agendamento', data)
    this.nav.navigateBack('tabs/tab1')


    
  }

  
  
}
