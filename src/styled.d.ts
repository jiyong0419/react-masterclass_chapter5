import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mainColor: string;
    oppositeColor: string;
    accentColor: string;
  }
}
