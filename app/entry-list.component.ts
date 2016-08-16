import { Component, EventEmitter } from 'angular2/core';
import { Entry } from './entry.model';
import { NewEntryComponent } from './new-entry.component';
import { EditEntryDetailsComponent } from './edit-entry-details.component';


@Component({
  selector: 'entry-list',
  inputs: ['entryList'],
  directives: [NewEntryComponent, EditEntryDetailsComponent],
  template: `
    <new-entry (onAddEntry)="createEntry($event)"></new-entry>
    <edit-entry-details
      *ngIf="selectedEntry" [entry]="selectedEntry"
      (onUpdateEntry)="deselectEntry(updatedEntry)">
    </edit-entry-details>

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
      (click)="entryClicked(currentEntry)"
      [class.selected]="currentEntry === selectedEntry"
      >
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
  public onUpdateEntry: EventEmitter<Entry>;
  public selectedEntry: Entry;
  constructor(){
    this.onAddEntry = new EventEmitter();
    this.onUpdateEntry = new EventEmitter();
  }

  createEntry(newEntry: Entry): void {
    console.log('entry-list', newEntry);
    this.entryList.push(newEntry);
  }

  entryClicked(clickedEntry: Entry): void {
    console.log('entry-list', clickedEntry);
    this.selectedEntry = clickedEntry;
  }

  deselectEntry(): void {
    this.selectedEntry = undefined;
  }

}
