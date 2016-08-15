import { Component, EventEmitter } from 'angular2/core';
import { Entry } from './entry.model.ts';


@Component({
  selector: 'new-entry',
  template: `
    <h3>New Entry Template</h3>
  `
})

export class NewEntryComponent {
  public onSubmitNewEntry: EventEmitter<Entry>;
  constructor(){
    this.onSubmitNewEntry = new EventEmitter();
  }

}
