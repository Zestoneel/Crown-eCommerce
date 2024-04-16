import { loadStrike } from "@stripe/stripe-js";

export const stripePromise = loadStrike(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
);
