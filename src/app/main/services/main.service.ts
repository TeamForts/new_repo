import {ComponentRef, Injectable, ViewContainerRef} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PersonInterface} from "../interfaces/person.interface";
import {BehaviorSubject, Observable} from "rxjs";


@Injectable({
  providedIn: 'root',
})

export class MainService {

  private _person$$: BehaviorSubject<PersonInterface | null> = new BehaviorSubject<PersonInterface | null>(null);
  public person$: Observable<PersonInterface | null> = this._person$$.asObservable();

  private _loading$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loading$: Observable<boolean> = this._loading$$.asObservable();

  constructor(
    private _http: HttpClient,
  ) {
  }

  public sendData(body: PersonInterface): void {
    this._loading$$.next(true);
    setTimeout( ( () => {
      this._person$$.next(body);
      this._loading$$.next(false);
    }), 3000);

  }
}


