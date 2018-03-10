### Connecting to the backend using Ajax

Exactly like we did in lab, we will use ajax to grab a JSON document and then extract parts of that document to display on the webpage.

Add this JavaScript code to the HTML via a script tag


    <script type="text/javascript">
        $.get("/events/search", function(data) {
            console.log(data);
            console.log(data[0].name);
        });
    </script>


You can open the element inspector in Chrome to preview the data by right clicking the page and then selecting the 'Inspect Element' option. This will open a new window. Navigate to the 'Console' tab and reload the page. You can then click the downwards arrow to explore the JSON object.

For more information about JSON in JavaScript go [here](https://www.w3schools.com/js/js_json.asp)

Script tags can also load script files from external sources as to not clutter the web page


    <script src="<path to script without angle brackets>" type="text/javascript" />


Make sure to place all JavaScript files into the `public/js` folder with the `.js` extension. 

