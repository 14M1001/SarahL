function getIPAddress() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ipAddress = data.ip;
            const ipAddressElement = document.getElementById('ipAddress');
            simulateMatrixEffect(ipAddressElement, `Adresse IP de l'utilisateur : ${ipAddress}`);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération de l\'adresse IP :', error);
            document.getElementById('ipAddress').textContent = 'Erreur lors de la récupération de l\'adresse IP.';
        });
}

function simulateMatrixEffect(element, text) {
    let index = 0;
    function displayText() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(displayText, Math.floor(Math.random() * 200)); // ajustez la vitesse de défilement ici
        }
    }
    displayText();
}

document.addEventListener('DOMContentLoaded', getIPAddress);

document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    
    // Fonction pour mettre à jour le compte à rebours
    function updateCountdown() {
        let count = 3;
        const countdownInterval = setInterval(() => {
            countdownElement.textContent = `${count}...`;
            count--;
            if (count < 0) {
                clearInterval(countdownInterval);
                countdownElement.textContent = ''; // Supprimer le compte à rebours après le décompte
            }
        }, 1000); // Mettre à jour le compte à rebours toutes les secondes (1000 millisecondes)
    }

    // Appeler la fonction pour démarrer le compte à rebours
    updateCountdown();
});

document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    const warningElement = document.getElementById('warning');
    
    // Fonction pour mettre à jour le compte à rebours
    function updateCountdown() {
        let count = 3;
        const countdownInterval = setInterval(() => {
            countdownElement.textContent = `${count}...`;
            count--;
            if (count < 0) {
                clearInterval(countdownInterval);
                countdownElement.textContent = ''; // Supprime le compte à rebours après le décompte
                warningElement.style.display = 'block'; // Affiche les logos d'attention à la fin du compte à rebours
            }
        }, 1000); // Met à jour le compte à rebours toutes les secondes (1000 millisecondes)
    }

    // Appelle la fonction pour démarrer le compte à rebours
    updateCountdown();
});

 setTimeout(function(){
        document.getElementById('hiddenLink').style.display = 'inline';
    }, 4000); // 4 seconds delay