function volume_sphere(ev) {
    //Write your code here
   ev.preventDefault();
  const r = document.getElementById("radius").value;
  const pi = 3.14;
  const vol = (4 * pi * r * r *r) / 3;
  let res = document.getElementById("volume");
  res.value = Number((Math.floor(vol * 100) / 100).toFixed(2));
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
