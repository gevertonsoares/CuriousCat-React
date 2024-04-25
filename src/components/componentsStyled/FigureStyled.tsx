import styled from 'styled-components';

interface FigureProps {
    $img: string;
}

export const Figure = styled.figure<FigureProps>`
    background-image: ${props => `url(${props.$img})`};
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    margin: 0px;
`;