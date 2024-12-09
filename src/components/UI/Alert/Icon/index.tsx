import { MdCheckCircle, MdError, MdInfo, MdWarning } from 'react-icons/md';

import { colors } from '../../../../styles/themes/general';

import type { ITypeAlert } from '../types';

export const AlertIcon = ({ type }: ITypeAlert) => {
  const types = {
    info: <MdInfo fill={colors.white} />,
    warning: <MdWarning fill={colors.white} />,
    success: <MdCheckCircle fill={colors.white} />,
    error: <MdError fill={colors.white} />,
  };

  return types[type] ?? <MdCheckCircle fill={colors.white} />;
};
