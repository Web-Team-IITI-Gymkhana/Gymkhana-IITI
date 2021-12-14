const reducer =  (sections=[],action) => {
  switch (action.type) {
      case "FETCH_ALL_SECTIONS":
          return action.payload;

      case "UPDATE_GENERAL_SECTION":
        return sections

      default:
          return sections;
  }
}

export default reducer
