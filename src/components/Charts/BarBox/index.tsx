import { ResponsiveContainer, BarChart, Bar, Cell, XAxis } from 'recharts';

import {
  Container,
  SideLeft,
  SideRight,
  LegendContainer,
  Legend,
} from './styles';

import { IBarBoxProps } from './types';

export const BarBox = ({ title, data }: IBarBoxProps) => (
  <Container>
    <SideLeft>
      <h2>{title}</h2>

      <LegendContainer>
        {data.map((d) => (
          <Legend key={d.name}>
            <div className={d.type}>{d.percent}%</div>
            <span>{d.name}</span>
          </Legend>
        ))}
      </LegendContainer>
    </SideLeft>

    <SideRight>
      <ResponsiveContainer>
        <BarChart data={data}>
          <Bar dataKey="amount">
            {data.map((d) => (
              <Cell key={d.amount} fill={d.color} />
            ))}
          </Bar>
          <XAxis dataKey="legend" stroke="#cecece" />
        </BarChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
);
