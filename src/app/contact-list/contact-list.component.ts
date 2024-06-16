import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactService } from 'src/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['list.css']
})
export class ContactListComponent implements OnInit {
  contacts$: Observable<any[]>;

  constructor(private contactService: ContactService) {
    this.contacts$ = this.contactService.getContacts();
  }

  ngOnInit(): void {}
}
