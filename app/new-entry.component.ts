import { Component, EventEmitter } from 'angular2/core';
import { Entry } from './entry.model';


@Component({
  selector: 'new-entry',
  outputs: ['onAddEntry'],
  template: `
    <h3>Add a New Entry:</h3>
    <form>
      <div class="row">
        <div class='col-sm-3'>
          <input type="text" placeholder="Name" class="col-sm-8 input-sm" #name>
        </div>
        <div class='col-sm-6'>
          <input placeholder="Description" class="col-sm-8 input-sm" #description>
        </div>
        <div class='col-sm-2'>
          <input placeholder="Calories" class="col-sm-8 input-sm" #calories>
        </div>
        <div class='col-sm-1'>
          <button (click)="addEntry(name, description, calories)">Add</button>
        </div>
      </div>
    </form>
  `
})

export class NewEntryComponent {
  public onAddEntry: EventEmitter<Entry>;
  constructor(){
    this.onAddEntry = new EventEmitter();
  }

  addEntry(name: HTMLInputElement, description: HTMLInputElement, calories: HTMLInputElement){
    let newEntry = new Entry(name.value, description.value, calories.value);
    this.onAddEntry.emit(newEntry);
    name.value = description.value = calories.value = "";
    console.log(newEntry);
  }

}
