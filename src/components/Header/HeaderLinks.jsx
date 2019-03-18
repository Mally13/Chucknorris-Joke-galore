import React, { Component } from "react";
import { NavItem, Nav, Col} from "react-bootstrap";
//import { MDBCol } from "mdbreact";


class HeaderLinks extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
          <Col md="36">
           <input className="form-control" type="text" border="5" placeholder="Search" aria-label="Search" />
          </Col>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default HeaderLinks;
