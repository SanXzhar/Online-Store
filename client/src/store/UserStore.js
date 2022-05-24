import {makeAutoObservable} from 'mobx';

export default class UserStore {
    constructor () {
        this._isAuth = true
        this._user = true 
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }

    setUser(user){
        this._user = user
    }

    get isAuth(){
        return this._user
    }
}