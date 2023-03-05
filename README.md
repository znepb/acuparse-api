# acuparse-api

A simple NodeJS api for fetching information from an Acuparse instance.  
This package comes with types built in!

## Usage

Connect to an AcuParse instance with the IP 192.168.0.32, and get the current outdoor temperature in degrees celcius:

```js
const { Acuparse } = require("acuparse-api");

const p = new Acuparse("http://192.168.0.32");

p.getMain().then((main) => {
  // Expected output: The current temperature is X degrees celsius!
  console.log(
    `The current outdoor temperature is ${main.temp.temp} degrees celsius!"`
  );
});
```

Get the highest and lowest temperature from this past week:

```js
p.getArchive().then((archive) => {
  // Expected output: The highest temperature this past week was X degrees celsius and the lowest was X degrees celsius
  console.log(
    `The highest temperature this past week was ${archive.temp.high} degrees celsius and the lowest was ${archive.temp.low} degrees celsius`
  );
});
```
