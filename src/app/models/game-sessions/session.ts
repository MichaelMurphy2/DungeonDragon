
export interface gameMaster{
    isDungeonMaster?: boolean;
}


export interface gameSession{
    uid: string;
    displayName?: string;
    charNickName?: string;
    roles: gameMaster;
}