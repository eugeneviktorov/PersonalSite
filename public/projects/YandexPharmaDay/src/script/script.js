// Стартовый логотип (загрузка)
setTimeout(() => {
	document.querySelector('.preload').classList.add('invisible')
}, 1000)



// Форма обратной связи
const form = document.getElementById("form");
const username = document.getElementById("from_name");
const email = document.getElementById("email_id");
const tel = document.getElementById("tel_number");
const sendButton = document.getElementById("send-button");


form.addEventListener("submit", (event) => {
	event.preventDefault();

	const isValidUserName = ValidateUsername(username.value);
	const isValidUserEmail = ValidateEmail(email.value);
	const isValidNumber = ValidateNumber(tel.value);

	if (isValidUserName) {
		username.classList.remove("isNotValid")
	} else {
		username.classList.add("isNotValid")
	}

	if (isValidUserEmail) {
		email.classList.remove("isNotValid")
	} else {
		email.classList.add("isNotValid")
	}

	if (isValidNumber) {
		tel.classList.remove("isNotValid")
	} else {
		tel.classList.add("isNotValid")
	}


	if (isValidUserEmail && isValidUserName && isValidNumber) {
		document.getElementById("alert").classList.remove("visible");

		var sendButton = document.getElementById("send-button");
		sendButton.innerText = 'Подождите';
		sendButton.disabled = true; // Делаем кнопку неактивной
		sendButton.classList.add("waiting"); // Добавляем класс "waiting" для стилизации

		const serviceID = 'service_9ayjieh';
		const templateID = 'template_xiaae2e';
		emailjs.sendForm(serviceID, templateID, form)
			.then(() => {
				sendButton.innerText = 'Заявка принята!';
				sendButton.classList.add("not_allowed");
				document.getElementById("from_name").value = "";
				document.getElementById("email_id").value = "";
				document.getElementById("tel_number").value = "";

			}, (err) => {
				sendButton.innerText = 'Отправить';
				sendButton.disabled = false; // Восстанавливаем активность кнопки
				alert(JSON.stringify(err));
			});
	} else {
		document.getElementById("alert").classList.add("visible");
	}
})

// Валидация(проверка) ввода полей
function ValidateUsername(username) {
	if (/^[А-ЯЁ а-яё A-Z a-z]{2,40}$/.test(username)) {
		return (true)
	}
	return (false)
}

function ValidateEmail(mail) {
	if (/^[a-zA-Zа-яА-Я0-9._-]+@[a-zA-Zа-яА-Я0-9.-]+\.[a-zA-Zа-яА-Я]{2,6}$/.test(mail)) {
		return true;
	}
	return false;
}

function ValidateNumber(tel) {
	if (/^[\s()+-]*([0-9][\s()+-]*){6,20}$/.test(tel)) {
		return (true)
	}
	return (false)
}

// Маска номера телефона и перемещение курсора в начало ввода
$.fn.setCursorPosition = function(pos) {
	if ($(this).get(0).setSelectionRange) {
		$(this).get(0).setSelectionRange(pos, pos);
	} else if ($(this).get(0).createTextRange) {
		var range = $(this).get(0).createTextRange();
		range.collapse(true);
		range.moveEnd('character', pos);
		range.moveStart('character', pos);
		range.select();
	}
};

function rightPos(phone) {
	for (var i = 0; i < phone.length; i++) {
		if (phone.charAt(i) == "_") {
			console.log(phone.charAt(i));
			return i
		}
	}
	return phone.length - 1
}
$(".input_form_phone").click(function() {
	let phone = $(this).val()
	$(this).setCursorPosition(rightPos(phone));
}).mask("+7 (999) 999-99-99", {
	autoclear: false
});



// Плавное появление элементов
function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('element-show');
		}
	});
}

let options = {
	threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
	observer.observe(elm);
}