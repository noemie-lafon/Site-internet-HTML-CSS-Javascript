/* question 1 */
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/* question 3 */
function updateDateTime() {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString();
    document.getElementById('date').textContent = now.toLocaleDateString();
}
document.addEventListener('DOMContentLoaded', () => setInterval(updateDateTime, 1000));

/*question 4 */
function validateForm() {
    const nom = document.getElementById('nom').value;
    const mail = document.getElementById('mail').value;
    const mdp = document.getElementById('mdp').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const age = document.getElementById('age').value;

    if (!nom) {
        alert('Veuillez entrer votre nom.');
        return false;
    }

    if (!mail) {
        alert('Veuillez entrer une adresse e-mail valide.');
        return false;
    }

    if (!mdp) {
        alert('Veuillez entrer un mot de passe.');
        return false;
    }

    if (mdp !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas.');
        return false;
    }

    if (!age || age <= 0) {
        alert('Veuillez entrer un âge valide.');
        return false;
    }

    alert('Formulaire soumis avec succès !');
    return true;
}

/*question 5*/
if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
    let person = prompt("Entrez votre nom :");

    if (person != null) {
        document.getElementById("nom-prompt").innerHTML = "Bienvenue sur notre site, " + person + "!";
    }
}


/*question 2 */
function generateList(items) {
    const container = document.getElementById("list-container");
    const ul = document.createElement("ul");

    for (let i = 0; i < items.length; i++) {
        const li = document.createElement("li");
        li.textContent = items[i];
        ul.appendChild(li);
    }
    container.appendChild(ul);
}
document.getElementById("generate-btn").addEventListener("click", function () {
    const items = ["La Jeune fille au ballon, 1980, photographie", "Surréalisme", "La Chine des Tang : Une dynastie cosmopolite (7e-10e siècle)", "Paquebots 1913-1942: Une esthétique transatlantique"];

    generateList(items);
});
