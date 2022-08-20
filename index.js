//Q.1: Write the code to access element which is having id as "text"

const element1 = document.getElementById("Text");
console.log(element1);
console.log(element1.innerText);
console.log(element1.innerHTML);


//Q.2: Write the code to access element which is having tag as "h1"

const element2 = document.getElementsByTagName("h1");
console.log(element2[0]);

//Q.3: Write the code to access element which is having class as "box"

const element3 = document.getElementsByClassName("box");
console.log(element3[0]);

//Q.4: <h1>Hello </h1> 
// Change the heading from "HELLO" to "HELLO WORLD" using DOM function

let element4 = document.getElementsByClassName('change')[0];
element1.innerText = "Hello World";

//Q.5: Create three cards on HTML page and arrange them using flex property in row or
    //  horizontal direction and also create button at the bottom named "Change Flex direction".
    //  When user clicks on this button, the cards arrangement should be changed to vertical 
    //  direction.

    function changeDirection() {
        const element5 = document.getElementsByClassName("flex_container");
    
        element5[0].style.flexFlow = "column wrap";
    }

   //Q.7: <h1>Hello </h1>
   //  Add one style attribute and give text color as red and id attribute and give the
   // id value as ""heading"" in the above given h1 tag using DOM functions

let element6 = document.getElementsByClassName("heading1");

element6[0].style.color = "red";
element6[0].setAttribute("id", "heading");
console.log(element6[0]);

//Q.8: Create an HTML page having content as Hello world and a button named Replace Text.
    //  When user will click on this button page content should be changed to "Welcome to Elevation academy

    const button = document.getElementById('btn');
    button.addEventListener('click',() => {
    const replace = document.getElementById('replace');
    replace.innerText = '"Welcome to Elevation academy"';
    button.innerText = 'Replaced';})


    // Q.9 Write code to implement timer clock using JS -- display HH:MM:SS -- the time should
    //  keep updating every second
    function clock(){
        let hh = document.getElementById("hh");
        let mm = document.getElementById("mm");
        let ss = document.getElementById("ss");
    
        let time = new Date();
        let hrs = time.getHours();
        let mins = time.getMinutes();
        let secs = time.getSeconds();
    
        hh.innerText = hrs;
        mm.innerText = mins;
        ss.innerText = secs;
    }
    clock();
    setInterval(clock,1000);


    //Q.10 Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected

    function dropdown() {
        let d  = document.getElementById("year_21-22");
        let dtext = d.options[d.selectedIndex].text;
        document.getElementById("print").innerText = dtext;
    }
    
    
//Q.11: Create a form having name ,email, phone no. , birth year 
    //   Add validations - phone no. should start with 91 , it should be 10 digits
    //   email should be domain prepbytes.com
    //   birth year should be > 95

    const input = document.getElementById('email');
    const defaultEmail = '@prepbytes.com';
    input.value = defaultEmail;
