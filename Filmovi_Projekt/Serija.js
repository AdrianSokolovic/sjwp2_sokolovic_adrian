const data = {
    "Stranger Things": {
        desc: "Radnja prati grupu djece u malom gradu Hawkinsu tijekom 1980-ih, gdje nestanak dječaka otkriva tajne vladine eksperimente i paralelni svijet 'Upside Down'. Serija kombinira horor, znanstvenu fantastiku i snažnu priču o prijateljstvu, obitelji i odrastanju.",
        cast: "Millie Bobby Brown, Finn Wolfhard, David Harbour",
        rating: "8.7 ⭐"
    },
    "The Last of Us": {
        desc: "Dvadeset godina nakon kolapsa civilizacije, krijumčar Joel dobiva zadatak prevesti djevojku Ellie kroz opasan postapokaliptični svijet. Njihovo putovanje postaje emotivna priča o preživljavanju, gubitku i povezanosti.",
        cast: "Pedro Pascal, Bella Ramsey",
        rating: "8.8 ⭐"
    },
    "House of the Dragon": {
        desc: "Smještena 200 godina prije Game of Thrones, serija prati uspon i pad obitelji Targaryen, obilježen borbom za vlast, zmajevima i političkim intrigama.",
        cast: "Emma D'Arcy, Matt Smith",
        rating: "8.5 ⭐"
    },
    "Breaking Bad": {
        desc: "Profesor kemije Walter White ulazi u svijet proizvodnje droge nakon dijagnoze raka. Njegova transformacija u kriminalnog genija jedna je od najpoznatijih u televizijskoj povijesti.",
        cast: "Bryan Cranston, Aaron Paul",
        rating: "9.5 ⭐"
    },
    "Better Call Saul": {
        desc: "Priča o transformaciji Jimmyja McGilla u odvjetnika Saula Goodmana, prikazujući moralne dileme i svijet kriminala iz drugačije perspektive.",
        cast: "Bob Odenkirk",
        rating: "9.0 ⭐"
    },
    "Wednesday": {
        desc: "Wednesday Addams pohađa akademiju Nevermore gdje istražuje niz ubojstava i otkriva tajne iz svoje prošlosti.",
        cast: "Jenna Ortega",
        rating: "8.1 ⭐"
    },
    "The Witcher": {
        desc: "Geralt od Rivije, lovac na čudovišta, pokušava pronaći svoje mjesto u svijetu punom magije, sudbine i političkih sukoba.",
        cast: "Henry Cavill",
        rating: "8.2 ⭐"
    },
    "Euphoria": {
        desc: "Serija istražuje živote tinejdžera suočenih s ovisnošću, traumama, identitetom i odnosima u modernom društvu.",
        cast: "Zendaya",
        rating: "8.4 ⭐"
    },
    "Dark": {
        desc: "Nestanak djece u malom gradu otkriva mrežu tajni koje uključuju putovanje kroz vrijeme i međusobno povezane obitelji.",
        cast: "Louis Hofmann",
        rating: "8.7 ⭐"
    },
    "Peaky Blinders": {
        desc: "Kriminalna obitelj Shelby gradi svoje carstvo u poslijeratnoj Engleskoj koristeći nasilje, politiku i inteligenciju.",
        cast: "Cillian Murphy",
        rating: "8.8 ⭐"
    },
    "Money Heist": {
        desc: "Grupa pljačkaša pod vodstvom tajanstvenog Profesora izvodi kompleksne pljačke uz psihološke igre i napetost.",
        cast: "Álvaro Morte",
        rating: "8.2 ⭐"
    },
    "Squid Game": {
        desc: "Ljudi u financijskim problemima sudjeluju u smrtonosnim igrama za ogromnu nagradu, gdje samo jedan može preživjeti.",
        cast: "Lee Jung-jae",
        rating: "8.0 ⭐"
    },
    "Black Mirror": {
        desc: "Antologijska serija koja istražuje tamnu stranu tehnologije i njen utjecaj na ljudske živote i društvo.",
        cast: "Razni glumci",
        rating: "8.8 ⭐"
    },
    "The Boys": {
        desc: "Superheroji nisu ono što se čine — grupa ljudi pokušava razotkriti njihovu korupciju i zloupotrebu moći.",
        cast: "Karl Urban",
        rating: "8.7 ⭐"
    },
    "Loki": {
        desc: "Bog prijevare Loki putuje kroz vrijeme i paralelne dimenzije, suočavajući se s posljedicama svojih odluka.",
        cast: "Tom Hiddleston",
        rating: "8.2 ⭐"
    },
    "True Detective": {
        desc: "Kriminalistička antologija koja prati detektive kroz kompleksne i mračne slučajeve.",
        cast: "Matthew McConaughey, Woody Harrelson",
        rating: "8.9 ⭐"
    },
    "Mindhunter": {
        desc: "FBI agenti razvijaju profiliranje serijskih ubojica kroz intervjue s najopasnijim kriminalcima.",
        cast: "Jonathan Groff",
        rating: "8.6 ⭐"
    },
    "Ozark": {
        desc: "Obitelj se seli u Ozark kako bi prala novac za kartel, ali ubrzo upada u opasne situacije.",
        cast: "Jason Bateman",
        rating: "8.5 ⭐"
    },
    "Succession": {
        desc: "Obitelj milijardera bori se za kontrolu nad medijskim carstvom kroz izdaje i političke igre.",
        cast: "Brian Cox",
        rating: "8.8 ⭐"
    },
    "The Crown": {
        desc: "Povijesna drama o životu kraljice Elizabete II i političkim događajima koji su oblikovali modernu Britaniju.",
        cast: "Claire Foy, Olivia Colman",
        rating: "8.6 ⭐"
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
        const name = item.querySelector("p").innerText;
        const imageSrc = item.querySelector("img").src;

        title.innerText = name;
        img.src = imageSrc;

        if(data[name]){
            desc.innerText = data[name].desc;
            cast.innerText = data[name].cast;
            rating.innerHTML = `<span class="rating">${data[name].rating}</span>`;
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