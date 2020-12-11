import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Nov/1500x600_Hero-Tall_np._CB416108473_.jpg"
          alt=""
        />
        <div className="home__row">
          {/*product */}
          <Product
            id="1456890"
            title="lean startup"
            price={29.9}
            image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="23456"
            title="Acer Chromebook Spin 311 Convertible Laptop, Intel Celeron N4020, 11.6 HD Touch, 4GB LPDDR4, 32GB eMMC, Gigabit Wi-Fi 5, Bluetooth 5.0, Google Chrome, CP311-2H-C679"
            price={50}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/41Uqi+l3EiL._AC_US160_.jpg"
          />

          {/*product */}
        </div>
        <div className="home__row">
          {/*product */}
          {/*product */}
          {/*product */}
          <Product
            id="456892"
            title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black"
            price={50}
            image="https://m.media-amazon.com/images/I/71916r38cNL._AC_UY218_.jpg"
            rating={2}
          />
          <Product
            id="4568956"
            title="Samsung SSD 860 EVO 1TB 2.5 Inch SATA "
            price={60}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41qR7C253KL._AC_US160_.jpg"
          />
          <Product
            id="456231"
            title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
            rating={4}
            price={80}
            image="https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL._AC_US160_.jpg"
          />
        </div>
        <div className="home__row">{/*product */}</div>
        <Product
          id="452315"
          rating={3}
          price={52}
          title="Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black"
          image="https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L._AC_US160_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
