// ==UserScript==
// @name         Ajou SSO Theme
// @description  Apply ajou sso login page theme.
// @match        *://sso.ajou.ac.kr/*
// @author       Hyeonseung Kang <@hyeonseungkang>
// @version      1.1
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ajou.ac.kr
// @grant        none
// @inject-into  content
// ==/UserScript==

console.time('apply_theme_js');

// 고해상도 배경 짤리는 문제
// meta viewpoint 대체
try {
    document.querySelector('head meta[name=viewport]').remove();
    const metaViewportElement = document.createElement('meta');
    metaViewportElement.content = "width=device-width, initial-scale=1.0, viewport-fit=cover";
    document.querySelector('head').appendChild(metaViewportElement);
} catch (e) {
    console.error('error while replace meta viewpoint')
    console.error(e)
}

try {
    // favicon 삽입
    const faviconElement = document.createElement('link');
    faviconElement.rel = "icon shortcut";
    faviconElement.href = "https://portal.ajou.ac.kr/cmn/image/favicon.ico";
    document.querySelector('head').appendChild(faviconElement);
    // copyright 년도
    const date = new Date();
    document.querySelector('.bottom > ul > li.copy').innerText = `ⓒ ${date.getFullYear()} Ajou University`;
    // 로그인 좌우 흰색 투명 배경 안 나오게
    document.querySelectorAll('.content, .pc-wrap, .login-wrap').forEach(v => v.style = 'background: none !important; background-color: none !important;');
    // 좌 공간 로고 삽입
    document.querySelector('.pc-wrap').innerHTML = `
<img src="https://portal.ajou.ac.kr/cmn/image/logo.png" width="80%" /><br>
<span>연결된 세상, 협력하는 지성</span>
`;
} catch (e) {
    console.log('error while replace html elements')
    console.log(e)
}

//for english
try {
    if (!String(navigator.language).includes('ko')) {
        document.querySelector('div.bottom a').innerText = 'Privacy Policy';
        document.querySelector('div.login-wrap li a:nth-child(1)').innerText = 'Sign up';
        document.querySelector('div.login-wrap li:nth-child(2) a').innerText = 'Find ID/PW';
        document.querySelector('div.login-wrap li:nth-child(3) a').innerText = 'Inquiry';
    }
} catch (e) {
    console.error('error while apply language en')
    console.error(e)
}

const styleValue = `
/* 다크모드 대응 */
@media (prefers-color-scheme: dark) {
    /* 다크모드 배경 어둡게 설정 */
    body::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.64); /* 반투명 검정색 */
        z-index: 1; /* 이미지 위에 덮힘 */
    }

    /* 박스 흰색으로, 그림자 더 어둡게 */
    .box-s {
        box-shadow:  23px 23px 46px rgba(0, 0, 0, 0.4),
            -23px -23px 46px rgba(0, 0, 0, 0.5);
        background: linear-gradient(145deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.1));
    }
}

/* 라이트모드 대응 */
@media (prefers-color-scheme: light) {
    @media (min-width: 960px) {
        .box-s {
            box-shadow:  23px 23px 46px rgba(190, 190, 190, 0.4),
                -23px -23px 46px rgba(255, 255, 255, 0.4);
            background: linear-gradient(145deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35));
        }
    }
    @media (max-width: 960px) {
        .box-s {
            box-shadow:  12px 12px 24px rgba(190, 190, 190, 0.4),
                -12px -12px 24px rgba(255, 255, 255, 0.4);
            background: linear-gradient(145deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35));
        }
    }
}

/*
  PWA 대응,
  nested하니 PWA 내 라이트 및 다크 모드 수정 시 여기서
*/
@media (display-mode: minimal-ui) {
    /* 타이틀 중앙 정렬 */
    section.title > h1 {
        text-align: center;
    }

    /* 로그인 박스 nested */
    .login-wrap {
        /* 로그인 input 중앙정렬 */
        input {
            text-align: center;
        }

        /* 로그인 input 글자 선택 시 글자 선택 배경 투명 */
        input::selection {
            background: transparent;
        }

        /* 로그인 input placeholder 투명색 */
        input::placeholder {
            opacity: 0;
        }

        /* 다크 모드 대응 */
        @media (prefers-color-scheme: dark) {
            /* input userId 배경색 */
            input#userId {
                background: rgba(10, 5, 0, 0.6);
            }
        }
        /* 라이트 모드 대응 */
        @media (prefers-color-scheme: light) {
            /* input userId 배경색 */
            input#userId {
                background: rgba(238, 238, 238, 0.8);
            }
        }
    }
}

/* html 배경 */
html {
    background: rgba(0, 0, 0, 0.80);
}

/* body 배경 */
body {
    width: 100vw;
    height: 100vh;
    background: url(/common/css/images/bg.jpg) top left !important;
    background-blend-mode: multiply;
    background-size: cover !important;
    background-repeat: no-repeat !important;
}

/* 로그인 박스 radius */
.box-s {
    border-radius: 24px;
}

/* 로그인 박스 배경 삭제, 세로 중앙정렬 */
.context {
    background: none;
    vertical-align: middle;
}

.bg {
    background: none;
    vertical-align: middle;

    display: flex;
    width: calc(100vw);
    height: calc(100vh);
    position: relative;
    top: 0;
    text-align: center;
}

.content {
    height: auto !important;
    min-height: 0 !important;
}

/* footer 색상 검정 */
.bottom > ul > li a, .bottom > ul > li.copy, .login-wrap a:not(.btn-login) {
    color: #FFFFFF !important;
}

/* copyright 좌편 세로선 삭제 */
.bottom > ul > li:nth-child(2):before {
    content: none !important;
}

/* 로그인 박스 내 footer margin 조정 */
/* 2025-03-15 삭제
 .bottom  {
	bottom: 28px !important;
}
*/

/* 로그인 박스 padding 조정 */
@media (max-width: 960px) {
	.box-s {
		margin: 0 16px 0 16px !important;
	}

    .login-wrap {
        margin-top: 0 !important;
        padding: 56px 42px 56px 42px !important; todo
        ul {
            margin-top: 20px;
        }
    }
}

@media (min-width: 960px) {
    .login-wrap {
        margin-top: calc(50% - 130px) !important;
        padding: 36px 56px 96px 56px !important;
    }
}

input {
    outline: none !important;
    border: none !important;
    color: black !important;
    border-radius: 8px;
}

input::placeholder {
    color: grey !important;
}

.save-id {
    display: none;
}

.pc-wrap, .login-wrap {
    /* 로그인 박스 높이 조정 */
    height: auto !important;
    text-align: center !important;
    vertical-align: middle !important;
    img {
        margin-bottom: 8px !important;
        color: color(display-p3 1 1 1);
        filter: brightness(1.5) contrast(1.2);
    }

    span {
        color: white !important;
        font-size: 12pt !important;
        line-height: 18pt;
        margin-left: 24px;
        margin-bottom: 78px !important;
        display: inline-block;
    }

    img, span {
        filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.3));
    }

    /* 로그인 버튼 색상 */
    a.btn-login {
        background-color: #0055AE !important;
        border: none !important;
        border-radius: 8px;
    }

    /* 로그인 박스 h1 색상 및 크기 조정 */
    h1 {
        /* color: #0055AE !important; */
        color: #fff !important;
        filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.3));
        font-size: 22px !important;
    }

    li {
        color: #EFF1F2 !important;
    }
}
`;

try {
    // css 삽입
    const styleElement = document.createElement('style');
    styleElement.innerHTML = styleValue;
    document.querySelector('head').appendChild(styleElement);
} catch (e) {
    console.error('error while insert css')
    console.error(e)
}

console.timeEnd('apply_theme_js');
