import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import Button from "../button/button.component";

import "./payment-form.styles.scss";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    //setIsProcessingPayment(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 11111 }),
    }).then((res) => {
      return res.json();
    });

    const {
      paymentIntent: { client_secret },
    } = response;

    console.log(client_secret);

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Shreyash Patra",
        },
      },
    });

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else if (paymentResult.paymentIntent.status === "succeeded") {
      AudioListener("Payment Successful");
    }
  };

  return (
    <div className='payment-form-container'>
      <div className='form-container'>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button buttonType='inverted' onSubmit={paymentHandler}>
          Pay Now
        </Button>
      </div>
    </div>
  );
};

export default PaymentForm;
