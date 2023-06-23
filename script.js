function volume_sphere(ev) {
    //Write your code here
   ev.preventDefault();
  const r = document.getElementById("radius").value;
  const pi = 3.14;
  let vol = (4/3) *  Math.PI * Math.pow(r, 3);
  let res = document.getElementById("volume");
  // vol = number.toFixed(4);	
  res.value = vol.toFixed(4);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
