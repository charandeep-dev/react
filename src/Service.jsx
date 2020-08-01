import React from 'react';
import ServiceComponent from './ServiceComponent.jsx';
import Sdata from './Sdata.jsx';

const Service = () => {
return (
    <>
   <div className="my-5">
        <h1 className="text-center">Our Services</h1>
    </div>
    <div className="container-fluid mb-5">
        <div className="row">
            <div className="col-sm-12 col-12 ">
                <div className="row gy-4">
                   {
                       Sdata.map((currentValue, index) => {
                           return <ServiceComponent key={index} imgPath={currentValue.imgsrc} title={currentValue.title} cardTitle={currentValue.heading} cardMessage={currentValue.message}  />
                       })
                   }
                </div>
            </div>
        </div>
    </div>
    </>
)
}
export default Service;