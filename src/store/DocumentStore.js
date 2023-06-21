import {makeAutoObservable} from "mobx";


export default class DocumentStore {
    constructor() {
        this._documents = []
        makeAutoObservable(this)
    }

    setDocuments(documents) {
        const sortedArray = documents.sort((a, b) => b.id - a.id);
        this._documents = sortedArray
    }

    get documents() {
        return this._documents
    }

}