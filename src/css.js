const string =
    `
.pikachu * {
    padding: 0;
    margin: 0;
    box- sizing: border - box;
}

.pikachu *:: before,
.pikachu *::after {
    box - sizing: border - box;
}

.pikachu {
    height: 100vh;
    background: #ffe600;
    position: relative;
}

.nose {
    border: 16px solid red;
    border - color: black transparent transparent;
    border - radius: 45px;
    height: 0px;
    width: 0px;
    position: relative;
    top: 45 %;
    right: -50 %;
    margin - left: -16px;
}

@keyframes wave {
    0 % {
        transform: rotate(0deg)
    }

    33 % {
        transform: rotate(5deg)
    }

    66 % {
        transform: rotate(-5deg)
    }

    100 % {
        transform: rotate(0deg)
    }
}

.nose:hover {
    transform - origin: center bottom;
    animation: wave 300ms infinite linear;
}

.eye {
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50 %;
    top: 50 %;
    margin - top: -100px;
    margin - left: -32px;
    border - radius: 50 %;
    background: #2e2e2e;
}

.eye::before {
    content: '';
    border: 2px solid #000;
    width: 32px;
    height: 32px;
    background: #fff;
    display: block;
    border - radius: 50 %;
    position: relative;
    right: -5px;
}

.eye.left {
    transform: translateX(-100px);
}

.eye.right {
    transform: translateX(100px);
}

.mouth {
    width: 138px;
    height: 150px;
    position: absolute;
    top: 50 %;
    left: 50 %;
    margin - left: -69px;
    overflow: hidden;
}
.mouth.up {
    position: relative;
    top: -10px;
    z - index: 1;
}

.mouth.up.lip {
    border: 3px solid black;
    width: 66px;
    height: 30px;
    border - top - color: transparent;
    position: relative;
    position: absolute;
    background: #ffe600;
}
.mouth.up.lip.left {
    border - radius: 0 0 0 50px;
    transform: translateX(-1px) rotate(-20deg);
    right: 50 %;
}
.mouth.up.lip.right {
    border - radius: 0 0 50px 0;
    transform: translateX(1px) rotate(20deg);
    left: 50 %;
}
.mouth.up.lip::before {

    content: '';
    height: 30px;
    width: 7px;
    position: absolute;
    bottom: 0;
    background: #ffe600;
}
.mouth.up.lip.left::before {
    right: -6px;
}
.mouth.up.lip.right::before {
    left: -6px;
}

.mouth.down.yuan1 {
    border: 2px solid black;
    width: 138px;
    height: 600px;
    position: absolute;
    bottom: 0;
    border - radius: 138px / 600px;
    background: #9b000a;
    overflow: hidden;
}

.mouth.down.yuan2 {
    width: 130px;
    height: 110px;
    position: absolute;
    bottom: 0;
    border - radius: 138px / 110px;
    background: #ff485f;
}

.face {
    border: 1px solid red;
    width: 64px;
    height: 64px;
    border - radius: 50 %;
    position: absolute;
    top: 50 %;
    left: 50 %;
    margin - left: -32px;
    background: #ff0000;
}

.face.left {
    transform: translateX(-132px) translateY(32px);
}

.face.right {
    transform: translateX(132px) translateY(32px);
}
`
//导出
export default string;
//导入
//import string from './css.js'