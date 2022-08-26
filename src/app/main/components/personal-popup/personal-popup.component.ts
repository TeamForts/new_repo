import {Component, EventEmitter, OnInit, Output, ViewContainerRef} from '@angular/core';
import {PersonInterface} from "../../interfaces/person.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {YmapPopupComponent} from "../ymap-popup/ymap-popup.component";
import {RulesPopupComponent} from "../rules-popup/rules-popup.component";

@Component({
  selector: 'app-personal-popup',
  templateUrl: './personal-popup.component.html',
  styleUrls: ['./personal-popup.component.scss']
})
export class PersonalPopupComponent implements OnInit {
  // @ts-ignore
  public sweetForm: FormGroup;

  @Output() close = new EventEmitter<PersonInterface | null>();

  constructor(
    private _fb: FormBuilder,
    private _containerRef: ViewContainerRef,
  ) {
    this._createForm();
  }

  ngOnInit(): void {
  }

  private _createForm(): void {
    this.sweetForm = this._fb.group({
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
      if (result) {
        this.close.emit(this.sweetForm.getRawValue());
      } else {

      }
      this._containerRef.clear();
    })


  }

}
