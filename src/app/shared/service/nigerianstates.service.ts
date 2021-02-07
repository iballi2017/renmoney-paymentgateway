import { Injectable } from '@angular/core';
import {states} from 'src/assets/data/nigerian-states-lgs';

@Injectable({
  providedIn: 'root'
})
export class NigerianstatesService {
  constructor() { }
  getStates() {
    return states;
  }
}
