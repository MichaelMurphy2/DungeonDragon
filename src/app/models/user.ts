export class User{
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    isDungeonMaster?: boolean;
    isRegistered?: boolean;
   
    
    constructor(userObj){
        this.uid = userObj.uid;
        this.email = userObj.email;
        this.photoURL = userObj.photoURL;
        this.displayName = userObj.displayName;
        this.isDungeonMaster = userObj.isDungeonMaster;
        this.isRegistered = userObj.isRegistered;
    }
}