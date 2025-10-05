import styled from 'styled-components';
import { colors } from '@/styles/themes/general';
// import { rgba } from 'polished';
import type { IDropdownProps } from './types';

// export const Container = styled.select`
//   background-color: ${(props) => props.theme.input.bg};
//   border: 1px solid ${(props) => props.theme.input.borderColor};
//   border-radius: ${(props) => props.theme.general.bordersRadius.normal};
//   color: ${(props) => props.theme.textColor};
//   height: ${(props) => props.theme.general.space[9]};
//   padding: ${(props) => props.theme.general.space[1]}
//     ${(props) => props.theme.general.space[2]};
//   width: 100%;

//   &:focus {
//     border-color: ${(props) => props.theme.general.colors.primary};
//     box-shadow: 0 0 0 0.2rem
//       ${(props) => rgba(props.theme.general.colors.primary, 0.25)};
//   }

//   &.error {
//     border-color: ${(props) => props.theme.general.colors.danger};
//     color: ${(props) => props.theme.general.colors.danger};
//   }
// `;

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  background-color: ${colors.primary};
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const DropdownMenu = styled.div<Partial<IDropdownProps>>`
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  transition: opacity 0.3s ease;

  ${({ position }) =>
    position === 'top' &&
    `
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
  `};

  ${({ position }) =>
    position === 'bottom' &&
    `
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  `};
`;
