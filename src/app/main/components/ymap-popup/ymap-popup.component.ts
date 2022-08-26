import {Component, EventEmitter, OnInit, Output} from '@angular/core';
// @ts-ignore
import ymaps from 'ymaps';
import {PersonInterface} from "../../interfaces/person.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-ymap-popup',
  templateUrl: './ymap-popup.component.html',
  styleUrls: ['./ymap-popup.component.scss']
})
export class YmapPopupComponent implements OnInit {
  public address: string = '';
  // @ts-ignore
  public sweetForm: FormGroup;

  @Output() close = new EventEmitter<PersonInterface | null>();

  constructor(
    private _fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this._createForm();
    this.createMap();
  }

  private _createForm(): void {
    this.sweetForm = this._fb.group({
      address: [null, Validators.required],
    })
  }

  public createMap(): void {
    ymaps
      .load('https://api-maps.yandex.ru/2.1/?apikey=d2d25d07-bd4d-4745-a800-b04c5c70a44e&lang=ru_RU')
      .then((maps: any) => {
        const map = new maps.Map('map-test', {
          center: [55.75124223283759,37.618792387553725],
          zoom: 17
        });

        map.controls.remove('rulerControl'); // удаляем контрол правил

        map.events.add('click', (e: any) => {
          let coords =e.get('coords');
          ymaps
            .load('https://api-maps.yandex.ru/2.1/?apikey=d2d25d07-bd4d-4745-a800-b04c5c70a44e&lang=ru_RU')
            .then( (maps: any) => {

              maps.geocode([coords]).then((res: any) => {
                let firstGeoObject = res.geoObjects.get(0);
                this.address = firstGeoObject.getAddressLine();
                this.sweetForm.get('address')?.setValue(this.address);
              });
            })
        });

      })
      .catch( (err: any) => console.log(err))
  }

  public accept(): void {
    this.close.emit(this.sweetForm.getRawValue())
  }

}
