Create react app from scratch to produciton ready.
    - Initialize repository: package.json, Git, README
    - Install runtime: react, react-dom
    - Transpile: Babel with @babel/preset-env and @babel/preset-react
    - Bundle: Webpack (entry, output, babel-loader, asset modules, HtmlWebpackPlugin)
    - Dev server: webpack-dev-server with HMR and source maps
    - Styles & assets: css-loader, style-loader/PostCSS, image/font handling
    - App structure: src/, components/, pages/, hooks/, utils/, index.js, App.js
    - Routing: react-router-dom (code-split routes)
    - State: React Context + hooks or Redux Toolkit for global state
    - Testing: Jest + React Testing Library; optional Cypress for E2E
    - Lint & format: ESLint + Prettier, husky + lint-staged pre-commit
    - Environment: .env files and cross-env scripts for modes
    - Build optimizations: code splitting, tree-shaking, Minimize (Terser), long-term caching
    - CI/CD: GitHub Actions (build/test), deploy to Vercel/Netlify or S3+CloudFront
    - Monitoring & perf: Lighthouse audits, Sentry or similar error tracking
    - Accessibility: axe/core checks and semantic markup

    - React libraries alone can not make app faster, there are lot of other packages required to make our producution ready app.
    - How to get packages into our solution.
    - npm manages packages but not stands for node packages manager.
    - Project use node package manager 
    - npm init this generate package.json is a configuration for npm
    - package.json 
    - Add dependencies important.
    - bundler bundles our app properly to ship to production example bundlers webpack/parcel/veet
    - We use bundler parcel in app  npm install -d parcel intall parcel package as a deve depnedency
    - using ~ and ^ with version number package.json. ~ uptomatically update the package when there is major - release. ^ automatically uodate the packe when there is update in minor version of the package.
    - What is package-lock json ? what is the difference between 
    - package-lock json keeps track of exact version of package installed in the application.
    - nodemodules folder is also created on parcel bundler install, all the dependencies of parser  is "Transitive dependencies"
    - If we have package.json and package.lock we can recreates nodemodules.

    -- Build command
    -- npx parcel index.html executes npm package parcel and give source file as index.html
    -- Avoid CDN link to import react and react dom into you app, this introduces unnecessary netowrk calls.
    -- use node mdules for the same in your app.

    --# Parcel is Bundler gives super power to app, and makes react app faster.
        Dev Build
        Create local server
        Automaticall refreshing on save 
        hmr - Hot module replacement.
        File watcher algorithm
        Caching for faster builds
        Immage Optimization
        Minification production builds
        Bundling
        Compression
        Consistent Hashing
        Differential Bundling - To support old browsers.
        Error Handling and Diagnosis
        Support https hosting
        Tree shaking :- Remove unused code for
        Different dev and production builds

        -npx parcel build index.html (production ready build)
        -browserslist --Application supported in the browser versions

    - npx parcel index.html can be replace wiht npm run start/npm start
    - npm parcel build index.html can be simplified to industry standard with npm run build.
    - This all can be achived by adding configuration script in packages.json file.

    -- import REACT from "react"  , this result in error if you do not consume scirt in html as module.
    -- React.createElement("type",{props},"Child/innerobject") create object when render to DOM becomes HTML element.
    -- root.render(jselement) on will replace everything in root with html element from jselement

    --JSX is not html in js file, jsx is hrml like syntax in javascript file.
    -JSX is simplified sytax for creating react elements, it is html like syntax.

    Javascript is code which js engine can understand
    js engine only unerstand ecma script(es6)
    jsx is not understood by js engine.
       (babel => transpiler)
    jsx => React.createElement => ReactElement js Object => HTMLElement(render)

    Code is transpiled before going to jsengine, parcel take help of bable to transpile the jsx code to react code understood by dom. 

    Attributes in jsx follow camelCase, but in html it is all lowercase.

    //Components
    // Class base components -old way
        // class Header extends React.Component{
        //     render(){
        //         return <h1 className="header"> Hello, React from Class Component 🎶🎶🐧</h1>
        //     }
        // }
    // function base components - new way this is a normal javascript function that returns some jsx
        // const Header = () => {
        //     return <h1 className="header"> Hello, React from Function Component 🎶🎶🐧</h1>
        // }

    // Component composition:- Components in componet **
    // Jsx prevents cross site scripting attacks, atomatically taken care by react