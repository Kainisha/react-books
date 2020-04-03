import { createGlobalStyle } from 'styled-components';
import 'bulma/css/bulma.css';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap&subset=latin-ext');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: "Lato", sans-serif;
    }

    .box.box {
        background: yellow;
    }
`;

export default GlobalStyle;
