import * as api from "../../api";

export const getSections = (userName) => async (dispatch) => {
    try {
        const {data} = await api.fetchSections(userName)
        dispatch({type:"FETCH_ALL_SECTIONS",payload:data.sections})
    } catch (error) {
        console.log(error.message)
    }
}
