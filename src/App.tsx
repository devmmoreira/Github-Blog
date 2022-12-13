import { ThemeProvider } from "styled-components";
import { AppRoutes } from "./routes";
import { GlobalStyles } from "./styles/globalStyles";

import { DefaultTheme } from "./theme/defaultTheme";

export const App: React.FC = () =>(
  <ThemeProvider theme={ DefaultTheme }>
    <GlobalStyles />
    <AppRoutes />
  </ThemeProvider>
)
