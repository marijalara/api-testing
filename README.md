API testing in React

Goal

The goal is to create an application for API testing only for music platform.

npm start

I created react app with name API testing and started my project with npm start.

I used https://mui.com/material-ui/getting-started/overview/ where I found how can I create theme, so I used ThemeProvider, CssBaseline and FormControlLabel and Switch to create the button witch I can change a light mode to dark mode.

I created new file with name Header.js where I created title with name api testing for that I used Typography from the same site, after that I created Container and inside that I created input field using TextField. That input field I put in the new file called Form.js. Inside that file I had two input field with options to choose value from dropdown. For that I created state and that I used in value and onChange function. I used map statement to display that options. The other input field had possibility to whrite url, for that I created state and that I used in value and onChange function. 
Inside that I create Button using the same site and that button had icon send. For that button I created handleClickPost where I did axios data where I changed url with my variable, also had method where I put my variable, and had headers with authorization-where we put token variable, and had content type. After  that I had some mandatory paramters that I will use for searching music, and also had some body paramers which will change depending on selected music platform. That fetch had to return data in json file- for that I created state and display data in div.

I created the params and authorization that I will use for API testing. The params I created new file with name Params.js. In side that file I had inputs field, in the left side they had name key and the right side had name value. For the all inputs I created state and that I used in value and onChange function. The authorization I created new file called Authorization.js where I had one input field with name token. For that input field I created state and used that in value and onChange function.