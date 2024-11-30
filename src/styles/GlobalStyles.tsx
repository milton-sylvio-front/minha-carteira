import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${(props) => props.theme.backoundColor};
    color: ${(props) => props.theme.textColor};
    font-size: ${(props) => props.theme.general.fontSizes[2]};
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
    font-weight: ${(props) => props.theme.general.fontWeights.bold};
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
    font-weight: ${(props) => props.theme.general.fontWeights.bold};
  }

  h1 {
    font-size: ${(props) => props.theme.general.fontSizes[5]};
  }

  a {
    color: ${(props) => props.theme.general.colors.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .text-center {
    text-align: center;
  }
`;
