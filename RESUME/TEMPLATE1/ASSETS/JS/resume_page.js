// Change Colors
let colors=document.querySelectorAll(".colors")
let title=document.querySelectorAll(".title")
let skill_color=document.querySelectorAll(".block")
let main_box=document.querySelector("#header-1")
let clrpicker=document.querySelector(".clr-picker")
let left=document.getElementsByClassName("toggle");
let right=document.getElementsByClassName("side-baar");
let body=document.querySelector("body");
let components=document.querySelectorAll(".wrap")
let c=clrpicker.value

clrpicker.addEventListener("input",()=>{
  let c=clrpicker.value
  main_box.style.background=c;
  components.forEach((component) => {
    let childNodes = component.querySelectorAll(".block");
    childNodes.forEach((node) => {
      node.style.background=c;
    });
  });

})


// ADD Button

let userinfo=document.querySelectorAll(".tgl")
let tglbtns=document.querySelectorAll(".tglbtn")
function isChecked(){
    tglbtns.forEach((btn,index)=>{
        if(btn.checked){
            userinfo[index].classList.add("displaying")
            userinfo[index].style.display=`block`
            setTimeout(() => {
                userinfo[index].classList.remove("notdisplaying")
            }, 500);
        }
        else{
            userinfo[index].classList.remove("displaying")                
            userinfo[index].classList.add("notdisplaying")                
            setTimeout(() => {
                userinfo[index].style.display=`none`
            }, 1000);
        }
    })
}
         

let add_btns=document.querySelectorAll(".add")

add_btns.forEach((btn,index)=>{
  btn.addEventListener("click",()=>{
    switch(index){
      case 0:
        technicalSkills()
        break;
      case 1:
        softSkill()
        break;
      case 2:
        hobbies()
        break;
      case 3:
        languages()
        break;
      case 4:
        certifications()
        break;
      case 5:
        workExperience()
        break;
      case 6:
        projects()
        break;
      case 7:
        education()
        break;
    }

  })
})

function technicalSkills(){
  let n = document.createElement("p")
  let c=clrpicker.value
  n.textContent=`Enter Skill`
  n.setAttribute("class","block")
  n.setAttribute("contenteditable","true")
  n.setAttribute("style",`background-color:${c};`)
  components[0].appendChild(n)
}

function softSkill(){
  let n = document.createElement("p")
  let c=clrpicker.value
  n.textContent=`Enter Skill`
  n.setAttribute("class","block")
  n.setAttribute("contenteditable","true")
  n.setAttribute("style",`background-color:${c};`)
  components[1].appendChild(n)
}

function hobbies(){
  let n = document.createElement("p")
  let c=clrpicker.value
  n.textContent=`Enter Hobby`
  n.setAttribute("class","block")
  n.setAttribute("contenteditable","true")
  n.setAttribute("style",`background-color:${c};`)
  components[2].appendChild(n)
}

function languages(){
  let n = document.createElement("p")
  let c=clrpicker.value
  n.textContent=`Enter Language`
  n.setAttribute("class","block")
  n.setAttribute("contenteditable","true")
  n.setAttribute("style",`background-color:${c};`)
  components[3].appendChild(n)
}

function certifications(){
  let n = document.createElement("p")
  let c=clrpicker.value
  n.textContent=`Enter Certification`
  n.setAttribute("class","block")
  n.setAttribute("contenteditable","true")
  n.setAttribute("style",`background-color:${c};`)
  components[4].appendChild(n)
}

function workExperience(){
  let n = document.createElement("li")
  n.innerHTML=`
  <div class="experience-block">
  <p class="title" contenteditable="true" placeholder="POSITION"></p>
  <p class="right" contenteditable="true" placeholder="From-Until"></p>
    <div class="experience">
     <p class="" contenteditable="true" placeholder="EMPLOYER"></p>
    </div>
    <p class="content exp" contenteditable="true" placeholder="Elaborate Your Work-[Enter space to keep it black]"></p>
 </div>`
  document.querySelector("#work-experience ul").appendChild(n)
}

function projects(){
  let n = document.createElement("li")
  n.innerHTML=`
  <div class="experience-block">
  <p class="title" contenteditable="true" placeholder="PROJECT NAME"></p>
  <p class="right" contenteditable="true" placeholder="From-Until"></p>
     <div class="experience">
      <p class="" contenteditable="true" placeholder="TECH USED"></p>
     </div>
     <p class="content exp" contenteditable="true" placeholder="Explain about your project-[Enter space to keep it black]"></p>
</div> `
  document.querySelector("#project ul").appendChild(n)
}

function education(){
  let n = document.createElement("li")
  n.innerHTML=`
  <div class="experience-block">
  <p class="title" contenteditable="true" placeholder="SCHOOL NAME"></p>
  <p class="right" contenteditable="true" placeholder="From-Until"></p>
    <div class="experience">
     <p class="" contenteditable="true" placeholder="GPA"></p>
    </div>
    <p class="content exp" contenteditable="true" placeholder="Write about achievements or titles you held-[Enter space to keep it black]"></p>
 </div> `
  document.querySelector("#education ul").appendChild(n)
}

// REMOVE Button
let remove_btns=document.querySelectorAll(".remove")
console.log(remove_btns)
// let components=document.querySelectorAll(".wrap")
let indexes=document.querySelectorAll(".index")

remove_btns.forEach((btn,index)=>{
  btn.addEventListener("click",()=>{
    switch(index){
      case 0:
        removetechnicalSkills()
        break;
      case 1:
        removesoftSkill()
        break;
      case 2:
        removehobbies()
        break;
      case 3:
        removelanguages()
        break;
      case 4:
        removecertifications()
        break;
      case 5:
        removeworkExperience()
        break;
      case 6:
        removeprojects()
        break;
      case 7:
        removeeducation()
        break;
    }

  })
})

function removetechnicalSkills(){
  components[0].removeChild(components[0].children[(indexes[0].value)-1])
}

function removesoftSkill(){
  components[1].removeChild(components[1].children[(indexes[1].value)-1])
}

function removehobbies(){
  components[2].removeChild(components[2].children[(indexes[2].value)-1])
}

function removelanguages(){
  components[3].removeChild(components[3].children[(indexes[3].value)-1])
}

function removecertifications(){
  components[4].removeChild(components[4].children[(indexes[4].value)-1])
}

function removeworkExperience(){
  document.querySelector("#work-experience ul").removeChild(document.querySelector("#work-experience ul").children[(indexes[5].value)-1])
}

function removeprojects(){
  document.querySelector("#project ul").removeChild(document.querySelector("#project ul").children[(indexes[6].value)-1])
}

function removeeducation(){
  document.querySelector("#education ul").removeChild(document.querySelector("#education ul").children[(indexes[7].value)-1])
}



// Font Change
let fs=document.querySelector("#font-style")

fs.addEventListener("input",()=>{
  let mc=document.querySelector(".main_container").style.fontFamily=fs.value
})

let linkedin=document.getElementById("linkedin");
let github=document.getElementById("github");

let al=document.getElementById("linkedinhere");
let ag=document.getElementById("githubhere");

linkedin.addEventListener("input",e=>{
      al.setAttribute("href",linkedin.value);
});

github.addEventListener("input",e=>{
  ag.setAttribute("href",github.value);
});



