// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://f3366af71a1f4557b2b302bc02e4b7c3@o1375965.ingest.sentry.io/4505347021733888",
  tracesSampleRate: 1,
  debug: false,
  integrations: [
    new Sentry.Replay(),
  ],
});
