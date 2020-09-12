import React from "react";
import "./index.css";
import web1 from "../src/img/1.jpg";
import web2 from "../src/img/2.jpg";
import web3 from "../src/img/3.jpg";
import web4 from "../src/img/4.jpg";
import web5 from "../src/img/5.jpg";
import web6 from "../src/img/6.jpg";
import web7 from "../src/img/7.jpg";
import web8 from "../src/img/8.jpg";

const Getfood = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mr-auto delivery-heading text-center">
                        <h2 className="text-center text-uppercase">Get food fast &mdash; not fast food.</h2>
                        <p className="text-center">Hello, we’re King'sfood, your new premium food delivery service. We know you’re always busy. No time for cooking. So let us take care of that, we’re really good at it, we promise!
                    </p>
                    </div>
                </div>
                <div className="row delivery-options">
                    <div className="col-sm-10 col-md-3 col-lg-3">
                        <h3>Up to 365 days/year</h3>
                        <p>Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.</p>
                    </div>
                    <div className="col-sm-10 col-md-3 col-lg-3">
                        <h3>Ready in 20 minutes</h3>
                        <p>You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.</p>
                    </div>
                    <div className="col-sm-10 col-md-3 col-lg-3">
                        <h3>100% organic</h3>
                        <p>All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!</p>
                    </div>
                    <div className="col-sm-10 col-md-3 col-lg-3">
                        <h3>Order anything</h3>
                        <p>We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!</p>
                    </div>
                </div>
                <div className="row py-10">
                    <div className="col-md-3">
                        <img src={web1} className="img-gallery"/>
                    </div>
                    <div className="col-md-3">
                        <img src={web2} className="img-gallery"/>
                    </div>
                    <div className="col-md-3">
                        <img src={web3} className="img-gallery"/>
                    </div>
                    <div className="col-md-3">
                        <img src={web4} className="img-gallery"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <img src={web5} className="img-gallery"/>
                    </div>
                    <div className="col-md-3">
                        <img src={web6} className="img-gallery"/>
                    </div>
                    <div className="col-md-3">
                        <img src={web7} className="img-gallery"/>
                    </div>
                    <div className="col-md-3">
                        <img src={web8} className="img-gallery"/>
                    </div>
                </div>
            </div>



        </>
    )
}


export default Getfood;