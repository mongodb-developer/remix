import { Outlet, LiveReload, Links, Link, Meta, Scripts } from "@remix-run/react";
import React from "react";
import stylesheet from "~/tailwind.css";

import logo from "~/assets/logo.png";

export function links() {
  return [{ rel: "stylesheet", href: stylesheet }];
}

export function meta() {
  const description = "A template for Remix applications using MongoDB";
  const keywords = "remix, react, mongodb, tailwindcss";

  return {
    description,
    keywords,
  };
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

type iDocType = {
  children: React.ReactNode;
  title?: string;
};

export function ErrorBoundry({ error }: any) {
  console.log(error);
  return (
    <Document>
      <Layout>
        <h1>Sorry An Error Occured</h1>
        <pre>{error}</pre>
      </Layout>
    </Document>
  );
}

function Document({ children, title }: iDocType) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>{title ? title : "MongoDB Remix Template"}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
      <Scripts />
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col h-screen mx-2">
          <nav className="flex h-16 items-center width-full">
            <Link to="/">
              <img src={logo} width="200" alt="Logo" />
            </Link>
          </nav>
          <div className="flex h-8 items-center bg-gray-100">
            A Remix Stack for MongoDB
          </div>
          <div className="flex flex-1 overflow-hidden">
            <aside className="hidden sm:block my-1 w-64 overflow-y-auto">
              <ul className="list-none">
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/movies/add"> * Add</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="https://www.mongodb.com/docs/drivers/node/current/">MongoDB Driver docs</Link></li>
              </ul>
            </aside>
            <main className="flex flex-1 my-1 overflow-y-auto paragraph px-4">
              {children}
            </main>
          </div>
          <div className="flex bg-gray-100">Fork this on &nbsp;<Link to="https://github.com/mongodb-developer/remix">Github</Link></div>
        </div>
    </>
  );
}
