import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

import {
  Container,
  SideLeft,
  SideRight,
  LegendContainer,
  Legend,
} from './styles';

import { IPieChart } from './types';

export const PieBox = ({ data }: IPieChart) => (
  <Container>
    <SideLeft>
      <h2>Relação</h2>

      <LegendContainer>
        {data.map((indicator) => (
          <Legend key={indicator.name}>
            <div className={indicator.type}>{indicator.percent}%</div>
            <span>{indicator.name}</span>
          </Legend>
        ))}
      </LegendContainer>
    </SideLeft>
    <SideRight>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="percent"
            labelLine={false}
            outerRadius={80}
            label
          >
            {data.map((d) => (
              <Cell key={d.name} fill={d.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
);
