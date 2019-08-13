/*
Я использую маску ввода номера (плагин maskedinput)
Можно так-же использовать и html-валидацию, добавив в форму с номером атрибуты:
pattern="^[7|8][0-9 -]+$" minlength="11" maxlength="16" 
*/
$(document).ready(function () {
    $("#phone").mask("+7 999 999-99-99");
});

/*
Это AJAX. И по скольку js я только изучаю, я не могу быть точно уверенным, что всё работает  правильно, по-этому я решил оставить
пока более привычную мне отправку формы с помощью html, а данный скрипт закомментировать
*/
$(document).ready(function () {

    $("#main-form").submit(function () {
        //Проверка на заполнение полей для пользователей safari
        if (document.form.name.value == '' || document.form.phone.value == '') {
            valid = false;
            return valid;
        }
        /*
        $.ajax({
            type: "POST",
            url: "https://digital-spectr.com/ac/academy.php",
            data: $(this).serialize(),
            //success: function () {
            //    window.location.href = 'https://digital-spectr.com/ac/academy.php', '_blank';
            //},
        }).done(function () {
            $(this).find("input").val("");
            console.log('okay(maybe not)');
            $("#main-form").trigger("reset");
        });
        */
        return false;
    });

});