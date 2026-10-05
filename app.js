const lessons = [
  {chapter:'1 · Meet Python',title:'10 Fun Facts About Python',desc:'Meet Python and discover what people build with it.',explain:'Python is a popular programming language used for websites, AI, automation, data, games, robotics and much more. It was created by Guido van Rossum, and its name was inspired by Monty Python.',code:'print("Hello PYN!")',challenge:'Change the text so Python prints your own greeting.'},
  {chapter:'1 · Meet Python',title:'Get Ready',desc:'Install Python, VS Code, and run your first file.',explain:'A Python file normally ends in .py. You write code in an editor such as VS Code, then ask Python to run the file.',code:'# hello.py\nprint("My first Python program!")',challenge:'Create a file called hello.py and print a message.'},
  {chapter:'2 · Talking to Python',title:'Syntax',desc:'Learn the basic rules Python expects.',explain:'Syntax means the rules for writing code. Just like a language has grammar, Python expects certain symbols and spacing.',code:'print("Hello")',challenge:'Write a correct print statement that says PYN rocks!'},
  {chapter:'2 · Talking to Python',title:'Input and Output',desc:'Let your program speak and listen.',explain:'print() creates output. input() pauses the program and lets a person type something.',code:'name = input("What is your name? ")\nprint(f"Hello {name}!")',challenge:'Ask for someone\'s favorite food, then print it back.'},
  {chapter:'2 · Talking to Python',title:'Comments',desc:'Leave helpful notes inside your code.',explain:'Python ignores text that comes after # on a line. Comments help humans understand what code is doing.',code:'# This is a comment\nprint("Comments are useful")',challenge:'Add a comment explaining what your print line does.'},
  {chapter:'3 · Remembering Things',title:'Variables',desc:'Store information using names.',explain:'A variable is like a labeled box. You give the box a name, then put a value inside it.',code:'username = "Maya"\nxp = 120\nprint(username, xp)',challenge:'Create variables for your name, age, and favorite game.'},
  {chapter:'3 · Remembering Things',title:'Data Types',desc:'Text, numbers, True/False, and more.',explain:'Different values have different types. Common beginner types are str for text, int for whole numbers, float for decimals, and bool for True or False.',code:'name = "Maya"\nage = 13\nheight = 1.6\nonline = True\nprint(type(age))',challenge:'Make one variable of each basic type.'},
  {chapter:'3 · Remembering Things',title:'Numeric Types',desc:'Work with integers and decimals.',explain:'Integers are whole numbers. Floats are numbers with decimals. Python can calculate with both.',code:'coins = 10\ncoins = coins + 5\nprint(coins)',challenge:'Start with 20 points, add 15, then print the result.'},
  {chapter:'3 · Remembering Things',title:'Strings',desc:'Store and change text.',explain:'A string is text placed inside quotes. You can join strings, slice them, and use many helpful string methods.',code:'first = "Py"\nsecond = "thon"\nprint(first + second)',challenge:'Create your first and last name as two strings and join them.'},
  {chapter:'3 · Remembering Things',title:'Casting',desc:'Change one data type into another.',explain:'Casting converts a value. int("12") changes text into a whole number, while str(12) changes a number into text.',code:'age_text = "12"\nage = int(age_text)\nprint(age + 1)',challenge:'Convert the string "50" to a number and add 10.'},
  {chapter:'3 · Remembering Things',title:'Booleans',desc:'Use True and False.',explain:'A Boolean has only two possible values: True or False. Apps use booleans for things like online status, completed lessons, and settings.',code:'is_online = True\nif is_online:\n    print("Active now")',challenge:'Create a boolean called lesson_done and set it to True.'},
  {chapter:'4 · Collections',title:'Lists',desc:'Keep many values in one place.',explain:'A list stores multiple items in order. Python starts counting list positions from 0.',code:'friends = ["Alex", "Sam", "Maya"]\nprint(friends[0])\nfriends.append("Leo")',challenge:'Create a list of three things you like.'},
  {chapter:'4 · Collections',title:'Tuples',desc:'Store ordered values that usually stay fixed.',explain:'A tuple looks like a list but uses parentheses. It is useful when values should not be changed accidentally.',code:'position = (10, 20)\nprint(position[0])',challenge:'Create a tuple containing two coordinates.'},
  {chapter:'4 · Collections',title:'Sets',desc:'Store unique values.',explain:'A set automatically removes duplicate values. Sets are useful when you only care whether something is present once.',code:'skills = {"Python", "HTML", "Python"}\nprint(skills)',challenge:'Create a set containing a repeated word and see what happens.'},
  {chapter:'4 · Collections',title:'Dictionaries',desc:'Store information as key-value pairs.',explain:'A dictionary connects keys to values. It is perfect for things such as profiles and settings.',code:'user = {\n    "name": "Alex",\n    "level": 5,\n    "online": True\n}\nprint(user["name"])',challenge:'Create a dictionary for a PYN user with name, XP and online status.'},
  {chapter:'5 · Decisions',title:'If, Elif and Else',desc:'Make your program choose what to do.',explain:'if checks a condition. elif checks another possibility. else runs when the earlier conditions are false.',code:'score = 80\nif score >= 90:\n    print("Amazing!")\nelif score >= 70:\n    print("Great job!")\nelse:\n    print("Keep practicing!")',challenge:'Write an if statement that checks whether XP is at least 100.'},
  {chapter:'5 · Decisions',title:'Match',desc:'Choose between several clear cases.',explain:'match compares one value against several cases. It can make some multi-choice code easier to read.',code:'level = 2\nmatch level:\n    case 1: print("Starter")\n    case 2: print("Explorer")\n    case _: print("Coder")',challenge:'Use match for three different avatar choices.'},
  {chapter:'6 · Repetition',title:'While Loops',desc:'Repeat while something remains true.',explain:'A while loop keeps running as long as its condition is True. Make sure something changes so the loop can eventually stop.',code:'count = 1\nwhile count <= 5:\n    print(count)\n    count += 1',challenge:'Make a while loop count from 1 to 3.'},
  {chapter:'6 · Repetition',title:'For Loops',desc:'Repeat once for every item.',explain:'A for loop is great for going through lists, strings, ranges, and other collections.',code:'friends = ["Alex", "Maya", "Leo"]\nfor friend in friends:\n    print(friend)',challenge:'Loop through three project names and print each one.'},
  {chapter:'6 · Repetition',title:'Range',desc:'Create useful number sequences.',explain:'range() creates a sequence of numbers that works especially well with for loops.',code:'for number in range(1, 6):\n    print(number)',challenge:'Use range to print the numbers 1 through 10.'},
  {chapter:'7 · Reusable Code',title:'Functions',desc:'Create code you can use again.',explain:'A function groups code under a name. Parameters let you give the function information, and return sends a value back.',code:'def greet(name):\n    return f"Hello {name}!"\n\nprint(greet("Maya"))',challenge:'Create a function called add that returns the sum of two numbers.'},
  {chapter:'8 · Python Toolbox',title:'Modules',desc:'Use useful code from other files and libraries.',explain:'Modules give you code that already exists. Python includes many built-in modules, and you can install more.',code:'import random\nnumber = random.randint(1, 10)\nprint(number)',challenge:'Use random to make a virtual dice roll from 1 to 6.'},
  {chapter:'8 · Python Toolbox',title:'Dates',desc:'Work with dates and times.',explain:'The datetime module lets Python work with real dates and times.',code:'from datetime import datetime\nnow = datetime.now()\nprint(now)',challenge:'Print the current date and time.'},
  {chapter:'8 · Python Toolbox',title:'Math',desc:'Use Python\'s math helpers.',explain:'The math module includes useful functions such as square roots, rounding helpers, constants and trigonometry.',code:'import math\nprint(math.sqrt(25))',challenge:'Use math.sqrt() to find the square root of 81.'},
  {chapter:'8 · Python Toolbox',title:'JSON',desc:'Move structured information between apps.',explain:'JSON is a common text format for data. Python can convert JSON text into dictionaries and lists.',code:'import json\ndata = \'{"name":"Alex","level":5}\'\nuser = json.loads(data)\nprint(user["name"])',challenge:'Load JSON containing a username and XP value.'},
  {chapter:'8 · Python Toolbox',title:'Regex',desc:'Search text using patterns.',explain:'Regular expressions let you describe text patterns. They are powerful, but beginners only need a few basics at first.',code:'import re\ntext = "I have 3 cats"\nprint(re.findall(r"\\d+", text))',challenge:'Find the numbers inside the text "Level 12, XP 400".'},
  {chapter:'8 · Python Toolbox',title:'PIP',desc:'Install extra Python packages.',explain:'pip installs packages made by other Python developers. Think of it as adding new tools to your project.',code:'pip install requests',challenge:'Practice identifying which part is the command and which part is the package name.'},
  {chapter:'9 · When Things Go Wrong',title:'Try and Except',desc:'Handle errors without crashing.',explain:'try runs code that might fail. except lets you decide what should happen if an error occurs.',code:'try:\n    age = int(input("Age: "))\n    print(age)\nexcept ValueError:\n    print("Please enter a number.")',challenge:'Handle a ValueError when converting input to an integer.'},
  {chapter:'9 · When Things Go Wrong',title:'Debugging',desc:'Read errors and fix problems step by step.',explain:'Errors are clues. Start at the last line of the traceback, read the error type, then inspect the line Python points to.',code:'name = "Alex"\nprint(name)  # Try changing this to nam and inspect the error',challenge:'Cause a NameError on purpose, then fix it.'},
  {chapter:'10 · Project Setup',title:'Virtual Environments',desc:'Give each project its own package toolbox.',explain:'A virtual environment keeps one project\'s packages separate from another project\'s packages.',code:'python -m venv .venv\n# Windows:\n.venv\\Scripts\\activate',challenge:'Create a virtual environment for a new practice project.'},
];

const projects = [
  {icon:'🎲',title:'Dice Roller',level:'Beginner',time:'15 min',concepts:['random','variables','print'],desc:'Build a six-sided dice that rolls a different number.'},
  {icon:'🧮',title:'Calculator',level:'Beginner',time:'25 min',concepts:['input','numbers','if'],desc:'Ask for two numbers and perform calculations.'},
  {icon:'❓',title:'Quiz Game',level:'Beginner',time:'35 min',concepts:['strings','if','score'],desc:'Create a quiz that tracks correct answers.'},
  {icon:'🔐',title:'Password Generator',level:'Beginner',time:'30 min',concepts:['random','strings','loops'],desc:'Generate a random password from letters and numbers.'},
  {icon:'✊',title:'Rock Paper Scissors',level:'Beginner',time:'35 min',concepts:['random','if','input'],desc:'Play against the computer.'},
  {icon:'⏱️',title:'Countdown Timer',level:'Intermediate',time:'45 min',concepts:['loops','time','functions'],desc:'Count down and trigger a message at zero.'},
  {icon:'⭕',title:'Tic-Tac-Toe',level:'Intermediate',time:'2 hr',concepts:['lists','functions','loops'],desc:'Build a complete two-player board game.'},
  {icon:'💬',title:'Mini Chatbot',level:'Intermediate',time:'1.5 hr',concepts:['input','functions','match'],desc:'Create a text chatbot with simple responses.'},
  {icon:'🌤️',title:'Weather App',level:'Intermediate',time:'2 hr',concepts:['APIs','JSON','requests'],desc:'Read live weather data from an API.'},
  {icon:'📝',title:'To-Do App',level:'Intermediate',time:'2 hr',concepts:['lists','files','functions'],desc:'Add, remove and save tasks.'},
  {icon:'🤖',title:'AI Chatbot',level:'Advanced',time:'4 hr',concepts:['APIs','JSON','functions'],desc:'Connect Python to an AI model API.'},
  {icon:'📊',title:'Data Dashboard',level:'Advanced',time:'5 hr',concepts:['pandas','charts','data'],desc:'Turn data into a simple interactive dashboard.'},
];

const starterCommunityVideos = [];
let communityTab='feed';

const avatars = ['🧑🏽‍💻','👩🏾‍💻','👨🏻‍💻','👩🏼‍🚀','🧑🏾‍🚀','👩🏿‍🔬','🧑🏻‍🎨','👨🏽‍🔬','👩🏻‍💻','🧑🏼‍💻'];

const defaultState = {username:'Coder',avatar:'🧑🏽‍💻',theme:'purple',avatarParts:{skin:'#b97850',hair:'#30241d',shirt:'#6c4df6',style:'short',accessory:'none'},myProjects:[],age:13,xp:0,streak:1,completedLessons:[],completedProjects:[],levelChoice:"I've never coded before",incomingRequests:[],communityVideos:[]};
let storedState;
try { storedState=JSON.parse(localStorage.getItem('pynState') || 'null'); } catch { storedState=null; }
let state = {...defaultState, ...(storedState || {})};

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const save = () => localStorage.setItem('pynState', JSON.stringify(state));

function boot(){
  if(localStorage.getItem('pynStarted')) showApp();
  renderAll();
}

function showApp(){
  $('#auth-screen').classList.add('hidden');
  $('#app').classList.remove('hidden');
}

$('#start-btn').onclick=()=>{
  const name=$('#username-input').value.trim();
  if(!name){$('#username-input').focus();return;}
  state.username=name; save(); localStorage.setItem('pynStarted','1'); showApp(); renderAll();
};
$('#demo-btn').onclick=()=>{localStorage.setItem('pynStarted','1');showApp();renderAll();};
$('#signout-btn').onclick=()=>{localStorage.removeItem('pynStarted');location.reload();};

function renderAll(){renderPeople();renderProjects();renderLessons();renderCommunity();renderProfile();renderStats();renderMyProjects();applyTheme();}

function renderPeople(){
 $('#people-row').innerHTML='<p class="community-empty">No members to show yet. Real member activity will appear when community accounts are connected.</p>';
}

function projectCard(p,i){
 const done=state.completedProjects.includes(i);
 return `<article class="project-card" data-project="${i}"><div class="project-art">${p.icon}</div><div class="project-body"><span class="tag">${p.level}</span><h4>${p.title} ${done?'✓':''}</h4><p>${p.desc}</p><div class="project-meta"><span>${p.time}</span><span>${p.concepts.slice(0,2).join(' · ')}</span></div></div></article>`;
}
function renderProjects(filter='all'){
 $('#home-projects').innerHTML=projects.slice(0,4).map(projectCard).join('');
 const list=filter==='all'?projects:projects.filter(p=>p.level===filter);
 $('#project-grid').innerHTML=list.map(p=>projectCard(p,projects.indexOf(p))).join('');
 $$('[data-project]').forEach(el=>el.onclick=()=>openProject(+el.dataset.project));
}

function renderLessons(){
 let html='',current='';
 lessons.forEach((l,i)=>{
   if(l.chapter!==current){current=l.chapter;html+=`<div class="chapter-label">Unit ${current}</div>`;}
   const done=state.completedLessons.includes(i);
   html+=`<button type="button" class="lesson-row ${done?'done':''}" data-lesson="${i}"><div class="lesson-number">${done?'✓':i+1}</div><div><h4>${l.title}</h4><p>${l.desc}</p></div><div class="lesson-status">${done?'Completed':'+20 XP'}</div></button>`;
 });
 $('#lesson-path').innerHTML=html;
 $$('[data-lesson]').forEach(el=>el.onclick=()=>openLesson(+el.dataset.lesson));
}

function ageBand(age){
 const n=Number(age||13);
 if(n<=12)return '9–12';
 if(n<=15)return '13–15';
 if(n<=17)return '16–17';
 if(n<=20)return '18–20';
 return '21+';
}

function communityVideos(){return [...starterCommunityVideos,...(state.communityVideos||[])];}

function renderCommunity(){
 const ageLabel=$('#age-band-label');
 if(ageLabel) ageLabel.textContent=ageBand(state.age);
 const badge=$('#request-badge');
 if(badge) badge.textContent=(state.incomingRequests||[]).length||'';
 $$('.community-tab').forEach(b=>b.classList.toggle('active',b.dataset.communityTab===communityTab));
 const box=$('#community-content');
 if(!box)return;
 if(communityTab==='feed'){
   box.innerHTML='<div class="community-empty"><strong>No fake community activity.</strong>Real member activity will appear here when PYN is connected to its live database.</div>';
 } else if(communityTab==='videos'){
   const videos=communityVideos();
   box.innerHTML=videos.length?`<div class="community-video-list">${videos.map(v=>`<article class="community-video-card"><div class="community-video-thumb">▶</div><div><h4>${escapeHtml(v.title)}</h4><p>${escapeHtml(v.topic||'Python')} · Local draft</p><small>${escapeHtml(v.teacher||state.username)}</small></div></article>`).join('')}</div>`:'<div class="community-empty"><strong>No teaching videos yet.</strong>Approved community lessons will appear here.</div>';
 } else {
   box.innerHTML='<div class="community-empty"><strong>No real friend requests yet.</strong>When PYN has real accounts, requests from learners in your age group will appear here.</div>';
 }
}

function escapeHtml(value=''){return String(value).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}

function openVideoForm(){
 $('#modal-content').innerHTML=`<p class="eyebrow">COMMUNITY TEACHING</p><h2>Share a mini lesson</h2><p>Save a teaching video draft on this device. Drafts are not published or reviewed.</p><div class="video-submit-form"><label>Video title</label><input id="new-video-title" placeholder="e.g. Lists explained simply"><label>Python topic</label><select id="new-video-topic">${lessons.map(l=>`<option>${escapeHtml(l.title)}</option>`).join('')}</select><label>Video link</label><input id="new-video-link" placeholder="YouTube or approved video link"><label>What will you explain?</label><textarea id="new-video-desc" placeholder="Describe the mini lesson..."></textarea><button id="submit-video" class="primary-btn" style="margin-top:14px;width:100%">Save draft</button></div>`;
 $('#modal').classList.remove('hidden');
 $('#submit-video').onclick=()=>{
   const title=$('#new-video-title').value.trim();
   if(!title){$('#new-video-title').focus();return;}
   state.communityVideos=state.communityVideos||[];
   state.communityVideos.push({title,topic:$('#new-video-topic').value,teacher:state.username,url:$('#new-video-link').value.trim()});
   save();
   communityTab='videos';
   $('#modal').classList.add('hidden');
   renderCommunity();
 };
}

function renderProfile(){
 const level=Math.floor(state.xp/100)+1;
 const rank=level>=10?'Python Builder':level>=5?'Python Explorer':'Python Starter';
 $('#sidebar-avatar').innerHTML=avatarSvg(); $('#big-avatar').innerHTML=avatarSvg();
 $('#sidebar-name').textContent=state.username; $('#sidebar-level').textContent=`Level ${level}`;
 $('#profile-name').textContent=state.username; $('#profile-rank').textContent=rank;
 $('#display-name-input').value=state.username; $('#level-select').value=state.levelChoice;
 $('#profile-xp').textContent=state.xp; $('#profile-lessons').textContent=state.completedLessons.length; $('#profile-projects').textContent=state.completedProjects.length;
 renderAvatarEditor();
 $('#theme-select').value=state.theme||'purple';
}

function renderStats(){
 $('#xp-count').textContent=state.xp; $('#streak-count').textContent=state.streak;
 $('#welcome-title').textContent=`Ready to code, ${state.username}?`;
 const pct=Math.round((state.completedLessons.length/lessons.length)*100);
 $('#progress-label').textContent=pct+'%'; $('#progress-bar').style.width=pct+'%';
 const next=lessons.findIndex((_,i)=>!state.completedLessons.includes(i));
 $('#next-lesson-label').textContent=next<0?'PYN Fundamentals complete!':`Next: ${lessons[next].title}`;
}

function openLesson(i){
 const l=lessons[i],done=state.completedLessons.includes(i),q=checks[i];
 $('#modal-content').innerHTML=`<p class="eyebrow">PYN Fundamentals · Unit ${escapeHtml(l.chapter)}</p><h2>${l.title}</h2><p>${l.explain}</p><h4>Example</h4><pre><code>${escapeHtml(l.code)}</code></pre><h4>Tiny challenge</h4><p>${l.challenge}</p><label for="lesson-code">Practice code (run in VS Code)</label><textarea id="lesson-code" spellcheck="false">${escapeHtml(l.code)}</textarea><h4>Check your understanding</h4><p>${escapeHtml(q[0])}</p><label for="lesson-answer">Your answer</label><input id="lesson-answer" autocomplete="off"><p id="lesson-feedback" role="status">Answer correctly to unlock completion.</p><button id="check-lesson" class="secondary-btn">Check answer</button><div class="lesson-complete"><span>${done?'Lesson completed':'Correct answer required for +20 XP.'}</span><button class="primary-btn" id="complete-lesson" disabled>${done?'Completed':'Complete +20 XP'}</button></div>`;
 $('#modal').classList.remove('hidden');
 $('#check-lesson').onclick=()=>{const correct=q[1].includes($('#lesson-answer').value.trim().toLowerCase());$('#lesson-feedback').textContent=correct?'Correct! You can complete this lesson.':'Try again. Review the example above.';$('#complete-lesson').disabled=done||!correct;};
 $('#lesson-answer').oninput=()=>{$('#complete-lesson').disabled=true;};
 $('#complete-lesson').onclick=()=>{if($('#complete-lesson').disabled)return;if(!state.completedLessons.includes(i)){state.completedLessons.push(i);state.xp+=20;save();renderAll();}$('#modal').classList.add('hidden');};
}

function openProject(i){
 const p=projects[i],done=state.completedProjects.includes(i);
 $('#modal-content').innerHTML=`<p class="eyebrow">${p.level.toUpperCase()} PROJECT · CODE OPEN TO EVERYONE</p><h2>${p.icon} ${p.title}</h2><p>${p.desc}</p><p>Save this code as a .py file and run it with Python in VS Code. ${escapeHtml(projectNotes[i]||'No extra packages required.')}</p><pre><code>${escapeHtml(projectCodes[i])}</code></pre><button id="download-project" class="secondary-btn">Download Python code</button><button id="use-project" class="primary-btn">Create my version</button><div class="lesson-complete"><label><input type="checkbox" id="project-tested"> I ran and tested my project in VS Code.</label><button class="primary-btn" id="complete-project" disabled>${done?'Completed':'Mark project complete +50 XP'}</button></div><p>Project completion is self-reported.</p>`;
 $('#modal').classList.remove('hidden');
 $('#download-project').onclick=()=>downloadCode(p.title,projectCodes[i]);
 $('#use-project').onclick=()=>openProjectEditor({title:p.title,code:projectCodes[i]});
 $('#project-tested').onchange=e=>$('#complete-project').disabled=done||!e.target.checked;
 $('#complete-project').onclick=()=>{if($('#complete-project').disabled)return;if(!state.completedProjects.includes(i)){state.completedProjects.push(i);state.xp+=50;save();renderAll();}$('#modal').classList.add('hidden');};
}

$('#close-modal').onclick=()=>$('#modal').classList.add('hidden');
$('#modal').onclick=e=>{if(e.target.id==='modal')$('#modal').classList.add('hidden');};

$$('.nav-item').forEach(btn=>btn.onclick=()=>go(btn.dataset.page));
$$('[data-go]').forEach(btn=>btn.onclick=()=>go(btn.dataset.go));
function go(page){
 $$('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.page===page));
 $$('.page').forEach(p=>p.classList.remove('active-page')); $('#'+page).classList.add('active-page');
 const names={home:['PYN COMMUNITY','Home'],learn:['LEARNING PATH','Learn Python'],projects:['BUILD SOMETHING','Projects'],community:['LEARN TOGETHER','Community'],profile:['YOUR SPACE','Profile']};
 $('#page-eyebrow').textContent=names[page][0]; $('#page-title').textContent=names[page][1]; if(page==='community')renderCommunity(); window.scrollTo({top:0,behavior:'smooth'});
}

$$('.filter').forEach(b=>b.onclick=()=>{$$('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderProjects(b.dataset.filter);});

$('#save-profile-btn').onclick=()=>{state.username=$('#display-name-input').value.trim()||state.username;state.levelChoice=$('#level-select').value;state.theme=$('#theme-select').value;save();renderAll();$('#save-profile-btn').textContent='Saved ✓';setTimeout(()=>$('#save-profile-btn').textContent='Save changes',1200);};

$('#challenge-btn').onclick=()=>{
 $('#modal-content').innerHTML=`<p class="eyebrow">DAILY CHALLENGE · +20 XP</p><h2>Make Python say hello</h2><p>Write one line of Python that prints <strong>Hello PYN!</strong></p><textarea id="challenge-code" spellcheck="false">print("Hello PYN!")</textarea><div class="lesson-complete"><span id="challenge-result">Run your answer when ready.</span><button class="primary-btn" id="run-challenge">Check answer</button></div>`;
 $('#modal').classList.remove('hidden');
 $('#run-challenge').onclick=()=>{const v=$('#challenge-code').value.trim();if(/^print\(\s*(["'])Hello PYN!\1\s*\)\s*;?$/.test(v)){$('#challenge-result').textContent='✅ Correct! +20 XP';if(localStorage.getItem('pynDailyDone')!==new Date().toISOString().slice(0,10)){state.xp+=20;save();localStorage.setItem('pynDailyDone',new Date().toISOString().slice(0,10));renderAll();}}else{$('#challenge-result').textContent='Not quite. Use print() and make the text say Hello PYN!';}};
};

$$('.community-tab').forEach(b=>b.onclick=()=>{communityTab=b.dataset.communityTab;renderCommunity();});
if($('#upload-video-btn')) $('#upload-video-btn').onclick=openVideoForm;



const checks = [
 ['Who created Python?',['guido van rossum']],['What extension does a Python file use?',['.py','py']],['Which function prints output?',['print','print()']],['Which function reads user input?',['input','input()']],['Which symbol starts a comment?',['#']],['What value does xp hold after xp = 120?',['120']],['What is the type of True?',['bool','boolean']],['What is 20 + 15?',['35']],['What is "Py" + "thon"?',['python']],['What is int("50") + 10?',['60']],['What are the two Boolean values?',['true and false','true, false','true false']],['What is the index of the first list item?',['0']],['Are tuples mutable or immutable?',['immutable']],['Do sets keep duplicate values?',['no']],['What does user["name"] return in the example?',['alex']],['Which keyword handles the final alternative?',['else']],['Which keyword starts each match branch?',['case']],['What operator increments count in the example?',['+=']],['Which keyword repeats once for each item?',['for']],['What is the last number in range(1, 6)?',['5']],['Which keyword sends a result back from a function?',['return']],['Which module provides randint?',['random']],['Which module provides datetime?',['datetime']],['What is the square root of 81?',['9','9.0']],['Which json function parses JSON text?',['loads','json.loads','json.loads()']],['Which module provides findall?',['re']],['Which package is installed by pip install requests?',['requests']],['Which error catches an invalid integer conversion?',['valueerror']],['Which error occurs when a variable name is undefined?',['nameerror']],['Which Python module creates virtual environments?',['venv']]
];
const themes={purple:['#6c4df6','#8d74ff'],blue:['#225dcc','#528cf0'],green:['#157347','#35936b'],rose:['#b72e64','#d45b89'],orange:['#a94d12','#d47835']};
function applyTheme(){const t=themes[state.theme]||themes.purple;document.documentElement.style.setProperty('--purple',t[0]);document.documentElement.style.setProperty('--purple2',t[1]);}
function continueLearning(){go('learn');const i=lessons.findIndex((_,i)=>!state.completedLessons.includes(i));openLesson(i<0?0:i);}
$$('[data-continue]').forEach(b=>b.onclick=continueLearning);
function downloadCode(title,code){const url=URL.createObjectURL(new Blob([code],{type:'text/plain'}));const a=document.createElement('a');a.href=url;a.download=title.toLowerCase().replace(/[^a-z0-9]+/g,'-')+'.py';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
function renderMyProjects(){const list=state.myProjects||[];$('#my-projects').innerHTML=list.length?'<h3>My projects</h3>'+list.map((p,i)=>`<button class="secondary-btn" data-my-project="${i}">${escapeHtml(p.title)}</button>`).join(''):'';$$('[data-my-project]').forEach(b=>b.onclick=()=>openProjectEditor(state.myProjects[+b.dataset.myProject],+b.dataset.myProject));}
function openProjectEditor(project={title:'',code:''},index=-1){$('#modal-content').innerHTML=`<h2>${index<0?'Create a project':'Edit project'}</h2><p>Your project is saved on this device.</p><label for="project-title">Project name</label><input id="project-title" maxlength="80" value="${escapeHtml(project.title)}"><label for="project-code">Python code</label><textarea id="project-code" spellcheck="false">${escapeHtml(project.code)}</textarea><p id="project-message" role="status"></p><button id="save-project" class="primary-btn">Save project</button><button id="export-project" class="secondary-btn">Download code</button>`;$('#modal').classList.remove('hidden');$('#save-project').onclick=()=>{const p={title:$('#project-title').value.trim(),code:$('#project-code').value};if(!p.title||!p.code.trim()){$('#project-message').textContent='Add a name and some Python code.';return;}state.myProjects=state.myProjects||[];if(index<0){state.myProjects.push(p);index=state.myProjects.length-1;}else state.myProjects[index]=p;save();renderMyProjects();$('#project-message').textContent='Saved on this device.';};$('#export-project').onclick=()=>downloadCode($('#project-title').value||'my-project',$('#project-code').value);}
$('#create-project-btn').onclick=()=>openProjectEditor();
const accessories=[['none','No accessory',0],['glasses','Coder glasses',1],['cap','PYN cap',3],['headphones','Headphones',5],['star','Star badge',10],['crown','Builder crown',20],['snake','Golden snake',30]];
function avatarSvg(){const p=state.avatarParts||defaultState.avatarParts;const a=p.accessory;return `<svg viewBox="0 0 120 120" role="img" aria-label="Your custom PYN avatar"><circle cx="60" cy="60" r="59" fill="#eeeaff"/><path d="M18 120V100Q20 79 60 79Q100 79 102 100V120" fill="${p.shirt}"/><rect x="50" y="66" width="20" height="24" rx="8" fill="${p.skin}"/><ellipse cx="60" cy="48" rx="29" ry="34" fill="${p.skin}"/><path d="${p.style==='long'?'M28 70V35Q30 5 60 8Q94 6 94 40V75L83 69V35Q60 46 36 30V70Z':'M30 36Q25 5 61 8Q96 9 91 38Q65 24 30 36'}" fill="${p.hair}"/><circle cx="49" cy="48" r="3"/><circle cx="71" cy="48" r="3"/><path d="M48 63Q60 73 72 63" fill="none" stroke="#753d35" stroke-width="3"/>${a==='glasses'?'<g fill="none" stroke="#232334" stroke-width="3"><rect x="36" y="41" width="22" height="16" rx="5"/><rect x="62" y="41" width="22" height="16" rx="5"/><path d="M58 47H62"/></g>':a==='cap'?'<path d="M26 30Q27 4 60 4Q92 4 94 30Z" fill="#225dcc"/>':a==='headphones'?'<path d="M25 50V35Q25 1 60 1Q95 1 95 35V50" fill="none" stroke="#252536" stroke-width="9"/>':a==='crown'?'<path d="M34 22L29 3L48 13L60 0L72 13L91 3L86 22Z" fill="#ffb020"/>':a==='star'?'<text x="72" y="110" font-size="24">★</text>':a==='snake'?'<text x="70" y="112" font-size="28">🐍</text>':''}</svg>`;}
function renderAvatarEditor(){const p=state.avatarParts||defaultState.avatarParts;$('#avatar-options').innerHTML=[['skin','Skin tone',['#f5d0ad','#d99d70','#b97850','#75472f','#422b20']],['hair','Hair color',['#30241d','#77442d','#d3a34b','#e1dfe4']],['shirt','Shirt color',['#6c4df6','#225dcc','#157347','#b72e64']]].map(([key,label,colors])=>`<label>${label}</label><div class="swatches">${colors.map(c=>`<button aria-label="${label} ${c}" aria-pressed="${p[key]===c}" data-part="${key}" data-color="${c}" style="background:${c}"></button>`).join('')}</div>`).join('')+`<label for="hair-style">Hair style</label><select id="hair-style"><option value="short">Short</option><option value="long">Long</option></select>`;$('#hair-style').value=p.style;$('#hair-style').onchange=e=>{state.avatarParts={...p,style:e.target.value};save();renderProfile();};$$('[data-part]').forEach(b=>b.onclick=()=>{state.avatarParts={...p,[b.dataset.part]:b.dataset.color};save();renderProfile();});$('#accessory-options').innerHTML=accessories.map(([id,name,n])=>`<button class="secondary-btn" data-accessory="${id}" ${state.completedLessons.length<n?'disabled':''} aria-pressed="${p.accessory===id}">${name}<small>${n?'Complete '+n+' lessons':'Available now'}</small></button>`).join('');$$('[data-accessory]').forEach(b=>b.onclick=()=>{state.avatarParts={...p,accessory:b.dataset.accessory};save();renderProfile();});}

const projectCodes = ["import random\nprint(\"You rolled\", random.randint(1, 6))\n", "a = float(input(\"First number: \"))\nb = float(input(\"Second number: \"))\nop = input(\"Operation (+ - * /): \")\nif op == \"+\": print(a + b)\nelif op == \"-\": print(a - b)\nelif op == \"*\": print(a * b)\nelif op == \"/\" and b != 0: print(a / b)\nelse: print(\"Invalid operation or division by zero\")\n", "questions = [(\"Which function prints output?\", \"print\"), (\"What is 2 + 3?\", \"5\"), (\"Python file extension?\", \".py\")]\nscore = 0\nfor question, answer in questions:\n    if input(question + \" \").strip().lower() == answer:\n        score += 1\nprint(f\"Score: {score}/{len(questions)}\")\n", "import secrets\nimport string\nlength = int(input(\"Password length (12 or more): \"))\nif length < 12:\n    print(\"Choose at least 12 characters\")\nelse:\n    alphabet = string.ascii_letters + string.digits + \"!@#$%&*\"\n    print(\"\".join(secrets.choice(alphabet) for _ in range(length)))\n", "import random\nchoices = [\"rock\", \"paper\", \"scissors\"]\nyou = input(\"rock, paper, or scissors? \").strip().lower()\ncomputer = random.choice(choices)\nprint(\"Computer:\", computer)\nif you not in choices: print(\"Invalid choice\")\nelif you == computer: print(\"Draw\")\nelif (you, computer) in [(\"rock\", \"scissors\"), (\"paper\", \"rock\"), (\"scissors\", \"paper\")]: print(\"You win!\")\nelse: print(\"Computer wins\")\n", "import time\nseconds = int(input(\"Seconds: \"))\nfor remaining in range(seconds, 0, -1):\n    print(remaining)\n    time.sleep(1)\nprint(\"Time is up!\")\n", "board = [\" \"] * 9\nwins = [(0,1,2),(3,4,5),(6,7,8),(0,3,6),(1,4,7),(2,5,8),(0,4,8),(2,4,6)]\nplayer = \"X\"\nfor turn in range(9):\n    for row in range(0, 9, 3):\n        print(\" | \".join(board[row:row+3]))\n    while True:\n        try:\n            move = int(input(f\"{player}: choose 1-9: \")) - 1\n            if 0 <= move < 9 and board[move] == \" \": break\n        except ValueError:\n            pass\n        print(\"Choose an empty square between 1 and 9.\")\n    board[move] = player\n    if any(all(board[i] == player for i in line) for line in wins):\n        print(player, \"wins!\")\n        break\n    player = \"O\" if player == \"X\" else \"X\"\nelse:\n    print(\"Draw!\")\n", "responses = {\"hello\": \"Hi, coder!\", \"python\": \"Python is a programming language.\", \"help\": \"Try hello or python. Type quit to exit.\"}\nwhile True:\n    message = input(\"You: \").strip().lower()\n    if message == \"quit\": break\n    print(\"Bot:\", responses.get(message, \"I do not know that yet. Try help.\"))\n", "import json\nfrom urllib.request import urlopen\nfrom urllib.parse import urlencode\nlatitude = float(input(\"Latitude: \"))\nlongitude = float(input(\"Longitude: \"))\nquery = urlencode({\"latitude\": latitude, \"longitude\": longitude, \"current\": \"temperature_2m\"})\ntry:\n    with urlopen(\"https://api.open-meteo.com/v1/forecast?\" + query, timeout=15) as response:\n        data = json.load(response)\n    print(\"Temperature:\", data[\"current\"][\"temperature_2m\"], data[\"current_units\"][\"temperature_2m\"])\nexcept Exception as error:\n    print(\"Could not fetch weather:\", error)\n", "import json\nfrom pathlib import Path\npath = Path(\"tasks.json\")\ntry:\n    tasks = json.loads(path.read_text()) if path.exists() else []\nexcept (ValueError, OSError):\n    tasks = []\nwhile True:\n    print(\"\\n\".join(f\"{i+1}. {task}\" for i, task in enumerate(tasks)) or \"No tasks\")\n    action = input(\"add / remove / quit: \").strip().lower()\n    if action == \"quit\": break\n    if action == \"add\":\n        task = input(\"Task: \").strip()\n        if task: tasks.append(task)\n    elif action == \"remove\":\n        try:\n            number = int(input(\"Task number: \"))\n            if 1 <= number <= len(tasks): tasks.pop(number-1)\n        except ValueError: print(\"Enter a task number.\")\n    path.write_text(json.dumps(tasks))\n", "# Install first: python -m pip install openai\n# Set OPENAI_API_KEY and OPENAI_MODEL in your environment.\nimport os\nfrom openai import OpenAI\nclient = OpenAI()\nmodel = os.environ.get(\"OPENAI_MODEL\")\nif not model:\n    raise SystemExit(\"Set OPENAI_MODEL to a model available in your account.\")\nmessages = [{\"role\": \"system\", \"content\": \"You are a helpful Python tutor.\"}]\nwhile True:\n    text = input(\"You (quit to exit): \")\n    if text.lower() == \"quit\": break\n    messages.append({\"role\": \"user\", \"content\": text})\n    try:\n        response = client.chat.completions.create(model=model, messages=messages)\n        reply = response.choices[0].message.content or \"\"\n        print(reply)\n        messages.append({\"role\": \"assistant\", \"content\": reply})\n    except Exception as error:\n        print(\"Request failed:\", error)\n        messages.pop()\n", "# Install: python -m pip install streamlit pandas\n# Run: python -m streamlit run dashboard.py\nimport streamlit as st\nimport pandas as pd\nst.title(\"My data dashboard\")\nupload = st.file_uploader(\"Upload a CSV\", type=\"csv\")\nif upload:\n    try:\n        data = pd.read_csv(upload)\n        st.dataframe(data)\n        numbers = data.select_dtypes(include=\"number\").columns.tolist()\n        if numbers:\n            column = st.selectbox(\"Column to chart\", numbers)\n            st.bar_chart(data[column])\n        else:\n            st.info(\"Add a numeric column to draw a chart.\")\n    except Exception as error:\n        st.error(f\"Could not read CSV: {error}\")\n"];
const projectNotes = {"8": "Requires internet. Uses Open-Meteo.", "10": "Requires the openai package, your API key, and a model. API usage may cost money. Keep your key in your environment, never in shared code.", "11": "Requires streamlit and pandas. Run with python -m streamlit run dashboard.py."};
boot();
