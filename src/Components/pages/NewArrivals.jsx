import { FaStar, FaSearch } from "react-icons/fa";
import Star from "../../assets/svg/Star";
import "./NewArrivals.css";

function NewArrivals() {
  return (
    <section className="products">
      <div className="container">
        <div className="products-row">
          <h2 className="products-title">NEW ARRIVALS</h2>
          <div className="products-cards">
            <div className="products-card">
              <div className="product-image">
                <img src="/public/products-image/image-1.png" alt="" />
              </div>
              <h3 className="product-card__title">T-SHIRT WITH TAPE DETAILS</h3>
              <div className="product-card__icons">
                {[...Array(5)].map((star) => {
                  return <FaStar size={19} color=" rgb(255, 198, 51)" />;
                })}
                <span>5/5</span>
              </div>
              <div className="product-price">
                <h3>$120</h3>
                <p></p>
                <span></span>
              </div>
            </div>
            <div className="products-card">
              <div className="product-image">
                <img src="/public/products-image/image-2.png" alt="" />
              </div>
              <h3 className="product-card__title"> SKINNY FIT JEANS</h3>
              <div className="product-card__icons">
                {[...Array(5)].map((star) => {
                  return <FaStar size={19} color="rgb(255, 198, 51)" />;
                })}
                <span>5/5</span>
              </div>

              <div className="product-price">
                <h3>$240</h3>
                <p>$260</p>
                <span className="sale">-20%</span>
              </div>
            </div>
            <div className="products-card">
              <div className="product-image">
                <img src="/public/products-image/image-3.png" alt="" />
              </div>
              <h3 className="product-card__title">T-SHIRT WITH TAPE DETAILS</h3>
              <div className="product-card__icons">
                {[...Array(5)].map((star) => {
                  return <FaStar size={19} color="rgb(255, 198, 51)" />;
                })}
                <span>5/5</span>
              </div>

              <div className="product-price">
                <h3>$120</h3>
                <p></p>
                <span ></span>
              </div>
            </div>
            <div className="products-card">
              <div className="product-image">
                <img src="/public/products-image/image-4.png" alt="" />
              </div>
              <h3 className="product-card__title">T-SHIRT WITH TAPE DETAILS</h3>
              <div className="product-card__icons">
                {[...Array(5)].map((star) => {
                  return <FaStar size={19} color="rgb(255, 198, 51)" />;
                })}
                <span>5/5</span>
              </div>

              <div className="product-price">
                <h3>$130</h3>
                <p>$160</p>
                <span className="sale">-30%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;
