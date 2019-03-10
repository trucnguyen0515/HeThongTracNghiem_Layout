import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransformDataService {
  private data = new BehaviorSubject(null);
  public asData = this.data.asObservable();

  constructor() { }

  public TransformData(thamso) {
    this.data.next(thamso);
  }
}
