const fs = require('fs');
const filepath = "/home/michael/Work/";
const filename = "todo2.txt";

let content = "- Java üben";
content += "\n- Node.js üben";
content += "\n- Gemüse einkaufen";


fs.writeFile(filepath + filename, content, (err) => {
    if(err!=null) {
        console.error("EN0ENT: no such file or directory")
    }
    else {
        console.log("File " + filepath + filename + " has been saved!"  )
    }
});