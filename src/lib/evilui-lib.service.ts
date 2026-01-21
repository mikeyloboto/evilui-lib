import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EviluiLibService {
  constructor() { }
}

export type EvilColor =
  | 'red'
  | 'blue'
  | 'green'
  | 'yellow'
  | 'orange'
  | 'pink'
  | 'purple'
  | 'white';
