# Final Project for CS498rk

## Running the Project
Use the following commands to get this up and running:
```bash
npm install # if on windows add the flag `--no-bin-links`
bower install
grunt sass
grunt uglify
grunt # or run `npm start`. To run without grunt watching client files, use `node app.js`
```

## File Structure
- `/` folder - project root
    + `app/` folder - app files, including routing, controllers, and models
        * `config/` folder - app config and settings
        * `controllers/` - controllers for the api and web views
        * `models/` - mongoose models
        * `routes/` - all the routing is done in this folder
    + `frontend/` folder - contains all frontend files
        * `views/` folder - jade templates
        * `sass` folder - all sass files here will be compiled to `/public/css/`
        * `js` folder - all javascript files here will be uglified and copied to `/public/js/`
    + `public/` folder - contains all files accessible to clients
