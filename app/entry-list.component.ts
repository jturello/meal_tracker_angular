import { Component, EventEmitter } from 'angular2/core';
import { Entry } from './entry.model';
import { NewEntryComponent } from './new-entry.component';


@Component({
  selector: 'entry-list',
  inputs: ['entryList'],
  directives: [NewEntryComponent],
  template: `
    <new-entry (onAddEntry)="createEntry($event)"></new-entry>

    <h3>Entry List</h3>

    <div class="row grid-header">
      <div class='col-sm-3'>
        <h4>Name</h4>
      </div>
      <div class='col-sm-6'>
        <h4>Description</h4>
      </div>
      <div class='col-sm-2'>
        <h4>Calories</h4>
      </div>
    </div>

    <div class="row"
      *ngFor="#currentEntry of entryList"
      [class.selected]="currentEntry === selectedEntry">
      <div class='col-sm-3'>
        {{ currentEntry.name }}
      </div>
      <div class='col-sm-6'>
        {{ currentEntry.description }}
      </div>
      <div class='col-sm-2'>
        {{ currentEntry.calories }}
      </div>
    </div>
  `
})

export class EntryListComponent {
  public entryList: Entry[];
  public onAddEntry: EventEmitter<Entry>;
  constructor(){
    this.onAddEntry = new EventEmitter();
  }

  createEntry(newEntry: Entry): void {
    console.log('entry-list', newEntry);
    this.entryList.push(newEntry);
  }

}
