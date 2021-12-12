import * as api from "../../api";

export const getUsers = () => async (dispatch) => {
    try {
        const {data} = await api.fetchUsers()
        dispatch({type:"FETCH_ALL_USERS",payload:data.users})
    } catch (error) {
        console.log(error.message)
    }
}

export const getUser = (userName) => async (dispatch) => {
  try {
      const {data} = await api.fetchUser(userName)
      dispatch({type:"FETCH_USER",payload:data.user})
  } catch (error) {
      console.log(error.message)
  }
}

export const deleteUser = (userName) => async (dispatch) => {
  try {
      await api.deleteUser(userName)
      dispatch({type:"DELETE_USER"})
  } catch (error) {
      console.log(error.message)
  }
}
