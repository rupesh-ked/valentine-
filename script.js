// Floating Hearts Animation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);

    // Randomize heart position and size
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    heart.style.fontSize = Math.random() * 20 + 10 + "px"; // Random sizes

    // Remove hearts after animation
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Generate floating hearts every 800ms
setInterval(createHeart, 800);

// Yes Button Click Event
document.querySelector(".yes-btn").addEventListener("click", () => {
    const question = document.querySelector(".question");
    const gif = document.querySelector(".gif");
    const btnGroup = document.querySelector(".btn-group");

    // Change text & GIF only when "Yes" is clicked
    question.innerHTML = "Forever? 💞";
    gif.src = "https://media.tenor.com/sqMrmFmyejwAAAAM/hug.gif";

    setTimeout(() => {
        question.innerHTML = "Are you sure? 💍";
        gif.src = "https://media.tenor.com/mqvLadAFFtMAAAAj/thinking-about-question-mark.gif";
    }, 2000);

    setTimeout(() => {
        question.innerHTML = "Yeahhhh!!! I love you Chandani. 💕 \n I promise to make you happy. I will forever love you.";
        gif.src = "https://media.giphy.com/media/G6N0pDDgDpLjUvNoyQ/giphy.gif";

        // Hide buttons after final message
        btnGroup.style.opacity = "0";
        setTimeout(() => {
            btnGroup.style.display = "none";
        }, 500);
    }, 4000);
});

// No Button Moves Inside the Wrapper (Fixed)
document.querySelector(".no-btn").addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const noBtn = document.querySelector(".no-btn");

    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Ensure button remains inside the wrapper
    const maxX = wrapperRect.width - noBtnRect.width - 20;
    const maxY = wrapperRect.height - noBtnRect.height - 20;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    // Move within the wrapper only
    noBtn.style.transform = `translate(${randomX - maxX / 2}px, ${randomY - maxY / 2}px)`;
});
