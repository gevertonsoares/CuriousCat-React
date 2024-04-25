import styled from 'styled-components';
import img from '../../assets/banner.jpg'


export const Banner = styled.div`
    height: 60vh;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), ${`url(${img})`};
    background-size: cover;
    background-position: center;   
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;

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
            opacity: .7;
            margin-top: 0;
            margin-bottom: 1.25rem;
            font-size: 1.25rem;
            line-height: 1.4;
            color: #ffff;
        }
    }
`;