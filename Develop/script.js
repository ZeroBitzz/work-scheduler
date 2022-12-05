$( document ).ready(function() {
  
  // DOM ELEMENT VARIABLES
  let currentDateTime = document.getElementById('currentDay')
  let hour9text = document.getElementById('hour9text')
  let hour10text = document.getElementById('hour10text')
  let hour11text = document.getElementById('hour11text')
  let hour12text = document.getElementById('hour12text')
  let hour1text = document.getElementById('hour1text')
  let hour2text = document.getElementById('hour2text')
  let hour3text = document.getElementById('hour3text')
  let hour4text = document.getElementById('hour4text')
  let hour5text = document.getElementById('hour5text')


  
  // EVENT LISTENERS FOR BUTTONS
  let hour9save = document.getElementById('9am-button')
  let hour10save = document.getElementById('10am-button')
  let hour11save = document.getElementById('11am-button')
  let hour12save = document.getElementById('12pm-button')
  let hour1save = document.getElementById('1pm-button')
  let hour2save = document.getElementById('2pm-button')
  let hour3save = document.getElementById('3pm-button')
  let hour4save = document.getElementById('4pm-button')
  let hour5save = document.getElementById('5pm-button')
  hour9save.addEventListener('click', saveText)
  hour10save.addEventListener('click', saveText)
  hour11save.addEventListener('click', saveText)
  hour12save.addEventListener('click', saveText)
  hour1save.addEventListener('click', saveText)
  hour2save.addEventListener('click', saveText)
  hour3save.addEventListener('click', saveText)
  hour4save.addEventListener('click', saveText)
  hour5save.addEventListener('click', saveText)
  
  // ARRs for the for loop that sets the colors according to time on the page
  let hoursTextArr = [hour9text, hour10text, hour11text, hour12text, hour1text, hour2text, hour3text, hour4text, hour5text]
  let hoursArrVal = [9, 10, 11, 12, 13, 14, 15, 16, 17]

  function refreshData(){ // refreshes page data when page is reloaded
    currentDateTime.innerHTML = dayjs().format('MMMM DD YYYY')
    let currentHour = dayjs().format('H')
    for(let i=0; i<hoursTextArr.length; i++){ // changes the color of each of the text boxes according to the current hour variable above
      if(hoursArrVal[i] < Number(currentHour)) { // If the time is the past
        hoursTextArr[i].classList.remove("present")
        hoursTextArr[i].classList.remove("future")
        hoursTextArr[i].classList.add("past")

      }else if(hoursArrVal[i] === Number(currentHour)) { // If the time is the present
        hoursTextArr[i].classList.remove("past")
        hoursTextArr[i].classList.remove("future")
        hoursTextArr[i].classList.add("present")

      }else{ // If the time is the future
        hoursTextArr[i].classList.remove("present")
        hoursTextArr[i].classList.remove("past")
        hoursTextArr[i].classList.add("future")
      }
    }

    // checks if there is a saved value in local storage for that hour, if so, it will set the values accordingly on the page
    localStorage.getItem('hour9localStorage') === null ? null : (hour9text.value = localStorage.getItem('hour9localStorage'))
    localStorage.getItem('hour10localStorage') === null ? null : (hour10text.value = localStorage.getItem('hour10localStorage'))
    localStorage.getItem('hour11localStorage') === null ? null : (hour11text.value = localStorage.getItem('hour11localStorage'))
    localStorage.getItem('hour12localStorage') === null ? null : (hour12text.value = localStorage.getItem('hour12localStorage'))
    localStorage.getItem('hour1localStorage') === null ? null : (hour1text.value = localStorage.getItem('hour1localStorage'))
    localStorage.getItem('hour2localStorage') === null ? null : (hour2text.value = localStorage.getItem('hour2localStorage'))
    localStorage.getItem('hour3localStorage') === null ? null : (hour3text.value = localStorage.getItem('hour3localStorage'))
    localStorage.getItem('hour4localStorage') === null ? null : (hour4text.value = localStorage.getItem('hour4localStorage'))
    localStorage.getItem('hour5localStorage') === null ? null : (hour5text.value = localStorage.getItem('hour5localStorage'))
  }

  function saveText(){ // simply saves the values inside the text area to local storage
    localStorage.setItem('hour9localStorage', hour9text.value)
    localStorage.setItem('hour10localStorage', hour10text.value)
    localStorage.setItem('hour11localStorage', hour11text.value)
    localStorage.setItem('hour12localStorage', hour12text.value)
    localStorage.setItem('hour1localStorage', hour1text.value)
    localStorage.setItem('hour2localStorage', hour2text.value)
    localStorage.setItem('hour3localStorage', hour3text.value)
    localStorage.setItem('hour4localStorage', hour4text.value)
    localStorage.setItem('hour5localStorage', hour5text.value)
  }

  refreshData() // calls refresh data once when the page is initially loaded
});
