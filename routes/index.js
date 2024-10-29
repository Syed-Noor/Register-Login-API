// import Auth from './auth.js';

// const Router = (server) => {
//     app.use('./auth', Auth);
//     // home route with the get method and a handler
//     server.get("/v1", (req, res) => {
//         try {
//             res.status(200).json({
//                 status: "success",
//                 data: [],
//                 message: "Welcome to our API homepage!",
//             });
//         } catch (err) {
//             res.status(500).json({
//                 status: "error",
//                 message: "Internal Server Error",
//             });
//         }
//     })
//     };
//     // app.use('/v1/auth', Auth);
//     export default Router;
import Auth from './auth.js';

const Router = (server) => {
    // Define the auth route
    server.use('/v1/auth', Auth);

    // Home route with the get method and a handler
    server.get("/v1", (req, res) => {
        try {
            res.status(200).json({
                status: "success",
                data: [],
                message: "Welcome to our API homepage!",
            });
        } catch (err) {
            res.status(500).json({
                status: "error",
                message: "Internal Server Error",
            });
        }
    });
};

// Export the Router function
export default Router;
