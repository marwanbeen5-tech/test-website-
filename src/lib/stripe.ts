import Stripe from "stripe";

// Null when STRIPE_SECRET_KEY is not set: the site then falls back to WhatsApp orders.
export const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY) : null;
