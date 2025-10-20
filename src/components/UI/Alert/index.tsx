import { useState, useEffect } from 'react';

import { bordersRadius, colors } from '@/styles/themes/general';

import { UiCloseButton } from '../CloseButton';

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
  const [alert, setAlert] = useState<string>(message);

  useEffect(() => {
    setAlert(message);
  }, [message]);

  const handleClose = (e: MouseEvent) => {
    e.preventDefault();
    setAlert('');
  };

  return (
    alert && (
      <AlertContainer
        alignItems="center"
        borderRadius={bordersRadius.normal}
        color={colors.black}
        display="flex"
        justifyContent="space-between"
        overflow="hidden"
        pl={3}
        pr={1}
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
          <UiCloseButton onClick={handleClose} color={colors.white} />
        )}
      </AlertContainer>
    )
  );
};
