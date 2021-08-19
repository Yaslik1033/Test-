let data = [
  {
    "name": "italian",
    "recipesCount": 327,
    "imgUrl": "../img/cuisines/italian.png",
  },

  {
    "name": "sushi",
    "recipesCount": 237,
    "imgUrl": "../img/cuisines/sushi.png",
  },

  {
    "name": "indian",
    "recipesCount": 856,
    "imgUrl": "../img/cuisines/indian.png",
  },

  {
    "name": "mexican",
    "recipesCount": 529,
    "imgUrl": "../img/cuisines/mexican.png",
  },

  {
    "name": "french",
    "recipesCount": 27,
    "imgUrl": "../img/cuisines/french.png",
  },

  {
    "name": "chinese",
    "recipesCount": 145,
    "imgUrl": "../img/cuisines/chinese.png",
  },

  {
    "name": "steakhouse",
    "recipesCount": 174,
    "imgUrl": "../img/cuisines/steakhouse.png",
  },

  {
    "name": "pizza",
    "recipesCount": 327,
    "imgUrl": "../img/cuisines/pizza.png",
  },

  {
    "name": "seafood",
    "recipesCount": 731,
    "imgUrl": "../img/cuisines/seafood.png",
  },

  {
    "name": "american",
    "recipesCount": 1437,
    "imgUrl": "../img/cuisines/american.png",
  },
];

const container = document.querySelector('.cards');

// карточки отсортированы по количеству рецептов
data = data.sort((a, b) => a.recipesCount - b.recipesCount);

// добавление карточек кухонь
for (const card of data) {
  container.insertAdjacentHTML('beforeend', `
    <div
      class="card ${card.name}"
      style="background-image: url(${card.imgUrl});"
    >
      <a>
        <i class="recipes-count">${card.recipesCount} recipes</i>
        <span class="cuisine-name upper-case">${card.name}</span>
      </a>
    </div>
  `)
}

const active = document.querySelector('.active');
const labels = active.querySelectorAll('label');

labels[0].classList.add('active-circle');

// добавление выделения кружочка на слайдере
active.addEventListener('click', (event) => {
  const target = event.target;

  if (target.tagName !== 'LABEL') {
    return;
  }

  labels.forEach(label => label.classList.remove('active-circle'));
  target.classList.add('active-circle');
})