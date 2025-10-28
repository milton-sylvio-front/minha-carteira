import { useState, useMemo } from 'react';

import { BarBox, LineBox, PieBox } from '@/components/Charts';
import { ContentHeader } from '@/components/ContentHeader';
import ColorCard from '@/components/ColorCard';
import MessageCard from '@/components/MessageCard';
import { UiContainer, UiDropdown } from '@/components/UI';

import gains from '@/repositories/gains';
import expenses from '@/repositories/expenses';

import { MONTHS_NAME_ARR, formatCurrency } from '@/helpers/utils';

import happyIcon from '@/assets/icons/happy.svg';
import sadIcon from '@/assets/icons/sad.svg';
import opsIcon from '@/assets/icons/ops.svg';

import { colors } from '@/styles/themes/general';

import { Content, ContainerColorsCards } from './styles';

const Dashboard = () => {
  const dateNow = new Date();

  const [monthSelected, setMonthSelected] = useState<number>(
    dateNow.getMonth() + 1
  );
  const [yearSelected, setYearSelected] = useState<number>(
    dateNow.getFullYear()
  );

  const months = useMemo(
    () =>
      MONTHS_NAME_ARR.map((month, index) => ({
        value: index + 1,
        label: month,
      })),
    []
  );

  const years = useMemo(() => {
    const uniqueYears: number[] = [];
    [...expenses, ...gains].forEach((item) => {
      const date = new Date(item?.date || '');
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map((year) => ({
      value: year,
      label: year,
    }));
  }, []);

  const totalExpenses = useMemo(() => {
    let total = 0;

    expenses.forEach((item) => {
      const date = new Date(item?.date || '');
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item?.amount);
        } catch (error) {
          throw new Error(`Valor inválido: ${error}`);
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected]);

  const totalGains = useMemo(() => {
    let total = 0;

    gains.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch (error) {
          throw new Error(`Valor inválido: ${error}`);
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected]);

  const totalBalance = useMemo(
    () => totalGains - totalExpenses,
    [totalGains, totalExpenses]
  );

  const message = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: 'Que triste!',
        description: 'Neste mês, você gastou mais que deveria!',
        footerTxt: 'Verifique seus gastos e tente economizar.',
        icon: sadIcon,
      };
    }
    if (totalBalance === 0 && totalExpenses === 0) {
      return {
        title: 'Opssssssss...!',
        description: 'Neste mês, não hã registros de entradas e saídas!',
        footerTxt: 'Parece que nesse mês não há registros.',
        icon: opsIcon,
      };
    }
    if (totalBalance === 0) {
      return {
        title: 'Ufaaaa!',
        description: 'Neste mês, você gastou exatamente o que ganhou!',
        footerTxt: 'Tenha cuidado no próximo mês.',
        icon: opsIcon,
      };
    }
    return {
      title: ' Muito bem!',
      description: 'Sua carteira está positiva!',
      footerTxt: 'Continue assim. Considere investir o seu saldo.',
      icon: happyIcon,
    };
  }, [totalBalance, totalExpenses]);

  const relationExpensesVersusGains = useMemo(() => {
    const total = totalGains + totalExpenses;

    const gainsPercent = (totalGains / total) * 100;
    const expensesPercent = (totalExpenses / total) * 100;

    const data = [
      {
        name: 'Entradas',
        value: totalGains,
        percent: Number(gainsPercent.toFixed(1)) | 0,
        color: colors.success,
        type: 'entry',
      },
      {
        name: 'Saídas',
        value: totalExpenses,
        percent: Number(expensesPercent.toFixed(1)) | 0,
        color: colors.primary,
        type: 'output',
      },
    ];

    return data;
  }, [totalGains, totalExpenses]);

  const historyData = useMemo(
    () =>
      MONTHS_NAME_ARR.map((_, month) => {
        let amountEntry = 0;

        gains.forEach((gain) => {
          const date = new Date(gain.date);
          const gainMonth = date.getMonth();
          const gainYear = date.getFullYear();

          if (gainMonth === month && gainYear === yearSelected) {
            try {
              amountEntry += Number(gain.amount);
            } catch {
              throw new Error(
                'O valor de entrada é inválido, por favor, verifique o valor'
              );
            }
          }
        });

        let amountOutput = 0;

        expenses.forEach((expense) => {
          const date = new Date(expense?.date || '');
          const expenseMonth = date.getMonth();
          const expenseYear = date.getFullYear();

          if (expenseMonth === month && expenseYear === yearSelected) {
            try {
              amountOutput += Number(expense?.amount);
            } catch {
              throw new Error(
                'O valor de saída é inválido, por favor, verifique o valor'
              );
            }
          }
        });

        return {
          monthNumber: month,
          month: MONTHS_NAME_ARR[month].substr(0, 3),
          amountEntry,
          amountOutput,
        };
      }).filter((item) => {
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();
        return (
          (yearSelected === currentYear && item.monthNumber <= currentMonth) ||
          yearSelected < currentYear
        );
      }),
    [yearSelected]
  );

  const relationExpensevesRecurrentVersusEventual = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    expenses
      .filter((expense) => {
        const date = new Date(expense?.date || '');
        const year = date.getFullYear();
        const month = date.getMonth() + 1;

        return month === monthSelected && year === yearSelected;
      })
      .forEach((expense) => {
        if (expense?.frequency === 'recorrente') {
          return (amountRecurrent += Number(expense?.amount));
        }

        if (expense?.frequency === 'eventual') {
          return (amountEventual += Number(expense?.amount));
        }
      });

    const total = amountRecurrent + amountEventual;
    const calcPercents = (value, totalValue) =>
      Number(((value / totalValue) * 100).toFixed(1)) | 0;
    const recurrentPercent = calcPercents(amountRecurrent, total);
    const eventualPercent = calcPercents(amountEventual, total);

    return [
      {
        name: 'Recorrentes',
        amount: amountRecurrent,
        legend: formatCurrency(amountRecurrent),
        percent: recurrentPercent,
        color: colors.danger,
        type: 'recurrent',
      },
      {
        name: 'Eventuais',
        amount: amountEventual,
        legend: formatCurrency(amountEventual),
        percent: eventualPercent,
        color: colors.warning,
        type: 'eventual',
      },
    ];
  }, [monthSelected, yearSelected]);

  const relationGainsRecurrentVersusEventual = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    gains
      .filter((gain) => {
        const date = new Date(gain.date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;

        return month === monthSelected && year === yearSelected;
      })
      .forEach((gain) => {
        if (gain.frequency === 'recorrente') {
          return (amountRecurrent += Number(gain.amount));
        }

        if (gain.frequency === 'eventual') {
          return (amountEventual += Number(gain.amount));
        }
      });

    const calcPercents = (value, totalValue) =>
      Number(((value / totalValue) * 100).toFixed(1)) | 0;

    const total = amountRecurrent + amountEventual;
    const recurrentPercent = calcPercents(amountRecurrent, total);
    const eventualPercent = calcPercents(amountEventual, total);

    return [
      {
        name: 'Recorrentes',
        amount: amountRecurrent,
        legend: formatCurrency(amountRecurrent),
        percent: recurrentPercent,
        color: colors.danger,
        type: 'recurrent',
      },
      {
        name: 'Eventuais',
        amount: amountEventual,
        legend: formatCurrency(amountEventual),
        percent: eventualPercent,
        color: colors.warning,
        type: 'eventual',
      },
    ];
  }, [monthSelected, yearSelected]);

  const handleMonthSelected = (month: string) => {
    try {
      setMonthSelected(Number(month));
    } catch (error) {
      throw new Error(
        `Valor inválido do mês. Aceito somente de 0 - 23: ${error}`
      );
    }
  };

  const handleYearSelected = (year: string) => {
    try {
      setYearSelected(Number(year));
    } catch (error) {
      throw new Error('Valor inválido do mês. Aceito somente de 0 - 23');
    }
  };

  return (
    <UiContainer>
      <ContentHeader title="Dashboard">
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

      <Content>
        <ContainerColorsCards>
          <ColorCard
            title="saldo"
            amount={totalBalance}
            description="atualizado com base nas entradas e saídas"
            icon="dollar"
            color="balance"
          />
          <ColorCard
            title="entradas"
            amount={totalGains}
            description="última movimentação em 18/07/2020 às 11h40"
            icon="arrowUp"
            color="entry"
          />
          <ColorCard
            title="saídas"
            amount={totalExpenses}
            description="última movimentação em 18/07/2020 às 11h40"
            icon="arrowDown"
            color="output"
          />
        </ContainerColorsCards>

        <MessageCard
          title={message.title}
          description={message.description}
          footerTxt={message.footerTxt}
          icon={message.icon}
        />

        <PieBox data={relationExpensesVersusGains} />

        <LineBox
          data={historyData}
          lineColorAmountEntry="#1bc5bd"
          lineColorAmountOutput="#8950fc"
        />

        <BarBox title="Entradas" data={relationGainsRecurrentVersusEventual} />
        <BarBox
          title="Saídas"
          data={relationExpensevesRecurrentVersusEventual}
        />
      </Content>
    </UiContainer>
  );
};

export default Dashboard;
