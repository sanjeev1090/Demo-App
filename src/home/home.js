import React from 'react';
import '../home/home.less';
class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        shop: [
            {name: 'jumper', color: 'red', price: 20},
            {id: 42, name: 'shirt', color: 'blue', price: 15},
            {id: 56, name: 'pants', color: 'green', price: 25},
            {id: 71, name: 'socks', color: 'black', price: 5},
            {id: 72, name: 'socks', color: 'white', price: 5},
        ]
      }
    }
    render(){
        return(
            <div className="container">
                <section id="section1" className="block-A section-common">
                    <div className="row">
                        <div className="col-md-12 block-child">
                            <p className="hide-md">India's first and only tax savings maximizer</p>
                            <span>Exclusively on ETMONEY </span>
                            <div className="saveTax-mob">
                                <h1>Save Tax</h1>
                                <h6>up to</h6>
                                <h5><label>₹</label>78,000</h5>
                                <a href="/basic" className="miximiseTax">Maximize your savings <img src="https://static.smartspends.com/static/images/etmoneyweb/whiteRightIcon.png" alt="" className="hide-md" />
                                </a>
                                <p className="">All tax-saving options. Get instant proofs</p>
                            </div>
                        </div>
                    </div>
                    <div className="row taxDetails ">
                        <div className="taxInfo">
                            <div className="col-md-3 part-a">
                                <div className="col-xs-3 part-b">
                                    <img src="https://static.smartspends.com/static/images/etmoneyweb/elss.svg" alt="ELSS Mutual Funds" />
                                </div>
                                <div className="col-xs-9 part-c">
                                    <h4>Under 80C</h4>
                                    <h3>ELSS Mutual Funds</h3>
                                    <p>Save tax up to ₹46,800 and grow your money</p>
                                    <a href="/mutual-funds/featured/top-tax-saver-elss-funds/8">Know more</a>
                                </div>
                            </div>
                            <div className="col-md-3 part-a">
                                <div class="col-xs-3 part-b">
                                    <img src="https://static.smartspends.com/static/images/etmoneyweb/term-insurance.svg" alt="Term Life Insurance" />
                                </div>
                                <div className="col-xs-9 part-c">
                                    <h4>Under 80C</h4>
                                    <h3>Term Life Insurance</h3>
                                    <p>Save tax up to ₹46,800 and protect your family</p>
                                    <a href="/term-life-insurance">Know more</a>
                                </div>
                            </div>
                            <div className="col-md-3 part-a">
                                <div className="col-xs-3 part-b">
                                    <img src="https://static.smartspends.com/static/images/etmoneyweb/health-insurance.svg" alt="Health Insurance" />
                                </div>
                                <div className="col-xs-9 part-c">
                                    <h4>Under 80D</h4>
                                    <h3>Health Insurance</h3>
                                    <p>Save tax up to ₹15,600 and ensure best health care</p>
                                    <a href="/health-insurance">Know more</a>
                                </div>
                            </div>
                            <div className="col-md-3 part-a">
                                <div className="col-xs-3 part-b">
                                    <img src="https://static.smartspends.com/static/images/etmoneyweb/nps.svg" alt="National Pension System" />
                                </div>
                                <div className="col-xs-9 part-c">
                                    <h4>Under 80CCD(1B)</h4>
                                    <h3>National Pension System</h3>
                                    <p>Save tax up to ₹15,600 and secure your retirement</p>
                                    <a href="/nps">Know more</a>
                                </div>
                            </div>
                        </div>
                        {/* { this.state.shop.map(
                            (item, key) =>(<p item={item} key={item.id}>{item.name}</p>)
                        )
                        } */}
                    </div>
                </section>
            </div>
        )
    }
}
export default Home;