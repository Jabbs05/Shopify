const closee = document.querySelector('#close')
const plan = document.querySelector('.select')
const parclo =document.querySelector('.part2')
const arr = document.querySelector('#arrow')
const pieces = document.querySelectorAll('.check')
const sect = document.querySelectorAll('.open')
const icons = document.querySelectorAll('#img')
const navdc = document.querySelector('.section')
const section = document.querySelector('.sections')
const progress =document.querySelector('.progress')
const progressNumber = document.getElementById('progress-number')
const bell = document.querySelector('#alerts')
const alertz = document.querySelector('.alerts')


function close(){
    plan.classList.add('selectgo')
  
}

function chan(){
    section.classList.toggle('chan')
    alertz.classList.remove('nahc')
}

function nahc(){
    alertz.classList.toggle('nahc')
   section.classList.remove('chan')
}
navdc.addEventListener('click',chan)

bell.addEventListener('click', nahc)


closee.addEventListener('click',close)

function spin(){
    parclo.classList.toggle('spin');
    pieces[0].classList.add('evap')
    pieces[1].classList.add('evap')
    pieces[2].classList.add('evap')
    pieces[3].classList.add('evap')
    pieces[4].classList.add('evap')
    if ( arr.style.transform === "rotate(0deg)") {
        arr.style.transform = "rotate(180deg)"
    } else {
        arr.style.transform = "rotate(0deg)"
    }
}
arr.addEventListener('click',spin)

// From Here
function first(){
    pieces[0].classList.remove('evap')

    if (pieces[0].classList.contains('evap')) {
        pieces[0].classList.remove('evap')
    } else {
        pieces[0].classList.remove('evap')
        pieces[1].classList.add('evap')
        pieces[2].classList.add('evap')
        pieces[3].classList.add('evap')
        pieces[4].classList.add('evap')
    }
}
sect[0].addEventListener('click',first)

function second(){
    pieces[1].classList.remove('evap')

    if (pieces[1].classList.contains('evap')) {
        pieces[1].classList.toggle('evap')
    } else {
        pieces[1].classList.remove('evap')
        pieces[0].classList.add('evap')
        pieces[2].classList.add('evap')
        pieces[3].classList.add('evap')
        pieces[4].classList.add('evap')
    }
}
sect[1].addEventListener('click',second)


function third(){
    pieces[2].classList.remove('evap')

    if (pieces[2].classList.contains('evap')) {
        pieces[2].classList.toggle('evap')
    } else {
        pieces[2].classList.remove('evap')
        pieces[0].classList.add('evap')
        pieces[1].classList.add('evap')
        pieces[3].classList.add('evap')
        pieces[4].classList.add('evap')
    }
}
sect[2].addEventListener('click',third)

function fourth(){
    pieces[3].classList.remove('evap')

    if (pieces[3].classList.contains('evap')) {
        pieces[3].classList.toggle('evap')
    } else {
        pieces[3].classList.remove('evap')
        pieces[0].classList.add('evap')
        pieces[1].classList.add('evap')
        pieces[2].classList.add('evap')
        pieces[4].classList.add('evap')
    }
}
sect[3].addEventListener('click',fourth)

function fifth(){
    pieces[4].classList.remove('evap')

    if (pieces[4].classList.contains('evap')) {
        pieces[4].classList.toggle('evap')
    } else {
        pieces[4].classList.remove('evap')
        pieces[0].classList.add('evap')
        pieces[1].classList.add('evap')
        pieces[2].classList.add('evap')
        pieces[3].classList.add('evap')
    }
}
sect[4].addEventListener('click',fifth)
// Till here is the code for toggling the five elements



let activeIconsCount = 0;

icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('jenga');

    if (icon.classList.contains('jenga')) {
      activeIconsCount++;
    } else {
      activeIconsCount--;
    }

    updateProgressBar();
  });
});

function updateProgressBar() {
  const progressPercentage = (activeIconsCount * 120) / icons.length;
  progress.style.width = `${progressPercentage}px`;

  progressNumber.innerHTML = `${activeIconsCount}`;
}







