import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../store/wishlist/wishlistSlice";
import { Helmet } from "react-helmet";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);
  return (
    <div className="wishlist">
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <div className="container pt-2">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Year</th>
              <th scope="col">Price</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((item, index) => (
              <tr key={item._id}>
                <th scope="row">{index + 1}</th>
                <td><img src={item.image} alt="" style={{width:"50px", height:"50px", objectFit:"cover"}}/></td>
                <td>{item.name}</td>
                <td>{item.year}</td>
                <td>${item.price}</td>
                <td><button className="btn btn-light" onClick={()=>{
                  dispatch(removeFromWishlist(item._id))
                }}>X</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
