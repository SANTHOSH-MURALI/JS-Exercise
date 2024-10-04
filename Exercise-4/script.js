const orgData = [
    { name: 'Google', ceo: 'Sundar pichai', year: 1998 },
    { name: 'Apple', ceo: 'Tim cook', year: 1976 },
    { name: 'Adidas', ceo: 'Bjørn Gulden', year: 1949 },
    { name: 'Android', ceo: 'Sundar Pichai ', year: 2003 },
    { name: 'Benz', ceo: 'Ola Källenius', year: 1883 },
    { name: 'Nike', ceo: 'John Donahoe', year: 1964 },
    { name: 'Jaguar', ceo: 'Adrian Mardell', year: 1935 },
    { name: 'Nvidia', ceo: 'Jensen Huang', year: 1993 },
    { name: 'HCL', ceo: 'C. Vijayakumar', year: 1976 },
    { name: 'Infosys', ceo: 'Salil Parekh', year: 1981 }
];

const images = document.querySelectorAll('img');
images.forEach((image) => {
    image.addEventListener('click', (event) => {
        const index = event.target.getAttribute('data-index');
        const orgInfo = orgData[index];

        const mouseButton = event.button === 0 ? 'Left' : event.button === 1 ? 'Middle' : 'Right';
        const coordinates = `(${event.clientX}, ${event.clientY})`;

        document.getElementById('org-name').textContent = orgInfo.name;
        document.getElementById('org-ceo').textContent = orgInfo.ceo;
        document.getElementById('org-year').textContent = orgInfo.year;
        document.getElementById('mouse-button').textContent = mouseButton;
        document.getElementById('coordinates').textContent = coordinates;
    });
});