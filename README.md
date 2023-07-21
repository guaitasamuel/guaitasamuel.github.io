Este crud esta hecho con mongodb--node.js--express--express-handlebars

esto lo use en los scripts:

    "dev": "nodemon src/index.js --exec babel-node",
    "build": "babel src -d crud && ncp src/views crud/views && ncp src/public crud/public",