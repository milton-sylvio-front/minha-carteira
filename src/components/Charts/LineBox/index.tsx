import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts'

import formatCurrency from '../../../helpers/utils/formatCurrency'

import { Container, Header, Legends, LegendItem } from './styles'

import { ILineBoxProps } from './types'

export const LineBox = ({
  data,
  lineColorAmountEntry,
  lineColorAmountOutput,
}: ILineBoxProps) => (
  <Container>
    <Header>
      <h2>Histórico de saldo</h2>

      <Legends>
        <LegendItem className='entry'>Entradas</LegendItem>
        <LegendItem className='output'>Saídas</LegendItem>
      </Legends>
    </Header>

    <ResponsiveContainer>
      <LineChart data={data} margin={{ right: 15, left: 15 }}>
        <CartesianGrid strokeDasharray='3 3' stroke='#cecece' />
        <XAxis dataKey='month' stroke='#cecece' />
        <Tooltip formatter={(value) => formatCurrency(Number(value))} />
        <Line
          type='monotone'
          dataKey='amountEntry'
          name='Entradas'
          stroke={lineColorAmountEntry}
          strokeWidth={5}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
        />
        <Line
          type='monotone'
          dataKey='amountOutput'
          name='Saídas'
          stroke={lineColorAmountOutput}
          strokeWidth={5}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </Container>
)
