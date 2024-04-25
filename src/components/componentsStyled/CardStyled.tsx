import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    max-width: 400px;
    height: 450px;
    padding: 24px;
    border: 2px solid white;
    border-radius: 20%;
    margin: 1.5rem ;

    div {
        width: 80%;
        text-align: center;

        h1 {
            font-size: calc(1.5rem + 1.5vw); 
            margin-top: 0;
            margin-bottom: .5rem;
            font-weight: bolder;
            line-height: 1.2;
            color: #ffffff;
        }

        p {
            opacity: .9;
            margin-top: 0;
            margin-bottom: 1.25rem;
            font-size: 1.25rem;
            line-height: 1.5;
            color: #ffff;
        }
    }
`
