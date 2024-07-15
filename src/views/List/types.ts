export interface IProps {
  amount: number
  date: string
  description: string
  frequency: string
  type: string
}

export interface IData {
  id: string
  description: string
  amountFormatted: string
  frequency: string
  dateFormatted: string
}
