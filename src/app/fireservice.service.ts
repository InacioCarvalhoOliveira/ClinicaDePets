import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';



@Injectable({
  providedIn: 'root'
})
export class FireserviceService {

  constructor(
    public firestore: AngularFirestore,
    public auth: AngularFireAuth
  ) {}
  loginWithEmail(data:any) {
    return this.auth.signInWithEmailAndPassword(data.email, data.password);
  }

  signup(data:any) {
    return this.auth.createUserWithEmailAndPassword(data.email, data.password);
  }

  saveDetails(data:any) {
    return this.firestore.collection("users").doc(data.uid).set(data);
  }
  getDetails(data:any) {
    return this.firestore.collection("users").doc(data.uid).valueChanges();
  }
  getUserDetails() {
    return this.auth.user.pipe(
      switchMap((user: firebase.User | null) => {
        if (user) {
          return this.firestore.collection("users").doc(user.uid).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }
}