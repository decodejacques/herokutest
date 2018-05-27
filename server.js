let express = require('express')
let app = express();
const PORT = process.env.PORT || 5000

app.get('/foobar', (req,res) => {
    res.send("hey");
})
app.listen(PORT);