import React from "react";

const ServiceComponent = (props) => {
  return (
    <>
      <div className="col-lg-4 col-sm-6 col-12 mx-auto">
        <div className="card mx-auto card-width">
          <img src={props.imgPath} className="card-img-top" alt={props.title} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.cardTitle}</h5>
            <p className="card-text">
              {props.cardMessage}
            </p>
            <a href="#d" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServiceComponent;
