import { ThemeProvider, createGlobalStyle } from "styled-components"

const theme ={
    colors: {
      title:'green',
      task:'orange'
    },
    
  }

  const GlobalStyle = createGlobalStyle`
  body {
   background-color: black;
  }`

export const Theme =({children}) => {
    return (
        <ThemeProvider theme = {theme}>
        <GlobalStyle/>
            {children}
        </ThemeProvider>
    )
}