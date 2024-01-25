(function () {
    const Navigation = document.querySelector('.Navigation');
    window.onscroll = () => {
        if (window.scrollY > 3) {
            Navigation.classList.add('Navigation_active');
        } else {
            Navigation.classList.remove('Navigation_active');
        }
    };
}());

document.addEventListener("DOMContentLoaded", function() {
    // Получаем ссылки на объекты
    var Mariya = document.getElementById("Mariya");
    var Alexey = document.getElementById("Alexey");
    var Irina = document.getElementById("Irina");
    var Mariya_name = document.getElementById("Mariya_name");
    var Alexey_name = document.getElementById("Alexey_name");
    var Irina_name = document.getElementById("Irina_name");
  
    // Добавляем обработчик события клика
    Mariya_name.addEventListener("click", function() {
      // Удаляем класс 
      Mariya.classList.remove("visually-hidden");
  
      // Добавляем класс
      Alexey.classList.add("visually-hidden");
      Irina.classList.add("visually-hidden");
    });
  
    // Добавляем обработчик события клика
    Alexey_name.addEventListener("click", function() {
      // Удаляем класс
      Alexey.classList.remove("visually-hidden");
  
      // Добавляем класс
      Mariya.classList.add("visually-hidden");
      Irina.classList.add("visually-hidden");
    });
  
    // Добавляем обработчик события клика
    Irina_name.addEventListener("click", function() {
      // Удаляем класс
      Irina.classList.remove("visually-hidden");
  
      // Добавляем класс "active" к object1
      Alexey.classList.add("visually-hidden");
      Mariya.classList.add("visually-hidden");
    });
  });


  var vector_r_price = document.getElementById("Vector_r_price");
  var vector_l_price = document.getElementById("Vector_l_price");
  var price_blocs = document.querySelectorAll(".price-bloc");
  var new_format = document.querySelector(".new_format");
  
  var currentIndex = 0; // Индекс текущего отображаемого блока
  
  function toggleDisplay(el, displayValue) {
    el.style.display = displayValue;
  }
  
  function handleClickR() {
    toggleDisplay(price_blocs[currentIndex], "none");
    currentIndex = (currentIndex + 1) % price_blocs.length;
    toggleDisplay(price_blocs[currentIndex], "block");
    toggleNewFormatVisibility();
  }
  
  function handleClickL() {
    toggleDisplay(price_blocs[currentIndex], "none");
    currentIndex = (currentIndex - 1 + price_blocs.length) % price_blocs.length;
    toggleDisplay(price_blocs[currentIndex], "block");
    toggleNewFormatVisibility();
  }
  
  function toggleNewFormatVisibility() {
    // Если отображается price_bloc_3, то отобразить .new_format, в противном случае - скрыть
    if (currentIndex === 2) {
      toggleDisplay(new_format, "block");
    } else {
      toggleDisplay(new_format, "none");
    }
  }
  
  vector_r_price.addEventListener("click", handleClickR);
  vector_l_price.addEventListener("click", handleClickL);
   

document.getElementById("Vector_r").addEventListener("click", function() {
  var block1 = document.getElementById("block_interes_1");
  var block2 = document.getElementById("block_interes_2");
  var block3 = document.getElementById("block_interes_3");
  var block4 = document.getElementById("block_interes_4");
  var block5 = document.getElementById("block_interes_5");
  var block6 = document.getElementById("block_interes_6");
  
  if (getComputedStyle(block1).display === "block") {
      block1.style.display = "none";
      block2.style.display = "block";
      document.getElementById("Vector_l").style.display = "block";
  } else if (getComputedStyle(block2).display === "block") {
      block2.style.display = "none";
      block3.style.display = "block";
  } else if (getComputedStyle(block3).display === "block") {
      block3.style.display = "none";
      block4.style.display = "block";
  } else if (getComputedStyle(block4).display === "block") {
      block4.style.display = "none";
      block5.style.display = "block";
  } else if (getComputedStyle(block5).display === "block") {
      block5.style.display = "none";
      document.getElementById("Vector_r").style.display = "none";
      block6.style.display = "block";
  }
});

document.getElementById("Vector_l").addEventListener("click", function() {
  var block1 = document.getElementById("block_interes_1");
  var block2 = document.getElementById("block_interes_2");
  var block3 = document.getElementById("block_interes_3");
  var block4 = document.getElementById("block_interes_4");
  var block5 = document.getElementById("block_interes_5");
  var block6 = document.getElementById("block_interes_6");

  if (getComputedStyle(block2).display === "block") {
      block2.style.display = "none";
      block1.style.display = "block";
      document.getElementById("Vector_l").style.display = "none";
  } else if (getComputedStyle(block3).display === "block") {
      block3.style.display = "none";
      block2.style.display = "block";
  } else if (getComputedStyle(block4).display === "block") {
      block4.style.display = "none";
      block3.style.display = "block";
  } else if (getComputedStyle(block5).display === "block") {
      block5.style.display = "none";
      block4.style.display = "block";
  } else if (getComputedStyle(block6).display === "block") {
      block6.style.display = "none";
      document.getElementById("Vector_r").style.display = "block";
      block5.style.display = "block";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var menuIcon = document.getElementById("menu_icon");
  var menuBloc = document.getElementById("menu_bloc");

  // Обработчик клика по #menu_icon
  menuIcon.addEventListener("click", function (event) {
      // Предотвращаем всплытие события, чтобы оно не передавалось дальше
      event.stopPropagation();

      // Переключаем стиль display у #menu_bloc
      if (menuBloc.style.display === "block") {
          menuBloc.style.display = "none";
      } else {
          menuBloc.style.display = "block";
      }
  });

  // Обработчик клика по любому месту на экране
  document.addEventListener("click", function () {
      // Если #menu_bloc видим, скрываем его
      if (menuBloc.style.display === "block") {
          menuBloc.style.display = "none";
      }
  });
});

// Получаем все элементы с классом "docs_bloc"
var docsBlocs = document.querySelectorAll('.docs_bloc');

// Функция для изменения значения атрибута "data-aos"
function updateDataAos() {
  // Получаем текущее значение ширины экрана
  var screenWidth = window.innerWidth;

  // Проверяем условие для изменения значения "data-aos"
  if (screenWidth <= 431) {
    // Если ширина экрана меньше или равна 431px, устанавливаем "fade-up"
    docsBlocs.forEach(function (docsBloc) {
      docsBloc.setAttribute('data-aos', 'fade-up');
    });
  } else {
    // Иначе, устанавливаем "fade-down"
    docsBlocs.forEach(function (docsBloc) {
      docsBloc.setAttribute('data-aos', 'fade-down');
    });
  }
}

// Вызываем функцию при загрузке страницы
updateDataAos();

// Обновляем значение "data-aos" при изменении размера окна
window.addEventListener('resize', updateDataAos);

function createHintContent(className) {
  var p = document.createElement('p');
  p.className = 'hint';

  switch (className) {
    case 'hint_2':
      p.innerHTML = '<mark>Аутентичные материалы</mark><br><br>Материалы, созданные носителями языка для носителей языка.';
      break;
    case 'hint_3':
      p.innerHTML = '<mark>Современные инструменты</mark><br><br>На уроках я предлагаю студентам актуальные интерактивные инструменты, с помощью которых легче погрузиться в языковую среду и усваивать материал.';
      break;
    case 'hint_1':
    default:
      p.innerHTML = '<mark>Коммуникативная методика</mark><br><br>Коммуникативная методика делает Вас активным участником общения на английском языке с первого урока. Вы развиваете все навыки языка, изучая его в контексте реальной жизни и культур англоязычных народов.';
      break;
  }

  return p;
}

function handleClick(event) {
  var hintContent = createHintContent(event.target.id);
  var overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);
  document.body.appendChild(hintContent);

  overlay.addEventListener('click', function () {
    document.body.removeChild(hintContent);
    document.body.removeChild(overlay);
  });
}

document.getElementById('hint_1').addEventListener('click', handleClick);
document.getElementById('hint_2').addEventListener('click', handleClick);
document.getElementById('hint_3').addEventListener('click', handleClick);
