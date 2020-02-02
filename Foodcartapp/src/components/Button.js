import styled from 'styled-components'
 export const ButtonContainer= styled.button
`
cursor:pointer;
padding:0.2rem 0.5rem;
text-transform:capitalize;
font-size:1.43rem;
background:transparent;
border:0.2rem solid;
font-color:white;
border-color:lightblue;
border-radius:10%;

transition:all 0.5s ease-in-out;
&:hover{
    background:lightblue
}
&:focus{
    outline:none
}`
;
