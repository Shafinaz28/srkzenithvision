/** Google Apps Script web app — appends rows to the contact sheet. */
export const CONTACT_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwSMiShnOuAA2pAOuPbKKUnCOLMomT6xoty6Pxss1TAhBcmsSd8C2x0dcuCHayQbz4Xxw/exec";

/**
 * POST JSON to Apps Script doPost(e). Use text/plain to avoid a CORS preflight.
 * Sheet columns: Timestamp, Name, Email, Company, Service, Message (timestamp from script).
 */
export async function submitContactToSheet({ name, email, company, service, message }) {
  const response = await fetch(CONTACT_SHEET_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ name, email, company, service, message }),
  });
  return response;
}
