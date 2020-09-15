import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
    --primary: #3d405b;
    --secondary: #81b29a;
    --sand: #f4f1de;
    }

    * {
        box-sizing: border-box;
    }

    body {
        height: 100%;
        margin: 0;
        font-family:sans-serif;
    }
`
