import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div``;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const BoldItem = styled.span`
  font-weight: bold;
`;
const Item = styled.span``;

const Message = styled.div``;

const CoinsPresenter = ({ result, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Container>
        {result &&
          result.length > 0 &&
          result.map((item, index) => (
            <ItemContainer key={index}>
              <BoldItem>#{item.rank} </BoldItem>
              <Item>
                {item.name}/{item.symbol}
              </Item>
              {/* <Item>{item.quotes.USD.price}</Item> */}
            </ItemContainer>
          ))}
        {error && <Message text={error} color="#e74c3c" />}
      </Container>
    </>
  );

CoinsPresenter.propTypes = {
  result: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default CoinsPresenter;
