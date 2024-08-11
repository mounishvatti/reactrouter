# React router dom

React Router documentation - https://reactrouter.com/en/main

The application's url - https://reactrouter-sigma.vercel.app/

```js
let url = 'https://reactrouter-sigma.vercel.app/'
```

## Getting Started

To run this project, you'll need to clone it from the GitHub repo and install the dependencies:

```bash
git clone https://github.com/mounishvatti/reactrouter.git
cd reactrouter
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Routes

url/ - https://reactrouter-sigma.vercel.app/

url/about - https://reactrouter-sigma.vercel.app/about

url/contact - https://reactrouter-sigma.vercel.app/contact

url/user/1 - https://reactrouter-sigma.vercel.app/user/1
-> can be a string or a number

url/github - https://reactrouter-sigma.vercel.app/github -> shows my github info

```js
let username = 'sigma' //or whatever your github username is

// replace it with your github username
url = 'https://reactrouter-sigma.vercel.app/github/' + username
```

url/github/username - https://reactrouter-sigma.vercel.app/github/username


## Issue

You might face an issue where the routing does not occur and throws and `Error: 404` not found when you deploy the application to vercel and try doing a url change from the address bar.

But the same works fine locally on your machine.

To fix this issue, create a file called `vercel.json` in the root directory of your project and add the following code:

```json
{ "routes": [{ "src": "/[^.]+", "dest": "/", "status": 200 }] }
```

## References

https://stackoverflow.com/questions/75963788/why-is-my-vercel-project-giving-me-an-error-404-on-refresh