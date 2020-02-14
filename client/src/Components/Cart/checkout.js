import React from 'react';
import axios from '../../axios_instance';
import StripeCheckout from 'react-stripe-checkout';

const CURRENCY = 'USD'

const fromUSDToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
};
const errorPayment = data => {
  alert('Payment Error');
};
const onToken = (amount, description) => token =>
  axios.post(`api/payment`,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromUSDToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);
const Checkout = ({ amount }) =>
  <StripeCheckout
    name={"Game"}
    amount={fromUSDToCent(amount)}
    token={onToken(amount)}
    currency={CURRENCY}
    stripeKey={"pk_test_WQWJpWVyy22dODqbxc1FxiGE00aeu6rc8k"}
  >
<button disabled={amount===0}className="btn">Pay Now</button>
  </StripeCheckout>
export default Checkout;
