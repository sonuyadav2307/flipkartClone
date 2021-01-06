import styled from "styled-components";

export const ProductCardWrapper = styled.div`
    width:250px;
    height: 400px;
    position: relative;
    display:flex;
    align-items:center;
   
        bottom: 0px;
    flex-direction:column;
    &:hover{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .disimage{
        display:flex;
    align-items:center; 
    flex-direction:column;
    position:absolute;
    bottom:0px
  
    }
    img {
        max-width: 100%;
        max-height: 50%;
        object-fit: contain;
       margin-top:10px;

  
    }
    
    .descriptionWrapper{
        width: 100%;
        margin-inline:auto;
        width:90%;
       position:absolute;
       bottom:0px;

    }
    .price1{
        display:flex;
        .mainP{
            font-weight:1000;
            font-size:20px;
        }
        .off{
            color:#033b03;
        }
    }
    h3{
        font-size:24px
    }
`
export const ButtonWrapper = styled.div`
    width: 250px;
    display:flex;
    height:40px;
    button{
        width:50%;
        display:flex;
        align-items:center;
        color:white;
        justify-content:center;
        border: none;
    }
    .buy1{
        background-color:blue;
    }
    .add{
        background-color:#0b440b;
    }
`
export const MainCardWrapper = styled.div`
margin-bottom:100px
`