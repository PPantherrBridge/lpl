// ═══════════════════════════════════════════ DATA
const TEAMS={
  RCB:{name:'Royal Challengers Bangalore',pri:'#E63946',sec:'#FFBE0B',women:false,cap:'Shivu',vc:'Mohan',players:[
    {n:'Enoch',   hand:'LHB',role:'AR',  style:'LAO',      p:98,c:79,pp:95,do:70,cl:75},
    {n:'Monish',  hand:'RHB',role:'AR',  style:'FAST',     p:96,c:90,pp:97,do:80,cl:70},
    {n:'Shakthi', hand:'RHB',role:'AR',  style:'LEG',      p:85,c:75,pp:80,do:85,cl:82},
    {n:'Mohan',   hand:'RHB',role:'BAT', style:'—',        p:90,c:70,pp:75,do:65,cl:70},
    {n:'Naveen',  hand:'RHB',role:'AR',  style:'MED',      p:96,c:96,pp:70,do:75,cl:95},
    {n:'Ashwin',  hand:'RHB',role:'AR',  style:'FAST',     p:92,c:90,pp:85,do:95,cl:90},
    {n:'Harsha',  hand:'RHB',role:'AR',  style:'MED',      p:75,c:70,pp:65,do:70,cl:75},
    {n:'Shivu',   hand:'RHB',role:'AR',  style:'FAST_MED', p:95,c:99,pp:88,do:90,cl:99},
    {n:'Bavith',  hand:'RHB',role:'AR',  style:'FAST',     p:88,c:82,pp:75,do:95,cl:85},
    {n:'Chandan', hand:'LHB',role:'AR',  style:'OFF',      p:70,c:70,pp:60,do:70,cl:72},
    {n:'Sandeep', hand:'RHB',role:'BOWL',style:'SLOW',     p:87,c:80,pp:77,do:60,cl:89},
  ]},
  MI:{name:'Mumbai Indians',pri:'#004BA0',sec:'#00D4FF',women:false,cap:'Shreyans',vc:'Bhuvan',players:[
    {n:'Shreyans',hand:'RHB',role:'AR',  style:'FAST',    p:96,c:80,pp:95,do:85,cl:85},
    {n:'Jayanth', hand:'RHB',role:'AR',  style:'OFF',     p:89,c:80,pp:90,do:75,cl:82},
    {n:'Eshaan',  hand:'RHB',role:'AR',  style:'MED_FAST',p:80,c:70,pp:75,do:65,cl:70},
    {n:'Adith',   hand:'LHB',role:'WK',  style:'FAST_MED',p:80,c:85,pp:80,do:90,cl:88},
    {n:'Bhuvan',  hand:'RHB',role:'BAT', style:'—',       p:90,c:90,pp:70,do:80,cl:92},
    {n:'AdithyaB',hand:'RHB',role:'AR',  style:'FAST',    p:60,c:50,pp:60,do:70,cl:65},
    {n:'Sachin',  hand:'RHB',role:'AR',  style:'MED',     p:80,c:80,pp:65,do:85,cl:88},
    {n:'Lakshya', hand:'AMB',role:'BOWL',style:'FAST',    p:50,c:60,pp:55,do:90,cl:70},
    {n:'Vikas',   hand:'RHB',role:'BOWL',style:'MED',     p:60,c:50,pp:50,do:70,cl:60},
    {n:'Devendra',hand:'RHB',role:'BAT', style:'—',       p:60,c:70,pp:60,do:65,cl:72},
    {n:'ShreyanshMI',hand:'RHB',role:'AR',style:'FAST',   p:90,c:70,pp:77,do:90,cl:67},
  ]},
  CSK:{name:'Chennai Super Kings',pri:'#FDB913',sec:'#FFFFFF',women:false,cap:'Karthik',vc:'',players:[
    {n:'Karthik', hand:'RHB',role:'AR',  style:'MED',     p:90,c:95,pp:85,do:75,cl:95},
    {n:'Pradeep', hand:'RHB',role:'AR',  style:'EXPRESS', p:98,c:68,pp:98,do:95,cl:75},
    {n:'Immanuel',hand:'RHB',role:'AR',  style:'MED',     p:70,c:60,pp:65,do:70,cl:68},
    {n:'Joseph',  hand:'RHB',role:'AR',  style:'FAST',    p:90,c:70,pp:80,do:85,cl:78},
    {n:'Madhan',  hand:'LHB',role:'BAT', style:'—',       p:97,c:80,pp:75,do:70,cl:88},
    {n:'Ganesh',  hand:'RHB',role:'WK',  style:'—',       p:66,c:68,pp:60,do:65,cl:70},
    {n:'Sampath', hand:'RHB',role:'AR',  style:'SLOW',    p:70,c:80,pp:65,do:80,cl:85},
    {n:'VikasCSK',hand:'RHB',role:'AR',  style:'FAST',    p:90,c:80,pp:85,do:88,cl:82},
    {n:'Abishek', hand:'LHB',role:'AR',  style:'FAST',    p:60,c:60,pp:70,do:80,cl:72},
    {n:'Anand',   hand:'RHB',role:'BOWL',style:'EXPRESS', p:69,c:70,pp:60,do:98,cl:75},
    {n:'OPrakash',hand:'RHB',role:'WK',  style:'—',       p:59,c:60,pp:59,do:62,cl:87},
  ]},
  KKR:{name:'Kolkata Knight Riders',pri:'#3A225D',sec:'#F2C028',women:false,cap:'Ishaan',vc:'Mithil',players:[
    {n:'Gowardhan', hand:'RHB',role:'BAT', style:'—',       p:94,c:70,pp:95,do:60,cl:70},
    {n:'Ishaan',    hand:'RHB',role:'AR',  style:'FAST',    p:90,c:84,pp:90,do:80,cl:85},
    {n:'Bhargav',   hand:'RHB',role:'AR',  style:'MED_FAST',p:90,c:75,pp:80,do:75,cl:78},
    {n:'Mithil',    hand:'RHB',role:'BAT', style:'—',       p:89,c:95,pp:65,do:70,cl:95},
    {n:'ShivuKKR',  hand:'RHB',role:'AR',  style:'EXPRESS', p:80,c:80,pp:75,do:98,cl:88},
    {n:'Adithya',   hand:'LHB',role:'AR',  style:'SLOW',    p:70,c:65,pp:60,do:65,cl:70},
    {n:'Harshith',  hand:'RHB',role:'AR',  style:'SLOW',    p:60,c:70,pp:60,do:70,cl:72},
    {n:'Harinandan',hand:'RHB',role:'WK',  style:'—',       p:70,c:60,pp:65,do:68,cl:70},
    {n:'Raghav',    hand:'LHB',role:'AR',  style:'MED',     p:84,c:80,pp:70,do:90,cl:85},
    {n:'Dhruv',     hand:'RHB',role:'BAT', style:'—',       p:40,c:100,pp:55,do:60,cl:98},
    {n:'Varun',     hand:'RHB',role:'AR',  style:'LEG',     p:78,c:75,pp:70,do:80,cl:78},
  ]},
  SRH:{name:'Sunrisers Hyderabad',pri:'#FF822A',sec:'#FFE45C',women:false,cap:'SaiTalwaar',vc:'Prem',players:[
    {n:'Harshavardhan',hand:'RHB',role:'AR', style:'SLOW',    p:99,c:70,pp:99,do:75,cl:70},
    {n:'Prem',         hand:'LHB',role:'AR', style:'FAST',    p:90,c:65,pp:92,do:80,cl:75},
    {n:'SaiTalwaar',   hand:'RHB',role:'AR', style:'FAST',    p:95,c:65,pp:90,do:85,cl:65},
    {n:'PavanSRH',     hand:'RHB',role:'AR', style:'MED',     p:96,c:70,pp:88,do:80,cl:72},
    {n:'Deva',         hand:'LHB',role:'AR', style:'OFF',     p:75,c:80,pp:65,do:75,cl:90},
    {n:'Rishab',       hand:'LHB',role:'BAT',style:'—',       p:93,c:87,pp:85,do:95,cl:92},
    {n:'Suvas',        hand:'LHB',role:'AR', style:'LEG',     p:66,c:69,pp:60,do:80,cl:78},
    {n:'Dhanush',      hand:'RHB',role:'AR', style:'EXPRESS', p:85,c:90,pp:75,do:99,cl:90},
    {n:'Brudvith',     hand:'RHB',role:'WK', style:'—',       p:67,c:70,pp:60,do:70,cl:72},
    {n:'Anirudh',      hand:'RHB',role:'BAT',style:'—',       p:85,c:70,pp:80,do:92,cl:88},
    {n:'Adil',         hand:'RHB',role:'AR', style:'OFF',     p:80,c:75,pp:72,do:82,cl:78},
  ]},
  GT:{name:'Gujarat Titans',pri:'#1C3664',sec:'#B5944C',women:false,cap:'Yogendra',vc:'Vikram',players:[
    {n:'Yogendra',hand:'RHB',role:'BAT', style:'—',   p:99,c:68,pp:99,do:70,cl:72},
    {n:'PavanGT', hand:'RHB',role:'BAT', style:'—',   p:90,c:80,pp:90,do:75,cl:85},
    {n:'Anil',    hand:'RHB',role:'BAT', style:'—',   p:95,c:70,pp:80,do:70,cl:75},
    {n:'Mohan',   hand:'RHB',role:'AR',  style:'FAST',p:85,c:85,pp:85,do:95,cl:85},
    {n:'Devraj',  hand:'AMB',role:'BAT', style:'—',   p:98,c:95,pp:88,do:85,cl:99},
    {n:'Dharshan',hand:'RHB',role:'AR',  style:'MED', p:85,c:75,pp:75,do:80,cl:80},
    {n:'Vikram',  hand:'RHB',role:'AR',  style:'OFF', p:80,c:80,pp:70,do:82,cl:85},
    {n:'Shiva',   hand:'LHB',role:'AR',  style:'LEG', p:75,c:70,pp:72,do:80,cl:82},
    {n:'Nanda',   hand:'LHB',role:'AR',  style:'LAO', p:65,c:70,pp:65,do:75,cl:78},
    {n:'Koushik', hand:'RHB',role:'WK',  style:'—',   p:89,c:90,pp:85,do:95,cl:90},
    {n:'Mukesh',  hand:'RHB',role:'AR',  style:'MED', p:82,c:76,pp:74,do:82,cl:80},
  ]},
  DC:{name:'Delhi Capitals',pri:'#004C97',sec:'#EF3340',women:false,cap:'Deepak',vc:'Kadhirvel',players:[
    {n:'Deepak',   hand:'RHB',role:'BAT', style:'—',       p:85,c:80,pp:85,do:80,cl:88},
    {n:'Hariharan',hand:'RHB',role:'BAT', style:'—',       p:90,c:80,pp:90,do:75,cl:82},
    {n:'Kuldeep',  hand:'AMB',role:'AR',  style:'MED_FAST',p:91,c:83,pp:80,do:85,cl:85},
    {n:'Kadhirvel',hand:'RHB',role:'AR',  style:'EXPRESS', p:89,c:79,pp:85,do:95,cl:90},
    {n:'LikithR',  hand:'LHB',role:'BAT', style:'—',       p:88,c:90,pp:70,do:80,cl:92},
    {n:'LikinC',   hand:'RHB',role:'AR',  style:'FAST',    p:80,c:78,pp:75,do:88,cl:85},
    {n:'Vipul',    hand:'LHB',role:'AR',  style:'LEG',     p:75,c:76,pp:70,do:85,cl:82},
    {n:'ShivaK',   hand:'RHB',role:'AR',  style:'OFF',     p:80,c:80,pp:70,do:80,cl:85},
    {n:'Pratheek', hand:'RHB',role:'AR',  style:'MED',     p:90,c:78,pp:75,do:90,cl:88},
    {n:'Redoy',    hand:'LHB',role:'WK',  style:'—',       p:80,c:77,pp:75,do:88,cl:85},
    {n:'Mukfeer',  hand:'RHB',role:'BOWL',style:'EXPRESS', p:70,c:71,pp:65,do:98,cl:80},
  ]},
  RR:{name:'Rajasthan Royals',pri:'#EA1A85',sec:'#254AA5',women:true,cap:'Deesha',vc:'Yethi',players:[
    {n:'Diya',        hand:'RHB',role:'AR',  style:'MED',      p:88,c:80,pp:85,do:80,cl:82},
    {n:'Deesha',      hand:'RHB',role:'AR',  style:'FAST',     p:93,c:85,pp:90,do:90,cl:88},
    {n:'Deeksha',     hand:'RHB',role:'BAT', style:'—',        p:85,c:81,pp:75,do:80,cl:82},
    {n:'Cynthia',     hand:'RHB',role:'AR',  style:'LEG',      p:84,c:77,pp:70,do:80,cl:80},
    {n:'Yuktha',      hand:'LHB',role:'BAT', style:'—',        p:86,c:94,pp:70,do:85,cl:95},
    {n:'Yashmitha',   hand:'AMB',role:'AR',  style:'FAST_MED', p:79,c:79,pp:75,do:90,cl:82},
    {n:'Yeshashwini', hand:'RHB',role:'AR',  style:'MED',      p:88,c:76,pp:80,do:85,cl:80},
    {n:'Yethi',       hand:'LHB',role:'AR',  style:'EXPRESS',  p:95,c:97,pp:90,do:95,cl:95},
    {n:'Harsitha',    hand:'RHB',role:'AR',  style:'OFF',      p:79,c:81,pp:70,do:80,cl:82},
    {n:'Sangamithra', hand:'RHB',role:'WK',  style:'—',        p:93,c:73,pp:85,do:85,cl:80},
    {n:'Varsha',      hand:'RHB',role:'AR',  style:'MED',      p:82,c:78,pp:75,do:82,cl:82},
  ]},
  PBKS:{name:'Punjab Kings',pri:'#ED1B24',sec:'#C0C0C0',women:true,cap:'Madhu',vc:'Bindu',players:[
    {n:'Bindu',    hand:'RHB',role:'BAT', style:'—',       p:97,c:90,pp:95,do:85,cl:90},
    {n:'Madhu',    hand:'LHB',role:'BAT', style:'—',       p:96,c:92,pp:95,do:85,cl:92},
    {n:'Keerthana',hand:'RHB',role:'BAT', style:'—',       p:96,c:73,pp:90,do:80,cl:75},
    {n:'Lakshmi',  hand:'RHB',role:'AR',  style:'EXPRESS', p:89,c:83,pp:85,do:95,cl:88},
    {n:'Brinda',   hand:'RHB',role:'AR',  style:'OFF',     p:83,c:90,pp:70,do:85,cl:92},
    {n:'Likitha',  hand:'RHB',role:'AR',  style:'FAST',    p:79,c:78,pp:75,do:88,cl:85},
    {n:'Priyanka', hand:'LHB',role:'AR',  style:'LEG',     p:90,c:79,pp:80,do:85,cl:85},
    {n:'Roshini',  hand:'RHB',role:'AR',  style:'MED',     p:80,c:76,pp:70,do:80,cl:80},
    {n:'Saanika',  hand:'RHB',role:'BAT', style:'—',       p:88,c:93,pp:75,do:85,cl:95},
    {n:'PriyankaR',hand:'RHB',role:'WK',  style:'—',       p:96,c:73,pp:85,do:85,cl:80},
    {n:'Elizabeth', hand:'RHB',role:'AR',  style:'FAST',   p:84,c:80,pp:78,do:85,cl:84},
  ]},
  LSG:{name:'Lucknow Super Giants',pri:'#A72B2A',sec:'#FBCE01',women:false,cap:'Chirag',vc:'Sriram',players:[
    {n:'Chirag',      hand:'RHB',role:'BAT', style:'—',       p:97,c:90,pp:95,do:85,cl:90},
    {n:'Sutej',       hand:'LHB',role:'BAT', style:'—',       p:96,c:92,pp:95,do:85,cl:92},
    {n:'Dinesh',      hand:'RHB',role:'BAT', style:'—',       p:84,c:80,pp:75,do:80,cl:82},
    {n:'Sriram',      hand:'RHB',role:'AR',  style:'EXPRESS', p:89,c:83,pp:85,do:95,cl:88},
    {n:'Srujan',      hand:'RHB',role:'AR',  style:'OFF',     p:83,c:90,pp:70,do:85,cl:92},
    {n:'Mohinuddin',  hand:'RHB',role:'AR',  style:'FAST',    p:91,c:78,pp:80,do:90,cl:85},
    {n:'Krishna',     hand:'LHB',role:'AR',  style:'LEG',     p:86,c:79,pp:75,do:85,cl:82},
    {n:'Thammu',      hand:'RHB',role:'AR',  style:'MED',     p:80,c:76,pp:70,do:80,cl:80},
    {n:'ShreyanshLSG',hand:'RHB',role:'AR',  style:'EXPRESS', p:88,c:93,pp:85,do:98,cl:90},
    {n:'Munavir',     hand:'RHB',role:'WK',  style:'—',       p:89,c:80,pp:80,do:85,cl:82},
    {n:'Jeffro',      hand:'RHB',role:'AR',  style:'FAST_MED',p:85,c:80,pp:78,do:88,cl:84},
  ]},
};

const SHORTFORM_MAP = {
  RCB:{Mon:'Monish',Sht:'Shakthi',E:'Enoch',Shu:'Shivu',Na:'Naveen',Ash:'Ashwin',Har:'Harsha',Ba:'Bavith',Ch:'Chandan',Mo:'Mohan',San:'Sandeep'},
  MI:{Shr:'Shreyans',Jay:'Jayanth',Esh:'Eshaan',Adi:'Adith',Bhu:'Bhuvan',AdiB:'AdithyaB',Sac:'Sachin',Lak:'Lakshya',Vik:'Vikas',Dev:'Devendra',SS:'ShreyanshMI'},
  CSK:{Kar:'Karthik',P:'Pradeep',Imm:'Immanuel',Jos:'Joseph',Mad:'Madhan',G:'Ganesh',Samp:'Sampath',V:'VikasCSK',Abi:'Abishek',Ana:'Anand',OP:'OPrakash'},
  KKR:{Gow:'Gowardhan',Ish:'Ishaan',Bha:'Bhargav',Mit:'Mithil',SK:'ShivuKKR',Adi:'Adithya',Har:'Harshith',Hari:'Harinandan',Rag:'Raghav',Dhr:'Dhruv',Var:'Varun'},
  SRH:{HV:'Harshavardhan',Pre:'Prem',ST:'SaiTalwaar',Pav:'PavanSRH',Dev:'Deva',Ris:'Rishab',Suv:'Suvas',Dha:'Dhanush',Bru:'Brudvith',Ani:'Anirudh',Adl:'Adil'},
  GT:{Yog:'Yogendra',PG:'PavanGT',Ani:'Anil',Moh:'Mohan',Dev:'Devraj',Dha:'Dharshan',Vik:'Vikram',Shi:'Shiva',Nan:'Nanda',Kou:'Koushik',Muk:'Mukesh'},
  DC:{Dee:'Deepak',Har:'Hariharan',Kul:'Kuldeep',Kad:'Kadhirvel',LR:'LikithR',LC:'LikinC',Vip:'Vipul',ShK:'ShivaK',Pra:'Pratheek',Red:'Redoy',Muk:'Mukfeer'},
  RR:{Diy:'Diya',Dee:'Deesha',Dek:'Deeksha',Cyn:'Cynthia',Yuk:'Yuktha',Yas:'Yashmitha',Yesh:'Yeshashwini',Yet:'Yethi',HarS:'Harsitha',San:'Sangamithra',Var:'Varsha'},
  PBKS:{Bin:'Bindu',Mad:'Madhu',Kee:'Keerthana',Lak:'Lakshmi',Bri:'Brinda',Lik:'Likitha',Pri:'Priyanka',Ros:'Roshini',Saa:'Saanika',PR:'PriyankaR',Eli:'Elizabeth'},
  LSG:{Chi:'Chirag',Sut:'Sutej',Din:'Dinesh',Sri:'Sriram',Sru:'Srujan',Moh:'Mohinuddin',Kri:'Krishna',Tha:'Thammu',SL:'ShreyanshLSG',Mun:'Munavir',Jef:'Jeffro'},
};

// ═══════════════════════════════════════════ HELPERS
const avg=p=>+((p.p+p.c+p.pp+p.do+p.cl)/5).toFixed(1);
const rc=v=>v>=90?'#00e676':v>=80?'#69f0ae':v>=70?'#ffd740':v>=60?'#ff9100':'#ff5252';
const ini=n=>n.slice(0,2).toUpperCase();
const rfull=r=>({BAT:'Batsman',BOWL:'Bowler',AR:'All-Rounder',WK:'Wicket Keeper'}[r]||r);
const rbc=r=>({BAT:'b-bat',BOWL:'b-bowl',AR:'b-ar',WK:'b-wk'}[r]||'b-ar');
function allP(){
  const out=[];
  for(const[k,t]of Object.entries(TEAMS))
    for(const p of t.players)out.push({...p,team:k,teamName:t.name,pri:t.pri,sec:t.sec,women:t.women});
  return out;
}

// ═══════════════════════════════════════════ PAGE SWITCH
let _homeInited=false;
let AUTHENTICATED=false;
const LOGIN_CREDENTIALS=['LPLAdminAccess2026'];
const CRICKET_CENTER_LABEL='Cricket Center';

function updateAuthNav(){
  const addBtn = document.getElementById('addMatchBtn');
  const loginBtn = document.getElementById('loginBtn');
  if(addBtn) addBtn.style.display = AUTHENTICATED ? 'inline-flex' : 'none';
  if(loginBtn) loginBtn.style.display = 'none';
}

function openAdminLogin(){
  const loginPage = document.getElementById('page-login');
  if(loginPage){
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    loginPage.classList.add('active');
  }
}

function openAdminPanel(){
  if(!AUTHENTICATED){
    openAdminLogin();
    return;
  }
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-entry').classList.add('active');
  document.body.classList.add('admin-open');
  selectAdminSection('match');
  admSelectMode('quick');
  renderNextFixturePanel();
  renderAdminFixtures();
  updateLastUpdate();
  _renderAdminPlayoffGuard();
}

function closeAdminPanel(){
  document.getElementById('page-entry').classList.remove('active');
  document.body.classList.remove('admin-open');
  showPage('home', document.querySelector('.nav-link'));
}

async function loginUser(){
  const value = document.getElementById('loginInput').value.trim();
  const status = document.getElementById('loginStatus');
  if(!value){ status.style.color = '#E63946'; status.textContent='Please enter the admin password.'; return; }
  let serverAuthenticated = false;
  if(window.LPLApi && typeof window.LPLApi.login === 'function'){
    try {
      status.style.color = '#8888AA';
      status.textContent = 'Checking credentials…';
      const result = await window.LPLApi.login(value);
      if(result && result.token){
        sessionStorage.setItem('lpl_admin_token', result.token);
        serverAuthenticated = true;
      }
    } catch(e){
      serverAuthenticated = false;
    }
  }
  if(serverAuthenticated){
    AUTHENTICATED = true;
    sessionStorage.setItem('lpl_admin_authenticated','1');
    updateAuthNav();
    status.style.color = '#00E676';
    status.textContent = 'Login successful. Admin panel unlocked.';
    openAdminPanel();
    return;
  }
  status.style.color = '#E63946';
  status.textContent = 'Password not recognized. Please try again.';
}

function showPage(id,btn){
  if(id==='entry'){
    if(!AUTHENTICATED){
      openAdminLogin();
      return;
    }
    openAdminPanel();
    if(btn) btn.classList.add('active');
    return;
  }
  const t1sel = document.getElementById('ef_t1');
  if(id==='entry' && t1sel && t1sel.options.length <= 1){
    populateEntryTeamOptions();
  }
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(b=>b.classList.remove('active'));
  const page = document.getElementById('page-'+id);
  if(page) page.classList.add('active');
  if(btn)btn.classList.add('active');
  // Animate page entry
  if(page){
    page.style.animation='none';
    page.offsetHeight;
    page.style.animation='fadeIn .3s ease forwards';
  }
  // Refresh live banner whenever matches page is shown
  if(id==='matches'){
    _renderInProgressBanner();
    _renderPlayoffBanner();
    // Highlight playoffs tab if active stage
    const _stage = getTournamentStage();
    const _pTab = document.querySelector('.mtab[onclick*="playoffs"]');
    if(_pTab){
      if(_stage === STAGE.PLAYOFF || _stage === STAGE.COMPLETED){
        _pTab.classList.add('mtab-playoffs-active');
      } else {
        _pTab.classList.remove('mtab-playoffs-active');
      }
    }
  }
  if(id==='h2h'){
    renderCricketCenter();
  }
}

function selectAdminSection(section, btn){
  document.querySelectorAll('.adm-nav-btn').forEach(b=>b.classList.toggle('active', b.dataset.section===section));
  document.querySelectorAll('.adm-section').forEach(sec=>sec.classList.toggle('active', sec.id==='adminSection'+section.charAt(0).toUpperCase()+section.slice(1)));
  if(section==='fixtures'){
    renderAdminFixtures();
    initFixtureSelectors();
  }
  if(section==='backup') updateLastUpdate();
  if(section==='teams')   setTimeout(renderAdminTeams,0);
  if(section==='players') setTimeout(renderAdminPlayersTeamSel,0);
}

function selectEntryMode(mode, btn){ admSelectMode(mode, btn); }
function admSelectMode(mode, btn){
  const modeMap = {quick:'admModeQuick', paste:'admModePaste', live:'admModeLive'};
  document.querySelectorAll('.adm-mode-btn').forEach(b=>b.classList.toggle('active', b.dataset.mode===mode));
  document.querySelectorAll('.adm-mode-pane').forEach(p=>p.classList.toggle('active', p.id===modeMap[mode]));
  // When switching TO live mode, check for an existing draft
  if(mode === 'live'){
    _checkAndShowLiveDraftBanner();
  }
}

function updateBallModeLabel(){
  const inning = document.getElementById('ballInningsSelector');
  const label = inning && inning.value === '2' ? '2nd innings' : '1st innings';
  if(inning){
    const field = inning.closest('.efg-field');
    const labelEl = field && field.querySelector('label');
    if(labelEl) labelEl.textContent = label;
  }
}

function isPlayoffStageActive(){
  const stage = getTournamentStage();
  return stage === STAGE.PLAYOFF || stage === STAGE.COMPLETED;
}

function isPlayablePlayoffFixture(fixture){
  if(!fixture) return false;
  if(fixture.status === 'completed') return false;
  if(!fixture.t1 || !fixture.t2) return false;
  return fixture.t1 !== 'TBD' && fixture.t2 !== 'TBD';
}

function asPlayoffEntryFixture(fixture){
  return {
    ...fixture,
    stage: 'playoff',
    isPlayoff: true,
    playoffRound: fixture.round,
    playoffLabel: fixture.label
  };
}

function getMatchEntryFixtures(){
  if(isPlayoffStageActive()){
    return PLAYOFF_FIXTURES.map(asPlayoffEntryFixture).filter(isPlayablePlayoffFixture);
  }
  return FIXTURES;
}

function getAdminFixtureRows(){
  if(isPlayoffStageActive()){
    return PLAYOFF_FIXTURES.map(asPlayoffEntryFixture);
  }
  return FIXTURES;
}

function getNextFixture(){
  const fixtures = getMatchEntryFixtures();
  return fixtures.length ? fixtures[0] : null;
}

function renderNextFixturePanel(){
  const next = getNextFixture();
  const target = document.getElementById('adminNextFixture');
  const banner = document.getElementById('apFixtureTeams');
  const meta = document.getElementById('apFixtureMeta');
  if(next){
    if(next.isPlayoff){
      const label = next.label || next.round || 'Playoff';
      if(target) target.innerHTML = `${label}: ${TEAM_META[next.t1]?.name||next.t1} vs ${TEAM_META[next.t2]?.name||next.t2} - ${next.date}`;
      if(banner) banner.textContent = `${TEAM_META[next.t1]?.name||next.t1} vs ${TEAM_META[next.t2]?.name||next.t2}`;
      if(meta) meta.textContent = `${label} - Match ${next.id} - ${next.date} - ${next.venue}`;
      populateEntryFromFixture(next);
      return;
    }
    if(target) target.innerHTML = `Next: ${TEAM_META[next.t1]?.name||next.t1} vs ${TEAM_META[next.t2]?.name||next.t2} · ${next.date}`;
    if(banner) banner.textContent = `${TEAM_META[next.t1]?.name||next.t1} vs ${TEAM_META[next.t2]?.name||next.t2}`;
    if(meta) meta.textContent = `Match ${next.id} · ${next.date} · ${next.venue}`;
    populateEntryFromFixture(next);
  } else {
    if(isPlayoffStageActive()){
      if(target) target.textContent = 'No playable playoff fixture';
      if(banner) banner.textContent = 'Awaiting playoff progression';
      if(meta) meta.textContent = 'Complete the available playoff match or wait for TBD teams to resolve.';
      enableEntryTeamSelection();
      return;
    }
    if(target) target.textContent = 'No upcoming fixture';
    if(banner) banner.textContent = 'No fixture selected';
    if(meta) meta.textContent = 'Add fixtures in the Fixtures tab to lock match teams automatically.';
    enableEntryTeamSelection();
  }
}

function populateEntryFromFixture(fixture){
  const matchId = document.getElementById('ef_matchid');
  const t1sel = document.getElementById('ef_t1');
  const t2sel = document.getElementById('ef_t2');
  if(!fixture || !t1sel || !t2sel || !matchId) return;
  if(t1sel.options.length <= 1 || t2sel.options.length <= 1) populateEntryTeamOptions();
  matchId.value = fixture.id;
  t1sel.value = fixture.t1;
  t2sel.value = fixture.t2;
  document.getElementById('ef_venue').value = fixture.venue || 'LPL Arena';
  document.getElementById('ef_date').value = fixture.date || '';
  t1sel.disabled = true;
  t2sel.disabled = true;
  onTeamChange();
}

function enableEntryTeamSelection(){
  const t1sel = document.getElementById('ef_t1');
  const t2sel = document.getElementById('ef_t2');
  if(t1sel) t1sel.disabled = false;
  if(t2sel) t2sel.disabled = false;
}

function initFixtureSelectors(){
  const t1 = document.getElementById('fixtureT1');
  const t2 = document.getElementById('fixtureT2');
  if(!t1 || !t2) return;
  const teams = Object.keys(TEAM_META);
  t1.innerHTML = '<option value="">Select team</option>' + teams.map(k=>`<option value="${k}">${TEAM_META[k].name} (${k})</option>`).join('');
  t2.innerHTML = t1.innerHTML;
}

function playoffFixtureKey(fixture){
  return String(fixture.round || fixture.id || '').replace(/'/g, '');
}

function playoffFixtureStatus(fixture){
  if(fixture.status === 'completed') return 'Completed';
  if(isPlayablePlayoffFixture(fixture)) return 'Ready';
  return 'Waiting for teams';
}

function findAdminFixture(key){
  const text = String(key);
  return getAdminFixtureRows().find((fixture)=>(
    String(fixture.round || '') === text || String(fixture.id || '') === text
  ));
}

function playFixture(key){
  const fixture = findAdminFixture(key);
  if(!isPlayablePlayoffFixture(fixture)){
    alert('This playoff fixture is not ready yet.');
    return;
  }
  selectAdminSection('match', document.querySelector('[data-section=match]'));
  admSelectMode('quick');
  populateEntryFromFixture(fixture);
  renderNextFixturePanel();
}

function renderAdminPlayoffFixtures(list){
  const rows = getAdminFixtureRows();
  const next = getNextFixture();
  if(!rows.length){
    list.innerHTML='<div style="color:var(--silver);font-size:13px;padding:12px 0;">No playoff fixtures generated yet.</div>';
    updateFixtureWarning();
    return;
  }
  list.innerHTML = rows.map((f)=>{
    const t1 = TEAM_META[f.t1] || {name:f.t1 || 'TBD',pri:'#444',sec:'#fff'};
    const t2 = TEAM_META[f.t2] || {name:f.t2 || 'TBD',pri:'#444',sec:'#fff'};
    const isNext = next && (String(next.round || next.id) === String(f.round || f.id));
    const canPlay = isPlayablePlayoffFixture(f);
    const status = playoffFixtureStatus(f);
    const key = playoffFixtureKey(f);
    return `<div class="adm-fixture-item${isNext?' adm-fixture-next':''}">
      <div class="adm-drag-handle">🏆</div>
      <div class="adm-fixture-meta">
        <strong>${isNext?'NEXT PLAYOFF - ':''}${f.label || f.round || 'PLAYOFF'} · ${t1.name} vs ${t2.name}</strong>
        <span>${status} · Match ${f.id} · ${f.date||'TBD'} · ${f.venue||'LPL Arena'}</span>
      </div>
      <div class="adm-fixture-actions">
        ${canPlay ? `<button class="adm-ghost-btn" onclick="playFixture('${key}')">Play</button>` : `<span style="font-size:11px;color:var(--silver);">${status}</span>`}
      </div>
    </div>`;
  }).join('');
  updateFixtureWarning();
}

function renderAdminFixtures(){
  const list = document.getElementById('adminFixtureList');
  if(!list) return;
  if(isPlayoffStageActive()){
    renderAdminPlayoffFixtures(list);
    return;
  }
  if(!FIXTURES.length){
    list.innerHTML='<div style="color:var(--silver);font-size:13px;padding:12px 0;">No fixtures scheduled. Add one below.</div>';
    updateFixtureWarning();
    return;
  }
  list.innerHTML = FIXTURES.slice(0,30).map((f,i)=>{
    const t1 = TEAM_META[f.t1] || {name:f.t1,pri:'#444',sec:'#fff'};
    const t2 = TEAM_META[f.t2] || {name:f.t2,pri:'#444',sec:'#fff'};
    const isNext = i===0;
    return `<div class="adm-fixture-item${isNext?' adm-fixture-next':''}" draggable="true" ondragstart="onFixtureDragStart(event,${i})" ondrop="onFixtureDrop(event,${i})" ondragover="event.preventDefault()">
      <div class="adm-drag-handle">⠿</div>
      <div class="adm-fixture-meta">
        <strong>${isNext?'🔜 NEXT — ':''}MATCH ${f.id} · ${t1.name} vs ${t2.name}</strong>
        <span>${f.date||'TBD'} · ${f.venue||'LPL Arena'}</span>
      </div>
      <div class="adm-fixture-actions">
        <button class="adm-ghost-btn" onclick="editFixture(${f.id})">Edit</button>
        <button class="adm-ghost-btn" style="color:var(--red);border-color:var(--border);" onclick="deleteFixture(${f.id})">Del</button>
      </div>
    </div>`;
  }).join('');
  updateFixtureWarning();
}

function editFixture(id){
  const fixture = FIXTURES.find(f=>f.id===id);
  if(!fixture) return;
  // Ensure selectors are populated before setting values
  initFixtureSelectors();
  document.getElementById('fixtureId').value   = fixture.id;
  document.getElementById('fixtureT1').value   = fixture.t1;
  document.getElementById('fixtureT2').value   = fixture.t2;
  document.getElementById('fixtureVenue').value = fixture.venue||'LPL Arena';
  document.getElementById('fixtureDate').value  = fixture.date||'';
  // Scroll the form into view
  const addCard = document.querySelector('#adminSectionFixtures .adm-card:last-child');
  if(addCard) addCard.scrollIntoView({behavior:'smooth', block:'start'});
}

async function deleteFixture(id){
  if(!confirm('Remove fixture from schedule?')) return;
  const index = FIXTURES.findIndex(f=>f.id===id);
  if(index>=0){
    const fixture = FIXTURES[index];
    try {
      await _deleteFixtureDirect(fixture);
      await _reloadMatchesFromApi();
      renderAdminFixtures();
      renderFixtures();
      renderNextFixturePanel();
      updateLastUpdate();
    } catch(error){
      _showFixtureApiError(error);
    }
  }
}

async function saveFixture(){
  const id = parseInt(document.getElementById('fixtureId').value,10)||0;
  const t1 = document.getElementById('fixtureT1').value;
  const t2 = document.getElementById('fixtureT2').value;
  const venue = document.getElementById('fixtureVenue').value.trim() || 'LPL Arena';
  const date = document.getElementById('fixtureDate').value.trim() || 'TBD';
  if(!t1||!t2){ alert('Please select both teams.'); return; }
  if(t1===t2){ alert('Teams must be different.'); return; }
  const fixture = { id, t1, t2, venue, date };
  if(!id){
    const usedIds = [...FIXTURES.map(f=>f.id), ...RESULTS.map(r=>r.id)];
    fixture.id = usedIds.length ? Math.max(...usedIds)+1 : 1;
  }
  try {
    if(id) await _updateFixtureDirect(fixture);
    else await _createFixtureDirect(fixture);
    await _reloadMatchesFromApi();
  // Re-render list (do NOT call initFixtureSelectors here — it resets values)
  renderAdminFixtures();
  resetFixtureForm();
  // Update next-fixture banner and match-entry lock
  renderNextFixturePanel();
  // Refresh public matches page if visible
  if(typeof renderFixtures === 'function') renderFixtures();
  updateLastUpdate();
  // Show brief confirmation
  const warn = document.getElementById('fixtureWarning');
  if(warn){
    warn.textContent = id ? `Fixture #${id} updated.` : `New fixture added.`;
    warn.style.display='block';
    warn.style.color='var(--green)';
    warn.style.background='rgba(0,230,118,.07)';
    warn.style.borderColor='rgba(0,230,118,.25)';
    setTimeout(()=>{ warn.style.color=''; warn.style.background=''; warn.style.borderColor=''; updateFixtureWarning(); }, 2200);
  }
  } catch(error){
    _showFixtureApiError(error);
  }
}

function resetFixtureForm(){
  document.getElementById('fixtureId').value='';
  // Re-init selectors so dropdowns are fresh, then clear values
  initFixtureSelectors();
  document.getElementById('fixtureT1').value='';
  document.getElementById('fixtureT2').value='';
  document.getElementById('fixtureVenue').value='LPL Arena';
  document.getElementById('fixtureDate').value='';
  updateFixtureWarning();
}

function updateFixtureWarning(){
  const warning = document.getElementById('fixtureWarning');
  if(!warning) return;
  const problems=[];
  for(let i=0;i<FIXTURES.length-1;i++){
    const a=FIXTURES[i], b=FIXTURES[i+1];
    const teams=[a.t1,a.t2];
    const back = teams.filter(tm=>tm===b.t1||tm===b.t2);
    if(back.length){
      problems.push(`${TEAM_META[back[0]]?.name||back[0]} has back-to-back fixtures at positions ${i+1}-${i+2}.`);
    }
  }
  if(problems.length){
    warning.textContent = problems.join(' ');
    warning.style.display='block';
  } else {
    warning.style.display='none';
  }
}

function onFixtureDragStart(e,index){
  e.dataTransfer.setData('text/plain',index);
}

function onFixtureDrop(e,index){
  e.preventDefault();
  const from = parseInt(e.dataTransfer.getData('text/plain'),10);
  if(isNaN(from) || from===index) return;
  const moved = FIXTURES.splice(from,1)[0];
  FIXTURES.splice(index,0,moved);
  // TODO(fixtures-crud): fixture ordering is still a legacy local-only concern.
  // The current matches API has no ordering field beyond match_number.
  saveFixturesToStorage();
  // Refresh admin list
  renderAdminFixtures();
  // Refresh public fixtures tab and next-match banner so they match immediately
  renderFixtures();
  renderNextFixturePanel();
  updateLastUpdate();
}

function copyJSArray(which){
  const data = which==='RESULTS' ? RESULTS : FIXTURES;
  const text = `const ${which} = ${JSON.stringify(data,null,2)};`;
  navigator.clipboard.writeText(text).then(()=>{
    document.getElementById('adminLastUpdate').textContent = `${which} copied to clipboard.`;
  });
}

function exportUpdatedHTML(){
  let html = document.documentElement.outerHTML;
  const resultsText = JSON.stringify(RESULTS,null,2);
  const fixturesText = JSON.stringify(FIXTURES,null,2);
  html = html.replace(/const RESULTS = [\s\S]*?\];/, `const RESULTS = ${resultsText};`);
  html = html.replace(/const FIXTURES = [\s\S]*?\];/, `const FIXTURES = ${fixturesText};`);
  const blob = new Blob([html],'text/html');
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'LPL-updated.html';
  a.click();
  URL.revokeObjectURL(url);
  updateLastUpdate();
}

function updateLastUpdate(){
  const target = document.getElementById('adminLastUpdate');
  if(target) target.textContent = `Last update: ${new Date().toLocaleString()}`;
}

function renderShortformTeams(){
  const select = document.getElementById('ballShortformTeam');
  const edit = document.getElementById('adminShortformTeam');
  if(!select || !edit) return;
  const options = Object.keys(TEAMS).map(k=>`<option value="${k}">${TEAMS[k].name} (${k})</option>`).join('');
  select.innerHTML = options;
  edit.innerHTML = options;
  if(!select.value) select.value = Object.keys(TEAMS)[0] || '';
  if(!edit.value) edit.value = Object.keys(TEAMS)[0] || '';
  renderShortformEditor();
}

function renderShortformEditor(){
  const team = document.getElementById('adminShortformTeam').value;
  const textarea = document.getElementById('adminShortformTextarea');
  if(!team||!textarea) return;
  const map = SHORTFORM_MAP[team] || {};
  textarea.value = Object.entries(map).map(([k,v])=>`${k}=${v}`).join('\n');
}

function saveShortformMap(){
  const team = document.getElementById('adminShortformTeam').value;
  const textarea = document.getElementById('adminShortformTextarea');
  if(!team||!textarea) return;
  const map = {};
  textarea.value.split('\n').map(line=>line.trim()).filter(Boolean).forEach(line=>{
    const parts = line.split('=');
    if(parts.length===2){ map[parts[0].trim()] = parts[1].trim(); }
  });
  SHORTFORM_MAP[team] = map;
  document.getElementById('adminLastUpdate').textContent = `Shortform map for ${team} saved.`;
}

function resolveShortform(team, short){
  if(!short) return short;
  const map = SHORTFORM_MAP[team] || {};
  return map[short] || short;
}

function sanitizePlayerName(name){
  return name.trim();
}

function parseBallByBall(){
  const team1 = document.getElementById('ef_t1').value;
  const team2 = document.getElementById('ef_t2').value;
  if(!team1||!team2){ alert('Please make sure the fixture teams are selected first.'); return; }
  const textarea = document.getElementById('ballInput');
  const preview = document.getElementById('ballParsePreview');
  const lines = textarea.value.split('\n').map(l=>l.trim()).filter(Boolean);
  if(!lines.length){ alert('Paste ball-by-ball lines to parse.'); return; }
  const inning = parseInt(document.getElementById('ballInningsSelector').value,10);
  const teamKey = inning===1 ? team1 : team2;
  const oppKey = inning===1 ? team2 : team1;
  const result = parseBallLines(lines, teamKey, oppKey);
  if(!result){ preview.textContent='Unable to parse input. Check the format.'; return; }
  preview.innerHTML = `<div style="font-weight:700;color:var(--gold);">Parsed ${inning===1?'1st':'2nd'} innings</div><div style="margin-top:10px;">${result.batters.length} batters, ${result.bowlers.length} bowlers, extras ${result.extras}, total ${result.total}</div>`;
  window._ballParseStore = window._ballParseStore||[];
  window._ballParseStore[inning-1]=result;
  if(window._ballParseStore[0] && window._ballParseStore[1]){
    loadParsedMatchIntoManual({innings:[window._ballParseStore[0],window._ballParseStore[1]]});
    preview.innerHTML += '<div style="margin-top:12px;color:var(--green);">Both innings parsed. Switched to manual entry for review.</div>';
    window._ballParseStore=[];
    selectEntryMode('manual');
  } else {
    preview.innerHTML += '<div style="margin-top:12px;color:var(--silver);">Now paste the other innings and parse again.</div>';
  }
}

function resetBallMode(){
  document.getElementById('ballInput').value='';
  document.getElementById('ballParsePreview').textContent='Ball-by-ball preview will appear here.';
  window._ballParseStore=[];
}

function parseBallLines(lines, teamKey, oppKey){
  const batters={};
  const bowlers={};
  let total=0, extras=0, wickets=0;
  const fall=[];
  lines.forEach(line=>{
    const parts = line.split('-').map(p=>p.trim());
    if(parts.length<5) return;
    const batter = resolveShortform(teamKey, parts[1]);
    const eventTokens = parts[2].split(',').map(t=>t.trim()).filter(Boolean);
    const bowler = resolveShortform(oppKey, parts[4]);
    if(!batters[batter]) batters[batter]={n:batter,r:0,b:0,dis:'not out',notout:true};
    if(!bowlers[bowler]) bowlers[bowler]={n:bowler,o:0,r:0,w:0};
    eventTokens.forEach(token=>{
      const t = token.toUpperCase();
      if(t.startsWith('NB')){
        const add = parseInt((t.split('+')[1]||'0'),10)||0;
        extras += 1 + add;
        bowlers[bowler].r += 1 + add;
        if(add) { batters[batter].r += add; batters[batter].b += 1; total += 1 + add; }
      } else if(t.startsWith('WD')){
        const add = parseInt((t.split('+')[1]||'0'),10)||0;
        extras += 1 + add;
        bowlers[bowler].r += 1 + add;
        total += 1 + add;
      } else if(t==='W'){
        wickets++;
        bowlers[bowler].w += 1;
        batters[batter].dis = `b ${bowler}`;
        batters[batter].notout = false;
        batters[batter].b += 1;
      } else {
        const runs = parseInt(t,10);
        if(!isNaN(runs)){
          batters[batter].r += runs;
          batters[batter].b += 1;
          bowlers[bowler].r += runs;
          total += runs;
        }
      }
    });
    bowlers[bowler].o += 1;
  });
  const bats = Object.values(batters).map(b=>({n:b.n,dis:b.dis,r:b.r,b:b.b,sr:b.b>0?((b.r/b.b*100).toFixed(2)):'0.00',notout:b.notout||undefined}));
  const bowls = Object.values(bowlers).map(b=>({n:b.n,o:String(b.o),r:b.r,w:b.w,econ:b.o>0?((b.r/b.o).toFixed(2)):'0.00'}));
  return {team:teamKey,total:`${total}/${wickets}`,overs:'20',batters:bats,extras, bowlers:bowls, fall};
}

function parseStructuredText(){
  const raw = document.getElementById('textInput').value.trim();
  if(!raw){ alert('Paste structured scorecard text to import.'); return; }
  const lines = raw.split('\n').map(l=>l.trim()).filter(Boolean);
  const innings=[];
  let current=null;
  lines.forEach(line=>{
    if(line.toUpperCase().startsWith('TEAM:')){
      if(current) innings.push(current);
      current={team:line.split(':')[1].trim(),batters:[],bowlers:[],extras:0};
    } else if(line.toUpperCase().startsWith('TOTAL:')){
      const match= line.split(':')[1].trim();
      const parts = match.split('(');
      current.total = parts[0].trim();
      current.overs = parts[1] ? parts[1].replace(')','').trim() : '20';
    } else if(line.toUpperCase().startsWith('EXTRAS:')){
      current.extras = parseInt(line.split(':')[1].trim(),10)||0;
    } else if(line.toUpperCase().startsWith('BOWLING:')){
      current.mode='bowling';
    } else if(current){
      if(current.mode==='bowling'){
        const parts=line.split('|').map(p=>p.trim());
        if(parts.length>=4){ current.bowlers.push({n:parts[0],o:parts[1],r:parseInt(parts[2],10)||0,w:parseInt(parts[3],10)||0,econ:'0.00'}); }
      } else {
        const parts=line.split('|').map(p=>p.trim());
        if(parts.length>=5){ current.batters.push({n:parts[0],r:parseInt(parts[1],10)||0,b:parseInt(parts[2],10)||0,dis:parts[3]||'not out',notout:/yes/i.test(parts[4])}); }
      }
    }
  });
  if(current) innings.push(current);
  if(innings.length<1){ document.getElementById('textParsePreview').textContent='No innings were detected.'; return; }
  const preview = innings.map((inn,i)=>`Innings ${i+1}: ${inn.team} ${inn.total || 'unknown'} (${inn.overs})`).join('\n');
  document.getElementById('textParsePreview').textContent = preview;
  if(innings.length===2){
    loadParsedMatchIntoManual({innings});
    selectEntryMode('manual');
    updateLastUpdate();
  } else {
    document.getElementById('textParsePreview').textContent += '\n\nStructured import parsed one innings. Complete with Mode A if needed.';
  }
}

function resetTextMode(){
  document.getElementById('textInput').value='';
  document.getElementById('textParsePreview').textContent='Parsed preview will appear here.';
}

function loadParsedMatchIntoManual(parsed){
  const fixture = getNextFixture();
  if(fixture){ populateEntryFromFixture(fixture); }
  parsed.innings.forEach((inn, idx)=>{
    const innId = idx===0 ? 'inn1' : 'inn2';
    const bat = document.getElementById(innId+'_bat');
    const bowl = document.getElementById(innId+'_bowl');
    if(!bat||!bowl) return;
    bat.innerHTML = `<div class="ebat-head"><span>Batter</span><span>Runs</span><span>Balls</span><span>Dismissal</span><span>SR / N.O.</span><span></span></div>`;
    bowl.innerHTML = `<div class="ebowl-head"><span>Bowler</span><span>Overs</span><span>Runs</span><span>Wkts</span><span></span></div>`;
    (inn.batters||[]).forEach(b=>{
      _addBatRow(innId);
      const row = bat.lastElementChild;
      row.querySelector('.bname-inp').value = b.n || '';
      row.querySelector('.brun-inp').value = b.r || 0;
      row.querySelector('.bball-inp').value = b.b || 0;
      row.querySelector('.bdis-inp').value = b.dis || '';
      row.querySelector('.notout-cb').checked = !!b.notout;
      _calcSR(row);
    });
    (inn.bowlers||[]).forEach(b=>{
      _addBowlRow(innId);
      const row = bowl.lastElementChild;
      row.querySelector('.bname-inp').value = b.n || '';
      row.querySelector('.bov-inp').value = b.o || '';
      row.querySelector('.brun-inp').value = b.r || 0;
      row.querySelector('.bwkt-inp').value = b.w || 0;
    });
    document.getElementById(innId+'_extras').value = inn.extras || 0;
    document.getElementById(innId+'_overs').value = inn.overs || '20';
    updateInnTotals(innId);
  });
  document.getElementById('ef_winner').value = '';
  document.getElementById('ef_margin').value = '';
  document.getElementById('ef_potm').value = '';
  document.getElementById('ef_potmdetail').value = '';
  _setEntryStep(0);
  document.getElementById('entry_preview').textContent = 'Scorecard imported. Review the manual form before saving.';
}

// ═══════════════════════════════════════════ SEASON STATS
// ─────────────────────────────────────────────────────────────────────────────
// ALL STATS AUTO-COMPUTED FROM RESULTS — no manual entry needed.
// When you add a new match to RESULTS, all leaderboards update automatically.
// ─────────────────────────────────────────────────────────────────────────────

let statTab = 0;

function setStat(idx, btn) {
  statTab = idx;
  document.querySelectorAll('.stab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderStat();
}

// ── Unified statistics engine (shared/lplStatsEngine.js) ─────────────────────
function statsEngine() {
  if (!window.LPLStatsEngine) throw new Error('LPL statistics engine is not loaded.');
  return window.LPLStatsEngine;
}

function getFilteredResults(options) {
  return statsEngine().getFilteredResults(RESULTS, options || {});
}

function normalizePlayerName(name, team) {
  return statsEngine().normalizePlayerName(name, team);
}

// ── Stat cache cleanup — clears only derived/generated caches, never raw match data ──
function clearStatCaches() {
  const SAFE_TO_CLEAR = ['playerStats','orangeCap','purpleCap','records'];
  SAFE_TO_CLEAR.forEach(k => { try { localStorage.removeItem('lpl_' + k); } catch(e){} });
}

function buildPlayerStats() {
  return statsEngine().buildPlayerStatsBundle(getFilteredResults(), TEAM_META);
}

function computeMvpScores() {
  return statsEngine().computeMvpScores(getFilteredResults(), TEAM_META);
}

function renderStat() {
  const {batArr, bowlArr} = buildPlayerStats();
  const teamF = (document.getElementById('fTeam')||{}).value || '';
  const q     = ((document.getElementById('fSearch')||{}).value||'').toLowerCase();

  const filterBat = arr => arr
    .filter(p => (!teamF || p.team === teamF) && (!q || p.n.toLowerCase().includes(q)));
  const filterBwl = arr => arr
    .filter(p => (!teamF || p.team === teamF) && (!q || p.n.toLowerCase().includes(q)));

  const labels = ['Orange Cap','Purple Cap','Super Strikers','Highest Scores','Most Wickets','MVPs'];
  document.getElementById('statNote').textContent = 'Auto-computed from ' + RESULTS.filter(r=>r.winner!=='TBD').length + ' completed matches' + (statTab===5 ? ' · MVP score = Batting pts (runs, avg, SR, HS) + Bowling pts (wickets, economy, best spell) + Bonus (matches, POTM)' : '');

  const mvpArr = computeMvpScores();
  const filterMvp = arr => arr.filter(p => (!teamF || p.team === teamF) && (!q || p.n.toLowerCase().includes(q)));

  if (statTab === 0) renderOrangeCap(filterBat(batArr));
  else if (statTab === 1) renderPurpleCap(filterBwl(bowlArr));
  else if (statTab === 2) renderSuperStrikers(filterBat(batArr));
  else if (statTab === 3) renderHighestScores(batArr); // individual innings highs
  else if (statTab === 4) renderMostWickets(filterBwl(bowlArr));
  else if (statTab === 5) renderMVPs(filterMvp(mvpArr));

  // Update hero banner
  updateHero(statTab, batArr, bowlArr, mvpArr);
}

function updateHero(tab, batArr, bowlArr, mvpArr=[]) {
  let leader = null, badge = '', bgColor = '#FF822A';
  if (tab === 0 || tab === 2 || tab === 3) {
    leader = [...batArr].sort((a,b) => b.runs - a.runs)[0];
    badge  = tab===0 ? 'Orange Cap — Most Runs' : tab===2 ? 'Super Striker — Best SR' : 'Highest Individual Score';
    if (tab===2) leader = [...batArr].filter(p=>p.balls>=30).sort((a,b)=>b.sr-a.sr)[0];
    if (tab===3) {
      // Highest individual innings - flatten all innings
      const inh = getAllInningsHighs();
      leader = inh[0] ? {n:inh[0].n, team:inh[0].team, pri:inh[0].pri, sec:inh[0].sec, teamName:inh[0].teamName,
        runs:inh[0].r, balls:inh[0].b, inns:1, notOuts:0, hs:inh[0].r, hsNotOut:inh[0].notout} : leader;
    }
    bgColor = '#FF822A';
  } else if (tab === 5) {
    leader = [...mvpArr].sort((a,b) => b.score - a.score)[0];
    badge = 'MVP — Combined impact score';
    bgColor = '#FFC300';
  } else {
    leader = [...bowlArr].sort((a,b) => b.wkts - a.wkts || a.econ - b.econ)[0];
    badge  = tab===1 ? 'Purple Cap — Most Wickets' : 'Most Wickets';
    bgColor = '#9B5DE5';
  }
  if (!leader) return;
  document.getElementById('heroName').textContent = leader.n;
  document.getElementById('heroTeamLbl').textContent = `${leader.teamName} · ${leader.team}`;
  document.getElementById('heroAv').textContent = ini(leader.n);
  document.getElementById('heroAv').style.cssText = `width:148px;height:148px;border-radius:50%;background:linear-gradient(135deg,${leader.pri},${leader.sec});display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',cursive;font-size:50px;flex-shrink:0;border:3px solid ${leader.sec};box-shadow:0 0 40px ${leader.pri}60;color:#fff`;
  document.getElementById('capBadge').textContent = badge;
  document.getElementById('capBadge').style.cssText = `display:inline-flex;align-items:center;gap:6px;padding:4px 14px;border-radius:20px;font-family:'Barlow Condensed',sans-serif;font-size:11px;font-weight:800;letter-spacing:2px;text-transform:uppercase;margin-bottom:10px;background:${bgColor};color:#fff`;
  document.getElementById('heroBanner').style.background = `linear-gradient(135deg,${leader.pri}22 0%,#07071A 100%)`;
  document.getElementById('heroGlow').style.background   = `radial-gradient(circle,${leader.pri}28 0%,transparent 70%)`;
  // hero stat chips
  if (tab <= 2) {
    const sd = [
      {l:'RUNS', v:leader.runs, raw:leader.runs},
      {l:'INNS', v:leader.inns, raw:leader.inns},
      {l:'HS',   v:leader.hs+(leader.hsNotOut?'*':''), raw:leader.hs},
      {l:'SR',   v:leader.srStr||leader.sr, raw:leader.sr},
      {l:'AVG',  v:leader.avg, raw:parseFloat(leader.avg)||0},
    ];
    document.getElementById('heroStatsRow').innerHTML = sd.map(s=>`<div class="hstat"><div class="hstat-val" style="color:${rc2(s.raw)}">${s.v}</div><div class="hstat-lbl">${s.l}</div></div>`).join('');
  } else if (tab === 5) {
    const sd = [
      {l:'SCORE', v:leader.score.toFixed(1), raw:leader.score},
      {l:'RUNS', v:leader.batRuns || 0, raw:leader.batRuns || 0},
      {l:'WKTS', v:leader.wkts || 0, raw:(leader.wkts || 0) * 10},
      {l:'M',    v:leader.matches || 0, raw:leader.matches || 0},
      {l:'POTM', v:leader.potmCount || 0, raw:(leader.potmCount || 0) * 20},
    ];
    document.getElementById('heroStatsRow').innerHTML = sd.map(s=>`<div class="hstat"><div class="hstat-val" style="color:${rc2(s.raw)}">${s.v}</div><div class="hstat-lbl">${s.l}</div></div>`).join('');
  } else {
    const sd = [
      {l:'WKTS', v:leader.wkts, raw:leader.wkts*10},
      {l:'OV',   v:leader.ovStr, raw:50},
      {l:'RUNS',  v:leader.runs, raw:50},
      {l:'ECON', v:leader.econStr, raw: leader.econ<=14?90:leader.econ<=17?70:50},
    ];
    document.getElementById('heroStatsRow').innerHTML = sd.map(s=>`<div class="hstat"><div class="hstat-val" style="color:${rc2(s.raw)}">${s.v}</div><div class="hstat-lbl">${s.l}</div></div>`).join('');
  }
}

function rc2(v) { return v>=80?'#00e676':v>=60?'#ffd740':v>=40?'#ff9100':'#ff5252'; }

// ── Orange Cap ────────────────────────────────────────────────────────────────
function renderOrangeCap(arr) {
  const sorted = [...arr].sort((a,b) => b.runs - a.runs).slice(0,15);
  document.getElementById('statContainer').innerHTML = `
    <table class="lb">
      <thead><tr>
        <th>POS</th><th style="text-align:left">PLAYER</th><th>TEAM</th>
        <th>M</th><th>RUNS</th><th>HS</th><th>AVG</th><th>SR</th><th>4s+6s est.</th>
      </tr></thead>
      <tbody>${sorted.map((p,i)=>{
        const pc=i===0?'p1':i===1?'p2':i===2?'p3':'';
        return `<tr>
          <td><div class="pos ${pc}">${i+1}</div></td>
          <td><div class="pcell">
            <div class="pav" style="background:${p.pri}33;border:2px solid ${p.pri};color:${p.sec}">${ini(p.n)}</div>
            <div><div class="pn">${p.n}</div><div class="pt">${p.teamName}</div></div>
          </div></td>
          <td><span class="tbadge" style="background:${p.pri}30;color:${p.sec};border:1px solid ${p.pri}60">${p.team}</span></td>
          <td>${p.inns}</td>
          <td><span style="font-family:'Bebas Neue',cursive;font-size:22px;color:${p.runs>=300?'#FFD700':p.runs>=200?'#00e676':'var(--white)'}">${p.runs}</span></td>
          <td><span style="font-family:'Bebas Neue',cursive;font-size:18px;color:var(--gold)">${p.hs}${p.hsNotOut?'*':''}</span></td>
          <td style="color:var(--silver)">${p.avg}</td>
          <td><span style="font-family:'Bebas Neue',cursive;font-size:18px;color:${p.sr>=250?'#00e676':p.sr>=200?'#ffd740':'var(--silver)'}">${p.srStr}</span></td>
          <td style="color:var(--silver);font-size:11px">~${Math.round(p.balls*0.35)} bdry</td>
        </tr>`;
      }).join('')}</tbody>
    </table>`;
}

// ── Purple Cap ────────────────────────────────────────────────────────────────
function renderPurpleCap(arr) {
  const sorted = [...arr].sort((a,b) => b.wkts - a.wkts || a.econ - b.econ).slice(0,15);
  document.getElementById('statContainer').innerHTML = `
    <table class="lb">
      <thead><tr>
        <th>POS</th><th style="text-align:left">PLAYER</th><th>TEAM</th>
        <th>M</th><th>WKTS</th><th>OV</th><th>RUNS</th><th>ECON</th><th>BEST</th>
      </tr></thead>
      <tbody>${sorted.map((p,i)=>{
        const pc=i===0?'p1':i===1?'p2':i===2?'p3':'';
        // find best bowling spell
        const best = getBestSpell(p.n, p.team);
        return `<tr>
          <td><div class="pos ${pc}">${i+1}</div></td>
          <td><div class="pcell">
            <div class="pav" style="background:${p.pri}33;border:2px solid ${p.pri};color:${p.sec}">${ini(p.n)}</div>
            <div><div class="pn">${p.n}</div><div class="pt">${p.teamName}</div></div>
          </div></td>
          <td><span class="tbadge" style="background:${p.pri}30;color:${p.sec};border:1px solid ${p.pri}60">${p.team}</span></td>
          <td>${p.inns}</td>
          <td><span style="font-family:'Bebas Neue',cursive;font-size:22px;color:${p.wkts>=8?'#FFD700':p.wkts>=5?'#00e676':'var(--white)'}">${p.wkts}</span></td>
          <td style="color:var(--silver)">${p.ovStr}</td>
          <td style="color:var(--silver)">${p.runs}</td>
          <td><span style="font-family:'Bebas Neue',cursive;font-size:18px;color:${p.econ<=13?'#00e676':p.econ<=16?'#ffd740':'#ff9100'}">${p.econStr}</span></td>
          <td style="color:var(--gold);font-family:'Barlow Condensed',sans-serif;font-weight:700">${best}</td>
        </tr>`;
      }).join('')}</tbody>
    </table>`;
}

function getBestSpell(name, team) {
  return statsEngine().getBestSpell(name, team, getFilteredResults());
}

// ── Super Strikers (min 30 balls faced) ───────────────────────────────────────
function renderSuperStrikers(arr) {
  const qualified = arr.filter(p => p.balls >= 30);
  const sorted = [...qualified].sort((a,b) => b.sr - a.sr).slice(0,15);
  document.getElementById('statContainer').innerHTML = `
    <div style="font-size:11px;color:var(--silver);padding:0 0 12px;letter-spacing:1px">Min. 30 balls faced to qualify</div>
    <table class="lb">
      <thead><tr>
        <th>POS</th><th style="text-align:left">PLAYER</th><th>TEAM</th>
        <th>RUNS</th><th>BALLS</th><th>SR ▼</th><th>HS</th><th>INNS</th>
      </tr></thead>
      <tbody>${sorted.map((p,i)=>{
        const pc=i===0?'p1':i===1?'p2':i===2?'p3':'';
        return `<tr>
          <td><div class="pos ${pc}">${i+1}</div></td>
          <td><div class="pcell">
            <div class="pav" style="background:${p.pri}33;border:2px solid ${p.pri};color:${p.sec}">${ini(p.n)}</div>
            <div><div class="pn">${p.n}</div><div class="pt">${p.teamName}</div></div>
          </div></td>
          <td><span class="tbadge" style="background:${p.pri}30;color:${p.sec};border:1px solid ${p.pri}60">${p.team}</span></td>
          <td style="color:var(--silver)">${p.runs}</td>
          <td style="color:var(--silver)">${p.balls}</td>
          <td><span style="font-family:'Bebas Neue',cursive;font-size:22px;color:${p.sr>=280?'#FFD700':p.sr>=250?'#00e676':p.sr>=220?'#ffd740':'var(--white)'}">${p.srStr}</span></td>
          <td style="color:var(--gold);font-family:'Bebas Neue',cursive;font-size:18px">${p.hs}${p.hsNotOut?'*':''}</td>
          <td style="color:var(--silver)">${p.inns}</td>
        </tr>`;
      }).join('')}</tbody>
    </table>`;
}

// ── Highest Individual Innings ────────────────────────────────────────────────
function getAllInningsHighs() {
  return statsEngine().aggregateBattingInnings(getFilteredResults(), TEAM_META, { sortByRuns: true });
}

function renderHighestScores(arr) {
  const list = getAllInningsHighs().slice(0, 15);
  document.getElementById('statContainer').innerHTML = `
    <table class="lb">
      <thead><tr>
        <th>POS</th><th style="text-align:left">PLAYER</th><th>TEAM</th>
        <th>SCORE</th><th>BALLS</th><th>SR</th><th>DISMISSAL</th><th>VS</th>
      </tr></thead>
      <tbody>${list.map((p,i)=>{
        const pc=i===0?'p1':i===1?'p2':i===2?'p3':'';
        const vs = TEAM_META[p.vs]?.name || p.vs;
        return `<tr>
          <td><div class="pos ${pc}">${i+1}</div></td>
          <td><div class="pcell">
            <div class="pav" style="background:${p.pri}33;border:2px solid ${p.pri};color:${p.sec}">${ini(p.n)}</div>
            <div><div class="pn">${p.n}${p.notout?'*':''}</div><div class="pt">${p.teamName}</div></div>
          </div></td>
          <td><span class="tbadge" style="background:${p.pri}30;color:${p.sec};border:1px solid ${p.pri}60">${p.team}</span></td>
          <td><span style="font-family:'Bebas Neue',cursive;font-size:24px;color:${p.r>=100?'#FFD700':p.r>=50?'#00e676':'var(--white)'}">${p.r}${p.notout?'*':''}</span></td>
          <td style="color:var(--silver)">${p.b}</td>
          <td><span style="font-family:'Bebas Neue',cursive;font-size:18px;color:${parseFloat(p.sr)>=280?'#FFD700':parseFloat(p.sr)>=220?'#00e676':'var(--silver)'}">${p.sr}</span></td>
          <td style="font-size:11px;color:var(--silver)">${p.notout?'<span style="color:var(--gold)">not out</span>':p.dis}</td>
          <td style="font-size:11px;color:var(--silver)">vs ${vs} <span style="color:var(--border)">#M${p.matchId}</span></td>
        </tr>`;
      }).join('')}</tbody>
    </table>`;
}

// ── Most Wickets ──────────────────────────────────────────────────────────────
function renderMostWickets(arr) {
  const sorted = [...arr].sort((a,b) => b.wkts - a.wkts || a.econ - b.econ).slice(0,15);
  document.getElementById('statContainer').innerHTML = `
    <table class="lb">
      <thead><tr>
        <th>POS</th><th style="text-align:left">PLAYER</th><th>TEAM</th>
        <th>WKTS ▼</th><th>OV</th><th>RUNS</th><th>ECON</th><th>BEST</th><th>M</th>
      </tr></thead>
      <tbody>${sorted.map((p,i)=>{
        const pc=i===0?'p1':i===1?'p2':i===2?'p3':'';
        const best = getBestSpell(p.n, p.team);
        return `<tr>
          <td><div class="pos ${pc}">${i+1}</div></td>
          <td><div class="pcell">
            <div class="pav" style="background:${p.pri}33;border:2px solid ${p.pri};color:${p.sec}">${ini(p.n)}</div>
            <div><div class="pn">${p.n}</div><div class="pt">${p.teamName}</div></div>
          </div></td>
          <td><span class="tbadge" style="background:${p.pri}30;color:${p.sec};border:1px solid ${p.pri}60">${p.team}</span></td>
          <td><span style="font-family:'Bebas Neue',cursive;font-size:24px;color:${p.wkts>=8?'#FFD700':p.wkts>=5?'#00e676':'var(--white)'}">${p.wkts}</span></td>
          <td style="color:var(--silver)">${p.ovStr}</td>
          <td style="color:var(--silver)">${p.runs}</td>
          <td><span style="font-family:'Bebas Neue',cursive;font-size:18px;color:${p.econ<=13?'#00e676':p.econ<=16?'#ffd740':'#ff9100'}">${p.econStr}</span></td>
          <td style="color:var(--gold);font-family:'Barlow Condensed',sans-serif;font-weight:700">${best}</td>
          <td style="color:var(--silver)">${p.inns}</td>
        </tr>`;
      }).join('')}</tbody>
    </table>`;
}

function renderMVPs(arr) {
  const sorted = [...arr].sort((a,b) => b.score - a.score).slice(0,15);

  function subScores(p) {
    return statsEngine().getMvpScoreBreakdown(p);
  }

  const rankColors = ['#FFD700','#C0C0C0','#CD7F32'];
  const medals     = ['🥇','🥈','🥉'];

  document.getElementById('statContainer').innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:16px;padding-top:4px;">
    ${sorted.map((p,i)=>{
      const {bat,bowl,bonus} = subScores(p);
      const total = p.score;
      const batPct  = total > 0 ? (bat  / total * 100).toFixed(0) : 0;
      const bowlPct = total > 0 ? (bowl / total * 100).toFixed(0) : 0;
      const bonusPct= total > 0 ? (bonus/ total * 100).toFixed(0) : 0;
      const scoreColor = i===0?'#FFD700':i===1?'#C0C0C0':i===2?'#CD7F32':'var(--white)';
      const hasBat  = p.batRuns > 0 || p.inns > 0;
      const hasBowl = p.wkts > 0 || p.bowOvers > 0;

      return `<div style="background:var(--card);border:1px solid ${i<3?rankColors[i]+'55':'var(--border)'};border-radius:14px;overflow:hidden;position:relative;">
        <!-- Rank glow strip -->
        <div style="height:3px;background:${i<3?rankColors[i]:p.pri};"></div>

        <!-- Header -->
        <div style="padding:16px 18px 12px;display:flex;align-items:center;gap:14px;">
          <div style="position:relative;flex-shrink:0;">
            <div style="width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,${p.pri},${p.sec});display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',cursive;font-size:20px;color:#fff;border:2px solid ${p.sec}40;">${ini(p.n)}</div>
            ${i<3?`<div style="position:absolute;bottom:-4px;right:-4px;font-size:14px;">${medals[i]}</div>`:`<div style="position:absolute;bottom:-4px;right:-4px;width:18px;height:18px;border-radius:50%;background:var(--card2);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',cursive;font-size:10px;color:var(--silver);">${i+1}</div>`}
          </div>
          <div style="flex:1;min-width:0;">
            <div style="font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:17px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${p.n}</div>
            <div style="font-size:10px;color:var(--silver);letter-spacing:1px;margin-top:1px;">${p.teamName} &nbsp;·&nbsp; ${p.matches} match${p.matches!==1?'es':''}${p.potmCount?` &nbsp;·&nbsp; ⭐ ${p.potmCount} POTM`:''}</div>
          </div>
          <div style="text-align:right;flex-shrink:0;">
            <div style="font-family:'Bebas Neue',cursive;font-size:30px;line-height:1;color:${scoreColor};">${total.toFixed(1)}</div>
            <div style="font-size:9px;color:var(--silver);letter-spacing:2px;text-transform:uppercase;">MVP pts</div>
          </div>
        </div>

        <!-- Score bar -->
        <div style="padding:0 18px 10px;">
          <div style="display:flex;height:6px;border-radius:3px;overflow:hidden;background:var(--border);gap:1px;">
            ${bat>0?`<div style="flex:${batPct};background:#FF822A;border-radius:3px 0 0 3px;" title="Batting: ${bat} pts"></div>`:''}
            ${bowl>0?`<div style="flex:${bowlPct};background:#9B5DE5;" title="Bowling: ${bowl} pts"></div>`:''}
            ${bonus>0?`<div style="flex:${bonusPct};background:var(--gold);border-radius:0 3px 3px 0;" title="Bonus: ${bonus} pts"></div>`:''}
          </div>
          <div style="display:flex;gap:12px;margin-top:5px;">
            ${bat>0?`<span style="font-size:9px;color:#FF822A;letter-spacing:1px;">🏏 BAT ${bat}</span>`:''}
            ${bowl>0?`<span style="font-size:9px;color:#9B5DE5;letter-spacing:1px;">🎳 BOWL ${bowl}</span>`:''}
            ${bonus>0?`<span style="font-size:9px;color:var(--gold);letter-spacing:1px;">⭐ BONUS ${bonus}</span>`:''}
          </div>
        </div>

        <!-- Stats grid -->
        <div style="display:grid;grid-template-columns:${hasBat&&hasBowl?'1fr 1px 1fr':'1fr'};border-top:1px solid var(--border);">

          ${hasBat ? `<div style="padding:12px 16px;">
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:9px;font-weight:800;letter-spacing:2.5px;color:#FF822A;text-transform:uppercase;margin-bottom:10px;">Batting</div>
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;">
              <div style="text-align:center;">
                <div style="font-family:'Bebas Neue',cursive;font-size:22px;color:var(--white);">${p.batRuns}</div>
                <div style="font-size:9px;color:var(--silver);letter-spacing:1px;">RUNS</div>
              </div>
              <div style="text-align:center;">
                <div style="font-family:'Bebas Neue',cursive;font-size:22px;color:${p.sr>=220?'#00e676':p.sr>=180?'#ffd740':'var(--white)'};">${p.srStr}</div>
                <div style="font-size:9px;color:var(--silver);letter-spacing:1px;">SR</div>
              </div>
              <div style="text-align:center;">
                <div style="font-family:'Bebas Neue',cursive;font-size:22px;color:var(--white);">${p.hs}${p.hsNotOut?'*':''}</div>
                <div style="font-size:9px;color:var(--silver);letter-spacing:1px;">BEST</div>
              </div>
            </div>
            <div style="display:flex;gap:10px;margin-top:8px;padding-top:8px;border-top:1px solid var(--border)40;">
              <span style="font-size:10px;color:var(--silver);">AVG <span style="color:var(--white);font-family:'Barlow Condensed',sans-serif;font-weight:700;">${p.avgStr}</span></span>
              <span style="font-size:10px;color:var(--silver);">INNS <span style="color:var(--white);font-family:'Barlow Condensed',sans-serif;font-weight:700;">${p.inns}</span></span>
              ${p.notOuts?`<span style="font-size:10px;color:var(--silver);">N.O. <span style="color:#00e676;font-family:'Barlow Condensed',sans-serif;font-weight:700;">${p.notOuts}</span></span>`:''}
            </div>
          </div>` : ''}

          ${hasBat&&hasBowl ? `<div style="background:var(--border);"></div>` : ''}

          ${hasBowl ? `<div style="padding:12px 16px;">
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:9px;font-weight:800;letter-spacing:2.5px;color:#9B5DE5;text-transform:uppercase;margin-bottom:10px;">Bowling</div>
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;">
              <div style="text-align:center;">
                <div style="font-family:'Bebas Neue',cursive;font-size:22px;color:${p.wkts>=10?'#00e676':p.wkts>=5?'#ffd740':'var(--white)'};">${p.wkts}</div>
                <div style="font-size:9px;color:var(--silver);letter-spacing:1px;">WKTS</div>
              </div>
              <div style="text-align:center;">
                <div style="font-family:'Bebas Neue',cursive;font-size:22px;color:${p.econ<=14?'#00e676':p.econ<=18?'#ffd740':'#ff9100'};">${p.econStr}</div>
                <div style="font-size:9px;color:var(--silver);letter-spacing:1px;">ECON</div>
              </div>
              <div style="text-align:center;">
                <div style="font-family:'Bebas Neue',cursive;font-size:22px;color:var(--white);">${p.bestSpell}</div>
                <div style="font-size:9px;color:var(--silver);letter-spacing:1px;">BEST</div>
              </div>
            </div>
            <div style="display:flex;gap:10px;margin-top:8px;padding-top:8px;border-top:1px solid var(--border)40;">
              <span style="font-size:10px;color:var(--silver);">OV <span style="color:var(--white);font-family:'Barlow Condensed',sans-serif;font-weight:700;">${p.ovStr}</span></span>
              <span style="font-size:10px;color:var(--silver);">INNS <span style="color:var(--white);font-family:'Barlow Condensed',sans-serif;font-weight:700;">${p.bowInns}</span></span>
            </div>
          </div>` : ''}

          ${!hasBat ? `<div style="padding:12px 16px;display:flex;align-items:center;justify-content:center;"><span style="font-size:11px;color:var(--silver);font-style:italic;">No batting data</span></div>` : ''}
          ${!hasBowl ? `<div style="padding:12px 16px;display:flex;align-items:center;justify-content:center;"><span style="font-size:11px;color:var(--silver);font-style:italic;">Pure batter</span></div>` : ''}
        </div>
      </div>`;
    }).join('')}
    </div>
    <div style="margin-top:18px;padding:12px 16px;background:var(--card);border:1px solid var(--border);border-radius:10px;font-size:11px;color:var(--silver);line-height:1.8;">
      <span style="color:var(--white);font-family:'Barlow Condensed',sans-serif;font-weight:700;letter-spacing:1px;">HOW POINTS ARE CALCULATED</span><br>
      <span style="color:#FF822A;">🏏 Batting:</span> Runs ×1 · Avg ×6 · SR÷5 · Best score ×1.5 · Not-outs ×4<br>
      <span style="color:#9B5DE5;">🎳 Bowling:</span> Wickets ×12 · Economy bonus (20−econ)×3 · Overs ×1.2 · Best spell ×5 · 4-fer bonus ×4<br>
      <span style="color:var(--gold);">⭐ Bonus:</span> Matches ×3 · POTM awards ×10
    </div>`;
}

// ── Team filter init — called from main init() below ────────────────────────
function initStatFilter(){
  const sel = document.getElementById('fTeam');
  if (!sel) return;
  while(sel.options.length > 1) sel.remove(1);
  for(const [k,t] of Object.entries(TEAM_META)){
    const o = document.createElement('option');
    o.value = k; o.textContent = `${k} — ${t.name}`;
    sel.appendChild(o);
  }
}

// ═══════════════════════════════════════════ RECORDS
// ─────────────────────────────────────────────────────────────────────────────
// ALL RECORD STATS AUTO-COMPUTED FROM RESULTS SCORECARD DATA.
// To update: just add the new match to RESULTS. Nothing else needed here.
// ─────────────────────────────────────────────────────────────────────────────

function _batStats() {
  return statsEngine().aggregateBattingStats(getFilteredResults(), TEAM_META);
}

function _bowlStats() {
  return statsEngine().aggregateBowlingStats(getFilteredResults(), TEAM_META);
}

function _allInnings() {
  return statsEngine().aggregateBattingInnings(getFilteredResults(), TEAM_META, { normalizeNames: true });
}

function _potmCount() {
  return statsEngine().aggregatePotmStats(getFilteredResults());
}

function _teamTotals() {
  return statsEngine().aggregateTeamStats(getFilteredResults(), TEAM_META).teamTotals;
}

// ── sub-tab state ──
let recTab=0;
function setRecTab(i,btn){
  recTab=i;
  document.querySelectorAll('.rectab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  _renderRecTab();
}

function renderRecords(){
  const completed=RESULTS.filter(r=>r.winner!=='TBD').length;
  document.getElementById('recContent').innerHTML=`
    <div class="ptitle">Season Records</div>
    <div class="psub">LPL Season 1 · Auto-computed from ${completed} completed matches · Updates automatically</div>
    <div class="mtabs-row" style="margin-bottom:0">
      <button class="mtab rectab active" onclick="setRecTab(0,this)">Orange Cap</button>
      <button class="mtab rectab" onclick="setRecTab(1,this)">Purple Cap</button>
      <button class="mtab rectab" onclick="setRecTab(2,this)">Super Strikers</button>
      <button class="mtab rectab" onclick="setRecTab(3,this)">Highest Scores</button>
      <button class="mtab rectab" onclick="setRecTab(4,this)">Team Totals</button>
      <button class="mtab rectab" onclick="setRecTab(5,this)">Best Bowling</button>
      <button class="mtab rectab" onclick="setRecTab(6,this)">Most POTMs</button>
    </div>
    <div id="recTabBody" style="padding-top:24px"></div>`;
  _renderRecTab();
}

function _renderRecTab(){
  const el=document.getElementById('recTabBody');
  if(!el)return;
  if(recTab===0)_recOrangeCap(el);
  else if(recTab===1)_recPurpleCap(el);
  else if(recTab===2)_recSuperStrikers(el);
  else if(recTab===3)_recHighestScores(el);
  else if(recTab===4)_recTeamTotals(el);
  else if(recTab===5)_recBestBowling(el);
  else if(recTab===6)_recPotm(el);
}

function _tbl(headers,rows){
  return`<div class="lb-wrap"><table class="lb">
    <thead><tr>${headers.map(h=>`<th style="text-align:${h.align||'center'}">${h.l}</th>`).join('')}</tr></thead>
    <tbody>${rows.join('')}</tbody>
  </table></div>`;
}

function _pCell(p){
  return`<div class="pcell">
    <div class="pav" style="background:${p.pri}33;border:2px solid ${p.pri};color:${p.sec}">${ini(p.n)}</div>
    <div><div class="pn">${p.n}</div><div class="pt">${p.teamName}</div></div>
  </div>`;
}

function _badge(p){
  return`<span class="tbadge" style="background:${p.pri}30;color:${p.sec};border:1px solid ${p.pri}60">${p.team}</span>`;
}

function _pos(i){const c=i===0?'p1':i===1?'p2':i===2?'p3':'';return`<div class="pos ${c}">${i+1}</div>`;}

// 0 — Orange Cap
function _recOrangeCap(el){
  const data=_batStats().sort((a,b)=>b.runs-a.runs).slice(0,15);
  el.innerHTML=_tbl(
    [{l:'#'},{l:'Player',align:'left'},{l:'Team'},{l:'M'},{l:'Runs'},{l:'HS'},{l:'Avg'},{l:'SR'}],
    data.map((p,i)=>`<tr>
      <td>${_pos(i)}</td>
      <td>${_pCell(p)}</td>
      <td>${_badge(p)}</td>
      <td style="color:var(--silver)">${p.inns}</td>
      <td><span style="font-family:'Bebas Neue',cursive;font-size:24px;color:${p.runs>=300?'#FFD700':p.runs>=150?'#00e676':'var(--white)'}">${p.runs}</span></td>
      <td><span style="font-family:'Bebas Neue',cursive;font-size:18px;color:var(--gold)">${p.hs}${p.hsNotOut?'*':''}</span></td>
      <td style="color:var(--silver)">${p.avg}</td>
      <td><span style="font-family:'Bebas Neue',cursive;font-size:18px;color:${p.sr>=280?'#FFD700':p.sr>=230?'#00e676':p.sr>=190?'#ffd740':'var(--silver)'}">${p.srStr}</span></td>
    </tr>`)
  );
}

// 1 — Purple Cap
function _recPurpleCap(el){
  const data=_bowlStats().sort((a,b)=>b.wkts-a.wkts||a.econ-b.econ).slice(0,15);
  el.innerHTML=_tbl(
    [{l:'#'},{l:'Player',align:'left'},{l:'Team'},{l:'M'},{l:'Wkts'},{l:'Overs'},{l:'Runs'},{l:'Econ'},{l:'Best'}],
    data.map((p,i)=>`<tr>
      <td>${_pos(i)}</td>
      <td>${_pCell(p)}</td>
      <td>${_badge(p)}</td>
      <td style="color:var(--silver)">${p.inns}</td>
      <td><span style="font-family:'Bebas Neue',cursive;font-size:24px;color:${p.wkts>=8?'#FFD700':p.wkts>=5?'#00e676':'var(--white)'}">${p.wkts}</span></td>
      <td style="color:var(--silver)">${p.ovStr}</td>
      <td style="color:var(--silver)">${p.runs}</td>
      <td><span style="font-family:'Bebas Neue',cursive;font-size:18px;color:${p.econ<=13?'#00e676':p.econ<=16?'#ffd740':'#ff9100'}">${p.econStr}</span></td>
      <td style="color:var(--gold);font-family:'Barlow Condensed',sans-serif;font-weight:700">${p.bestStr}</td>
    </tr>`)
  );
}

// 2 — Super Strikers (min 30 balls)
function _recSuperStrikers(el){
  const data=_batStats().filter(p=>p.balls>=30).sort((a,b)=>b.sr-a.sr).slice(0,15);
  el.innerHTML=`<div style="font-size:11px;color:var(--silver);padding:0 0 12px;letter-spacing:1px">Min. 30 balls faced across all innings to qualify</div>`+
  _tbl(
    [{l:'#'},{l:'Player',align:'left'},{l:'Team'},{l:'Runs'},{l:'Balls'},{l:'SR ▼'},{l:'HS'},{l:'Inns'}],
    data.map((p,i)=>`<tr>
      <td>${_pos(i)}</td>
      <td>${_pCell(p)}</td>
      <td>${_badge(p)}</td>
      <td style="color:var(--silver)">${p.runs}</td>
      <td style="color:var(--silver)">${p.balls}</td>
      <td><span style="font-family:'Bebas Neue',cursive;font-size:24px;color:${p.sr>=350?'#FFD700':p.sr>=280?'#00e676':p.sr>=230?'#ffd740':'var(--white)'}">${p.srStr}</span></td>
      <td style="color:var(--gold);font-family:'Bebas Neue',cursive;font-size:18px">${p.hs}${p.hsNotOut?'*':''}</td>
      <td style="color:var(--silver)">${p.inns}</td>
    </tr>`)
  );
}

// 3 — Highest Individual Scores (top innings)
function _recHighestScores(el){
  const data=_allInnings().sort((a,b)=>b.r-a.r).slice(0,15);
  el.innerHTML=_tbl(
    [{l:'#'},{l:'Player',align:'left'},{l:'Team'},{l:'Score'},{l:'Balls'},{l:'SR'},{l:'Dismissal',align:'left'},{l:'Match'}],
    data.map((p,i)=>{
      const vsName=(TEAM_META[p.vs]||{}).name||p.vs;
      return`<tr>
        <td>${_pos(i)}</td>
        <td><div class="pcell">
          <div class="pav" style="background:${p.pri}33;border:2px solid ${p.pri};color:${p.sec}">${ini(p.n)}</div>
          <div><div class="pn">${p.n}${p.notout?'*':''}</div><div class="pt">${p.teamName}</div></div>
        </div></td>
        <td><span class="tbadge" style="background:${p.pri}30;color:${p.sec};border:1px solid ${p.pri}60">${p.team}</span></td>
        <td><span style="font-family:'Bebas Neue',cursive;font-size:26px;color:${p.r>=100?'#FFD700':p.r>=50?'#00e676':'var(--white)'}">${p.r}${p.notout?'*':''}</span></td>
        <td style="color:var(--silver)">${p.b}</td>
        <td><span style="font-family:'Bebas Neue',cursive;font-size:18px;color:${parseFloat(p.sr)>=300?'#FFD700':parseFloat(p.sr)>=250?'#00e676':'var(--silver)'}">${p.sr}</span></td>
        <td style="font-size:11px;color:${p.notout?'var(--gold)':'var(--silver)'}">${p.notout?'not out':p.dis}</td>
        <td style="font-size:11px;color:var(--silver)">vs ${vsName} <span style="color:var(--border)">#M${p.matchId}</span></td>
      </tr>`;
    })
  );
}

// 4 — Highest Team Totals
function _recTeamTotals(el){
  const data=_teamTotals().slice(0,15);
  el.innerHTML=_tbl(
    [{l:'#'},{l:'Team',align:'left'},{l:'Score'},{l:'Overs'},{l:'vs'},{l:'Match'}],
    data.map((p,i)=>{
      const vsName=(TEAM_META[p.vs]||{}).name||p.vs;
      return`<tr>
        <td>${_pos(i)}</td>
        <td><div class="team-pts-cell">
          <div class="team-pts-av" style="background:${p.pri}33;border:2px solid ${p.pri};color:${p.sec}">${p.team.slice(0,2)}</div>
          <div><div style="font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:15px">${p.teamName}</div></div>
        </div></td>
        <td><span style="font-family:'Bebas Neue',cursive;font-size:26px;color:${p.score>=400?'#FFD700':p.score>=350?'#00e676':p.score>=320?'#ffd740':'var(--white)'}">${p.total}</span></td>
        <td style="color:var(--silver)">${p.overs} ov</td>
        <td style="font-size:12px;color:var(--silver)">vs ${vsName}</td>
        <td style="font-size:11px;color:var(--silver)">#M${p.matchId}</td>
      </tr>`;
    })
  );
}

// 5 — Best Bowling Spells (individual spells, not aggregate)
function _recBestBowling(el){
  const top=statsEngine().aggregateBowlingSpells(getFilteredResults(), TEAM_META).slice(0,15);
  el.innerHTML=_tbl(
    [{l:'#'},{l:'Bowler',align:'left'},{l:'Team'},{l:'Figures'},{l:'Overs'},{l:'Econ'},{l:'vs'},{l:'Match'}],
    top.map((p,i)=>{
      const vsName=(TEAM_META[p.vs]||{}).name||p.vs;
      return`<tr>
        <td>${_pos(i)}</td>
        <td><div class="pcell">
          <div class="pav" style="background:${p.pri}33;border:2px solid ${p.pri};color:${p.sec}">${ini(p.n)}</div>
          <div><div class="pn">${p.n}</div><div class="pt">${p.teamName}</div></div>
        </div></td>
        <td><span class="tbadge" style="background:${p.pri}30;color:${p.sec};border:1px solid ${p.pri}60">${p.team}</span></td>
        <td><span style="font-family:'Bebas Neue',cursive;font-size:26px;color:${p.w>=4?'#FFD700':p.w>=3?'#00e676':'#ffd740'}">${p.w}/${p.r}</span></td>
        <td style="color:var(--silver)">${p.o}</td>
        <td><span style="font-family:'Bebas Neue',cursive;font-size:18px;color:${parseFloat(p.econ)<=12?'#00e676':parseFloat(p.econ)<=15?'#ffd740':'#ff9100'}">${p.econ}</span></td>
        <td style="font-size:12px;color:var(--silver)">vs ${vsName}</td>
        <td style="font-size:11px;color:var(--silver)">#M${p.matchId}</td>
      </tr>`;
    })
  );
}

// 6 — Most POTMs
function _recPotm(el){
  const data=_potmCount();
  if(!data.length){el.innerHTML='<div style="color:var(--silver);padding:20px">No POTM data yet.</div>';return;}
  el.innerHTML=_tbl(
    [{l:'#'},{l:'Player',align:'left'},{l:'Team'},{l:'Awards'},{l:'Details',align:'left'}],
    data.map((p,i)=>{
      const tm=TEAM_META[p.team]||{};
      return`<tr>
        <td>${_pos(i)}</td>
        <td><div class="pcell">
          <div class="pav" style="background:${tm.pri||'#444'}33;border:2px solid ${tm.pri||'#444'};color:${tm.sec||'#fff'}">${ini(p.n)}</div>
          <div><div class="pn">${p.n}</div><div class="pt">${tm.name||p.team}</div></div>
        </div></td>
        <td><span class="tbadge" style="background:${tm.pri||'#444'}30;color:${tm.sec||'#fff'};border:1px solid ${(tm.pri||'#444')}60">${p.team}</span></td>
        <td><span style="font-family:'Bebas Neue',cursive;font-size:28px;color:${p.count>=3?'#FFD700':p.count>=2?'#00e676':'var(--white)'}">${p.count}</span></td>
        <td style="font-size:11px;color:var(--silver)">${p.details.join(' · ')}</td>
      </tr>`;
    })
  );
}

// ═══════════════════════════════════════════ CRICKET CENTER
const CC_SECTION_LABELS = {
  profile: 'Player Profile',
  pvp: 'Player vs Player',
  tvt: 'Team vs Team',
  records: 'Records',
  rankings: 'Rankings',
  milestones: 'Milestones'
};

const ccState = {
  section: 'profile',
  playerKey: '',
  seasonId: '',
  matchFilter: 'all'
};

let _ccFiltersReady = false;

function _syncCcStateFromFilters() {
  const playerSel = document.getElementById('ccPlayerSelect');
  const seasonSel = document.getElementById('ccSeasonSelect');
  const matchSel = document.getElementById('ccMatchFilter');
  ccState.playerKey = (playerSel && playerSel.value) || '';
  ccState.seasonId = (seasonSel && seasonSel.value) || '';
  ccState.matchFilter = (matchSel && matchSel.value) || 'all';
}

function _getCcFilterOptions() {
  return {
    seasonId: ccState.seasonId || null,
    matchFilter: ccState.matchFilter || 'all'
  };
}

function getCcFilteredResults() {
  return getFilteredResults(_getCcFilterOptions());
}

function _populateCcFilters() {
  const playerSel = document.getElementById('ccPlayerSelect');
  const seasonSel = document.getElementById('ccSeasonSelect');
  const matchSel = document.getElementById('ccMatchFilter');
  if (!playerSel || !seasonSel || !matchSel) return;

  const prevPlayer = ccState.playerKey || playerSel.value || '';
  const prevSeason = ccState.seasonId || seasonSel.value || '';
  const prevMatch = ccState.matchFilter || matchSel.value || 'all';

  if (!_ccFiltersReady || playerSel.options.length <= 1) {
    const players = allP().sort((a, b) => a.n.localeCompare(b.n));
    playerSel.innerHTML = '<option value="">All Players</option>' + players.map((p) =>
      `<option value="${p.n}|${p.team}">${p.n} · ${p.team}</option>`
    ).join('');
  }

  if (!_ccFiltersReady || seasonSel.options.length <= 1) {
    const seasons = window.__LPL_API_SEASONS__ || [];
    let html = '<option value="">All Seasons</option>';
    if (seasons.length) {
      html += seasons.map((s) => {
        const id = s.id || s.seasonId || '';
        const label = s.name || s.label || s.title || id || 'Season';
        return `<option value="${id}">${label}</option>`;
      }).join('');
    } else {
      html += '<option value="">LPL Season 1</option>';
    }
    seasonSel.innerHTML = html;
  }

  playerSel.value = [...playerSel.options].some((o) => o.value === prevPlayer) ? prevPlayer : '';
  seasonSel.value = [...seasonSel.options].some((o) => o.value === prevSeason) ? prevSeason : '';
  matchSel.value = [...matchSel.options].some((o) => o.value === prevMatch) ? prevMatch : 'all';

  _syncCcStateFromFilters();
  _ccFiltersReady = true;
}

function _ccSelectedPlayerLabel() {
  if (!ccState.playerKey) return 'All players';
  const [name, team] = ccState.playerKey.split('|');
  const tm = TEAM_META[team] || {};
  return `${name} · ${tm.name || team} (${team})`;
}

function _ccSelectedSeasonLabel() {
  if (!ccState.seasonId) return 'All seasons';
  const seasons = window.__LPL_API_SEASONS__ || [];
  const match = seasons.find((s) => (s.id || s.seasonId) === ccState.seasonId);
  return match ? (match.name || match.label || match.title || ccState.seasonId) : ccState.seasonId;
}

function _ccMatchFilterLabel() {
  const labels = {
    all: 'All matches',
    league: 'League only',
    playoffs: 'Playoffs only',
    finals: 'Finals only'
  };
  return labels[ccState.matchFilter] || 'All matches';
}

function _ccBuildContext() {
  _syncCcStateFromFilters();
  const filterOptions = _getCcFilterOptions();
  const filteredResults = getCcFilteredResults();
  const completedCount = filteredResults.filter((m) => m.winner !== 'TBD').length;
  return {
    ccState: { ...ccState },
    filterOptions,
    filteredResults,
    completedCount,
    playerLabel: _ccSelectedPlayerLabel(),
    seasonLabel: _ccSelectedSeasonLabel(),
    matchFilterLabel: _ccMatchFilterLabel()
  };
}

function _ccPlaceholderShell(title, bodyHtml, ctx) {
  return `
    <div class="cc-panel">
      <div class="cc-panel-hdr">
        <div class="cc-panel-title">${title}</div>
        <div class="cc-panel-sub">Placeholder view · advanced stats coming in a later phase</div>
      </div>
      <div class="cc-meta">
        <div class="cc-meta-item"><span class="cc-meta-lbl">Player</span><span class="cc-meta-val">${ctx.playerLabel}</span></div>
        <div class="cc-meta-item"><span class="cc-meta-lbl">Season</span><span class="cc-meta-val">${ctx.seasonLabel}</span></div>
        <div class="cc-meta-item"><span class="cc-meta-lbl">Matches</span><span class="cc-meta-val">${ctx.matchFilterLabel}</span></div>
        <div class="cc-meta-item"><span class="cc-meta-lbl">In scope</span><span class="cc-meta-val">${ctx.completedCount} completed / ${ctx.filteredResults.length} total</span></div>
      </div>
      <div class="cc-placeholder">${bodyHtml}</div>
    </div>`;
}

function renderCCProfile(el, ctx) {
  if (!ctx.ccState.playerKey) {
    el.innerHTML = `
      <div class="cc-panel">
        <div class="cc-empty">
          <div class="cc-empty-icon">👤</div>
          <div class="cc-empty-title">Select a player</div>
          <p class="cc-empty-text">Choose a player from the <strong>player dropdown</strong> above to view batting, bowling, fielding stats, and a recent match log.</p>
          <p class="cc-empty-note">${ctx.completedCount} completed matches in scope · ${ctx.seasonLabel} · ${ctx.matchFilterLabel}</p>
        </div>
      </div>`;
    return;
  }

  const [playerName, playerTeam] = ctx.ccState.playerKey.split('|');
  const profile = statsEngine().buildPlayerProfileStats(
    ctx.filteredResults,
    TEAM_META,
    playerName,
    playerTeam,
    ctx.filterOptions
  );

  const roster = allP().find((p) => p.n === playerName && p.team === playerTeam);
  const tm = TEAM_META[playerTeam] || {};
  const pri = roster?.pri || tm.pri || '#444';
  const sec = roster?.sec || tm.sec || '#fff';
  const role = roster ? rfull(roster.role) : 'Player';
  const overall = roster ? avg(roster) : '—';

  const statChip = (label, value) => `
    <div class="hstat">
      <div class="hstat-val">${value ?? '—'}</div>
      <div class="hstat-lbl">${label}</div>
    </div>`;

  const section = (title, color, chips) => {
    if (!chips) return '';
    return `
      <div class="cc-profile-section">
        <div class="cc-section-title" style="color:${color}">${title}</div>
        <div class="cc-stat-grid">${chips}</div>
      </div>`;
  };

  const bat = profile.batting;
  const bowl = profile.bowling;
  const fld = profile.fielding;

  const battingSection = bat ? section('Batting', '#FF822A', [
    statChip('Matches', bat.matches),
    statChip('Innings', bat.innings),
    statChip('Runs', bat.runs),
    statChip('Balls', bat.balls),
    statChip('Average', bat.average),
    statChip('Strike Rate', bat.strikeRate),
    statChip('Highest', bat.highestScore),
    statChip('30s', bat.thirties),
    statChip('50s', bat.fifties),
    statChip('100s', bat.hundreds),
    statChip('4s', bat.fours),
    statChip('6s', bat.sixes),
    statChip('Ducks', bat.ducks)
  ].join('')) : '';

  const bowlingSection = bowl ? section('Bowling', '#9B5DE5', [
    statChip('Wickets', bowl.wickets),
    statChip('Overs', bowl.overs),
    statChip('Economy', bowl.economy),
    statChip('Average', bowl.average),
    statChip('Strike Rate', bowl.strikeRate),
    statChip('Best', bowl.bestBowling),
    statChip('3W', bowl.threeW),
    statChip('4W', bowl.fourW),
    statChip('5W', bowl.fiveW)
  ].join('')) : '';

  const fieldingSection = (profile.hasFielding || fld.catches + fld.stumpings + fld.runOuts >= 0) ? section('Fielding', '#00E676', [
    statChip('Catches', fld.catches),
    statChip('Stumpings', fld.stumpings),
    statChip('Run Outs', fld.runOuts)
  ].join('')) : '';

  const logRows = profile.matchLog.length ? profile.matchLog.slice(0, 12).map((row) => `
    <tr>
      <td><span style="color:var(--border)">#M${row.matchId}</span></td>
      <td><span class="tbadge" style="background:${row.type === 'bat' ? '#FF822A30' : '#9B5DE530'};color:${row.type === 'bat' ? '#FF822A' : '#9B5DE5'};border:1px solid ${row.type === 'bat' ? '#FF822A60' : '#9B5DE560'}">${row.type === 'bat' ? 'BAT' : 'BOWL'}</span></td>
      <td style="text-align:left;color:var(--silver);font-size:12px">vs ${row.vsName}</td>
      <td><span style="font-family:'Bebas Neue',cursive;font-size:20px;color:var(--white)">${row.figures}</span></td>
      <td style="font-size:11px;color:var(--silver)">${row.detail}</td>
      <td><span style="font-family:'Barlow Condensed',sans-serif;font-weight:800;color:${row.result === 'W' ? '#00e676' : row.result === 'L' ? '#ff5252' : 'var(--silver)'}">${row.result}</span></td>
    </tr>`).join('') : `<tr><td colspan="6" style="padding:20px;color:var(--silver);font-size:13px">No scorecard appearances in the current filter scope.</td></tr>`;

  const emptyNote = (!bat && !bowl && !profile.matchLog.length)
    ? `<p class="cc-profile-empty">No batting or bowling data for this player within the selected filters.</p>`
    : '';

  el.innerHTML = `
    <div class="cc-panel">
      <div class="cc-profile-hero" style="background:linear-gradient(135deg,${pri}22 0%,var(--card) 100%)">
        <div class="cc-profile-av" style="background:linear-gradient(135deg,${pri},${sec});border:3px solid ${sec}">${ini(playerName)}</div>
        <div class="cc-profile-info">
          <div class="cc-profile-name">${playerName}</div>
          <div class="cc-profile-team">${tm.name || playerTeam} · ${playerTeam}</div>
          <div class="cc-profile-tags">
            <span class="rbadge ${roster ? rbc(roster.role) : 'b-ar'}">${role}</span>
            ${roster?.women ? '<span class="women-pip">♀</span>' : ''}
            <span class="sqchip" style="color:${rc(overall)}">OVR ${overall}</span>
          </div>
        </div>
        <div class="cc-profile-scope">
          <div class="cc-meta-lbl">Filter scope</div>
          <div class="cc-scope-line">${ctx.seasonLabel}</div>
          <div class="cc-scope-line">${ctx.matchFilterLabel}</div>
          <div class="cc-scope-line">${ctx.completedCount} completed matches</div>
        </div>
      </div>
      ${emptyNote}
      ${battingSection}
      ${bowlingSection}
      ${fieldingSection}
      <div class="cc-profile-section">
        <div class="cc-section-title" style="color:var(--gold)">Recent Match Log</div>
        <div class="lb-wrap" style="padding:0 0 8px">
          <table class="lb">
            <thead><tr>
              <th>Match</th><th>Type</th><th style="text-align:left">Opposition</th><th>Figures</th><th>Detail</th><th>Result</th>
            </tr></thead>
            <tbody>${logRows}</tbody>
          </table>
        </div>
      </div>
    </div>`;
}

function renderCCPvP(el, ctx) {
  el.innerHTML = _ccPlaceholderShell(CC_SECTION_LABELS.pvp, `
    <p class="cc-placeholder-lead">Side-by-side player comparison will replace this panel — attribute bars, scorecard stats, and head-to-head history.</p>
    <p class="cc-placeholder-note">Use the player filter to pre-select a focus player for future PvP pickers.</p>
  `, ctx);
}

function renderCCTvT(el, ctx) {
  el.innerHTML = _ccPlaceholderShell(CC_SECTION_LABELS.tvt, `
    <p class="cc-placeholder-lead">Team vs team win records, run aggregates, and fixture history will render here.</p>
    <p class="cc-placeholder-note">${Object.keys(TEAM_META).length} franchises · ${ctx.filteredResults.length} matches in current filter scope.</p>
  `, ctx);
}

function renderCCRecords(el, ctx) {
  el.innerHTML = _ccPlaceholderShell(CC_SECTION_LABELS.records, `
    <p class="cc-placeholder-lead">Embedded records leaderboards (Orange Cap, Purple Cap, team totals, etc.) will reuse the unified statistics engine with Cricket Center filters applied.</p>
    <p class="cc-placeholder-note">Records page logic will be composed here instead of duplicated.</p>
  `, ctx);
}

function renderCCRankings(el, ctx) {
  el.innerHTML = _ccPlaceholderShell(CC_SECTION_LABELS.rankings, `
    <p class="cc-placeholder-lead">Combined rankings — points table, MVP table, and batting/bowling leaders — will appear in this tab.</p>
    <p class="cc-placeholder-note">Rankings will respect season and match-type filters via <code>getFilteredResults()</code>.</p>
  `, ctx);
}

function renderCCMilestones(el, ctx) {
  el.innerHTML = _ccPlaceholderShell(CC_SECTION_LABELS.milestones, `
    <p class="cc-placeholder-lead">Centuries, five-fers, cap milestones, and debut markers will be tracked here.</p>
    <p class="cc-placeholder-note">Fielding and milestone aggregators are ready in the statistics engine for future wiring.</p>
  `, ctx);
}

function setCcSection(section, btn) {
  if (!CC_SECTION_LABELS[section]) section = 'profile';
  ccState.section = section;
  document.querySelectorAll('.cc-main-tab').forEach((b) => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderCricketCenter();
}

function renderCricketCenter() {
  const content = document.getElementById('ccContent');
  if (!content) return;

  _populateCcFilters();
  const ctx = _ccBuildContext();

  const renderers = {
    profile: renderCCProfile,
    pvp: renderCCPvP,
    tvt: renderCCTvT,
    records: renderCCRecords,
    rankings: renderCCRankings,
    milestones: renderCCMilestones
  };

  const render = renderers[ccState.section] || renderCCProfile;
  render(content, ctx);

  const title = document.getElementById('cricketCenterTitle');
  if (title) title.textContent = CRICKET_CENTER_LABEL;
}

// ═══════════════════════════════════════════ HEAD TO HEAD
let h2h={A:null,B:null},pickTarget=null;

function openPick(slot){
  pickTarget=slot;
  document.getElementById('pickQ').value='';
  filterPick();
  document.getElementById('pickModal').classList.add('open');
}
function closePick(){
  const el=document.getElementById('pickModal');
  el.classList.remove('open');
  el.classList.add('closing');
  setTimeout(()=>el.classList.remove('closing'),280);
}
function filterPick(){
  const q=(document.getElementById('pickQ').value||'').toLowerCase();
  const ps=allP().filter(p=>p.n.toLowerCase().includes(q));
  document.getElementById('pickList').innerHTML=ps.map(p=>`
    <div class="mitem" onclick="pickPlayer('${p.team}','${p.n}')">
      <div class="mav" style="background:${p.pri}33;border:1px solid ${p.pri};color:${p.sec}">${ini(p.n)}</div>
      <div>
        <div class="mname">${p.n}</div>
        <div class="minfo">${p.teamName}${p.women?' · ♀':''} · ${rfull(p.role)} · ${p.hand}</div>
      </div>
    </div>`).join('');
}

function pickPlayer(tk,name){
  const t=TEAMS[tk],p=t.players.find(x=>x.n===name);
  h2h[pickTarget]={...p,team:tk,teamName:t.name,pri:t.pri,sec:t.sec,women:t.women};
  closePick();
  renderSlot(pickTarget);
  if(h2h.A&&h2h.B)renderCmp();
}
function clearSlot(s){
  h2h[s]=null;renderSlot(s);
  document.getElementById('h2hCmp').classList.remove('on');
  document.getElementById('h2hCmp').innerHTML='';
}

function renderSlot(s){
  const p=h2h[s],el=document.getElementById('slot'+s);
  if(!p){
    el.classList.remove('filled');
    el.innerHTML=`<div class="slot-plus">+</div><div style="font-size:12px;color:var(--silver);letter-spacing:2px;text-transform:uppercase">Select Player</div>`;
    el.onclick=()=>openPick(s);return;
  }
  el.classList.add('filled');el.onclick=null;
  el.innerHTML=`<button class="clearbtn" onclick="clearSlot('${s}')">✕ Clear</button>
    <div style="width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,${p.pri},${p.sec});display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',cursive;font-size:30px;color:#fff;border:3px solid ${p.sec};margin-bottom:10px;box-shadow:0 0 30px ${p.pri}55">${ini(p.n)}</div>
    <div style="font-family:'Bebas Neue',cursive;font-size:26px;text-align:center">${p.n}</div>
    <div style="font-size:10px;color:var(--silver);letter-spacing:2px;text-transform:uppercase;text-align:center;margin-top:3px">${p.teamName}${p.women?' ♀':''}</div>
    <span class="rbadge ${rbc(p.role)}" style="margin-top:8px">${rfull(p.role)}</span>
    <div style="font-family:'Bebas Neue',cursive;font-size:40px;color:${rc(avg(p))};margin-top:6px">${avg(p)}</div>
    <div style="font-size:9px;color:var(--silver);letter-spacing:2px">OVERALL AVG</div>`;
}

function renderCmp(){
  const a=h2h.A,b=h2h.B,aa=avg(a),ba=avg(b);
  const stats=[{k:'p',l:'POWER'},{k:'c',l:'CONSISTENCY'},{k:'pp',l:'POWERPLAY'},{k:'do',l:'DEATH OVERS'},{k:'cl',l:'CLUTCH'}];
  const aW=stats.filter(s=>a[s.k]>b[s.k]).length,bW=stats.filter(s=>b[s.k]>a[s.k]).length;
  const rows=stats.map(s=>{
    const av=a[s.k],bv=b[s.k],awin=av>bv,bwin=bv>av;
    return`<div class="srow">
      <div class="sleft" style="text-align:right">
        <div class="sval" style="color:${awin?'#00e676':av===bv?'#ffd740':'var(--silver)'}">${av}</div>
        <div class="sbar-bg"><div class="sbar-fill" style="width:${av}%;background:${a.sec};float:right"></div></div>
      </div>
      <div class="slabel">${s.l}<br><span style="font-size:10px;color:${awin?'#00e676':bwin?'#ff5252':'#ffd740'}">${awin?'◀ ▲':bwin?'▼ ▶':'═'}</span></div>
      <div>
        <div class="sval" style="color:${bwin?'#00e676':av===bv?'#ffd740':'var(--silver)'}">${bv}</div>
        <div class="sbar-bg"><div class="sbar-fill" style="width:${bv}%;background:${b.sec}"></div></div>
      </div>
    </div>`;
  }).join('');

  const winner=aa>ba?a.n:ba>aa?b.n:null;
  document.getElementById('h2hCmp').innerHTML=`
    <div class="cmp-hdr">
      <div>
        <div class="cmp-name" style="color:${a.sec}">${a.n}</div>
        <div class="cmp-team">${a.teamName}${a.women?' ♀':''}</div>
        <div class="cmp-avg" style="color:${rc(aa)}">${aa}</div>
        <div style="font-size:9px;color:var(--silver);letter-spacing:2px">AVG · ${aW}W / ${bW}L</div>
      </div>
      <div>
        <div class="vs-box">VS</div>
        <div style="margin-top:10px;font-size:12px;text-align:center;color:${winner?'#00e676':'#ffd740'}">
          ${winner?`${winner} leads`:'Even'}</div>
      </div>
      <div style="text-align:right">
        <div class="cmp-name" style="color:${b.sec}">${b.n}</div>
        <div class="cmp-team">${b.teamName}${b.women?' ♀':''}</div>
        <div class="cmp-avg" style="color:${rc(ba)}">${ba}</div>
        <div style="font-size:9px;color:var(--silver);letter-spacing:2px">AVG · ${bW}W / ${aW}L</div>
      </div>
    </div>
    ${rows}`;
  document.getElementById('h2hCmp').classList.add('on');
}

// ═══════════════════════════════════════════ TEAMS
function renderTeams(){
  document.getElementById('teamsGrid').innerHTML=
    Object.entries(TEAMS).map(([k,t])=>`
    <div class="tcard" style="--tp:${t.pri};--ts:${t.sec}" onclick="openSq('${k}')">
      <div class="tcard-bg"></div>
      <div class="tcard-shine"></div>
      <div class="tcard-logo">${k}</div>
      <div class="tcard-info">
        <div class="tcard-name">${t.name}${t.women?`<span class="women-pip">♀</span>`:''}</div>
        <div class="tcard-meta">${t.players.length} Players${t.cap?` · C: ${t.cap}`:''}${t.vc?` · VC: ${t.vc}`:''}</div>
      </div>
    </div>`).join('');
}

function openSq(k){
  const t=TEAMS[k];
  document.getElementById('sqHead').style.background=`linear-gradient(135deg,${t.pri}cc,${t.sec}44)`;
  document.getElementById('sqTName').textContent=t.name+(t.women?' ♀':'');
  document.getElementById('sqTFull').textContent=`LPL Season 1 · ${t.players.length} Players${t.cap?' · C: '+t.cap:''}${t.vc?' · VC: '+t.vc:''}`;
  const sorted=[...t.players].sort((a,b)=>avg(b)-avg(a));
  document.getElementById('sqGrid').innerHTML=sorted.map(p=>{
    const a=avg(p);
    const isCap=t.cap&&p.n===t.cap;
    const isVC=t.vc&&p.n===t.vc;
    return`<div class="sqcard">
      <div class="sqav" style="background:${t.pri}33;border-color:${t.pri};color:${t.sec}">${ini(p.n)}</div>
      <div style="flex:1">
        <div class="sqname">${p.n}${isCap?` <span style="background:${t.pri};color:#fff;font-size:9px;padding:1px 6px;border-radius:3px;font-family:'Barlow Condensed',sans-serif;font-weight:800;letter-spacing:1px">C</span>`:''}${isVC?` <span style="background:${t.sec}33;color:${t.sec};border:1px solid ${t.sec}55;font-size:9px;padding:1px 6px;border-radius:3px;font-family:'Barlow Condensed',sans-serif;font-weight:800;letter-spacing:1px">VC</span>`:''}</div>
        <div class="sqrole">${p.hand} · ${rfull(p.role)}${p.style!=='—'?' · '+p.style:''}</div>
        <div class="sqstats">
          ${[{l:'PWR',v:p.p},{l:'CON',v:p.c},{l:'PP',v:p.pp},{l:'DO',v:p.do},{l:'CLT',v:p.cl}].map(s=>
            `<span class="sqchip" style="color:${rc(s.v)}">${s.l} ${s.v}</span>`).join('')}
        </div>
      </div>
      <div style="text-align:center;min-width:50px">
        <div style="font-family:'Bebas Neue',cursive;font-size:28px;color:${rc(a)}">${a}</div>
        <div style="font-size:8px;color:var(--silver);letter-spacing:2px">AVG</div>
      </div>
    </div>`;
  }).join('');
  document.getElementById('sqModal').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeSq(){
  const el=document.getElementById('sqModal');
  el.classList.remove('open');
  el.classList.add('closing');
  setTimeout(()=>{el.classList.remove('closing');document.body.style.overflow='';},300);
}
document.getElementById('pickModal').addEventListener('click',function(e){if(e.target===this)closePick();});
document.getElementById('sqModal').addEventListener('click',function(e){if(e.target===this)closeSq();});

// ═══════════════════════════════════════════ INIT
// Deferred — called after all data (TEAM_META, RESULTS) is declared below.

// ════════════════════════════════════════════ MATCHES DATA
// ─────────────────────────────────────────────────────────
// HOW TO UPDATE:
//  • Add completed matches to RESULTS array (copy the structure)
//  • Add upcoming matches to FIXTURES array
//  • Points table auto-calculates from RESULTS
//  • Scorecard data lives in each result's .scorecard object
// ─────────────────────────────────────────────────────────

const TEAM_META = {
  RCB:  {name:'Royal Challengers Bangalore', pri:'#E63946', sec:'#FFBE0B'},
  MI:   {name:'Mumbai Indians',              pri:'#004BA0', sec:'#00D4FF'},
  CSK:  {name:'Chennai Super Kings',         pri:'#FDB913', sec:'#FFFFFF'},
  KKR:  {name:'Kolkata Knight Riders',       pri:'#3A225D', sec:'#F7D54E'},
  SRH:  {name:'Sunrisers Hyderabad',         pri:'#FF822A', sec:'#FFE45C'},
  GT:   {name:'Gujarat Titans',              pri:'#1C3664', sec:'#B5944C'},
  DC:   {name:'Delhi Capitals',              pri:'#004C97', sec:'#EF3340'},
  RR:   {name:'Rajasthan Royals (W)',        pri:'#EA1A85', sec:'#254AA5'},
  PBKS: {name:'Punjab Kings (W)',            pri:'#ED1B24', sec:'#C0C0C0'},
  LSG:  {name:'Lucknow Super Giants',        pri:'#A72B2A', sec:'#FBCE01'},
};

// ─── RESULTS (completed matches) ───────────────────────────────────────────
const RESULTS = [
  {
    id:1, t1:'RCB', t2:'MI', venue:'LPL Arena',
    t1score:'339/7', t1ov:'20', t2score:'340/8', t2ov:'18.2',
    winner:'MI', margin:'2 wickets', potm:'Bhuvan', potmDetail:'78* (31)',
    scorecard:{
      innings:[
        { team:'RCB', total:'339/7', overs:'20', batters:[
          {n:'Enoch',    dis:'c Adith b Sachin',      r:84,  b:36,  sr:'233.33'},
          {n:'Monish',   dis:'c Bhuvan b Shreyans',   r:102, b:45,  sr:'226.67'},
          {n:'Shakthi',  dis:'b Jayanth',             r:28,  b:14,  sr:'200.00'},
          {n:'Mohan',    dis:'c Vikas b Eshaan',      r:34,  b:16,  sr:'212.50'},
          {n:'Naveen',   dis:'not out',               r:41,  b:17,  sr:'241.18', notout:true},
          {n:'Ashwin',   dis:'c Lakshya b Shreyans',  r:19,  b:8,   sr:'237.50'},
          {n:'Harsha',   dis:'run out',               r:8,   b:4,   sr:'200.00'},
          {n:'Shivu',    dis:'not out',               r:11,  b:4,   sr:'275.00', notout:true},
        ], extras:12, bowlers:[
          {n:'Shreyans', o:'4',   r:58, w:2, econ:'14.50'},
          {n:'Jayanth',  o:'4',   r:47, w:1, econ:'11.75'},
          {n:'Eshaan',   o:'4',   r:55, w:1, econ:'13.75'},
          {n:'Sachin',   o:'4',   r:63, w:1, econ:'15.75'},
          {n:'Lakshya',  o:'2',   r:54, w:0, econ:'27.00'},
          {n:'Vikas',    o:'2',   r:50, w:0, econ:'25.00'},
        ]},
        { team:'MI', total:'340/8', overs:'18.2', batters:[
          {n:'Shreyans', dis:'c Naveen b Monish',      r:65,  b:27,  sr:'240.74'},
          {n:'Jayanth',  dis:'b Monish',               r:0,   b:2,   sr:'0.00'},
          {n:'Eshaan',   dis:'c Shivu b Shakthi',      r:24,  b:12,  sr:'200.00'},
          {n:'Adith',    dis:'c Bavith b Shakthi',     r:10,  b:7,   sr:'142.86'},
          {n:'Bhuvan',   dis:'not out',                r:78,  b:31,  sr:'251.61', notout:true},
          {n:'Sachin',   dis:'c Enoch b Ashwin',       r:31,  b:15,  sr:'206.67'},
          {n:'AdithyaB', dis:'c Mohan b Ashwin',       r:17,  b:6,   sr:'283.33'},
          {n:'Lakshya',  dis:'c Harsha b Shivu',       r:8,   b:4,   sr:'200.00'},
          {n:'Vikas',    dis:'b Shivu',                r:46,  b:18,  sr:'255.56'},
          {n:'Devendra', dis:'not out',                r:18,  b:8,   sr:'225.00', notout:true},
        ], extras:43, bowlers:[
          {n:'Monish',   o:'4',   r:58, w:2, econ:'14.50'},
          {n:'Shakthi',  o:'4',   r:61, w:2, econ:'15.25'},
          {n:'Enoch',    o:'4',   r:42, w:0, econ:'10.50'},
          {n:'Naveen',   o:'2',   r:39, w:0, econ:'19.50'},
          {n:'Ashwin',   o:'3',   r:63, w:2, econ:'21.00'},
          {n:'Shivu',    o:'1.2', r:29, w:2, econ:'21.75'},
          {n:'Bavith',   o:'1',   r:28, w:0, econ:'28.00'},
        ]},
      ]
    }
  },
  {
    id:2, t1:'RCB', t2:'GT', venue:'LPL Arena',
    t1score:'418/8', t1ov:'19.4', t2score:'417/10', t2ov:'19.5',
    winner:'RCB', margin:'2 wickets', potm:'Naveen', potmDetail:'156 (53)',
    scorecard:{
      innings:[
        { team:'GT', total:'417/10', overs:'19.5', batters:[
          {n:'Yogendra', dis:'c Ashwin b Monish',     r:6,   b:3,   sr:'200.00'},
          {n:'PavanGT',  dis:'c Naveen b Shakthi',    r:20,  b:9,   sr:'222.22'},
          {n:'Anil',     dis:'b Monish',              r:10,  b:6,   sr:'166.67'},
          {n:'MohanGT',  dis:'c Shivu b Bavith',      r:126, b:49,  sr:'257.14'},
          {n:'Devraj',   dis:'c Enoch b Naveen',      r:25,  b:10,  sr:'250.00'},
          {n:'Dharshan', dis:'c Harsha b Ashwin',     r:44,  b:19,  sr:'231.58'},
          {n:'Vikram',   dis:'b Shivu',               r:110, b:46,  sr:'239.13'},
          {n:'Shiva',    dis:'c Mohan b Ashwin',      r:58,  b:24,  sr:'241.67'},
          {n:'Koushik',  dis:'c Bavith b Shivu',      r:15,  b:7,   sr:'214.29'},
          {n:'Nanda',    dis:'run out',               r:31,  b:13,  sr:'238.46'},
        ], extras:22, bowlers:[
          {n:'Monish',   o:'4',   r:71, w:2, econ:'17.75'},
          {n:'Shakthi',  o:'4',   r:68, w:1, econ:'17.00'},
          {n:'Naveen',   o:'4',   r:74, w:1, econ:'18.50'},
          {n:'Ashwin',   o:'3.5', r:82, w:2, econ:'21.39'},
          {n:'Bavith',   o:'2',   r:46, w:1, econ:'23.00'},
          {n:'Shivu',    o:'2',   r:52, w:2, econ:'26.00'},
        ]},
        { team:'RCB', total:'418/8', overs:'19.4', batters:[
          {n:'Enoch',   dis:'c Koushik b Nanda',      r:82,  b:33,  sr:'248.48'},
          {n:'Monish',  dis:'c Devraj b Vikram',      r:108, b:44,  sr:'245.45'},
          {n:'Shakthi', dis:'c Shiva b Dharshan',     r:42,  b:18,  sr:'233.33'},
          {n:'Naveen',  dis:'b MohanGT',              r:156, b:53,  sr:'294.34'},
          {n:'Ashwin',  dis:'c PavanGT b MohanGT',   r:61,  b:23,  sr:'265.22'},
          {n:'Bavith',  dis:'run out',                r:8,   b:4,   sr:'200.00'},
          {n:'Shivu',   dis:'not out',                r:19,  b:6,   sr:'316.67', notout:true},
          {n:'Chandan', dis:'not out',                r:7,   b:3,   sr:'233.33', notout:true},
        ], extras:35, bowlers:[
          {n:'MohanGT',  o:'4',   r:73, w:2, econ:'18.25'},
          {n:'Dharshan', o:'4',   r:66, w:1, econ:'16.50'},
          {n:'Vikram',   o:'4',   r:79, w:1, econ:'19.75'},
          {n:'Nanda',    o:'4',   r:71, w:1, econ:'17.75'},
          {n:'Shiva',    o:'2',   r:54, w:0, econ:'27.00'},
          {n:'Devraj',   o:'1.4', r:40, w:0, econ:'24.00'},
        ]},
      ]
    }
  },
  {
    id:3, t1:'RCB', t2:'SRH', venue:'LPL Arena',
    t1score:'322/9', t1ov:'19.4', t2score:'321/8', t2ov:'20',
    winner:'RCB', margin:'1 wicket', potm:'Enoch', potmDetail:'157 (55)',
    scorecard:{
      innings:[
        { team:'SRH', total:'321/8', overs:'20', batters:[
          {n:'Harshavardhan',dis:'c Bavith b Shakthi',  r:104,b:41,sr:'253.66'},
          {n:'Prem',         dis:'c Monish b Ashwin',   r:92, b:39,sr:'235.90'},
          {n:'SaiTalwaar',   dis:'b Naveen',            r:16, b:9, sr:'177.78'},
          {n:'PavanSRH',     dis:'c Enoch b Naveen',    r:10, b:6, sr:'166.67'},
          {n:'Deva',         dis:'c Chandan b Bavith',  r:11, b:7, sr:'157.14'},
          {n:'Rishab',       dis:'b Bavith',            r:8,  b:5, sr:'160.00'},
          {n:'Suvas',        dis:'run out',             r:9,  b:5, sr:'180.00'},
          {n:'Dhanush',      dis:'not out',             r:37, b:14,sr:'264.29', notout:true},
          {n:'Anirudh',      dis:'not out',             r:22, b:8, sr:'275.00', notout:true},
        ], extras:12, bowlers:[
          {n:'Monish',  o:'2', r:41, w:0, econ:'20.50'},
          {n:'Ashwin',  o:'4', r:59, w:1, econ:'14.75'},
          {n:'Shakthi', o:'4', r:52, w:1, econ:'13.00'},
          {n:'Naveen',  o:'4', r:48, w:2, econ:'12.00'},
          {n:'Bavith',  o:'4', r:61, w:2, econ:'15.25'},
          {n:'Chandan', o:'2', r:46, w:0, econ:'23.00'},
        ]},
        { team:'RCB', total:'322/9', overs:'19.4', batters:[
          {n:'Monish',  dis:'c Brudvith b Dhanush',    r:0,  b:1, sr:'0.00'},
          {n:'Enoch',   dis:'c Rishab b Prem',         r:157,b:55,sr:'285.45'},
          {n:'Shakthi', dis:'c Deva b Harshavardhan',  r:76, b:31,sr:'245.16'},
          {n:'Mohan',   dis:'b Dhanush',               r:31, b:14,sr:'221.43'},
          {n:'Naveen',  dis:'b Dhanush',               r:0,  b:1, sr:'0.00'},
          {n:'Harsha',  dis:'c Prem b SaiTalwaar',     r:21, b:10,sr:'210.00'},
          {n:'Ashwin',  dis:'c Brudvith b SaiTalwaar', r:34, b:15,sr:'226.67'},
          {n:'Bavith',  dis:'c Dhanush b Prem',        r:9,  b:5, sr:'180.00'},
          {n:'Sandeep', dis:'c Deva b Dhanush',        r:8,  b:3, sr:'266.67'},
          {n:'Shivu',   dis:'not out',                 r:39, b:9, sr:'433.33', notout:true},
          {n:'Chandan', dis:'not out',                 r:18, b:5, sr:'360.00', notout:true},
        ], extras:29, bowlers:[
          {n:'Prem',          o:'4',   r:61, w:2, econ:'15.25'},
          {n:'Dhanush',       o:'4',   r:67, w:4, econ:'16.75'},
          {n:'SaiTalwaar',    o:'4',   r:58, w:2, econ:'14.50'},
          {n:'Harshavardhan', o:'4',   r:63, w:1, econ:'15.75'},
          {n:'Suvas',         o:'2',   r:41, w:0, econ:'20.50'},
          {n:'Deva',          o:'1.4', r:32, w:0, econ:'19.20'},
        ]},
      ]
    }
  },
  {
    id:4, t1:'MI', t2:'KKR', venue:'Wankhede-style Flat Deck',
    t1score:'312/6', t1ov:'19.2', t2score:'308/8', t2ov:'20',
    winner:'MI', margin:'4 wickets', potm:'Shreyans', potmDetail:'81 (34) & 2/54',
    scorecard:{
      innings:[
        { team:'KKR', total:'308/8', overs:'20', batters:[
          {n:'Gowardhan', dis:'c Adith b Shreyans',          r:74, b:32, sr:'231.25'},
          {n:'Ishaan',    dis:'b Sachin',                    r:28, b:15, sr:'186.67'},
          {n:'Bhargav',   dis:'c Bhuvan b Jayanth',          r:19, b:11, sr:'172.73'},
          {n:'Mithil',    dis:'c Adith b Eshaan',            r:61, b:33, sr:'184.85'},
          {n:'ShivuKKR',  dis:'b Shreyans',                  r:47, b:19, sr:'247.37'},
          {n:'Adithya',   dis:'c Vikas b Sachin',            r:14, b:9,  sr:'155.56'},
          {n:'Harshith',  dis:'run out',                     r:21, b:8,  sr:'262.50'},
          {n:'Harinandan',dis:'not out',                     r:18, b:6,  sr:'300.00', notout:true},
          {n:'Raghav',    dis:'not out',                     r:8,  b:3,  sr:'266.67', notout:true},
        ], extras:18, bowlers:[
          {n:'Shreyans', o:'4', r:54, w:2, econ:'13.50'},
          {n:'Jayanth',  o:'4', r:47, w:1, econ:'11.75'},
          {n:'Eshaan',   o:'4', r:66, w:1, econ:'16.50'},
          {n:'Sachin',   o:'4', r:58, w:2, econ:'14.50'},
          {n:'Vikas',    o:'2', r:39, w:0, econ:'19.50'},
          {n:'Lakshya',  o:'2', r:44, w:0, econ:'22.00'},
        ]},
        { team:'MI', total:'312/6', overs:'19.2', batters:[
          {n:'Shreyans', dis:'c Harinandan b Raghav',  r:81, b:34, sr:'238.24'},
          {n:'Jayanth',  dis:'c Mithil b Ishaan',      r:36, b:18, sr:'200.00'},
          {n:'Eshaan',   dis:'b ShivuKKR',             r:17, b:9,  sr:'188.89'},
          {n:'Adith',    dis:'c Gowardhan b Raghav',   r:41, b:20, sr:'205.00'},
          {n:'Bhuvan',   dis:'not out',                r:79, b:32, sr:'246.88', notout:true},
          {n:'Sachin',   dis:'c Adithya b ShivuKKR',   r:22, b:10, sr:'220.00'},
          {n:'Vikas',    dis:'not out',                r:18, b:7,  sr:'257.14', notout:true},
        ], extras:18, bowlers:[
          {n:'Ishaan',   o:'4',   r:49, w:1, econ:'12.25'},
          {n:'Bhargav',  o:'4',   r:61, w:0, econ:'15.25'},
          {n:'ShivuKKR', o:'4',   r:58, w:2, econ:'14.50'},
          {n:'Adithya',  o:'3',   r:53, w:0, econ:'17.67'},
          {n:'Raghav',   o:'3.2', r:46, w:2, econ:'13.80'},
          {n:'Harshith', o:'1',   r:24, w:0, econ:'24.00'},
        ]},
      ]
    }
  },
  {
    id:5, t1:'CSK', t2:'GT', venue:'LPL Arena',
    t1score:'339/6', t1ov:'19.5', t2score:'336/7', t2ov:'20',
    winner:'CSK', margin:'4 wickets', potm:'Madhan', potmDetail:'101* (42)',
    scorecard:{
      innings:[
        { team:'GT', total:'336/7', overs:'20', batters:[
          {n:'Yogendra', dis:'c Ganesh b Anand',        r:62, b:24, sr:'258.33'},
          {n:'PavanGT',  dis:'c Joseph b Karthik',      r:38, b:19, sr:'200.00'},
          {n:'Anil',     dis:'b Pradeep',               r:29, b:16, sr:'181.25'},
          {n:'MohanGT',  dis:'c Sampath b Joseph',      r:41, b:20, sr:'205.00'},
          {n:'Devraj',   dis:'not out',                 r:89, b:37, sr:'240.54', notout:true},
          {n:'Dharshan', dis:'c Ganesh b Anand',        r:22, b:10, sr:'220.00'},
          {n:'Vikram',   dis:'c Madhan b VikasCSK',     r:27, b:11, sr:'245.45'},
          {n:'Shiva',    dis:'not out',                 r:11, b:4,  sr:'275.00', notout:true},
        ], extras:17, bowlers:[
          {n:'Pradeep',  o:'4', r:67, w:1, econ:'16.75'},
          {n:'Anand',    o:'4', r:61, w:2, econ:'15.25'},
          {n:'Karthik',  o:'4', r:48, w:1, econ:'12.00'},
          {n:'Joseph',   o:'4', r:56, w:1, econ:'14.00'},
          {n:'Sampath',  o:'2', r:42, w:0, econ:'21.00'},
          {n:'VikasCSK', o:'2', r:45, w:1, econ:'22.50'},
        ]},
        { team:'CSK', total:'339/6', overs:'19.5', batters:[
          {n:'Karthik',  dis:'c Koushik b MohanGT',   r:74, b:31, sr:'238.71'},
          {n:'Pradeep',  dis:'b Nanda',               r:39, b:16, sr:'243.75'},
          {n:'Immanuel', dis:'c Vikram b Dharshan',   r:18, b:10, sr:'180.00'},
          {n:'Joseph',   dis:'c Devraj b MohanGT',    r:42, b:20, sr:'210.00'},
          {n:'Madhan',   dis:'not out',               r:101,b:42, sr:'240.48', notout:true},
          {n:'Ganesh',   dis:'c Yogendra b Shiva',    r:17, b:9,  sr:'188.89'},
          {n:'Sampath',  dis:'not out',               r:25, b:10, sr:'250.00', notout:true},
        ], extras:23, bowlers:[
          {n:'MohanGT',  o:'4',   r:62, w:2, econ:'15.50'},
          {n:'Nanda',    o:'4',   r:58, w:1, econ:'14.50'},
          {n:'Dharshan', o:'4',   r:55, w:1, econ:'13.75'},
          {n:'Shiva',    o:'4',   r:61, w:1, econ:'15.25'},
          {n:'Vikram',   o:'2',   r:49, w:0, econ:'24.50'},
          {n:'Devraj',   o:'1.5', r:44, w:0, econ:'24.00'},
        ]},
      ]
    }
  },
  {
    id:6, t1:'DC', t2:'LSG', venue:'LPL Arena',
    t1score:'297/5', t1ov:'19.2', t2score:'294/8', t2ov:'20',
    winner:'LSG', margin:'5 wickets', potm:'Sutej', potmDetail:'88 (38)',
    scorecard:{
      innings:[
        { team:'DC', total:'294/8', overs:'20', batters:[
          {n:'Deepak',    dis:'c Munavir b Srinath',      r:48, b:22, sr:'218.18'},
          {n:'Hariharan', dis:'c Krishna b Mohinuddin',   r:52, b:25, sr:'208.00'},
          {n:'Kuldeep',   dis:'b ShreyanshLSG',           r:34, b:16, sr:'212.50'},
          {n:'Kadhirvel', dis:'c Srujan b Srinath',       r:39, b:18, sr:'216.67'},
          {n:'LikithR',   dis:'c Dinesh b Krishna',       r:61, b:29, sr:'210.34'},
          {n:'LikinC',    dis:'run out',                  r:19, b:8,  sr:'237.50'},
          {n:'Vipul',     dis:'c Dinesh b Mohinuddin',    r:14, b:7,  sr:'200.00'},
          {n:'ShivaK',    dis:'not out',                  r:11, b:5,  sr:'220.00', notout:true},
          {n:'Redoy',     dis:'not out',                  r:6,  b:3,  sr:'200.00', notout:true},
        ], extras:10, bowlers:[
          {n:'Srinath',      o:'4', r:53, w:2, econ:'13.25'},
          {n:'Mohinuddin',   o:'4', r:58, w:2, econ:'14.50'},
          {n:'ShreyanshLSG', o:'4', r:49, w:1, econ:'12.25'},
          {n:'Krishna',      o:'4', r:55, w:1, econ:'13.75'},
          {n:'Srujan',       o:'2', r:37, w:0, econ:'18.50'},
          {n:'Thammu',       o:'2', r:42, w:0, econ:'21.00'},
        ]},
        { team:'LSG', total:'297/5', overs:'19.2', batters:[
          {n:'Chirag',     dis:'c Redoy b Mukfeer',      r:71, b:30, sr:'236.67'},
          {n:'Sutej',      dis:'c Vipul b Pratheek',     r:88, b:38, sr:'231.58'},
          {n:'Dinesh',     dis:'b Kadhirvel',            r:29, b:16, sr:'181.25'},
          {n:'Srinath',    dis:'c Hariharan b Kuldeep',  r:31, b:14, sr:'221.43'},
          {n:'Srujan',     dis:'not out',                r:42, b:18, sr:'233.33', notout:true},
          {n:'Mohinuddin', dis:'not out',                r:19, b:8,  sr:'237.50', notout:true},
        ], extras:17, bowlers:[
          {n:'Mukfeer',   o:'4',   r:59, w:1, econ:'14.75'},
          {n:'Kadhirvel', o:'4',   r:62, w:1, econ:'15.50'},
          {n:'Kuldeep',   o:'4',   r:55, w:1, econ:'13.75'},
          {n:'Pratheek',  o:'4',   r:51, w:1, econ:'12.75'},
          {n:'LikinC',    o:'2',   r:34, w:0, econ:'17.00'},
          {n:'Vipul',     o:'1.2', r:36, w:0, econ:'27.00'},
        ]},
      ]
    }
  },
  {
    id:7, t1:'SRH', t2:'KKR', venue:'LPL Arena',
    t1score:'315/6', t1ov:'19.3', t2score:'312/9', t2ov:'20',
    winner:'SRH', margin:'4 wickets', potm:'Harshavardhan', potmDetail:'98 (39) & 1/56',
    scorecard:{
      innings:[
        { team:'KKR', total:'312/9', overs:'20', batters:[
          {n:'Gowardhan', dis:'c Brudvith b Prem',        r:82, b:33, sr:'248.48'},
          {n:'Ishaan',    dis:'b Dhanush',                r:26, b:14, sr:'185.71'},
          {n:'Bhargav',   dis:'c Harshavardhan b Prem',   r:19, b:10, sr:'190.00'},
          {n:'Mithil',    dis:'c SaiTalwaar b Suvas',     r:57, b:31, sr:'183.87'},
          {n:'ShivuKKR',  dis:'b Dhanush',                r:41, b:18, sr:'227.78'},
          {n:'Adithya',   dis:'c Deva b Harshavardhan',   r:14, b:8,  sr:'175.00'},
          {n:'Harshith',  dis:'run out',                  r:18, b:7,  sr:'257.14'},
          {n:'Harinandan',dis:'c Prem b Dhanush',         r:21, b:9,  sr:'233.33'},
          {n:'Raghav',    dis:'not out',                  r:14, b:5,  sr:'280.00', notout:true},
          {n:'Dhruv',     dis:'not out',                  r:7,  b:3,  sr:'233.33', notout:true},
        ], extras:13, bowlers:[
          {n:'Prem',          o:'4',   r:57, w:2, econ:'14.25'},
          {n:'Dhanush',       o:'4',   r:61, w:3, econ:'15.25'},
          {n:'SaiTalwaar',    o:'4',   r:49, w:0, econ:'12.25'},
          {n:'Harshavardhan', o:'4',   r:56, w:1, econ:'14.00'},
          {n:'Suvas',         o:'2',   r:41, w:1, econ:'20.50'},
          {n:'Deva',          o:'2',   r:44, w:0, econ:'22.00'},
        ]},
        { team:'SRH', total:'315/6', overs:'19.3', batters:[
          {n:'Harshavardhan',dis:'c Mithil b Raghav',   r:98, b:39, sr:'251.28'},
          {n:'Prem',         dis:'c Harinandan b Ishaan',r:64,b:28, sr:'228.57'},
          {n:'SaiTalwaar',   dis:'b ShivuKKR',          r:36, b:17, sr:'211.76'},
          {n:'PavanSRH',     dis:'c Dhruv b Bhargav',   r:21, b:11, sr:'190.91'},
          {n:'Rishab',       dis:'not out',             r:52, b:22, sr:'236.36', notout:true},
          {n:'Dhanush',      dis:'c Gowardhan b Raghav',r:18, b:7,  sr:'257.14'},
          {n:'Anirudh',      dis:'not out',             r:13, b:5,  sr:'260.00', notout:true},
        ], extras:13, bowlers:[
          {n:'Ishaan',   o:'4',   r:58, w:1, econ:'14.50'},
          {n:'Bhargav',  o:'4',   r:55, w:1, econ:'13.75'},
          {n:'Raghav',   o:'4',   r:61, w:2, econ:'15.25'},
          {n:'ShivuKKR', o:'4',   r:54, w:1, econ:'13.50'},
          {n:'Adithya',  o:'2',   r:42, w:0, econ:'21.00'},
          {n:'Harshith', o:'1.3', r:31, w:0, econ:'20.67'},
        ]},
      ]
    }
  },
  {
    id:8, t1:'GT', t2:'MI', venue:'LPL Arena',
    t1score:'333/5', t1ov:'19.4', t2score:'329/7', t2ov:'20',
    winner:'GT', margin:'5 wickets', potm:'Yogendra', potmDetail:'83 (32)',
    scorecard:{
      innings:[
        { team:'MI', total:'329/7', overs:'20', batters:[
          {n:'Shreyans', dis:'c Koushik b MohanGT',   r:94, b:38, sr:'247.37'},
          {n:'Jayanth',  dis:'c Yogendra b Nanda',    r:28, b:14, sr:'200.00'},
          {n:'Eshaan',   dis:'c Shiva b Dharshan',    r:31, b:17, sr:'182.35'},
          {n:'Adith',    dis:'b MohanGT',             r:26, b:14, sr:'185.71'},
          {n:'Bhuvan',   dis:'not out',               r:79, b:31, sr:'254.84', notout:true},
          {n:'Sachin',   dis:'c Devraj b Vikram',     r:22, b:10, sr:'220.00'},
          {n:'Vikas',    dis:'c PavanGT b MohanGT',  r:18, b:8,  sr:'225.00'},
          {n:'Devendra', dis:'not out',               r:11, b:5,  sr:'220.00', notout:true},
        ], extras:20, bowlers:[
          {n:'MohanGT',  o:'4', r:63, w:3, econ:'15.75'},
          {n:'Nanda',    o:'4', r:56, w:1, econ:'14.00'},
          {n:'Dharshan', o:'4', r:58, w:1, econ:'14.50'},
          {n:'Vikram',   o:'4', r:61, w:1, econ:'15.25'},
          {n:'Shiva',    o:'2', r:44, w:0, econ:'22.00'},
          {n:'Devraj',   o:'2', r:47, w:0, econ:'23.50'},
        ]},
        { team:'GT', total:'333/5', overs:'19.4', batters:[
          {n:'Yogendra', dis:'c Adith b Sachin',      r:83, b:32, sr:'259.38'},
          {n:'PavanGT',  dis:'c Bhuvan b Jayanth',    r:51, b:24, sr:'212.50'},
          {n:'Anil',     dis:'c Lakshya b Shreyans',  r:28, b:14, sr:'200.00'},
          {n:'MohanGT',  dis:'b Eshaan',              r:62, b:29, sr:'213.79'},
          {n:'Devraj',   dis:'not out',               r:71, b:27, sr:'262.96', notout:true},
          {n:'Vikram',   dis:'not out',               r:19, b:8,  sr:'237.50', notout:true},
        ], extras:19, bowlers:[
          {n:'Shreyans', o:'4',   r:58, w:1, econ:'14.50'},
          {n:'Jayanth',  o:'4',   r:64, w:1, econ:'16.00'},
          {n:'Eshaan',   o:'4',   r:62, w:1, econ:'15.50'},
          {n:'Sachin',   o:'4',   r:71, w:1, econ:'17.75'},
          {n:'Vikas',    o:'2',   r:48, w:0, econ:'24.00'},
          {n:'Lakshya',  o:'1.4', r:30, w:0, econ:'18.00'},
        ]},
      ]
    }
  },
  {
    id:9, t1:'CSK', t2:'DC', venue:'LPL Arena',
    t1score:'304/6', t1ov:'19.2', t2score:'301/9', t2ov:'20',
    winner:'CSK', margin:'4 wickets', potm:'Karthik', potmDetail:'87 (35)',
    scorecard:{
      innings:[
        { team:'DC', total:'301/9', overs:'20', batters:[
          {n:'Deepak',    dis:'c Madhan b Joseph',        r:41, b:20, sr:'205.00'},
          {n:'Hariharan', dis:'b Pradeep',                r:56, b:28, sr:'200.00'},
          {n:'Kuldeep',   dis:'c Karthik b Sampath',      r:31, b:16, sr:'193.75'},
          {n:'Kadhirvel', dis:'b Anand',                  r:39, b:19, sr:'205.26'},
          {n:'LikithR',   dis:'c Ganesh b VikasCSK',      r:62, b:30, sr:'206.67'},
          {n:'LikinC',    dis:'c Joseph b Pradeep',       r:18, b:9,  sr:'200.00'},
          {n:'Vipul',     dis:'run out',                  r:17, b:8,  sr:'212.50'},
          {n:'ShivaK',    dis:'c Immanuel b Joseph',      r:14, b:7,  sr:'200.00'},
          {n:'Redoy',     dis:'not out',                  r:10, b:4,  sr:'250.00', notout:true},
          {n:'Mukfeer',   dis:'not out',                  r:4,  b:2,  sr:'200.00', notout:true},
        ], extras:9, bowlers:[
          {n:'Pradeep',  o:'4', r:58, w:2, econ:'14.50'},
          {n:'Joseph',   o:'4', r:61, w:2, econ:'15.25'},
          {n:'Anand',    o:'4', r:55, w:1, econ:'13.75'},
          {n:'Sampath',  o:'4', r:47, w:1, econ:'11.75'},
          {n:'VikasCSK', o:'4', r:71, w:1, econ:'17.75'},
        ]},
        { team:'CSK', total:'304/6', overs:'19.2', batters:[
          {n:'Karthik',  dis:'c Redoy b Mukfeer',       r:87, b:35, sr:'248.57'},
          {n:'Pradeep',  dis:'c Hariharan b Kadhirvel', r:24, b:11, sr:'218.18'},
          {n:'Immanuel', dis:'c Vipul b Kuldeep',       r:19, b:10, sr:'190.00'},
          {n:'Joseph',   dis:'c Deepak b Pratheek',     r:31, b:15, sr:'206.67'},
          {n:'Madhan',   dis:'c Redoy b Mukfeer',       r:64, b:28, sr:'228.57'},
          {n:'Ganesh',   dis:'run out',                 r:12, b:6,  sr:'200.00'},
          {n:'Sampath',  dis:'not out',                 r:28, b:12, sr:'233.33', notout:true},
          {n:'VikasCSK', dis:'not out',                 r:14, b:5,  sr:'280.00', notout:true},
        ], extras:25, bowlers:[
          {n:'Mukfeer',   o:'4',   r:59, w:2, econ:'14.75'},
          {n:'Kadhirvel', o:'4',   r:62, w:1, econ:'15.50'},
          {n:'Kuldeep',   o:'4',   r:55, w:1, econ:'13.75'},
          {n:'Pratheek',  o:'4',   r:51, w:1, econ:'12.75'},
          {n:'LikinC',    o:'2',   r:34, w:0, econ:'17.00'},
          {n:'Vipul',     o:'1.2', r:43, w:0, econ:'32.25'},
        ]},
      ]
    }
  },
  {
    id:10, t1:'LSG', t2:'SRH', venue:'LPL Arena',
    t1score:'326/8', t1ov:'20', t2score:'347/6', t2ov:'20',
    winner:'SRH', margin:'21 runs', potm:'Harshavardhan', potmDetail:'103 (41)',
    scorecard:{
      innings:[
        { team:'SRH', total:'347/6', overs:'20', batters:[
          {n:'Harshavardhan',dis:'c Munavir b Srinath',    r:103,b:41, sr:'251.22'},
          {n:'Prem',         dis:'c Dinesh b Mohinuddin',  r:49, b:23, sr:'213.04'},
          {n:'SaiTalwaar',   dis:'c Krishna b ShreyanshLSG',r:61,b:29, sr:'210.34'},
          {n:'PavanSRH',     dis:'b Srinath',              r:17, b:9,  sr:'188.89'},
          {n:'Rishab',       dis:'not out',                r:54, b:24, sr:'225.00', notout:true},
          {n:'Dhanush',      dis:'c Sutej b Krishna',      r:22, b:10, sr:'220.00'},
          {n:'Anirudh',      dis:'not out',                r:18, b:7,  sr:'257.14', notout:true},
        ], extras:23, bowlers:[
          {n:'Srinath',      o:'4', r:66, w:2, econ:'16.50'},
          {n:'Mohinuddin',   o:'4', r:61, w:1, econ:'15.25'},
          {n:'ShreyanshLSG', o:'4', r:58, w:1, econ:'14.50'},
          {n:'Krishna',      o:'4', r:67, w:1, econ:'16.75'},
          {n:'Thammu',       o:'2', r:44, w:0, econ:'22.00'},
          {n:'Srujan',       o:'2', r:51, w:0, econ:'25.50'},
        ]},
        { team:'LSG', total:'326/8', overs:'20', batters:[
          {n:'Chirag',     dis:'c Brudvith b Prem',      r:72, b:31, sr:'232.26'},
          {n:'Sutej',      dis:'c Dhanush b SaiTalwaar', r:68, b:30, sr:'226.67'},
          {n:'Dinesh',     dis:'c Deva b Harshavardhan', r:25, b:14, sr:'178.57'},
          {n:'Srinath',    dis:'b Dhanush',              r:41, b:18, sr:'227.78'},
          {n:'Srujan',     dis:'c Prem b Dhanush',       r:36, b:17, sr:'211.76'},
          {n:'Mohinuddin', dis:'c Anirudh b Dhanush',    r:22, b:11, sr:'200.00'},
          {n:'Krishna',    dis:'run out',                r:17, b:8,  sr:'212.50'},
          {n:'Thammu',     dis:'not out',                r:14, b:6,  sr:'233.33', notout:true},
          {n:'Munavir',    dis:'not out',                r:9,  b:4,  sr:'225.00', notout:true},
        ], extras:22, bowlers:[
          {n:'Prem',          o:'4', r:61, w:1, econ:'15.25'},
          {n:'Dhanush',       o:'4', r:67, w:3, econ:'16.75'},
          {n:'SaiTalwaar',    o:'4', r:58, w:1, econ:'14.50'},
          {n:'Harshavardhan', o:'4', r:63, w:1, econ:'15.75'},
          {n:'Suvas',         o:'2', r:41, w:0, econ:'20.50'},
          {n:'Deva',          o:'2', r:36, w:0, econ:'18.00'},
        ]},
      ]
    }
  },
  {
    id:11, t1:'KKR', t2:'DC', venue:'LPL Arena',
    t1score:'286/6', t1ov:'20', t2score:'258/8', t2ov:'20',
    winner:'KKR', margin:'28 runs', potm:'Gowardhan', potmDetail:'78 (34)',
    scorecard:{
      innings:[
        { team:'KKR', total:'286/6', overs:'20', batters:[
          {n:'Gowardhan', dis:'c Redoy b Mukfeer',      r:78, b:34, sr:'229.41'},
          {n:'Ishaan',    dis:'c Kuldeep b Pratheek',   r:41, b:23, sr:'178.26'},
          {n:'Bhargav',   dis:'b Kadhirvel',            r:22, b:14, sr:'157.14'},
          {n:'Mithil',    dis:'not out',                r:64, b:33, sr:'193.94', notout:true},
          {n:'ShivuKKR',  dis:'c Deepak b Mukfeer',     r:27, b:11, sr:'245.45'},
          {n:'Raghav',    dis:'run out',                r:18, b:7,  sr:'257.14'},
          {n:'Dhruv',     dis:'not out',                r:9,  b:3,  sr:'300.00', notout:true},
        ], extras:27, bowlers:[
          {n:'Mukfeer',   o:'4', r:49, w:2, econ:'12.25'},
          {n:'Kadhirvel', o:'4', r:57, w:1, econ:'14.25'},
          {n:'Pratheek',  o:'4', r:54, w:1, econ:'13.50'},
          {n:'Kuldeep',   o:'4', r:61, w:0, econ:'15.25'},
          {n:'LikinC',    o:'2', r:31, w:0, econ:'15.50'},
          {n:'Vipul',     o:'2', r:34, w:0, econ:'17.00'},
        ]},
        { team:'DC', total:'258/8', overs:'20', batters:[
          {n:'Deepak',    dis:'c Mithil b Ishaan',      r:52, b:29, sr:'179.31'},
          {n:'Hariharan', dis:'b ShivuKKR',             r:34, b:18, sr:'188.89'},
          {n:'Kuldeep',   dis:'c Harinandan b Raghav',  r:28, b:16, sr:'175.00'},
          {n:'Kadhirvel', dis:'c Gowardhan b ShivuKKR', r:39, b:18, sr:'216.67'},
          {n:'LikithR',   dis:'run out',                r:26, b:15, sr:'173.33'},
          {n:'Redoy',     dis:'c Ishaan b Bhargav',     r:21, b:11, sr:'190.91'},
          {n:'LikinC',    dis:'b Raghav',               r:17, b:8,  sr:'212.50'},
          {n:'Vipul',     dis:'not out',                r:14, b:4,  sr:'350.00', notout:true},
          {n:'Mukfeer',   dis:'not out',                r:8,  b:2,  sr:'400.00', notout:true},
        ], extras:19, bowlers:[
          {n:'Ishaan',   o:'4', r:43, w:1, econ:'10.75'},
          {n:'ShivuKKR', o:'4', r:51, w:2, econ:'12.75'},
          {n:'Raghav',   o:'4', r:48, w:2, econ:'12.00'},
          {n:'Bhargav',  o:'3', r:39, w:1, econ:'13.00'},
          {n:'Adithya',  o:'3', r:42, w:0, econ:'14.00'},
          {n:'Harshith', o:'2', r:35, w:0, econ:'17.50'},
        ]},
      ]
    }
  },
  {
    id:12, t1:'RR', t2:'DC', venue:'LPL Arena',
    t1score:'293/6', t1ov:'19.3', t2score:'289/8', t2ov:'20',
    winner:'RR', margin:'4 wickets', potm:'Yuktha', potmDetail:'86* (38)',
    scorecard:{
      innings:[
        { team:'DC', total:'289/8', overs:'20', batters:[
          {n:'Deepak',    dis:'c Sangamithra b Diya',    r:42, b:21, sr:'200.00'},
          {n:'Hariharan', dis:'c Deesha b Yethi',        r:58, b:27, sr:'214.81'},
          {n:'Kuldeep',   dis:'c Yuktha b Cynthia',      r:35, b:18, sr:'194.44'},
          {n:'Kadhirvel', dis:'b Yethi',                 r:44, b:22, sr:'200.00'},
          {n:'LikithR',   dis:'c Deeksha b Harsitha',    r:51, b:26, sr:'196.15'},
          {n:'LikinC',    dis:'run out',                 r:20, b:9,  sr:'222.22'},
          {n:'Vipul',     dis:'c Yashmitha b Deesha',    r:16, b:8,  sr:'200.00'},
          {n:'Redoy',     dis:'not out',                 r:11, b:5,  sr:'220.00', notout:true},
          {n:'Mukfeer',   dis:'not out',                 r:5,  b:3,  sr:'166.67', notout:true},
        ], extras:7, bowlers:[
          {n:'Yethi',      o:'4', r:59, w:2, econ:'14.75'},
          {n:'Deesha',     o:'4', r:63, w:1, econ:'15.75'},
          {n:'Diya',       o:'4', r:54, w:1, econ:'13.50'},
          {n:'Cynthia',    o:'4', r:51, w:1, econ:'12.75'},
          {n:'Yashmitha',  o:'2', r:42, w:0, econ:'21.00'},
          {n:'Harsitha',   o:'2', r:20, w:1, econ:'10.00'},
        ]},
        { team:'RR', total:'293/6', overs:'19.3', batters:[
          {n:'Diya',        dis:'c Redoy b Kuldeep',     r:57, b:27, sr:'211.11'},
          {n:'Deesha',      dis:'c Hariharan b Mukfeer', r:49, b:23, sr:'213.04'},
          {n:'Deeksha',     dis:'b Kadhirvel',           r:24, b:14, sr:'171.43'},
          {n:'Cynthia',     dis:'c Deepak b Vipul',      r:19, b:10, sr:'190.00'},
          {n:'Yuktha',      dis:'not out',               r:86, b:38, sr:'226.32', notout:true},
          {n:'Yethi',       dis:'c Redoy b Pratheek',    r:33, b:14, sr:'235.71'},
          {n:'Sangamithra', dis:'not out',               r:14, b:6,  sr:'233.33', notout:true},
        ], extras:11, bowlers:[
          {n:'Mukfeer',   o:'4',   r:59, w:1, econ:'14.75'},
          {n:'Kadhirvel', o:'4',   r:62, w:1, econ:'15.50'},
          {n:'Kuldeep',   o:'4',   r:55, w:1, econ:'13.75'},
          {n:'Pratheek',  o:'4',   r:51, w:1, econ:'12.75'},
          {n:'LikinC',    o:'2',   r:34, w:0, econ:'17.00'},
          {n:'Vipul',     o:'1.3', r:32, w:1, econ:'21.33'},
        ]},
      ]
    }
  },
  {
    id:13, t1:'PBKS', t2:'KKR', venue:'LPL Arena',
    t1score:'309/7', t1ov:'19.4', t2score:'306/8', t2ov:'20',
    winner:'PBKS', margin:'3 wickets', potm:'Madhu', potmDetail:'72 (32)',
    scorecard:{
      innings:[
        { team:'KKR', total:'306/8', overs:'20', batters:[
          {n:'Gowardhan', dis:'c PriyankaR b Lakshmi',  r:79, b:33, sr:'239.39'},
          {n:'Ishaan',    dis:'c Madhu b Priyanka',     r:36, b:18, sr:'200.00'},
          {n:'Bhargav',   dis:'b Brinda',               r:24, b:12, sr:'200.00'},
          {n:'Mithil',    dis:'c Bindu b Likitha',      r:58, b:29, sr:'200.00'},
          {n:'ShivuKKR',  dis:'c Lakshmi b Priyanka',   r:41, b:18, sr:'227.78'},
          {n:'Adithya',   dis:'c Saanika b Roshini',    r:17, b:9,  sr:'188.89'},
          {n:'Harinandan',dis:'run out',                r:14, b:6,  sr:'233.33'},
          {n:'Raghav',    dis:'not out',                r:12, b:5,  sr:'240.00', notout:true},
          {n:'Dhruv',     dis:'not out',                r:8,  b:4,  sr:'200.00', notout:true},
        ], extras:17, bowlers:[
          {n:'Lakshmi',   o:'4', r:58, w:1, econ:'14.50'},
          {n:'Priyanka',  o:'4', r:61, w:2, econ:'15.25'},
          {n:'Brinda',    o:'4', r:55, w:1, econ:'13.75'},
          {n:'Likitha',   o:'4', r:47, w:1, econ:'11.75'},
          {n:'Roshini',   o:'2', r:38, w:1, econ:'19.00'},
          {n:'Harsitha',  o:'2', r:47, w:0, econ:'23.50'},
        ]},
        { team:'PBKS', total:'309/7', overs:'19.4', batters:[
          {n:'Bindu',     dis:'c Harinandan b Ishaan',  r:68, b:30, sr:'226.67'},
          {n:'Madhu',     dis:'c Mithil b Raghav',      r:72, b:32, sr:'225.00'},
          {n:'Keerthana', dis:'c Gowardhan b Bhargav',  r:26, b:14, sr:'185.71'},
          {n:'Lakshmi',   dis:'b ShivuKKR',             r:31, b:15, sr:'206.67'},
          {n:'Brinda',    dis:'c Mithil b Ishaan',      r:18, b:9,  sr:'200.00'},
          {n:'Saanika',   dis:'not out',                r:51, b:21, sr:'242.86', notout:true},
          {n:'PriyankaR', dis:'run out',                r:14, b:7,  sr:'200.00'},
          {n:'Priyanka',  dis:'not out',                r:11, b:4,  sr:'275.00', notout:true},
        ], extras:18, bowlers:[
          {n:'Ishaan',   o:'4',   r:54, w:2, econ:'13.50'},
          {n:'Bhargav',  o:'4',   r:58, w:1, econ:'14.50'},
          {n:'ShivuKKR', o:'4',   r:61, w:1, econ:'15.25'},
          {n:'Raghav',   o:'4',   r:58, w:1, econ:'14.50'},
          {n:'Adithya',  o:'2',   r:44, w:0, econ:'22.00'},
          {n:'Harshith', o:'1.4', r:34, w:0, econ:'20.40'},
        ]},
      ]
    }
  },
  {
    id:14, t1:'LSG', t2:'GT', venue:'LPL Arena',
    t1score:'338/5', t1ov:'19.4', t2score:'334/6', t2ov:'20',
    winner:'LSG', margin:'5 wickets', potm:'Chirag', potmDetail:'93 (39)',
    scorecard:{
      innings:[
        { team:'GT', total:'334/6', overs:'20', batters:[
          {n:'Yogendra', dis:'c Munavir b Srinath',     r:84, b:34, sr:'247.06'},
          {n:'PavanGT',  dis:'c Dinesh b Mohinuddin',   r:43, b:21, sr:'204.76'},
          {n:'Anil',     dis:'b Krishna',               r:26, b:15, sr:'173.33'},
          {n:'MohanGT',  dis:'c Sutej b ShreyanshLSG',  r:57, b:25, sr:'228.00'},
          {n:'Devraj',   dis:'not out',                 r:71, b:31, sr:'229.03', notout:true},
          {n:'Dharshan', dis:'c Chirag b Srinath',      r:24, b:11, sr:'218.18'},
          {n:'Vikram',   dis:'not out',                 r:17, b:8,  sr:'212.50', notout:true},
        ], extras:12, bowlers:[
          {n:'Srinath',      o:'4', r:62, w:2, econ:'15.50'},
          {n:'Mohinuddin',   o:'4', r:56, w:1, econ:'14.00'},
          {n:'ShreyanshLSG', o:'4', r:54, w:1, econ:'13.50'},
          {n:'Krishna',      o:'4', r:58, w:1, econ:'14.50'},
          {n:'Srujan',       o:'2', r:49, w:0, econ:'24.50'},
          {n:'Thammu',       o:'2', r:55, w:0, econ:'27.50'},
        ]},
        { team:'LSG', total:'338/5', overs:'19.4', batters:[
          {n:'Chirag',     dis:'c Koushik b MohanGT',   r:93, b:39, sr:'238.46'},
          {n:'Sutej',      dis:'c Yogendra b Nanda',     r:72, b:32, sr:'225.00'},
          {n:'Dinesh',     dis:'c Shiva b Dharshan',     r:31, b:16, sr:'193.75'},
          {n:'Srinath',    dis:'c Devraj b MohanGT',     r:29, b:13, sr:'223.08'},
          {n:'Srujan',     dis:'not out',                r:54, b:21, sr:'257.14', notout:true},
          {n:'Mohinuddin', dis:'not out',                r:28, b:10, sr:'280.00', notout:true},
        ], extras:31, bowlers:[
          {n:'MohanGT',  o:'4', r:73, w:2, econ:'18.25'},
          {n:'Dharshan', o:'4', r:66, w:1, econ:'16.50'},
          {n:'Vikram',   o:'4', r:79, w:1, econ:'19.75'},
          {n:'Nanda',    o:'4', r:71, w:1, econ:'17.75'},
          {n:'Shiva',    o:'2', r:54, w:0, econ:'27.00'},
          {n:'Devraj',   o:'1.4',r:40,w:0, econ:'24.00'},
        ]},
      ]
    }
  },
  {
    id:15, t1:'RR', t2:'MI', venue:'LPL Arena',
    t1score:'327/6', t1ov:'19.5', t2score:'325/8', t2ov:'20',
    winner:'RR', margin:'4 wickets', potm:'Yuktha', potmDetail:'97* (40)',
    scorecard:{
      innings:[
        { team:'MI', total:'325/8', overs:'20', batters:[
          {n:'Shreyans', dis:'c Sangamithra b Yethi',   r:67, b:29, sr:'231.03'},
          {n:'Jayanth',  dis:'b Deesha',                r:24, b:14, sr:'171.43'},
          {n:'Eshaan',   dis:'c Diya b Cynthia',        r:38, b:20, sr:'190.00'},
          {n:'Adith',    dis:'c Yuktha b Yashmitha',    r:21, b:11, sr:'190.91'},
          {n:'Bhuvan',   dis:'c Deeksha b Yethi',       r:74, b:31, sr:'238.71'},
          {n:'Sachin',   dis:'c Harsitha b Diya',       r:29, b:13, sr:'223.08'},
          {n:'Vikas',    dis:'c Yethi b Deesha',        r:18, b:9,  sr:'200.00'},
          {n:'Devendra', dis:'not out',                 r:16, b:7,  sr:'228.57', notout:true},
          {n:'Lakshya',  dis:'not out',                 r:8,  b:4,  sr:'200.00', notout:true},
        ], extras:30, bowlers:[
          {n:'Yethi',     o:'4', r:59, w:2, econ:'14.75'},
          {n:'Deesha',    o:'4', r:63, w:2, econ:'15.75'},
          {n:'Diya',      o:'4', r:54, w:1, econ:'13.50'},
          {n:'Cynthia',   o:'4', r:51, w:1, econ:'12.75'},
          {n:'Yashmitha', o:'2', r:42, w:1, econ:'21.00'},
          {n:'Harsitha',  o:'2', r:56, w:0, econ:'28.00'},
        ]},
        { team:'RR', total:'327/6', overs:'19.5', batters:[
          {n:'Diya',        dis:'c Adith b Sachin',      r:63, b:30, sr:'210.00'},
          {n:'Deesha',      dis:'c Bhuvan b Shreyans',   r:52, b:24, sr:'216.67'},
          {n:'Deeksha',     dis:'b Jayanth',             r:21, b:12, sr:'175.00'},
          {n:'Cynthia',     dis:'c Eshaan b Lakshya',    r:26, b:13, sr:'200.00'},
          {n:'Yuktha',      dis:'not out',               r:97, b:40, sr:'242.50', notout:true},
          {n:'Yethi',       dis:'c Shreyans b Sachin',   r:31, b:13, sr:'238.46'},
          {n:'Sangamithra', dis:'not out',               r:18, b:7,  sr:'257.14', notout:true},
        ], extras:19, bowlers:[
          {n:'Shreyans', o:'4',   r:67, w:1, econ:'16.75'},
          {n:'Jayanth',  o:'4',   r:58, w:1, econ:'14.50'},
          {n:'Eshaan',   o:'4',   r:64, w:0, econ:'16.00'},
          {n:'Sachin',   o:'4',   r:62, w:2, econ:'15.50'},
          {n:'Lakshya',  o:'2',   r:42, w:1, econ:'21.00'},
          {n:'Vikas',    o:'1.5', r:34, w:0, econ:'18.55'},
        ]},
      ]
    }
  },
  {
    id:16, t1:'PBKS', t2:'SRH', venue:'LPL Arena',
    t1score:'344/5', t1ov:'19.4', t2score:'341/7', t2ov:'20',
    winner:'PBKS', margin:'5 wickets', potm:'Madhu', potmDetail:'79 (34)',
    scorecard:{
      innings:[
        { team:'SRH', total:'341/7', overs:'20', batters:[
          {n:'Harshavardhan',dis:'c PriyankaR b Lakshmi',  r:112,b:43, sr:'260.47'},
          {n:'Prem',         dis:'c Bindu b Priyanka',     r:58, b:26, sr:'223.08'},
          {n:'SaiTalwaar',   dis:'c Saanika b Brinda',     r:39, b:18, sr:'216.67'},
          {n:'PavanSRH',     dis:'b Lakshmi',              r:18, b:10, sr:'180.00'},
          {n:'Rishab',       dis:'not out',                r:71, b:29, sr:'244.83', notout:true},
          {n:'Dhanush',      dis:'not out',                r:21, b:8,  sr:'262.50', notout:true},
        ], extras:25, bowlers:[
          {n:'Lakshmi',   o:'4', r:58, w:2, econ:'14.50'},
          {n:'Priyanka',  o:'4', r:67, w:1, econ:'16.75'},
          {n:'Brinda',    o:'4', r:61, w:1, econ:'15.25'},
          {n:'Likitha',   o:'4', r:49, w:0, econ:'12.25'},
          {n:'Saanika',   o:'2', r:44, w:0, econ:'22.00'},
          {n:'Roshini',   o:'1.4',r:65,w:0, econ:'39.00'},
        ]},
        { team:'PBKS', total:'344/5', overs:'19.4', batters:[
          {n:'Bindu',     dis:'c Brudvith b Prem',         r:88, b:37, sr:'237.84'},
          {n:'Madhu',     dis:'c Rishab b Dhanush',        r:79, b:34, sr:'232.35'},
          {n:'Keerthana', dis:'c SaiTalwaar b Deva',       r:28, b:15, sr:'186.67'},
          {n:'Lakshmi',   dis:'b Dhanush',                 r:33, b:15, sr:'220.00'},
          {n:'Brinda',    dis:'c Prem b Harshavardhan',    r:24, b:11, sr:'218.18'},
          {n:'Saanika',   dis:'not out',                   r:47, b:19, sr:'247.37', notout:true},
          {n:'PriyankaR', dis:'run out',                   r:16, b:8,  sr:'200.00'},
          {n:'Priyanka',  dis:'not out',                   r:9,  b:4,  sr:'225.00', notout:true},
        ], extras:17, bowlers:[
          {n:'Prem',          o:'4', r:61, w:1, econ:'15.25'},
          {n:'Dhanush',       o:'4', r:67, w:2, econ:'16.75'},
          {n:'SaiTalwaar',    o:'4', r:58, w:0, econ:'14.50'},
          {n:'Harshavardhan', o:'4', r:56, w:1, econ:'14.00'},
          {n:'Deva',          o:'2', r:43, w:1, econ:'21.50'},
          {n:'Suvas',         o:'2', r:51, w:0, econ:'25.50'},
        ]},
      ]
    }
  },
  {
    id:17, t1:'RCB', t2:'CSK', venue:'LPL Arena',
    t1score:'367/2', t1ov:'16', t2score:'362/6', t2ov:'20',
    winner:'RCB', margin:'8 wickets (24 balls remaining)', potm:'Monish', potmDetail:'163 (41)',
    scorecard:{
      innings:[
        { team:'CSK', total:'362/6', overs:'20', batters:[
          {n:'Karthik',  dis:'b Enoch',               r:31,  b:14, sr:'221.43'},
          {n:'Pradeep',  dis:'c Bavith b Shivu',       r:18,  b:10, sr:'180.00'},
          {n:'Immanuel', dis:'c Shivu b Enoch',        r:8,   b:5,  sr:'160.00'},
          {n:'Joseph',   dis:'not out',                r:142, b:58, sr:'244.83', notout:true},
          {n:'Madhan',   dis:'c Enoch b Shivu',        r:67,  b:28, sr:'239.29'},
          {n:'Ganesh',   dis:'c Shakthi b Ashwin',     r:44,  b:18, sr:'244.44'},
          {n:'VikasCSK', dis:'c Naveen b Ashwin',      r:28,  b:13, sr:'215.38'},
          {n:'Sampath',  dis:'not out',                r:9,   b:5,  sr:'180.00', notout:true},
        ], extras:15, bowlers:[
          {n:'Bavith',  o:'3', r:63, w:0, econ:'21.00'},
          {n:'Naveen',  o:'2', r:34, w:0, econ:'17.00'},
          {n:'Enoch',   o:'3', r:55, w:2, econ:'18.33'},
          {n:'Shivu',   o:'3', r:42, w:2, econ:'14.00'},
          {n:'Shakthi', o:'3', r:74, w:0, econ:'24.67'},
          {n:'Mohan',   o:'1', r:21, w:0, econ:'21.00'},
          {n:'Ashwin',  o:'4', r:61, w:2, econ:'15.25'},
          {n:'Harsha',  o:'1', r:12, w:1, econ:'12.00'},
        ]},
        { team:'RCB', total:'367/2', overs:'16', batters:[
          {n:'Shakthi', dis:'c Joseph b Madhan',  r:54,  b:17, sr:'317.65'},
          {n:'Monish',  dis:'c Ganesh b Vikas',   r:163, b:41, sr:'397.56'},
          {n:'Enoch',   dis:'not out',            r:110, b:31, sr:'354.84', notout:true},
          {n:'Shivu',   dis:'not out',            r:22,  b:4,  sr:'550.00', notout:true},
        ], extras:18, bowlers:[
          {n:'Karthik',  o:'3', r:71, w:0, econ:'23.67'},
          {n:'Pradeep',  o:'3', r:55, w:0, econ:'18.33'},
          {n:'Anand',    o:'2', r:42, w:0, econ:'21.00'},
          {n:'Madhan',   o:'2', r:39, w:1, econ:'19.50'},
          {n:'Immanuel', o:'1', r:29, w:0, econ:'29.00'},
          {n:'Joseph',   o:'3', r:74, w:0, econ:'24.67'},
          {n:'VikasCSK', o:'2', r:57, w:1, econ:'28.50'},
        ]},
      ]
    }
  },
];

// ─── FIXTURES (upcoming matches) ─────────────────────────────────────────────
const FIXTURES = [
  // Remaining to be simulated — add more as season progresses
  {id:18, t1:'RCB', t2:'KKR', date:'Next match', venue:'LPL Arena'},
  {id:19, t1:'MI',  t2:'CSK', date:'TBD', venue:'LPL Arena'},
  {id:20, t1:'SRH', t2:'GT',  date:'TBD', venue:'LPL Arena'},
  {id:21, t1:'DC',  t2:'RR',  date:'TBD', venue:'LPL Arena'},
  {id:22, t1:'PBKS',t2:'LSG', date:'TBD', venue:'LPL Arena'},
  {id:23, t1:'KKR', t2:'CSK', date:'TBD', venue:'LPL Arena'},
  {id:24, t1:'RCB', t2:'DC',  date:'TBD', venue:'LPL Arena'},
  {id:25, t1:'MI',  t2:'SRH', date:'TBD', venue:'LPL Arena'},
  {id:26, t1:'GT',  t2:'RR',  date:'TBD', venue:'LPL Arena'},
  {id:27, t1:'PBKS',t2:'KKR', date:'TBD', venue:'LPL Arena'},
];

// ══════════════════════════════════════════════════════════════════════════════
// ─── LEAGUE → PLAYOFF TRANSITION ENGINE  ·  v1 ───────────────────────────────
// ══════════════════════════════════════════════════════════════════════════════

const LEAGUE_MATCHES_REQUIRED = 14; // each team must play exactly this many league matches
const PLAYOFF_STAGE_KEY      = 'lpl_tournament_stage';    // localStorage key
const PLAYOFF_FIXTURES_KEY   = 'lpl_playoff_fixtures';    // stored playoff fixtures
const PLAYOFF_RESULTS_KEY    = 'lpl_playoff_results';     // stored playoff results

// Stage constants
const STAGE = {
  LEAGUE:   'league',
  PLAYOFF:  'playoff',
  COMPLETED:'completed',
};

// In-memory playoff fixtures/results (loaded from localStorage on startup)
let PLAYOFF_FIXTURES = [];  // [{id, round, label, t1, t2, date, venue}]
let PLAYOFF_RESULTS  = [];  // [{id, round, label, t1, t2, winner, margin, potm, potmDetail, scorecard}]

/**
 * Get the current tournament stage from localStorage.
 * Returns STAGE.LEAGUE if not yet set.
 */
function getTournamentStage(){
  if(window.__LPL_API_STAGE__) return window.__LPL_API_STAGE__;
  try { return localStorage.getItem(PLAYOFF_STAGE_KEY) || STAGE.LEAGUE; } catch(e){ return STAGE.LEAGUE; }
}

function setTournamentStage(stage){
  window.__LPL_API_STAGE__ = stage;
  try { localStorage.setItem(PLAYOFF_STAGE_KEY, stage); } catch(e){}
  _syncLegacyStorageKey(PLAYOFF_STAGE_KEY, stage);
}

/**
 * Count how many LEAGUE matches each team has played.
 * Only counts matches NOT tagged as playoff round.
 */
function getLeagueMatchesPerTeam(){
  const count = {};
  for(const k of Object.keys(TEAM_META)) count[k] = 0;
  for(const m of RESULTS){
    if(m.winner === 'TBD') continue;       // incomplete
    if(m.playoffRound) continue;            // skip playoff matches
    if(count[m.t1] !== undefined) count[m.t1]++;
    if(count[m.t2] !== undefined) count[m.t2]++;
  }
  return count;
}

/**
 * Check if league stage is complete.
 * Every team must have played exactly LEAGUE_MATCHES_REQUIRED matches.
 */
function isLeagueStageComplete(){
  const counts = getLeagueMatchesPerTeam();
  const teams = Object.keys(TEAM_META);
  if(teams.length === 0) return false;
  return teams.every(k => counts[k] >= LEAGUE_MATCHES_REQUIRED);
}

/**
 * Get top-N teams by points (for playoff qualification).
 * Returns array of team keys, sorted by pts then NRR.
 */
function getQualifiedTeams(n){
  const pt = buildPointsLeagueOnly();
  const rows = Object.entries(pt)
    .map(([k,v]) => ({k, ...v, nrr: (v.of>0&&v.ob>0)?(v.rf/v.ob - v.rb/v.of):0}))
    .sort((a,b) => b.pts - a.pts || b.nrr - a.nrr);
  return rows.slice(0, n).map(r => r.k);
}

/**
 * buildPoints using only league matches (excludes playoffRound matches).
 */
function buildPointsLeagueOnly(){
  const pt={};
  for(const k of Object.keys(TEAM_META)) pt[k]={p:0,w:0,l:0,nr:0,pts:0,rf:0,rb:0,of:0,ob:0,form:[]};
  for(const m of RESULTS){
    if(m.winner==='TBD') continue;
    if(m.playoffRound) continue; // exclude playoff matches from league table
    const a=pt[m.t1],b=pt[m.t2];
    if(!a||!b) continue;
    const parseOv=s=>{const parts=String(s||'20').split('.');return parseInt(parts[0])+(parseInt(parts[1]||0)/6);};
    const t1ov=parseOv(m.t1ov||'20'),t2ov=parseOv(m.t2ov||'20');
    const parseScore=s=>{const m2=String(s).match(/(\d+)/);return m2?parseInt(m2[1]):0;};
    const t1r=parseScore(m.t1score),t2r=parseScore(m.t2score);
    a.p++;b.p++;
    if(m.winner===m.t1){a.w++;a.pts+=2;b.l++;}
    else{b.w++;b.pts+=2;a.l++;}
    if(t1ov>0){a.rf+=t1r;a.ob+=t1ov;}
    if(t2ov>0){b.rf+=t2r;b.ob+=t2ov;}
    const t2ov2=parseOv(m.t2ov||'20');
    a.rb+=t2r;a.of+=t2ov2;
    b.rb+=t1r;b.of+=t1ov;
    a.form.push(m.winner===m.t1?'W':'L');
    b.form.push(m.winner===m.t2?'W':'L');
  }
  return pt;
}

/**
 * Generate IPL-style playoff fixtures from the top-4 qualified teams.
 * 1st vs 2nd → Qualifier 1
 * 3rd vs 4th → Eliminator
 * (Loser Q1) vs (Winner El) → Qualifier 2  [TBD teams]
 * (Winner Q1) vs (Winner Q2) → Final        [TBD teams]
 */
function generatePlayoffFixtures(qualTeams){
  const [p1,p2,p3,p4] = qualTeams;
  const baseId = Math.max(...RESULTS.map(r=>r.id), ...FIXTURES.map(f=>f.id), 0) + 1;
  return [
    { id: baseId,   round:'Q1',  label:'QUALIFIER 1',  t1: p1, t2: p2, date:'TBD', venue:'LPL Arena', status:'upcoming' },
    { id: baseId+1, round:'EL',  label:'ELIMINATOR',   t1: p3, t2: p4, date:'TBD', venue:'LPL Arena', status:'upcoming' },
    { id: baseId+2, round:'Q2',  label:'QUALIFIER 2',  t1:'TBD', t2:'TBD', date:'TBD', venue:'LPL Arena', status:'upcoming',
      note:'Loser of Q1 vs Winner of Eliminator' },
    { id: baseId+3, round:'FIN', label:'FINAL',        t1:'TBD', t2:'TBD', date:'TBD', venue:'LPL Arena', status:'upcoming',
      note:'Winner of Q1 vs Winner of Q2' },
  ];
}

/**
 * Activate playoff stage:
 * - set stage to PLAYOFF in localStorage
 * - determine top-4 teams
 * - generate playoff fixtures
 * - save everything to localStorage
 * - prevent further league fixtures
 * Returns true if activation happened, false if already active.
 */
function activatePlayoffStage(){
  if(getTournamentStage() !== STAGE.LEAGUE) return false; // already activated

  const qualTeams = getQualifiedTeams(PLAYOFF_SPOTS);
  if(qualTeams.length < PLAYOFF_SPOTS) return false;

  const fixtures = generatePlayoffFixtures(qualTeams);
  PLAYOFF_FIXTURES.length = 0;
  fixtures.forEach(f => PLAYOFF_FIXTURES.push(f));

  setTournamentStage(STAGE.PLAYOFF);
  savePlayoffFixtures();

  // Lock out all remaining league fixtures (they are superseded).
  // Do NOT delete FIXTURES in case user wants to see them — just clear them
  const clearedFixtures = [...FIXTURES];
  FIXTURES.length = 0;
  saveFixturesToStorage();
  _deleteFixturesDirect(clearedFixtures).catch((error)=>console.warn('LPL fixture cleanup failed', error));

  return true;
}

function savePlayoffFixtures(){
  try{ localStorage.setItem(PLAYOFF_FIXTURES_KEY, JSON.stringify(PLAYOFF_FIXTURES)); } catch(e){}
  _syncLegacyStorageKey(PLAYOFF_FIXTURES_KEY, PLAYOFF_FIXTURES);
}

function savePlayoffResults(){
  try{ localStorage.setItem(PLAYOFF_RESULTS_KEY, JSON.stringify(PLAYOFF_RESULTS)); } catch(e){}
  _syncLegacyStorageKey(PLAYOFF_RESULTS_KEY, PLAYOFF_RESULTS);
}

(function loadPlayoffData(){
  try{
    const pf = localStorage.getItem(PLAYOFF_FIXTURES_KEY);
    if(pf){ const arr=JSON.parse(pf); arr.forEach(f=>PLAYOFF_FIXTURES.push(f)); }
  } catch(e){}
  try{
    const pr = localStorage.getItem(PLAYOFF_RESULTS_KEY);
    if(pr){ const arr=JSON.parse(pr); arr.forEach(r=>PLAYOFF_RESULTS.push(r)); }
  } catch(e){}
})();

/**
 * Called after every match save.
 * Detects if league stage just completed and auto-activates playoffs.
 */
function checkAndTransitionToPlayoffs(){
  if(getTournamentStage() !== STAGE.LEAGUE) return; // already in playoffs or complete
  if(!isLeagueStageComplete()) return;               // not all teams at 14 matches yet

  const activated = activatePlayoffStage();
  if(activated){
    // Re-render everything with new stage
    renderFixtures();
    renderPoints();
    renderPlayoffs();
    _renderPlayoffBanner();
    _renderAdminPlayoffGuard();

    // Show a one-time notification
    setTimeout(()=>{
      // Switch the Playoffs tab to be prominent
      const playoffsTabBtn = document.querySelector('.mtab[onclick*="playoffs"]');
      if(playoffsTabBtn) playoffsTabBtn.classList.add('mtab-playoffs-active');
      showMTab('playoffs', document.querySelector('.mtab[onclick*="playoffs"]'));
      alert('🏆 LEAGUE STAGE COMPLETE!\n\nAll teams have played ' + LEAGUE_MATCHES_REQUIRED + ' matches.\nPlayoffs have been unlocked!\n\nTop 4 teams advance to the Playoffs.');
    }, 200);
  }
}

/**
 * Render the playoff stage banner on the Matches page.
 */
function _renderPlayoffBanner(){
  const stage = getTournamentStage();
  const banner = document.getElementById('playoffStageBanner');
  if(!banner) return;

  if(stage === STAGE.PLAYOFF || stage === STAGE.COMPLETED){
    banner.style.display = 'block';
    const qualTeams = getQualifiedTeams(PLAYOFF_SPOTS);
    const teamNames = qualTeams.map(k=>(TEAM_META[k]||{}).name||k).join(', ');
    const subEl = document.getElementById('playoffStageSub');
    if(subEl) subEl.textContent = 'Qualified: ' + teamNames + ' · League stage frozen';
    // Make the banner gold for FINAL stage
    if(stage === STAGE.COMPLETED){
      banner.querySelector('.playoff-stage-title').textContent = 'Tournament Complete';
      banner.querySelector('.playoff-stage-badge').textContent = 'SEASON ENDED';
    }
  } else {
    banner.style.display = 'none';
  }
}

/**
 * Show admin guard if playoffs are active.
 */
function _renderAdminPlayoffGuard(){
  const guard = document.getElementById('adminPlayoffsGuard');
  if(!guard) return;
  const stage = getTournamentStage();
  if(stage === STAGE.PLAYOFF || stage === STAGE.COMPLETED){
    guard.classList.add('visible');
  } else {
    guard.classList.remove('visible');
  }
}

/**
 * Resolve playoff fixture TBDs based on results so far.
 * Q2 = Loser of Q1 vs Winner of Eliminator
 * Final = Winner of Q1 vs Winner of Q2
 */
function resolvePlayoffTBDs(){
  // Find Q1, EL, Q2, FIN fixtures
  const q1Fix = PLAYOFF_FIXTURES.find(f => f.round === 'Q1');
  const elFix = PLAYOFF_FIXTURES.find(f => f.round === 'EL');
  const q2Fix = PLAYOFF_FIXTURES.find(f => f.round === 'Q2');
  const finFix = PLAYOFF_FIXTURES.find(f => f.round === 'FIN');

  const q1Res = PLAYOFF_RESULTS.find(r => r.round === 'Q1');
  const elRes = PLAYOFF_RESULTS.find(r => r.round === 'EL');
  const q2Res = PLAYOFF_RESULTS.find(r => r.round === 'Q2');

  // Resolve Q2 teams
  if(q2Fix && q1Res && elRes){
    const q1Loser  = q1Res.winner === q1Res.t1 ? q1Res.t2 : q1Res.t1;
    const elWinner = elRes.winner;
    q2Fix.t1 = q1Loser;
    q2Fix.t2 = elWinner;
    savePlayoffFixtures();
  }

  // Resolve Final teams
  if(finFix && q1Res && q2Res){
    const q1Winner = q1Res.winner;
    const q2Winner = q2Res.winner;
    finFix.t1 = q1Winner;
    finFix.t2 = q2Winner;
    savePlayoffFixtures();
  }

  // Mark final as completed stage
  const finRes = PLAYOFF_RESULTS.find(r => r.round === 'FIN');
  if(finRes && getTournamentStage() === STAGE.PLAYOFF){
    setTournamentStage(STAGE.COMPLETED);
  }
}

// ──────────────────────────────────────────────────────────────────────────────
function saveTeamsToStorage(){
  try{ localStorage.setItem('lpl_teams', JSON.stringify(TEAMS)); } catch(e){}
  _syncLegacyStorageKey('lpl_teams', TEAMS);
}
(function loadTeamsFromStorage(){
  try{
    const saved = localStorage.getItem('lpl_teams');
    if(saved){
      const parsed = JSON.parse(saved);
      if(parsed && typeof parsed === 'object'){
        // Merge saved teams into TEAMS, preserving any hardcoded keys not overwritten
        for(const k of Object.keys(parsed)){
          TEAMS[k] = parsed[k];
        }
        // Remove keys that were deleted via admin
        for(const k of Object.keys(TEAMS)){
          if(!parsed[k]) delete TEAMS[k];
        }
        // Rebuild TEAM_META from loaded TEAMS
        for(const k of Object.keys(TEAMS)){
          const t = TEAMS[k];
          TEAM_META[k] = {name:t.name, pri:t.pri, sec:t.sec, women:t.women};
        }
        // Remove TEAM_META keys that no longer exist in TEAMS
        for(const k of Object.keys(TEAM_META)){
          if(!TEAMS[k]) delete TEAM_META[k];
        }
      }
    }
  } catch(e){}
})();

// ─── FIXTURES PERSISTENCE ─────────────────────────────────────────────────────
function saveFixturesToStorage(){
  try{ localStorage.setItem('lpl_fixtures', JSON.stringify(FIXTURES)); } catch(e){}
  // TODO(fixtures-crud): keep this cache only for legacy UI compatibility.
  // Fixture create/edit/delete now persist through direct /api/matches calls.
}

function _fixtureApiId(fixture){
  const id = fixture?.id ?? fixture?.match_number ?? fixture?.matchNumber;
  const text = String(id || '');
  return text.startsWith('fixture_') ? text : `fixture_${text}`;
}

function _fixtureApiPayload(fixture){
  return {
    id: _fixtureApiId(fixture),
    match_number: Number(fixture.id || fixture.match_number || fixture.matchNumber) || null,
    stage: fixture.stage || 'league',
    team1_id: fixture.t1,
    team2_id: fixture.t2,
    venue: fixture.venue || 'LPL Arena',
    match_date_label: fixture.date || 'TBD',
    status: 'scheduled',
    raw: fixture
  };
}

function _showFixtureApiError(error){
  const message = error?.message || 'Fixture change could not be saved to the database.';
  const warn = document.getElementById('fixtureWarning');
  if(warn){
    warn.textContent = message;
    warn.style.display = 'block';
    warn.style.color = 'var(--red)';
    warn.style.background = 'rgba(230,57,70,.08)';
    warn.style.borderColor = 'rgba(230,57,70,.3)';
  } else {
    alert(message);
  }
}

async function _reloadMatchesFromApi(){
  if(!window.LPLApi || typeof window.LPLApi.listMatches !== 'function'){
    throw new Error('LPL API client is unavailable. Fixture changes were not reloaded.');
  }
  const response = await window.LPLApi.listMatches();
  _applyApiMatches(_unwrapApiList(response));
  saveFixturesToStorage();
}

async function _createFixtureDirect(fixture){
  if(!window.LPLApi || typeof window.LPLApi.createMatch !== 'function'){
    throw new Error('LPL API client is unavailable. Fixture was not created.');
  }
  return window.LPLApi.createMatch(_fixtureApiPayload(fixture));
}

async function _updateFixtureDirect(fixture){
  if(!window.LPLApi || typeof window.LPLApi.updateMatch !== 'function'){
    throw new Error('LPL API client is unavailable. Fixture was not updated.');
  }
  const id = _fixtureApiId(fixture);
  try {
    return await window.LPLApi.updateMatch(id, _fixtureApiPayload(fixture));
  } catch(error){
    if(String(error?.message || '').toLowerCase().includes('not found')){
      return _createFixtureDirect(fixture);
    }
    throw error;
  }
}

async function _deleteFixtureDirect(fixture){
  if(!window.LPLApi || typeof window.LPLApi.deleteMatch !== 'function'){
    throw new Error('LPL API client is unavailable. Fixture was not deleted.');
  }
  try {
    await window.LPLApi.deleteMatch(_fixtureApiId(fixture));
  } catch(error){
    if(!String(error?.message || '').toLowerCase().includes('not found')) throw error;
  }
}

async function _deleteFixturesDirect(fixtures){
  for(const fixture of fixtures){
    await _deleteFixtureDirect(fixture);
  }
}
(function loadFixturesFromStorage(){
  try{
    const saved = localStorage.getItem('lpl_fixtures');
    if(saved){
      const parsed = JSON.parse(saved);
      if(Array.isArray(parsed) && parsed.length >= 0){
        FIXTURES.length = 0;
        parsed.forEach(f => FIXTURES.push(f));
      }
    }
  } catch(e){}
})();

// ─── LOAD CUSTOM MATCHES FROM localStorage ────────────────────────────────────
(function loadCustomMatches(){
  try {
    const saved = JSON.parse(localStorage.getItem('lpl_custom_matches')||'[]');
    for(const m of saved) RESULTS.push(m);
    // Also remove from FIXTURES if now completed
    const doneIds = new Set(RESULTS.map(r=>r.id));
    for(let i=FIXTURES.length-1;i>=0;i--){
      if(doneIds.has(FIXTURES[i].id)) FIXTURES.splice(i,1);
    }
  } catch(e){}
})();

// ─── ONE-TIME PLAYER RENAME MIGRATION ────────────────────────────────────────
// Merges stats stored under old player names into their new canonical names.
// Each entry: [oldName, newName, teamKey]
// Once applied, a migration-done flag is set so it never runs again.
(function migratePlayerRenames(){
  const MIGRATION_KEY = 'lpl_player_rename_migration_v2';
  if(localStorage.getItem(MIGRATION_KEY)) return; // already done

  const renames = [
    // LSG
    ['ShreyanshLSG', 'ShreyanshP', 'LSG'],
    // MI
    ['ShreyanshMI',  'ShreyanshS', 'MI'],
    ['Vikas',        'VikasD',     'MI'],
    // CSK
    ['VikasCSK',     'Vikas',      'CSK'],
    // GT — MohanGT → Mohan → MohanR (apply both steps so historical data collapses to MohanR)
    ['MohanGT',      'MohanR',     'GT'],
    ['Mohan',        'MohanR',     'GT'],
    // GT
    ['PavanGT',      'Pavan',      'GT'],
    // SRH
    ['PavanSRH',     'PavanP',     'SRH'],
  ];

  for(const [oldName, newName, teamKey] of renames){
    if(oldName === newName) continue;

    // 1. Rename in RESULTS (in-memory, covers hardcoded + already-merged custom matches)
    for(const m of RESULTS){
      if(m.potm === oldName) m.potm = newName;
      if(!m.scorecard) continue;
      for(const inn of m.scorecard.innings){
        for(const b of (inn.batters||[])){
          if(b.n === oldName && inn.team === teamKey) b.n = newName;
          if(b.dis && b.dis.includes(oldName)) b.dis = b.dis.split(oldName).join(newName);
        }
        const bowlTeam = (inn.team === m.t1) ? m.t2 : m.t1;
        if(bowlTeam === teamKey){
          for(const bw of (inn.bowlers||[])) if(bw.n === oldName) bw.n = newName;
        }
        for(const ball of (inn.balls||[])){
          if(ball.striker === oldName) ball.striker = newName;
          if(ball.nonStriker === oldName) ball.nonStriker = newName;
          if(ball.bowler === oldName) ball.bowler = newName;
          if(ball.fielder === oldName) ball.fielder = newName;
        }
      }
    }

    // 2. Rename in lpl_custom_matches in localStorage
    try{
      const stored = JSON.parse(localStorage.getItem('lpl_custom_matches')||'[]');
      let changed = false;
      for(const m of stored){
        if(m.potm === oldName){ m.potm = newName; changed = true; }
        if(!m.scorecard) continue;
        for(const inn of m.scorecard.innings){
          for(const b of (inn.batters||[])){
            if(b.n === oldName && inn.team === teamKey){ b.n = newName; changed = true; }
            if(b.dis && b.dis.includes(oldName)){ b.dis = b.dis.split(oldName).join(newName); changed = true; }
          }
          const bowlTeam = (inn.team === m.t1) ? m.t2 : m.t1;
          if(bowlTeam === teamKey){
            for(const bw of (inn.bowlers||[])) if(bw.n === oldName){ bw.n = newName; changed = true; }
          }
          for(const ball of (inn.balls||[])){
            if(ball.striker === oldName){ ball.striker = newName; changed = true; }
            if(ball.nonStriker === oldName){ ball.nonStriker = newName; changed = true; }
            if(ball.bowler === oldName){ ball.bowler = newName; changed = true; }
            if(ball.fielder === oldName){ ball.fielder = newName; changed = true; }
          }
        }
      }
      if(changed) localStorage.setItem('lpl_custom_matches', JSON.stringify(stored));
    } catch(e){}

    // 3. Rename in TEAMS roster (player.n)
    if(TEAMS[teamKey]){
      for(const p of TEAMS[teamKey].players){
        if(p.n === oldName) p.n = newName;
      }
    }
  }

  // Clear generated stat caches so they rebuild with normalized names on next render.
  // Raw match data (RESULTS, fixtures, schedules, innings) is NOT touched.
  clearStatCaches();

  // Save updated teams and mark migration done
  try{ localStorage.setItem('lpl_teams', JSON.stringify(TEAMS)); } catch(e){}
  try{ localStorage.setItem(MIGRATION_KEY, '1'); } catch(e){}
})();

// ─── POINTS TABLE (auto-calculated from RESULTS) ─────────────────────────────
// ══════════════════════════════════════════════════════════════════════════════
// PLAYOFF STATUS ENGINE  ·  v1 · mathematically-safe · no false badges
// ══════════════════════════════════════════════════════════════════════════════

const PLAYOFF_SPOTS = 4;   // configurable — number of teams that advance

/**
 * computePlayoffStatus(pt, rows)
 *
 * IPL-style mathematical qualification/elimination system.
 *
 * pt   — output of buildPointsLeagueOnly() — { teamKey: {pts, p, w, l, nr, ...} }
 * rows — sorted array [{k, pts, p, ...}] (descending by pts/NRR)
 *
 * Returns a map: { teamKey → 'QUALIFIED' | 'ELIMINATED' | 'NONE' }
 *
 * TIMING GATE:
 *   No badge is shown until EVERY team has played at least MIN_MATCHES_FOR_BADGE matches.
 *   This prevents premature badges in the first half of the tournament.
 *   MIN_MATCHES_FOR_BADGE = LEAGUE_MATCHES_REQUIRED - 2  (badges appear in final 2 rounds)
 *
 * QUALIFIED (mathematically confirmed):
 *   A team T currently in the top-PLAYOFF_SPOTS is QUALIFIED when:
 *     T's current points STRICTLY EXCEED the maximum possible points of every
 *     team currently outside the top-PLAYOFF_SPOTS.
 *     → minPts(T) > maxPts(rival) for ALL rivals outside top-4
 *     where minPts(T) = current pts (worst case: lose all remaining)
 *           maxPts(rival) = rival.pts + rival.remainingMatches × 2
 *   Ties are NOT confirmed (strict inequality required).
 *
 * ELIMINATED (mathematically confirmed out):
 *   A team T is ELIMINATED when:
 *     Even if T wins ALL remaining matches (best case), at least PLAYOFF_SPOTS
 *     other teams are GUARANTEED to finish above T (i.e. their worst-case pts
 *     still STRICTLY EXCEED T's best-case pts).
 *     → count of teams where minPts(other) > maxPts(T) ≥ PLAYOFF_SPOTS
 *   Ties are NOT confirmed eliminations (strict inequality required).
 *
 * PERSISTENCE: once confirmed, status is locked in localStorage.
 */
// Version stamp — bump this whenever the badge logic changes to auto-bust stale cache
const PLAYOFF_STATUS_VERSION = 'v3';
const PLAYOFF_STATUS_KEY     = 'lpl_playoff_status_' + PLAYOFF_STATUS_VERSION;

function computePlayoffStatus(pt, rows){
  // ── load persisted statuses (version-keyed — old versions auto-ignored) ──
  let persisted = {};
  try { persisted = JSON.parse(localStorage.getItem(PLAYOFF_STATUS_KEY) || '{}'); } catch(e){}

  const n = rows.length;
  if(n === 0) return persisted;

  // Build a quick rank lookup: teamKey → current rank index (0-based)
  const rankOf = {};
  rows.forEach((r, i) => { rankOf[r.k] = i; });

  // ── SANITY CLEAN: strip any persisted badge that is now impossible ──
  // A team ranked inside top-4 CANNOT be ELIMINATED (they're currently in).
  // A team ranked outside top-4 CANNOT be QUALIFIED (they're currently out).
  // This prevents stale or corrupt cache entries from showing wrong badges.
  // Exception: we trust the data fully once the league is complete (no fixtures left).
  const leagueComplete = FIXTURES.length === 0;
  if(!leagueComplete){
    for(const [k, status] of Object.entries(persisted)){
      const rank = rankOf[k];
      if(rank === undefined) continue; // team not in table — drop it
      if(status === 'ELIMINATED' && rank < PLAYOFF_SPOTS){
        delete persisted[k]; // top-4 team marked eliminated — invalid, clear it
      }
      if(status === 'QUALIFIED' && rank >= PLAYOFF_SPOTS){
        delete persisted[k]; // outside-top-4 team marked qualified — invalid, clear it
      }
    }
    // Re-save the cleaned cache
    try { localStorage.setItem(PLAYOFF_STATUS_KEY, JSON.stringify(persisted)); } catch(e){}
  }

  // ── compute remaining league matches per team from unplayed fixtures ──
  const remMap = {};
  for(const k of rows.map(r => r.k)) remMap[k] = 0;
  for(const f of FIXTURES){
    if(remMap[f.t1] !== undefined) remMap[f.t1]++;
    if(remMap[f.t2] !== undefined) remMap[f.t2]++;
  }

  // ── TIMING GATE ──
  // Only start showing badges when every team has played at least
  // (LEAGUE_MATCHES_REQUIRED - 2) matches — i.e. in the final 2 rounds.
  // This mimics IPL where Q/E badges appear only late in the tournament.
  const MIN_MATCHES_FOR_BADGE = Math.max(1, LEAGUE_MATCHES_REQUIRED - 2);
  const allTeams = rows.map(r => r.k);
  const minPlayed = allTeams.length
    ? Math.min(...allTeams.map(k => pt[k]?.p || 0))
    : 0;

  if(minPlayed < MIN_MATCHES_FOR_BADGE){
    return persisted; // too early — don't add new badges yet
  }

  const result = { ...persisted }; // start from sanitised persisted, only ADD confirmations

  const maxPts = k => (pt[k]?.pts || 0) + (remMap[k] || 0) * 2; // best case
  const minPts = k => (pt[k]?.pts || 0);                          // worst case

  // ── QUALIFICATION CHECK ──
  // Only teams currently inside top-PLAYOFF_SPOTS can earn QUALIFIED.
  // Confirmed when their worst-case pts STRICTLY EXCEED every outside rival's best-case.
  for(let i = 0; i < Math.min(PLAYOFF_SPOTS, n); i++){
    const team = rows[i].k;
    if(result[team] === 'QUALIFIED') continue; // already locked

    const myFloor = minPts(team);
    let qualified = true;
    for(let j = PLAYOFF_SPOTS; j < n; j++){
      if(maxPts(rows[j].k) >= myFloor){ qualified = false; break; }
    }
    if(qualified) result[team] = 'QUALIFIED';
  }

  // ── ELIMINATION CHECK ──
  // Only teams currently outside top-PLAYOFF_SPOTS can earn ELIMINATED.
  // Confirmed when at least PLAYOFF_SPOTS teams each have worst-case pts
  // STRICTLY GREATER than this team's best-case pts.
  for(let i = PLAYOFF_SPOTS; i < n; i++){
    const team = rows[i].k;
    if(result[team] === 'ELIMINATED') continue; // already locked

    const myCeiling = maxPts(team);
    let guaranteedAbove = 0;
    for(let j = 0; j < n; j++){
      if(j === i) continue;
      if(minPts(rows[j].k) > myCeiling) guaranteedAbove++;
    }
    if(guaranteedAbove >= PLAYOFF_SPOTS) result[team] = 'ELIMINATED';
  }

  // ── persist confirmed statuses ──
  try { localStorage.setItem(PLAYOFF_STATUS_KEY, JSON.stringify(result)); } catch(e){}

  return result;
}

/** Reset playoff status cache — call when season data is reset */
function resetPlayoffStatus(){
  try { localStorage.removeItem(PLAYOFF_STATUS_KEY); } catch(e){}
  // Also clean up any old version keys left behind
  try { localStorage.removeItem('lpl_playoff_status'); } catch(e){}
  try { localStorage.removeItem('lpl_playoff_status_v1'); } catch(e){}
  try { localStorage.removeItem('lpl_playoff_status_v2'); } catch(e){}
}

// ── Badge HTML helper ──
function playoffBadgeHtml(status){
  if(status === 'QUALIFIED'){
    return `<span class="qs-badge qs-q" title="Qualified for Playoffs">✓ Q</span>`;
  }
  if(status === 'ELIMINATED'){
    return `<span class="qs-badge qs-e" title="Eliminated from Playoff Race">✕ E</span>`;
  }
  return '';
}

function buildPoints(){
  const pt={};
  for(const k of Object.keys(TEAM_META)) pt[k]={p:0,w:0,l:0,nr:0,pts:0,rf:0,rb:0,of:0,ob:0,form:[]};
  for(const m of RESULTS){
    if(m.winner==='TBD') continue;
    const a=pt[m.t1],b=pt[m.t2];
    if(!a||!b) continue;
    // Overs played
    const parseOv=s=>{const parts=String(s||'20').split('.');return parseInt(parts[0])+(parseInt(parts[1]||0)/6);};
    const t1ov=parseOv(m.t1ov||'20'),t2ov=parseOv(m.t2ov||'20');
    const parseScore=s=>{const m2=String(s).match(/(\d+)/);return m2?parseInt(m2[1]):0;};
    const t1r=parseScore(m.t1score),t2r=parseScore(m.t2score);
    a.p++;b.p++;
    if(m.winner===m.t1){a.w++;a.pts+=2;b.l++;}
    else{b.w++;b.pts+=2;a.l++;}
    if(t1ov>0){a.rf+=t1r;a.ob+=t1ov;}
    if(t2ov>0){b.rf+=t2r;b.ob+=t2ov;}
    const t2ov2=parseOv(m.t2ov||'20');
    a.rb+=t2r;a.of+=t2ov2;
    b.rb+=t1r;b.of+=t1ov;
    a.form.push(m.winner===m.t1?'W':'L');
    b.form.push(m.winner===m.t2?'W':'L');
  }
  return pt;
}

// ─── RENDERS ──────────────────────────────────────────────────────────────────
function showMTab(id, btn){
  document.querySelectorAll('.msection').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.mtab').forEach(b=>b.classList.remove('active'));
  document.getElementById('ms-'+id).classList.add('active');
  btn.classList.add('active');
  if(id==='fixtures') renderFixtures();
  else if(id==='results') renderResults();
  else if(id==='points') renderPoints();
  else if(id==='playoffs') renderPlayoffs();
}

function teamAv(k){
  const t=TEAM_META[k];
  return `<div class="team-av" style="background:${t.pri}33;border:2px solid ${t.pri};color:${t.sec};width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',cursive;font-size:13px;flex-shrink:0;">${k.slice(0,2)}</div>`;
}

function renderFixtures(){
  const el=document.getElementById('ms-fixtures');
  const stage = getTournamentStage();

  // ── PLAYOFF STAGE: show playoff fixtures ──────────────────────────────────
  if(stage === STAGE.PLAYOFF || stage === STAGE.COMPLETED){
    resolvePlayoffTBDs(); // update TBD teams based on playoff results so far

    // Helper: render a single playoff fixture card
    function _poCard(pf){
      const hasResult = PLAYOFF_RESULTS.find(r => r.round === pf.round);
      const isTBD = pf.t1 === 'TBD' || pf.t2 === 'TBD';
      const isFinal = pf.round === 'FIN';

      let teamsHtml = '';
      if(isTBD){
        teamsHtml = `<div class="po-teams-row">
          <div style="color:var(--silver);font-size:12px;font-style:italic">${pf.note||'Teams TBD'}</div>
        </div>`;
      } else {
        const t1 = TEAM_META[pf.t1]||{name:pf.t1,pri:'#444',sec:'#fff'};
        const t2 = TEAM_META[pf.t2]||{name:pf.t2,pri:'#444',sec:'#fff'};
        const winnerKey = hasResult?.winner;
        teamsHtml = `<div class="po-teams-row">
          <div class="po-team-info" style="opacity:${winnerKey&&winnerKey!==pf.t1?0.55:1}">
            <div class="po-team-av" style="background:${t1.pri}33;border:2px solid ${t1.pri};color:${t1.sec}">${pf.t1.slice(0,2)}</div>
            <div>
              <div class="po-team-name">${t1.name}</div>
              ${hasResult&&hasResult.winner===pf.t1?`<div class="po-winner-label">✓ WON · ${hasResult.margin}</div>`:''}
            </div>
          </div>
          <div class="po-vs-col">VS</div>
          <div class="po-team-info" style="flex-direction:row-reverse;text-align:right;opacity:${winnerKey&&winnerKey!==pf.t2?0.55:1}">
            <div class="po-team-av" style="background:${t2.pri}33;border:2px solid ${t2.pri};color:${t2.sec}">${pf.t2.slice(0,2)}</div>
            <div>
              <div class="po-team-name">${t2.name}</div>
              ${hasResult&&hasResult.winner===pf.t2?`<div class="po-winner-label">✓ WON · ${hasResult.margin}</div>`:''}
            </div>
          </div>
        </div>`;
      }

      const statusClass = hasResult ? 'po-status-completed' : 'po-status-upcoming';
      const statusText  = hasResult ? (isFinal?'CHAMPION CROWNED':'COMPLETED') : 'UPCOMING';
      const cardClass   = hasResult ? 'po-match-card po-completed' : 'po-match-card';

      return `<div style="margin-bottom:24px;">
        <div class="po-round-label">${pf.label}</div>
        <div class="${cardClass}${isFinal?' po-live':''}">
          <div class="po-match-header">
            <span class="po-match-label">${pf.label} · ${pf.venue}</span>
            <span class="po-status-pill ${statusClass}">${statusText}</span>
          </div>
          ${teamsHtml}
          ${hasResult&&hasResult.potm?`<div class="po-match-footer">🏅 POTM: ${hasResult.potm} — ${hasResult.potmDetail||''}</div>`:''}
          ${!isTBD&&!hasResult?`<div class="po-match-footer">${pf.date==='TBD'?'Date · TBD':pf.date}</div>`:''}
        </div>
      </div>`;
    }

    const qual = getQualifiedTeams(PLAYOFF_SPOTS);
    const qualNames = qual.map(k=>(TEAM_META[k]||{}).name||k);

    el.innerHTML = `
    <div class="league-complete-card">
      <div class="league-complete-title">✓ League Stage Complete</div>
      <div style="font-size:12px;color:var(--silver);margin-bottom:14px;letter-spacing:.5px;">
        All ${Object.keys(TEAM_META).length} teams have completed ${LEAGUE_MATCHES_REQUIRED} league matches. Playoffs underway.
      </div>
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;font-weight:800;letter-spacing:2px;color:var(--gold);text-transform:uppercase;margin-bottom:8px;">Qualified Teams</div>
      ${qual.map((k,i)=>{
        const t=TEAM_META[k]||{pri:'#444',sec:'#fff',name:k};
        return`<div class="qualified-team-row">
          <span style="font-family:'Bebas Neue',cursive;font-size:20px;color:var(--gold);width:24px">${i+1}</span>
          <div style="width:30px;height:30px;border-radius:50%;background:${t.pri}33;border:2px solid ${t.pri};color:${t.sec};display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',cursive;font-size:12px">${k.slice(0,2)}</div>
          <span style="font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:15px">${t.name}</span>
          <span style="margin-left:auto;font-size:10px;color:var(--silver);letter-spacing:1px">${i===0?'1st Seed':i===1?'2nd Seed':i===2?'3rd Seed':'4th Seed'}</span>
        </div>`;
      }).join('')}
    </div>

    <div style="font-family:'Bebas Neue',cursive;font-size:22px;letter-spacing:2px;color:var(--gold);margin-bottom:18px;">
      Playoff Fixtures
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:0;">
      ${PLAYOFF_FIXTURES.map(pf => _poCard(pf)).join('')}
    </div>`;
    return;
  }

  // ── LEAGUE STAGE: show remaining league fixtures ───────────────────────────
  if(!FIXTURES.length){
    el.innerHTML = `<div style="padding:40px 0;text-align:center;color:var(--silver);">
      <div style="font-family:'Bebas Neue',cursive;font-size:28px;margin-bottom:8px;">No Upcoming Fixtures</div>
      <div style="font-size:13px;">All league matches have been completed or no fixtures scheduled yet.</div>
    </div>`;
    return;
  }

  el.innerHTML=`
  <div class="timeline">
    ${FIXTURES.map(m=>{
      const t1=TEAM_META[m.t1]||{name:m.t1,pri:'#444',sec:'#fff'};
      const t2=TEAM_META[m.t2]||{name:m.t2,pri:'#444',sec:'#fff'};
      return`<div class="match-block">
        <div class="match-badge">MATCH ${m.id}</div>
        <div class="match-card">
          <div class="match-card-inner">
            <div class="match-date-col">
              <div class="match-date-day">${m.date}</div>
              <div class="match-date-sub">7:30 PM IST</div>
              <div class="match-date-sub" style="margin-top:4px">${m.venue}</div>
            </div>
            <div>
              <div class="teams-row">
                <div class="team-chip">${teamAv(m.t1)}<div><div class="team-nm">${t1.name}</div></div></div>
                <div class="vs-pill">VS</div>
                <div class="team-chip">${teamAv(m.t2)}<div><div class="team-nm">${t2.name}</div></div></div>
              </div>
            </div>
            <div class="match-actions">
              <span class="btn-upcoming">Upcoming</span>
            </div>
          </div>
        </div>
      </div>`;
    }).join('')}
  </div>`;
}

function renderResults(){
  const el=document.getElementById('ms-results');
  const done=[...RESULTS].reverse().filter(m=>m.winner!=='TBD');
  el.innerHTML=`
  <div class="timeline">
    ${done.map(m=>{
      const t1=TEAM_META[m.t1],t2=TEAM_META[m.t2];
      const w1=m.winner===m.t1,w2=m.winner===m.t2;
      return`<div class="match-block">
        <div class="match-badge">MATCH ${m.id}</div>
        <div class="match-card">
          <div class="match-card-inner">
            <div class="match-date-col">
              <div class="match-date-day" style="font-size:14px;color:${w1?t1.sec:w2?t2.sec:'var(--silver)'}">
                ${m.winner==='TBD'?'In Progress':TEAM_META[m.winner].name+' won'}
              </div>
              <div class="match-date-sub" style="margin-top:4px">by ${m.margin}</div>
              <div class="match-date-sub" style="margin-top:4px">${m.venue}</div>
            </div>
            <div>
              <div class="teams-row">
                <div class="team-chip" style="opacity:${w2?0.6:1}">
                  ${teamAv(m.t1)}
                  <div>
                    <div class="team-nm">${t1.name}</div>
                    <div class="team-sc">${m.t1score} <span style="font-size:11px;color:var(--silver)">(${m.t1ov})</span></div>
                  </div>
                </div>
                <div class="vs-pill">VS</div>
                <div class="team-chip" style="opacity:${w1?0.6:1}">
                  ${teamAv(m.t2)}
                  <div>
                    <div class="team-nm">${t2.name}</div>
                    <div class="team-sc">${m.t2score} <span style="font-size:11px;color:var(--silver)">(${m.t2ov})</span></div>
                  </div>
                </div>
              </div>
              <div style="margin-top:8px;font-size:11px;color:var(--gold)">POTM: ${m.potm} — ${m.potmDetail}</div>
            </div>
            <div class="match-actions">
              <button class="btn-scorecard" onclick="openSc(${m.id})">Scorecard</button>
            </div>
          </div>
        </div>
      </div>`;
    }).join('')}
  </div>`;
}

function renderPoints(){
  const stage = getTournamentStage();
  const isPlayoffStage = (stage === STAGE.PLAYOFF || stage === STAGE.COMPLETED);

  // Always use league-only points (excludes playoff matches from table)
  const pt = buildPointsLeagueOnly();
  const rows = Object.entries(pt)
    .map(([k,v])=>({k,...v,nrr:(v.of>0&&v.ob>0)?(v.rf/v.ob-v.rb/v.of).toFixed(3):'+0.000'}))
    .sort((a,b)=>b.pts-a.pts||(parseFloat(b.nrr)-parseFloat(a.nrr)));

  // When league is complete, all top-4 show as QUALIFIED, rest ELIMINATED
  let playoffStatus;
  if(isPlayoffStage){
    // Freeze: top-4 = QUALIFIED, rest = ELIMINATED
    playoffStatus = {};
    rows.forEach((r,i) => {
      playoffStatus[r.k] = i < PLAYOFF_SPOTS ? 'QUALIFIED' : 'ELIMINATED';
    });
  } else {
    playoffStatus = computePlayoffStatus(pt, rows);
  }

  const anyBadge = rows.some(r => playoffStatus[r.k] && playoffStatus[r.k] !== 'NONE');

  const frozenNotice = isPlayoffStage ? `
  <div class="league-frozen-notice">
    🔒 League Stage Frozen — Final standings after ${LEAGUE_MATCHES_REQUIRED} matches per team
  </div>` : '';

  document.getElementById('ms-points').innerHTML=`
  ${frozenNotice}
  <table class="pts-table${isPlayoffStage?' pts-table-frozen':''}">
    <thead><tr>
      <th>POS</th><th style="text-align:left">TEAM</th>
      <th>P</th><th>W</th><th>L</th><th>NR</th>
      <th>NRR</th><th>PTS</th><th>FORM</th>
    </tr></thead>
    <tbody>
    ${rows.map((r,i)=>{
      const t=TEAM_META[r.k];
      const qualify=i<PLAYOFF_SPOTS, form=r.form.slice(-5);
      const status=playoffStatus[r.k]||'NONE';
      const badge=playoffBadgeHtml(status);
      // Row border: green only when CONFIRMED qualified, red only when CONFIRMED eliminated.
      // During league stage with no badge yet, show a subtle gold line for top-4 separator only.
      let rowClass = '';
      if(status === 'QUALIFIED') rowClass = 'qualify';
      else if(status === 'ELIMINATED') rowClass = 'elim';
      else if(i < PLAYOFF_SPOTS && !isPlayoffStage) rowClass = 'top4-zone';
      return`<tr class="${rowClass}">
        <td><span class="pos-badge" style="color:${status==='QUALIFIED'?'var(--green)':status==='ELIMINATED'?'var(--red)':i<PLAYOFF_SPOTS?'var(--gold)':'var(--silver)'}">${i+1}</span></td>
        <td>
          <div class="team-pts-cell">
            <div class="team-pts-av" style="background:${t.pri}33;border:2px solid ${t.pri};color:${t.sec}">${r.k.slice(0,2)}</div>
            <div>
              <div style="font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:15px;display:flex;align-items:center;flex-wrap:wrap;gap:0">${t.name}${badge}</div>
              <div style="font-size:10px;color:var(--silver);letter-spacing:1px">${r.k}</div>
            </div>
          </div>
        </td>
        <td>${r.p}</td><td style="color:#00e676">${r.w}</td><td style="color:#e63946">${r.l}</td><td>${r.nr}</td>
        <td class="${parseFloat(r.nrr)>=0?'nrr-pos':'nrr-neg'}">${r.nrr}</td>
        <td style="font-family:'Bebas Neue',cursive;font-size:22px;color:${status==='QUALIFIED'?'var(--green)':status==='ELIMINATED'?'var(--silver)':i<PLAYOFF_SPOTS?'var(--gold)':'var(--white)'}">${r.pts}</td>
        <td>${form.map(f=>`<span class="form-dot ${f==='W'?'fd-w':'fd-l'}">${f}</span>`).join('')}</td>
      </tr>`;
    }).join('')}
    </tbody>
  </table>
  <div style="margin-top:14px;font-size:11px;color:var(--silver);display:flex;gap:16px;align-items:center;flex-wrap:wrap">
    <span><span style="display:inline-block;width:10px;height:10px;border-left:3px solid rgba(245,197,24,.5);margin-right:4px"></span>Top ${PLAYOFF_SPOTS} qualify for playoffs</span>
    <span>NRR = Net Run Rate</span>
    ${anyBadge?`
    <span style="margin-left:4px;display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
      <span class="qs-badge qs-q" style="cursor:default">✓ Q</span><span>Qualified for Playoffs</span>
      <span class="qs-badge qs-e" style="cursor:default;margin-left:6px">✕ E</span><span>Eliminated</span>
    </span>`:''}
  </div>`;
}

function renderPlayoffs(){
  const stage = getTournamentStage();
  const el = document.getElementById('ms-playoffs');

  // ── LEAGUE STAGE: show projected bracket ────────────────────────────────
  if(stage === STAGE.LEAGUE){
    const pt = buildPointsLeagueOnly();
    const rows = Object.entries(pt)
      .map(([k,v])=>({k,...v,nrr:(v.of>0&&v.ob>0)?(v.rf/v.ob-v.rb/v.of):0}))
      .sort((a,b)=>b.pts-a.pts||b.nrr-a.nrr)
      .slice(0,4);
    const [q1a,q1b,elA,elB]=[rows[0]?.k||'TBD',rows[1]?.k||'TBD',rows[2]?.k||'TBD',rows[3]?.k||'TBD'];

    const counts = getLeagueMatchesPerTeam();
    const allTeams = Object.keys(TEAM_META);
    const minPlayed = allTeams.length ? Math.min(...allTeams.map(k=>counts[k]||0)) : 0;
    const remaining = allTeams.length * LEAGUE_MATCHES_REQUIRED - allTeams.reduce((s,k)=>s+(counts[k]||0),0);

    el.innerHTML=`
    <div style="margin-bottom:20px">
      <div style="font-family:'Bebas Neue',cursive;font-size:28px;color:var(--gold)">Playoffs Bracket</div>
      <div style="font-size:12px;color:var(--silver);margin-top:4px;display:flex;gap:16px;flex-wrap:wrap;">
        <span>LPL Season 1 · Top ${PLAYOFF_SPOTS} teams advance</span>
        <span style="color:rgba(245,197,24,.6);">League in progress · ${remaining} match${remaining!==1?'es':''} remaining to unlock playoffs</span>
      </div>
    </div>
    <div style="background:rgba(245,197,24,.05);border:1px solid rgba(245,197,24,.15);border-radius:10px;padding:12px 16px;margin-bottom:20px;font-size:12px;color:var(--silver);">
      ℹ️ Showing <strong style="color:var(--gold)">projected bracket</strong> based on current standings.
      Playoffs unlock automatically once every team completes ${LEAGUE_MATCHES_REQUIRED} league matches.
    </div>
    <div class="bracket-wrap">
      <div style="display:flex;gap:0;align-items:stretch;justify-content:space-between;min-width:660px;position:relative">
        <div style="display:flex;flex-direction:column;gap:80px;width:200px">
          <div>
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;color:var(--gold);text-transform:uppercase;margin-bottom:8px">Qualifier 1</div>
            <div class="bm">${bracketTeam(q1a)}</div>
            <div style="text-align:center;padding:4px;font-size:10px;color:var(--silver)">vs</div>
            <div class="bm">${bracketTeam(q1b)}</div>
          </div>
          <div style="margin-top:20px">
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;color:var(--gold);text-transform:uppercase;margin-bottom:8px">Eliminator</div>
            <div class="bm">${bracketTeam(elA)}</div>
            <div style="text-align:center;padding:4px;font-size:10px;color:var(--silver)">vs</div>
            <div class="bm">${bracketTeam(elB)}</div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;justify-content:center;width:200px">
          <div style="font-family:'Barlow Condensed',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;color:var(--gold);text-transform:uppercase;margin-bottom:8px">Qualifier 2</div>
          <div class="bm">${bracketTeam('TBD')}</div>
          <div style="text-align:center;padding:4px;font-size:10px;color:var(--silver)">vs</div>
          <div class="bm">${bracketTeam('TBD')}</div>
          <div style="font-size:10px;color:var(--silver);margin-top:6px;letter-spacing:1px">Loser of Q1 vs Winner of Eliminator</div>
        </div>
        <div style="display:flex;flex-direction:column;justify-content:center;width:200px">
          <div style="font-family:'Barlow Condensed',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;color:var(--gold);text-transform:uppercase;margin-bottom:8px">Final</div>
          <div class="bm highlight">${bracketTeam('TBD')}</div>
          <div style="text-align:center;padding:4px;font-size:10px;color:var(--silver)">vs</div>
          <div class="bm highlight">${bracketTeam('TBD')}</div>
        </div>
      </div>
    </div>
    <div style="margin-top:20px;background:var(--card);border:1px solid var(--border);border-radius:12px;padding:16px 20px;">
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:12px;font-weight:700;letter-spacing:2px;color:var(--gold);text-transform:uppercase;margin-bottom:10px">Current Top 4</div>
      ${rows.map((r,i)=>{const t=TEAM_META[r.k]||{pri:'#444',sec:'#fff',name:r.k};return`<div style="display:flex;align-items:center;gap:10px;padding:6px 0;border-bottom:1px solid var(--border);">
        <span style="font-family:'Bebas Neue',cursive;font-size:18px;color:var(--gold);width:20px">${i+1}</span>
        <div style="width:28px;height:28px;border-radius:50%;background:${t.pri}33;border:1px solid ${t.pri};color:${t.sec};display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',cursive;font-size:11px">${r.k.slice(0,2)}</div>
        <span style="font-family:'Barlow Condensed',sans-serif;font-weight:700">${t.name}</span>
        <span style="margin-left:auto;font-family:'Bebas Neue',cursive;font-size:18px;color:var(--gold)">${r.pts} pts</span>
      </div>`; }).join('')}
    </div>`;
    return;
  }

  // ── PLAYOFF STAGE: show live bracket with results ─────────────────────────
  resolvePlayoffTBDs();

  const qual = getQualifiedTeams(PLAYOFF_SPOTS);
  const q1Fix = PLAYOFF_FIXTURES.find(f=>f.round==='Q1');
  const elFix = PLAYOFF_FIXTURES.find(f=>f.round==='EL');
  const q2Fix = PLAYOFF_FIXTURES.find(f=>f.round==='Q2');
  const finFix= PLAYOFF_FIXTURES.find(f=>f.round==='FIN');
  const q1Res = PLAYOFF_RESULTS.find(r=>r.round==='Q1');
  const elRes = PLAYOFF_RESULTS.find(r=>r.round==='EL');
  const q2Res = PLAYOFF_RESULTS.find(r=>r.round==='Q2');
  const finRes= PLAYOFF_RESULTS.find(r=>r.round==='FIN');

  function _bTeam(k, winnerOf){
    if(!k || k==='TBD') return `<div class="bm-tbd">${winnerOf||'TBD'}</div>`;
    const t=TEAM_META[k]||{pri:'#444',sec:'#fff',name:k};
    return `<div style="display:flex;align-items:center;gap:8px">
      <div style="width:24px;height:24px;border-radius:50%;background:${t.pri}33;border:1px solid ${t.pri};color:${t.sec};display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',cursive;font-size:10px">${k.slice(0,2)}</div>
      <div class="bm-team">${t.name}</div>
    </div>`;
  }
  function _bBlock(fix, res, labelOverride){
    const t1 = fix?.t1||'TBD', t2 = fix?.t2||'TBD';
    const won1 = res?.winner===t1, won2 = res?.winner===t2;
    return `
      <div class="bm" style="${won1?'border-color:rgba(0,230,118,.5);':won2?'opacity:.6;':''}">
        ${_bTeam(t1==='TBD'?null:t1, labelOverride?.t1)}
        ${res?`<div style="font-size:9px;color:${won1?'#00e676':'var(--silver)'};letter-spacing:1px;margin-top:2px;">${won1?'✓ Won':won2?'Eliminated':''}</div>`:''}
      </div>
      <div style="text-align:center;padding:4px;font-size:10px;color:var(--silver)">vs</div>
      <div class="bm" style="${won2?'border-color:rgba(0,230,118,.5);':won1?'opacity:.6;':''}">
        ${_bTeam(t2==='TBD'?null:t2, labelOverride?.t2)}
        ${res?`<div style="font-size:9px;color:${won2?'#00e676':'var(--silver)'};letter-spacing:1px;margin-top:2px;">${won2?'✓ Won':won1?'Eliminated':''}</div>`:''}
      </div>`;
  }

  const champion = finRes?.winner;
  const champTeam = champion ? (TEAM_META[champion]||{name:champion}) : null;

  el.innerHTML=`
  ${champion?`
  <div style="background:linear-gradient(135deg,rgba(245,197,24,.15),rgba(155,93,229,.1));border:1px solid rgba(245,197,24,.4);border-radius:14px;padding:20px 24px;margin-bottom:20px;text-align:center;">
    <div style="font-size:32px;margin-bottom:6px;">🏆</div>
    <div style="font-family:'Bebas Neue',cursive;font-size:36px;letter-spacing:3px;color:var(--gold);">LPL SEASON 1 CHAMPIONS</div>
    <div style="font-family:'Bebas Neue',cursive;font-size:52px;line-height:1;background:linear-gradient(135deg,var(--gold),#fff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">${champTeam.name}</div>
    <div style="font-size:12px;color:var(--silver);letter-spacing:2px;margin-top:4px;">by ${finRes.margin}</div>
  </div>`:''}

  <div style="margin-bottom:16px">
    <div style="font-family:'Bebas Neue',cursive;font-size:28px;color:var(--gold)">Live Playoff Bracket</div>
    <div style="font-size:12px;color:var(--silver);margin-top:4px">LPL Season 1 · IPL-Format · Top 4</div>
  </div>
  <div class="bracket-wrap">
    <div style="display:flex;gap:0;align-items:stretch;justify-content:space-between;min-width:660px;position:relative">
      <div style="display:flex;flex-direction:column;gap:80px;width:200px">
        <div>
          <div style="font-family:'Barlow Condensed',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;color:var(--gold);text-transform:uppercase;margin-bottom:8px">Qualifier 1</div>
          ${_bBlock(q1Fix, q1Res)}
        </div>
        <div style="margin-top:20px">
          <div style="font-family:'Barlow Condensed',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;color:var(--gold);text-transform:uppercase;margin-bottom:8px">Eliminator</div>
          ${_bBlock(elFix, elRes)}
        </div>
      </div>
      <div style="display:flex;flex-direction:column;justify-content:center;width:200px">
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;color:var(--gold);text-transform:uppercase;margin-bottom:8px">Qualifier 2</div>
        ${_bBlock(q2Fix, q2Res, {t1:'Loser Q1', t2:'Winner EL'})}
        <div style="font-size:10px;color:var(--silver);margin-top:6px;letter-spacing:1px">Loser Q1 vs Winner Eliminator</div>
      </div>
      <div style="display:flex;flex-direction:column;justify-content:center;width:200px">
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;color:var(--gold);text-transform:uppercase;margin-bottom:8px">Final 🏆</div>
        ${_bBlock(finFix, finRes, {t1:'Winner Q1', t2:'Winner Q2'})}
      </div>
    </div>
  </div>

  <div style="margin-top:20px;background:var(--card);border:1px solid var(--border);border-radius:12px;padding:16px 20px;">
    <div style="font-family:'Barlow Condensed',sans-serif;font-size:12px;font-weight:700;letter-spacing:2px;color:var(--gold);text-transform:uppercase;margin-bottom:10px">Qualified Teams — Final League Standings</div>
    ${qual.map((k,i)=>{const t=TEAM_META[k]||{pri:'#444',sec:'#fff',name:k};
      const isChamp = k===champion;
      return`<div style="display:flex;align-items:center;gap:10px;padding:6px 0;border-bottom:1px solid var(--border);">
        <span style="font-family:'Bebas Neue',cursive;font-size:18px;color:var(--gold);width:20px">${i+1}</span>
        <div style="width:28px;height:28px;border-radius:50%;background:${t.pri}33;border:1px solid ${t.pri};color:${t.sec};display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',cursive;font-size:11px">${k.slice(0,2)}</div>
        <span style="font-family:'Barlow Condensed',sans-serif;font-weight:700">${t.name}${isChamp?' 🏆':''}</span>
        <span style="margin-left:auto;font-size:10px;color:var(--silver)">${i===0?'Seed 1':i===1?'Seed 2':i===2?'Seed 3':'Seed 4'}</span>
      </div>`; }).join('')}
  </div>

  <div style="margin-top:16px;background:var(--card);border:1px solid var(--border);border-radius:12px;padding:16px 20px;">
    <div style="font-family:'Barlow Condensed',sans-serif;font-size:12px;font-weight:700;letter-spacing:2px;color:var(--gold);text-transform:uppercase;margin-bottom:10px">Playoff Results</div>
    ${PLAYOFF_RESULTS.length===0?`<div style="color:var(--silver);font-size:13px;">No playoff results yet.</div>`:''}
    ${PLAYOFF_RESULTS.map(r=>{
      const t1=TEAM_META[r.t1]||{name:r.t1,sec:'#fff'};
      const t2=TEAM_META[r.t2]||{name:r.t2,sec:'#fff'};
      return`<div style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,.04);display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
        <span style="font-family:'Barlow Condensed',sans-serif;font-size:9px;font-weight:800;letter-spacing:2px;color:var(--gold);background:rgba(245,197,24,.1);padding:2px 8px;border-radius:4px;">${r.label}</span>
        <span style="font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:14px;">${(TEAM_META[r.winner]||{name:r.winner}).name} won</span>
        <span style="font-size:12px;color:var(--silver);">by ${r.margin}</span>
        ${r.potm?`<span style="font-size:11px;color:var(--gold);margin-left:auto">🏅 ${r.potm}</span>`:''}
      </div>`;
    }).join('')}
  </div>`;
}

function bracketTeam(k){
  if(k==='TBD') return `<div class="bm-tbd">TBD</div>`;
  const t=TEAM_META[k];
  return `<div style="display:flex;align-items:center;gap:8px">
    <div style="width:24px;height:24px;border-radius:50%;background:${t.pri}33;border:1px solid ${t.pri};color:${t.sec};display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',cursive;font-size:10px">${k.slice(0,2)}</div>
    <div class="bm-team">${t.name}</div>
  </div>`;
}

// ─── SCORECARD MODAL ─────────────────────────────────────────────────────────
function openSc(id){
  const m=RESULTS.find(x=>x.id===id);
  if(!m)return;
  const el=document.getElementById('scInner');
  el.innerHTML=`
    <div class="sc-card">
      <div class="sc-head">
        <div>
          <div class="sc-title">Match ${m.id} — ${TEAM_META[m.t1].name} vs ${TEAM_META[m.t2].name}</div>
          <div style="font-size:11px;color:var(--silver);letter-spacing:1px;margin-top:3px">${m.venue}</div>
        </div>
        <button class="sc-close" onclick="closeSc()">✕</button>
      </div>
      ${m.winner!=='TBD'?`<div class="sc-result">${TEAM_META[m.winner].name} won by ${m.margin}</div>`:'<div class="sc-result" style="color:var(--gold)">In Progress</div>'}
      ${m.scorecard.innings.map(inn=>inningsHtml(inn)).join('<div style="height:16px"></div>')}
      ${m.winner!=='TBD'?`<div class="sc-potm"><div><div class="sc-potm-label">Player of the Match</div><div class="sc-potm-name">${m.potm}</div><div class="sc-potm-detail">${m.potmDetail}</div></div></div>`:''}
    </div>`;
  document.getElementById('scOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeSc(){
  const el=document.getElementById('scOverlay');
  el.classList.remove('open');
  el.classList.add('closing');
  setTimeout(()=>{el.classList.remove('closing');document.body.style.overflow='';},300);
}
document.getElementById('scOverlay').addEventListener('click',function(e){if(e.target===this)closeSc();});

function inningsHtml(inn){
  const tm=TEAM_META[inn.team];
  return`
  <div class="sc-innings-title" style="color:${tm?.sec||'var(--gold)'}">${inn.team} INNINGS</div>
  <div class="sc-innings-total" style="color:${tm?.pri||'var(--gold)'}">${inn.total}</div>
  <div class="sc-innings-sub">Overs: ${inn.overs}</div>
  <table class="sc-bat">
    <thead><tr><th>Batter</th><th>Dismissal</th><th>R</th><th>B</th><th>SR</th></tr></thead>
    <tbody>
      ${inn.batters.map(b=>`<tr>
        <td style="font-family:'Barlow Condensed',sans-serif;font-weight:700;${b.notout?'color:var(--gold)':''}">${b.n}${b.notout?'*':''}</td>
        <td style="color:var(--silver);font-size:11px">${b.dis}</td>
        <td class="${b.r>=50?'hl-top':''}" style="font-family:'Bebas Neue',cursive;font-size:17px">${b.r}</td>
        <td>${b.b}</td>
        <td style="color:${parseFloat(b.sr)>=250?'#00e676':parseFloat(b.sr)>=200?'#ffd740':'var(--silver)'}">${b.sr}</td>
      </tr>`).join('')}
      <tr style="background:var(--card2)"><td colspan="2" style="color:var(--silver);font-size:11px">Extras</td><td colspan="3" style="font-family:'Bebas Neue',cursive">${inn.extras}</td></tr>
    </tbody>
  </table>
  <div style="height:8px"></div>
  <table class="sc-bowl">
    <thead><tr><th>Bowler</th><th>O</th><th>R</th><th>W</th><th>Econ</th></tr></thead>
    <tbody>
      ${inn.bowlers.map(b=>`<tr>
        <td style="font-family:'Barlow Condensed',sans-serif;font-weight:700">${b.n}</td>
        <td>${b.o}</td>
        <td>${b.r}</td>
        <td style="font-family:'Bebas Neue',cursive;font-size:17px;color:${b.w>=3?'#00e676':b.w>=1?'#ffd740':'var(--silver)'}">${b.w}</td>
        <td style="color:${parseFloat(b.econ)<=14?'#00e676':parseFloat(b.econ)<=18?'#ffd740':'#ff9100'}">${b.econ}</td>
      </tr>`).join('')}
    </tbody>
  </table>`;
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
function initHome(){
  // Count-up animation
  const totals=getTotals();
  document.getElementById('homeMatchesPlayed').setAttribute('data-target',totals.matches);
  document.getElementById('homeRunsScored').setAttribute('data-target',totals.runs);
  animateCounters();

  // Hero aside quick stats
  const stats=buildPlayerStats();
  let topBat=null,topBowl=null;
  for(const v of Object.values(stats.bat)){if(!topBat||v.runs>topBat.runs)topBat=v;}
  for(const v of Object.values(stats.bowl)){if(!topBowl||v.wkts>topBowl.wkts)topBowl=v;}
  const el1=document.getElementById('asideTopBatName');
  const el2=document.getElementById('asideTopBatRuns');
  const el3=document.getElementById('asideTopBowlName');
  const el4=document.getElementById('asideTopBowlWkts');
  if(el1)el1.textContent=topBat?topBat.n:'—';
  if(el2)el2.textContent=topBat?topBat.runs:'—';
  if(el3)el3.textContent=topBowl?topBowl.n:'—';
  if(el4)el4.textContent=topBowl?topBowl.wkts:'—';

  // Highlights
  renderHomeHighlights(totals);

  // Top performers
  renderHomePerformers();

  // Teams scroll
  renderHomeTeams();

  // Live in-progress banner
  if(typeof _renderInProgressBanner==='function') setTimeout(_renderInProgressBanner, 50);
}

function getTotals(){
  let matches=0,runs=0;
  for(const m of RESULTS){
    if(m.winner==='TBD')continue;
    matches++;
    if(m.scorecard){
      for(const inn of m.scorecard.innings){
        const r=parseInt((inn.total||'0').split('/')[0])||0;
        runs+=r;
      }
    }
  }
  return{matches,runs};
}

function animateCounters(){
  const els=document.querySelectorAll('.home-strip-num[data-target]');
  els.forEach(el=>{
    const target=parseInt(el.getAttribute('data-target'))||0;
    const dur=1800;
    const start=performance.now();
    function tick(now){
      const p=Math.min((now-start)/dur,1);
      const ease=1-Math.pow(1-p,3);
      el.textContent=Math.round(ease*target).toLocaleString();
      if(p<1)requestAnimationFrame(tick);
    }
    setTimeout(()=>requestAnimationFrame(tick),1300);
  });
}

function renderHomeHighlights(totals){
  const stats=buildPlayerStats();
  let topBat=null,topBowl=null,topSR=null;
  for(const v of Object.values(stats.bat)){
    if(!topBat||v.runs>topBat.runs)topBat=v;
    const sr=v.balls>0?(v.runs/v.balls*100):0;
    if(v.balls>=20&&(!topSR||sr>(topSR.runs/topSR.balls*100)))topSR=v;
  }
  for(const v of Object.values(stats.bowl)){
    if(!topBowl||v.wkts>topBowl.wkts)topBowl=v;
  }
  const highlights=[
    {label:'Most Runs',value:topBat?topBat.runs:'—',sub:topBat?topBat.n+' · '+topBat.team:'',color:'#F5C518'},
    {label:'Most Wickets',value:topBowl?topBowl.wkts:'—',sub:topBowl?topBowl.n+' · '+topBowl.team:'',color:'#E63946'},
    {label:'Best Strike Rate',value:topSR?((topSR.runs/topSR.balls)*100).toFixed(1):'—',sub:topSR?topSR.n:'',color:'#00E676'},
    {label:'Matches Played',value:totals.matches,sub:'LPL Season 1',color:'#9B5DE5'},
    {label:'Total Runs',value:totals.runs.toLocaleString(),sub:'This season',color:'#00D4FF'},
    {label:'Teams',value:Object.keys(TEAMS).length,sub:'Franchises competing',color:'#FFBE0B'},
  ];
  document.getElementById('homeHighlights').innerHTML=highlights.map((h,i)=>`
    <div class="home-hl-card" style="--hl-color:${h.color};animation-delay:${i*.1}s">
      <div class="home-hl-card-accent"></div>
      <div class="home-hl-label">${h.label}</div>
      <div class="home-hl-value">${h.value}</div>
      <div class="home-hl-sub">${h.sub}</div>
    </div>`).join('');
}

function renderHomePerformers(){
  const stats=buildPlayerStats();
  const batArr=Object.values(stats.bat).sort((a,b)=>b.runs-a.runs).slice(0,4);
  const bowlArr=Object.values(stats.bowl).sort((a,b)=>b.wkts-a.wkts).slice(0,4);
  const el=document.getElementById('homeTopPerf');
  if(!el)return;
  el.innerHTML=[
    ...batArr.map((p,i)=>{
      const t=TEAM_META[p.team]||{pri:'#333',sec:'#fff'};
      return`<div class="home-perf-card" style="animation-delay:${i*.1}s">
        <div class="home-perf-av" style="background:${t.pri}33;border:2px solid ${t.pri};color:${t.sec}">${ini(p.n)}</div>
        <div>
          <div class="home-perf-name">${p.n}</div>
          <div class="home-perf-team">${p.team} · Batter</div>
        </div>
        <div style="text-align:right">
          <div class="home-perf-stat">${p.runs}</div>
          <div class="home-perf-unit">runs</div>
        </div>
      </div>`;
    }),
    ...bowlArr.map((p,i)=>{
      const t=TEAM_META[p.team]||{pri:'#333',sec:'#fff'};
      return`<div class="home-perf-card" style="animation-delay:${(i+4)*.1}s">
        <div class="home-perf-av" style="background:${t.pri}33;border:2px solid ${t.pri};color:${t.sec}">${ini(p.n)}</div>
        <div>
          <div class="home-perf-name">${p.n}</div>
          <div class="home-perf-team">${p.team} · Bowler</div>
        </div>
        <div style="text-align:right">
          <div class="home-perf-stat">${p.wkts}</div>
          <div class="home-perf-unit">wickets</div>
        </div>
      </div>`;
    })
  ].join('');
}

function renderHomeTeams(){
  const el=document.getElementById('homeTeamsScroll');
  if(!el)return;
  el.innerHTML=Object.entries(TEAMS).map(([k,t],i)=>`
    <div class="home-team-chip" style="animation-delay:${i*.07}s" onclick="document.querySelectorAll('.nav-link')[5].click();setTimeout(()=>openSq('${k}'),100)">
      <div class="home-team-chip-av" style="background:${t.pri}33;border:2px solid ${t.pri};color:${t.sec}">${k}</div>
      <div>
        <div class="home-team-chip-name">${t.name}${t.women?' (W)':''}</div>
        <div class="home-team-chip-cap">${t.cap?'C: '+t.cap:''}${t.vc?' · VC: '+t.vc:''}</div>
      </div>
    </div>`).join('');
}

// ─── MASTER INIT — runs after all data is declared ────────────────────────────
let _adminLogoClicks=0;
let _adminLogoTimer=null;

function trackLogoClicks(){
  _adminLogoClicks++;
  clearTimeout(_adminLogoTimer);
  _adminLogoTimer=setTimeout(()=>_adminLogoClicks=0,600);
  if(_adminLogoClicks===3){
    _adminLogoClicks=0;
    openAdminLogin();
  }
}

let _lplBootStarted = false;

function _unwrapApiList(payload){
  if(!payload) return [];
  const value = Array.isArray(payload) ? payload : (payload.data ?? payload);
  return Array.isArray(value) ? value : [];
}

function _unwrapApiRecord(payload){
  if(!payload) return null;
  return payload.data ?? payload;
}

function _objectOrEmpty(value){
  return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
}

function _numOrNull(value){
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function _legacyMatchId(match, raw){
  const rawId = raw?.id ?? raw?.matchId;
  const numbered = _numOrNull(match.match_number ?? match.matchNumber ?? rawId);
  if(numbered !== null) return numbered;
  const idText = String(match.id ?? rawId ?? '').replace(/^(match|fixture)_/, '');
  return _numOrNull(idText) ?? (rawId || match.id);
}

function _legacyTeamCode(team){
  return team.code || team.abbr || team.shortName || team.id || team.team_id || team.teamId;
}

function _legacyPlayer(player){
  const raw = _objectOrEmpty(player.raw);
  const attrs = _objectOrEmpty(player.attributes);
  const name = player.name || raw.name || raw.n || '';
  return {
    n: name,
    hand: player.batting_hand || player.battingHand || raw.batting_hand || raw.battingHand || raw.hand || '',
    role: player.role || raw.role || '',
    style: player.bowling_style || player.bowlingStyle || raw.bowling_style || raw.bowlingStyle || raw.style || '',
    p: attrs.power ?? raw.p ?? player.p ?? '',
    c: attrs.consistency ?? raw.c ?? player.c ?? '',
    pp: attrs.powerplay ?? raw.pp ?? player.pp ?? '',
    do: attrs.death_overs ?? raw.do ?? player.do ?? '',
    cl: attrs.clutch ?? raw.cl ?? player.cl ?? ''
  };
}

function _replaceObject(target, source){
  for(const key of Object.keys(target)) delete target[key];
  Object.assign(target, source);
}

function _replaceArray(target, source){
  target.splice(0, target.length, ...source);
}

function _applyApiTeams(teams, players){
  const grouped = {};
  for(const player of players){
    const raw = _objectOrEmpty(player.raw);
    const teamId = player.team_id || player.teamId || raw.team_id || raw.teamId || raw.team || raw.teamCode || raw.teamKey;
    if(!teamId) continue;
    (grouped[teamId] ||= []).push(_legacyPlayer(player));
  }

  const nextTeams = {};
  const nextMeta = {};
  for(const team of teams){
    const raw = _objectOrEmpty(team.raw);
    const code = _legacyTeamCode(team) || _legacyTeamCode(raw);
    if(!code) continue;
    const teamPlayers = grouped[team.id] || grouped[code] || grouped[raw.id] || [];
    const legacyTeam = {
      name: team.name || raw.name || code,
      pri: team.primary_color || team.primaryColor || raw.primary_color || raw.primaryColor || raw.pri || '#444444',
      sec: team.secondary_color || team.secondaryColor || raw.secondary_color || raw.secondaryColor || raw.sec || '#ffffff',
      cap: team.captain || raw.captain || raw.cap || '',
      vc: team.vice_captain || team.viceCaptain || raw.vice_captain || raw.viceCaptain || raw.vc || '',
      women: Boolean(team.women ?? raw.women),
      players: teamPlayers
    };
    nextTeams[code] = legacyTeam;
    nextMeta[code] = {
      name: legacyTeam.name,
      pri: legacyTeam.pri,
      sec: legacyTeam.sec
    };
  }

  _replaceObject(TEAMS, nextTeams);
  _replaceObject(TEAM_META, nextMeta);
}

function _scoreFromInnings(scorecard, team, fallbackIndex){
  const innings = Array.isArray(scorecard?.innings) ? scorecard.innings : [];
  return innings.find((inn)=>inn.team === team) || innings[fallbackIndex] || {};
}

function _legacyResultFromApi(match){
  const raw = _objectOrEmpty(match.raw);
  const scorecard = match.scorecard || raw.scorecard || null;
  const t1 = raw.t1 || match.team1_id || match.team1Id;
  const t2 = raw.t2 || match.team2_id || match.team2Id;
  const inn1 = _scoreFromInnings(scorecard, t1, 0);
  const inn2 = _scoreFromInnings(scorecard, t2, 1);
  return {
    ...raw,
    id: _legacyMatchId(match, raw),
    t1,
    t2,
    venue: raw.venue || match.venue || 'LPL Arena',
    date: raw.date || match.match_date_label || match.matchDateLabel || match.match_date || match.matchDate || '',
    t1score: raw.t1score || inn1.total || '',
    t1ov: raw.t1ov || inn1.overs || '',
    t2score: raw.t2score || inn2.total || '',
    t2ov: raw.t2ov || inn2.overs || '',
    winner: raw.winner || match.winner_team_id || match.winnerTeamId || 'TBD',
    margin: raw.margin || match.result_summary || match.resultSummary || '',
    potm: raw.potm || match.player_of_match || match.playerOfMatch || '',
    potmDetail: raw.potmDetail || match.player_of_match_detail || match.playerOfMatchDetail || '',
    stage: raw.stage || match.stage || 'league',
    scorecard
  };
}

function _legacyFixtureFromApi(match){
  const raw = _objectOrEmpty(match.raw);
  return {
    ...raw,
    id: _legacyMatchId(match, raw),
    t1: raw.t1 || match.team1_id || match.team1Id,
    t2: raw.t2 || match.team2_id || match.team2Id,
    date: raw.date || match.match_date_label || match.matchDateLabel || match.match_date || match.matchDate || 'TBD',
    venue: raw.venue || match.venue || 'LPL Arena',
    stage: raw.stage || match.stage || 'league'
  };
}

function _applyApiMatches(matches){
  const results = [];
  const fixtures = [];
  for(const match of matches){
    if((match.status || '').toLowerCase() === 'completed'){
      results.push(_legacyResultFromApi(match));
    } else if((match.status || '').toLowerCase() !== 'abandoned'){
      fixtures.push(_legacyFixtureFromApi(match));
    }
  }
  results.sort((a,b)=>(_numOrNull(a.id) ?? 0) - (_numOrNull(b.id) ?? 0));
  fixtures.sort((a,b)=>(_numOrNull(a.id) ?? 0) - (_numOrNull(b.id) ?? 0));
  _replaceArray(RESULTS, results);
  _replaceArray(FIXTURES, fixtures);
}

function _legacyPlayoffFromApi(playoff, completed){
  const source = _objectOrEmpty(completed ? playoff.result : playoff.fixture);
  const raw = _objectOrEmpty(playoff.raw);
  const data = Object.keys(source).length ? source : raw;
  return {
    ...data,
    id: data.id || playoff.match_id || playoff.matchId || playoff.id,
    round: data.round || playoff.stage || '',
    label: data.label || data.name || playoff.stage || '',
    t1: data.t1 || playoff.team1_id || playoff.team1Id || '',
    t2: data.t2 || playoff.team2_id || playoff.team2Id || '',
    winner: data.winner || playoff.winner_team_id || playoff.winnerTeamId || '',
    margin: data.margin || data.result_summary || '',
    potm: data.potm || data.player_of_match || '',
    potmDetail: data.potmDetail || ''
  };
}

function _applyApiPlayoffs(playoffs){
  const fixtures = [];
  const results = [];
  for(const playoff of playoffs){
    const completed = (playoff.status || '').toLowerCase() === 'completed' || playoff.result || playoff.winner_team_id;
    if(completed) results.push(_legacyPlayoffFromApi(playoff, true));
    else fixtures.push(_legacyPlayoffFromApi(playoff, false));
  }
  _replaceArray(PLAYOFF_FIXTURES, fixtures);
  _replaceArray(PLAYOFF_RESULTS, results);
  if(fixtures.length || results.length) window.__LPL_API_STAGE__ = STAGE.PLAYOFF;
}

function _applyApiLive(liveRecord){
  const state = liveRecord?.state || liveRecord;
  const legacy = state?.legacySession || state;
  window.__LPL_API_LIVE_SESSION__ = legacy || null;
  if(legacy){
    try { localStorage.setItem(LPL_LIVE_KEY, JSON.stringify(legacy)); } catch(e){}
  }
}

function _clearLegacyData(){
  _replaceObject(TEAMS, {});
  _replaceObject(TEAM_META, {});
  _replaceArray(RESULTS, []);
  _replaceArray(FIXTURES, []);
  _replaceArray(PLAYOFF_FIXTURES, []);
  _replaceArray(PLAYOFF_RESULTS, []);
  window.__LPL_API_LIVE_SESSION__ = null;
}

function _showApiBootError(message){
  if(document.getElementById('lplApiBootError')) return;
  const banner = document.createElement('div');
  banner.id = 'lplApiBootError';
  banner.style.cssText = 'position:sticky;top:0;z-index:99999;background:#2b0608;color:#ffd8d8;border-bottom:1px solid #E63946;padding:10px 18px;font:600 13px system-ui,Arial,sans-serif;text-align:center;';
  banner.textContent = 'API data unavailable: ' + message;
  document.body.prepend(banner);
}

function _showApiBootWarning(message){
  if(!message || document.getElementById('lplApiBootWarning')) return;
  const banner = document.createElement('div');
  banner.id = 'lplApiBootWarning';
  banner.style.cssText = 'position:sticky;top:0;z-index:99998;background:#2b2106;color:#ffe9b5;border-bottom:1px solid #c59b22;padding:8px 18px;font:600 12px system-ui,Arial,sans-serif;text-align:center;';
  banner.textContent = message;
  document.body.prepend(banner);
}

async function _hydrateLplFromApi(){
  if(!window.LPLApi){
    _clearLegacyData();
    window.__LPL_API_BOOT_ERROR__ = 'LPL API client was not loaded.';
    return;
  }

  try {
    const [seasonRes, teamRes, playerRes, matchRes] = await Promise.all([
      window.LPLApi.listSeasons(),
      window.LPLApi.listTeams(),
      window.LPLApi.listPlayers(),
      window.LPLApi.listMatches()
    ]);

    const teams = _unwrapApiList(teamRes);
    const players = _unwrapApiList(playerRes);
    const matches = _unwrapApiList(matchRes);
    window.__LPL_API_SEASONS__ = _unwrapApiList(seasonRes);

    _applyApiTeams(teams, players);
    _applyApiMatches(matches);

    try {
      _applyApiPlayoffs(_unwrapApiList(await window.LPLApi.listPlayoffs()));
    } catch(e){
      window.__LPL_API_PLAYOFF_ERROR__ = e?.message || 'Unable to load playoffs.';
      _replaceArray(PLAYOFF_FIXTURES, []);
      _replaceArray(PLAYOFF_RESULTS, []);
    }

    try {
      _applyApiLive(_unwrapApiRecord(await window.LPLApi.getLiveSession()));
    } catch(e){
      window.__LPL_API_LIVE_SESSION__ = null;
      window.__LPL_API_LIVE_ERROR__ = e?.message || 'Unable to load live match.';
    }

    window.__LPL_API_BOOT_ERROR__ = '';
  } catch(e){
    _clearLegacyData();
    window.__LPL_API_BOOT_ERROR__ = e?.message || 'Unable to load LPL database data.';
  }
}

function _syncLegacyStorageKey(key, value){
  if(!window.LPLApi || typeof window.LPLApi.syncStorageKey !== 'function') return;
  window.LPLApi.syncStorageKey(key, value).catch((err)=>{
    console.warn('LPL database sync failed for ' + key, err);
  });
}

async function bootLpl(){
  if(_lplBootStarted) return;
  _lplBootStarted = true;
  await _hydrateLplFromApi();
  masterInit();
  if(window.__LPL_API_BOOT_ERROR__) _showApiBootError(window.__LPL_API_BOOT_ERROR__);
  if(!window.__LPL_API_BOOT_ERROR__){
    const warnings = [window.__LPL_API_PLAYOFF_ERROR__, window.__LPL_API_LIVE_ERROR__].filter(Boolean);
    if(warnings.length) _showApiBootWarning('Some LPL database data could not be loaded: ' + warnings.join(' '));
  }
}

function masterInit(){
  AUTHENTICATED = sessionStorage.getItem('lpl_admin_authenticated')==='1';
  document.querySelector('.logo')?.addEventListener('click', trackLogoClicks);
  updateAuthNav();
  // Populate team filter dropdowns
  initStatFilter();
  // Season stats tab
  renderStat();
  // Records tab
  renderRecords();
  // Teams grid
  renderTeams();
  // Matches - default to fixtures
  renderFixtures();
  // Home page
  initHome();
  // Entry form (initialises blank rows — must happen BEFORE restore so DOM exists)
  initEntryForm();

  // ── CRITICAL: Restore live draft AFTER DOM is ready, BEFORE showing blank state ──
  // Check for an unfinished live match in localStorage and auto-restore it.
  // This ensures a browser refresh / crash / inactive tab wakes up exactly where it left off.
  const _startupSession = _loadLiveSession();
  if(_startupSession && _hasLiveSession()){
    // Restore state into memory variables immediately (no UI shown yet)
    if(_startupSession.liveInnings){
      _liveInnings[1] = _startupSession.liveInnings[1] || { balls:[], batters:{}, bowlers:{}, runs:0, wickets:0, extras:0 };
      _liveInnings[2] = _startupSession.liveInnings[2] || { balls:[], batters:{}, bowlers:{}, runs:0, wickets:0, extras:0 };
    }
    if(_startupSession.overPlan){
      _overPlan[1] = _startupSession.overPlan[1] || Array(20).fill('');
      _overPlan[2] = _startupSession.overPlan[2] || Array(20).fill('');
    }
    _live.inn = _startupSession.curInn || 1;
    // Start autosave ticker
    if(!_autosaveTicker){
      _autosaveTicker = setInterval(_updateAutosaveStatus, 15000);
    }
  }

  // Show live in-progress banner if a session was saved (after all DOM is ready)
  setTimeout(()=>{
    if(typeof _renderInProgressBanner==='function') _renderInProgressBanner();
  }, 300);
}
// Boot is registered at the end of the file so every legacy helper and const
// used by masterInit() is initialized before the API-backed startup runs.

// ═══════════════════════════════════════════ MATCH ENTRY FORM
let _entryStep = 0;

function populateEntryTeamOptions(){
  const teams = Object.keys(typeof TEAM_META !== 'undefined' ? TEAM_META : (typeof TEAMS !== 'undefined' ? TEAMS : {}));
  const t1sel = document.getElementById('ef_t1');
  const t2sel = document.getElementById('ef_t2');
  const wsel  = document.getElementById('ef_winner');
  if(!t1sel || !t2sel || !wsel) return;

  [t1sel,t2sel].forEach(sel=>{
    while(sel.options.length>1) sel.remove(1);
    if(teams.length === 0){
      const o = document.createElement('option');
      o.value=''; o.textContent='No teams available';
      sel.appendChild(o);
      return;
    }
    for(const k of teams){
      const o=document.createElement('option');
      o.value=k;
      o.textContent=(TEAM_META?.[k]?.name||k)+' ('+k+')';
      sel.appendChild(o);
    }
  });

  while(wsel.options.length>1) wsel.remove(1);
  const placeholder = document.createElement('option');
  placeholder.value='';
  placeholder.textContent='Select winner';
  wsel.appendChild(placeholder);
}

function initEntryForm(){
  populateEntryTeamOptions();
  // Set auto match id
  const nextId = Math.max(...RESULTS.map(r=>r.id),0)+1;
  document.getElementById('ef_matchid').value = nextId;
  // Init rows
  ['inn1','inn2'].forEach(id=>{
    const bat = document.getElementById(id+'_bat');
    const bowl = document.getElementById(id+'_bowl');
    bat.innerHTML = `<div class="ebat-head"><span>Batter</span><span>Runs</span><span>Balls</span><span>Dismissal</span><span>SR / N.O.</span><span></span></div>`;
    bowl.innerHTML = `<div class="ebowl-head"><span>Bowler</span><span>Overs</span><span>Runs</span><span>Wkts</span><span></span></div>`;
    for(let i=0;i<8;i++) _addBatRow(id);
    for(let i=0;i<6;i++) _addBowlRow(id);
  });
  // Wire up live SR / total calculation
  document.getElementById('inn1_bat').addEventListener('input',()=>updateInnTotals('inn1'));
  document.getElementById('inn1_bowl').addEventListener('input',()=>updateInnTotals('inn1'));
  document.getElementById('inn1_extras').addEventListener('input',()=>updateInnTotals('inn1'));
  document.getElementById('inn2_bat').addEventListener('input',()=>updateInnTotals('inn2'));
  document.getElementById('inn2_bowl').addEventListener('input',()=>updateInnTotals('inn2'));
  document.getElementById('inn2_extras').addEventListener('input',()=>updateInnTotals('inn2'));
}

function onTeamChange(){
  const t1 = document.getElementById('ef_t1').value;
  const t2 = document.getElementById('ef_t2').value;
  if(t1) document.getElementById('inn1_title').textContent = '1st Innings — '+(TEAM_META[t1]?.name||t1)+' Batting';
  if(t2) document.getElementById('inn2_title').textContent = '2nd Innings — '+(TEAM_META[t2]?.name||t2)+' Batting';
  if(t1) document.getElementById('inn1_bowl_title').textContent = '1st Innings — '+(TEAM_META[t2]?.name||'')+(t2?' Bowling':'Bowling');
  if(t2) document.getElementById('inn2_bowl_title').textContent = '2nd Innings — '+(TEAM_META[t1]?.name||'')+(t1?' Bowling':'Bowling');
  // Populate winner dropdown
  const wsel = document.getElementById('ef_winner');
  while(wsel.options.length>1) wsel.remove(1);
  for(const k of [t1,t2].filter(Boolean)){
    const o=document.createElement('option');
    o.value=k; o.textContent=TEAM_META[k]?.name+' ('+k+')';
    wsel.appendChild(o);
  }
  // Pre-fill batter name datalists
  _setTeamDatalist('inn1',t1);
  _setTeamDatalist('inn2',t2);
  _setBowlerDatalist('inn1',t2);
  _setBowlerDatalist('inn2',t1);
  // Persist team selection change if a live session is in progress
  if(_hasLiveSession() || _liveInnings[1].balls.length>0 || _liveInnings[2].balls.length>0){
    _saveLiveSession();
  }
}

function _setTeamDatalist(innId, teamKey){
  if(!teamKey)return;
  const players = TEAMS[teamKey]?.players || [];
  const rows = document.querySelectorAll('#'+innId+'_bat .ebat-row');
  rows.forEach(row=>{
    const inp = row.querySelector('.bname-inp');
    if(!inp) return;
    let dl = inp.list;
    if(!dl){
      dl = document.createElement('datalist');
      dl.id = innId+'_dl_'+Math.random().toString(36).slice(2);
      inp.setAttribute('list', dl.id);
      document.body.appendChild(dl);
    }
    dl.innerHTML = players.map(p=>`<option value="${p.n}">`).join('');
  });
}

function _setBowlerDatalist(innId, teamKey){
  if(!teamKey)return;
  const players = TEAMS[teamKey]?.players || [];
  const rows = document.querySelectorAll('#'+innId+'_bowl .ebowl-row');
  rows.forEach(row=>{
    const inp = row.querySelector('.bname-inp');
    if(!inp) return;
    let dl = inp.list;
    if(!dl){
      dl = document.createElement('datalist');
      dl.id = innId+'_bdl_'+Math.random().toString(36).slice(2);
      inp.setAttribute('list', dl.id);
      document.body.appendChild(dl);
    }
    dl.innerHTML = players.map(p=>`<option value="${p.n}">`).join('');
  });
}

function _addBatRow(innId){
  const row = document.createElement('div');
  row.className = 'ebat-row';
  row.innerHTML = `
    <input class="bname-inp" type="text" placeholder="Player name">
    <input class="brun-inp"  type="number" min="0" placeholder="0">
    <input class="bball-inp" type="number" min="0" placeholder="0">
    <input class="bdis-inp"  type="text" placeholder="b / c ... / run out / not out">
    <span class="sr-display">—<br><label style="font-size:9px;color:var(--silver);cursor:pointer;display:flex;align-items:center;gap:3px;justify-content:center;margin-top:2px;"><input type="checkbox" class="notout-cb"> N.O.</label></span>
    <button class="erow-del" onclick="this.closest('.ebat-row').remove();updateInnTotals('${innId}')">×</button>`;
  row.querySelector('.brun-inp').addEventListener('input', ()=>{ _calcSR(row); updateInnTotals(innId); });
  row.querySelector('.bball-inp').addEventListener('input', ()=>{ _calcSR(row); updateInnTotals(innId); });
  document.getElementById(innId+'_bat').appendChild(row);
  // attach datalist if team already selected
  const teamKey = innId==='inn1' ? document.getElementById('ef_t1').value : document.getElementById('ef_t2').value;
  if(teamKey){
    const players = TEAMS[teamKey]?.players||[];
    const inp = row.querySelector('.bname-inp');
    const dl = document.createElement('datalist');
    dl.id = 'dl_'+Math.random().toString(36).slice(2);
    inp.setAttribute('list',dl.id);
    dl.innerHTML = players.map(p=>`<option value="${p.n}">`).join('');
    document.body.appendChild(dl);
  }
}

function _calcSR(row){
  const r = parseInt(row.querySelector('.brun-inp').value)||0;
  const b = parseInt(row.querySelector('.bball-inp').value)||0;
  const srEl = row.querySelector('.sr-display');
  const sr = b>0 ? (r/b*100).toFixed(1) : '—';
  srEl.childNodes[0].textContent = sr;
}

function _addBowlRow(innId){
  const row = document.createElement('div');
  row.className = 'ebowl-row';
  row.innerHTML = `
    <input class="bname-inp"  type="text" placeholder="Player name">
    <input class="bov-inp"   type="text" placeholder="4">
    <input class="brun-inp"  type="number" min="0" placeholder="0">
    <input class="bwkt-inp"  type="number" min="0" placeholder="0">
    <button class="erow-del" onclick="this.closest('.ebowl-row').remove()">×</button>`;
  document.getElementById(innId+'_bowl').appendChild(row);
  const teamKey = innId==='inn1' ? document.getElementById('ef_t2').value : document.getElementById('ef_t1').value;
  if(teamKey){
    const players = TEAMS[teamKey]?.players||[];
    const inp = row.querySelector('.bname-inp');
    const dl = document.createElement('datalist');
    dl.id = 'bdl_'+Math.random().toString(36).slice(2);
    inp.setAttribute('list',dl.id);
    dl.innerHTML = players.map(p=>`<option value="${p.n}">`).join('');
    document.body.appendChild(dl);
  }
}

function addBatRow(innId){ _addBatRow(innId); }
function addBowlRow(innId){ _addBowlRow(innId); }

function updateInnTotals(innId){
  const rows = [...document.querySelectorAll('#'+innId+'_bat .ebat-row')];
  let totalRuns=0, totalWkts=0;
  rows.forEach(row=>{
    const r = parseInt(row.querySelector('.brun-inp').value)||0;
    const no = row.querySelector('.notout-cb')?.checked;
    const name = row.querySelector('.bname-inp').value.trim();
    if(name) { totalRuns+=r; if(!no) totalWkts++; }
  });
  const extras = parseInt(document.getElementById(innId+'_extras').value)||0;
  totalRuns += extras;
  // cap wickets at 10
  totalWkts = Math.min(totalWkts, 10);
  const dispEl = document.getElementById(innId+'_total_disp');
  dispEl.value = totalWkts>=10 ? `${totalRuns}/10 (all out)` : `${totalRuns}/${totalWkts}`;
}

function entryNext(step){
  // Validate
  if(step===0){
    const t1=document.getElementById('ef_t1').value;
    const t2=document.getElementById('ef_t2').value;
    if(!t1||!t2){alert('Please select both teams.');return;}
    if(t1===t2){alert('Teams must be different.');return;}
  }
  _setEntryStep(step+1);
  if(step+1===3) _buildResultPreview();
}
function entryPrev(step){ _setEntryStep(step-1); }

function _setEntryStep(s){
  _entryStep=s;
  for(let i=0;i<4;i++){
    const step=document.getElementById('estep'+i);
    const body=document.getElementById('ebody'+i);
    step.classList.remove('active','done');
    body.classList.remove('active');
    if(i<s) step.classList.add('done');
    else if(i===s){ step.classList.add('active'); body.classList.add('active'); }
  }
}

function _collectInnings(innId, teamKey){
  const rows = [...document.querySelectorAll('#'+innId+'_bat .ebat-row')];
  const batters = [];
  let totalRuns=0, totalWkts=0;
  rows.forEach(row=>{
    const name=row.querySelector('.bname-inp').value.trim();
    if(!name) return;
    const r=parseInt(row.querySelector('.brun-inp').value)||0;
    const b=parseInt(row.querySelector('.bball-inp').value)||0;
    const dis=row.querySelector('.bdis-inp').value.trim()||'—';
    const notout=row.querySelector('.notout-cb')?.checked||false;
    const sr=b>0?(r/b*100).toFixed(2):'0.00';
    batters.push({n:name,r,b,sr,dis,notout:notout||undefined});
    totalRuns+=r;
    if(!notout) totalWkts++;
  });
  totalWkts=Math.min(totalWkts,10);
  const extras=parseInt(document.getElementById(innId+'_extras').value)||0;
  totalRuns+=extras;
  const overs=document.getElementById(innId+'_overs').value||'20';
  const total=totalWkts>=10?`${totalRuns}/10`:`${totalRuns}/${totalWkts}`;

  const bowlRows = [...document.querySelectorAll('#'+innId+'_bowl .ebowl-row')];
  const bowlers = [];
  bowlRows.forEach(row=>{
    const name=row.querySelector('.bname-inp').value.trim();
    if(!name) return;
    const ov=row.querySelector('.bov-inp').value||'0';
    const r=parseInt(row.querySelector('.brun-inp').value)||0;
    const w=parseInt(row.querySelector('.bwkt-inp').value)||0;
    const parts=String(ov).split('.');
    const ovNum=parseInt(parts[0])+(parseInt(parts[1]||0)/6);
    const econ=ovNum>0?(r/ovNum).toFixed(2):'0.00';
    bowlers.push({n:name,o:ov,r,w,econ});
  });
  return {team:teamKey,total,overs,batters,bowlers,extras};
}

function validateInnings(inn, innId, teamKey){
  const sumBatterRuns = inn.batters.reduce((s,b)=>s+b.r,0);
  const extras = parseInt(document.getElementById(innId+'_extras').value)||0;
  const totalRuns = parseInt(inn.total.split('/')[0]);
  if(sumBatterRuns + extras !== totalRuns){
    alert(`Innings ${innId}: Batter runs (${sumBatterRuns}) + extras (${extras}) = ${sumBatterRuns+extras}, but total is ${totalRuns}`);
    return false;
  }
  const wickets = inn.batters.filter(b=>!b.notout).length;
  const totalWkts = parseInt(inn.total.split('/')[1]);
  if(wickets !== totalWkts){
    alert(`Innings ${innId}: Wickets from batters (${wickets}), but total wickets ${totalWkts}`);
    return false;
  }
  const sumBowlerRuns = inn.bowlers.reduce((s,b)=>s+parseInt(b.r),0);
  if(sumBowlerRuns !== totalRuns){
    alert(`Innings ${innId}: Bowler runs conceded (${sumBowlerRuns}) != total runs (${totalRuns})`);
    return false;
  }
  const sumBowlerWkts = inn.bowlers.reduce((s,b)=>s+parseInt(b.w),0);
  if(sumBowlerWkts !== wickets){
    alert(`Innings ${innId}: Bowler wickets (${sumBowlerWkts}) != total wickets (${wickets})`);
    return false;
  }
  const sumOvers = inn.bowlers.reduce((s,b)=>s+parseFloat(b.o||0),0);
  const innOvers = parseFloat(document.getElementById(innId+'_overs').value||'20');
  if(Math.abs(sumOvers - innOvers) > 0.1){
    alert(`Innings ${innId}: Bowler overs (${sumOvers.toFixed(1)}) != innings overs (${innOvers})`);
    return false;
  }
  return true;
}

function saveMatch(){
  const t1k=document.getElementById('ef_t1').value;
  const t2k=document.getElementById('ef_t2').value;
  const winner=document.getElementById('ef_winner').value;
  const margin=document.getElementById('ef_margin').value.trim();
  const potm=document.getElementById('ef_potm').value.trim();
  const potmDetail=document.getElementById('ef_potmdetail').value.trim();
  if(!winner){alert('Please select the winner.');return;}
  if(!margin){alert('Please enter the margin.');return;}

  // ── PLAYOFF STAGE GUARD ─────────────────────────────────────────────────────
  // Detect if this match is a playoff fixture or block illegal league entries
  const stage = getTournamentStage();
  const isPlayoffStage = (stage === STAGE.PLAYOFF || stage === STAGE.COMPLETED);
  const matchedPlayoffFix = PLAYOFF_FIXTURES.find(
    f => (f.t1===t1k && f.t2===t2k) || (f.t1===t2k && f.t2===t1k)
  );

  if(isPlayoffStage && !matchedPlayoffFix){
    // Not a playoff fixture — block it
    alert('⛔ League stage is complete and frozen.\n\nNew league matches cannot be added.\nOnly playoff matches (Q1 / Eliminator / Q2 / Final) can be entered now.\n\nUse the Fixtures tab to set up playoff fixtures first.');
    return;
  }

  const inn1=_collectInnings('inn1',t1k);
  const inn2=_collectInnings('inn2',t2k);
  const inn1ov=document.getElementById('inn1_overs').value||'20';
  const inn2ov=document.getElementById('inn2_overs').value||'20';

  // Validate innings data
  if(!validateInnings(inn1, 'inn1', t1k)) return;
  if(!validateInnings(inn2, 'inn2', t2k)) return;

  const nextId = Math.max(...RESULTS.map(r=>r.id), ...PLAYOFF_RESULTS.map(r=>r.id), 0)+1;
  const match={
    id:nextId,
    t1:t1k, t2:t2k,
    venue:document.getElementById('ef_venue').value||'LPL Arena',
    t1score:inn1.total, t1ov:inn1ov,
    t2score:inn2.total, t2ov:inn2ov,
    winner, margin,
    potm:potm||'—', potmDetail:potmDetail||'',
    scorecard:{innings:[inn1,inn2]}
  };

  // Tag playoff matches with their round
  if(matchedPlayoffFix){
    match.playoffRound = matchedPlayoffFix.round;
    match.playoffLabel = matchedPlayoffFix.label;
  }

  // ── Duplicate prevention ─────────────────────────────────────────────────────
  const isDuplicate = RESULTS.some(r =>
    r.t1 === t1k && r.t2 === t2k &&
    r.t1score === inn1.total && r.t2score === inn2.total &&
    r.winner === winner
  );
  if(isDuplicate){
    if(!confirm('A match with these exact teams, scores and winner already exists in the records.\n\nSave anyway? (Only proceed if this is genuinely a different match.)')) return;
  }

  // Save to localStorage
  let customMatchesForSync = null;
  try {
    const existing=JSON.parse(localStorage.getItem('lpl_custom_matches')||'[]');
    existing.push(match);
    localStorage.setItem('lpl_custom_matches',JSON.stringify(existing));
    customMatchesForSync = existing;
  } catch(e){}
  if(customMatchesForSync) _syncLegacyStorageKey('lpl_custom_matches', customMatchesForSync);

  // Push to live RESULTS
  RESULTS.push(match);

  // If this is a playoff match, also save to PLAYOFF_RESULTS
  if(matchedPlayoffFix){
    const poResult = {
      id: match.id,
      round: matchedPlayoffFix.round,
      label: matchedPlayoffFix.label,
      t1: t1k, t2: t2k,
      winner, margin,
      potm: potm||'—', potmDetail: potmDetail||''
    };
    // Remove any existing result for this round (re-entry)
    const existIdx = PLAYOFF_RESULTS.findIndex(r=>r.round===matchedPlayoffFix.round);
    if(existIdx>=0) PLAYOFF_RESULTS.splice(existIdx,1);
    PLAYOFF_RESULTS.push(poResult);
    savePlayoffResults();
    // Remove this fixture from PLAYOFF_FIXTURES (mark completed)
    matchedPlayoffFix.status = 'completed';
    savePlayoffFixtures();
    // Resolve TBD teams for Q2 / Final
    resolvePlayoffTBDs();
  }

  // Remove from league FIXTURES if present
  const fi=FIXTURES.findIndex(f=>f.t1===t1k&&f.t2===t2k||f.t1===t2k&&f.t2===t1k);
  if(fi>=0){
    const completedFixture = FIXTURES.splice(fi,1)[0];
    saveFixturesToStorage();
    _deleteFixtureDirect(completedFixture).catch((error)=>console.warn('LPL fixture cleanup failed', error));
  }

  // Re-render everything
  renderStat();
  renderRecords();
  initStatFilter();
  renderFixtures();
  renderResults();
  renderPoints();
  renderPlayoffs();
  initHome();
  _renderPlayoffBanner();
  _renderAdminPlayoffGuard();

  // ── Auto-transition to playoffs if league just completed ──
  if(!isPlayoffStage){
    checkAndTransitionToPlayoffs();
  }

  // Show success
  _clearLiveSession();
  document.getElementById('admStepIndicator').style.display='none';
  document.querySelectorAll('.adm-step-body').forEach(b=>b.style.display='none');
  document.getElementById('entrySavedMsg').style.display='block';
}

function resetEntryForm(){
  _clearLiveSession();
  _liveInnings = { 1:{ balls:[], batters:{}, bowlers:{}, runs:0, wickets:0, extras:0 }, 2:{ balls:[], batters:{}, bowlers:{}, runs:0, wickets:0, extras:0 } };
  _overPlan = { 1: Array(20).fill(''), 2: Array(20).fill('') };
  _live.inn = 1;
  document.getElementById('entrySavedMsg').style.display='none';
  document.getElementById('admStepIndicator').style.display='flex';
  _entryStep=0;
  // Reset all fields
  document.getElementById('ef_t1').value='';
  document.getElementById('ef_t2').value='';
  document.getElementById('ef_venue').value='LPL Arena';
  document.getElementById('ef_date').value='';
  document.getElementById('ef_winner').value='';
  document.getElementById('ef_margin').value='';
  document.getElementById('ef_potm').value='';
  document.getElementById('ef_potmdetail').value='';
  ['inn1','inn2'].forEach(id=>{
    const bat=document.getElementById(id+'_bat');
    const bowl=document.getElementById(id+'_bowl');
    bat.innerHTML=`<div class="ebat-head"><span>Batter</span><span>Runs</span><span>Balls</span><span>Dismissal</span><span>SR / N.O.</span><span></span></div>`;
    bowl.innerHTML=`<div class="ebowl-head"><span>Bowler</span><span>Overs</span><span>Runs</span><span>Wkts</span><span></span></div>`;
    for(let i=0;i<8;i++) _addBatRow(id);
    for(let i=0;i<6;i++) _addBowlRow(id);
    document.getElementById(id+'_extras').value=0;
    document.getElementById(id+'_total_disp').value='';
    document.getElementById(id+'_overs').value='';
  });
  const nextId=Math.max(...RESULTS.map(r=>r.id),0)+1;
  document.getElementById('ef_matchid').value=nextId;
  _setEntryStep(0);
}

function toggleManage(){
  const panel=document.getElementById('entryManagePanel');
  if(panel.style.display==='none'){
    panel.style.display='block';
    renderManageList();
  } else {
    panel.style.display='none';
  }
}

function renderManageList(){
  const list=document.getElementById('entryManageList');
  let saved=[];
  try{ saved=JSON.parse(localStorage.getItem('lpl_custom_matches')||'[]'); } catch(e){}
  if(!saved.length){
    list.innerHTML='<div style="color:var(--silver);font-size:13px;padding:10px 0;">No custom matches saved yet.</div>';
    return;
  }
  list.innerHTML=saved.map((m,i)=>`
    <div class="adm-entry-card">
      <div>
        <div style="font-family:\'Barlow Condensed\',sans-serif;font-weight:700;font-size:15px;">Match ${m.id} — ${TEAM_META[m.t1]?.name||m.t1} vs ${TEAM_META[m.t2]?.name||m.t2}</div>
        <div style="font-size:11px;color:var(--silver);margin-top:2px;">${TEAM_META[m.winner]?.name||m.winner} won by ${m.margin} · POTM: ${m.potm}</div>
      </div>
      <button class="adm-entry-del" onclick="deleteCustomMatch(${i})">Delete</button>
    </div>`).join('');
}

function deleteCustomMatch(idx){
  if(!confirm('Delete this match? This will remove it from all stats.')) return;
  let saved=[];
  try{ saved=JSON.parse(localStorage.getItem('lpl_custom_matches')||'[]'); } catch(e){}
  const deleted=saved.splice(idx,1)[0];
  try{ localStorage.setItem('lpl_custom_matches',JSON.stringify(saved)); } catch(e){}
  _syncLegacyStorageKey('lpl_custom_matches', saved);
  // Remove from live RESULTS
  const ri=RESULTS.findIndex(r=>r.id===deleted.id);
  if(ri>=0) RESULTS.splice(ri,1);
  // Re-render
  renderStat(); renderRecords(); renderFixtures(); renderResults(); renderPoints(); initHome();
  renderManageList();
}

// ═══════════════════════════════════════════ LIVE BALL-BY-BALL SCORER

// Per-innings state stored separately so switching innings never carries over data
let _liveInnings = {
  1: { balls:[], batters:{}, bowlers:{}, runs:0, wickets:0, extras:0 },
  2: { balls:[], batters:{}, bowlers:{}, runs:0, wickets:0, extras:0 },
};
let _live = { inn:1 };  // current innings pointer

// Over plan: array of 20 slots, each = bowler name string or ''
// Stored per innings
let _overPlan = { 1: Array(20).fill(''), 2: Array(20).fill('') };
let _overPlanOpen = false;

function _curInn(){ return _liveInnings[_live.inn]; }

function toggleNbMenu(){
  const m = document.getElementById('nbSubMenu');
  m.style.display = m.style.display === 'none' ? 'block' : 'none';
}

// ── Over Plan ─────────────────────────────────────────────────────────────────
function toggleOverPlan(){
  _overPlanOpen = !_overPlanOpen;
  const panel = document.getElementById('liveOverPlanPanel');
  panel.style.display = _overPlanOpen ? 'block' : 'none';
  if(_overPlanOpen) renderOverPlanGrid();
}

function renderOverPlanGrid(){
  const grid = document.getElementById('overPlanGrid');
  if(!grid) return;
  const inn = _live.inn;
  const plan = _overPlan[inn];

  // Get bowling team players
  const t1k = document.getElementById('ef_t1').value;
  const t2k = document.getElementById('ef_t2').value;
  const bowlTeam = inn===1 ? t2k : t1k;
  const bowlPlayers = (TEAMS[bowlTeam]||{}).players||[];
  const playerOpts = '<option value="">—</option>' + bowlPlayers.map(p=>`<option value="${p.n}">${p.n}</option>`).join('');

  const legalBalls = _getLegalBallCount();
  const currentOver = Math.floor(legalBalls / 6); // 0-indexed over currently being bowled

  grid.innerHTML = plan.map((bowler, i)=>{
    const isPast = i < currentOver;
    const isCurrent = i === currentOver;
    return `<div style="display:flex;align-items:center;gap:6px;${isPast?'opacity:.45':''}">
      <span style="font-family:'Bebas Neue',cursive;font-size:14px;color:${isCurrent?'var(--gold)':'var(--silver)'};width:22px;flex-shrink:0;">O${i+1}</span>
      <select onchange="setOverPlan(${inn},${i},this.value)"
        style="flex:1;background:var(--bg2);border:1px solid ${isCurrent?'var(--gold)':'var(--border)'};color:var(--white);border-radius:4px;padding:4px 6px;font-family:'Barlow Condensed',sans-serif;font-size:12px;font-weight:700;${isPast?'pointer-events:none':''}"
        ${isPast?'disabled':''}>
        ${playerOpts}
      </select>
    </div>`;
  }).join('');

  // Set current values
  plan.forEach((bowler, i)=>{
    const sel = grid.querySelectorAll('select')[i];
    if(sel && bowler) sel.value = bowler;
  });
}

function setOverPlan(inn, overIdx, bowlerName){
  _overPlan[inn][overIdx] = bowlerName;
}

// ── Innings switching ─────────────────────────────────────────────────────────
function setLiveInnings(n){
  _live.inn = n;
  ['liveInn1Btn','liveInn2Btn'].forEach((id,i)=>{
    document.getElementById(id)?.classList.toggle('active', i===n-1);
  });
  // Repopulate player selectors for the correct batting/bowling teams
  const t1k = document.getElementById('ef_t1').value;
  const t2k = document.getElementById('ef_t2').value;
  const batTeam  = n===1 ? t1k : t2k;
  const bowlTeam = n===1 ? t2k : t1k;
  const batPlayers  = (TEAMS[batTeam]||{}).players||[];
  const bowlPlayers = (TEAMS[bowlTeam]||{}).players||[];
  const opts = (arr) => '<option value="">Select</option>' + arr.map(p=>`<option value="${p.n}">${p.n}</option>`).join('');
  document.getElementById('liveStriker').innerHTML    = opts(batPlayers);
  document.getElementById('liveNonStriker').innerHTML = opts(batPlayers);
  document.getElementById('liveBowler').innerHTML     = opts(bowlPlayers);
  // Update display to reflect THIS innings' current state
  _updateLiveDisplay();
  // Persist innings switch immediately
  _saveLiveSession();
  // Refresh over plan grid if open
  if(_overPlanOpen) renderOverPlanGrid();
  // Close NB menu if open
  const nb = document.getElementById('nbSubMenu');
  if(nb) nb.style.display='none';
  // Hide over-end banner
  const banner = document.getElementById('overEndBanner');
  if(banner) banner.style.display='none';
}

// ── Strike rotation helper ────────────────────────────────────────────────────
function _rotateStrike(){
  const s  = document.getElementById('liveStriker').value;
  const ns = document.getElementById('liveNonStriker').value;
  document.getElementById('liveStriker').value    = ns;
  document.getElementById('liveNonStriker').value = s;
}

// ── Check & handle over completion ───────────────────────────────────────────
function _checkOverEnd(prevLegal){
  const newLegal = _getLegalBallCount();
  const prevOver = Math.floor(prevLegal / 6);
  const newOver  = Math.floor(newLegal  / 6);
  const prevBall = prevLegal % 6;
  const newBall  = newLegal  % 6;

  // Over just completed = we crossed a 6-ball boundary
  if(newOver > prevOver){
    // 1. Swap strikers (batters change ends at over end)
    _rotateStrike();

    // 2. Update over plan grid if open
    if(_overPlanOpen) renderOverPlanGrid();

    // 3. Auto-select next bowler from plan (if assigned)
    const inn = _live.inn;
    const plan = _overPlan[inn];
    const nextBowlerFromPlan = plan[newOver] || '';

    if(nextBowlerFromPlan){
      document.getElementById('liveBowler').value = nextBowlerFromPlan;
      // Flash the over-end banner briefly then dismiss
      _showOverEndBanner(newOver, nextBowlerFromPlan, true);
    } else {
      // Show banner with bowler picker
      _showOverEndBanner(newOver, '', false);
    }
    return true; // over ended
  }
  return false;
}

function _showOverEndBanner(overIdx, autoSelectedBowler, autoSelected){
  const banner = document.getElementById('overEndBanner');
  const btnsDiv = document.getElementById('overEndBowlerBtns');
  if(!banner || !btnsDiv) return;

  const inn = _live.inn;
  const t1k = document.getElementById('ef_t1').value;
  const t2k = document.getElementById('ef_t2').value;
  const bowlTeam = inn===1 ? t2k : t1k;
  const bowlPlayers = (TEAMS[bowlTeam]||{}).players||[];
  const currentBowler = document.getElementById('liveBowler').value;

  btnsDiv.innerHTML = bowlPlayers.map(p=>{
    const isSelected = p.n === currentBowler;
    const wasLastBowler = inn === _live.inn && _getLastOverBowler(overIdx - 1) === p.n;
    return `<button onclick="selectNextBowler('${p.n}')"
      style="padding:6px 14px;border-radius:6px;border:1px solid ${isSelected?'var(--gold)':'var(--border)'};
      background:${isSelected?'rgba(245,197,24,.15)':'var(--card)'};
      color:${wasLastBowler?'var(--silver)':isSelected?'var(--gold)':'var(--white)'};
      font-family:'Barlow Condensed',sans-serif;font-size:12px;font-weight:700;cursor:pointer;
      ${wasLastBowler?'text-decoration:line-through;opacity:.5;':''}"
      title="${wasLastBowler?'Bowled last over':''}">${p.n}</button>`;
  }).join('');

  banner.querySelector('div').textContent = autoSelected
    ? `OVER ${overIdx} DONE — Auto-selected: ${autoSelectedBowler}`
    : `OVER ${overIdx} DONE — Select next bowler`;

  banner.style.display = 'block';

  // If auto-selected, auto-dismiss after 4 seconds
  if(autoSelected){
    setTimeout(()=>{ banner.style.display='none'; }, 4000);
  }
}

function _getLastOverBowler(overIdx){
  // Returns who bowled the given over (0-indexed) based on ball log
  const inn = _curInn();
  // Legal balls 0..5 = over 0, 6..11 = over 1, etc.
  const start = overIdx * 6;
  let count = 0;
  let lastBowler = '';
  for(const b of inn.balls){
    const isLegal = b.type==='run' || b.type==='wicket' || (b.type==='extra' && (b.extra==='b'||b.extra==='lb'));
    if(isLegal){
      if(count >= start && count < start+6) lastBowler = b.bowler;
      count++;
    }
  }
  return lastBowler;
}

function selectNextBowler(name){
  document.getElementById('liveBowler').value = name;
  document.getElementById('overEndBanner').style.display = 'none';
  _saveLiveSession();
}

// ── Score a normal delivery ───────────────────────────────────────────────────
function scoreBall(runs){
  const inn = _curInn();
  const bowler  = document.getElementById('liveBowler').value;
  const striker = document.getElementById('liveStriker').value;
  if(!striker||!bowler){ alert('Select striker and bowler first.'); return; }

  const prevLegal = _getLegalBallCount();

  inn.balls.push({type:'run', runs, striker, bowler});
  inn.runs += runs;
  if(!inn.batters[striker]) inn.batters[striker]={r:0,b:0};
  inn.batters[striker].r += runs;
  inn.batters[striker].b++;
  if(!inn.bowlers[bowler]) inn.bowlers[bowler]={r:0,w:0,b:0};
  inn.bowlers[bowler].r += runs;
  inn.bowlers[bowler].b++;

  // Rotate strike on odd runs (1, 3, 5) — happens independently of over-end
  if(runs % 2 !== 0){
    _rotateStrike();
  }

  // Check if the over just ended — this swap is SEPARATE from the run-rotation above.
  // Both can happen on the same ball (e.g. last ball of over = 1 run: rotate for run, then rotate for over-end).
  // Net result for 1 run last ball: striker is back at striker's end → faces next over. Correct.
  const overEnded = _checkOverEnd(prevLegal);

  _updateLiveDisplay();
}

function scoreExtra(type, extraRuns){
  // extraRuns = runs off the bat (for NB+n); 0 for plain WD/NB/BYE/LB
  const inn = _curInn();
  const bowler  = document.getElementById('liveBowler').value;
  const striker = document.getElementById('liveStriker').value;

  // Close NB sub-menu after any selection
  const nb = document.getElementById('nbSubMenu');
  if(nb) nb.style.display='none';

  if(!bowler){ alert('Select a bowler first.'); return; }

  const prevLegal = _getLegalBallCount();

  if(type==='nb+wd'){
    inn.balls.push({type:'extra', extra:'nb+wd', runs:2, bowler});
    inn.runs += 2;
    inn.extras += 2;
    if(!inn.bowlers[bowler]) inn.bowlers[bowler]={r:0,w:0,b:0};
    inn.bowlers[bowler].r += 2;
    // NB+WD is NOT a legal ball — no over-end check needed
    _updateLiveDisplay();
    return;
  }

  const isNB  = type==='nb';
  const isWD  = type==='wd';
  const isBye = type==='b';
  const isLB  = type==='lb';

  const deliveryExtra = 1;
  const batRuns = (isNB && extraRuns > 0) ? extraRuns : 0;
  const totalRuns = deliveryExtra + batRuns;

  inn.balls.push({type:'extra', extra:type, runs:totalRuns, batRuns, bowler, striker: isNB ? striker : ''});
  inn.runs   += totalRuns;
  inn.extras += deliveryExtra;

  if(!inn.bowlers[bowler]) inn.bowlers[bowler]={r:0,w:0,b:0};
  inn.bowlers[bowler].r += totalRuns;

  if(isBye || isLB){
    inn.bowlers[bowler].b++;
    // For byes/LBs: runs actually run by batters (excluding the 1-extra penalty) determine strike rotation
    const runsRun = extraRuns || 0; // 0 for plain bye/lb with no runs, otherwise the runs run
    if(runsRun % 2 !== 0) _rotateStrike();
    _checkOverEnd(prevLegal);
  }
  // WD and NB don't count as legal balls — no over-end check, no strike rotation

  // If NB and batter hit runs, credit batter and rotate on odd bat-runs
  if(isNB && batRuns > 0 && striker){
    if(!inn.batters[striker]) inn.batters[striker]={r:0,b:0};
    inn.batters[striker].r += batRuns;
    // NB: no ball count increase for batter
    if(batRuns % 2 !== 0) _rotateStrike();
  }

  _updateLiveDisplay();
}

function scoreWicket(){
  const inn = _curInn();
  const bowler  = document.getElementById('liveBowler').value;
  const striker = document.getElementById('liveStriker').value;
  if(!striker||!bowler){ alert('Select striker and bowler first.'); return; }
  const dis = prompt(`How was ${striker} dismissed?\n(e.g. b ${bowler}  /  c X b ${bowler}  /  run out)`, `b ${bowler}`) || `b ${bowler}`;

  const prevLegal = _getLegalBallCount();

  inn.balls.push({type:'wicket', striker, bowler, dis});
  inn.wickets++;
  if(!inn.batters[striker]) inn.batters[striker]={r:0,b:0};
  inn.batters[striker].b++;
  inn.batters[striker].out = true;
  inn.batters[striker].dis = dis;
  if(!inn.bowlers[bowler]) inn.bowlers[bowler]={r:0,w:0,b:0};
  inn.bowlers[bowler].w++;
  inn.bowlers[bowler].b++;
  document.getElementById('liveStriker').value = '';

  _checkOverEnd(prevLegal);
  _updateLiveDisplay();
}

function undoBall(){
  const inn = _curInn();
  if(!inn.balls.length) return;

  // Snapshot over index BEFORE popping
  const prevLegal = _getLegalBallCount();
  const prevOver  = Math.floor(prevLegal / 6);

  const last = inn.balls.pop();
  if(last.type==='run'){
    inn.runs -= last.runs;
    if(inn.batters[last.striker]){ inn.batters[last.striker].r -= last.runs; inn.batters[last.striker].b--; }
    if(inn.bowlers[last.bowler])  { inn.bowlers[last.bowler].r  -= last.runs; inn.bowlers[last.bowler].b--; }
  } else if(last.type==='extra'){
    inn.runs   -= last.runs;
    inn.extras -= (last.runs - (last.batRuns||0));
    if(inn.bowlers[last.bowler]){ inn.bowlers[last.bowler].r -= last.runs; }
    if(last.batRuns && last.striker && inn.batters[last.striker]){
      inn.batters[last.striker].r -= last.batRuns;
    }
    if(last.extra==='b'||last.extra==='lb'){
      if(inn.bowlers[last.bowler]) inn.bowlers[last.bowler].b--;
    }
  } else if(last.type==='wicket'){
    inn.wickets--;
    if(inn.batters[last.striker]){ inn.batters[last.striker].b--; delete inn.batters[last.striker].out; delete inn.batters[last.striker].dis; }
    if(inn.bowlers[last.bowler]) { inn.bowlers[last.bowler].w--; inn.bowlers[last.bowler].b--; }
  }

  // ── Resync after undo ────────────────────────────────────────────────────────
  const newLegal = _getLegalBallCount();
  const newOver  = Math.floor(newLegal / 6);

  // Hide over-end banner always after undo
  const banner = document.getElementById('overEndBanner');
  if(banner) banner.style.display='none';

  // If undo crossed back over a boundary (e.g. 12→11 legal balls = over 2→1),
  // we need to resync the bowler dropdown to whoever is actually bowling the
  // current (now-incomplete) over, and refresh the over plan grid.
  if(newOver < prevOver){
    // Find the bowler of the most recent legal ball in the now-current over
    const bowlerOfCurrentOver = _getBowlerOfCurrentOver();
    if(bowlerOfCurrentOver){
      document.getElementById('liveBowler').value = bowlerOfCurrentOver;
    }
    // Refresh over plan grid so current-over highlight and past-over dimming are correct
    if(_overPlanOpen) renderOverPlanGrid();
  }

  _updateLiveDisplay();
}

// Returns the bowler who has been bowling in the current (incomplete) over,
// by scanning back through the ball log for the most recent legal ball.
function _getBowlerOfCurrentOver(){
  const inn = _curInn();
  const legalBalls = _getLegalBallCount();
  const currentOverStart = Math.floor(legalBalls / 6) * 6; // legal-ball index where current over started

  let legalSeen = 0;
  let bowlerFound = '';
  for(const b of inn.balls){
    const isLegal = b.type==='run' || b.type==='wicket' ||
                    (b.type==='extra' && (b.extra==='b' || b.extra==='lb'));
    if(isLegal){
      if(legalSeen >= currentOverStart) bowlerFound = b.bowler;
      legalSeen++;
    } else {
      // WD/NB still belong to the current over's bowler
      if(legalSeen >= currentOverStart) bowlerFound = b.bowler;
    }
  }
  return bowlerFound;
}

function _getLegalBallCount(){
  const inn = _curInn();
  return inn.balls.filter(b=>{
    if(b.type==='run') return true;
    if(b.type==='wicket') return true;
    if(b.type==='extra'){
      const e = b.extra;
      return e==='b'||e==='lb';
    }
    return false;
  }).length;
}

function _updateLiveDisplay(){
  const inn = _curInn();
  const legalBalls = _getLegalBallCount();
  const fullOvers  = Math.floor(legalBalls / 6);
  const remBalls   = legalBalls % 6;
  const oversStr   = `${fullOvers}.${remBalls}`;

  document.getElementById('liveScoreDisp').textContent = `${inn.runs}/${inn.wickets} · ${oversStr} ov`;

  const striker = document.getElementById('liveStriker').value;
  if(striker && inn.batters[striker]){
    const b = inn.batters[striker];
    document.getElementById('liveStrikerStat').textContent = `${b.r} (${b.b})`;
  } else {
    document.getElementById('liveStrikerStat').textContent = '0 (0)';
  }
  const bowler = document.getElementById('liveBowler').value;
  if(bowler && inn.bowlers[bowler]){
    const bw = inn.bowlers[bowler];
    const bOv = Math.floor(bw.b/6)+'.'+( bw.b%6);
    document.getElementById('liveBowlerStat').textContent = `${bw.w}-${bw.r} (${bOv})`;
  } else {
    document.getElementById('liveBowlerStat').textContent = '0-0 (0)';
  }

  // Over log — show current over balls grouped, plus last couple overs
  const log = document.getElementById('liveOverLog');
  // Group all balls into overs for display
  let legalCount = 0;
  const overGroups = [[]];
  for(const b of inn.balls){
    const isLegal = b.type==='run' || b.type==='wicket' || (b.type==='extra' && (b.extra==='b'||b.extra==='lb'));
    overGroups[overGroups.length-1].push(b);
    if(isLegal){
      legalCount++;
      if(legalCount % 6 === 0 && legalCount < inn.balls.reduce((n,x)=>n+(x.type==='run'||x.type==='wicket'||(x.type==='extra'&&(x.extra==='b'||x.extra==='lb'))?1:0),0)){
        overGroups.push([]);
      }
    }
  }
  // Show last 3 overs
  const visibleOvers = overGroups.slice(-3);
  const overStartIdx = overGroups.length - visibleOvers.length;

  log.innerHTML = visibleOvers.map((balls, i)=>{
    const overNum = overStartIdx + i + 1;
    const ballDots = balls.map(b=>{
      if(b.type==='run'){
        const bg = b.runs===4?'#1a3d2e':b.runs===6?'#2e1a3d':'var(--card2)';
        const fg = b.runs===4?'#00e676':b.runs===6?'#c77dff':'var(--white)';
        return `<span style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;background:${bg};color:${fg};font-family:'Bebas Neue',cursive;font-size:15px;">${b.runs}</span>`;
      }
      if(b.type==='extra'){
        const label = b.extra==='nb+wd'?'NB+WD': b.extra==='nb'? (b.batRuns?`NB+${b.batRuns}`:'NB') : b.extra.toUpperCase();
        return `<span style="display:inline-flex;align-items:center;justify-content:center;min-width:28px;height:28px;padding:0 4px;border-radius:50%;background:#2a2a1a;color:var(--gold);font-size:9px;font-family:'Barlow Condensed',sans-serif;font-weight:800;">${label}</span>`;
      }
      if(b.type==='wicket'){
        return `<span style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;background:#3d1a1a;color:var(--red);font-size:9px;font-family:'Barlow Condensed',sans-serif;font-weight:800;">W</span>`;
      }
      return '';
    }).join('');
    return `<div style="margin-bottom:6px;"><span style="font-size:11px;color:var(--silver);font-family:'Barlow Condensed',sans-serif;letter-spacing:1px;margin-right:8px;">OV ${overNum}</span><span style="display:inline-flex;flex-wrap:wrap;gap:4px;">${ballDots}</span></div>`;
  }).join('') || `<div style="font-size:11px;color:var(--silver);">No balls yet.</div>`;

  // Live scorecard preview
  const sc = document.getElementById('liveScorecardPreview');
  const batRows = Object.entries(inn.batters).map(([n,b])=>
    `<div style="display:flex;justify-content:space-between;font-size:12px;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.04);">
      <span style="font-family:'Barlow Condensed',sans-serif;font-weight:700;color:${b.out?'var(--silver)':'var(--white)'};">${n}${b.out?'':' *'}</span>
      <span style="font-family:'Bebas Neue',cursive;font-size:17px;color:${b.out?'var(--silver)':'var(--gold)'};">${b.r} (${b.b})</span>
    </div>`).join('');
  sc.innerHTML = batRows || '<div style="color:var(--silver);font-size:12px;">No balls scored yet.</div>';
  if(inn.extras) sc.innerHTML += `<div style="font-size:11px;color:var(--silver);margin-top:6px;">Extras: ${inn.extras}</div>`;

  // Auto-determine winner when innings 2 is being played
  if(_live.inn === 2){
    const inn1 = _liveInnings[1];
    const target = inn1.runs + 1;
    const remaining = target - inn.runs;
    const header = document.getElementById('liveScoreDisp');
    if(inn.runs >= target){
      header.style.color = 'var(--green)';
    } else if(inn.wickets >= 10){
      header.style.color = 'var(--red)';
    } else {
      header.style.color = 'var(--white)';
    }
    const targetEl = document.getElementById('liveTargetInfo');
    if(targetEl){
      targetEl.textContent = `Target: ${target} · Need ${Math.max(0,remaining)} more in ${Math.max(0, 120-legalBalls)} balls`;
      targetEl.style.display = 'block';
    }
  } else {
    const header = document.getElementById('liveScoreDisp');
    header.style.color = 'var(--white)';
    const targetEl = document.getElementById('liveTargetInfo');
    if(targetEl) targetEl.style.display = 'none';
  }

  // Persist after every display update so refresh never loses data
  _saveLiveSession();
}

function resetLive(){
  _clearLiveSession();
  _liveInnings = {
    1:{ balls:[], batters:{}, bowlers:{}, runs:0, wickets:0, extras:0 },
    2:{ balls:[], batters:{}, bowlers:{}, runs:0, wickets:0, extras:0 },
  };
  _overPlan = { 1: Array(20).fill(''), 2: Array(20).fill('') };
  _live.inn = 1;
  document.getElementById('liveScoreDisp').textContent = '0/0 · 0.0 ov';
  document.getElementById('liveStrikerStat').textContent  = '0 (0)';
  document.getElementById('liveBowlerStat').textContent   = '0-0 (0)';
  document.getElementById('liveOverLog').innerHTML = '';
  document.getElementById('liveScorecardPreview').innerHTML = '';
  const nb = document.getElementById('nbSubMenu');
  if(nb) nb.style.display='none';
  const banner = document.getElementById('overEndBanner');
  if(banner) banner.style.display='none';
  const draftBanner = document.getElementById('liveDraftRestoreBanner');
  if(draftBanner) draftBanner.style.display='none';
  _renderInProgressBanner();
  if(_overPlanOpen) renderOverPlanGrid();
}

function applyLiveToForm(){
  // Flush BOTH innings from _liveInnings into the quick-entry form
  const t1k = document.getElementById('ef_t1').value;
  const t2k = document.getElementById('ef_t2').value;

  [1,2].forEach(n=>{
    const inn    = _liveInnings[n];
    const innId  = n===1?'inn1':'inn2';
    if(!Object.keys(inn.batters).length && !inn.runs) return; // skip empty innings

    // Count legal balls for overs
    const legalBalls = inn.balls.filter(b=>{
      if(b.type==='run'||b.type==='wicket') return true;
      return b.extra==='b'||b.extra==='lb';
    }).length;
    const overs = Math.floor(legalBalls/6)+(legalBalls%6?'.'+(legalBalls%6):'');

    // Batters
    const bat = document.getElementById(innId+'_bat');
    bat.innerHTML=`<div class="ebat-head"><span>Batter</span><span>Runs</span><span>Balls</span><span>Dismissal</span><span>SR / N.O.</span><span></span></div>`;
    Object.entries(inn.batters).forEach(([name,b])=>{
      _addBatRow(innId);
      const row = bat.lastElementChild;
      row.querySelector('.bname-inp').value  = name;
      row.querySelector('.brun-inp').value   = b.r;
      row.querySelector('.bball-inp').value  = b.b;
      row.querySelector('.bdis-inp').value   = b.dis||'not out';
      row.querySelector('.notout-cb').checked = !b.out;
      _calcSR(row);
    });

    // Bowlers
    const bowl = document.getElementById(innId+'_bowl');
    bowl.innerHTML=`<div class="ebowl-head"><span>Bowler</span><span>Overs</span><span>Runs</span><span>Wkts</span><span></span></div>`;
    Object.entries(inn.bowlers).forEach(([name,bw])=>{
      _addBowlRow(innId);
      const row = bowl.lastElementChild;
      row.querySelector('.bname-inp').value  = name;
      const ovNum = Math.floor(bw.b/6)+(bw.b%6?'.'+(bw.b%6):'');
      row.querySelector('.bov-inp').value    = ovNum;
      row.querySelector('.brun-inp').value   = bw.r;
      row.querySelector('.bwkt-inp').value   = bw.w;
    });

    document.getElementById(innId+'_extras').value = inn.extras||0;
    document.getElementById(innId+'_overs').value  = overs||'20';
    updateInnTotals(innId);
  });

  // Auto-fill winner from run totals
  const r1 = _liveInnings[1].runs, r2 = _liveInnings[2].runs;
  const w2 = _liveInnings[2].wickets;
  if(r1>0||r2>0){
    if(r2>r1){
      document.getElementById('ef_winner').value  = t2k;
      document.getElementById('ef_margin').value  = `${10-w2} wicket${10-w2!==1?'s':''}`;
    } else if(r1>r2){
      document.getElementById('ef_winner').value  = t1k;
      document.getElementById('ef_margin').value  = `${r1-r2} run${r1-r2!==1?'s':''}`;
    }
  }

  admSelectMode('quick');
  _setEntryStep(3);
}

// ═══════════════════════════════════════════ LIVE SESSION PERSISTENCE
// Saves the entire in-progress match state so refresh/close never loses data.
const LPL_LIVE_KEY = 'lpl_live_session_v2';

// Autosave ticker interval reference
let _autosaveTicker = null;

function _saveLiveSession(){
  try {
    const t1k = document.getElementById('ef_t1')?.value||'';
    const t2k = document.getElementById('ef_t2')?.value||'';
    const venue = document.getElementById('ef_venue')?.value||'';
    const date  = document.getElementById('ef_date')?.value||'';
    const striker    = document.getElementById('liveStriker')?.value||'';
    const nonStriker = document.getElementById('liveNonStriker')?.value||'';
    const bowler     = document.getElementById('liveBowler')?.value||'';
    const curInn     = _live.inn;
    const now = Date.now();
    const session = {
      t1k, t2k, venue, date, curInn,
      striker, nonStriker, bowler,
      liveInnings: JSON.parse(JSON.stringify(_liveInnings)),
      overPlan: JSON.parse(JSON.stringify(_overPlan)),
      timestamp: now,
      lastSavedAt: now,
    };
    localStorage.setItem(LPL_LIVE_KEY, JSON.stringify(session));
    if(window.LPLApi && typeof window.LPLApi.saveLiveSession === 'function'){
      window.LPLApi.saveLiveSession(session).catch((err)=>console.warn('LPL live match sync failed', err));
    }
    _updateAutosaveStatus();
    // Start ticker if not running
    if(!_autosaveTicker){
      _autosaveTicker = setInterval(_updateAutosaveStatus, 15000);
    }
  } catch(e){}
}

function _updateAutosaveStatus(){
  const el = document.getElementById('liveAutosaveStatus');
  if(!el) return;
  try {
    const raw = localStorage.getItem(LPL_LIVE_KEY);
    if(!raw){ el.style.display='none'; return; }
    const s = JSON.parse(raw);
    if(!s || !s.lastSavedAt){ el.style.display='none'; return; }
    const secAgo = Math.round((Date.now() - s.lastSavedAt) / 1000);
    let agoStr;
    if(secAgo < 5)       agoStr = 'just now';
    else if(secAgo < 60) agoStr = `${secAgo}s ago`;
    else                 agoStr = `${Math.floor(secAgo/60)}m ago`;
    el.textContent = `💾 Autosaved ${agoStr}`;
    el.style.display = 'block';
  } catch(e){ el.style.display='none'; }
}

function _loadLiveSession(){
  try {
    if(window.__LPL_API_LIVE_SESSION__) return window.__LPL_API_LIVE_SESSION__;
    const raw = localStorage.getItem(LPL_LIVE_KEY);
    if(!raw) return null;
    return JSON.parse(raw);
  } catch(e){ return null; }
}

function _clearLiveSession(){
  try { localStorage.removeItem(LPL_LIVE_KEY); } catch(e){}
  window.__LPL_API_LIVE_SESSION__ = null;
  if(window.LPLApi && typeof window.LPLApi.clearLiveSession === 'function'){
    window.LPLApi.clearLiveSession().catch((err)=>console.warn('LPL live match clear failed', err));
  }
  // Stop ticker
  if(_autosaveTicker){ clearInterval(_autosaveTicker); _autosaveTicker = null; }
  const el = document.getElementById('liveAutosaveStatus');
  if(el) el.style.display = 'none';
}

function _hasLiveSession(){
  const s = _loadLiveSession();
  if(!s) return false;
  const inn1balls = (s.liveInnings?.[1]?.balls||[]).length;
  const inn2balls = (s.liveInnings?.[2]?.balls||[]).length;
  return inn1balls > 0 || inn2balls > 0;
}

// ── Draft banner logic (shown inside live pane when switching to live mode) ──
function _checkAndShowLiveDraftBanner(){
  const banner = document.getElementById('liveDraftRestoreBanner');
  const info   = document.getElementById('liveDraftRestoreInfo');
  if(!banner) return;
  const session = _loadLiveSession();
  if(!session || !_hasLiveSession()){
    banner.style.display = 'none';
    return;
  }
  // Already restored (state is non-empty and matches session) — don't re-show
  const alreadyRestored = _liveInnings[1].balls.length > 0 || _liveInnings[2].balls.length > 0;
  if(alreadyRestored){
    banner.style.display = 'none';
    _updateAutosaveStatus();
    return;
  }
  // Build info string
  const t1name = TEAM_META[session.t1k]?.name || session.t1k || '?';
  const t2name = TEAM_META[session.t2k]?.name || session.t2k || '?';
  const inn1 = session.liveInnings?.[1]||{runs:0,wickets:0,balls:[]};
  const inn2 = session.liveInnings?.[2]||{runs:0,wickets:0,balls:[]};
  const lb1 = (inn1.balls||[]).filter(b=>b.type==='run'||b.type==='wicket'||(b.type==='extra'&&(b.extra==='b'||b.extra==='lb'))).length;
  const lb2 = (inn2.balls||[]).filter(b=>b.type==='run'||b.type==='wicket'||(b.type==='extra'&&(b.extra==='b'||b.extra==='lb'))).length;
  const ov1 = Math.floor(lb1/6)+'.'+( lb1%6);
  const ov2 = Math.floor(lb2/6)+'.'+( lb2%6);
  const ago  = session.lastSavedAt ? Math.round((Date.now()-session.lastSavedAt)/60000) : null;
  const agoStr = ago===null?'':ago<1?' · saved just now':ago<60?` · saved ${ago}m ago`:` · saved ${Math.floor(ago/60)}h ago`;
  info.innerHTML = `<strong style="color:var(--white);">${t1name} vs ${t2name}</strong>${agoStr}<br>
    Inn 1: ${inn1.runs}/${inn1.wickets} (${ov1} ov) &nbsp;|&nbsp; Inn 2: ${inn2.runs}/${inn2.wickets} (${ov2} ov)`;
  banner.style.display = 'block';
}

// Resume inline (from within the live pane banner)
function resumeLiveMatchInPlace(){
  const session = _loadLiveSession();
  if(!session) return;
  _restoreLiveSession(session);
  const banner = document.getElementById('liveDraftRestoreBanner');
  if(banner) banner.style.display='none';
}

// Discard inline (from within the live pane banner)
function discardLiveMatchInPlace(){
  if(!confirm('Discard this in-progress draft? All ball-by-ball data will be permanently lost.')) return;
  _clearLiveSession();
  _liveInnings = { 1:{ balls:[], batters:{}, bowlers:{}, runs:0, wickets:0, extras:0 }, 2:{ balls:[], batters:{}, bowlers:{}, runs:0, wickets:0, extras:0 } };
  _overPlan = { 1: Array(20).fill(''), 2: Array(20).fill('') };
  _live.inn = 1;
  const banner = document.getElementById('liveDraftRestoreBanner');
  if(banner) banner.style.display='none';
  _renderInProgressBanner();
  _updateLiveDisplay();
}

function _restoreLiveSession(session){
  if(!session) return;
  populateEntryTeamOptions();
  const t1sel = document.getElementById('ef_t1');
  const t2sel = document.getElementById('ef_t2');
  if(t1sel){ t1sel.value = session.t1k; t1sel.disabled = false; }
  if(t2sel){ t2sel.value = session.t2k; t2sel.disabled = false; }
  const venueEl = document.getElementById('ef_venue');
  const dateEl  = document.getElementById('ef_date');
  if(venueEl) venueEl.value = session.venue||'LPL Arena';
  if(dateEl)  dateEl.value  = session.date||'';
  onTeamChange();
  if(session.liveInnings){
    _liveInnings[1] = session.liveInnings[1] || { balls:[], batters:{}, bowlers:{}, runs:0, wickets:0, extras:0 };
    _liveInnings[2] = session.liveInnings[2] || { balls:[], batters:{}, bowlers:{}, runs:0, wickets:0, extras:0 };
  }
  if(session.overPlan){
    _overPlan[1] = session.overPlan[1] || Array(20).fill('');
    _overPlan[2] = session.overPlan[2] || Array(20).fill('');
  }
  setLiveInnings(session.curInn || 1);
  setTimeout(()=>{
    const strEl = document.getElementById('liveStriker');
    const nsEl  = document.getElementById('liveNonStriker');
    const bowEl = document.getElementById('liveBowler');
    if(strEl && session.striker)    strEl.value = session.striker;
    if(nsEl  && session.nonStriker) nsEl.value  = session.nonStriker;
    if(bowEl && session.bowler)     bowEl.value = session.bowler;
    _updateLiveDisplay();
    _updateAutosaveStatus();
    // Start autosave ticker so "X seconds ago" stays fresh
    if(!_autosaveTicker){
      _autosaveTicker = setInterval(_updateAutosaveStatus, 15000);
    }
  }, 80);
}

// ─── live banner popup helpers ────────────────────────────────────────────────

function _lpdBallHtml(b){
  if(b.type==='run'){
    const bg=b.runs===4?'#1a3d2e':b.runs===6?'#2e1a3d':'rgba(255,255,255,.08)';
    const fg=b.runs===4?'#00e676':b.runs===6?'#c77dff':'var(--white)';
    return `<span class="lpd-ball" style="background:${bg};color:${fg};">${b.runs}</span>`;
  }
  if(b.type==='extra'){
    const lbl=b.extra==='nb+wd'?'NW':b.extra==='nb'?(b.batRuns?'N'+b.batRuns:'NB'):b.extra.toUpperCase();
    return `<span class="lpd-ball" style="background:#2a2a1a;color:var(--gold);font-size:8px;font-family:'Barlow Condensed',sans-serif;font-weight:800;">${lbl}</span>`;
  }
  if(b.type==='wicket') return `<span class="lpd-ball" style="background:#3d1a1a;color:var(--red);font-size:9px;font-family:'Barlow Condensed',sans-serif;font-weight:800;">W</span>`;
  return '';
}

function _lpdLegal(b){ return b.type==='run'||b.type==='wicket'||(b.type==='extra'&&(b.extra==='b'||b.extra==='lb')); }

function _lpdCommentaryHtml(inn){
  const balls=inn.balls||[];
  if(!balls.length) return `<div style="color:var(--silver);font-size:13px;padding:8px 0;">No balls scored yet.</div>`;

  // group into overs
  let lc=0; const overs=[[]];
  for(const b of balls){
    overs[overs.length-1].push(b);
    if(_lpdLegal(b)){ lc++; if(lc%6===0) overs.push([]); }
  }
  if(!overs[overs.length-1].length) overs.pop();

  // powerplay stats (overs 1-6 = first 36 legal balls)
  let ppR=0,ppW=0,ppLegal=0;
  for(const b of balls){
    if(ppLegal>=36) break;
    ppR+=b.runs||0;
    if(b.type==='wicket') ppW++;
    if(_lpdLegal(b)) ppLegal++;
  }
  const lbTotal=balls.filter(_lpdLegal).length;
  const ovsDisp=Math.floor(lbTotal/6)+'.'+( lbTotal%6);

  const phasesHtml=`<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px;">
    <div style="background:rgba(245,197,24,.07);border:1px solid rgba(245,197,24,.18);border-radius:8px;padding:7px 14px;">
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:9px;font-weight:800;letter-spacing:2px;color:var(--gold);margin-bottom:1px;">TOTAL</div>
      <div style="font-family:'Bebas Neue',cursive;font-size:22px;color:var(--gold);">${inn.runs}/${inn.wickets} <span style="font-size:12px;color:var(--silver);">(${ovsDisp}ov)</span></div>
    </div>
    ${ppLegal>=6?`<div style="background:rgba(255,255,255,.04);border:1px solid var(--border);border-radius:8px;padding:7px 14px;">
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:9px;font-weight:800;letter-spacing:2px;color:var(--silver);margin-bottom:1px;">POWERPLAY 1–6</div>
      <div style="font-family:'Bebas Neue',cursive;font-size:22px;color:var(--white);">${ppR}/${ppW}</div>
    </div>`:''}
    ${inn.extras?`<div style="background:rgba(255,255,255,.04);border:1px solid var(--border);border-radius:8px;padding:7px 14px;">
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:9px;font-weight:800;letter-spacing:2px;color:var(--silver);margin-bottom:1px;">EXTRAS</div>
      <div style="font-family:'Bebas Neue',cursive;font-size:22px;color:var(--white);">${inn.extras}</div>
    </div>`:''}
  </div>`;

  const overRows=overs.slice().reverse().map((blist,ri)=>{
    const ovNum=overs.length-ri;
    const dots=blist.map(_lpdBallHtml).join('');
    const ovR=blist.reduce((s,b)=>s+(b.runs||0),0);
    const ovW=blist.filter(b=>b.type==='wicket').length;
    return `<div class="lpd-over-row">
      <span class="lpd-over-lbl">OV ${ovNum}</span>
      <span style="display:inline-flex;flex-wrap:wrap;gap:3px;">${dots}</span>
      <span class="lpd-over-runs">${ovR}${ovW?` <span style="color:var(--red);font-size:11px;">(${ovW}W)</span>`:''}</span>
    </div>`;
  }).join('');

  return phasesHtml+`<div style="max-height:260px;overflow-y:auto;scrollbar-width:thin;scrollbar-color:var(--border) transparent;border-top:1px solid rgba(255,255,255,.06);padding-top:8px;">${overRows}</div>`;
}

function _lpdScorecardHtml(inn, batTeamMeta, bowlTeamMeta){
  const batters=inn.batters||{};
  const bowlers=inn.bowlers||{};
  const balls=inn.balls||[];
  const lbCount=balls.filter(_lpdLegal).length;
  const ovsDisp=Math.floor(lbCount/6)+'.'+( lbCount%6);

  const batEntries=Object.entries(batters);
  const batRows=batEntries.length
    ? batEntries.map(([n,b])=>{
        const sr=b.b>0?((b.r/b.b)*100).toFixed(1):'—';
        return `<tr>
          <td style="color:${b.out?'var(--silver)':'var(--white)'};">
            ${n}${b.out
              ?`<div style="font-size:10px;color:var(--silver);font-weight:400;font-family:'Barlow',sans-serif;">${b.dis||''}</div>`
              :`<span style="color:var(--green);font-size:10px;margin-left:4px;">★</span>`}
          </td>
          <td style="font-family:'Bebas Neue',cursive;font-size:17px;color:${b.out?'var(--white)':'var(--gold)'};">${b.r}</td>
          <td>${b.b}</td>
          <td style="color:var(--silver);">${sr}</td>
        </tr>`;
      }).join('')
    : `<tr><td colspan="4" style="color:var(--silver);padding:8px 0;">No batting data yet.</td></tr>`;

  const bowlEntries=Object.entries(bowlers);
  const bowlRows=bowlEntries.length
    ? bowlEntries.map(([n,bw])=>{
        const bwOv=Math.floor(bw.b/6)+'.'+(bw.b%6);
        const econ=bw.b>0?(bw.r/(bw.b/6)).toFixed(1):'—';
        return `<tr>
          <td>${n}</td>
          <td>${bwOv}</td>
          <td>${bw.r}</td>
          <td style="color:${bw.w>0?'var(--red)':'var(--white)'};">${bw.w}</td>
          <td style="color:var(--silver);">${econ}</td>
        </tr>`;
      }).join('')
    : `<tr><td colspan="5" style="color:var(--silver);padding:8px 0;">No bowling data yet.</td></tr>`;

  // fall of wickets
  let wktN=0;
  const fowChips=balls.reduce((chips,b,i)=>{
    if(b.type==='wicket'){
      wktN++;
      const runsAt=balls.slice(0,i+1).reduce((s,x)=>s+(x.runs||0),0);
      const lbAt=balls.slice(0,i+1).filter(_lpdLegal).length;
      chips.push(`<span class="lpd-fow-chip">${wktN}-${runsAt}<small>${Math.floor(lbAt/6)}.${lbAt%6}OV</small></span>`);
    }
    return chips;
  },[]);

  return `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
      <div style="width:26px;height:26px;border-radius:50%;background:${batTeamMeta.pri}33;border:2px solid ${batTeamMeta.pri};display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',cursive;font-size:10px;color:${batTeamMeta.sec};flex-shrink:0;">${ini(batTeamMeta.name)}</div>
      <span style="font-family:'Bebas Neue',cursive;font-size:20px;">${batTeamMeta.name}</span>
      <span style="font-family:'Bebas Neue',cursive;font-size:20px;color:var(--gold);">${inn.runs}/${inn.wickets}</span>
      <span style="font-size:12px;color:var(--silver);font-family:'Barlow Condensed',sans-serif;">(${ovsDisp} ov)</span>
    </div>
    <table class="lpd-sc-tbl">
      <thead><tr><th>Batter</th><th>R</th><th>B</th><th>SR</th></tr></thead>
      <tbody>${batRows}</tbody>
    </table>
    ${inn.extras?`<div style="font-size:11px;color:var(--silver);margin-bottom:8px;">Extras: ${inn.extras}</div>`:''}
    ${fowChips.length?`<div style="margin-bottom:12px;"><div style="font-family:'Barlow Condensed',sans-serif;font-size:9px;font-weight:800;letter-spacing:2px;color:var(--silver);margin-bottom:5px;">FALL OF WICKETS</div>${fowChips.join('')}</div>`:''}
    <div style="font-family:'Barlow Condensed',sans-serif;font-size:9px;font-weight:800;letter-spacing:2px;color:var(--silver);margin:8px 0 6px;">BOWLING — ${bowlTeamMeta.name}</div>
    <table class="lpd-sc-tbl">
      <thead><tr><th>Bowler</th><th>O</th><th>R</th><th>W</th><th>Econ</th></tr></thead>
      <tbody>${bowlRows}</tbody>
    </table>`;
}

function _lpdTeamsHtml(t1k, t2k, t1meta, t2meta, inn1, inn2){
  function col(tk, tmeta, batInn){
    const players=(TEAMS[tk]||{}).players||[];
    const batters=batInn.batters||{}; const bowlers=batInn.bowlers||{};
    const rows=players.map(p=>{
      const bat=batters[p.n]; const bowl=bowlers[p.n];
      const stat=bat?`${bat.r}(${bat.b})`:bowl?`${bowl.w}-${bowl.r}`:'';
      const rc=p.role==='BOWL'?'var(--purple)':p.role==='WK'?'#4CC9F0':p.role==='AR'?'var(--green)':'var(--gold)';
      return `<div class="lpd-player-row">
        <div class="lpd-player-av" style="background:${tmeta.pri}22;border:1px solid ${tmeta.pri}44;color:${tmeta.sec};">${ini(p.n)}</div>
        <div style="flex:1;min-width:0;">
          <div class="lpd-player-name">${p.n}</div>
          <div class="lpd-player-role" style="color:${rc};">${p.role}</div>
        </div>
        ${stat?`<div class="lpd-player-stat">${stat}</div>`:''}
      </div>`;
    }).join('');
    return `<div>
      <div style="font-family:'Bebas Neue',cursive;font-size:17px;display:flex;align-items:center;gap:8px;margin-bottom:10px;">
        <div style="width:22px;height:22px;border-radius:50%;background:${tmeta.pri}33;border:2px solid ${tmeta.pri};display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',cursive;font-size:9px;color:${tmeta.sec};flex-shrink:0;">${ini(tmeta.name)}</div>
        ${tmeta.name}
      </div>
      ${rows||`<div style="color:var(--silver);font-size:12px;">No squad data.</div>`}
    </div>`;
  }
  return `<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">${col(t1k,t1meta,inn1)}${col(t2k,t2meta,inn2)}</div>`;
}

function _lpdPartnershipHtml(inn, t1meta, t2meta){
  const balls=inn.balls||[];
  if(!balls.length) return `<div style="color:var(--silver);font-size:13px;padding:8px 0;">No partnership data yet.</div>`;
  const parts=[]; let a1='',a2='',cp={p1:'',p2:'',r:0,b:0,ex:0,r1:0,r2:0};
  for(const b of balls){
    if(b.type==='run'){
      if(!a1){a1=b.striker||'?';cp.p1=a1;}
      else if(!a2&&b.striker&&b.striker!==a1){a2=b.striker;cp.p2=a2;}
      cp.r+=b.runs;cp.b++;
      if(b.striker===a1)cp.r1+=b.runs; else cp.r2+=b.runs;
      if(b.runs%2!==0){const t=a1;a1=a2;a2=t;}
    } else if(b.type==='extra'){
      cp.r+=b.runs;cp.ex++;
      if(_lpdLegal(b)){cp.b++;if(b.runs%2!==0){const t=a1;a1=a2;a2=t;}}
    } else if(b.type==='wicket'){
      cp.b++;
      parts.push({...cp,out:b.striker,dis:b.dis});
      if(b.striker===a1){a1=a2;a2='';}else{a2='';}
      cp={p1:a1,p2:'',r:0,b:0,ex:0,r1:0,r2:0};
    }
  }
  if(cp.r>0||cp.b>0) parts.push({...cp,ongoing:true});
  if(!parts.length) return `<div style="color:var(--silver);font-size:13px;padding:8px 0;">No partnership data yet.</div>`;
  const html=parts.map(p=>{
    const p1pct=p.r>0?Math.round((p.r1/p.r)*100):50;
    return `<div class="lpd-part-row">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
        <div>
          <div style="font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:13px;">${p.p1||'?'} &amp; ${p.p2||'?'}</div>
          ${p.ex?`<div style="font-size:10px;color:var(--silver);">Extras: ${p.ex}</div>`:''}
        </div>
        <div style="text-align:right;">
          <div style="font-family:'Bebas Neue',cursive;font-size:18px;color:var(--gold);">${p.r}${p.ongoing?'*':''} <span style="font-size:12px;color:var(--silver);">(${p.b})</span></div>
          ${p.out?`<div style="font-size:10px;color:var(--red);">Out: ${p.out}</div>`:''}
        </div>
      </div>
      <div class="lpd-bar-bg">
        <div class="lpd-bar-a" style="width:${p1pct}%;"></div>
        <div class="lpd-bar-b" style="width:${100-p1pct}%;"></div>
      </div>
      <div style="display:flex;justify-content:space-between;font-family:'Barlow Condensed',sans-serif;font-size:10px;font-weight:700;margin-top:2px;">
        <span style="color:var(--red);">${p.p1||'?'} ${p.r1}</span>
        <span style="color:#4361EE;">${p.p2||'?'} ${p.r2}</span>
      </div>
    </div>`;
  }).join('');
  return `<div style="max-height:340px;overflow-y:auto;scrollbar-width:thin;scrollbar-color:var(--border) transparent;">${html}</div>`;
}

function _lpdWormHtml(inn1, inn2, t1meta, t2meta){
  function cumRuns(inn){
    const balls=inn.balls||[]; let lc=0,ovR=0; const totals=[];
    for(const b of balls){
      ovR+=b.runs||0;
      if(_lpdLegal(b)){lc++;if(lc%6===0){totals.push(ovR);ovR=0;}}
    }
    if(ovR>0)totals.push(ovR);
    let cum=0; return totals.map(r=>{cum+=r;return cum;});
  }
  const c1=cumRuns(inn1), c2=cumRuns(inn2);
  if(!c1.length&&!c2.length) return `<div style="color:var(--silver);font-size:13px;padding:8px 0;">No worm data yet.</div>`;
  const maxOv=Math.max(c1.length,c2.length,1);
  const maxR=Math.max(...c1,...c2,10);
  const W=560,H=170,pL=38,pR=12,pT=8,pB=26;
  const xs=(v)=>(pL+v*(W-pL-pR)/Math.max(maxOv-1,1)).toFixed(1);
  const ys=(v)=>(H-pB-v*(H-pT-pB)/maxR).toFixed(1);
  function path(pts,col){
    if(!pts.length)return'';
    const d=pts.map((v,i)=>`${i===0?'M':'L'}${xs(i)},${ys(v)}`).join(' ');
    return `<path d="${d}" fill="none" stroke="${col}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            ${pts.map((v,i)=>`<circle cx="${xs(i)}" cy="${ys(v)}" r="3" fill="${col}"/>`).join('')}`;
  }
  const yTicks=[0,Math.round(maxR/4),Math.round(maxR/2),Math.round(maxR*3/4),maxR];
  const yAxis=yTicks.map(t=>`<text x="${pL-4}" y="${(+ys(t)+4).toFixed(1)}" text-anchor="end" fill="rgba(255,255,255,.3)" font-size="9" font-family="'Barlow Condensed',sans-serif">${t}</text>`).join('');
  const xLabels=Array.from({length:Math.floor(maxOv/5)+1},(_,i)=>i*5).map(i=>`<text x="${xs(i)}" y="${H-pB+14}" text-anchor="middle" fill="rgba(255,255,255,.3)" font-size="9" font-family="'Barlow Condensed',sans-serif">${i}</text>`).join('');
  const gridLines=yTicks.map(t=>`<line x1="${pL}" y1="${ys(t)}" x2="${W-pR}" y2="${ys(t)}" stroke="rgba(255,255,255,.06)" stroke-width="1"/>`).join('');
  return `
    <div style="display:flex;gap:14px;margin-bottom:10px;flex-wrap:wrap;">
      <div style="display:flex;align-items:center;gap:6px;font-family:'Barlow Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:1px;">
        <span style="display:inline-block;width:18px;height:3px;background:var(--red);border-radius:2px;"></span>${t1meta.name}
      </div>
      ${c2.length?`<div style="display:flex;align-items:center;gap:6px;font-family:'Barlow Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:1px;">
        <span style="display:inline-block;width:18px;height:3px;background:#4361EE;border-radius:2px;"></span>${t2meta.name}
      </div>`:''}
    </div>
    <svg width="100%" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="border-radius:8px;">
      ${gridLines}
      <line x1="${pL}" y1="${pT}" x2="${pL}" y2="${H-pB}" stroke="rgba(255,255,255,.15)" stroke-width="1"/>
      <line x1="${pL}" y1="${H-pB}" x2="${W-pR}" y2="${H-pB}" stroke="rgba(255,255,255,.15)" stroke-width="1"/>
      ${yAxis}${xLabels}
      ${path(c1,'#E63946')}
      ${c2.length?path(c2,'#4361EE'):''}
    </svg>
    <div style="text-align:center;font-size:9px;color:rgba(255,255,255,.25);font-family:'Barlow Condensed',sans-serif;letter-spacing:1px;margin-top:4px;">OVERS</div>`;
}

// ─── live banner render ────────────────────────────────────────────────────────
function _renderInProgressBanner(){
  const session = _loadLiveSession();
  const containers = [
    document.getElementById('inProgressMatchBanner'),
    document.getElementById('inProgressMatchBannerHome'),
  ].filter(Boolean);
  if(!containers.length) return;
  if(!session || !_hasLiveSession()){
    containers.forEach(c=>c.style.display='none');
    return;
  }
  const t1 = TEAM_META[session.t1k]||{name:session.t1k||'Team 1',pri:'#E63946',sec:'#fff'};
  const t2 = TEAM_META[session.t2k]||{name:session.t2k||'Team 2',pri:'#4361EE',sec:'#fff'};
  const inn1 = session.liveInnings?.[1]||{runs:0,wickets:0,balls:[],batters:{},bowlers:{},extras:0};
  const inn2 = session.liveInnings?.[2]||{runs:0,wickets:0,balls:[],batters:{},bowlers:{},extras:0};
  const lb1 = inn1.balls.filter(_lpdLegal).length;
  const lb2 = inn2.balls.filter(_lpdLegal).length;
  const ov1 = Math.floor(lb1/6)+'.'+( lb1%6);
  const ov2 = Math.floor(lb2/6)+'.'+( lb2%6);
  const curInn = session.curInn||1;
  const ago = Math.round((Date.now()-session.timestamp)/60000);
  const agoStr = ago<1?'just now':ago<60?`${ago}m ago`:`${Math.floor(ago/60)}h ago`;
  const curInnData = session.liveInnings?.[curInn]||{balls:[]};
  const target = curInn===2&&inn1.runs>0 ? inn1.runs+1 : null;
  const lbCur = curInnData.balls.filter(_lpdLegal).length;
  const needRuns = target ? Math.max(0,target-inn2.runs) : null;
  const ballsLeft = Math.max(0,120-lbCur);

  const recentBalls = curInnData.balls.slice(-6).map(_lpdBallHtml).join('');

  // build popup content
  const comm1 = _lpdCommentaryHtml(inn1);
  const comm2 = _lpdCommentaryHtml(inn2);
  const sc1   = _lpdScorecardHtml(inn1, t1, t2);
  const sc2   = _lpdScorecardHtml(inn2, t2, t1);
  const teams = _lpdTeamsHtml(session.t1k, session.t2k, t1, t2, inn1, inn2);
  const part1 = _lpdPartnershipHtml(inn1, t1, t2);
  const part2 = _lpdPartnershipHtml(inn2, t2, t1);
  const worm  = _lpdWormHtml(inn1, inn2, t1, t2);

  // use a unique id per container so two banners (home + matches) don't clash
  containers.forEach((c,ci)=>{
    const pid = 'lpdrop_'+ci;
    const html = `
    <div class="live-banner-wrap">
      <div class="live-banner-inner" style="border-radius:14px;cursor:pointer;" onclick="lpdToggle('${pid}',this)">
        <div class="live-banner-left">
          <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:10px;">
            <div class="live-pill"><span class="live-dot"></span>LIVE</div>
            <div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;color:var(--silver);letter-spacing:1px;">INN ${curInn} · ${session.venue||'LPL Arena'} · ${agoStr}</div>
            ${target?`<div style="font-family:'Barlow Condensed',sans-serif;font-size:11px;color:var(--gold);letter-spacing:1px;background:rgba(245,197,24,.08);border:1px solid rgba(245,197,24,.2);border-radius:20px;padding:2px 10px;">Need ${needRuns} off ${ballsLeft}b</div>`:''}
          </div>
          <div class="live-teams-row">
            <div class="live-team-chip">
              <div class="live-av" style="background:${t1.pri}33;border:2px solid ${t1.pri};color:${t1.sec}">${ini(t1.name)}</div>
              <div>
                <div class="live-team-name">${t1.name}</div>
                <div style="font-family:'Bebas Neue',cursive;font-size:24px;color:var(--gold);">${inn1.runs}/${inn1.wickets}<span style="font-size:12px;color:var(--silver);font-family:'Barlow Condensed',sans-serif;margin-left:6px;">(${ov1} ov)</span></div>
              </div>
            </div>
            <div class="live-vs">VS</div>
            <div class="live-team-chip">
              <div class="live-av" style="background:${t2.pri}33;border:2px solid ${t2.pri};color:${t2.sec}">${ini(t2.name)}</div>
              <div>
                <div class="live-team-name">${t2.name}</div>
                <div style="font-family:'Bebas Neue',cursive;font-size:24px;color:${inn2.runs>0?'var(--gold)':'var(--silver)'};">${inn2.runs}/${inn2.wickets}<span style="font-size:12px;color:var(--silver);font-family:'Barlow Condensed',sans-serif;margin-left:6px;">${inn2.runs>0?`(${ov2} ov)`:'yet to bat'}</span></div>
              </div>
            </div>
          </div>
          ${recentBalls?`<div style="display:flex;gap:4px;margin-top:10px;align-items:center;">
            <span style="font-size:10px;color:var(--silver);font-family:'Barlow Condensed',sans-serif;letter-spacing:1px;margin-right:4px;">RECENT</span>
            ${recentBalls}
          </div>`:''}
        </div>
        <div class="live-banner-right">
          <div style="display:flex;align-items:center;gap:6px;background:rgba(230,57,70,.12);border:1px solid rgba(230,57,70,.3);border-radius:6px;padding:6px 14px;font-family:'Barlow Condensed',sans-serif;font-size:11px;font-weight:800;letter-spacing:1.5px;color:var(--red);">
            DETAILS <span class="lpd-chevron" id="${pid}_chev">▼</span>
          </div>
          <button class="live-resume-btn" onclick="event.stopPropagation();resumeLiveMatch()">▶ Resume</button>
          <button class="live-discard-btn" onclick="event.stopPropagation();discardLiveMatch()">✕ Discard</button>
        </div>
      </div>
      <div class="live-popup-drop" id="${pid}">
        <div class="live-popup-card">
          <div class="lpd-tab-bar" id="${pid}_bar">
            <button class="lpd-tab lpd-active" onclick="lpdTab(event,'${pid}',0)">Commentary</button>
            <button class="lpd-tab" onclick="lpdTab(event,'${pid}',1)">Scorecard</button>
            <button class="lpd-tab" onclick="lpdTab(event,'${pid}',2)">Teams</button>
            <button class="lpd-tab" onclick="lpdTab(event,'${pid}',3)">Worm</button>
            <button class="lpd-tab" onclick="lpdTab(event,'${pid}',4)">Partnership</button>
          </div>
          <div class="lpd-panel lpd-active" id="${pid}_p0">
            <div style="display:flex;gap:6px;margin-bottom:14px;">
              <button class="lpd-inn-btn lpd-inn-active" id="${pid}_cb1" onclick="lpdInn(event,'${pid}','c',1)">1st INN</button>
              <button class="lpd-inn-btn" id="${pid}_cb2" onclick="lpdInn(event,'${pid}','c',2)">2nd INN</button>
            </div>
            <div id="${pid}_c1">${comm1}</div>
            <div id="${pid}_c2" style="display:none;">${comm2}</div>
          </div>
          <div class="lpd-panel" id="${pid}_p1">
            <div style="display:flex;gap:6px;margin-bottom:14px;">
              <button class="lpd-inn-btn lpd-inn-active" id="${pid}_sb1" onclick="lpdInn(event,'${pid}','s',1)">1st INN</button>
              <button class="lpd-inn-btn" id="${pid}_sb2" onclick="lpdInn(event,'${pid}','s',2)">2nd INN</button>
            </div>
            <div id="${pid}_s1">${sc1}</div>
            <div id="${pid}_s2" style="display:none;">${sc2}</div>
          </div>
          <div class="lpd-panel" id="${pid}_p2">${teams}</div>
          <div class="lpd-panel" id="${pid}_p3">${worm}</div>
          <div class="lpd-panel" id="${pid}_p4">
            <div style="display:flex;gap:6px;margin-bottom:14px;">
              <button class="lpd-inn-btn lpd-inn-active" id="${pid}_pb1" onclick="lpdInn(event,'${pid}','p',1)">1st INN</button>
              <button class="lpd-inn-btn" id="${pid}_pb2" onclick="lpdInn(event,'${pid}','p',2)">2nd INN</button>
            </div>
            <div id="${pid}_p1_">${part1}</div>
            <div id="${pid}_p2_" style="display:none;">${part2}</div>
          </div>
        </div>
      </div>
    </div>`;
    c.style.display='block';
    c.innerHTML=html;
  });
}

function lpdToggle(pid, bannerEl){
  const drop=document.getElementById(pid);
  if(!drop) return;
  const opening=!drop.classList.contains('lpd-open');
  drop.classList.toggle('lpd-open', opening);
  bannerEl.style.borderRadius = opening ? '14px 14px 0 0' : '14px';
  const chev=document.getElementById(pid+'_chev');
  if(chev) chev.classList.toggle('open', opening);
}

function lpdTab(ev, pid, idx){
  ev.stopPropagation();
  const bar=document.getElementById(pid+'_bar');
  if(!bar) return;
  bar.querySelectorAll('.lpd-tab').forEach((t,i)=>t.classList.toggle('lpd-active', i===idx));
  for(let i=0;i<5;i++){
    const p=document.getElementById(pid+'_p'+i);
    if(p) p.classList.toggle('lpd-active', i===idx);
  }
}

function lpdInn(ev, pid, prefix, inn){
  ev.stopPropagation();
  [1,2].forEach(i=>{
    // content panels
    const d=document.getElementById(pid+'_'+prefix+i+(prefix==='p'?'_':''));
    if(d) d.style.display=i===inn?'block':'none';
    // buttons
    const b=document.getElementById(pid+'_'+prefix+'b'+i);
    if(b) b.classList.toggle('lpd-inn-active', i===inn);
  });
}

function resumeLiveMatch(){
  if(!AUTHENTICATED){ openAdminLogin(); return; }
  const session = _loadLiveSession();
  if(!session) return;
  openAdminPanel();
  setTimeout(()=>{
    selectAdminSection('match');
    admSelectMode('live');
    // Only restore UI if in-memory state is empty (e.g. after page reload)
    const alreadyLoaded = _liveInnings[1].balls.length > 0 || _liveInnings[2].balls.length > 0;
    if(!alreadyLoaded){
      _restoreLiveSession(session);
    } else {
      // State already in memory (restored at startup), just update display
      setLiveInnings(session.curInn || 1);
      setTimeout(()=>{
        const strEl = document.getElementById('liveStriker');
        const nsEl  = document.getElementById('liveNonStriker');
        const bowEl = document.getElementById('liveBowler');
        if(strEl && session.striker)    strEl.value = session.striker;
        if(nsEl  && session.nonStriker) nsEl.value  = session.nonStriker;
        if(bowEl && session.bowler)     bowEl.value = session.bowler;
        _updateLiveDisplay();
        _updateAutosaveStatus();
      }, 100);
    }
    const banner = document.getElementById('liveDraftRestoreBanner');
    if(banner) banner.style.display = 'none';
  }, 150);
}

function discardLiveMatch(){
  if(!confirm('Discard this in-progress match? All ball-by-ball data will be permanently lost.')) return;
  _clearLiveSession();
  _liveInnings = { 1:{ balls:[], batters:{}, bowlers:{}, runs:0, wickets:0, extras:0 }, 2:{ balls:[], batters:{}, bowlers:{}, runs:0, wickets:0, extras:0 } };
  _overPlan = { 1: Array(20).fill(''), 2: Array(20).fill('') };
  _live.inn = 1;
  _renderInProgressBanner();
  // Also hide the in-pane draft banner if visible
  const inlineBanner = document.getElementById('liveDraftRestoreBanner');
  if(inlineBanner) inlineBanner.style.display='none';
}

// ═══════════════════════════════════════════ SMART PASTE
// Parses pasted scorecards locally — no CORS issues, works offline.
// Supports: WhatsApp-style, tab/pipe separated, plain-text block formats.

function runSmartPaste(){
  const input = document.getElementById('pasteInput').value.trim();
  const status = document.getElementById('pasteStatus');
  if(!input){ alert('Please paste a scorecard first.'); return; }

  status.style.display = 'block';
  status.innerHTML = '<span style="color:var(--gold);">Parsing scorecard…</span>';
  document.getElementById('pasteApplyRow').style.display = 'none';
  document.getElementById('pasteParsePreview').style.display = 'none';

  const t1k = document.getElementById('ef_t1').value;
  const t2k = document.getElementById('ef_t2').value;

  let parsed = null;
  try { parsed = smartParseScorecard(input, t1k, t2k); } catch(e){ parsed = null; }

  if(!parsed || !parsed.innings || !parsed.innings.length){
    status.innerHTML = `<span style="color:var(--red);">⚠ Could not parse — try the format guide below.</span>
      <div style="margin-top:12px;font-size:12px;color:var(--silver);line-height:1.8;">
        <strong style="color:var(--white);">Supported formats:</strong><br>
        <strong>1. Tab/column:</strong> Name  84  36  c X b Y<br>
        <strong>2. Pipe-separated:</strong> Name | 84 | 36 | c X b Y<br>
        <strong>3. Scorecard block:</strong> BATTING then BOWLING sections<br>
        <strong>4. Line per batter:</strong> Sachin 78 (30) c A b B<br>
        <strong>Bowling:</strong> Name 4-0-42-2 or Name 4 42 2
      </div>`;
    return;
  }

  window._parsedPaste = parsed;
  _showPastePreview(parsed);
  status.innerHTML = `<span style="color:var(--green);">✓ Parsed ${parsed.innings.length} innings. Review below then apply.</span>`;
  document.getElementById('pasteApplyRow').style.display = 'block';
  document.getElementById('pasteParsePreview').style.display = 'block';
}

function _showPastePreview(parsed){
  const preview = document.getElementById('pasteParsePreview');
  preview.innerHTML = `<div class="adm-preview-box">
    <div class="adm-section-label" style="margin-bottom:12px;">Parsed Preview</div>
    ${(parsed.innings||[]).map((inn,i)=>{
      const tm = TEAM_META[inn.team];
      return `<div style="margin-bottom:14px;padding-bottom:14px;border-bottom:1px solid var(--border);">
        <div style="font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:15px;color:var(--white);">
          ${i===0?'1st':'2nd'} Innings — ${tm?tm.name:inn.team}
          <span style="font-family:'Bebas Neue',cursive;font-size:22px;color:var(--gold);margin-left:12px;">${inn.total}</span>
          <span style="font-size:11px;color:var(--silver);">(${inn.overs} ov · extras ${inn.extras})</span>
        </div>
        <div style="font-size:11px;color:var(--silver);margin-top:6px;">
          ${(inn.batters||[]).slice(0,5).map(b=>`${b.n} ${b.r}(${b.b})`).join(' · ')}${inn.batters.length>5?` · +${inn.batters.length-5} more`:''}
        </div>
        <div style="font-size:11px;color:var(--silver);margin-top:3px;">
          Bowlers: ${(inn.bowlers||[]).slice(0,4).map(b=>`${b.n} ${b.w}/${b.r}`).join(' · ')}${inn.bowlers.length>4?` · +${inn.bowlers.length-4} more`:''}
        </div>
      </div>`;
    }).join('')}
    ${parsed.winner?`<div style="color:var(--green);font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:14px;">
      Winner: ${TEAM_META[parsed.winner]?TEAM_META[parsed.winner].name:parsed.winner} by ${parsed.margin}
    </div>`:'<div style="color:var(--silver);font-size:12px;">Winner/margin not detected — fill in Result tab manually.</div>'}
  </div>`;
}

// ── Core parser — handles multiple common formats ──────────────────────────
function smartParseScorecard(raw, t1k, t2k){
  const lines = raw.split('\n').map(l=>l.trim()).filter(Boolean);
  const innings = [];
  let currentInn = null;
  let mode = null; // 'bat' | 'bowl'
  let winner = '', margin = '', potm = '', potmDetail = '';

  const teamKeys = Object.keys(TEAM_META);

  // Helper: detect team from a line
  function detectTeam(line){
    const u = line.toUpperCase();
    for(const k of teamKeys){
      const name = TEAM_META[k].name.toUpperCase();
      if(u.includes(k) || u.includes(name)) return k;
    }
    return null;
  }

  // Helper: parse a batting line
  // Formats: "Name 84 36 c X b Y" | "Name | 84 | 36 | dis" | "Name	84	36	dis"
  function parseBatLine(line){
    // Replace pipes/tabs with spaces-normalised
    const norm = line.replace(/\|/g,' | ').replace(/\t/g,' ');
    // Try pipe format first
    const pipeParts = line.split('|').map(s=>s.trim());
    if(pipeParts.length >= 3){
      const n = pipeParts[0]; const r = parseInt(pipeParts[1],10); const b = parseInt(pipeParts[2],10);
      const dis = pipeParts[3]||'not out'; const notout = /\*|not out|n\.o/i.test(dis)||pipeParts[4]&&/yes/i.test(pipeParts[4]);
      if(n && !isNaN(r) && !isNaN(b)) return {n,r,b,dis,notout,sr:b>0?+(r/b*100).toFixed(1):0};
    }
    // "Name 84 (36) c X b Y" — parenthesised balls
    const m1 = norm.match(/^([A-Za-z][\w\s\.]+?)\s+(\d+)\s*\((\d+)\)\s*(.*)?$/);
    if(m1){
      const n=m1[1].trim(), r=+m1[2], b=+m1[3], dis=(m1[4]||'not out').trim();
      const notout = /\*|not out|n\.o/i.test(n+dis)||r===+n;
      return {n:n.replace(/\*$/,'').trim(), r, b, dis:dis||'not out', notout, sr:b>0?+(r/b*100).toFixed(1):0};
    }
    // "Name 84 36 c X b Y" — space separated
    const tokens = norm.split(/\s+/);
    if(tokens.length>=3){
      // Find where name ends and numbers begin
      let ni=0;
      while(ni<tokens.length && isNaN(parseInt(tokens[ni],10))) ni++;
      if(ni>0 && ni<tokens.length-1){
        const n = tokens.slice(0,ni).join(' ').replace(/\*$/,'').trim();
        const r = parseInt(tokens[ni],10);
        const b = parseInt(tokens[ni+1],10);
        const dis = tokens.slice(ni+2).join(' ')||'not out';
        const notout = /\*|not out|n\.o/i.test(n+' '+dis);
        if(!isNaN(r)&&!isNaN(b)) return {n, r, b, dis, notout, sr:b>0?+(r/b*100).toFixed(1):0};
      }
    }
    return null;
  }

  // Helper: parse a bowling line
  // Formats: "Name 4-0-42-2" | "Name 4 42 2" | "Name | 4 | 42 | 2"
  function parseBowlLine(line){
    const pipeParts = line.split('|').map(s=>s.trim());
    if(pipeParts.length>=4){
      const n=pipeParts[0],o=pipeParts[1],r=parseInt(pipeParts[2],10),w=parseInt(pipeParts[3],10);
      if(n&&!isNaN(r)&&!isNaN(w)) return {n,o:String(o),r,w,econ:parseFloat(o)>0?+(r/parseFloat(o)).toFixed(2):0};
    }
    // "Name 4-0-42-2"
    const m2 = line.match(/^([A-Za-z][\w\s\.]+?)\s+(\d+)-(\d+)-(\d+)-(\d+)/);
    if(m2){ const [,n,o,,r,w]=[...m2]; return {n:n.trim(),o,r:+r,w:+w,econ:+o>0?+(+r/+o).toFixed(2):0}; }
    // "Name 4 42 2"
    const tokens = line.split(/\s+/);
    let ni=0;
    while(ni<tokens.length && isNaN(parseInt(tokens[ni],10))) ni++;
    if(ni>0 && ni+1<tokens.length){
      const n=tokens.slice(0,ni).join(' ').trim();
      const o=tokens[ni]; const r=parseInt(tokens[ni+1],10); const w=parseInt(tokens[ni+2]||'0',10);
      if(!isNaN(r)) return {n,o:String(o),r,w,econ:parseFloat(o)>0?+(r/parseFloat(o)).toFixed(2):0};
    }
    return null;
  }

  function finaliseInn(){
    if(!currentInn) return;
    // Auto-assign team from t1k/t2k based on which innings
    if(!currentInn.team) currentInn.team = innings.length===0 ? (t1k||'') : (t2k||'');
    // Derive total from batters if not parsed
    if(!currentInn.total){
      const runs = currentInn.batters.reduce((s,b)=>s+b.r,0) + currentInn.extras;
      const wkts = currentInn.batters.filter(b=>!b.notout).length;
      currentInn.total = `${runs}/${wkts}`;
    }
    innings.push(currentInn);
    currentInn = null;
    mode = null;
  }

  for(const line of lines){
    const u = line.toUpperCase();

    // ── Section headers ──
    if(/^(1ST|FIRST)\s*(INNINGS?|INN)/i.test(line) || /INNINGS?\s*[:\-]?\s*1/i.test(line)){
      finaliseInn();
      currentInn = {team:t1k||'', batters:[], bowlers:[], extras:0, overs:'20', total:''};
      mode='bat'; continue;
    }
    if(/^(2ND|SECOND)\s*(INNINGS?|INN)/i.test(line) || /INNINGS?\s*[:\-]?\s*2/i.test(line)){
      finaliseInn();
      currentInn = {team:t2k||'', batters:[], bowlers:[], extras:0, overs:'20', total:''};
      mode='bat'; continue;
    }
    if(/^BATTING/i.test(line)){ mode='bat'; continue; }
    if(/^BOWLING/i.test(line)){ mode='bowl'; continue; }

    // ── Team detection ──
    const detectedTeam = detectTeam(line);
    if(detectedTeam && /innings?|bat/i.test(line)){
      finaliseInn();
      currentInn = {team:detectedTeam, batters:[], bowlers:[], extras:0, overs:'20', total:''};
      mode='bat'; continue;
    }

    // ── Create first innings implicitly if none exists ──
    if(!currentInn && line.length>0){
      currentInn = {team:t1k||'', batters:[], bowlers:[], extras:0, overs:'20', total:''};
      mode='bat';
    }
    if(!currentInn) continue;

    // ── Team name mid-block (e.g. "RCB 320/6 (20 ov)") ──
    const totalM = line.match(/([A-Z]{2,5})\s+(\d+)\/(\d+)\s*\(([\d.]+)/);
    if(totalM && TEAM_META[totalM[1]]){
      currentInn.team  = totalM[1];
      currentInn.total = `${totalM[2]}/${totalM[3]}`;
      currentInn.overs = totalM[4];
      continue;
    }
    const total2M = line.match(/^(?:total|score)?[:\s]*(\d+)\/(\d+)\s*(?:\(([\d.]+)\s*ov)?/i);
    if(total2M && !line.match(/^[A-Za-z].*\d+.*\d+/)){
      currentInn.total = `${total2M[1]}/${total2M[2]}`;
      if(total2M[3]) currentInn.overs = total2M[3];
      continue;
    }

    // ── Extras ──
    const exM = line.match(/^extras?[:\s]*(\d+)/i);
    if(exM){ currentInn.extras = parseInt(exM[1],10); continue; }

    // ── Overs ──
    const ovM = line.match(/^overs?[:\s]*([\d.]+)/i);
    if(ovM){ currentInn.overs = ovM[1]; continue; }

    // ── Winner / Result ──
    if(/won by/i.test(line)){
      const wm = line.match(/([A-Z]{2,5})\s+won by\s+(.+)/i);
      if(wm && TEAM_META[wm[1].toUpperCase()]){ winner=wm[1].toUpperCase(); margin=wm[2].trim(); }
      else {
        for(const k of teamKeys){
          if(line.toUpperCase().includes(k)){ winner=k; break; }
        }
        const bym = line.match(/won by\s+(.+)/i);
        if(bym) margin=bym[1].trim();
      }
      continue;
    }
    if(/^potm|player of|man of/i.test(line)){
      const pm = line.match(/[:–\-]\s*(.+)/);
      if(pm) potm = pm[1].split('(')[0].trim();
      continue;
    }

    // ── Bowling section auto-detect ──
    // A line like "4-0-42-2" at start likely means bowling
    if(/^[A-Za-z].*\d+[-\s]\d+[-\s]\d+[-\s]\d+/.test(line) && mode!=='bat'){
      mode='bowl';
    }

    if(mode==='bat'){
      // Skip obvious header rows
      if(/^batter|^name|^player/i.test(line)) continue;
      const b = parseBatLine(line);
      if(b && b.n.length>1) currentInn.batters.push(b);
    } else if(mode==='bowl'){
      if(/^bowler|^name|^player/i.test(line)) continue;
      const bw = parseBowlLine(line);
      if(bw && bw.n.length>1) currentInn.bowlers.push(bw);
    }
  }
  finaliseInn();

  // Auto-determine winner from run totals if not found in text
  if(!winner && innings.length===2){
    const r1 = parseInt((innings[0].total||'0').split('/')[0],10)||0;
    const r2 = parseInt((innings[1].total||'0').split('/')[0],10)||0;
    const w1 = parseInt((innings[0].total||'0').split('/')[1]||'10',10);
    const w2 = parseInt((innings[1].total||'0').split('/')[1]||'10',10);
    if(r2 > r1){
      winner = innings[1].team;
      margin = `${10-w2} wicket${10-w2!==1?'s':''}`;
    } else if(r1 > r2){
      winner = innings[0].team;
      margin = `${r1-r2} run${r1-r2!==1?'s':''}`;
    } else {
      margin = 'tie';
    }
  }

  return { innings, winner, margin, potm, potmDetail };
}

function applyPasteToForm(){
  const parsed=window._parsedPaste;
  if(!parsed||!parsed.innings){alert('No parsed data. Run smart paste first.');return;}
  loadParsedMatchIntoManual(parsed);
  if(parsed.winner){document.getElementById('ef_winner').value=parsed.winner||'';}
  if(parsed.margin){document.getElementById('ef_margin').value=parsed.margin||'';}
  if(parsed.potm){document.getElementById('ef_potm').value=parsed.potm||'';}
  if(parsed.potmDetail){document.getElementById('ef_potmdetail').value=parsed.potmDetail||'';}
  admSelectMode('quick');
  _setEntryStep(3);
  alert('Scorecard applied! Review the innings and result before saving.');
}

function loadParsedMatchIntoManualSecondary(parsed){
  const fixture=getNextFixture();
  if(fixture){populateEntryFromFixture(fixture);}
  (parsed.innings||[]).forEach((inn,idx)=>{
    const innId=idx===0?'inn1':'inn2';
    const bat=document.getElementById(innId+'_bat');
    const bowl=document.getElementById(innId+'_bowl');
    if(!bat||!bowl)return;
    bat.innerHTML=`<div class="ebat-head"><span>Batter</span><span>Runs</span><span>Balls</span><span>Dismissal</span><span>SR / N.O.</span><span></span></div>`;
    bowl.innerHTML=`<div class="ebowl-head"><span>Bowler</span><span>Overs</span><span>Runs</span><span>Wkts</span><span></span></div>`;
    (inn.batters||[]).forEach(b=>{
      _addBatRow(innId);
      const row=bat.lastElementChild;
      row.querySelector('.bname-inp').value=b.n||'';
      row.querySelector('.brun-inp').value=b.r||0;
      row.querySelector('.bball-inp').value=b.b||0;
      row.querySelector('.bdis-inp').value=b.dis||'';
      row.querySelector('.notout-cb').checked=!!b.notout;
      _calcSR(row);
    });
    (inn.bowlers||[]).forEach(b=>{
      _addBowlRow(innId);
      const row=bowl.lastElementChild;
      row.querySelector('.bname-inp').value=b.n||'';
      row.querySelector('.bov-inp').value=b.o||'';
      row.querySelector('.brun-inp').value=b.r||0;
      row.querySelector('.bwkt-inp').value=b.w||0;
    });
    document.getElementById(innId+'_extras').value=inn.extras||0;
    document.getElementById(innId+'_overs').value=inn.overs||'20';
    updateInnTotals(innId);
  });
}

// ═══════════════════════════════════════════ SMART PASTE GUIDE TOGGLE
function togglePasteGuide(){
  const panel = document.getElementById('pasteGuidePanel');
  const btn   = document.getElementById('pasteGuideBtn');
  const open  = panel.style.display === 'none';
  panel.style.display = open ? 'block' : 'none';
  btn.textContent = open ? '📖 Hide Format Guide' : '📖 Show Format Guide';
}

// ═══════════════════════════════════════════ AUTO-FILL RESULT
// Called when entering Step 3 — detects winner & margin from innings data
let _autoFillData = null;

function _buildResultPreview(){
  updateInnTotals('inn1');
  updateInnTotals('inn2');
  const t1k=document.getElementById('ef_t1').value;
  const t2k=document.getElementById('ef_t2').value;
  const t1=TEAM_META[t1k]||{}, t2=TEAM_META[t2k]||{};
  const inn1disp = (document.getElementById('inn1_total_disp').value||'—');
  const inn2disp = (document.getElementById('inn2_total_disp').value||'—');
  const inn1ov = document.getElementById('inn1_overs').value||'20';
  const inn2ov = document.getElementById('inn2_overs').value||'20';

  // Auto-detect winner from parsed totals
  _autoFillData = null;
  const r1 = parseInt((inn1disp).split('/')[0])||0;
  const r2 = parseInt((inn2disp).split('/')[0])||0;
  const w2 = parseInt((inn2disp).split('/')[1])||0;
  const banner = document.getElementById('admAutoFillBanner');
  const msg    = document.getElementById('admAutoFillMsg');

  if(r1>0 || r2>0){
    let autoWinner='', autoMargin='';
    if(r2 > r1){
      autoWinner = t2k;
      autoMargin = `${10-w2} wicket${10-w2!==1?'s':''}`;
    } else if(r1 > r2){
      autoWinner = t1k;
      autoMargin = `${r1-r2} run${r1-r2!==1?'s':''}`;
    } else {
      autoMargin = 'tie';
    }
    if(autoWinner || autoMargin==='tie'){
      _autoFillData = {winner:autoWinner, margin:autoMargin};
      const winName = autoWinner ? (TEAM_META[autoWinner]?.name||autoWinner) : 'Tie';
      msg.textContent = autoMargin==='tie'
        ? `Tie detected — ${inn1disp} vs ${inn2disp}`
        : `Auto-detected: ${winName} won by ${autoMargin} (${inn1disp} vs ${inn2disp})`;
      banner.style.display = 'flex';
    } else {
      banner.style.display = 'none';
    }
  } else {
    banner.style.display = 'none';
  }

  // Populate POTM datalist from both teams' players
  const potmDl = document.getElementById('potm_dl');
  if(potmDl){
    const allPlayers = [
      ...(TEAMS[t1k]?.players||[]).map(p=>p.n),
      ...(TEAMS[t2k]?.players||[]).map(p=>p.n)
    ];
    potmDl.innerHTML = allPlayers.map(n=>`<option value="${n}">`).join('');
  }

  document.getElementById('entry_preview').innerHTML=`
    <div style="font-family:'Barlow Condensed',sans-serif;font-size:12px;font-weight:800;letter-spacing:2px;color:var(--gold);text-transform:uppercase;margin-bottom:10px;">Scorecard Summary</div>
    <div style="display:flex;align-items:center;gap:24px;flex-wrap:wrap;">
      <div><span style="font-family:'Bebas Neue',cursive;font-size:22px;color:var(--white)">${t1.name||t1k}</span>
        <span style="font-family:'Bebas Neue',cursive;font-size:20px;color:var(--gold);margin-left:10px">${inn1disp}</span>
        <span style="font-size:11px;color:var(--silver);margin-left:4px">(${inn1ov} ov)</span>
      </div>
      <div style="font-family:'Bebas Neue',cursive;font-size:16px;color:var(--silver)">vs</div>
      <div><span style="font-family:'Bebas Neue',cursive;font-size:22px;color:var(--white)">${t2.name||t2k}</span>
        <span style="font-family:'Bebas Neue',cursive;font-size:20px;color:var(--gold);margin-left:10px">${inn2disp}</span>
        <span style="font-size:11px;color:var(--silver);margin-left:4px">(${inn2ov} ov)</span>
      </div>
    </div>
    <div style="margin-top:8px;font-size:11px;color:var(--silver)">Select the winner and fill in POTM below to save.</div>`;
}

function applyAutoFill(){
  if(!_autoFillData) return;
  if(_autoFillData.winner) document.getElementById('ef_winner').value = _autoFillData.winner;
  if(_autoFillData.margin) document.getElementById('ef_margin').value = _autoFillData.margin;
  document.getElementById('admAutoFillBanner').style.display = 'none';
}

// ═══════════════════════════════════════════ SEASON STATUS CHECK
function isSeasonInProgress(){
  // Season is "in progress" if at least 1 result exists AND fixtures remain
  return RESULTS.length > 0 && FIXTURES.length > 0;
}

// ═══════════════════════════════════════════ TEAM MANAGER

function renderAdminTeams(){
  const list = document.getElementById('admTeamList');
  if(!list) return;
  list.innerHTML = Object.entries(TEAMS).map(([k,t])=>`
    <div class="adm-card" style="padding:16px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <div style="width:44px;height:44px;border-radius:50%;background:${t.pri}33;border:2px solid ${t.pri};color:${t.sec};display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',cursive;font-size:16px;flex-shrink:0;">${k}</div>
      <div style="flex:1;min-width:160px;">
        <div style="font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:16px;">${t.name}${t.women?' <span style="font-size:10px;background:rgba(255,255,255,.15);padding:1px 6px;border-radius:8px;margin-left:4px;">W</span>':''}</div>
        <div style="font-size:11px;color:var(--silver);margin-top:2px;">C: ${t.cap||'—'} · VC: ${t.vc||'—'} · ${t.players.length} players</div>
      </div>
      <div style="display:flex;gap:10px;align-items:center;">
        <span style="display:inline-block;width:18px;height:18px;border-radius:3px;background:${t.pri};border:1px solid rgba(255,255,255,.2);"></span>
        <span style="display:inline-block;width:18px;height:18px;border-radius:3px;background:${t.sec};border:1px solid rgba(255,255,255,.2);"></span>
      </div>
      <button class="adm-ghost-btn" onclick="openEditTeam('${k}')">Edit</button>
    </div>`).join('');

  // Season gate for adding teams
  const inProgress = isSeasonInProgress();
  const addCard  = document.getElementById('admAddTeamCard');
  const addBtn   = document.getElementById('admAddTeamBtn');
  const warning  = document.getElementById('admTeamSeasonWarning');
  if(addCard && addBtn && warning){
    if(inProgress){
      addBtn.disabled = true;
      addBtn.style.opacity = '0.4';
      warning.style.display = 'block';
    } else {
      addBtn.disabled = false;
      addBtn.style.opacity = '';
      warning.style.display = 'none';
    }
  }
}

function openEditTeam(key){
  const t = TEAMS[key];
  if(!t) return;
  const dialog = document.createElement('div');
  dialog.id = 'editTeamDialog';
  dialog.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.85);backdrop-filter:blur(8px);z-index:9999;display:flex;align-items:center;justify-content:center;';
  dialog.innerHTML = `<div style="background:var(--card);border:1px solid var(--border);border-radius:16px;width:520px;max-width:95vw;padding:28px;max-height:85vh;overflow-y:auto;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
      <div style="font-family:'Bebas Neue',cursive;font-size:28px;color:var(--gold);">Edit ${key}</div>
      <button onclick="document.getElementById('editTeamDialog').remove()" style="background:none;border:none;color:var(--silver);font-size:20px;cursor:pointer;">✕</button>
    </div>
    <div class="adm-field-grid">
      <div class="adm-field"><label class="adm-lbl">Full Name</label><input class="adm-inp" id="et_name" value="${t.name}"></div>
      <div class="adm-field"><label class="adm-lbl">Abbreviation</label><input class="adm-inp" id="et_abbr" value="${key}" maxlength="4" style="text-transform:uppercase;" oninput="this.value=this.value.toUpperCase()"></div>
      <div class="adm-field"><label class="adm-lbl">Primary Color</label><input class="adm-inp" id="et_pri" type="color" value="${t.pri}" style="height:42px;padding:4px 8px;"></div>
      <div class="adm-field"><label class="adm-lbl">Secondary Color</label><input class="adm-inp" id="et_sec" type="color" value="${t.sec}" style="height:42px;padding:4px 8px;"></div>
      <div class="adm-field"><label class="adm-lbl">Captain</label><input class="adm-inp" id="et_cap" value="${t.cap||''}"></div>
      <div class="adm-field"><label class="adm-lbl">Vice-Captain</label><input class="adm-inp" id="et_vc" value="${t.vc||''}"></div>
      <div class="adm-field"><label class="adm-lbl">Women's Team?</label><select class="adm-inp" id="et_women">
        <option value="false" ${!t.women?'selected':''}>No (Men)</option>
        <option value="true"  ${t.women?'selected':''}>Yes (Women)</option>
      </select></div>
    </div>
    <div class="adm-action-row" style="margin-top:20px;">
      <button class="adm-btn-save" onclick="saveEditTeam('${key}')">Save Changes</button>
      <button class="adm-ghost-btn" style="color:var(--red);border-color:var(--border);" onclick="deleteTeam('${key}')">Delete Team</button>
    </div>
    <div id="editTeamMsg" style="margin-top:10px;font-size:12px;color:var(--silver);min-height:18px;"></div>
  </div>`;
  document.body.appendChild(dialog);
}

function saveEditTeam(key){
  const newName  = document.getElementById('et_name').value.trim();
  const newAbbr  = document.getElementById('et_abbr').value.trim().toUpperCase();
  const newPri   = document.getElementById('et_pri').value;
  const newSec   = document.getElementById('et_sec').value;
  const newCap   = document.getElementById('et_cap').value.trim();
  const newVc    = document.getElementById('et_vc').value.trim();
  const newWomen = document.getElementById('et_women').value === 'true';
  const msg      = document.getElementById('editTeamMsg');

  if(!newName){ msg.style.color='var(--red)'; msg.textContent='Name cannot be empty.'; return; }
  if(!newAbbr){ msg.style.color='var(--red)'; msg.textContent='Abbreviation cannot be empty.'; return; }

  const t = TEAMS[key];
  t.name   = newName;
  t.pri    = newPri;
  t.sec    = newSec;
  t.cap    = newCap;
  t.vc     = newVc;
  t.women  = newWomen;

  // Handle abbreviation rename
  if(newAbbr !== key){
    if(TEAMS[newAbbr]){ msg.style.color='var(--red)'; msg.textContent=`Abbreviation ${newAbbr} is already used.`; return; }
    TEAMS[newAbbr] = t;
    delete TEAMS[key];
    TEAM_META[newAbbr] = {name:t.name, pri:t.pri, sec:t.sec, women:t.women};
    delete TEAM_META[key];
    // Update RESULTS and FIXTURES references
    RESULTS.forEach(r=>{ if(r.t1===key)r.t1=newAbbr; if(r.t2===key)r.t2=newAbbr; if(r.winner===key)r.winner=newAbbr; });
    FIXTURES.forEach(f=>{ if(f.t1===key)f.t1=newAbbr; if(f.t2===key)f.t2=newAbbr; });
  } else {
    TEAM_META[key] = {name:t.name, pri:t.pri, sec:t.sec, women:t.women};
  }

  document.getElementById('editTeamDialog').remove();
  saveTeamsToStorage();
  _refreshAll();
}

function deleteTeam(key){
  if(isSeasonInProgress()){ alert('Cannot delete a team while the season is in progress.'); return; }
  const hasMatches = RESULTS.some(r=>r.t1===key||r.t2===key);
  if(hasMatches){ alert('This team has recorded matches. Delete those matches first.'); return; }
  if(!confirm(`Delete ${TEAMS[key]?.name || key}? This cannot be undone.`)) return;
  delete TEAMS[key];
  delete TEAM_META[key];
  FIXTURES = FIXTURES.filter(f=>f.t1!==key && f.t2!==key);
  document.getElementById('editTeamDialog')?.remove();
  saveTeamsToStorage();
  _refreshAll();
}

function adminAddTeam(){
  const abbr   = document.getElementById('nt_abbr').value.trim().toUpperCase();
  const name   = document.getElementById('nt_name').value.trim();
  const pri    = document.getElementById('nt_pri').value;
  const sec    = document.getElementById('nt_sec').value;
  const cap    = document.getElementById('nt_cap').value.trim();
  const vc     = document.getElementById('nt_vc').value.trim();
  const women  = document.getElementById('nt_women').value === 'true';
  const msg    = document.getElementById('admTeamAddMsg');

  if(!abbr||!name){ msg.style.color='var(--red)'; msg.textContent='Abbreviation and name are required.'; return; }
  if(TEAMS[abbr])  { msg.style.color='var(--red)'; msg.textContent=`Abbreviation "${abbr}" is already taken.`; return; }
  if(isSeasonInProgress()){ msg.style.color='var(--red)'; msg.textContent='Season is in progress — cannot add new teams.'; return; }

  TEAMS[abbr] = {name, pri, sec, women, cap, vc, players:[]};
  TEAM_META[abbr] = {name, pri, sec, women};

  // Reset form
  document.getElementById('nt_abbr').value = '';
  document.getElementById('nt_name').value = '';
  document.getElementById('nt_pri').value  = '#E63946';
  document.getElementById('nt_sec').value  = '#FFBE0B';
  document.getElementById('nt_cap').value  = '';
  document.getElementById('nt_vc').value   = '';

  msg.style.color = 'var(--green)';
  msg.textContent = `✓ Team ${abbr} — ${name} added!`;
  saveTeamsToStorage();
  _refreshAll();
  renderAdminTeams();
}

// ═══════════════════════════════════════════ PLAYER MANAGER

function renderAdminPlayersTeamSel(){
  const sel = document.getElementById('admPlayerTeamSel');
  if(!sel) return;
  const cur = sel.value;
  sel.innerHTML = Object.keys(TEAMS).map(k=>`<option value="${k}">${TEAMS[k].name} (${k})</option>`).join('');
  if(TEAMS[cur]) sel.value = cur;
  renderAdminPlayers();
}

function renderAdminPlayers(){
  const sel  = document.getElementById('admPlayerTeamSel');
  const list = document.getElementById('admPlayerList');
  if(!sel||!list) return;
  const key = sel.value;
  const t   = TEAMS[key];
  if(!t){ list.innerHTML='<div style="color:var(--silver)">Select a team above.</div>'; return; }

  list.innerHTML = `<table style="width:100%;border-collapse:collapse;">
    <thead><tr style="background:var(--card2);border-bottom:2px solid var(--gold);">
      <th style="padding:10px 8px;width:28px;"></th>
      <th style="padding:10px 12px;text-align:left;font-family:'Barlow Condensed',sans-serif;font-size:10px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:var(--gold);">Player</th>
      <th style="padding:10px 8px;font-size:10px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:var(--gold);font-family:'Barlow Condensed',sans-serif;text-align:center;">Role</th>
      <th style="padding:10px 8px;font-size:10px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:var(--gold);font-family:'Barlow Condensed',sans-serif;text-align:center;">Hand</th>
      <th style="padding:10px 8px;font-size:10px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:var(--gold);font-family:'Barlow Condensed',sans-serif;text-align:center;">Style</th>
      <th style="padding:10px 8px;font-size:10px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:var(--gold);font-family:'Barlow Condensed',sans-serif;text-align:center;">P</th>
      <th style="padding:10px 8px;font-size:10px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:var(--gold);font-family:'Barlow Condensed',sans-serif;text-align:center;">C</th>
      <th style="padding:10px 8px;font-size:10px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:var(--gold);font-family:'Barlow Condensed',sans-serif;text-align:center;">PP</th>
      <th style="padding:10px 8px;font-size:10px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:var(--gold);font-family:'Barlow Condensed',sans-serif;text-align:center;">DO</th>
      <th style="padding:10px 8px;font-size:10px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:var(--gold);font-family:'Barlow Condensed',sans-serif;text-align:center;">CL</th>
      <th style="padding:10px 8px;text-align:center;"></th>
    </tr></thead>
    <tbody>
    ${t.players.map((p,i)=>`<tr style="border-bottom:1px solid var(--border);cursor:grab;" id="plrow_${key}_${i}" draggable="true" ondragstart="onPlayerDragStart(event,'${key}',${i})" ondrop="onPlayerDrop(event,'${key}',${i})" ondragover="event.preventDefault()" ondragend="onPlayerDragEnd(event)">
      <td style="padding:8px 6px;text-align:center;color:var(--border);font-size:14px;cursor:grab;" title="Drag to reorder">⠿</td>
      <td style="padding:8px 12px;"><input type="text" value="${p.n}" onchange="updatePlayerField('${key}',${i},'n',this.value)" style="background:transparent;border:none;border-bottom:1px solid var(--border);color:var(--white);font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:14px;width:120px;outline:none;padding:2px 0;"></td>
      <td style="padding:8px 6px;text-align:center;"><select onchange="updatePlayerField('${key}',${i},'role',this.value)" style="background:var(--bg2);border:1px solid var(--border);color:var(--white);border-radius:4px;padding:4px 6px;font-family:'Barlow Condensed',sans-serif;font-size:11px;font-weight:700;">
        <option value="BAT"  ${p.role==='BAT'?'selected':''}>BAT</option>
        <option value="BOWL" ${p.role==='BOWL'?'selected':''}>BOWL</option>
        <option value="AR"   ${p.role==='AR'?'selected':''}>AR</option>
        <option value="WK"   ${p.role==='WK'?'selected':''}>WK</option>
      </select></td>
      <td style="padding:8px 6px;text-align:center;"><select onchange="updatePlayerField('${key}',${i},'hand',this.value)" style="background:var(--bg2);border:1px solid var(--border);color:var(--white);border-radius:4px;padding:4px 6px;font-family:'Barlow Condensed',sans-serif;font-size:11px;font-weight:700;">
        <option value="RHB" ${p.hand==='RHB'?'selected':''}>RHB</option>
        <option value="LHB" ${p.hand==='LHB'?'selected':''}>LHB</option>
        <option value="AMB" ${p.hand==='AMB'?'selected':''}>AMB</option>
      </select></td>
      <td style="padding:8px 6px;text-align:center;"><input type="text" value="${p.style||'—'}" onchange="updatePlayerField('${key}',${i},'style',this.value)" style="background:transparent;border:none;border-bottom:1px solid var(--border);color:var(--silver);font-family:'Barlow Condensed',sans-serif;font-size:11px;width:70px;outline:none;text-align:center;padding:2px 0;"></td>
      ${['p','c','pp','do','cl'].map(attr=>`<td style="padding:8px 4px;text-align:center;"><input type="number" min="0" max="99" value="${p[attr]||0}" onchange="updatePlayerField('${key}',${i},'${attr}',+this.value)" style="background:transparent;border:none;border-bottom:1px solid var(--border);color:var(--white);font-family:'Bebas Neue',cursive;font-size:15px;width:36px;text-align:center;outline:none;padding:2px 0;"></td>`).join('')}
      <td style="padding:8px 6px;text-align:center;"><button onclick="removePlayer('${key}',${i})" style="background:none;border:none;color:var(--border);cursor:pointer;font-size:18px;transition:color .2s;line-height:1;" onmouseenter="this.style.color='var(--red)'" onmouseleave="this.style.color='var(--border)'">×</button></td>
    </tr>`).join('')}
    </tbody>
  </table>
  <div style="margin-top:12px;font-size:10px;color:var(--silver);letter-spacing:1px;">P=Pace · C=Control · PP=Powerplay · DO=Death Overs · CL=Clutch · Drag ⠿ to reorder</div>`;
}

let _playerDragSrc = null;

function onPlayerDragStart(e, teamKey, idx){
  _playerDragSrc = {teamKey, idx};
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', idx);
  // Visual feedback: dim the dragged row
  setTimeout(()=>{ const row = document.getElementById(`plrow_${teamKey}_${idx}`); if(row) row.style.opacity='0.4'; }, 0);
}

function onPlayerDrop(e, teamKey, idx){
  e.preventDefault();
  if(!_playerDragSrc || _playerDragSrc.teamKey !== teamKey || _playerDragSrc.idx === idx) return;
  const from = _playerDragSrc.idx;
  const players = TEAMS[teamKey].players;
  const moved = players.splice(from, 1)[0];
  players.splice(idx, 0, moved);
  saveTeamsToStorage();
  renderAdminPlayers();
}

function onPlayerDragEnd(e){
  _playerDragSrc = null;
  // Re-render to restore opacity (renderAdminPlayers rebuilds all rows)
  document.querySelectorAll('#admPlayerList tr[draggable]').forEach(r=>r.style.opacity='');
}

// ── Rename a player across ALL historical match data (RESULTS + localStorage) ──
function renamePlayerInAllResults(oldName, newName, teamKey){
  if(!oldName || !newName || oldName === newName) return;
  let changed = false;
  for(const m of RESULTS){
    // potm field
    if(m.potm === oldName){ m.potm = newName; changed = true; }
    if(!m.scorecard) continue;
    for(const inn of m.scorecard.innings){
      // batters
      for(const b of (inn.batters||[])){
        if(b.n === oldName && inn.team === teamKey){ b.n = newName; changed = true; }
      }
      // bowlers — bowlers appear under the opposing team's innings
      // (inn.team is the batting team; bowlers belong to the other team)
      const bowlTeam = (inn.team === m.t1) ? m.t2 : m.t1;
      if(bowlTeam === teamKey){
        for(const bw of (inn.bowlers||[])){
          if(bw.n === oldName){ bw.n = newName; changed = true; }
        }
      }
      // dismissal strings that mention the old name (e.g. "c OldName b X")
      for(const b of (inn.batters||[])){
        if(b.dis && b.dis.includes(oldName)){
          b.dis = b.dis.split(oldName).join(newName); changed = true;
        }
      }
    }
    // live ball-by-ball data
    if(m.scorecard.innings){
      for(const inn of m.scorecard.innings){
        for(const ball of (inn.balls||[])){
          if(ball.striker === oldName) ball.striker = newName;
          if(ball.nonStriker === oldName) ball.nonStriker = newName;
          if(ball.bowler === oldName) ball.bowler = newName;
          if(ball.fielder === oldName) ball.fielder = newName;
        }
      }
    }
  }
  if(changed){
    // Persist updated custom matches back to localStorage
    // (hardcoded RESULTS entries are already updated in memory; custom ones need storage update too)
    try{
      const stored = JSON.parse(localStorage.getItem('lpl_custom_matches')||'[]');
      for(const m of stored){
        if(m.potm === oldName) m.potm = newName;
        if(!m.scorecard) continue;
        for(const inn of m.scorecard.innings){
          for(const b of (inn.batters||[])){
            if(b.n === oldName && inn.team === teamKey) b.n = newName;
            if(b.dis && b.dis.includes(oldName)) b.dis = b.dis.split(oldName).join(newName);
          }
          const bowlTeam = (inn.team === m.t1) ? m.t2 : m.t1;
          if(bowlTeam === teamKey){
            for(const bw of (inn.bowlers||[])) if(bw.n === oldName) bw.n = newName;
          }
          for(const ball of (inn.balls||[])){
            if(ball.striker === oldName) ball.striker = newName;
            if(ball.nonStriker === oldName) ball.nonStriker = newName;
            if(ball.bowler === oldName) ball.bowler = newName;
            if(ball.fielder === oldName) ball.fielder = newName;
          }
        }
      }
      localStorage.setItem('lpl_custom_matches', JSON.stringify(stored));
    } catch(e){}
  }
}

function updatePlayerField(teamKey, idx, field, value){
  if(TEAMS[teamKey] && TEAMS[teamKey].players[idx]){
    if(field === 'n'){
      // When renaming a player, also rename them in all historical stats
      const oldName = TEAMS[teamKey].players[idx].n;
      const newName = String(value).trim();
      if(oldName && newName && oldName !== newName){
        TEAMS[teamKey].players[idx][field] = newName;
        renamePlayerInAllResults(oldName, newName, teamKey);
        saveTeamsToStorage();
        _refreshAll();
        return;
      }
    }
    TEAMS[teamKey].players[idx][field] = value;
    saveTeamsToStorage();
  }
}

function removePlayer(teamKey, idx){
  if(!confirm('Remove this player?')) return;
  TEAMS[teamKey].players.splice(idx,1);
  saveTeamsToStorage();
  renderAdminPlayers();
}

function adminAddPlayer(){
  const sel = document.getElementById('admPlayerTeamSel');
  if(!sel||!sel.value){ alert('Select a team first.'); return; }
  const key = sel.value;
  const name = prompt('New player name:');
  if(!name||!name.trim()) return;
  TEAMS[key].players.push({n:name.trim(), hand:'RHB', role:'AR', style:'MED', p:70, c:70, pp:70, do:70, cl:70});
  saveTeamsToStorage();
  renderAdminPlayers();
}

// ═══════════════════════════════════════════ GLOBAL REFRESH
function _refreshAll(){
  // Rebuild TEAM_META from TEAMS
  for(const k of Object.keys(TEAMS)){
    const t = TEAMS[k];
    TEAM_META[k] = {name:t.name, pri:t.pri, sec:t.sec, women:t.women};
  }
  renderTeams();
  renderStat();
  renderRecords();
  initStatFilter();
  renderFixtures();
  renderResults && renderResults();
  renderPoints && renderPoints();
  renderPlayoffs && renderPlayoffs();
  initHome();
  renderAdminTeams && renderAdminTeams();
  saveFixturesToStorage();
  _renderPlayoffBanner();
  _renderAdminPlayoffGuard();
}

// ── Initialize playoff UI on page load ──────────────────────────────────────
(function _initPlayoffUI(){
  // Resolve any TBDs from stored playoff results
  if(PLAYOFF_FIXTURES.length) resolvePlayoffTBDs();
  // Show/hide the playoff banner
  setTimeout(()=>{
    _renderPlayoffBanner();
    _renderAdminPlayoffGuard();
    // Highlight playoffs tab if active stage
    const stage = getTournamentStage();
    if(stage === STAGE.PLAYOFF || stage === STAGE.COMPLETED){
      const playoffsTabBtn = document.querySelector('.mtab[onclick*="playoffs"]');
      if(playoffsTabBtn) playoffsTabBtn.classList.add('mtab-playoffs-active');
    }
  }, 100);
})();

// ── Admin: expose playoff reset for debugging ──────────────────────────────
function adminResetPlayoffs(){
  if(!confirm('⚠️ Reset tournament to LEAGUE stage?\n\nThis will clear all playoff fixtures and results, and re-enable league match entry.\n\nOnly do this if you made an error.')) return;
  try{ localStorage.removeItem(PLAYOFF_STAGE_KEY); } catch(e){}
  try{ localStorage.removeItem(PLAYOFF_FIXTURES_KEY); } catch(e){}
  try{ localStorage.removeItem(PLAYOFF_RESULTS_KEY); } catch(e){}
  PLAYOFF_FIXTURES.length = 0;
  PLAYOFF_RESULTS.length = 0;
  _refreshAll();
  alert('Playoffs reset. Tournament is back in LEAGUE stage.');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootLpl);
} else {
  bootLpl();
}
