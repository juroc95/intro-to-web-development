// Add your code here
const div = document.createElement("div");
const img = document.createElement("img");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
img.src = "../images/juhwan.jpg";
img.alt = "headshot of Juhwan";
img.width = "200";
img.height = "200";
p1.innerHTML = "Hello there! My name is Juhwan Lee"
p2.innerHTML = "Computer Science student at Portland State University with an expected graduation of March 2023 / Skilled in data structures, object-oriented programming, systems programming, algorithms, and relational databases / Experienced in final software testing on a large-scale software project / Participated in full-stack web development under a professional team environment / Quickly learn and master new technologies / Successfully work in teams and self-directed settings";
div.appendChild(img);
div.appendChild(p1);
div.appendChild(p2);
document.body.appendChild(div);

div.style.width = "50vw";
div.style.padding = "30px";
div.style.margin = "0 auto";

img.style.display = "block";
img.style.margin = "auto";
img.style.borderRadius = "50%";

p1.style.marginBottom = "0px";
p2.style.marginTop = "0px";
p1.style.fontWeight = "bolder"
p1.style.fontSize = "x-large";