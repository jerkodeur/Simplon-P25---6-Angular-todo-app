import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveUrlService {
  activeFilter = new Subject();
  constructor() { }
}
