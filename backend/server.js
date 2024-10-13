const express = require('express');
const neo4j = require('neo4j-driver');

const app = express(); // create express app
app.use(express.json()); // make express handle JSON data

//Setting up connection to Neo4j database using new4j-driver
const driver = neo4j.driver(
    'neo4j://localhost:7687', 
    neo4j.auth.basic(
        'neo4j', 'password'));

const session = driver.session();

//Creating API endpoint to create a new user
    //POST route will be triggered when a POST request is made to /api/users
    //req, res are request and response objects
    //we are using .post method because we want to send data to the serve to create or updatae a resource
app.post('/api/users', async (req, res) => {

    const { email } = req.body; //extracting name and email from request body
    console.log("email: ", email);

});