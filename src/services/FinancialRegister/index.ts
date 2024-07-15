/* eslint-disable prefer-const */
import { collection, db, query, getDocs } from '../../helpers/utils/firebase'

import type { IData } from './types'

export const getFinancialRegister = async (typeOf: string) => {
  console.log('financialRegister > type:', typeOf)
  const financialRegisterCollection = collection(db, 'FinancialRegister')
  const q = query(financialRegisterCollection)
  const doc = await getDocs(q)

  let data: IData[] = []

  doc.forEach((d) => data.push(d.data().data))

  const dataFiltered = data.filter((d) => d.type === typeOf)

  return dataFiltered
}
