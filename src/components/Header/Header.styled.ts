import styled from 'styled-components';

export const HeaderComp = styled.header`
    margin: 0 0 10px 0;
    padding: 15px 30px 15px 30px;
    background-color: #ffb347;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    color: #112b6b;
    h1 {
        display: flex;
        align-items: center;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 20px;
        svg {
            margin: 0 0 0 10px;
            width: 150px;
            height: 60px;
        }
    }
`
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`
