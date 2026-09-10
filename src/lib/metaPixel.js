// Meta Pixel event helpers.
// The base pixel (init + PageView) is loaded in public/index.html.
// These helpers push the campaign conversion events and stay safe if the
// pixel script is blocked or has not finished loading yet.

export const trackPixel = (event, params = {}) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", event, params);
  }
};

// Conversion events used across the site for the Meta ad campaign
export const trackLead = (params = {}) => trackPixel("Lead", params);
export const trackContact = (params = {}) => trackPixel("Contact", params);
