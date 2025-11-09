<template>
  <div class="background">
    <span v-for="i in 26" :key="i"></span>
  </div>
</template>


<style scoped>
      @keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}

.background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #0d001f;
    overflow: hidden;
    z-index: 0;
}

.background span {
    width: 50vmin;
    height: 50vmin;
    border-radius: 50vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 9;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}


.background span:nth-child(0) {
    color: #180052;
    top: 99%;
    left: 43%;
    animation-duration: 331s;
    animation-delay: -83s;
    transform-origin: 22vw -21vh;
    box-shadow: -100vmin 0 12.83698757388403vmin currentColor;
}
.background span:nth-child(1) {
    color: #180052;
    top: 72%;
    left: 21%;
    animation-duration: 157s;
    animation-delay: -285s;
    transform-origin: 13vw -24vh;
    box-shadow: -100vmin 0 13.050125979373492vmin currentColor;
}
.background span:nth-child(2) {
    color: #180042;
    top: 41%;
    left: 4%;
    animation-duration: 122s;
    animation-delay: -298s;
    transform-origin: 12vw -18vh;
    box-shadow: -100vmin 0 12.893863318861458vmin currentColor;
}
.background span:nth-child(3) {
    color: #22003d;
    top: 60%;
    left: 7%;
    animation-duration: 409s;
    animation-delay: -357s;
    transform-origin: -8vw 23vh;
    box-shadow: 100vmin 0 12.611381974535359vmin currentColor;
}
.background span:nth-child(4) {
    color: #22003d;
    top: 41%;
    left: 49%;
    animation-duration: 26s;
    animation-delay: -8s;
    transform-origin: 18vw 21vh;
    box-shadow: 100vmin 0 13.035083856530498vmin currentColor;
}
.background span:nth-child(5) {
    color: #180042;
    top: 30%;
    left: 88%;
    animation-duration: 353s;
    animation-delay: -396s;
    transform-origin: 18vw 2vh;
    box-shadow: -100vmin 0 13.289670655550514vmin currentColor;
}
.background span:nth-child(6) {
    color: #180052;
    top: 57%;
    left: 70%;
    animation-duration: 14s;
    animation-delay: -367s;
    transform-origin: 18vw 10vh;
    box-shadow: 100vmin 0 12.82786537716425vmin currentColor;
}
.background span:nth-child(7) {
    color: #22003d;
    top: 84%;
    left: 17%;
    animation-duration: 34s;
    animation-delay: -58s;
    transform-origin: 14vw -18vh;
    box-shadow: 100vmin 0 13.033267429909658vmin currentColor;
}
.background span:nth-child(8) {
    color: #180052;
    top: 3%;
    left: 27%;
    animation-duration: 280s;
    animation-delay: -307s;
    transform-origin: 2vw -14vh;
    box-shadow: 100vmin 0 13.130255468416461vmin currentColor;
}
.background span:nth-child(9) {
    color: #180042;
    top: 22%;
    left: 21%;
    animation-duration: 323s;
    animation-delay: -363s;
    transform-origin: 14vw 19vh;
    box-shadow: -100vmin 0 13.262920125989423vmin currentColor;
}
.background span:nth-child(10) {
    color: #22003d;
    top: 100%;
    left: 17%;
    animation-duration: 373s;
    animation-delay: -266s;
    transform-origin: 6vw -21vh;
    box-shadow: 100vmin 0 13.128534812979462vmin currentColor;
}
.background span:nth-child(11) {
    color: #180052;
    top: 80%;
    left: 16%;
    animation-duration: 350s;
    animation-delay: -5s;
    transform-origin: 4vw -13vh;
    box-shadow: 100vmin 0 12.766536822685156vmin currentColor;
}
.background span:nth-child(12) {
    color: #22003d;
    top: 38%;
    left: 10%;
    animation-duration: 19s;
    animation-delay: -110s;
    transform-origin: -6vw -21vh;
    box-shadow: 100vmin 0 12.535146627564695vmin currentColor;
}
.background span:nth-child(13) {
    color: #22003d;
    top: 63%;
    left: 71%;
    animation-duration: 131s;
    animation-delay: -233s;
    transform-origin: -9vw 1vh;
    box-shadow: 100vmin 0 13.285863888822323vmin currentColor;
}
.background span:nth-child(14) {
    color: #22003d;
    top: 61%;
    left: 28%;
    animation-duration: 183s;
    animation-delay: -403s;
    transform-origin: -3vw -5vh;
    box-shadow: -100vmin 0 12.718656804651003vmin currentColor;
}
.background span:nth-child(15) {
    color: #180042;
    top: 89%;
    left: 9%;
    animation-duration: 316s;
    animation-delay: -37s;
    transform-origin: 25vw -23vh;
    box-shadow: -100vmin 0 13.066555311550987vmin currentColor;
}
.background span:nth-child(16) {
    color: #22003d;
    top: 40%;
    left: 48%;
    animation-duration: 311s;
    animation-delay: -242s;
    transform-origin: 4vw 10vh;
    box-shadow: 100vmin 0 13.04837425662788vmin currentColor;
}
.background span:nth-child(17) {
    color: #180042;
    top: 89%;
    left: 91%;
    animation-duration: 332s;
    animation-delay: -258s;
    transform-origin: -24vw 22vh;
    box-shadow: 100vmin 0 13.181120545141846vmin currentColor;
}
.background span:nth-child(18) {
    color: #180052;
    top: 80%;
    left: 76%;
    animation-duration: 292s;
    animation-delay: -243s;
    transform-origin: 13vw 9vh;
    box-shadow: -100vmin 0 13.498071780739496vmin currentColor;
}
.background span:nth-child(19) {
    color: #180052;
    top: 27%;
    left: 1%;
    animation-duration: 140s;
    animation-delay: -128s;
    transform-origin: 0vw -20vh;
    box-shadow: 100vmin 0 13.044043049438661vmin currentColor;
}
.background span:nth-child(20) {
    color: #180042;
    top: 82%;
    left: 86%;
    animation-duration: 335s;
    animation-delay: -115s;
    transform-origin: 7vw 23vh;
    box-shadow: 100vmin 0 13.455439285996754vmin currentColor;
}
.background span:nth-child(21) {
    color: #22003d;
    top: 96%;
    left: 3%;
    animation-duration: 224s;
    animation-delay: -388s;
    transform-origin: -4vw 11vh;
    box-shadow: -100vmin 0 13.215225626121759vmin currentColor;
}
.background span:nth-child(22) {
    color: #180042;
    top: 67%;
    left: 36%;
    animation-duration: 90s;
    animation-delay: -274s;
    transform-origin: -13vw 10vh;
    box-shadow: -100vmin 0 12.77767202924828vmin currentColor;
}
.background span:nth-child(23) {
    color: #180052;
    top: 55%;
    left: 58%;
    animation-duration: 211s;
    animation-delay: -280s;
    transform-origin: -7vw -13vh;
    box-shadow: 100vmin 0 12.72798625916871vmin currentColor;
}
.background span:nth-child(24) {
    color: #180052;
    top: 71%;
    left: 72%;
    animation-duration: 101s;
    animation-delay: -307s;
    transform-origin: 12vw -2vh;
    box-shadow: -100vmin 0 13.045738369752593vmin currentColor;
}
.background span:nth-child(25) {
    color: #180042;
    top: 32%;
    left: 72%;
    animation-duration: 42s;
    animation-delay: -88s;
    transform-origin: -16vw -7vh;
    box-shadow: 100vmin 0 13.446603125226098vmin currentColor;
}

</style>
