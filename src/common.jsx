import React from 'react';

import {NavLink} from 'react-router-dom';


const Common = (props) => {
return (
    <> 
    <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                    <div className="d-flex flex-column justify-content-center col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                        <h1>{props.name} <strong className="brand-name">React</strong></h1>
                        <h2 className="my-3">
                            We are the team of talented developer making websites
                        </h2>
                        <div className="mt-3">
<NavLink to={props.btnLink} className="btn-get-started">{props.btnMessage}</NavLink>
                        </div>
                    </div>
                    <div className="col-md-6 order-1 order-md-2 header-img">
                        <img src={props.imgPath} className="img-fluid img-adjust animated" alt="bg_IMG" />
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    </>
)
}
export default Common;

