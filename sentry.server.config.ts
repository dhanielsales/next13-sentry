// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://f3366af71a1f4557b2b302bc02e4b7c3@o1375965.ingest.sentry.io/4505347021733888",
  tracesSampleRate: 1,
  debug: false,
  profilesSampleRate: 1.0,

});
