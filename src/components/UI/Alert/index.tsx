import { useState, useEffect } from 'react';

import { UiCloseButton } from '../CloseButton';

import general, { colors } from '../../../styles/themes/general';

import { AlertIcon } from './Icon';

import type { IAlert } from './types';
import { AlertContainer } from './styles';
import { Box } from '../Box/styles';

export const UiAlert = ({
  type = 'success',
  closeBtn = false,
  message = '',
  ...rest
}: IAlert) => {
  const [alert, setAlert] = useState<string>('');

  useEffect(() => {
    setAlert(message);
  }, [message]);

  const handleClose = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setAlert('');
  };

  return (
    alert && (
      <AlertContainer
        alignItems="center"
        borderRadius={general.bordersRadius.normal}
        color={colors.black}
        display="flex"
        justifyContent="space-between"
        overflow="hidden"
        px={3}
        py={1}
        position="relative"
        type={type}
        width="100%"
        {...rest}
      >
        <Box display="flex" alignItems="center">
          <AlertIcon type={type} />
          {message}
        </Box>

        {closeBtn && (
          <UiCloseButton onClick={handleClose} color={general.colors.white} />
        )}
      </AlertContainer>
    )
  );
};
