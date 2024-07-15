import { useMemo, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ContentHeader from '../../components/ContentHeader'
import { UiDropdown } from '../../components/UI'

import formatCurrency from '../../helpers/utils/formatCurrency'
import formatDate from '../../helpers/utils/formatDate'
import monthsList from '../../helpers/utils/months'

import { CONSTANTS } from './contants'

import { HistoryFinances } from './components/HistoryFinances'

import { Container, Content, Filters } from './styles'
import type { IData } from './types'
import { useList } from './useList'

const List = () => {
  const { type } = useParams()
  const { get, data: list, error } = useList()

  const [data, setData] = useState<IData[]>([])
  const [monthSelected, setMonthSelected] = useState<number>(
    CONSTANTS.dateNow?.getMonth() + 1,
  )
  const [yearSelected, setYearSelected] = useState<number>(
    CONSTANTS.dateNow?.getFullYear(),
  )
  const [frequencySelected, setFrequencySelected] = useState([
    CONSTANTS.recurrent,
    CONSTANTS.eventual,
  ])

  const setType = type === 'saidas' ? 'expenses' : 'gains'

  useEffect(() => {
    get(setType)
  }, [get, setType])

  console.log('list:', list)

  const changes = useMemo(() => {
    return type === CONSTANTS.routeEntrance
      ? {
          title: 'Entradas',
          color: CONSTANTS.colorEntry,
        }
      : {
          title: 'Saídas',
          color: CONSTANTS.colorOutput,
        }
  }, [type])

  const months = useMemo(() => {
    return monthsList.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      }
    })
  }, [])

  const years = useMemo(() => {
    const uniqueYears: number[] = []

    list.forEach((item) => {
      const date = new Date(item?.date || '')
      const year = date.getFullYear()

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year)
      }
    })

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      }
    })
  }, [list])

  const handleFrequencyClick = (frequency: string) => {
    const selected = frequencySelected.findIndex((item) => item === frequency)

    if (selected >= 0) {
      const filtered = frequencySelected.filter((item) => item !== frequency)
      setFrequencySelected(filtered)
    } else {
      setFrequencySelected((prev) => [...prev, frequency])
    }
  }

  const handleMonthSelected = (month: string) => {
    try {
      setMonthSelected(Number(month))
    } catch (error) {
      throw new Error('Valor inválido do mês. Aceito somente de 0 - 23')
    }
  }

  const handleYearSelected = (year: string) => {
    try {
      setYearSelected(Number(year))
    } catch (error) {
      throw new Error('Valor inválido do mês. Aceito somente de 0 - 23')
    }
  }

  useEffect(() => {
    const filteredData = list.filter((item) => {
      const date = new Date(item?.date || '')
      const month = date.getMonth() + 1
      const year = date.getFullYear()
      const frequency = frequencySelected.includes(item?.frequency || '')

      return month === monthSelected && year === yearSelected && frequency
    })

    const formattedData = filteredData.map((item) => {
      const token = Math.random().toString(36)

      return {
        id: token + token,
        description: item?.description || '',
        amountFormatted: formatCurrency(Number(item?.amount)),
        frequency:
          item?.frequency === CONSTANTS.recurrent
            ? CONSTANTS.colorEntry
            : CONSTANTS.colorOutput,
        dateFormatted: formatDate(item?.date || ''),
      }
    })

    setData(formattedData)
  }, [list, monthSelected, yearSelected, frequencySelected])

  console.log('data:', data)

  return (
    <Container>
      <ContentHeader title={changes.title}>
        <UiDropdown
          options={months}
          onChange={(e) => handleMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <UiDropdown
          options={years}
          onChange={(e) => handleYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <Filters>
        <button
          type='button'
          className={`tag-filter tag-filter-recurrent
            ${
              frequencySelected.includes(CONSTANTS.recurrent) &&
              'tag-filter-active'
            }`}
          onClick={() => handleFrequencyClick(CONSTANTS.recurrent)}
        >
          Recorrentes
        </button>
        <button
          type='button'
          className={`tag-filter tag-filter-eventual
            ${
              frequencySelected.includes(CONSTANTS.eventual) &&
              'tag-filter-active'
            }`}
          onClick={() => handleFrequencyClick(CONSTANTS.eventual)}
        >
          Eventuais
        </button>
      </Filters>

      <Content>
        {data.map((item) => (
          <HistoryFinances
            key={item.id}
            title={item.description}
            subtitle={item.dateFormatted}
            amount={item.amountFormatted}
            borderColor={item.frequency}
          />
        ))}
      </Content>
    </Container>
  )
}

export default List
