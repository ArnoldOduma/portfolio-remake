import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) { }


  createMessage(value) {
    return this.db.collection('messages').add({
      name: value.name,
      email: value.email.toLowerCase(),
      message: value.message,
      date: value.date,
      time: value.time,
      html: value.html,
      html2: value.html2
    });
  }
}
