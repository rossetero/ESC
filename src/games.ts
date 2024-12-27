import { css } from "@emotion/react";

export const GamesStyle = css`



html,
body,
div,
span,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}

body {
    line-height: 1;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}
/*===================STYLE RESET===================*/

/*===================COMMON STYLE===================*/
body {
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
}

a {
    text-decoration: none;
    color: #000000
}

.red_letter {
    color: #C00000
}
/*===================COMMON STYLE===================*/

/*===================HEADER STYLES===================*/
.header {
    padding: 0% 10%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    background-color: #D9D9D9;
    align-items: center;
    font-size: 24px;
}

.logo {
    font-weight: 900;
    font-size: 96px;
    letter-spacing: 0.05em;
    height: 106px;
}

.nav-menu {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    list-style-type: none;
    padding: 0;
}

.nav-menu li {
    margin-right: 70px;
}
/*===================HEADER STYLES===================*/

/*===================FOOTER STYLES===================*/
.footer {
    padding: 0% 10%;
    height: 204px;
    background-color: #D9D9D9;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.copyright {
    padding-left: 10px;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 0.05em;
    color: rgba(0, 0, 0, 0.5);
}

.footer .nav-menu {
    display: block;
}

.footer .nav-menu li {
    padding: 10px;
    margin: auto;
}
/*===================FOOTER STYLES===================*/

/*===================MAIN STYLES===================*/
.main {
    margin: 0% 10%;
}
/*===================MAIN STYLES===================*/

/*===================GAMES UNIQUE STYLES===================*/
.games {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    margin-top: 3%;
    margin-bottom: 3%;
}

.games h2 {
    font-weight: 900;
    font-size: 48px;
    letter-spacing: 0.05em;
    color: #000;
}

.one_time {
    border-style: solid;
    border-color: #D9D9D9;
    border-width: 5px;
}

.games div {
    margin: 3% 3%;
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #D9D9D9;
    border-radius: 21px;
}

.games .one_time {
    background-color: #ffffff;
    border-style: solid;
    border-color: #D9D9D9;
    border-width: 5px;
}

.games .flex-item {
    margin-bottom: 35px;
}

.descr {
    margin-bottom: 5%;
}

.gamesheader {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.gamesheader div {
    text-align: center;
    margin-bottom: 30px;
}

.gamesheader .logo {
    font-weight: 900;
    font-size: 96px;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
}

.gamesheader2 .logo {
    font-weight: 900;
    font-size: 44px;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
}

.gamesheader2 .logo .red_letter {
    font-size: 44px;
    margin-left: 20px;
}

.gamesheader .logo .red_letter {
    font-size: 96px;
    margin-left: 20px;
}

.gamesheader .image-container {
    margin-left: auto;
}

:root {
    --text-red: #C00000;
    --secondary-color: #D9D9D9;
    --default-font-size: 1.5vw;
}

@font-face {
    font-family: 'Monserrat';
    src: url('../assets/fonts/Montserrat-VariableFont_wght.ttf') format('tff'),
        url('../assets/fonts/Montserrat-Italic-VariableFont_wght.ttf') format('tff');
    /* Дополнительные форматы шрифтов, если есть */
}

body {
    font-family: 'Monserrat', sans-serif;
    font-size: var(--default-font-size);
    font-weight: 500;
}

`;