<!-- https://codepen.io/z-/pen/zYxdRQy -->

<script setup lang="ts">
</script>

<template>
  <div class="bubbles">
    <div
      v-for="i in 128"
      :key="i"
      class="bubble"
      :style="`
          --size:${2+Math.random()*4}rem;
          --distance:${6+Math.random()*4}rem;
          --position:${-5+Math.random()*110}%;
          --time:${3+Math.random()*2}s;
          --delay:${-1*(2+Math.random()*2)}s;`"
    />
    <svg style="position:fixed; top:100vh">
      <defs>
        <filter id="blob">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="10"
            result="blur"
          />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="blob"
          />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.bubbles {
  position: absolute;
  top:0;
  left:0;
  right:0;
  height:1rem;
  background:var(--color-cyan-600);
  filter:url("#blob");

  .bubble {
    position: absolute;
    left:var(--position, 50%);
    background:var(--color-cyan-600);
    border-radius:100%;
    animation:bubble-size var(--time, 4s) ease-in infinite var(--delay, 0s),
              bubble-move var(--time, 4s) ease-in infinite var(--delay, 0s);
    transform:translate(-50%, 100%);
  }
}

@keyframes bubble-size {
  0%, 75% {
    width:var(--size, 4rem);
    height:var(--size, 4rem);
  }
  100% {
    width:0rem;
    height:0rem;
  }
}
@keyframes bubble-move {
  0% { bottom:-4rem; }
  100% { bottom:var(--distance, 10rem); }
}
</style>
