import { createGlobalStyle } from 'styled-components'
import dogImg from '../img/dog-image.png'
const GlobalStyle = createGlobalStyle`


:root {
  --main-text: #2F2F2F;
  --secondary-text: #585757;
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
    margin: 0;
    padding: 0;
    margin-right: auto;
    margin-left: auto;
    font-family: 'Hind Siliguri', sans-serif;
font-family: 'Public Sans', sans-serif;
    /* overflow: hidden; */
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

.container {
    overflow: hidden;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
}

@media screen and (min-width: 480px) {
    .container {
        margin-left: auto;
        margin-right: auto;
        width: 480px;
    }
}

@media screen and (min-width: 768px) {
    .container {
        width: 100%;
        padding-right: 50px;
        padding-left: 50px;
    }
}
@media screen and (min-width: 1280px) {
    .container {
        width: 100%;
        padding-left: 150px;
        padding-right: 150px;
        padding-bottom: 78px;
    }
}

.link {
  text-decoration: none;
}
.list {
  padding: 0;
  margin: 0;
  list-style: none;
}

`
export default GlobalStyle
