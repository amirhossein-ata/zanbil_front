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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// import _ from "lodash";
// import React, { Component } from "react";
// import { render } from "react-dom";
// import {
//   Container,
//   Icon,
//   Image,
//   Menu,
//   Sidebar,
//   Responsive
// } from "semantic-ui-react";
// import 'semantic-ui-css/semantic.min.css'

// const NavBarMobile = ({
//   children,
//   leftItems,
//   onPusherClick,
//   onToggle,
//   rightItems,
//   visible
// }) => (
//   <Sidebar.Pushable>
//     <Sidebar
//       as={Menu}
//       animation="overlay"
//       icon="labeled"
//       inverted
//       items={leftItems}
//       vertical
//       visible={visible}
//     />
//     <Sidebar.Pusher
//       dimmed={visible}
//       onClick={onPusherClick}
//       style={{ minHeight: "100vh" }}
//     >
//       <Menu fixed="top" inverted>
//         <Menu.Item>
//           <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
//         </Menu.Item>
//         <Menu.Item onClick={onToggle}>
//           <Icon name="sidebar" />
//         </Menu.Item>
//         <Menu.Menu position="right">
//           {_.map(rightItems, item => <Menu.Item {...item} />)}
//         </Menu.Menu>
//       </Menu>
//       {children}
//     </Sidebar.Pusher>
//   </Sidebar.Pushable>
// );

// const NavBarDesktop = ({ leftItems, rightItems }) => (
//   <Menu fixed="top" inverted>
//     <Menu.Item>
//       <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
//     </Menu.Item>
//     {_.map(leftItems, item => <Menu.Item {...item} />)}
//     <Menu.Menu position="right">
//       {_.map(rightItems, item => <Menu.Item {...item} />)}
//     </Menu.Menu>
//   </Menu>
// );

// const NavBarChildren = ({ children }) => (
//   <Container style={{ marginTop: "5em" }}>{children}</Container>
// );

// class NavBar extends Component {
//   state = {
//     visible: false
//   };

//   handlePusher = () => {
//     const { visible } = this.state;

//     if (visible) this.setState({ visible: false });
//   };

//   handleToggle = () => this.setState({ visible: !this.state.visible });

//   render() {
//     const { children, leftItems, rightItems } = this.props;
//     const { visible } = this.state;

//     return (
//       <div>
//         <Responsive {...Responsive.onlyMobile}>
//           <NavBarMobile
//             leftItems={leftItems}
//             onPusherClick={this.handlePusher}
//             onToggle={this.handleToggle}
//             rightItems={rightItems}
//             visible={visible}
//           >
//             <NavBarChildren>{children}</NavBarChildren>
//           </NavBarMobile>
//         </Responsive>
//         <Responsive minWidth={Responsive.onlyTablet.minWidth}>
//           <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
//           <NavBarChildren>{children}</NavBarChildren>
//         </Responsive>
//       </div>
//     );
//   }
// }

// const leftItems = [
//   { as: "a", content: "Home", key: "home" },
//   { as: "a", content: "Users", key: "users" }
// ];
// const rightItems = [
//   { as: "a", content: "Login", key: "login" },
//   { as: "a", content: "Register", key: "register" }
// ];

// const App = () => (
//   <NavBar leftItems={leftItems} rightItems={rightItems}>
//     <Image src="https://react.semantic-ui.com/assets/images/wireframe/paragraph.png" />
//   </NavBar>
// );

// render(<App />, document.getElementById("root"));
