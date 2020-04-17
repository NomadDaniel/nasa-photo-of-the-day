import styled from 'styled-components'

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  &:hover {
  background-color: black;
  color: white;
`;

// const Button = styled.button`
//     padding: 6px 10px;
//     margin: 5px;
//     border: none;
//     border-radius: 3px;
//     color: white;

//     ${props => (props.type === 'primary' ? `background: #2196f3;` : null)}
//   `;

// Button.defaultProps = {
//   theme: {
//     main: "palevioletred"
    
//    }
// }

// // Define what props.theme will look like
// const theme = {
//   main: "mediumseagreen"
// };
// // render(
// //   <div>
// //     <Button>Normal</Button>
// //     <ThemeProvider theme={theme}>
// //       <Button>Themed</Button>
// //     </ThemeProvider>
// //   </div>
// // );
// const Button = styled.button`
//   color:  ${props => props.textColor ? props.textColor : 'inherit'};
//   background-color: ${props => props.color ? props.color : 'inherit'};
//   text-transform: ${props => props.scream ? 'uppercase' : 'inherit'};
//   width: ${pr => pr.width ? pr.width + 'px': 'inherit'};
//   height: 35px;
//   border-radius: 8px;
//   margin: 4px;

//   &:hover {
//     background-color: green;
//   }
// `

export default Button
