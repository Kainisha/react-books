import React from 'react';
import styled from 'styled-components';
import BoxButtons from 'components/books/BoxButtons';

const BoxWrapperStyles = styled.div`
  min-width: 15rem;
  border: 2px solid gray;
  height: 20rem;
  padding: 1rem;
  display: grid;
  grid-template-rows: 8rem 1fr;
  grid-row-gap: 1rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    box-shadow: 0px 0px 10px 0px black;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    z-index: -1;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const ImageWrapperStyled = styled.a`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageStyled = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const ContentStyled = styled.div`
  width: 100%;
  height: 100%;
`;

const TitleStyled = styled.div`
  font-size: 1.3rem;
  color: darkgrey;
  font-weight: 600;
  border-top: 1px solid lightgrey;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
`;

const AuthorStyled = styled.div`
  color: lightgrey;
  margin-top: 1rem;
`;

class Box extends React.Component {
  handleCartClick = () => {
    console.log('test cart');
  };

  handleWhishlistClick = () => {
    console.log('test whishlist');
  };

  render() {
    const { title, author, image } = this.props;

    return (
      <BoxWrapperStyles>
        <ImageWrapperStyled href="/">
          <ImageStyled src={image} />
        </ImageWrapperStyled>
        <ContentStyled>
          <BoxButtons
            onCartClick={() => this.handleCartClick()}
            onWhishlistClick={() => this.handleWhishlistClick()}
          />
          <TitleStyled>{title}</TitleStyled>
          <AuthorStyled>{author}</AuthorStyled>
        </ContentStyled>
      </BoxWrapperStyles>
    );
  }
}

export default Box;
