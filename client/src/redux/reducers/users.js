const reducer =  (users=[],action) => {
    switch (action.type) {
        case "FETCH_ALL_USERS":
            return action.payload;

        case "FETCH_USER":
          return action.payload

        case "DELETE_USER":
          return users

        case "UPDATE_GENERAL_DETAILS":
          return users

        case "UPLOAD_IMAGE":
            return users

        default:
            return users;

    }
}

export default reducer
