import { css } from "styled-components"

const Variables = css`
  :root {
    font-family: "Barlow Semi Condensed", sans-serif;

    // Colors
    --white: #faf8fb;
    --outline: hsl(217, 16%, 45%);

    --dark-text: hsl(229, 25%, 31%);
    --score: hsl(229, 64%, 46%);

    --scissors-gradient: radial-gradient(circle, rgba(236,158,14,1) 0%, rgba(236,169,34,1) 100%);
    --paper-gradient: radial-gradient(circle, rgba(72,101,244,1) 0%, rgba(86,113,245,1) 100%);
    --rock-gradient: radial-gradient(circle, rgba(220,46,78,1) 0%, rgba(221,64,93,1) 100%);
    --lizard-gradient: radial-gradient(circle, rgba(131,79,227,1) 0%, rgba(140,93,229,1) 100%);
    --cyan-gradient: radial-gradient(circle, rgba(64,185,206,1) 0%, rgba(82,190,209,1) 100%);
  }
`

export default Variables
