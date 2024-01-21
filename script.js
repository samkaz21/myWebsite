const vault_codes = []


document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const vault_button = document.querySelector('#button-vault');
vault_button.addEventListener('click', function (e) {
    alert('Vault button clicked!');
});




// FACT SECTION 

const facts = [
    "I'm a huge fan of fantasy novels and movies.",
    "I enjoy playing video games in my free time.",
    "I always play games on the hardest difficulty.",
    "I almost got a perfect score on my math SAT but was average in English.",
    "I spent the majority of my life in Lebanon",
    "I can speak Arabic",
    "I am passionate about learning new things",
    "I enjoy watching a variety of anime",
    "My favorite anime is One Piece",
    "I am somewhat shy at first but open up quickly",
    "My favorite video games are the Dark Souls series",
    "I love to read",
    "I enjoy playing board games with friends",
    "I love to cook",
    "I make a mean beef noodle soup",
    "My morning coffee is a must",
    "I rarely purchase coffee, I prefer to make my own",
];

const remainingFacts = [...facts];

function displayRandomFact() {
    if (remainingFacts.length > 0) {
        const randomIndex = Math.floor(Math.random() * remainingFacts.length);
        document.getElementById('fact-display').innerText = remainingFacts[randomIndex];
        remainingFacts.splice(randomIndex, 1); // Remove the displayed fact from the array
        console.log(remainingFacts.length);
    }

    if (remainingFacts.length === 0) {
        const factButton = document.querySelector('#random-facts button');
        factButton.disabled = true; // Disable the button
        document.getElementById('fact-display').innerText = "Thanks for learning a lot about me =]";
    }
}

const startingFact = document.querySelector('#fact-display');
if (facts.length > 0) {
    const randomIndex = Math.floor(Math.random() * facts.length);
    startingFact.innerText = facts[randomIndex];
    remainingFacts.splice(randomIndex, 1); // Remove the initially displayed fact
}

// END FACT SECTION