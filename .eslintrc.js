module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "jsx-a11y/label-has-for": [ 2, {
            "components": [ "Label" ],
            "required": {
                "every": [ "id" ]
            },
            "allowChildren": false
        }]
    },
    "globals":{
         "fetch":true, // this means we can't overwrite the variable fetch
         "window":true
    }
    
};

