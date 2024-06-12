// src/app/contact-list/contact-list.component.ts
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./list.css']
})
export class ContactListComponent implements OnInit {
  contacts$: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    this.contacts$ = this.firestore.collection('contacts').valueChanges();
  }

  ngOnInit(): void {}
}
