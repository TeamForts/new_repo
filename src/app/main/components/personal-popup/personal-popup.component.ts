import {Component, EventEmitter, Input, OnInit, Output, ViewContainerRef} from '@angular/core';
import {PersonInterface} from "../../interfaces/person.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {YmapPopupComponent} from "../ymap-popup/ymap-popup.component";
import {RulesPopupComponent} from "../rules-popup/rules-popup.component";
import {MainService} from "../../services/main.service";

@Component({
  selector: 'app-personal-popup',
  templateUrl: './personal-popup.component.html',
  styleUrls: ['./personal-popup.component.scss']
})
export class PersonalPopupComponent implements OnInit {
  // @ts-ignore
  public sweetForm: FormGroup;

  @Input() personName: string | null = null;
  @Input() personSurname: string | null = null;
  @Output() close = new EventEmitter<PersonInterface | null>();

  constructor(
    private _fb: FormBuilder,
    private _mainService: MainService,
    private _containerRef: ViewContainerRef,
  ) {

  }

  ngOnInit(): void {
    this._createForm();
  }

  private _createForm(): void {
    this.sweetForm = this._fb.group({
      personName: [this.personName, Validators.required],
      personSurname: [this.personSurname, Validators.required],
      address: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required, Validators.pattern("[0-9]{11}")] ],
      date: [null, Validators.required],
    })
  }

  public openMap():void {
    const component = this._containerRef.createComponent(YmapPopupComponent);
    component.instance.close.subscribe( result => {
      if (result?.address) {
        this.sweetForm.get('address')?.setValue(result.address);
      } else {
        this.sweetForm.get('address')?.setValue(null);
      }
      this._containerRef.clear();
    })
  }

  public accept(): void {
    const component = this._containerRef.createComponent(RulesPopupComponent);
    component.instance.close.subscribe( result => {
        this._containerRef.clear();
        if (result) {
          console.log(this.sweetForm.getRawValue());
          this._mainService.sendData(this.sweetForm.getRawValue());
          this.close.emit(this.sweetForm.getRawValue());
        }
      })
  }

}
