import { Injectable } from '@angular/core';

@Injectable()
export class ServNom {

  data: string[] = ['item1 added from service'];

  addData(item: string) {
    this.data.push(item);
  }

  getData() {
    return this.data;
  }
}