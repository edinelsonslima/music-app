import { Analytics, logEvent } from "./index";

const analyticsEvent = (event: string, params?: object) => {
  return logEvent(Analytics, event, params);
};

export { analyticsEvent };
