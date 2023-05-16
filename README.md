# Remix stack for MongoDB

This simple stack includes everything you need to run Remix with MongoDB. It includes examples for basic document fetches, as well as a form to add new entries.

Find out more in the article in the [MongoDB Dev Center](https://mdb.link/remix).

## Requirements

Create a new Remix application using this template.

```
npx create-remix@latest --template mongodb-developer/remix
```

You will also need a MongoDB cluster ready to go with some sample data. The easiest way to get started is with an Atlas free cluster.

* Create your free Atlas cluster ([tutorial](https://www.mongodb.com/docs/atlas/tutorial/deploy-free-tier-cluster/?utm_campaign=devrel&utm_source=cross-post&utm_source=tools&utm_medium=readme&utm_content=remix-stack&utm_term=joel.lord))
* Load the sample dataset ([docs](https://www.mongodb.com/docs/atlas/sample-data/?utm_campaign=devrel&utm_source=cross-post&utm_source=tools&utm_medium=readme&utm_content=remix-stack&utm_term=joel.lord))

## Getting started
In the root folder of the project, create a `.env` file. In this file, you will need to add your connection string. Check out the [docs](https://www.mongodb.com/docs/guides/atlas/connection-string/?utm_campaign=devrel&utm_source=cross-post&utm_source=tools&utm_medium=readme&utm_content=remix-stack&utm_term=joel.lord) to learn how to get your connection string with Atlas.

```
CONNECTION_STRING=mongodb+srv://username:password@cluster0.abcdef.mongodb.net/myFirstDatabase
```

Run a first build, and then start the development environment.

```
npm run build
npm run dev
```

Open your browser on [http://localhost:3000](http://localhost:3000), and start exploring your new application.
