import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "../asset/css/react-draft-wysiwyg.css";

const globalStyles = createGlobalStyle`
    ${reset};
    
    @import url("https://use.fontawesome.com/releases/v5.0.13/css/all.css");
    @import url("https://cdnjs.cloudflare.com/ajax/libs/antd/3.10.7/antd.min.css");
    @import url('https://fonts.googleapis.com/css?family=Nanum+Gothic|Playfair+Display|Do+Hyeon|Song+Myung|Thasadith|Nanum+Myeongjo|Nanum+Pen+Script');
    @import url("//cdn.jsdelivr.net/font-iropke-batang/1.2/font-iropke-batang.css");

    a{
        color: white;
        text-decoration: none !important;

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
    input{
        &:focus{
            outline: none;
        }
    }
    .demo-editor {
        height: 30rem !important;
        border: 1px solid #F1F1F1 !important;
        padding: 5px !important;
        border-radius: 2px !important;
    }
    .ant-btn-sm{
        font-size: 0.8rem;
    }
    .ant-dropdown-menu-item{
        font-size: 0.8rem;
    }
    h1 { 
    display: block;
    font-size: 2em;
    margin-top: 0.67em;
    margin-bottom: 0.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
    }h2 {
    display: block;
    font-size: 1.5em;
    margin-top: 0.83em;
    margin-bottom: 0.83em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
    }h3 { 
    display: block;
    font-size: 1.17em;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
    }h4 { 
    display: block;
    font-size: 1em;
    margin-top: 1.33em;
    margin-bottom: 1.33em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
    }h5 { 
    display: block;
    font-size: .83em;
    margin-top: 1.67em;
    margin-bottom: 1.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
    }h6 { 
    display: block;
    font-size: .67em;
    margin-top: 2.33em;
    margin-bottom: 2.33em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
    }
    #content {
        img{
            display: block;
            margin-left: auto;
            margin-right: auto;
            max-width: 100%;
            height: auto;
        }
    }
    p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    .ant-carousel{
        width: 1200px;
        height: 675px;
        position: absolute;
        top: -1rem;   
        left: 50%;
        transform: translateX(-50%);
        background-color: 
      rgba(20, 24, 28, 1);
    }
    .slick-slider {
        height: 100%;
    }
    .slick-list {
        height: 100%;
    }
    .ant-carousel .slick-vertical .slick-slide{
        border: none;
    }
`;

export default globalStyles;
