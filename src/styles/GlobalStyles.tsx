import { createGlobalStyle } from 'styled-components';
import { fontSizes, fontWeights, colors } from '@/styles/themes/general';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${(props) => props.theme.backoundColor};
    color: ${(props) => props.theme.textColor};
    font-size: ${fontSizes[2]};
  }

  html,
  body,
  #root {
    height: 100%;
    overflow-x: hidden;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }

  a,
  button,
  select {
    cursor: pointer;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    padding: 0;
    line-height: inherit;
    color: inherit;
  }

  strong,
  .strong {
    font-weight: ${fontWeights.bold};
  }

  input,
  textarea,
  select {
    background-image: none;
    box-sizing: border-box;
    outline: none;
    font-family: inherit;
  }
  input,
  textarea {
    -webkit-appearance: none;
    appearance: none;
  }

  button,
  input[type="button"] {
    border: 0;
    outline: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${fontWeights.bold};
  }

  h1 {
    font-size: ${fontSizes[5]};
  }

  a {
    color: ${colors.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .text-center {
    text-align: center;
  }

   @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
  }

  @keyframes ping {
    75%, 100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  @keyframes bounce {
    0%,100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8,0,1,1);
    }

    50% {
      transform: none;
      animation-timing-function: cubic-bezier(0,0,0.2,1);
    }
  }

  @keyframes bg-position {
    from {
      background-position: 200% 0;
    }

    to {
      background-position: -200% 0;
    }
  }
`;
