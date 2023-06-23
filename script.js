function volume_sphere(ev) {
    //Write your code here
   ev.preventDefault();
  const r = document.getElementById("radius").value;
  const pi = 3.14;
  const vol = 4/3 * pi * r * r *r;
  let res = document.getElementById("volume");
  res.value = vol;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
