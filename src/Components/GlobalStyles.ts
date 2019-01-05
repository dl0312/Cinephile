import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    @import url("https://use.fontawesome.com/releases/v5.0.13/css/all.css");
    @import url("https://cdnjs.cloudflare.com/ajax/libs/antd/3.10.7/antd.min.css");
    @import url('https://fonts.googleapis.com/css?family=Nanum+Gothic|Do+Hyeon|Song+Myung|Thasadith|Nanum+Myeongjo|Nanum+Pen+Script');
    @import url("//cdn.jsdelivr.net/font-iropke-batang/1.2/font-iropke-batang.css");

    a{
        color: white;
        text-decoration:none;
        &:hover{
            color: MediumTurquoise;
        }
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family: 'Nanum Gothic', sans-serif;
        font-size:12px;
        background-color:#14181C;
        color:white;
    }
`;

export default globalStyles;
