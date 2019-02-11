// export const attachHeader = () => {
//   let bearer = ''
//   const token = localStorage.getItem('token')
//   if (token) bearer = `Bearer ${token}`

//   return {
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//       'Authorization': bearer
//     }
//   }
// }

// const BASE_URL = process.env.REACT_APP_API_URL

// export const GET_USER='GET_USER'

// export function getUser(userId) {
//   return dispatch => (
//     fetch(`${BASE_URL}/users/${userId}`)//header
//   )
//   .then(response => response.json())
//   .then(response => {
//     dispatch({
//       type: GET_USER,
//       payload: response.data
//     })
//   })
// }