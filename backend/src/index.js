import app from "./app.js";

const main = () =>{
    app.listen(app.get("port"));
}

main();