# Volvo Product App

A front-end Volvo Product Page built using React/Next.js, TypeScript and Css3. I did this project as assigment for Volvo company.
Try the [demo](https://objective-feynman-98aa01.netlify.app/)

<a href="https://ibb.co/b65sVMd"><img src="https://i.ibb.co/K5x2gpy/Screenshot-2022-04-29-at-15-45-44.png" alt="Screenshot-2022-04-29-at-15-45-44" border="0"></a>

<a href="https://ibb.co/vLzyt5z"><img src="https://i.ibb.co/44NvQyN/Screenshot-2022-04-29-at-15-46-01.png" alt="Screenshot-2022-04-29-at-15-46-01" border="0"></a>

<a href="https://ibb.co/dPfrD8q"><img src="https://i.ibb.co/7nSXKs5/Screenshot-2022-04-29-at-15-46-22.png" alt="Screenshot-2022-04-29-at-15-46-22" border="0"></a>

<a href="https://ibb.co/D8QfM2d"><img src="https://i.ibb.co/z7ZV2vd/Screenshot-2022-04-29-at-15-46-44.png" alt="Screenshot-2022-04-29-at-15-46-44" border="0"></a>

<a href="https://ibb.co/h1dkVMs"><img src="https://i.ibb.co/YTd6hW2/Screenshot-2022-04-29-at-15-47-07.png" alt="Screenshot-2022-04-29-at-15-47-07" border="0"></a>

## Clean Architecture ✨
* Volvo App is break down into smal components and organized into clean arhitecture principle.
* Volvo App is building using atomic design. Atomic design is methodology for creating design systems. There are five distinct levels in atomic design:
- Atoms (Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button.)
- Molecules (Things start getting more interesting and tangible when we start combining atoms together. Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound. These molecules take on their own properties and serve as the backbone of our design systems.)
- Organisms (Molecules give us some building blocks to work with, and we can now combine them together to form organisms. Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface.)
- Templates
- Pages
* The main focus on this project is: 
- Browser support for modern ever-green browsers. 👍👍
- Implement this design using React and Typescript. 👍👍
- Accessibility. 👍👍
- Code Structure and reusablity. 👍👍

<a href="https://ibb.co/5F7cWTx"><img src="https://i.ibb.co/L5GpzSh/Screenshot-2022-04-29-at-16-55-35.png" alt="Screenshot-2022-04-29-at-16-55-35" border="0"></a>

<a href="https://ibb.co/h8JzkLH"><img src="https://i.ibb.co/JkwJNm2/Screenshot-2022-04-29-at-16-55-48.png" alt="Screenshot-2022-04-29-at-16-55-48" border="0"></a>

<a href="https://ibb.co/d0kf1qC"><img src="https://i.ibb.co/JRrc046/Screenshot-2022-04-29-at-16-56-42.png" alt="Screenshot-2022-04-29-at-16-56-42" border="0"></a>

<a href="https://ibb.co/0MwM82m"><img src="https://i.ibb.co/3NJNGd4/Screenshot-2022-04-29-at-16-56-48.png" alt="Screenshot-2022-04-29-at-16-56-48" border="0"></a>

## Features ✨

* In this project is implemented: TypeScript, React/Next.js, Swiper, Css3, VCC-UI.   

* **Home page** - featching a list of cars from cars.json file, and implement carousel using modern Swiper models. 
* **Learn page** - each car by concatating the id of the car to the learn (/learn/) urls.
* **Shop page** - each car by concatating the id of the car to the shop (/shop/) urls.



## Features to add/improve 🔮
- goal is to clone Volvo App (Home, Product and Shop page)
- build new custom REST APIs using Node.js or expand existing cars.json with new data.

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
pages ->
    learn ->
                    - [id].tsx
    shop  ->        - [id].tsx
    _app.tsx
    index.tsx
public ->
    api -> 
                    - cars.json
    images
src ->
    assets

    components ->
        atoms ->
                    - Button
                    - ChevronCircle
                    - Image
                    - Logo
                    - Title
                    - index.ts
        molecules ->
                    - ModelBox
                    - SelectInput
                    - index.ts
        organisms ->
                    - NavBar
                    - ModelCars
                    - Footer
                    - index.ts
    helpers ->
                    - filterByModel.ts
                    - imageLoader.ts
    interfaces ->
                    - car.ts
                    
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
