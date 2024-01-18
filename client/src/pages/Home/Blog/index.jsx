import React from "react";
import "./styles.scss";
import Img1 from "../../../assets/images/hero_1.jpg";
import Img2 from "../../../assets/images/hero_2.jpg";
import Img3 from "../../../assets/images/img_1.jpg";
const Blog = () => {
  return (
    <div className="our-blog">
      <div className="container">
        <div className="section-header">
          <h3>Our Products</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
            perspiciatis!
          </p>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="blog-card p-2">
              <img src={Img1} alt="blog-image" />
              <h4>What You Need To Know About Premium Rosecco</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                fugit eius corrupti cupiditate quod quidem alias temporibus
                dignissimos delectus consequatur!
              </p>
              <p><b>Dave Rogers</b> in <b>News</b></p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="blog-card p-2">
              <img src={Img2} alt="blog-image" />
              <h4>What You Need To Know About Premium Rosecco</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                fugit eius corrupti cupiditate quod quidem alias temporibus
                dignissimos delectus consequatur!
              </p>
              <p><b>Dave Rogers</b> in <b>News</b></p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="blog-card p-2">
              <img src={Img3} alt="blog-image" />
              <h4>What You Need To Know About Premium Rosecco</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                fugit eius corrupti cupiditate quod quidem alias temporibus
                dignissimos delectus consequatur!
              </p>
              <p><b>Dave Rogers</b> in <b>News</b></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
