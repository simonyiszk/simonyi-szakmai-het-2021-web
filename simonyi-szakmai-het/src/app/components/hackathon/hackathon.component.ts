import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hackathon',
  templateUrl: './hackathon.component.html',
  styleUrls: ['./hackathon.component.scss'],
})
export class HackathonComponent implements OnInit {
  //Átmeneti példakód a firebase kipróbáláshoz, és megmutatni, hogy hogyan működik.

  private collection: AngularFirestoreCollection;
  items: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.collection = firestore.collection<{ text: string }>('test');
    this.items = this.collection.valueChanges();
  }

  ngOnInit(): void {}

  addItem(text: string) {
    const date = new Date().toISOString();
    this.collection.add({ text: text + date });
  }
}
