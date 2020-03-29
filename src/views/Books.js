import React from 'react';
import { connect } from 'react-redux';
import { fetchBooks as fetchBooksAction } from 'actions';
import MainTemplate from 'templates/MainTemplate';

import Grid from 'components/books/Grid';

class Books extends React.Component {
  componentDidMount() {
    const { fetchBooks } = this.props;
    fetchBooks();
  }

  render() {
    const { books } = this.props;

    return (
      <MainTemplate>
        <Grid books={books} />
      </MainTemplate>
    );
  }
}

const mapStateToProps = (state) => {
  const { books } = state;
  return { books };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooks: () => dispatch(fetchBooksAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
