import { combineReducers } from "redux";

import contentVersions from './contentVersions'
import publishedVersionNum from "./publishedVersionNum"
import adminAuth from "./adminAuth"

export default combineReducers({
    contentVersions , publishedVersionNum , adminAuth
})
