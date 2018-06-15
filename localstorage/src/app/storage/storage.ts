import { Injectable } from "@angular/core";

@Injectable()
export class Storage {
    constructor() { }

    setItem(key, val) {
        localStorage.setItem(key, val);
    }

    getItem(key, cb?) {
        if (cb) {
            cb(localStorage.getItem(key));
        }
        return localStorage.getItem(key);
    }


    removeItem(key){

localStorage.removeItem(key);

    }
}