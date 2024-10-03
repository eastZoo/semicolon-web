import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    shadow: {
      card: string;
    };
    colors: {
      primary: string;
      btnprimary: string;
      light: string;
      gray: string;
      dark: string;
      black: string;

      btnDisable: string;

      cardDefault: string;
      cardTheme: string;

      white: string;
      scrollBar: string;

      alternative: string;
    };
    text_colors: {
      black: string;
      gray: string;
      dark: string;
    };
  }
}
