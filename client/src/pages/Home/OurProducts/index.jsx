import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteById, GetAll } from "../../../store/wine/api_actions";
import { addToWishlist } from "../../../store/wishlist/wishlistSlice";
import "./styles.scss";
import { Link } from "react-router-dom";

const OurProducts = () => {
  const dispatch = useDispatch();
  const { wine, loading, error } = useSelector((state) => state.wine);
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const getAllData = async () => {
    dispatch(GetAll());
  };
  useEffect(() => {
    getAllData();
  }, []);
  useEffect(() => {
    setFilteredData(() => {
      return wine.filter((wineItem) =>
      wineItem.name?.toLowerCase().includes(searchValue.toLowerCase().trim())
      );
    });
  }, [wine, searchValue]);
  return (
    <div className="our-products">
      <div className="container">
        <div className="section-header">
          <h3>Our Products</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
            perspiciatis!
          </p>
        </div>
        <div className="content">
          <div className="filter-section mb-3 row">
            <div className="col-12 col-md-6 col-lg-6">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
            <div
              class="btn-group col-12 col-md-6 col-lg-6"
              role="group"
              aria-label="Basic example"
            >
              <button
                type="button"
                class="btn btn-light"
                onClick={() => setFilteredData(wine)}
              >
                Default
              </button>
              <button
                type="button"
                class="btn btn-light"
                onClick={() =>
                  setFilteredData(() =>
                    [...wine].sort((a, b) => a.price - b.price)
                  )
                }
              >
                Low to high
              </button>
              <button
                type="button"
                class="btn btn-light"
                onClick={() =>
                  setFilteredData(() =>
                    [...wine].sort((a, b) => b.price - a.price)
                  )
                }
              >
                High to low
              </button>
            </div>
          </div>
          <div className="row">
            {loading ? (
              <div class="spinner-border" role="status">
                <span class="sr-only"></span>
              </div>
            ) : wine ? (
              filteredData?.map((item) => (
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="card mt-5">
                    <img
                      src={
                        item.image ||
                        "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
                      }
                      class="card-img-top"
                      alt="card-img"
                    />
                    <div class="card-body">
                      <Link to={`/detail/${item._id}`}>
                        <h5 class="card-title">{item.name}</h5>
                      </Link>
                      <p class="card-text">${item.price}</p>
                      <div className="actions">
                        <button
                          className="btn btn-outline-dark"
                          onClick={() => {
                            dispatch(DeleteById(item._id));
                          }}
                        >
                          Delete
                        </button>{" "}
                        <button
                          className="btn btn-dark"
                          onClick={() => {
                            dispatch(addToWishlist(item));
                          }}
                        >
                          Add to wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
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
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
