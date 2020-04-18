import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import _debounce from 'lodash/debounce';

const TextWrapperStyled = styled.div`
  position: relative;
  width: 20rem;
  height: 2rem;

  svg {
    position: absolute;
    right: 1rem;
    top: 0.3rem;
  }
`;

const TextStyled = styled.input`
  background: white;
  border: 1px solid lightgrey;
  color: grey;
  width: 100%;
  height: 100%;
  padding: 0 0.5rem;
`;

class Text extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    const { onChange } = this.props;
    this.servicesValue = _debounce(onChange, 500);
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    this.servicesValue(event.target.value);
  };

  render() {
    const { search, placeholder } = this.props;
    const { value } = this.state;

    return (
      <TextWrapperStyled>
        <TextStyled
          type="text"
          onChange={this.handleChange}
          value={value}
          placeholder={placeholder}
        />
        {search && <SearchIcon />}
      </TextWrapperStyled>
    );
  }
}

Text.propTypes = {
  search: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Text.defaultProps = {
  search: false,
  placeholder: 'text',
  onChange: () => {},
};

export default Text;
