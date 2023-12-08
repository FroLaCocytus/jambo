import {makeAutoObservable} from "mobx";


export default class MerchandiseStore {
    constructor() {
        this._merchandises = []
        makeAutoObservable(this)
    }

    setMerchandises(merchandises) {
        console.log(merchandises)
        const sortedArray = merchandises.sort((a, b) => b.id - a.id);
        this._merchandises = sortedArray
    }

    get merchandises() {
        return this._merchandises
    }

}