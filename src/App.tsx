import { ThemeProvider } from "styled-components";
import { PostsProvider } from "./context/posts";
import { AppRoutes } from "./routes";
import { GlobalStyles } from "./styles/globalStyles";

import { DefaultTheme } from "./theme/defaultTheme";

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify";

export const App: React.FC = () =>(
  <ThemeProvider theme={ DefaultTheme }>
    <GlobalStyles />
    <PostsProvider>
      <AppRoutes />
    </PostsProvider>
    <ToastContainer position="top-right" autoClose={5000} closeOnClick theme="colored"/>
  </ThemeProvider>
)
