var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementById('closeBtn');

// Open modal
modalBtn.addEventListener('click', openModal);


// Close modal by button
closeBtn.addEventListener('click', closeModal);

// Close modal by outside click

window.addEventListener('click', clickOutside);

// Functions
function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function clickOutside(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}