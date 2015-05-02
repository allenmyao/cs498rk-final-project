# Final Project for CS498rk

## Running the Project
First, set up the app configuration. Find out how in `app/config/default/README.md`.

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
        * `config/` - app config and settings
        * `controllers/` - controllers for the api and web views
        * `models/` - mongoose models
        * `routes/` - all the routing is done in this folder
    + `frontend/` - contains all frontend files
        * `views/` - jade templates
        * `sass/` - all sass files here will be compiled to `/public/css/`
        * `js/` - all javascript files here will be uglified and copied to `/public/js/`
    + `public/` - contains all files accessible to clients
