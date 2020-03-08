import React from 'react';
import PaymentWidget from '../../PaymentWidget';
import OTP from '../../../components/OTP';

export default function ProcessPayment() {
  return (
    <OTP {...window.xprops} />
  )
}