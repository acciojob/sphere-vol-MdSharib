function volume_sphere(ev) {
    //Write your code here
   ev.preventDefault();
  const r = document.getElementById("radius").value;
  const pi = 3.14;
  let vol = (4 * pi * r * r *r) / 3;
  let res = document.getElementById("volume");
  res.value = vol.toFixed(4);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
