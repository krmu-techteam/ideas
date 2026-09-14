const http = require('http');

http.get('http://localhost:3000/spotlight/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    const expected = [
      "Crime Scene Investigation Game",
      "React to the Situation",
      "Button Masala",
      "IMPRINT: The Art of Hand Block Printing",
      "Soap Carving - Carved Expression",
      "Debate Competition",
      "Agritech – AI Smart Farming Models",
      "Zero Waste Innovation"
    ];
    console.log('--- Spotlight Events Verification ---');
    expected.forEach((name, i) => {
      console.log(`${i + 1}. ${name}: ${data.includes(name)}`);
    });

    const otherEvents = [
      "Robots Race",
      "Robo War",
      "Drone Race",
      "ROBO Soccer",
      "ReelBaaz",
      "The Beverage Arena"
    ];
    console.log('--- Non-spotlight events excluded? ---');
    otherEvents.forEach(name => {
      console.log(`${name} NOT in spotlight cards: ${!data.includes('>' + name + '<')}`);
    });
  });
});
