const tabs = document.querySelectorAll('.Card__tab');
const tabContents = document.querySelectorAll('.Card__content');
const tabHrs = document.querySelectorAll('.Card__Hr');

// Обработчик клика по табу
tabs.forEach(tab => {
  tab.addEventListener('click', () => {

    // Удаляем класс active у всех табов и контента
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    tabHrs.forEach(content => content.classList.remove('active'));
    // Добавляем класс active только текущему табу и соответствующему контенту
    tab.classList.add('active');
    const tabContent = document.querySelector(`.Card__content[data-tab="${tab.dataset.tab}"]`);
    tabContent.classList.add('active');
    const tabHr = document.querySelector(`.Card__Hr[data-tab="${tab.dataset.tab}"]`);
    tabHr.classList.add('active');
  });
});