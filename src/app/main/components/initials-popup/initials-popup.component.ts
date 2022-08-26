import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PersonInterface} from "../../interfaces/person.interface";

@Component({
  selector: 'app-initials-popup',
  templateUrl: './initials-popup.component.html',
  styleUrls: ['./initials-popup.component.scss']
})
export class InitialsPopupComponent implements OnInit {
  // @ts-ignore
  public sweetForm: FormGroup;

  @Output() close = new EventEmitter<PersonInterface | null>();

  constructor(
    private _fb: FormBuilder,
  ) {
    this._createForm();
  }

  ngOnInit(): void {
  }

  private _createForm(): void {
    this.sweetForm = this._fb.group({
      personName: [null, Validators.required],
      personSurname: [null, Validators.required],
    })
  }

  public accept(): void {
    this.close.emit(this.sweetForm.getRawValue())
  }
}
