import neo4j from 'neo4j-driver';

const driver = neo4j.driver(
    'neo4j+s://c23652c7.databases.neo4j.io:7687',  // Your Connection URL
    neo4j.auth.basic('neo4j', 'IB1e7c4H2YFDGoFhWGf2pyw2W5YQ17AeQZfbwk-rDUs')
);


export const handler = async (event) => {
    let session;

    try {
        // Parse the body from the event
        const body = JSON.parse(event.body); // Extract POST body data
        const { email } = body; // Extract email field

        if (!email) {
            throw new Error("No email found in the request");
        }

        // Open a session to Neo4j
        session = driver.session();

        // Store the email into Neo4j
        const query = 'CREATE (e:Email {email: $email}) RETURN e';
        const params = { email };

        // Run the query and return the created node
        const result = await session.run(query, params);
        const createdEmail = result.records[0].get('e').properties.email;

        // Return success response with the created email
        return {
            statusCode: 201,
            body: JSON.stringify({
                message: 'Email stored successfully in Neo4j',
                email: createdEmail
            }),
        };
    } catch (error) {
        console.error('Error:', error);

        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error', error: error.message })
        };
    } finally {
        // Close the Neo4j session
        if (session) session.close();
    }
};
