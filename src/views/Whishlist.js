import React from 'react';
import { connect } from 'react-redux';
import {
  fetchWhishlist as fetchWhishlistAction,
  removeWhishlist as removeWhishlistAction,
} from 'actions';
import MainTemplate from 'templates/MainTemplate';
import List from 'components/whishlist/List';

class Whishlist extends React.Component {
  componentDidMount() {
    const { fetchWhishlist, whishlist } = this.props;

    if (whishlist.length !== 0) {
      return;
    }

    fetchWhishlist();
  }

  handleDelete = (id) => {
    const { removeWhishlist } = this.props;
    removeWhishlist(id);
  };

  render() {
    const { whishlist } = this.props;
    return (
      <MainTemplate title="Whishlist">
        <List books={whishlist} onDelete={this.handleDelete} />
      </MainTemplate>
    );
  }
}

const mapStateToProps = (state) => {
  const { whishlist } = state;
  return { whishlist };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWhishlist: () => dispatch(fetchWhishlistAction()),
    removeWhishlist: (id) => dispatch(removeWhishlistAction(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Whishlist);
