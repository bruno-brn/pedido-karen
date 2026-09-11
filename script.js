let currentPage = 1

const pages = document.querySelectorAll('.page')

// =========================
// TROCAR PÁGINA
// =========================

function showPage(pageNumber) {
  pages.forEach((page) => {
    page.classList.remove('active')
  })

  const target = document.getElementById(`page-${pageNumber}`)

  if (target) {
    target.classList.add('active')
  }

  currentPage = pageNumber

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

function nextPage() {
  if (currentPage < 3) {
    showPage(currentPage + 1)
  }
}

// =========================
// BOTÃO NÃO
// =========================

const noButton = document.getElementById('noButton')

const noMessage = document.getElementById('noMessage')

let noAttempts = 0

const messages = [
  'Tem certeza? 🥺',
  'Pensa mais um pouquinho...',
  'Olha que eu preparei tudo isso pra você ❤️',
  'Acho que você clicou no botão errado 😭',
  'Karen... você sabe que é SIM. ❤️',
  'Última chance... 👀',
]

function moveNoButton() {
  noAttempts++

  const buttonWidth = noButton.offsetWidth
  const buttonHeight = noButton.offsetHeight

  const maxX = Math.max(10, window.innerWidth - buttonWidth - 30)

  const maxY = Math.max(10, window.innerHeight - buttonHeight - 30)

  const x = Math.random() * maxX

  const y = Math.random() * maxY

  noButton.style.position = 'fixed'

  noButton.style.left = `${x}px`

  noButton.style.top = `${y}px`

  noMessage.textContent =
    messages[Math.min(noAttempts - 1, messages.length - 1)]
}

// No celular usamos toque.
// No computador usamos aproximação do mouse.

noButton.addEventListener('mouseenter', () => {
  if (window.innerWidth > 600) {
    moveNoButton()
  }
})

noButton.addEventListener('click', () => {
  moveNoButton()
})

// =========================
// SIM ❤️
// =========================

function sayYes() {
  createCelebration()

  setTimeout(() => {
    showPage(3)
  }, 900)
}

// =========================
// CORAÇÕES
// =========================

function createHeart() {
  const container = document.getElementById('hearts')

  const heart = document.createElement('span')

  heart.className = 'floating-heart'

  heart.innerHTML = '♥'

  heart.style.left = `${Math.random() * 100}%`

  heart.style.fontSize = `${10 + Math.random() * 20}px`

  heart.style.animationDuration = `${6 + Math.random() * 7}s`

  container.appendChild(heart)

  setTimeout(() => {
    heart.remove()
  }, 14000)
}

setInterval(createHeart, 900)

// =========================
// CHUVA DE CORAÇÕES
// =========================

function createCelebration() {
  const container = document.getElementById('hearts')

  for (let i = 0; i < 35; i++) {
    setTimeout(() => {
      const heart = document.createElement('span')

      heart.className = 'floating-heart'

      heart.innerHTML = '♥'

      heart.style.left = `${Math.random() * 100}%`

      heart.style.fontSize = `${15 + Math.random() * 25}px`

      heart.style.animationDuration = `${3 + Math.random() * 3}s`

      container.appendChild(heart)

      setTimeout(() => {
        heart.remove()
      }, 7000)
    }, i * 45)
  }
}
