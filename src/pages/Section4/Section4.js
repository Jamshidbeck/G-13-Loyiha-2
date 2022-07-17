import React from 'react';

import image1 from "../../asets/section4/image1.png";
import image2 from "../../asets/section4/image2.png";
import image3 from "../../asets/section4/image3.png";
import image4 from "../../asets/section4/image4.png";
import image5 from "../../asets/section4/image5.png";
import image6 from "../../asets/section4/image6.png";

import "../Section4/section4.css";

export default function Section4() {
  return (
    <div className="section4">

      {/* Floral Arrangements start */}

      <div className="header">

        <div className="heading">
          <span></span>
          <p>Floral Arrangements</p>
          <span></span>
        </div>

        <p className="span1">Our floral arrangements are available during the spring/summer seasons. The flowers included in our bouquets change weekly based on our local farm supply, so be sure to check back often for different arrangements!</p>

      </div>

      <div className="box-container">

        <div className="box">
          <div className="img">
            <img src={image1} alt="" />
          </div>
          <p>“THE HONEY B” <br /> MINI ARRANGEMENT</p>
          <span className="cost">$8.00</span>
        </div>

        <div className="box">
          <div className="img">
            <img src={image2} alt="" />
          </div>
          <p>“THE EMBER” <br /> SMALL ARRANGEMENT</p>
          <span className="cost">$20.00</span>
        </div>

        <div className="box">
          <div className="img">
            <img src={image3} alt="" />
          </div>
          <p>“THE OLLIE” <br /> MEDIUM ARRANGEMENT</p>
          <span className="cost">$30.00</span>
        </div>

        <div className="box">
          <div className="img">
            <img src={image4} alt="" />
          </div>
          <p>“THE HENNA” <br /> LARGE ARRANGEMENT</p>
          <span className="cost">$50.00</span>
        </div>

      </div>

      {/* Floral Arrangements end */}

      {/* Gift boxes start */}

      <div className="header">

        <div className="heading">
          <span></span>
          <p>Gift Boxes</p>
          <span></span>
        </div>

        <p className="span1">Our gift boxes are available during the fall/winter seasons. All gift boxes are carefully curated, containing products from our local/small business partners.</p>

      </div>

      <div className="box-container">

        <div className="box">
          <div className="img">
            <img src={image5} alt="" />
          </div>
          <p>“SWEETER THAN HONEY” <br /> FALL GIFT BOX</p>
          <span className="cost">$60.00</span>
        </div>

        <div className="box">
          <div className="img">
            <img src={image6} alt="" />
          </div>
          <p>“STARRY EYED” <br /> WINTER GIFT BOX</p>
          <span className="cost">$45.00</span>
        </div>

      </div>

      {/* Gift boxes end */}

    </div>
  );
}
