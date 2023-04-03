API testing in React

Goal

The goal is to create an application for API testing only for music platform.

npm start

I created react app with name API testing and started my project with npm start.

I used https://mui.com/material-ui/getting-started/overview/ where I found how can I create theme, so I used ThemeProvider, CssBaseline and FormControlLabel and Switch to create the button witch I can change a light mode to dark mode.

I created new file with name Header.js where I created title with name api testing for that I used Typography from the same site, after that I created Container and inside that I created input field using TextField.
I create Form file, inside that file I had Category tag and SubType tag. For Category tag I created Category file where I had one input file-used textField with label select type, value and onChange. Also in that file I had map statment to display all category. For subType tag I created SubType file where I had 
input filed with labele select subtype, also had value and onChange-which depended on which category is selected. And I had map statment to display subtype for selected category.
I created Data file for musicPlatform and infoService.
Inside Form file I created Button using the same site and that button had icon send. For that button I created handleClickPost where I did axios date where I declared  let params with type and subtype. Also I had if conditional which show all params-mandatory params and fixed params. I changed url with my variable, also had method where I put my variable, and had params and I had headers with authorization-where we put token variable and had content type. That fetch had to return data in json file- for that I created state and display data in div. Because I had to category music and info I created another handleClickFiJ where I did axios date, where I declared params with type and subtype, also I had if conditional which show all params-mandatory params and fixed params. I changed url with my varibales, also had method and params. I had headers with authorization-where we put token variable and had content type. Because I had two function for one button I created handleClick where I put if conditional for both of category. And that function i put in Button onClick in file Form.
I had mandatory params. For that I created a new file BodyParams where had columns with input filed. In the left side I had key-they are fixed and in the right side I had value which we can chage. I had that for every category-music and info and every subtype-for music type I had youtube, spotify, deezer and shazam, for info I had facts, jokes. Every input filed had value and onChange. For value I created state and that I used in value and onChange function.