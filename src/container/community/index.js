import {
  createElement,
  createHeader,
} from '../../script/layout'
const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)

const TAB_LIST = [
  {
    info: 'База знань',
    viewed: true,
  },
  {
    info: 'Інформація',
    viewed: false,
  },
]

const createTab = () => {
  const tabTwo = createElement('div', 'tab')

  TAB_LIST.forEach((item) => {
    const tab = createElement(
      'div',
      item.viewed ? 'tab__ch tab--viewed' : 'tab__ch',
    )
    const text = createElement(
      'div',
      'tab__text',
      item.info,
    )
    const under = createElement('div', 'tab__under')

    tab.append(text, under)

    tabTwo.append(tab)
  })
  return tabTwo
}

const tab = createTab()
page.append(tab)

const INFO_LIST = {
  width: 340,
  height: 160,
  src: '/img/community.png',
  title: 'Що таке база знань?',
  text: 'База знань - база даних, що містить правила виведення та інформацію про людський досвід і знання в деякій предметній галузі. У системах, що самонавчаються, база знань також містить інформацію, що є результатом вирішення попередніх завдань.',
  button: `Перейти до ком'юніті у Телеграм`,
}

const createInfo = () => {
  const infoBox = createElement('div', 'info')
  const img = createElement('img', 'info__img')
  img.src = INFO_LIST.src

  infoBox.appendChild(img)

  const title = createElement(
    'div',
    'info__title',
    INFO_LIST.title,
  )

  infoBox.appendChild(title)

  const textContainer = createElement(
    'div',
    'info__text',
    INFO_LIST.text,
  )

  infoBox.appendChild(textContainer)

  const buttonTeleg = createElement(
    'div',
    'button button__teleg',
    INFO_LIST.button,
  )

  infoBox.appendChild(buttonTeleg)

  return infoBox
}

const post = createInfo()

page.append(post)
