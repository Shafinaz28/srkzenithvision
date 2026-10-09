import { brand } from "../data/content";

/**
 * Opens the visitor's email app with a filled-in message.
 * No server is required. Change the inbox in src/data/content.js.
 */
export function sendByEmail({ subject, body }) {
  const href = `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = href;
}
