import { Component, EventEmitter } from 'angular2/core';
import { Entry } from './entry.model';


@Component({
  selector: 'edit-entry-details',
  outputs: ['onEntryClicked'],
  template: `
    <h3>Edit Entry:</h3>
    <form>
      <div class="row"
        (click)="entryClicked(currentEntry)"
        [class.selected]="currentEntry === selectedEntry">
        <div class='col-sm-3'>
          <input type="text" placeholder="Name" class="col-sm-8 input-sm" required #name>
        </div>
        <div class='col-sm-6'>
          <input placeholder="Description" class="col-sm-8 input-sm" required #description>
        </div>
        <div class='col-sm-2'>
          <input placeholder="Calories" class="col-sm-8 input-sm" required #calories>
        </div>
        <div class='col-sm-1'>
        </div>
      </div>
    </form>
  `
})

export class EditEntryDetailsComponent {
  public onEntryClicked: EventEmitter<Entry>;
  constructor(){
    this.onEntryClicked = new EventEmitter();
  }

  entryClicked(currentEntry: Entry){
    this.onEntryClicked.emit(currentEntry);
    console.log(currentEntry);
  }

}
