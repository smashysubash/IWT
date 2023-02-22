var semno = 1;

function addsemester(){
    var sembox = document.querySelectorAll(".sem-box")[0];
    console.log(sembox);
    sembox.innerHTML += `<div class="content-box">
    <h3>Semester ${semno++}</h3>
    <div class="single-line">
        <label>Course Name</label>
        <label>Credit</label>
        <label>Grade</label>
    </div>
    <div>
    <div class="single-line">
        <input type="text" class="subj" placeholder="Course 1">
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
    <div class="single-line">
        <input type="text" class="subj" placeholder="Course 2">
        <input type="number" class="credit" min="0" max="10" step="0.5" oninput="checkgradeselection(this)" >
        <select class="grade">
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
    <div class="single-line">
        <input type="text" class="subj" placeholder="Course 3">
        <input type="number" class="credit" min="0" max="10" step="0.5" oninput="checkgradeselection(this)">
        <select class="grade">
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
    <div class="single-line">
        <input type="text" class="subj" placeholder="Course 4">
        <input type="number" class="credit" min="0" max="10" step="0.5" oninput="checkgradeselection(this)">
        <select class="grade">
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
    <div class="single-line">
        <input type="text" class="subj" placeholder="Course 5">
        <input type="number" class="credit" min="0" max="10" step="0.5" oninput="checkgradeselection(this)">
        <select class="grade">
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
    <div class="single-line">
        <input type="text" class="subj" placeholder="Course 6">
        <input type="number" class="credit" min="0" max="10" step="0.5" oninput="checkgradeselection(this)">
        <select class="grade">
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
    </div>
    <button onclick="addcourse(this)">Add Course</button>
</div>`;
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
    document.getElementById("result").innerText= ""+ans+" CGPA";
}

function addcourse(target){
    let cntbx = target.parentElement.children[2];
    console.log(cntbx);
    let no = cntbx.childElementCount+1;
    cntbx.innerHTML += `<div class="single-line"><input type="text" 
    class="subj" placeholder="Course `+no+`"><input type="number" class="credit" min="0" max="10" step="0.5" oninput="checkgrade(this)"><select class="grade"><option value="0"></option><option value="10">O</option><option value="9">A+</option><option value="8">A</option><option value="7">B+</option><option value="6">B</option><option value="0">RA</option><option value="0">AB/W/SA</option></select></div>`;
}

function checkgradeselection(target){
    let nextelem = target.parentElement.children[2];
    if(!nextelem.checked)
    {
        nextelem.style.borderColor="red";
    }
}
function checkcreditselection(target){
    let prevelem = target.parentElement.children[1];
    if(!(prevelem && prevelem.value)){
        prevelem.style.borderColor="red";
    }
}