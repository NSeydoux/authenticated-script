# Authenticated script

Run a NodeJS script to make authenticated operations against a Solid Pod.

## Installing

Run the following command to install dependencies: 
```
npm install
```

Be sure to use NPM to also install any additional dependencies needed by the custom
code you'll add to the project.

## Running

### Setting up the environment

You'll need to get a `client_id` and `client_secret` for the script to be authenticated.
For that, go through [static client registration](https://broker.pod.inrupt.com/registration.html) (more information in 
[the documentation](https://docs.inrupt.com/developer-tools/javascript/client-libraries/tutorial/authenticate-nodejs)).

Once you've obtained a the `client_id` and `client_secret` from an Identity Provider,
place them in a `.env` file at the root of the project. A template for this document
is available: [`.env.example`](./.env.example).

### Adding your code

Create a `main.mjs` file at the project root, which exports a `main` function
accepting an authenticated session as an input. You can write your custom code
in that `main` function. Here is an example: [`main.example.mjs`](./main.example.mjs).

### Running your code

This project exposes a simple entrypoint, `index.mjs`. This entry point logs a
session in, calls `main`, and when it is finished logs the session out. You should
not need to modify `index.mjs`.

To run, simply use the following command: `node index.mjs`, making sure you are
using Node 14 or above.

