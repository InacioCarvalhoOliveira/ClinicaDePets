import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgendamentoService } from '../agendamento.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@Component({
  selector: 'app-detalhes-agendamento',
  templateUrl: './detalhes-agendamento.component.html',
  styleUrls: ['./detalhes-agendamento.component.scss'],
})
export class DetalhesAgendamentoComponent  implements OnInit {
  agendamentoId: string = '';
  agendamento: any; // Aqui você pode definir a interface correta para o objeto de agendamento

  constructor(private route: ActivatedRoute,
    private agendamentoService: AgendamentoService
    ) { }

  ngOnInit() {
    this.agendamentoId = this.route.snapshot.paramMap.get('id') ?? '';
    this.agendamentoService.getDetalhesAgendamento(this.agendamentoId).subscribe(agendamento => {
      this.agendamento = agendamento;
    });
  }
  
}