console.log("running------->");

let A = document.querySelector(".wrapper");
let B = A.querySelector(".effect");
console.log("A", A)
console.log("B", B)
document.body.onmousemove = (e) => {
  let x = e.pageX;
  let y = e.pageY;
  B.style.top = y + "px";
  B.style.left = x + "px";
};

A.querySelectorAll(".box").forEach((text) => {
  text.onmousemove = () => {
    B.src = text.getAttribute("data-src");
  };
});
console.log("really?????-");
