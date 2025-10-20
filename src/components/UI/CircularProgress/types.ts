export type ICircularProgessType = 'success' | 'error';

export interface IProps {
  height?: number;
  timeDuration?: number;
  timeProgress?: number;
  width?: number;
  type?: ICircularProgessType;
}

export interface IPropsIconError {
  y1?: number;
  y2?: number;
  custom?: number;
}
