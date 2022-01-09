const reducer =  (publishedVersionNum=1,action) => {
    switch (action.type) {
        case "SET_PUBLISHED_VERSION":
            return action.payload;
        default:
            return publishedVersionNum

    }
}

export default reducer
