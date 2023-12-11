<template>
  <div class="app">
    <div class="container">
      <h1>Share Document</h1>
    </div>
  </div>
</template>
<style scoped lang="scss">
// Codepen spesific styling - only to center the elements in the pen preview and viewport
.container {
  position: relative;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
}
// End Codepen spesific styling

h1 {
  color: mix(#0e0e0e, #0b7cad, 85%);
  font-size: calc(10px + 8vw);
  font-weight: 900;
  text-shadow: -0.0075em 0.0075em 0 mix(#fff, #1edfe9, 94%),
    0.005em 0.005em 0 mix(#fff, #1edfe9, 60%),
    0.01em 0.01em 0 mix(#fff, #1edfe9, 62%),
    0.015em 0.015em mix(#fff, #1edfe9, 64%),
    0.02em 0.02em 0 mix(#fff, #1edfe9, 66%),
    0.025em 0.025em 0 mix(#fff, #1edfe9, 68%),
    0.03em 0.03em 0 mix(#fff, #1edfe9, 70%),
    0.035em 0.035em 0 mix(#fff, #1edfe9, 72%);
      animation: fadeinUp 2s ease;
}
@keyframes fadeinRight {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
@keyframes fadeinUp {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>