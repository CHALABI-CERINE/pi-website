function loop() {
  const dx = Math.abs(state.x - state.tx);
  const dy = Math.abs(state.y - state.ty);
  
  if (dx > 0.1 || dy > 0.1) {
    state.x = lerp(state.x, state.tx, 0.16);
    state.y = lerp(state.y, state.ty, 0.16);
    if (state.el) {
      state.el.style.transform = `translate3d(${state.x}px, ${state.y}px, 0)`;
    }
    rafId = requestAnimationFrame(loop);
  } else {
    rafId = null; // Stop the loop
  }
}

// Restart loop on mouse move
function onMove(e) {
  state.tx = e.clientX - size / 2;
  state.ty = e.clientY - size / 2;
  if (!rafId) rafId = requestAnimationFrame(loop); // restart if stopped
}