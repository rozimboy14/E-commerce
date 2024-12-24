//style
import "./Banner.css";

function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner-row">
        
            <h1 className="banner-title">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="banner-subtitle">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="banner-btn">Shop Now</button>
       
          <div className="banner-abouts">
            <div className="banner-about">
              <h3 className="banner-about__title">200+</h3>
              <p className="banner-about__subtitle">International Brands</p>
            </div>
            <div className="banner-about">
              <h3 className="banner-about__title">2,000+</h3>
              <p className="banner-about__subtitle">High-Quality Products</p>
            </div>
            <div className="banner-about">
              <h3 className="banner-about__title">30,000+</h3>
              <p className="banner-about__subtitle">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
