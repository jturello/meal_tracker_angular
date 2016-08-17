import { Component, EventEmitter } from 'angular2/core';
import { Entry } from './entry.model';
import { NewEntryComponent } from './new-entry.component';
import { EditEntryDetailsComponent } from './edit-entry-details.component';
import { CalorieCountPipe } from './calorie-count.pipe';


@Component({
  selector: 'entry-list',
  inputs: ['entryList'],
  directives: [NewEntryComponent, EditEntryDetailsComponent],
  pipes: [CalorieCountPipe],
  template: `
    <new-entry (onAddEntry)="createEntry($event)"></new-entry>
    <edit-entry-details
      *ngIf="selectedEntry" [entry]="selectedEntry"
      (onUpdateEntry)="deselectEntry(selectedEntry)">
    </edit-entry-details>

    <hr>

    <select (change)="onChange($event.target.value)" class="filter">
      <option value="All" selected="selected">Show All</option>
      <option value="<500">&lt; 500 Calories</option>
      <option value=">=500">&gt;= 500 Calories</option>
    </select>

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
      *ngFor="#currentEntry of entryList | calorieCount:filter"
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
  public show: boolean = false;
  public filter: String = "All";
  constructor(){
    this.onAddEntry = new EventEmitter();
    this.onUpdateEntry = new EventEmitter();
  }

  createEntry(newEntry: Entry): void {
    this.entryList.push(newEntry);
  }

  entryClicked(clickedEntry: Entry): void {
    this.selectedEntry = clickedEntry;
    this.show = true;
  }

  deselectEntry(): void {
    this.selectedEntry = undefined;
  }

  onChange(selectedOption: String): void {
    this.filter = selectedOption;
  }
}
