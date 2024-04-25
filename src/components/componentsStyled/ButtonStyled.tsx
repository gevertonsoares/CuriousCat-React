import styled from 'styled-components';
 
export const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #883201;
    background-color: #c88500; 
    transition: background-color 0.3s ease;

    
    &:hover {
        background-color: #883201;
        color: #c88500; 
    }
    
    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2); 
    }

    
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
