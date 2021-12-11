const reducer =  (sections=[],action) => {
  switch (action.type) {
      case "FETCH_ALL_SECTIONS":
          return action.payload;

      default:
          return sections;
  }
}

export default reducer
