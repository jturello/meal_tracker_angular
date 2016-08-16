import { Component, EventEmitter } from 'angular2/core';
import { Entry } from './entry.model';


@Component({
  selector: 'edit-entry-details',
  inputs: ['entry'],
  outputs: ['onUpdateEntry'],
  template: `
    <h3>Edit Entry:</h3>
    <form>
      <div class="row">
        <div class='col-sm-3'>
          <input [ngModel]="entry.name" class="input-sm" #name>
        </div>
        <div class='col-sm-6'>
          <input [ngModel]="entry.description" class="input-sm" #description>
        </div>
        <div class='col-sm-2'>
          <input [ngModel]="entry.calories" class="input-sm" #calories>
        </div>
        <div class='col-sm-1'>
          <button (click)="updateEntry(name, description, calories)">Update</button>
        </div>
      </div>
    </form>
  `
})

export class EditEntryDetailsComponent {
  public entry: Entry;
  public onUpdateEntry: EventEmitter<Entry>;
  constructor() {
    this.onUpdateEntry = new EventEmitter();
  }

  updateEntry(newName: HTMLInputElement, newDescription: HTMLInputElement, newCalories: HTMLInputElement){
    this.entry.name = newName.value;
    this.entry.description = newDescription.value;
    this.entry.calories = newCalories.value;
    newName.value = newDescription.value = newCalories.value = "";
    this.onUpdateEntry.emit(this.entry);
  }
}
