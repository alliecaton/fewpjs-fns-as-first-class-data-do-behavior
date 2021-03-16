/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  const t = time.split(':')
  t.splice(2, 1)
  const joined = t.join('')
  const parsed = parseInt(joined, 10)
  if (parsed < 1200) {
    return 'Good Morning'
  } else if (1200 <= parsed && parsed <= 1700) {
    return 'Good Afternoon'
  } else if (parsed > 1700) {
    return 'Good Evening'
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(str) {
  const greeting = document.getElementById('greeting')
  greeting.innerText = str
}