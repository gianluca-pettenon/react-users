import styled from 'styled-components';

export const Container = styled.header`
    background: var(--dark);
`;

export const Content = styled.div`

    max-width: 1128px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1rem 12rem;

    button {
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
        filter: brightness(0.9)
    }

    }

.circles {
  width: 10vmin;
  height: 10vmin;
  position: relative;
  perspective: 25000px;
  color: #61DAFB;
}

.circles span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 18.4%;
  height: 18.4%;
  border-radius: 100%;
  background: currentColor;
}

.circles div {
  position: absolute;
  width: 100%;
  height: 100%;
  border-left: 0.5vmin solid;
  border-top: 0.5vmin solid transparent;
  border-radius: 100%;
}

.circles div:nth-child(1) {
  -webkit-animation: anim-1 1s linear infinite;
   animation: anim-1 1s linear infinite;
}

.circles div:nth-child(2) {
  -webkit-animation: anim-2 1s linear infinite;
    animation: anim-2 1s linear infinite;
}

.circles div:nth-child(3) {
  -webkit-animation: anim-3 1s linear infinite;
    animation: anim-3 1s linear infinite;
}

@-webkit-keyframes anim-1 {
  from {
    transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
  }
  to {
    transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
  }
}

@keyframes anim-1 {
  from {
    transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
  }
  to {
    transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
  }
}
@-webkit-keyframes anim-2 {
  from {
    transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
  }
  to {
    transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
  }
}
@keyframes anim-2 {
  from {
    transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
  }
  to {
    transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
  }
}
@-webkit-keyframes anim-3 {
  from {
    transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
  }
}
@keyframes anim-3 {
  from {
    transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
  }
}

`;