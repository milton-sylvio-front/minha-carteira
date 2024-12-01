import { MdCheckCircle, MdError, MdInfo, MdWarning } from 'react-icons/md';

import general from '../../../../styles/themes/general';

import type { IAlertIcon } from './types';

export const AlertIcon = ({ type }: IAlertIcon) => {
  const setTypeIcon = (type: string) => {
    const types = {
      info: <MdInfo fill={general.colors.info} />,
      warning: <MdWarning fill={general.colors.warning} />,
      success: <MdCheckCircle fill={general.colors.success} />,
      error: <MdError fill={general.colors.danger} />,
    };

    return types[type] ?? null;
  };

  return setTypeIcon(type);
};
