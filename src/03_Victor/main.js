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