import { CardElement } from "@stripe/react-stripe-js";

import Button from "../button/button.component";

const PaymentForm = () => {
  return (
    <div>
      <CardElement />
      <Button buttonType='inverted'> Pay Now </Button>
    </div>
  );
};

export default PaymentForm;
