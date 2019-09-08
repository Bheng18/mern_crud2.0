import React, { Component } from 'react';
import {
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink,
        UncontrolledDropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem 
} from 'reactstrap';
import { Paths } from '../enums'

class AppNavbar extends Component{
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
           isOpen:!this.state.isOpen        
        })
    }

    render(){
     return(
      <div>
        <Navbar color="light" light expand="md"> {/**color="white" className="bg-dark" style={{backgroundColor: '#095e75'}}*/}
          <NavbarBrand href={Paths.ITEMS}>Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar style={{color: '#f0f0f0'}}>
              <NavItem>
                <NavLink href={Paths.ITEMS}>Items</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/Bheng18/MERN-CRUD" target="_blank">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        </div>
       );
        
    }

}

export default AppNavbar;

