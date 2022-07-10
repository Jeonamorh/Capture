import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`


*{
    padding:0px;
    margin:0px;
    box-sizing:border-box;
}
body{
    background-color:#1b1b1b;
    color:white;    
    font-family: 'Inter', sans-serif;
 
    h2{
        font-weight:lighter;
        font-size:3rem;

    }
   span{
       font-weight:bold;
       color:#23D997;
   }
    p{

        padding:3rem 0rem;
        color:#cdcdcd;
        line-height:150%;
    }
}
button{
    padding:0.7rem 1.2rem; 
    color:white;
    background-color:transparent;
    border:2px solid #23D997;
    font-size:0.7rem;
    font-weight:bold;
    cursor: pointer;
    transition:all 0.5s ease;
    &:hover{
        background-color:#23D997;
        border:2px solid white;

    }
}

`;

export default GlobalStyled;
