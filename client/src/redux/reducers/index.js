import { combineReducers } from "redux";
import users from './users'
import sections from './sections'
import contentVersions from './contentVersions'

export default combineReducers({
    users , sections , contentVersions
})
