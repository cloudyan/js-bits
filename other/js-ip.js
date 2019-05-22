setUserLocation();

function setUserLocation() {
  // In this method, you must call the `fetchCurrentIpAddress` method and update the textbox value with the IP address returned by ipinfo. `fetchCurrentIpAddress` returns a promise, you must wait until this promise is resolved before updating the input value;
}


// ipinfo is an 'API' that returns the location based on the IP address of the user making the request. It returns an Object (structure reprensenting a data model) with some information about the user location. Here's an example of the payload it returns:

/*
{
  "city": "Québec",
  "country": "CA",
  "hostname": "snipcart.com"
  "ip": "192.168.1.1",
  "loc": "49.8833,-97.1667",
  "org": "Snipcart",
  "region": "Quebec"
}
*/
function fetchCurrentIpAddress() {
  return fetch('https://ipinfo.io', {
    headers: {
      "Accept": "application/json"
    }
  })
  .then((r) => r.json());
}
