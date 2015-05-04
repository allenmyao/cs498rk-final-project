# Final Project for CS498rk

## Running the Project
First, set up the app configuration. Find out how in [`app/config/default`](app/config/default).

Use the following commands to get this up and running:
```bash
npm install # if on windows add the flag `--no-bin-links`
bower install
grunt sass
grunt uglify
grunt
```

## File Structure
- `/` - project root
    + `app/` - app files, including routing, controllers, and models
        * `config/` - app config and settings (no files initially)
            - `default/` - default config and settings
        * `controllers/` - controllers for the api and web views
        * `models/` - mongoose models
        * `routes/` - all the routing is done here
    + `frontend/` - contains frontend files
        * `sass/` - sass files here will be compiled to `/public/css/`
        * `js/` - js files here will be minified and copied to `/public/js/`, AngularJS files are found here
    + `public/` - contains all files accessible to clients
        * `css/` - minified stylesheets
        * `js/` - minified javascript
        * `lib/` - bower install location
        * `partials/` - angular template partials
        * `index.html` - the app page
