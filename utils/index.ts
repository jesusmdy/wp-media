export function generateUUID() {
  // generate a random string
  const uuid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  return uuid;
}