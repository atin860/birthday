(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();const c={hero:{badge:"Special Birthday Surprise 💝",title:"Happy Birthday! 🎂✨",subtitle:"Some people come into your life and quietly make everything a little brighter. You are one of those people.",ctaButton:"Your Surprise Awaits 💝",madeWithLove:"Made with ❤️ just for you"},photo:{url:"./bestie-photo.jpg",alt:"Best Friend Photo",caption:"The smile that makes everything better ✨"},message:{paragraphs:["Happy Birthday to one of the most special people in my life! ❤️","I honestly don't know how to explain how lucky I feel to have a friend like you. From random conversations and stupid jokes to those moments when we don't even need words, every memory with you is something I'll always value.","You have this amazing way of making ordinary days feel better just by being around. Your smile, your craziness, your kindness and the way you care about people make you truly special.","On your birthday, I just want you to know that I hope life gives you everything you deserve — endless happiness, beautiful memories, success, peace, and lots of reasons to smile.","Keep being the amazing person you are. Never change yourself just to fit into someone else's world.","And no matter how much life changes, I hope our friendship always remains one of those beautiful things that never fades.",`Happy Birthday once again! 🎂💖
Stay happy, stay crazy, and keep smiling — always.`]},memories:[{id:1,title:"The Favorite Smile ✨",date:"Core Memory",image:"./bestie-photo.jpg",caption:"That bright smile that instantly brings positive vibes everywhere."},{id:2,title:"Uncontrollable Laughter 🤣",date:"Pure Happiness",image:"./memory-1.jpg",caption:"Hours going by like seconds talking about absolute nonsense."},{id:3,title:"Another Unforgettable Moment 🌸",date:"Good Times",image:"./memory-2.jpg",caption:"Creating core memories one adventure at a time."},{id:4,title:"Endless Memories 🌙",date:"Always & Forever",image:"./bestie-photo.jpg",caption:"Celebrating another year of you being completely amazing."}],qualities:[{id:"smile",title:"Your Smile 😊",description:"It lights up the whole room instantly and makes bad days feel so much lighter.",gradient:"linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)"},{id:"kindness",title:"Your Kindness ❤️",description:"The genuine warmth and love you give to everyone around you is truly rare.",gradient:"linear-gradient(135deg, #7b2cbf 0%, #9d4edd 100%)"},{id:"craziness",title:"Your Crazy Side 😂",description:"The unhinged humor, weird noises, and stupid jokes that make my life 100x funnier.",gradient:"linear-gradient(135deg, #fda085 0%, #f6d365 100%)"},{id:"energy",title:"Your Positive Energy ✨",description:"No matter how gloomy things get, you bring hopeful, cozy vibes everywhere.",gradient:"linear-gradient(135deg, #ffb7b2 0%, #ff9aa2 100%)"},{id:"support",title:"Your Support 🤝",description:"Knowing you always have my back no matter what means more than words can say.",gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"},{id:"you",title:"Simply Being You 💖",description:"Authentic, unapologetic, beautiful, and irreplaceable. Never change for anyone.",gradient:"linear-gradient(135deg, #ff758c 0%, #ffb7b2 100%)"}],wishSection:{quote:"Here's to another beautiful year of YOU. 🥂✨",subtext:"May this year bring you more happiness than you can imagine, more memories than you can count, and countless reasons to smile.",buttonText:"Make a Wish 🎂",wishConfirmationTitle:"Wish Made! ✨",wishConfirmationText:"Now go make this year unforgettable. ❤️"},music:{url:"https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=sweet-piano-melody-112344.mp3",title:"Sweet Melody"}};function M(){const t=document.getElementById("bg-canvas");if(!t)return;const e=t.getContext("2d");let s=t.width=window.innerWidth,n=t.height=window.innerHeight;window.addEventListener("resize",()=>{s=t.width=window.innerWidth,n=t.height=window.innerHeight});const i=Math.min(Math.floor(window.innerWidth/15),65),o=[],r=["star","heart","sparkle","dot"],l=["rgba(255, 117, 140, ","rgba(255, 126, 179, ","rgba(253, 160, 133, ","rgba(255, 209, 102, ","rgba(157, 78, 221, "];class f{constructor(){this.reset(!0)}reset(d=!1){this.x=Math.random()*s,this.y=d?Math.random()*n:n+20,this.size=Math.random()*8+3,this.speedY=Math.random()*.8+.3,this.speedX=(Math.random()-.5)*.4,this.opacity=Math.random()*.6+.2,this.colorPrefix=l[Math.floor(Math.random()*l.length)],this.type=r[Math.floor(Math.random()*r.length)],this.pulseSpeed=Math.random()*.03+.01,this.angle=Math.random()*Math.PI*2,this.rotSpeed=(Math.random()-.5)*.02}update(){this.y-=this.speedY,this.x+=Math.sin(this.angle)*.5+this.speedX,this.angle+=this.rotSpeed,this.opacity+=Math.sin(this.angle*2)*.005,(this.y<-30||this.opacity<=0)&&this.reset()}draw(){if(e.save(),e.translate(this.x,this.y),e.rotate(this.angle),e.fillStyle=`${this.colorPrefix}${Math.max(.1,Math.min(.8,this.opacity))})`,this.type==="heart"){e.beginPath();const d=this.size*.3;e.moveTo(0,d),e.bezierCurveTo(-this.size/2,-this.size/2,-this.size,d,0,this.size),e.bezierCurveTo(this.size,d,this.size/2,-this.size/2,0,d),e.closePath(),e.fill()}else if(this.type==="star"){e.beginPath();for(let d=0;d<4;d++)e.lineTo(Math.cos(d*Math.PI/2)*this.size,Math.sin(d*Math.PI/2)*this.size),e.lineTo(Math.cos(d*Math.PI/2+Math.PI/4)*this.size/3,Math.sin(d*Math.PI/2+Math.PI/4)*this.size/3);e.closePath(),e.fill()}else e.beginPath(),e.arc(0,0,this.size/2,0,Math.PI*2),e.fill();e.restore()}}for(let a=0;a<i;a++)o.push(new f);function u(){e.clearRect(0,0,s,n),o.forEach(a=>{a.update(),a.draw()}),requestAnimationFrame(u)}u();const m=document.getElementById("cursor-glow");m&&window.addEventListener("mousemove",a=>{m.style.transform=`translate3d(${a.clientX-150}px, ${a.clientY-150}px, 0)`})}let g=null,y=!1,p=null;function E(){const t=document.getElementById("music-widget"),e=document.getElementById("music-btn"),s=document.getElementById("music-status");if(!t||!e)return;g=new Audio(c.music.url),g.loop=!0,g.volume=.5;function n(){g&&(y?(g.pause(),y=!1,t.classList.remove("playing"),e.innerHTML="🎵",s&&(s.textContent="Paused • Click to play")):g.play().then(()=>{y=!0,t.classList.add("playing"),e.innerHTML="⏸",s&&(s.textContent="Playing • Birthday Vibes")}).catch(i=>{console.warn("Audio play prevented or error:",i),x()}))}t.addEventListener("click",n)}function x(){try{if(!p){const s=window.AudioContext||window.webkitAudioContext;p=new s}p.state==="suspended"&&p.resume();const t=p.currentTime;[523.25,659.25,783.99,1046.5,1318.51].forEach((s,n)=>{const i=p.createOscillator(),o=p.createGain();i.type="sine",i.frequency.setValueAtTime(s,t+n*.1),o.gain.setValueAtTime(.3,t+n*.1),o.gain.exponentialRampToValueAtTime(.001,t+n*.1+.8),i.connect(o),o.connect(p.destination),i.start(t+n*.1),i.stop(t+n*.1+.85)})}catch(t){console.log("Web Audio API not supported or inactive",t)}}function k(){let t=document.getElementById("confetti-canvas");t||(t=document.createElement("canvas"),t.id="confetti-canvas",t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="100vw",t.style.height="100vh",t.style.pointerEvents="none",t.style.zIndex="300",document.body.appendChild(t));const e=t.getContext("2d");let s=t.width=window.innerWidth,n=t.height=window.innerHeight;const i=120,o=[],r=["#ff758c","#ff7eb3","#fda085","#ffd166","#7b2cbf","#9d4edd","#ffffff"];class l{constructor(){this.x=s/2,this.y=n/2+100,this.size=Math.random()*10+6;const a=Math.random()*Math.PI*2,d=Math.random()*16+8;this.vx=Math.cos(a)*d,this.vy=Math.sin(a)*d-6,this.gravity=.25,this.drag=.96,this.color=r[Math.floor(Math.random()*r.length)],this.rotation=Math.random()*Math.PI*2,this.rotationSpeed=(Math.random()-.5)*.2,this.opacity=1,this.isHeart=Math.random()>.6}update(){this.vx*=this.drag,this.vy*=this.drag,this.vy+=this.gravity,this.x+=this.vx,this.y+=this.vy,this.rotation+=this.rotationSpeed,this.opacity-=.008}draw(){if(e.save(),e.translate(this.x,this.y),e.rotate(this.rotation),e.fillStyle=this.color,e.globalAlpha=Math.max(0,this.opacity),this.isHeart){e.beginPath();const a=this.size*.3;e.moveTo(0,a),e.bezierCurveTo(-this.size/2,-this.size/2,-this.size,a,0,this.size),e.bezierCurveTo(this.size,a,this.size/2,-this.size/2,0,a),e.closePath(),e.fill()}else e.fillRect(-this.size/2,-this.size/2,this.size,this.size*.6);e.restore()}}for(let m=0;m<i;m++)o.push(new l);let f;function u(){e.clearRect(0,0,s,n);let m=0;o.forEach(a=>{a.update(),a.draw(),a.opacity>0&&a.y<n+50&&m++}),m>0?f=requestAnimationFrame(u):(e.clearRect(0,0,s,n),cancelAnimationFrame(f))}u()}function I(t){t&&(t.innerHTML=`
    <div class="cake-wrapper" id="interactive-cake" title="Click to blow out the candles!">
      <svg class="cake-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Cake Base Layer -->
        <rect x="25" y="130" width="150" height="45" rx="8" fill="url(#cakeBase)" />
        <path d="M25 130 C 50 142, 75 125, 100 138 C 125 125, 150 142, 175 130 L 175 142 C 150 154, 125 137, 100 150 C 75 137, 50 154, 25 142 Z" fill="#ff7eb3" opacity="0.8" />
        
        <!-- Cake Top Layer -->
        <rect x="45" y="85" width="110" height="45" rx="6" fill="url(#cakeTop)" />
        <path d="M45 85 C 65 95, 85 80, 105 92 C 125 80, 145 95, 155 85 L 155 95 C 145 105, 125 90, 105 102 C 85 90, 65 105, 45 95 Z" fill="#fda085" opacity="0.9" />

        <!-- Frosting Drips & Sprinkles -->
        <circle cx="60" cy="115" r="3" fill="#ffd166" />
        <circle cx="85" cy="122" r="3" fill="#ffffff" />
        <circle cx="115" cy="118" r="3" fill="#ff758c" />
        <circle cx="140" cy="124" r="3" fill="#ffd166" />
        <circle cx="70" cy="155" r="3.5" fill="#ffffff" />
        <circle cx="100" cy="162" r="3.5" fill="#ffd166" />
        <circle cx="130" cy="158" r="3.5" fill="#ff7eb3" />

        <!-- Candles -->
        <!-- Candle 1 -->
        <rect x="65" y="50" width="8" height="35" rx="2" fill="url(#candleGrad)" />
        <!-- Candle 2 (Center) -->
        <rect x="96" y="42" width="8" height="43" rx="2" fill="url(#candleGrad)" />
        <!-- Candle 3 -->
        <rect x="127" y="50" width="8" height="35" rx="2" fill="url(#candleGrad)" />

        <!-- Candle Wicks -->
        <line x1="69" y1="50" x2="69" y2="44" stroke="#444" stroke-width="1.5" />
        <line x1="100" y1="42" x2="100" y2="36" stroke="#444" stroke-width="1.5" />
        <line x1="131" y1="50" x2="131" y2="44" stroke="#444" stroke-width="1.5" />

        <!-- Flames -->
        <g class="candle-flames-group">
          <!-- Flame 1 -->
          <path class="candle-flame" d="M69 44 C64 36, 64 30, 69 24 C74 30, 74 36, 69 44 Z" fill="url(#flameGrad)" />
          <!-- Flame 2 -->
          <path class="candle-flame" d="M100 36 C95 27, 95 20, 100 14 C105 20, 105 27, 100 36 Z" fill="url(#flameGrad)" />
          <!-- Flame 3 -->
          <path class="candle-flame" d="M131 44 C126 36, 126 30, 131 24 C136 30, 136 36, 131 44 Z" fill="url(#flameGrad)" />
        </g>

        <!-- Smoke Particles -->
        <g class="smoke-group">
          <circle class="smoke-particle" cx="69" cy="24" r="4" fill="rgba(255,255,255,0.7)" />
          <circle class="smoke-particle" cx="100" cy="14" r="5" fill="rgba(255,255,255,0.7)" />
          <circle class="smoke-particle" cx="131" cy="24" r="4" fill="rgba(255,255,255,0.7)" />
        </g>

        <!-- SVG Gradients -->
        <defs>
          <linearGradient id="cakeBase" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#7b2cbf" />
            <stop offset="100%" stop-color="#3c096c" />
          </linearGradient>
          <linearGradient id="cakeTop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#ff758c" />
            <stop offset="100%" stop-color="#ff7eb3" />
          </linearGradient>
          <linearGradient id="candleGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#ffd166" />
            <stop offset="100%" stop-color="#f59e0b" />
          </linearGradient>
          <linearGradient id="flameGrad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stop-color="#ff4500" />
            <stop offset="50%" stop-color="#ffaa00" />
            <stop offset="100%" stop-color="#ffffcc" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  `)}function L(){const t=document.getElementById("make-wish-btn"),e=document.getElementById("interactive-cake"),s=document.getElementById("wish-modal"),n=document.getElementById("modal-close");function i(){x();const o=document.querySelectorAll(".candle-flame"),r=document.querySelectorAll(".smoke-particle");o.forEach(l=>l.classList.add("extinguished")),r.forEach(l=>l.classList.add("active")),k(),setTimeout(()=>{s&&s.classList.add("active")},500)}t&&t.addEventListener("click",i),e&&e.addEventListener("click",i),n&&s&&(n.addEventListener("click",()=>{s.classList.remove("active")}),s.addEventListener("click",o=>{o.target===s&&s.classList.remove("active")}))}function B(){const t=document.querySelectorAll(".reveal-on-scroll"),e=document.querySelectorAll(".message-paragraph"),s={root:null,rootMargin:"0px 0px -60px 0px",threshold:.15},n=new IntersectionObserver((i,o)=>{i.forEach(r=>{r.isIntersecting&&(r.target.classList.add("revealed"),o.unobserve(r.target))})},s);if(t.forEach(i=>n.observe(i)),e.length>0){const i={root:null,rootMargin:"0px 0px -40px 0px",threshold:.1},o=new IntersectionObserver(r=>{r.forEach(l=>{if(l.isIntersecting){const f=Array.from(e).indexOf(l.target);setTimeout(()=>{l.target.classList.add("revealed")},f*120),o.unobserve(l.target)}})},i);e.forEach(r=>o.observe(r))}}document.addEventListener("DOMContentLoaded",()=>{T();const t=document.getElementById("cake-container");I(t),M(),E(),L(),z(),B(),P()});function T(){const t=document.getElementById("hero-badge"),e=document.getElementById("hero-title"),s=document.getElementById("hero-subtitle"),n=document.getElementById("hero-cta"),i=document.getElementById("hero-made-with-love");t&&(t.textContent=c.hero.badge),e&&(e.innerHTML=c.hero.title),s&&(s.textContent=c.hero.subtitle),n&&(n.querySelector("span").textContent=c.hero.ctaButton),i&&(i.innerHTML=`${c.hero.madeWithLove.replace("❤️",'<span class="heart">❤️</span>')}`);const o=document.getElementById("main-photo-img"),r=document.getElementById("main-photo-caption");if(o){const h=c.photo.url;o.src=h,o.alt=c.photo.alt,o.onerror=function(){if(!this.getAttribute("data-tried")){this.setAttribute("data-tried","1");const C=h.split("/").pop();this.src=`./public/${C}`}}}r&&(r.textContent=c.photo.caption);const l=document.getElementById("message-container");l&&c.message.paragraphs&&(l.innerHTML=c.message.paragraphs.map(h=>`<p class="message-paragraph">${h}</p>`).join(""));const f=document.getElementById("memories-container");f&&c.memories&&(f.innerHTML=c.memories.map(h=>`
      <div class="memory-card reveal-on-scroll">
        <div class="memory-image-container">
          <img src="${h.image}" alt="${h.title}" class="memory-image" loading="lazy" onerror="if(!this.getAttribute('data-tried')){this.setAttribute('data-tried','1');this.src='./public/${h.image.split("/").pop()}';}" />
          <span class="memory-date-badge">${h.date}</span>
        </div>
        <div class="memory-content">
          <h3 class="memory-title">${h.title}</h3>
          <p class="memory-caption">${h.caption}</p>
        </div>
      </div>
    `).join(""));const u=document.getElementById("qualities-container");u&&c.qualities&&(u.innerHTML=c.qualities.map(h=>`
      <div class="quality-card reveal-on-scroll" style="--quality-gradient: ${h.gradient}">
        <div class="quality-icon-wrapper">
          <span>${h.title.split(" ").slice(-1)[0]}</span>
        </div>
        <h3 class="quality-title">${h.title}</h3>
        <p class="quality-description">${h.description}</p>
      </div>
    `).join(""));const m=document.getElementById("wish-quote"),a=document.getElementById("wish-subtext"),d=document.getElementById("make-wish-btn"),v=document.getElementById("modal-title"),w=document.getElementById("modal-text");m&&(m.textContent=c.wishSection.quote),a&&(a.textContent=c.wishSection.subtext),d&&(d.textContent=c.wishSection.buttonText),v&&(v.textContent=c.wishSection.wishConfirmationTitle),w&&(w.textContent=c.wishSection.wishConfirmationText);const b=document.getElementById("music-title-text");b&&c.music.title&&(b.textContent=c.music.title)}function z(){const t=document.getElementById("navbar"),e=document.getElementById("mobile-toggle"),s=document.getElementById("mobile-menu"),n=document.querySelectorAll(".mobile-link"),i=document.querySelectorAll(".nav-link");window.addEventListener("scroll",()=>{window.scrollY>40?t==null||t.classList.add("scrolled"):t==null||t.classList.remove("scrolled");const o=document.querySelectorAll("section[id]"),r=window.pageYOffset;o.forEach(l=>{const f=l.offsetHeight,u=l.offsetTop-120,m=l.getAttribute("id");r>u&&r<=u+f&&i.forEach(a=>{a.classList.remove("active"),a.getAttribute("href")===`#${m}`&&a.classList.add("active")})})}),e&&s&&(e.addEventListener("click",()=>{e.classList.toggle("open"),s.classList.toggle("open")}),n.forEach(o=>{o.addEventListener("click",()=>{e.classList.remove("open"),s.classList.remove("open")})}))}function P(){document.querySelectorAll(".memory-card, .quality-card").forEach(e=>{e.addEventListener("mousemove",s=>{const n=e.getBoundingClientRect(),i=s.clientX-n.left,o=s.clientY-n.top,r=n.width/2,l=n.height/2,f=(o-l)/l*-6,u=(i-r)/r*6;e.style.transform=`perspective(1000px) rotateX(${f}deg) rotateY(${u}deg) translateY(-6px)`}),e.addEventListener("mouseleave",()=>{e.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)"})})}
