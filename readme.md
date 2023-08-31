# Random String Generator and TCP Client

This Node.js script connects to a TCP server and sends random strings at regular intervals. It can be used for testing or simulating data transfer to a server.

## Prerequisites

Before you begin, make sure you have Node.js installed on your system.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/DvdCp/client-string-sender.git
   ```

## Usage with Docker

1. Navigate to `client-string-sender` folder and run:

   ```bash
   docker build . --tag client-string-sender
   ```

   This will build the desired image startin from `Dockerfile`.

2. Connect the client to the TCP server.

   ```bash
   docker run --name client-string-sender --network myNet client-string-sender
   ```

   This will start the TCP client that connects to server on port 3000 in a Docker container using `myNet` as shared network.

## Configuration

You can customize the following variables in the script:

- `serverHost`: The hostname or IP address of the TCP server to connect to.
- `serverPort`: The port on which the TCP server is listening.
- `length`: The desired length of the random strings to be generated and sent to the server.
- `setInterval()` interval: Adjust the frequency at which random strings are sent to the server.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions, enhancements, or bug fixes.

---

**Note:** Make sure to customize the project details as needed and replace `"server-string-receiver"` with the actual hostname or IP address of your TCP server.
