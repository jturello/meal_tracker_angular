import { Component } from 'angular2/core';
import { Serving } from './serving.model';


@Component({
  selector: 'serving-list',
  inputs: ['servingList'],
  template: `
    <h3>Serving List</h3>
    <div class="row"
      *ngFor="#currentServing of servingList"

      [class.selected]="currentServing === selectedServing">
      <div class='col-sm-3'>
        {{ currentServing.name }}
      </div>
      <div class='col-sm-7'>
        {{ currentServing.description }}
      </div>
      <div class='col-sm-2'>
        {{ currentServing.calories }}
      </div>
    </div>
  `
})

export class ServingListComponent {
  public servingList: Serving[];

}
