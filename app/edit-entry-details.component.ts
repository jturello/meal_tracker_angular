import { Component, EventEmitter } from 'angular2/core';
import { Entry } from './entry.model';


@Component({
  selector: 'edit-entry-details',
  inputs: ['entry'],
  template: `
    <h3>Edit Entry:</h3>
    <form>
      <div class="row">
        <div class='col-sm-3'>
          <input [(ngModel)]="entry.name">
        </div>
        <div class='col-sm-6'>
          <input [(ngModel)]="entry.description">
        </div>
        <div class='col-sm-2'>
          <input [(ngModel)]="entry.calories">
        </div>
        <div class='col-sm-1'>
        </div>
      </div>
    </form>
  `
})

export class EditEntryDetailsComponent {
  public entry: Entry;

}
