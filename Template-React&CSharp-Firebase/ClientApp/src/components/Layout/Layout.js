import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from "./navmenu/NavMenu";
import { Sidebar } from './sidebar/Sidebar';


export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <Sidebar />
        <Container tag="main">
          {this.props.children}
        </Container>
      </div>
    );
  }
}
