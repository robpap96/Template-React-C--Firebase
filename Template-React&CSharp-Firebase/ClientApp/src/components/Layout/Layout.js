import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from "./navmenu/NavMenu";
import { SideBar } from './sidebar/Sidebar';


export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <SideBar />
        <Container tag="main">
          {this.props.children}
        </Container>
      </div>
    );
  }
}
