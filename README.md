# LMS Frontend

### Setup instruction

1. Clone the project

```
    git clone https://github.com/Susama012/lms-project-mern.git
```

2. Move into the directory

```
    cd lms-project-mern
```

3. install dependencies

```
    npm i
```

4. run the server

```
    npm run dev
```

### Setup instructions for tailwind 

[tailwind official instruction doc] (https://tailwindcss.com/docs/installation)

1. install tailwind
```
   npm install -D tailwindcss
```

2. create tailwind config file
```
   npx tailwindcss init
```

3. Add file extensions to tailwind config file in the content file
```
   "./src/**/*.{html,js,jsx,ts,tsx}", "./index.html",
``` 

4. Add the tailwind directives at the top of the "index.css" file
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Add the following details in the plugin property of tainwind config
```
   [require("daisyui"), require("@tailwindcss/line-clamp")]
```


 ### Adding plugins and dependencies

```
npm install @reduxjs/toolkit react-redux react-router-dom react-icons
react-chartjs-2 chart.js daisyui axios react-hot-toast
@tailwindcss/line-clamp

```

### configure auto import sort eslint 

1. install simple sort 
```
   npm i -D eslint-plugin-simple-import-sort

```