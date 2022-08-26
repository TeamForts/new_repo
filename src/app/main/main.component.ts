import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {InitialsPopupComponent} from "./components/initials-popup/initials-popup.component";
import {PersonInterface} from "./interfaces/person.interface";
import {PersonalPopupComponent} from "./components/personal-popup/personal-popup.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public person: PersonInterface;
  public initPerson: PersonInterface = {
    personName: null,
    personSurname: null,
    email: null,
    phone: null,
    date: null,
  }
  public welcome: boolean = true;
  public stage: number = 0;

  constructor(
    private _containerRef: ViewContainerRef,
  ) {
    this.person = JSON.parse(JSON.stringify(this.initPerson));
  }

  ngOnInit(): void {

  }


  public openInitialsPopup(): void {
    const component = this._containerRef.createComponent(InitialsPopupComponent);
    component.instance.close.subscribe((result: PersonInterface | null) => {
      this._containerRef.clear();
      if (result !== null) {
        this.person.personName = result.personName;
        this.person.personSurname = result.personSurname;
        this.welcome = true;
        this.stage = 1;
      } else {
        this.welcome = false;
      }
    })
  }

  public openPersonalPopup(): void {
    const component = this._containerRef.createComponent(PersonalPopupComponent);
    component.instance.personName = this.person.personName;
    component.instance.personSurname = this.person.personSurname;
    component.instance.close.subscribe((result: PersonInterface | null) => this._containerRef.clear());
  }

  public resetData(): void {
    console.log('click');
    this.stage = 0;
    this.welcome = true;
    this.person = JSON.parse(JSON.stringify(this.initPerson));
  }


}
