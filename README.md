# Задачи

<details>
<summary>Первая часть</summary>

[Пример](http://5a26994e4c4b9335b1c950ef.nervous-mahavira-382e88.netlify.com/)

_Если вы хотите разлогиниться, удалите ключ из localstorage_

_Мы создаем криптобиржу, где можно торговать битокинами и эфиром. Естественно нам нужно сделать крутую авторизацию,
чтобы не стояло вопросов, о том, насколько крутой у нас проект._

1.  Сверстать страницу login и форму.

    _Вам поможет пакет react-particles-js._

    _Файл конфигурации находится в репозитории проекта. Попробуйте настроить партиклы так, как вам нравится самим_

1.  Напишите саги, редьюсеры и экшены для работы с авторизацией и регистрацией.
    - Необходимо протестировать редьюсеры и саги
1.  Используйте localstorage для хранения ключа авторизации.
1.  Страница регистрации и авторизации выводит ошибку в случае если сетевой запрос возвращает ошибку, нужно выводить
    ошибку регистрации/авторизации.
    - Протестируйте все инпуты вашей формы.
    - Протестируйте изменение формы авторизация/регистрация через стейт.
1.  Сделайте 2 роутера, 1 общий, где будет страница авторизации и второй роутер. Второй роутер будет для авторизованных
    пользователей, и там бы сделаем общую верстку приложения.
1.  Используйте макеты из этого проекта для

</details>

<details>
<summary>Вторая часть</summary>
[Пример финальной части](https://gifted-tereshkova-07ce20.netlify.com/)

1.  После авторизации вы должны попадать на страницу торгов, на которой присутствует график цен, кнопки переключения
    валют в шапке, и кнопки переключения временного диапозона.
1.  Для рисования графика я использую библиотеку `react-easy-chart` и библиотеку `moment` для форматирования времени:

    ```
    import {LineChart} from 'react-easy-chart';
    ...

    <LineChart
        lineColors={['blue', 'red']}
        axes
        grid
        verticalGrid
        interpolate={'cardinal'}
        xType={'time'}
        datePattern={'%d-%m %H:%M'}
        width={750}
        height={400}
        style={{
          '.axis path': {
            stroke: '#EDF0F1',
          },
        }}
        data={[
          sell.map(([date, value]) => ({x: moment(date).format('DD-MM HH:mm'), y: value})),
          purchase.map(([date, value]) => ({x: moment(date).format('DD-MM HH:mm'), y: value})),
        ]}
      />
    ```

1.  Для работы с данными я добавил в репозиторий новый файл api.js и файл саги currency.js. В этой саге реализована
    логика для получения данных каждые 15 секунд, в зависимости от того, какой offset выбран. Offset это параметр,
    который указывает, какой интервал нужно получать, в моем примере можно выбрать следующие оффсеты:
    ```
      const offsets = {
        '2h': '2ч',
        '4h': '4ч',
        '8h': '8ч',
        '1d': '1д',
        '7d': '7д',
      };
    ```
1.  Изучите с помощью redux-devtools как рабоатет мое приложение, для лучшего понимания того, как и какие экшены летят,
    и как на них реагирует приложение.

1.  После логина нужно получить текущие значения кошелька, в `api.js` есть метод для этого.
1.  Значения кошелька нужно выводить на странице с графиком.
1.  Покупка и продажа на странице с графиком цен.

    _Я положил в проект свою реализацию купли и продажи, там совмещены логика компоненты и recompose._ _Попробуйте
    написать свою реализацию, там много подвоных камней с инпутами._

    - Если вы будете делать свою реализацию, то инпуты должны вести себя адекватно(не превращаться в NaN, конвертировать
      валюты правильно)

1.  Реализовать покупку, продажу, а так же вывод ошибок.

        _В api так же пристутствуют методы для покупки и продажи_

</details>