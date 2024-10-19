const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, (req, res, next) => {
        res.send('GET request sucessfully')
    }
    )

    .post((req, res) => 
        res.send('POST request sucessfully')
    )

    app.route('contact/:contactId')
    .put((req, res) => 
        res.send('PUT request succesfully')
    )

    .delete((req, res) => 
        res.send('DELETE request sucessfully')
    )
}

export default routes;