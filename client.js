const net = require("net");

function generateRandomString(length) {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    randomString += letters[randomIndex];
  }

  return randomString;
}

const serverHost = "server-string-receiver";
const serverPort = 3000;

const client = new net.Socket();
let stringInterval;

client.connect(serverPort, serverHost, () => {
  console.log("Connected to server");

  stringInterval = setInterval(() => {
    const length = 10; // Change this to the desired length of the string
    const message = generateRandomString(length);
    client.write(message);
    console.log(`Sent: ${message}`);
  }, 2000);
});

client.on("data", (data) => {
  console.log(`Received: ${data}`);
});

client.on("close", () => {
  console.log("Connection closed");
  clearInterval(stringInterval);
  client.destroy();
});
