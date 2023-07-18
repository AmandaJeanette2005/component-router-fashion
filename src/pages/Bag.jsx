import React from "react";

const Bag = () => {
  return (
    <>
      <br />
      <h1>BAG</h1>
      <br />
      <h3>- Louis Vuitton -</h3>
      <div className="container">
        <div className="row">
          <p>Mini Bumbag $2,030.00</p>
          <div className="col-md-4">
            <img
              src="https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-mini-bumbag-monogram-small-leather-goods--M82335_PM1_Detail%20view.png?wid=824&hei=824"
              alt=""
              width="70%"
            />
          </div>
          <div className="col-md-4 offset-md-4">
            The Mini Bumbag in Monogram canvas is Louis Vuitton's feminine
            interpretation of the on-trend bumbag format. Designed for
            versatility, it features a removable, adjustable strap in the
            House's emblematic natural leather, as well as a removable gold-tone
            chain, which can be functional or decorative. The bag has a zipped
            main compartment and a zipped front pocket with an embossed leather
            tag.
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 offset-md-3">
            MINI BUMBAG MONOGRAM Imagined in iconic Louis Vuitton canvas and
            adorned with signature details, the mini Bumbag Monogram is accented
            by elegant gold finishes. Capturing the Maison’s spirit of travel,
            it is the ideal city companion, worn on the shoulder or across the
            body.
          </div>
          <div className="col-md-3 offset-md-3">
            <img
              src="https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-mini-bumbag-monogram-small-leather-goods--M82335_PM1_Closeup%20view.png?wid=824&hei=824"
              alt=""
              width="100%"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Bag;
