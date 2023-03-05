var bar;
var semno = 2;
function addsemester(){
    var sembox = document.querySelectorAll(".sem-box")[0];
    var cntbx = document.createElement('div');
    cntbx.className = "content-box";
    cntbx.id=`semester${semno}`;
    cntbx.innerHTML += `<h2>Semester ${semno++}</h2>
    <div class="single-line">
        <p>S.No.</p>
        <p>Course Name</p>
        <p>Credit</p>
        <p>Grade</p>
    </div>`;
    var bx = document.createElement('div');
    for(let i=1;i<7;i++){
        bx.innerHTML+=`<div class="single-line">
        <p>${i}</p>
        <input type="text" class="subj" placeholder="Course ${i}">
        <input type="number" class="credit" min="0" max="10" oninput="checkgradeselection(this)" step="0.5" >
        <select class="grade" onchange="checkcreditselection(this)">
            <option value="0"></option>
            <option value="10">O</option>
            <option value="9">A+</option>
            <option value="8">A</option>
            <option value="7">B+</option>
            <option value="6">B</option>
            <option value="0">RA</option>
            <option value="0">AB/W/SA</option>
        </select>
    </div>
    `;
    }
    bx.innerHTML+=`</div>`;
    cntbx.appendChild(bx);
    
    cntbx.innerHTML+=`</div>
    <button onclick="addcourse(this)">Add Course</button>
    <button onclick="calcgpa(this)">Calculate GPA</button>
    <div class="gpares"></div>`;
    sembox.appendChild(cntbx);
    var gpares = document.getElementById("gparesult");
    gpares.innerHTML+=`<a href="#semester${semno-1}"><div class="single-line"><p>Sem ${semno-1}</p><p id="sem${semno-1}">0.0</p></div></a>`;
}
                
function injectfirst(){
    var firstcon = document.getElementById("first_con");
    for(let i=1;i<7;i++){
        firstcon.innerHTML+=`<div class="single-line">
        <p>${i}</p>
        <input type="text" class="subj" placeholder="Course ${i}">
        <input type="number" class="credit" min="0" max="10" oninput="checkgradeselection(this)" step="0.5" >
        <select class="grade" onchange="checkcreditselection(this)">
            <option value="0"></option>
            <option value="10">O</option>
            <option value="9">A+</option>
            <option value="8">A</option>
            <option value="7">B+</option>
            <option value="6">B</option>
            <option value="0">RA</option>
            <option value="0">AB/W/SA</option>
        </select></div>`;
    }
    var gpares = document.getElementById("gparesult");
    gpares.innerHTML=`<div class="single-line"><h4>Semester</h4><h4>GPA</h4></div>`;

    gpares.innerHTML+=`<a href="#semester${semno-1}"><div class="single-line"><p>Sem 1</p><p id="sem1">0.0</p></div></a>`;
    bar = new ProgressBar.SemiCircle(container, {
    strokeWidth: 10,
    color: '#9615DB',
    trailColor: 'rgba(249,233,245,1)',
    trailWidth: 10,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: null,
    text: {
        value: '',
        alignToBottom: false
    },

    // Set default step function for all animate calls
    step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
        var value = (bar.value() * 10).toFixed(2);
        if (value === 0) {
        bar.setText('');
        } else {
        bar.setText(value);
        }

        bar.text.style.color = state.color;
    }
    });
    bar.text.style.fontSize = '2rem';
    bar.text.fontWeight = 'bold';
    bar.animate(0);
}

function calcgpa(target){
    var bx = target.parentElement;
    var credits = bx.querySelectorAll(".credit");
    var grades = bx.querySelectorAll(".grade");
    var ans=0,crs=0;
    for(let i=0;i<grades.length;i++){
        ans+=(parseFloat((credits[i].value==""?"0":credits[i].value))*parseFloat((grades[i].value==""?"0":grades[i].value)));
        crs+=parseFloat((credits[i].value==""?"0":credits[i].value));
    }
    ans/=crs;
    if(isNaN(ans)){
        alert("Enter the values");
        return;
    }
    var res = target.parentElement.children[0].innerHTML.split(" ");
    console.log(""+res[res.length-1]);
    document.getElementById("sem"+res[res.length-1]).innerHTML=ans;
}

function calcsem(){

    var cr = document.querySelectorAll(".credit");
    var gr = document.querySelectorAll(".grade");
    var ans=0,crs=0;
    for(let i=0;i<gr.length;i++){
        ans+=(parseFloat((cr[i].value==""?"0":cr[i].value))*parseFloat((gr[i].value==""?"0":gr[i].value)));
        crs+=parseFloat((cr[i].value==""?"0":cr[i].value));
    }
    ans/=crs;
    if(isNaN(ans)){
        alert("Enter the values");
        return;
    }
    bar.animate(ans/10);
}

function addcourse(target){
    let cntbx = target.parentElement.children[2];
    let no = cntbx.childElementCount+1;
    var div = document.createElement('div');
    div.className="single-line";
    div.innerHTML += `<p>${no}</p><input type="text" class="subj" placeholder="Course ${no}">
    <input type="number" class="credit" min="0" max="10" oninput="checkgradeselection(this)" step="0.5" >
    <select class="grade" onchange="checkcreditselection(this)">
        <option value="0"></option>
        <option value="10">O</option>
        <option value="9">A+</option>
        <option value="8">A</option>
        <option value="7">B+</option>
        <option value="6">B</option>
        <option value="0">RA</option>
        <option value="0">AB/W/SA</option>
    </select></div>`;
    cntbx.appendChild(div);
}

function checkgradeselection(target){
    let curelem = target;
    let nextelem = target.parentElement.children[3];
    if(nextelem.value=="0")
    {
        nextelem.style.borderColor="red";
    }
    if(curelem && curelem.value>=0){
        curelem.style.border="";
    }
}
function checkcreditselection(target){
    let curelem = target;
    let prevelem = target.parentElement.children[2];
    if(!(prevelem && prevelem.value)){
        prevelem.style.borderColor="red";
    }
    if(curelem.checked !="0"){
        curelem.style.border="";
    }
}
