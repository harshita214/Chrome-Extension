randfacts = [
    "The most iconic donut shop in Hollywood is Randy's Donuts. It has appeared in many movies including Crocodile Dundee and Iron Man 2.",
    "There are more than 1,100 known tributaries flowing into the Amazon River. Tributaries are sources of water such as a small river, stream  or other water flow that reaches the river.",
    "Nickel can also be mined from large deposits on the ocean's floor.",
    "Position of the ears and facial expression show emotional state of the sheep.",
    "At the age of 5 years, young males fight for dominance and opportunity to create their own herd. During the fight, males will try to bite front legs of their opponents.",
    "Spitting cobras can spit their venom with incredible accuracy. They can align with predator's head and deliver venom right into eyes.",
    "Anne Rice's mother believed that by naming her Howard she would have an unusual advantage in life.",
    "Cantaloupe is an annual plant, which means that it completes its life cycle in one year.",
    "Teasel is biennial plant which means that it completes its life cycle in two years.",
    "Darth Vader, the evil character in the Star Wars movies, wore a helmet that had been designed from inspiration from the kabuto helmet worn by Samurai.",
    "A key element of democracy is that there is a separation of the institutions within, between government, parliament, and the courts of law. ",
    "Hans Meyer named Kibo's highest summit Kaiser-Wilhelm-Spitze, but when Tanzania was formed in 1964 Kibo's summit was renamed Uhuru. ",

]
let x = Math.floor(Math.random() * randfacts.length);
let fact = randfacts[x];
document.getElementById("randfact").innerHTML=fact;

