import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class DropDownButton extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      value: '',
      dropdownOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  handleClick(event) {
    event.preventDefault()
    this.setState({ value: event.target.value }, () => {
      this.props.filterPlace(this.state.value)
    }
    )
  }
  render() {
    return (
      <Dropdown onChange={this.handleClick} value={this.state.value} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle className="btn-dropdown" caret>
          City
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem value="28909">Paris</DropdownItem>
          <DropdownItem value="28886">Lille</DropdownItem>
          <DropdownItem value="156979">Marseille</DropdownItem>
          <DropdownItem value="28851">Bordeaux</DropdownItem>
          <DropdownItem value="28889">Lyon</DropdownItem>
          <DropdownItem value="28930">Toulouse</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default DropDownButton;