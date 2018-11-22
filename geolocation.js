var ip = require('ip');
 
const add=ip.address();

console.log(add);
var iplocation = require('iplocation')
 
 
iplocation(add)
  .then(res => {
 
    /* res:
 
      {
        as: 'AS11286 KeyBank National Association',
        city: 'Cleveland',
        country: 'United States',
        countryCode: 'US',
        isp: 'KeyBank National Association',
        lat: 41.4875,
        lon: -81.6724,
        org: 'KeyBank National Association',
        query: '156.77.54.32',
        region: 'OH',
        regionName: 'Ohio',
        status: 'success',
        timezone: 'America/New_York',
        zip: '44115'
      }
 
    */
    console.log(res);
 
  })
  .catch(err => {
    console.error(err)
  })
    