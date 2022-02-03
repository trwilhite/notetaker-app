// add packages required for the application to run
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// establish the PORT variable: will use the environment port variable if it has been set, otherwise will default
const PORT = process.env.PORT || 3001;

const app = express();

// provide static access to 'public' folder so routes don't have to be created for each indivual file
app.use(express.static('public'));

// middleware functions
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// use api and html routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
})