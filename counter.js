// script to load the page hitcounter from https://www.websiteout.net/counter.php
// 
// i cant use the provided script directly, as it pauses page loading to execute. 
// it also cant be ran deferred, since it will try to inject the page counter at its own location.
// instead we let the script run at the bottom of the html, injecting the page counter in to a display:none div.
// then, this script moves the created counter in to the "braindamage-counter" element.

let parent = document.getElementById("braindamage-counter");
let holder = document.getElementById("counter-holder");
let counter = holder.children[holder.children.length - 1];

parent.appendChild(counter);

let unique_parent = document.getElementById("unique-braindamage-counter");
let unique_holder = document.getElementById("unique-counter-holder");
let unique_counter = unique_holder.children[unique_holder.children.length - 1];
unique_counter.src = unique_counter.src.replace(encodeURIComponent(window.location.href), encodeURIComponent(window.location.href + "/wa"));

unique_parent.appendChild(unique_counter);