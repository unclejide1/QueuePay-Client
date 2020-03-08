import React from 'react';
import {CheckoutDiv} from "./styled-components";

const CheckoutForm = (props) =>{
    let {handleInput} = props;
    let {handleSubmit} = props;
    let {inputs} = props;
    let {notValid} = inputs;

    // console.log(inputs);
    return (
        <CheckoutDiv className="container">
        <div className="row">
            <div className="col-xs-12 col-md-4 col-sm-6">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            Payment Details
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={handleSubmit}>
                          
                          <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="couponCode">Card Holder Name</label>
                                        <input 
                                        type="text"
                                         className="form-control"
                                          name="cardHolderName"
                                          value={inputs.cardHolderName}
                                          onChange={handleInput} />
                                    </div>
                                </div>                        
                            </div>
                          
                          <div className="form-group">
                            <label htmlFor="cardNumber">
                                CARD NUMBER</label>
                            <div className="input-group">
                                <input 
                                type="text"
                                 className={`form-control {wrongCard}`} 
                                  id="cardNumber"
                                   placeholder="Valid Card Number"
                                   name="cardNo"
                                    value={inputs.cardNo}
                                    onChange={handleInput}
                                    required autoFocus />
                                <span className="input-group-addon"><span className="glyphicon glyphicon-lock"></span></span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-7 col-md-7">
                                <div className="form-group">
                                    <label htmlFor="expityMonth">EXPIRY DATE</label>
                                    <div className="col-xs-12 col-lg-12">
                                      <div className="col-xs-6 col-lg-6 ">
                                        <input type="number"
                                         className="form-control"
                                          id="expityMonth"
                                           placeholder="MM"
                                           name="expiryMonth"
                                          value={inputs.expiryMonth}
                                          onChange={handleInput}
                                           required />
                                    </div>
                                    <div className="col-xs-6 col-lg-6 ">
                                        <input 
                                        type="number"
                                         className="form-control"
                                          id="expiryYear"
                                           placeholder="YY"
                                           name="expiryYear"
                                           value={inputs.expiryYear}
                                           onChange={handleInput}
                                           required />
                                    </div>
                                  </div>
                                </div>
                            </div>
                            <div className="col-xs-5 col-md-5 pull-right">
                                <div className="form-group">
                                    <label htmlFor="cvCode">
                                        CV CODE</label>
                                    <input 
                                    type="password"
                                     className="form-control"
                                      id="cvCode"
                                       placeholder="CV"
                                       name="cvc"
                                       value={inputs.cvc}
                                       onChange={handleInput}
                                       required />
                                </div>
                            </div>
                        </div>
                        <input type="submit" className="btn btn-success btn-lg btn-block" value="Submit" />
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    </CheckoutDiv>
    )
}

export default CheckoutForm;
