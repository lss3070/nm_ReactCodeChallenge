import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div``;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const TitleITem = styled.div`
  font-weight: bold;
`;
const Item = styled.div`
  margin-top: 15px;
`;
const Link = styled.a`
  margin-top: 15px;
  text-decoration: underline;
`;

const ExchangesPresenter = ({ result, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Container>
        {result &&
          result.length > 0 &&
          result.map((item, index) => (
            <ItemContainer key={index}>
              <TitleITem> {item.name}</TitleITem>
              <Item>
                {item.description && `${item.description.substring(0, 50)}...`}
              </Item>
              <Link
                href={
                  item.links && item.links.website ? item.links.website[0] : ""
                }
              >
                {item.links && item.links.website ? item.links.website[0] : ""}
              </Link>
            </ItemContainer>
          ))}
      </Container>
    </>
  );
ExchangesPresenter.propTypes = {
  result: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default ExchangesPresenter;
