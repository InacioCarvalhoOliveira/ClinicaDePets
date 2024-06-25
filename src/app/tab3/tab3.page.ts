import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  profissionais:any = []

  

  constructor(
    private nav: NavController) { 
  }
  
  ngOnInit() {  
  }

  ionViewWillEnter(){
    const aux:any = localStorage.getItem('profissionais');
    this.profissionais = JSON.parse(aux);
  }

  exibeCadastro(){
    this.nav.navigateForward('psicologos-create')
  }

  editar(){
    this.nav.navigateForward('update-profissional')
  }

  confirmDelete(){
    this.nav.navigateForward('delete')
  }

  deletar(item: any){
    this.profissionais = this.profissionais.filter((el: any) => el != item)
    localStorage.setItem('profissionais', JSON.stringify(this.profissionais))
  }

  detail(item: any){
    this.nav.navigateForward('detail-profissional', item)
  }

}
