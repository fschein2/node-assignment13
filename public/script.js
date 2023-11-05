const showCanes = async() => {
    const hurricanesJSON = await getCanes();
    const canesDiv = document.getElementById("miami-div");

    if (hurricanesJSON == "") {
        console.log("Invalid load of JSON");
        return;
    }

    hurricanesJSON.forEach((cane) => {

    });
}

const getCanes = async() => {
    try {
        return (await fetch("https://assignment13-ua56.onrender.com/api/hurricanes")).json();
    } catch (error) {
        console.log("error retrieving json");
        return "";
    }
};

window.onload = () => showCanes();