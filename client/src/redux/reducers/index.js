import { combineReducers } from "redux";

import contentVersions from './contentVersions'
import publishedVersionNum from "./publishedVersionNum"

export default combineReducers({
    contentVersions , publishedVersionNum
})
