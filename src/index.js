import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import configureStore from './core/store/configureStore'
import AppRouter from './core/router/appRouter'
import 'semantic-ui-css/semantic.min.css'
import './views/styles/styles.scss'
const store = configureStore()
const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));


// import React from 'react';
// import ReactDOM from 'react-dom';
// import posed from 'react-pose';
// // import './styles.css';


// const Card = () =>(
//     <div>
//         <h4>
//             card header
//         </h4>
//         <p>
//             card text
//         </p>
//     </div>
// )
// const Box = posed.div({
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 }
//   });
  
// const boxStyle = {
//     width: '100px',
//     height: '100px',
//     background: '#ff1c68',
//     transformOrigin: '50% 50%'
//   }
  
// class Example extends React.Component {
//   state = { isVisible: true };


//   render() {
//     const { isVisible } = this.state;
//     return(
//          <Box 
//             style={boxStyle}  
//             pose={isVisible ? 'visible' : 'hidden'} 
//         >
//             <Card/> 
//         </Box>
//     )
//   }
// }

// ReactDOM.render(<Example />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
