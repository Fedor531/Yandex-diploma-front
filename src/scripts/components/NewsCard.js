export default class NewsCard {
  constructor(cardData, createTimeFormat) {
    this._cardData = cardData;
    this.createTimeFormat = createTimeFormat
  }

  createCardHtml() {
    this._cardImage = this._cardData.urlToImage ? this._cardData.urlToImage : 'https://i.ytimg.com/vi/3e0FsU1N6OQ/hqdefault_live.jpg'

    const markUp = `
    <div class="card">
      <img class="card__image" alt="Картинка новости">
      <div class="card__content">
        <p class="card__date"></p>
        <p class="card__title"></p>
        <div class="card__subtitle"></div>
        <p class="card__source"></p>
      </div>
    </div>`;

    const element = document.createElement('div')
    element.insertAdjacentHTML('afterbegin', markUp.trim())
    this.cardElement = element.firstElementChild
    this.cardElement.querySelector('.card__image').src = this._cardImage
    this.cardElement.querySelector('.card__date').textContent = this.createTimeFormat(this._cardData.publishedAt)
    this.cardElement.querySelector('.card__title').textContent = this._cardData.title
    this.cardElement.querySelector('.card__subtitle').textContent = this._cardData.description
    this.cardElement.querySelector('.card__source').textContent = this._cardData.source.name
    return this.cardElement
  }
}
