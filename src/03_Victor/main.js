const sm = document.getElementById('small')
const handler = () => {
    console.log('Привет!')
}
sm.onclick = handler

const handler_1 = () => {
    console.log('Пока!')
}
sm.onclick = handler_1
sm.onclick = null

sm.addEventListener('click', handler)
sm.addEventListener('click', handler_1)
sm.removeEventListener('click', handler_1)

const a= document.getElementById('a')
a.addEventListener('click',(e)=>{
e.preventDefault()
    console.log('stop')
})