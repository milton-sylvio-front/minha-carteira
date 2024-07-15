import { useState, useCallback } from 'react'

import { getFinancialRegister } from '../../services/FinancialRegister'
import type { IData } from '../../services/FinancialRegister/types'

export const useList = () => {
  const [data, setData] = useState<IData[]>([])
  const [error, setError] = useState<string>('')

  const get = useCallback(async (type: string) => {
    try {
      const response = await getFinancialRegister(type)

      if (response) {
        setData(response)
      }
    } catch (err) {
      console.error(err)
      setError(err?.toString() || '')
      alert('Erro ao acessar os dados do usuário!')
    }
  }, [])

  return {
    get,
    error,
    data,
  }
}
