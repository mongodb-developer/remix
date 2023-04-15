# Remix stack for MongoDB

This simple stack includes everything you need to run Remix with MongoDB. It includes examples for basic document fetches, as well as a form to add new entries.

## Requirements

Create a new Remix application using this template.

```
npx create-remix@latest --template joellord/remix-mongodb
```

You will also need a MongoDB cluster ready to go with some sample data. The easiest way to get started is with an Atlas free cluster.

* Create your free Atlas cluster ([tutorial](https://www.mongodb.com/docs/atlas/tutorial/deploy-free-tier-cluster/))
* Load the sample dataset ([docs](https://www.mongodb.com/docs/atlas/sample-data/))

## Getting started
In the root folder of the project, create a `.env` file. In this file, you will need to add your connection string. Check out the [docs](https://www.mongodb.com/docs/guides/atlas/connection-string/) to learn how to get your connection string with Atlas.

```
CONNECTION_STRING=mongodb+srv://username:password@cluster0.abcdef.mongodb.net/myFirstDatabase
```

Run a first build, and then start the development environment.

```
npm run build
npm run dev
```

Open your browser on [http://localhost:3000](http://localhost:3000), and start exploring your new application.