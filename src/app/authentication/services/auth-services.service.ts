import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class AuthServicesService {
  constructor(private db: AngularFirestore) {}

  getAllUsers(): Observable<any> {
    return this.db.collection('Users').valueChanges();
  }
}
