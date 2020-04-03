import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from 'components/books/Box';
import FiltersBar from 'components/books/FiltersBar';

const GridWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: props.books,
    };
  }

  componentDidUpdate(prevProps) {
    const { books } = this.props;

    if (prevProps.books.length !== books.length) {
      this.setState({ books });
    }
  }

  filterBooks = (value) => {
    const { books: initBooks } = this.props;

    if (!value) {
      this.setState({ books: initBooks });
      return;
    }

    const books = initBooks.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase()),
    );
    this.setState({ books });
  };

  render() {
    const { books } = this.state;

    return (
      <>
        <FiltersBar filterBooks={this.filterBooks} />
        <GridWrapperStyled>
          {books.map(({ id, title, author, image }) => (
            <Box title={title} author={author} image={image} key={id} />
          ))}
        </GridWrapperStyled>
      </>
    );
  }
}

Grid.propTypes = {
  books: PropTypes.array.isRequired,
};

export default Grid;
