import * as zoid from 'zoid/dist/zoid.frameworks';

const PaymentWidget = zoid.create({
  tag: 'payment-widget',
  url: 'http://localhost:3000/payout',
  dimensions: {
    width: "500px",
    height: "500px"
  }
});

export default PaymentWidget;