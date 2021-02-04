import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyes = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    h1{
        font-size:40px;
    }
    h2{
        font-size:20px;
    }
    body{
        font-family:--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:12px;
        padding: 50px 30px;
    }   
`;
export default globalStyes;
