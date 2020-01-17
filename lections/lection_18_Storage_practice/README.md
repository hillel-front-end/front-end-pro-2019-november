# Изучить материал

+ https://tproger.ru/articles/localstorage/
+ https://developer.mozilla.org/ru/docs/Web/API/Storage
+ https://developer.mozilla.org/ru/Add-ons/WebExtensions/API/cookies
+ https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON
+ https://learn.javascript.ru/array-iteration

# Практика

# Лекция

1) Создать 1 блок кнопкой Click и счетчиком counter(в виде числа).
При нажатии на Click - counter увеличивается.
При перезагрузке страницы counter должен сохраняться.

2) Расширить функционал путем создания 2 - N, блоков функционал так же должен соответствовать заданию (1).

2) Создать кнопку ClearCounters()

3) Создать кнопку setCounter(), который запрашивает id блока и устанавливает значение( в типе number ) в counter.

4)(**) При увеличении counter-а - каждое значение до 50 должно окрашивать соответствующий блок в случайно сгенерированный цвет. Цвета генерируются при изменении counter-a и сохраняются в Storage. Когда значение доходит до 50 - применяется цвет по умолчанию. 'this.style.backgroundColor = "rgb(x, y, z)";' -> x = getRand(256) y = getRand(256) z = getRand(256)