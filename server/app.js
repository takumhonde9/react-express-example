const express = require("express");
const app = express();

const port = 4000;
// ROUTES
app.get("/customers", (req, res) => {
    const customers = [
        { id: 1, firstName: "John", lastName: "Doe" },
        { id: 1, firstName: "Mary", lastName: "Watson" },
        { id: 1, firstName: "Billie", lastName: "Jones" }
    ];
    res.json(customers);
});
// LISTENER
app.listen(port, () => console.log(`Server is listening on port ${port}`));