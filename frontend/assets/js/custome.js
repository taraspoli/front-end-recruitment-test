function cloneBacon() {
    let elem = document.querySelector('section img');
    let clone = elem.cloneNode(true);
    clone.classList.add('new-image');
    elem.after(clone);
}

document.querySelector("section button").addEventListener("click",function() {
  cloneBacon();
})