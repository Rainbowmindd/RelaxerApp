const container = document.querySelector('.container') //class
const text = document.querySelector('#text') //id of text

const totalTime = 7500
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

breahteAnimation()

function breahteAnimation() {
	text.innerHTML = 'Breathe In!'
	container.className = 'container grow'

	setTimeout(() => {
		text.innerText = 'Hold' //we wanna change (inner)text to hold after breatheTime amount of time
		setTimeout(() => {
			text.innerText = 'Breathe Out!'
			container.classList.add('shrink') 
			container.classList.remove('grow')
		}, holdTime)
	}, breatheTime)
}

setInterval(breahteAnimation, totalTime) //we run the function for every 7,5s (7500ms)
