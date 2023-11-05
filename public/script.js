const showCanes = async() => {
    const hurricanesJSON = await getCanes();
    const canesDiv = document.getElementById("miami-div");

    if (hurricanesJSON == "") {
        console.log("Invalid load of JSON");
        return;
    }

    hurricanesJSON.forEach((cane) => {
        const section = document.createElement("section");
        canesDiv.append(section);

        const h2 = document.createElement("h2");
        h2.innerHTML = cane.year;
        section.append(h2);

        const h3 = document.createElement("h3");
        h3.innerHTML = `Record: ${cane.record}`;
        section.append(h3);

        const h30 = document.createElement("h3");
        h30.innerHTML = `Coach: ${cane.coach}`;
        section.append(h30);

        const h31 = document.createElement("h3");
        h31.innerHTML = `Starting Quarterback: ${cane.qb}`;
        section.append(h31);

        const h32 = document.createElement("h3");
        h32.innerHTML = `Top Scorers:`;
        section.append(h32);

        const p = document.createElement("p");
        p.innerHTML = `<strong>1) ${cane.topScorers[0]}</strong>`;
        section.append(p);

        const p0 = document.createElement("p");
        p0.innerHTML = `<strong>2) ${cane.topScorers[1]}</strong>`;
        section.append(p0);

        const p1 = document.createElement("p");
        p1.innerHTML = `<strong>3) ${cane.topScorers[2]}</strong>`;
        section.append(p1);

        const img = document.createElement("img");
        img.src = "http://localhost:3000/" + cane.img;
        section.append(img);
    });
}

const getCanes = async() => {
    try {
        return (await fetch("http://localhost:3000/api/hurricanes")).json();
    } catch (error) {
        console.log("error retrieving json");
        return "";
    }
};

window.onload = () => showCanes();