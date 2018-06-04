# rage.mp-animplayer
**Player animation** - то плагин для мультиплеера rage.mp, который позволяет в реальном времени просматривать и проигрывать анимации для персонажа.
Поможет найти анимации по ключевым словам. Библиотека анимаций насчитывает в 12к+ директорий. Реальные количество анимаций посчитано не было, но в районе 100к+

Интерфейс и его описание:

![Иллюстрация интерфейса с кратким описанием](https://github.com/TurEduard/rage.mp-animplayer/blob/master/gui.png)

Клавиши управления:
=====================
+[\`][\~][ё] - включает и выключает AnimPlayer (по умолчанию показывает весь список анимаций).
+[LEFT/RIGHT] - листает_текущий список (dist).
+[CTRL]+[LEFT/RIGHT] -  листает текущий список (dist) с шагом 100, если список не меньше 100.
+[SHIFT]+[LEFT/RIGHT] - листает текущий список (dist) с шагом 10 если список не меньше 10.
+[UP/DOWN] - листает текущий список анимаций (name) у текущего (dist).
+[CTRL]+[UP/DOWN] - увеличивает и уменьшает значение (flag).
+[BACKSPACE] - сбрасывает список если он сформирован по (request).
+[SPACE] - проигрывает анимацию если AnimPlayer.autoPlay = false.

Спосок команд:
=====================
*/animplayer - запускает AnimPlayer командой.
*/animplayer [request](строка поиска) - находит анимации по запросу (формирует список по request) и запускает AnimPlayer если он был до этого закрыт.
*/animplayer [dist/dist+name](числовые указатели) - находит анимацию по указаной директории (dist), запускает AnimPlayer и запускает анимацию под номером (name).
*/animflag [up/down/id](строковый или числовой указатель) - повышает, понижает или указывает значение flag для анимации (См. <https://wiki.rage.mp/index.php?title=Animations>).


