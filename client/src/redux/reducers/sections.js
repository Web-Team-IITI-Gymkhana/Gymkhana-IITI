const reducer =  (sections=[],action) => {
  switch (action.type) {
      case "FETCH_ALL_SECTIONS":
          return action.payload;

      case "ADD_SECTION":
      case "UPDATE_SECTION":
      case "DELETE_SECTION":
      case "ADD_SECTION_CHILD":
      case "UPDATE_SECTION_CHILD":
      case "DELETE_SECTION_CHILD":
        return sections

      default:
          return sections;
  }
}

export default reducer
