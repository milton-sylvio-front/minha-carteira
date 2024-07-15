/* eslint-disable no-alert */
import { auth, db, signInWithEmailAndPassword } from 'helpers/utils/firebase'

// import { ERROR_MESSAGES } from "helpers/utils/constants";

// function handleResponse(response) {
//   return response.text().then((text) => {
//     const data = text && JSON.parse(text);

//     if (!response.ok) {
//       if (response.status === 401) {
//         // auto logout if 401 response returned from api
//         logout();

//         if (window.location.pathname !== "/") {
//           window.location.reload(true);
//         }
//       }

//       const errors = {
//         errors: data?.errors || ERROR_MESSAGES.CONNECTION_UNAVAILABLE,
//       };

//       return Promise.reject(errors);
//     }

//     return data;
//   });
// }

const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (err) {
    console.error(err)
    alert(err.message)
  }

  // return auth
  //   .signInWithEmailAndPassword(email, password)
  //   .then((res) => {
  //     return res?.user;
  //   })
  //   .catch((errors) => errors);
}

function getInfo() {
  return db
    .collection('Users')
    .doc(auth?.currentUser?.uid)
    .get()
    .then(res => {
      return res.data()
    })
    .catch(errors => errors)
}

const signOut = () => {
  signOut(auth)
}

export const userService = {
  getInfo,
  signIn,
  signOut,
}
