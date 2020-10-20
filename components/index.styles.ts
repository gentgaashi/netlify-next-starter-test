import styled, { createGlobalStyle } from 'styled-components';

export const ContainerDiv = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
`;

export const Main = styled.main`
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
`;

export const Code = styled.main`
    background: #fafafa;
    border-radius: 5px;
    padding: 0.75rem;
    font-family: Menlo, Monaco, Lucida Console, Courier New, monospace;     
`;

export const Sa = styled.a`
    margin-right: 10px;    
`;

export const GlobalStyle = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    * {
        box-sizing: border-box;
    }
`;