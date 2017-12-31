import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
        apiKey: "AIzaSyACTpwWmYN0Pl98dQBikpidgV0qUDnO5-g",
        authDomain: "ng-recipe-book-75587.firebaseapp.com"
    });
  }
}
