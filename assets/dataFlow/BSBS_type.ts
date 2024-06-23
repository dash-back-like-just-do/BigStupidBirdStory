type tMaxNumber={
    now:number,
    max:number,
}
type tBattleData={
    atk:number,
    def:number,
    cri:number,
    spd:number,
    dodge:number,
}
type tCharaData={
    name:string,

    battleData:tBattleData,
    
    hp:tMaxNumber,
    hunger:tMaxNumber,
    mood:tMaxNumber,
    energy:tMaxNumber,
}
