import firebase from 'firebase'

const db = firebase.firestore()
const usersPerPage = 10

function getAll() {
  const response = db
    .collection('FinancialRegister')
    .where('type', '==', 'gains')
    // .orderBy("type", "asc")
    .limit(usersPerPage)

  try {
    const resp = response.get()
    const arr = []
    // const arrGains = [];
    // const arrExpenses = [];

    resp.docs.forEach(_data => {
      // console.log("_data.id:", _data.id);
      arr.push({
        id: _data.id, // because id field in separate function in firestore
        ..._data.data(), // the remaining fields
      })
    })

    return arr

    // arr.forEach((items) => {
    //   if (items.type === "gains") {
    //     arrGains.push(items);
    //   } else if (items.type === "expenses") {
    //     arrExpenses.push(items);
    //   }
    // });
  } catch (error) {
    console.log('ERRO: ', error)
    throw error
  }
}

export const financialHistoryService = {
  getAll,
}
