This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
# getStaticProps
- usig data fetching from API with getStaticProps
- user pages and component
- dont run in client side 
- onlu run in server side 
- its only use for pre=rendering not client side data fetching
- its must return an object and should have an object key 
- it run only build time during development on every request

# run build
- we can delete .next foldr before run buile and we can ger a new .next folder
- command for build is 'yarn build' then it create an optimization production build
# using Link 
- using link in index.js
# static generate file
- its a method of pre rendering where the HTML files are generate at run time
- HTML, JS and Json file are generate

# SSG (static site generation) page generation
- using dynamic parameter in post components
- getting all details of a post from post title
- using getStaticPaths for fetching data with dynamic postId
# fallback keys
- false
- true : use in a large ecommerce page data
- blocking:
# json serve use
- yarn add i json-server also iclude some code in package.json file

# isr (incremental static regeneration)
- it allows to update data after you build your appps with out rebuild



*** revalidate key use for a period of time it will stale the page or change thd docs for time ***

## rules
***static generation***
- HTML staticaly genereated at build time then the built page cachs and reuse for each request
- for a dynamic page with getStaticPaths and fallback true the page is not generated at built time it onlu generate on initial request
- with the use of getStaticProps the page generated at built time
# SSR  server side rendering is form of pre rendring
- it allow to pre rendering not at built time but   request time
- html is generated at every incoming request
- it need when you fetch data per request
*** use getServerSiteProps() ***
- getServerSideProps runs only server side
- the function will never run client side
- the code inside getSereverSideProps() will never include in js bundle that is sernt to the browser.
- can write server side code inside getServerSideProps() 
- can use the fs modue file system quering a database for accessing
- its only for pre rendering not for client side data fetching
- its retur an object it return also props key which is an object
- it runs only on request time

- server side rendering with dynamic parameter
- use getStaticProps() and getServerSideProps()

# fetching data for client side 

- using useStete and useEffect variable 
- using dbjson making a dashboard json data and call it

***SWR** (stale-while-revalidate)
- its react hook for data fetching
- stale-while-revalidate
- need install swr package -- run yarn add swr
- use swr hook to change the data
- it is good for super fast data fetching
