import styled from "styled-components";

export const Container = styled.div` 
    background-color: #24282f;

    color: #fff;

    min-height: 100vh;

    >button{
        border: 0;

        padding: 0.5rem;

        margin: 1rem .5rem 0 1rem;

        cursor: pointer;

        transition: all ease .2s;

        &:hover{
           opacity: .7;
        }
    }
`

export const Map = styled.div`
    width: 480px;
    height: 480px;

    background-image: url('./assets/map.png');
    background-position: left top;
    background-size: 100%;
`

