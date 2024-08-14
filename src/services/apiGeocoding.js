/* an asynchronous function getAddress that takes an object with latitude and longitude properties, 
and uses them to perform a reverse geocoding request to the BigDataCloud API.  */

export async function getAddress({ latitude, longitude }) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
  );
  if (!res.ok) throw Error('Failed getting address');

  const data = await res.json();
  return data;
}
