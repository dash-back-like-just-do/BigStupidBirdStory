import { _decorator, Component, log, Node } from 'cc';
const { ccclass, property } = _decorator;



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
export default {
    charaData
}