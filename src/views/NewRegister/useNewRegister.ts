import { useState, useCallback } from 'react'

import { addDoc, collection, db } from '../../helpers/utils/firebase'
import { TIMEOUT } from '../../helpers/utils/constants'

import { NewRegisterProps } from './types'

export const useNewRegister = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [success, setSuccess] = useState<string>('')

  const timeout = () => {
    setTimeout(() => {
      setLoading(false)
    }, TIMEOUT)
  }

  const add = useCallback(async (data: NewRegisterProps) => {
    setLoading(false)
    setSuccess('')
    setError('')

    try {
      await addDoc(collection(db, 'FinancialRegister'), { data })
      setSuccess('Registro inserido com sucesso!')
    } catch (err) {
      console.log('Erro no useNewRegister:', err)
      setError(err?.toString() || '')
    } finally {
      timeout()
    }
  }, [])

  return {
    add,
    error,
    loading,
    success,
  }
}
