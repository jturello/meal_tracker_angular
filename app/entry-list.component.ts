import { Component } from 'angular2/core';
import { Entry } from './entry.model';
import { NewEntryComponent } from './new-entry.component';


@Component({
  selector: 'entry-list',
  inputs: ['entryList'],
  directives: [NewEntryComponent],
  template: `
    <new-entry></new-entry>

    <h3>Entry List</h3>
    <div class="row"
      *ngFor="#currentEntry of entryList"

      [class.selected]="currentEntry === selectedEntry">
      <div class='col-sm-3'>
        {{ currentEntry.name }}
      </div>
      <div class='col-sm-7'>
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

}
