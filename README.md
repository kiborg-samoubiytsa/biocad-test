# Что реализовал из тестового
## Сам базовый функционал (background элементов красится в нужный цвет в основной последовательности, в дополнительной только при отличии от символа в основной)
## Валидацию символов и длины последовательности
## Сохранение последовательности рядов при изменении размера страницы
## Копирование части последовательности при выделении и оповещение
## Сами оповещения об ошибке валидации(символы и длина) и о копировании я вынес в отдельный компонент, чтобы их логика была связной

# Запуск проекта
Проект сбилжен на vite, так что процесс запуска немного отличается от привычного CRA
```bash
Проверьте, что установлены все зависимости, если нет, то
$ npm i
Если установлены, то
$ npm run dev
```

# Структура проекта
public

src

src\assets

src\components

src\shared

src\components\DNASequences

src\components\Form

src\components\Messages

src\components\DNASequences\DNAElement

src\components\DNASequences\lib

src\components\DNASequences\PrimarySequence

src\components\DNASequences\SecondarySequence

src\components\Form\ComparedInput

src\components\Form\PrimaryInput

src\components\Form\SubmitButton

src\components\Messages\Message

