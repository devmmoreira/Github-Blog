/// <reference types="vite/client" />

import "styled-components"
import { ThemeTokens } from "./theme/defaultTheme";

declare module "styled-components" {
    export interface DefaultTheme extends ThemeTokens {}
}
