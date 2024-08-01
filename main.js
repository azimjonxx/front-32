
document.addEventListener("DOMContentLoaded", () => {
    const data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];
    const container = document.getElementById('container');

    data.map(number => {
        const div = document.createElement('div');
        div.classList.add('item');

        
        div.textContent = number;
        if (number > 50) {
            div.classList.add('green-bg');
        } else {
            div.classList.add('red-bg');
        }

      
        container.appendChild(div);
    });
});
