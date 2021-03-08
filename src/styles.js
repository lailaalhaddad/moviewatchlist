import styled, { createGlobalStyle } from "styled-components";
import three from "./components/Images/3.gif"
export const Description = styled.h4`
  text-align: center;
`;

export const GlobalStyle = createGlobalStyle`

  body {
    background-image: url(${three});
    height:100%;
    width:100%;
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};

    
  }
`;

export const ListWrapper = styled.div`

 
  justify-content: center;
  padding: 0.5rem;
  
  /* margin: 1rem auto; */
  display:inline-block;
  width: 80%;
`;
export const ButtonWrapper = styled.div`

  align-items: right;
  justify-content: right;
  margin-left:1px;
  padding-left: 27rem;
  /* margin: 1rem auto; */
  display:inline-block;
  width: 80%;
`;

export const ProductWrapper = styled.div`
 color: white;
  margin: 2px;
  padding:10px;
  font-family:monospace;
  border-style: solid;
  border-color:#1d1d1d;
  opacity: 0.8;
  font-size:18px;
background-color:  ${(props) => props.theme.backgroundColor};
align-items:block;

`;

export const SearchBarStyled = styled.input`
    font-family:monospace;
    
  font-size:larger;
  margin:1px;
padding:10px;
 
  font-size:larger;
  background-color:#f2e9e4;
  color: ${(props) => props.theme.mainColor};
  display:  table-column-group;
  opacity: 0.9;
  height:40px;
  width: 100%;
`;
export const CreateBarStyled = styled.input`
  font-family:Andale Mono, monospace;

 background-color:#f2e9e4;
  color: ${(props) => props.theme.mainColor};
  margin: 1rem auto;
  display:  table-column-group;
  font-size:larger;
  height:45px;
  width: 50%;

`
export const CreateButtonWrapper= styled.div`
align-items: left;
direction: ltr;

  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;

`

export const ThemeButton = styled.button`
  font-size: 1em;
  margin-left: 1em;
  padding: 0.5em 1em;
  border-radius: 100px;
  background-color: ${(props) => props.theme.mainColor};
  color:whitesmoke;
`;

export const Title = styled.h1`
  text-align: center;
  margin-left:10em;
  margin-right:10em;
  font-family:Andale Mono, monospace;
  background-color:#1d1d1d;
  opacity:0.7;
  font-style:bold;
  font-size:50px;
  padding:0.5em 1em;
  
  
  color: ${(props) => props.theme.backgroundColor};
  
`;
export const MovieListWrapper = styled.div`
display: flex;


`;


export const Button=styled.button`
align-self:right;
display:right;

`;
export const DeleteButtonStyled = styled.button`
  font-size: 1em; 
  margin: 1em;
  padding: 0.5em 1em;
  border-radius:1009px;
  opacity: 0.9;
  display: inline;
  direction: row-reverse;
  background-color: ${(props) => props.theme.mainColor};

  color: ${(props) => props.theme.red};
`;
export const CounterDivStyled= styled.div`
margin-right:520px;
opacity:0.7;
border-radius:10px;
color:whitesmoke;
font-family:Andale Mono, monospace;

  background-color: ${(props) => props.theme.mainColor};


`