import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {SketchPicker} from 'react-color'
import onClickOutside from 'react-onclickoutside';

// This was put in because 3rd party library react-color doesn't yet cater for customized color of child component <SketchField> which contains HEX/RGB input text box
// Issue raised: https://github.com/casesandberg/react-color/issues/631

const StyledPicker = styled.div`
  .sketch-picker {
    span {
      color: #6A7485 !important;
      font-family: ff-clan-web-pro, 'Helvetica Neue', Helvetica, sans-serif !important;
    }
    input {
      text-align: center;
      font-family: ff-clan-web-pro, 'Helvetica Neue', Helvetica, sans-serif !important;
      background-color: #3A414C !important;
      color: #A0A7B4 !important;
      border-color: #3A414C !important;
      box-shadow: none !important;
    }
  }
`;

class CustomPicker extends Component {
  static propTypes = {
    color: PropTypes.string,
    onChange: PropTypes.func,
    onSwatchClose: PropTypes.func
  };

  handleClickOutside = e => {
    this.props.onSwatchClose();
  };

  render() {
    const {color, onChange} = this.props;

    return (
      <StyledPicker>
        <SketchPicker
          color={color}
          onChange={onChange}
          disableAlpha={true}
          presetColors={[]}
          styles={{
            picker: {
              width: '200px',
              padding: '10px 10px 8px',
              boxSizing: 'initial',
              background: '#29323C'
            },
            controls: {
              display: 'flex',
              color: "#FFF"
            }
          }}
        />
      </StyledPicker>
    );
  }
}

export default onClickOutside(CustomPicker)