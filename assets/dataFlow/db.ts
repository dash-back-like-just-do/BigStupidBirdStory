import { _decorator, Component, log, Node } from 'cc';
const { ccclass, property } = _decorator;


const monsterData = {
    name : "monsterData",
    Get(): tMonsterData []{
        let data = localStorage.getItem(this.name);
        if (data) {
            return JSON.parse(data) ;
        }
        return [];
    },
    Set(data:tMonsterData []) {
        localStorage.setItem(this.name, JSON.stringify(data));
    }
}

const charaData = {
    name : "charaData",
    Get(): tCharaData []{
        let data = localStorage.getItem(this.name);
        if (data) {
            return JSON.parse(data) ;
        }
        return [];
    },
    Set(data:tCharaData []) {
        localStorage.setItem(this.name, JSON.stringify(data));
    }
}
const map = {
    charaData,
    monsterData
}
export default {
    map
}