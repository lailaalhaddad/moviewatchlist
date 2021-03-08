// Styling
import { GlobalStyle, ThemeButton,MovieListWrapper } from "./styles";

import Home from "./components/Home";
import AddButton from "./components/buttons/AddButton"
import lightsymbol from "./components/Images/rebel.png"
import First_Order_logo from "./components/Images/yoda.png"
// Components
import WatchedMovieLists from "./components/WatchedMovieLists";
import UnwatchedMovieList from "./components/UnwatchedMovieList"
import { ThemeProvider } from "styled-components";



import { useState } from "react";


const theme = {
  light: {
    mainColor: "#484445", // main font color
    backgroundColor: "#B64419", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    
    mainColor: "#484445", // main font color
    backgroundColor: "#75934e", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");


  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
       
        {currentTheme === "light" ?<img src={First_Order_logo} height="40px" width="40px"/> :<img src={lightsymbol} height="40px" width="40px"/>  } 
      </ThemeButton>
      <Home />
      <AddButton/>
      <MovieListWrapper>
      <UnwatchedMovieList />
      <WatchedMovieLists />
  
    </MovieListWrapper>
    </ThemeProvider>
  );
}

export default App;
