export async function onRequestGet(context) {
  return context.env.PROXYWEB.fetch(context.request);
}
