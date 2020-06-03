let heading = document.getElementsByTagName('h1')[0];

let initial_text = heading.innerHTML;

heading.innerHTML = `${initial_text} - appended by script.js`;