import { Component, EventEmitter } from 'angular2/core';
import { Serving } from './serving.model.ts';


@Component({
  selector: 'new-serving',
  template: `
    <h3>New Serving Template</h3>
  `
})

export class NewServingComponent {
  public onSubmitNewServing: EventEmitter<Serving>;
  constructor(){
    this.onSubmitNewServing = new EventEmitter();
  }

}
