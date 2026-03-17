const data = {
    "Moonfall": {
        desc: "Misteriozna sila izbacuje Mjesec iz orbite i šalje ga prema Zemlji. Mala grupa ljudi pokušava spriječiti globalnu katastrofu i otkriva šokantnu istinu o svemiru.",
        cast: "Halle Berry, Patrick Wilson",
        rating: "5.1 ⭐"
    },
    "Avatar": {
        desc: "Na planetu Pandora, bivši marinac Jake Sully ulazi u tijelo avatara i postaje dio sukoba između ljudi i Na'vi naroda.",
        cast: "Sam Worthington, Zoe Saldana",
        rating: "7.9 ⭐"
    },
    "Avatar: The Way of Water": {
        desc: "Jake Sully i njegova obitelj suočavaju se s novim prijetnjama dok istražuju oceanski svijet Pandore.",
        cast: "Sam Worthington, Zoe Saldana",
        rating: "7.6 ⭐"
    },
    "Avatar: Fire and Ash": {
        desc: "Treći nastavak Avatara koji istražuje nove klanove i sukobe na Pandori.",
        cast: "Sam Worthington",
        rating: "N/A ⭐"
    },
    "Interstelar": {
        desc: "Grupa astronauta putuje kroz crvotočinu u potrazi za novim domom za čovječanstvo dok Zemlja umire.",
        cast: "Matthew McConaughey, Anne Hathaway",
        rating: "8.7 ⭐"
    },
    "Captain America: Brave New World": {
        desc: "Novi Captain America suočava se s globalnim prijetnjama i političkim zavjerama.",
        cast: "Anthony Mackie",
        rating: "N/A ⭐"
    },
    "Spider-Man: No Way Home": {
        desc: "Peter Parker otkriva svoj identitet svijetu i traži pomoć Doctora Strangea, što dovodi do multiverzalnog kaosa.",
        cast: "Tom Holland, Zendaya",
        rating: "8.2 ⭐"
    },
    "Doctor Strange": {
        desc: "Kirurg Stephen Strange otkriva svijet magije nakon nesreće koja mu uništi karijeru.",
        cast: "Benedict Cumberbatch",
        rating: "7.5 ⭐"
    },
    "Thor: Ragnarok": {
        desc: "Thor se mora boriti za spas Asgarda od uništenja dok se suočava s boginjom smrti Helom.",
        cast: "Chris Hemsworth",
        rating: "7.9 ⭐"
    },
    "Avengers: Infinity War": {
        desc: "Osvetnici i saveznici pokušavaju zaustaviti Thanosa prije nego uništi svemir.",
        cast: "Robert Downey Jr., Chris Evans",
        rating: "8.4 ⭐"
    },
    "Avengers: Endgame": {
        desc: "Preživjeli heroji pokušavaju poništiti Thanosove akcije i vratiti ravnotežu u svemir.",
        cast: "Robert Downey Jr., Chris Evans",
        rating: "8.4 ⭐"
    },
    "Doctor Strange in the Multiverse of Madness": {
        desc: "Doctor Strange istražuje opasne alternativne stvarnosti i suočava se s moćnim neprijateljima.",
        cast: "Benedict Cumberbatch",
        rating: "6.9 ⭐"
    },
    "Ant-Man and the Wasp": {
        desc: "Scott Lang i Hope van Dyne istražuju kvantni svijet i suočavaju se s novim prijetnjama.",
        cast: "Paul Rudd",
        rating: "7.0 ⭐"
    },
    "Eternals": {
        desc: "Besmrtni heroji izlaze iz sjene kako bi zaštitili čovječanstvo od drevnih neprijatelja.",
        cast: "Angelina Jolie",
        rating: "6.3 ⭐"
    },
    "Thor: Love and Thunder": {
        desc: "Thor kreće na put samootkrivanja dok se suočava s novim neprijateljem Gorr-om.",
        cast: "Chris Hemsworth",
        rating: "6.2 ⭐"
    },
    "Ant-Man and the Wasp: Quantumania": {
        desc: "Ant-Man ulazi u kvantni svijet i susreće Kang Osvajača.",
        cast: "Paul Rudd",
        rating: "6.1 ⭐"
    },
    "Guardians of the Galaxy Vol. 3": {
        desc: "Čuvari galaksije suočavaju se s prošlošću Rocketa i pokušavaju spasiti svog prijatelja.",
        cast: "Chris Pratt",
        rating: "8.0 ⭐"
    },
    "Deadpool & Wolverine": {
        desc: "Deadpool i Wolverine udružuju snage u akcijskoj i humorističnoj avanturi kroz multiverzum.",
        cast: "Ryan Reynolds, Hugh Jackman",
        rating: "N/A ⭐"
    },
    "Thunderbolts": {
        desc: "Tim antiheroja okuplja se za opasnu misiju pod kontrolom vlade.",
        cast: "Florence Pugh",
        rating: "N/A ⭐"
    },
    "Inception": {
        desc: "Lopov koji krade tajne iz snova dobiva zadatak usaditi ideju u nečiji um.",
        cast: "Leonardo DiCaprio",
        rating: "8.8 ⭐"
    },
    "The Great Flood": {
        desc: "Drama o katastrofalnoj poplavi i ljudima koji se bore za preživljavanje.",
        cast: "Razni glumci",
        rating: "N/A ⭐"
    },
    "Bad Influence": {
        desc: "Priča o manipulaciji, društvenim mrežama i utjecaju na mlade.",
        cast: "Razni glumci",
        rating: "N/A ⭐"
    },
    "Predator: Killer of Killers": {
        desc: "Lovci Predator suočavaju se s najopasnijim protivnicima do sada.",
        cast: "N/A",
        rating: "N/A ⭐"
    },
    "Steve": {
        desc: "Drama o životu i izazovima glavnog lika Stevea.",
        cast: "N/A",
        rating: "N/A ⭐"
    },
    "Minecraft": {
        desc: "Avantura inspirirana popularnom igrom gdje likovi preživljavaju i grade svijet.",
        cast: "Jason Momoa",
        rating: "N/A ⭐"
    }
};

const modal = document.getElementById("modal");
const title = document.getElementById("modalTitle");
const desc = document.getElementById("modalDesc");
const cast = document.getElementById("modalCast");
const rating = document.getElementById("modalRating");
const img = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");

document.querySelectorAll(".grid-item").forEach(item => {
    item.addEventListener("click", () => {
        const name = item.querySelector("p").innerText.trim();
        const imageSrc = item.querySelector("img").src;

        title.innerText = name;
        img.src = imageSrc;

        const movie = data[name];

        if(movie){
            desc.innerText = movie.desc;
            cast.innerText = movie.cast;
            rating.innerHTML = `<span class="rating">${movie.rating}</span>`;
        } else {
            desc.innerText = "Opis nije dostupan.";
            cast.innerText = "-";
            rating.innerText = "-";
        }

        modal.style.display = "block";
    });
});

closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
    if(e.target == modal){
        modal.style.display = "none";
    }
};