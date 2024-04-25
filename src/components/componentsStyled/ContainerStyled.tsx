import styled from 'styled-components';

interface ContainerProps {
    $display: 'flex' | 'block';
    $alignItems?: 'center' | 'start' | 'end';
    $justifyContent?: 'center' | 'start' | 'end' | 'space-evenly' | 'space-around'| 'space-between';
    $direction?: 'row' | 'column';
    $reverse?: boolean;
    $fluid?: boolean;
    $wrap?: boolean;
    $height?: '200px' | '300px' | '400px' | '600px';
    $backgroundColor?: 'rgb(25, 25, 25)' | 'rgb(0, 0, 0)'
}

export const Container = styled.div<ContainerProps>`
    color: white;
    background-color: ${(props) => props.$backgroundColor};
    display: ${(props) => props.$display};
    flex-direction: ${(props) => props.$reverse ? `${props.$direction}-reverse`: props.$direction};
    align-items: ${(props) => props.$alignItems ?? 'stretch'};
    justify-content: ${(props) => props.$justifyContent ?? 'start'};
    max-width: ${(props) => props.$fluid ? '100%' : '1140px'};
    flex-wrap: ${(props) => props.$wrap ? 'wrap' : 'nowrap'};
    margin: 0 auto;
    height: ${(props) => props.$height};
    gap: 5px;
`;