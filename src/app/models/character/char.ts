export class Character {
    charname?: string;
    classlevel?: string;
    timestamp:string;

    constructor(comObj) {
        this.charname = comObj.charname;
        this.classlevel = comObj.classlevel;
        this.timestamp = comObj.timestamp;
    }
}