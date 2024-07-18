document.addEventListener('DOMContentLoaded', () => {
    const oddButton = document.getElementById('odd');
    const evenButton = document.getElementById('even');
    const messageElement = document.getElementById('message');
    const jokeElement = document.getElementById('joke');
    const reactionElement = document.getElementById('reaction');
    const particleContainer = document.getElementById('particle-container');
    const userNumberInput = document.getElementById('user-number');
    const descriptionBox = document.getElementById('description-box');
    const startButton = document.getElementById('start-button');

    const computerJokes = [
        "Why did the computer keep freezing? It left Windows open!",
        "My computer once beat me at chess, but it was no match for me at kickboxing.",
        "Why don’t robots ever get lost? They always take the shortest byte.",
        "My laptop is so slow, it took a nap while opening a new tab.",
        "I told my computer I needed a break, and it shut down for the day.",
        "Why was the computer cold? It left its Windows open.",
        "My PC is so outdated, it still thinks a cloud is something that brings rain."
    ];
    
    const userJokes = [
        "You humans reboot with coffee; I just need a software update.",
        "Must be tough having a battery life shorter than a smartphone.",
        "Your idea of multitasking is eating while watching TV. Impressive.",
        "I process a million calculations per second, and you still forget your passwords.",
        "If only your memory was as good as my hard drive.",
        "You're the reason why 'user-friendly' is still a work in progress.",
        "Evolution took millions of years, but you're still waiting for a brain upgrade."
    ];
    

    const reactions = {
        win: '😄',
        lose: '😢'
    };

    startButton.addEventListener('click', () => {
        startButton.style.display = 'none';
        const fistEmoji = document.createElement('div');
        fistEmoji.id = 'fist-emoji';
        fistEmoji.innerHTML = '👊';
        descriptionBox.appendChild(fistEmoji);
        descriptionBox.style.animation = 'boxToFist 0.5s forwards';
        fistEmoji.style.display = 'block';
        setTimeout(() => {
            descriptionBox.style.display = 'none';
        }, 500);
    });

    oddButton.addEventListener('click', () => handleChoice('odd'));
    evenButton.addEventListener('click', () => handleChoice('even'));

    function handleChoice(userChoice) {
        const userNumber = parseInt(userNumberInput.value);
        if (isNaN(userNumber)) {
            messageElement.textContent = 'Please enter a valid number.';
            userNumberInput.classList.add('shake');
            setTimeout(() => userNumberInput.classList.remove('shake'), 500);
            return;
        }

        const computerNumber = Math.floor(Math.random() * 10) + 1;
        const sum = userNumber + computerNumber;
        const result = sum % 2 === 0 ? 'even' : 'odd';

        particleContainer.innerHTML = '';
        jokeElement.style.animation = 'none';
        reactionElement.textContent = '';

        if (userChoice === result) {
            messageElement.textContent = `You chose ${userChoice} and the sum was ${sum} (${userNumber} + ${computerNumber}). You win!`;
            jokeElement.textContent = computerJokes[Math.floor(Math.random() * computerJokes.length)];
            reactionElement.textContent = reactions.win;
            messageElement.style.animation = 'pulse 0.5s ease';
            showConfetti();
        } else {
            messageElement.textContent = `You chose ${userChoice} and the sum was ${sum} (${userNumber} + ${computerNumber}). You lose!`;
            jokeElement.textContent = userJokes[Math.floor(Math.random() * userJokes.length)];
            reactionElement.textContent = reactions.lose;
            messageElement.style.animation = 'shake 0.5s ease';
            showBrokenHearts();
        }

        setTimeout(() => {
            messageElement.style.animation = '';
            jokeElement.style.animation = '';
        }, 10);
    }

    function showConfetti() {
        const confettiContainer = document.createElement('div');
        confettiContainer.classList.add('confetti');

        for (let i = 0; i < 500; i++) {
            const confettiPiece = document.createElement('div');
            confettiPiece.classList.add('confetti-piece');
            confettiPiece.style.left = `${Math.random() * 100}%`;
            confettiPiece.style.top = `${Math.random() * -100}px`;
            confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            confettiPiece.style.animationDuration = `${Math.random() * 3 + 2}s`;
            confettiContainer.appendChild(confettiPiece);
        }

        document.body.appendChild(confettiContainer);

        setTimeout(() => {
            confettiContainer.remove();
        }, 3000);
    }

    function showBrokenHearts() {
        const brokenHeartContainer = document.createElement('div');
        brokenHeartContainer.classList.add('confetti');

        for (let i = 0; i < 100; i++) {
            const brokenHeartPiece = document.createElement('div');
            brokenHeartPiece.classList.add('broken-heart');
            brokenHeartPiece.style.left = `${Math.random() * 100}%`;
            brokenHeartPiece.style.top = `${Math.random() * -100}px`;
            brokenHeartPiece.style.animationDuration = `${Math.random() * 3 + 2}s`;
            brokenHeartContainer.appendChild(brokenHeartPiece);
        }

        document.body.appendChild(brokenHeartContainer);

        setTimeout(() => {
            brokenHeartContainer.remove();
        }, 3000);
    }
});
