import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class DataShareService {

    data: any;

    setData(myData){
        this.data = myData;
    }

    getData(){
        return this.data;
    }

}
