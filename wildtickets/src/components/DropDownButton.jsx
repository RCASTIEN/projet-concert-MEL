import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class DropDownButton extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle className="btn-dropdown" caret>
          City
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Paris</DropdownItem>
          <DropdownItem>Lille</DropdownItem>
          <DropdownItem>Marseille</DropdownItem>
          <DropdownItem>Bordeaux</DropdownItem>
          <DropdownItem>Lyon</DropdownItem>
          <DropdownItem>Toulouse</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default DropDownButton;