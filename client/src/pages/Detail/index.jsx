import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { DeleteById, GetById } from "../../store/wine/api_actions";
import styled from "styled-components";
import { addToWishlist } from "../../store/wishlist/wishlistSlice";
import { Helmet } from "react-helmet";

const Detail = () => {
  const { id } = useParams();
  const { currentWineItem, loading, error } = useSelector(
    (state) => state.wine
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetById(id));
  }, [id]);
  return (
    <StyledWrapper>
        <Helmet>
        <title>Detail</title>
      </Helmet>
      <div className="container">
        {loading ? (
          <div class="spinner-border" role="status">
            <span class="sr-only"></span>
          </div>
        ) : currentWineItem ? (
          <div className="row ">
            <div className="col-12 col-md-6 col-lg-6">
              <img
                src={currentWineItem.image}
                alt="item-img"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-6 p-4">
              <h3>{currentWineItem.name}</h3>
              <p>Description: {currentWineItem.desc}</p>
              <p>Type: {currentWineItem.type}</p>
              <p>Country: {currentWineItem.country}</p>
              <p>Year: {currentWineItem.year}</p>
              <p>Price: ${currentWineItem.price}</p>
              <div className="actions">
                <button
                  className="btn btn-outline-dark"
                  onClick={() => {
                    dispatch(DeleteById(currentWineItem._id));
                  }}
                >
                  Delete
                </button>{" "}
                <button className="btn btn-dark" onClick={()=>{
                    dispatch(addToWishlist(currentWineItem))
                }}>Add to wishlist</button>
              </div>
            </div>
          </div>
        ) : error ? (
          <div class="alert alert-danger" role="alert">
            {error.message}
          </div>
        ) : (
          <div class="alert alert-light" role="alert">
            Not Found
          </div>
        )}
      </div>
    </StyledWrapper>
  );
};
const StyledWrapper = styled.div`
  padding-top: 20px;
`;

export default Detail;
