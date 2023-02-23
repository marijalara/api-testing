API testing in React

Goal

The goal is to create an application for API testing only for music platform.

npm start

I created react app with name API testing and started my project with npm start.

I used https://mui.com/material-ui/getting-started/overview/ where I found how can I create theme, so I used ThemeProvider, CssBaseline and FormControlLabel and Switch to create the button witch I can change a light mode to dark mode.

I created header for that I used Typography from the same site, after that I created Container and inside that I created input field using TextField. Two input field had options to choose value form dropdown. For that I created state and that I used in value and onChange function. I used map statement to display that options. The other input field had possibility to whrite url, for that I created state and that I used in value and onChange function.

I created the params and authorization that I will use for API testing. The params had two input field, one had name key and the other had name value. For the both of them I created state and that I used in value and onChange function. The authorization had one input field with name token. For that input field I created state and used that in value and onChange function.

I create Button using the same site and that button had icon send. For that button I created handleSubmit where I did fetch data where I changed url with my variable, also that fecth had method where I put my variable, and had headers with authorization-where we put token variable, and had content type. That fetch had to return data in json file- for that I created state and display data in div.