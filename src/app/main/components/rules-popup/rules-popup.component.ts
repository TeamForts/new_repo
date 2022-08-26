import {Component, EventEmitter, OnInit, Output, ViewContainerRef} from '@angular/core';
import {PersonInterface} from "../../interfaces/person.interface";

@Component({
  selector: 'app-rules-popup',
  templateUrl: './rules-popup.component.html',
  styleUrls: ['./rules-popup.component.scss']
})
export class RulesPopupComponent implements OnInit {

  public acceptRules: boolean = true;
  public notify: boolean = true;

  @Output() close = new EventEmitter<PersonInterface | null>();

  constructor(
    private _containerRef: ViewContainerRef,
  ) { }

  ngOnInit(): void {
  }

  public accept(): void {
    const result: any = {
      acceptRules: this.acceptRules,
      notify: this.notify
    }
    this.close.emit(result);
  }

}
