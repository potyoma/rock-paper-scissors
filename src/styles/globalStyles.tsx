import { createGlobalStyle } from "styled-components"
import Variables from "./variables"
import Animations from "./animations"

export const GlobalStyles = createGlobalStyle`
    ${Variables}

    :root {
        background: rgb(31,55,86);
        background: radial-gradient(circle, rgba(31,55,86,1) 0%, rgba(20,21,57,1) 100%);
        text-transform: uppercase;
    }

    ${Animations}
`
