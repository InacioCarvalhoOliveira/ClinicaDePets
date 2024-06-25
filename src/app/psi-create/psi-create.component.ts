import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';


@Component({
  selector: 'app-psi-create',
  templateUrl: './psi-create.component.html',
  styleUrls: ['./psi-create.component.scss'],
})
export class PsiCreateComponent  implements OnInit {

  nome: string = '';
  datanasc = '';
  genero: string = '';
  cep: string | undefined;
  endereco: any | undefined;
  numero: string = '';
  complemento: string = '';
  bairro: string | undefined;
  cidade: string | undefined;
  estado: string | undefined;
  
  profissionais = [];

  constructor(private nav: NavController) { }

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

  async callAPI() {
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
    const aux: any = localStorage.getItem('profissionais');
    this.profissionais = aux ? JSON.parse(aux) : [];
  }

  save(){
    const nome = this.nome;
    const datanasc = this.datanasc;
    const genero = this.genero;
    const cep = this.cep;
    const endereco = this.endereco;
    const numero = this.numero;
    const complemento = this.complemento;
    const bairro = this.bairro;
    const cidade = this.cidade;
    const estado = this.estado;
    const obj:any = {nome, datanasc, genero, cep, endereco, numero, complemento, bairro, cidade, estado}
    const data = JSON.stringify(this.profissionais.concat(obj))
    localStorage.setItem('profissionais', data)
    this.nav.navigateBack('tabs/tab3')
  }

    
}