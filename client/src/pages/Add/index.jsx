import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { AddNew, DeleteById, GetAll } from "../../store/wine/api_actions";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet";

const Add = () => {
  const dispatch = useDispatch();
  const { wine, loading, error } = useSelector((state) => state.wine);
  const navigate = useNavigate();

  const getAllData = async () => {
    dispatch(GetAll());
  };
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="container pt-5">
      <Helmet>
        <title>Add new product</title>
      </Helmet>
      <h1>Add New Item</h1>
      <Formik
        initialValues={{
          name: "",
          year: "",
          desc: "",
          price: 0,
          image: "",
          country: "",
          type: "",
        }}
        onSubmit={async (values) => {
          dispatch(AddNew(values));
          navigate("/");
        }}
      >
        <Form>
          <div class="form-group mb-3">
            <label htmlFor="name">Name</label>
            <Field
              id="name"
              name="name"
              placeholder="Name"
              className="form-control"
            />
            {/* <small id="titleHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
          </div>
          <div class="form-group mb-3">
            <label htmlFor="year">Year</label>
            <Field
              id="year"
              name="year"
              placeholder="Year"
              className="form-control"
            />
          </div>
          <div class="form-group mb-3">
            <label htmlFor="desc">Description</label>
            <Field
              id="desc"
              name="desc"
              placeholder="Description"
              className="form-control"
            />
          </div>
          <div class="form-group mb-3">
            <label htmlFor="country">Country</label>
            <Field
              id="country"
              name="country"
              placeholder="Country"
              className="form-control"
            />
          </div>
          <div class="form-group mb-3">
            <label htmlFor="type">Type</label>
            <Field
              id="type"
              name="type"
              placeholder="Type"
              className="form-control"
            />
          </div>
          <div class="form-group mb-3">
            <label htmlFor="price">Price</label>
            <Field
              id="price"
              name="price"
              type="number"
              placeholder="Price"
              className="form-control"
            />
          </div>
          <div class="form-group mb-3">
            <label htmlFor="image">Image</label>
            <Field
              id="image"
              name="image"
              placeholder="Image"
              className="form-control"
            />
            <small className="form-text text-muted">Paste URL here</small>
          </div>

          <button className="btn btn-dark" type="submit">
            Add product
          </button>
        </Form>
      </Formik>
      <br />
      <br />
      <h3>All product list</h3>
      {wine ? (
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Year</th>
              <th scope="col">Country</th>
              <th scope="col">Price</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {wine.map((item, index) => (
              <tr key={item._id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.year}</td>
                <td>{item.country}</td>
                <td>${item.price}</td>
                <td>
                  <button
                    className="btn btn-dark"
                    onClick={() => dispatch(DeleteById(item._id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        "Not found"
      )}
    </div>
  );
};

export default Add;
