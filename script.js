document.addEventListener("mousemove", parallax);
function parallax(event) {
  this.querySelectorAll(".movable").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 270;
    const y = (window.innerHeight - event.pageY * position) / 270;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
