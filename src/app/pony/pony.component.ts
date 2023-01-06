import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PonyModel } from '../models/pony.model';

@Component({
  selector: 'pr-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css']
})
export class PonyComponent {
  @Input() ponyModel!: PonyModel;

  @Output() ponyClicked: EventEmitter<PonyModel> = new EventEmitter();

  imagePath = 'assets/images/';

  getPonyImageUrl(): string {
    return this.imagePath + 'pony-' + this.ponyModel.color.toLowerCase() + '.gif';
  }

  clicked(): void {
    this.ponyClicked.emit(this.ponyModel);
  }
}
