import { Component } from 'angular2/core';
import { Serving } from './serving.model';
import { ServingListComponent } from './serving-list.component';

@Component({
  selector: 'my-app',
  directives: [ServingListComponent],
  template: `
  <div class="container">
    <h1>Meal Tracker App</h1>
    <serving-list [servingList] = 'servings'></serving-list>
  </div>
  `
})

export class AppComponent {
  public servings: Serving[];
  constructor(){
    this.servings = [
      new Serving('Clam Bake', '25 clams, 4 oysters, 1/2 crab', 550),
      new Serving('Trofie e patate al pesto', '1 plate of pasta', 480),
      new Serving('Beef Bourguignon', '1 serving with 1 glass of red wine', 500),
      new Serving('Sushi', '7 pieces of sushi and 2 glasses of iced tea', 300),
      new Serving('Dumplings', '15 shui-jiao with vinegar and a thai tea', 450)
    ]
  }

}
