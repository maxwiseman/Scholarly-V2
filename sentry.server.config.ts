// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

if (process.env.VERCEL_ENV == undefined)
  Sentry.init({
    dsn: "https://ca4d8b27f9e64a6fa32f4235fc36c4f0@o4505458538446848.ingest.sentry.io/4505458539560960",

    enabled: process.env.NEXT_PUBLIC_SENTRY_ENABLED === "false" ? false : true,

    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: 1,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,
  });
