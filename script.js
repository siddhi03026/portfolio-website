// Dark/Light Mode Toggle
const themeBtn = document.getElementById('themeToggle');
const stored = localStorage.getItem('theme');
if(stored){ 
  document.body.classList.toggle('light', stored==='light'); 
  themeBtn.textContent = stored==='light' ? '🌞' : '🌙';
}
themeBtn.addEventListener('click', ()=>{
  document.body.classList.toggle('light');
  const mode = document.body.classList.contains('light')?'light':'dark';
  localStorage.setItem('theme', mode);
  themeBtn.textContent = mode==='light' ? '🌞' : '🌙';
});

// Skills Animation
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.querySelector("span").style.width = entry.target.dataset.level + "%";
    }
  });
},{threshold:0.6});
document.querySelectorAll(".skill-card").forEach(el=>observer.observe(el));

// Contact Form Validation
const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");
form.addEventListener("submit", e=>{
  e.preventDefault();
  const data = new FormData(form);
  if(!data.get("name") || !data.get("email") || !data.get("message")){
    showToast("Please fill out all fields.", true);
    return;
  }
  showToast("Message sent successfully!");
  form.reset();
});
function showToast(msg, err=false){
  toast.textContent = msg;
  toast.style.background = err?"#ff8080":"var(--accent1)";
  toast.hidden=false;
  setTimeout(()=>toast.hidden=true,3000);
}

// Typing Effect
const tagline = document.getElementById("typing");
const text = "Full-Stack Developer | AI Explorer | Creative Coder";
let i=0;
function type(){
  if(i<text.length){ tagline.textContent+=text.charAt(i); i++; setTimeout(type,80); }
}
type();

// Back to Top
const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', ()=>{
  backBtn.style.display = window.scrollY>300?'block':'none';
});
backBtn.addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));

// Nav Indicator Animation
const navLinks = document.querySelectorAll(".main-nav a");
const indicator = document.querySelector(".nav-indicator");
navLinks.forEach(link=>{
  link.addEventListener("mouseenter",(e)=>{
    const rect=e.target.getBoundingClientRect();
    const parentRect=e.target.parentElement.getBoundingClientRect();
    indicator.style.width=rect.width+"px";
    indicator.style.left=(rect.left-parentRect.left)+"px";
  });
  link.addEventListener("mouseleave",()=>{indicator.style.width="0";});
});

// Nav Bar Scroll Effect
window.addEventListener('scroll', ()=>{
  const header = document.querySelector('.site-header');
  if(window.scrollY > 50){ header.classList.add('scrolled'); }
  else{ header.classList.remove('scrolled'); }
});


