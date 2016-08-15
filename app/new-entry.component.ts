import { Component, EventEmitter } from 'angular2/core';
import { Entry } from './entry.model';


@Component({
  selector: 'new-entry',
  template: `
    <h3>New Entry Template</h3>
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
          <button (click)="addEntry(name, description, calories)" class="add-button">Add</button>
        </div>
      </div>
    </form>
  `
})

export class NewEntryComponent {
  public onSubmitNewEntry: EventEmitter<Entry>;
  constructor(){
    this.onSubmitNewEntry = new EventEmitter();
  }

  addEntry(name: HTMLInputElement, description: HTMLInputElement, calories: HTMLInputElement){
    let newEntry = new Entry(name.value, description.value, calories.value);
    name.value = description.value = calories.value = "";
    console.log(newEntry);

  }

}
