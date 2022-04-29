# Volvo Product App

A front-end Volvo Product Page built using React/Next.js, TypeScript and Css3. I did this project as assigment for Volvo company.
Try the [demo](https://objective-feynman-98aa01.netlify.app/)

<a href="https://ibb.co/b65sVMd"><img src="https://i.ibb.co/K5x2gpy/Screenshot-2022-04-29-at-15-45-44.png" alt="Screenshot-2022-04-29-at-15-45-44" border="0"></a>

<a href="https://ibb.co/vLzyt5z"><img src="https://i.ibb.co/44NvQyN/Screenshot-2022-04-29-at-15-46-01.png" alt="Screenshot-2022-04-29-at-15-46-01" border="0"></a>

<a href="https://ibb.co/dPfrD8q"><img src="https://i.ibb.co/7nSXKs5/Screenshot-2022-04-29-at-15-46-22.png" alt="Screenshot-2022-04-29-at-15-46-22" border="0"></a>

<a href="https://ibb.co/D8QfM2d"><img src="https://i.ibb.co/z7ZV2vd/Screenshot-2022-04-29-at-15-46-44.png" alt="Screenshot-2022-04-29-at-15-46-44" border="0"></a>

<a href="https://ibb.co/h1dkVMs"><img src="https://i.ibb.co/YTd6hW2/Screenshot-2022-04-29-at-15-47-07.png" alt="Screenshot-2022-04-29-at-15-47-07" border="0"></a>

## Clean Architecture ✨

<a href="https://ibb.co/5F7cWTx"><img src="https://i.ibb.co/L5GpzSh/Screenshot-2022-04-29-at-16-55-35.png" alt="Screenshot-2022-04-29-at-16-55-35" border="0"></a>

<a href="https://ibb.co/h8JzkLH"><img src="https://i.ibb.co/JkwJNm2/Screenshot-2022-04-29-at-16-55-48.png" alt="Screenshot-2022-04-29-at-16-55-48" border="0"></a>

<a href="https://ibb.co/d0kf1qC"><img src="https://i.ibb.co/JRrc046/Screenshot-2022-04-29-at-16-56-42.png" alt="Screenshot-2022-04-29-at-16-56-42" border="0"></a>

<a href="https://ibb.co/0MwM82m"><img src="https://i.ibb.co/3NJNGd4/Screenshot-2022-04-29-at-16-56-48.png" alt="Screenshot-2022-04-29-at-16-56-48" border="0"></a>

## Features ✨

* In this project is implemented: TypeScript, React/Next.js, Swiper, Css3, VCC-UI.   

* **Home page** - 
* **Learn page** - 
* **Shop page** - 

## Features to add/improve 🔮


## Get up and running  🚀

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Requirements

In the project directory, you can run:

- Node.js
- NPM
```javascript
/* First, Install the needed packages */
npm install

/* Then start both Node and React */
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
<br />

## Source folder structure

```

```
<br/><br/>
# Volvo Cars (Global Online Digital)

## Front-end coding test (React)

Our team's designer has come up with a new design to show our latest and greatest recharge cars on the website.

Here is how the design look like for desktop and mobile (files are stored under `docs` folder)

### Desktop

![ProductListDesktop](./docs/ProductList-Desktop.png)

### Mobile

![ProductListDesktop](./docs/ProductList-Mobile.png)

The data required to render the design is under `public/api/cars.json` folder. You need to fetch the data from the client side and render it in the browser. The data looks like this:

```json
[
  {
    "id": "xc90-recharge",
    "modelName": "XC90 Recharge",
    "bodyType": "suv",
    "modelType": "plug-in hybrid",
    "imageUrl": "/images/xc90_recharge.jpg"
  }
]
```

The product owner is telling you that you can generate the links to the learn and shop pages of each car by concatating the `id` of the car to the learn (`/learn/`) and shop (`/shop/`) urls.

Two extra SVG icons are also provided by our designer which are stored under `docs` folder.

## Requirements

- The project is bootstraped using [Next.js](https://nextjs.org/).
- Browser support is modern ever-green browsers.
- Implement this design using React and Typescript.
- Accessibility is important.
- Code Structure and reusablity is important.

## Bonus Points:

- If you use our design system component library, [VCC-UI](https://vcc-ui.vercel.app/)
- If you add a filter bar on the top to filter cars by `bodyType`


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
