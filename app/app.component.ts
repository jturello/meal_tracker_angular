import { Component } from 'angular2/core';
import { Entry } from './entry.model';
import { EntryListComponent } from './entry-list.component';

@Component({
  selector: 'my-app',
  directives: [EntryListComponent],
  template: `
  <div class="container">
    <h1>Meal Tracker App</h1>
    <entry-list [entryList] = 'entries'></entry-list>
  </div>
  `
})

export class AppComponent {
  public entries: Entry[];
  constructor(){
    this.entries = [
      new Entry('Clam Bake', '25 clams, 4 oysters, 1/2 crab', "550"),
      new Entry('Trofie e patate al pesto', '1 plate of pasta', "480"),
      new Entry('Beef Bourguignon', '1 entry with 1 glass of red wine', "500"),
      new Entry('Sushi', '7 pieces of sushi and 2 glasses of iced tea', "300"),
      new Entry('Dumplings', '15 shui-jiao with vinegar and a thai tea', "450")
    ]
  }

}
