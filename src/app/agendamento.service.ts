import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  constructor(private firestore: AngularFirestore) { }

  getDetalhesAgendamento(agendamentoId: string): Observable<any> {
    return this.firestore.collection('agendamentos').doc(agendamentoId).valueChanges();
  }
}