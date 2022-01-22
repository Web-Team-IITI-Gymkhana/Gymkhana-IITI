import { combineReducers } from "redux";

import contentVersions from './contentVersions'
import adminAuth from "./adminAuth"

export default combineReducers({
    contentVersions , adminAuth
})
