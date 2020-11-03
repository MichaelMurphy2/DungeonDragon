export class SearchResults {
    name: String;
    desc: String;
    text: String;

    constructor(searchObj){
        this.name = searchObj.name;
        this.desc = searchObj.desc;
        this.text = searchObj.text;
        
    }
}
