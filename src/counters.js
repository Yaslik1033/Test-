const values = [
  23567,
  431729,
  892173,
  56581,
  3182
];


const countersContainer = document.querySelector('.counters .container');
const counters = countersContainer.querySelectorAll('.counter');
const screenHeight = document.documentElement.clientHeight;

// возвращает строку в формате Thousands Separator
function thousandsSeparator(num) {
  const copy = `${num}`.split('');

  for (let i = copy.length - 3; i >= 0; i -= 3) {
    if (i !== 0) {
      copy.splice(i, 0, ',');
    }
  }

  return copy.join('');
}

// counter - счётчик, у которого набегает значение вплоть до value
function runningNums(counter, value) {
  const display = counter.querySelector('.count');
  const step = Math.ceil(value / 400);
  let n = 0;
  const interval = setInterval(() => {
    n += step;
    display.textContent = n;

    if (n >= value) {
      display.textContent = thousandsSeparator(value);
      clearInterval(interval);
    }
  }, 1)
}

// цифры будут набегать только один раз
// после того как пользователь долистает до нужного блока
const promise = new Promise((resolve) => {
  window.addEventListener('scroll', () => {
    const countersTop = countersContainer.getBoundingClientRect().top;
  
    if (screenHeight - countersTop > 80) {
      resolve()
    }
  })
}).then (() => {
  for (let i = 0; i < counters.length; i++) {
    runningNums(counters[i], values[i]);
  }
}
)