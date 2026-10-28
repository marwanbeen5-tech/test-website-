# IPTV landing site (Next.js)

## Run locally

```
npm install
npm run dev
```

Open http://localhost:3000

## Customize

- Brand, contact details, prices, FAQ, testimonials, devices, blog posts: `src/lib/site.ts`
- Colors (dark and light theme): `src/app/globals.css`
- Logo: `src/components/Logo.tsx` and the favicon `src/app/icon.svg`

## Turn on the extra features

Copy `.env.example` to `.env.local` and fill in the keys, then restart `npm run dev`.

| Feature | Variables | Without them |
| --- | --- | --- |
| Card / MB WAY / Multibanco payments | `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` | "Escolher Plano" opens WhatsApp |
| Order, trial and contact emails | `RESEND_API_KEY`, `EMAIL_FROM`, `ADMIN_EMAIL` | Emails are only logged in the terminal |
| Google Analytics / Meta Pixel | `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_META_PIXEL_ID` | No tracking |

Stripe: enable the payment methods you want in the Stripe dashboard, and add a webhook
pointing to `https://your-domain/api/stripe/webhook` with the event `checkout.session.completed`.

Resend: verify your domain so emails come from your own address and don't land in spam.

## Deploy

1. Push the project to GitHub.
2. Import it on https://vercel.com and add the same environment variables.
3. Connect your domain in Vercel (HTTPS is automatic).
4. Submit `https://your-domain/sitemap.xml` in Google Search Console.
