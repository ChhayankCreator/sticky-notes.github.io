document.querySelector("#add_note").addEventListener("click", () => {
    document.querySelector("#modal").style.display = "block";
});

document.querySelector("#hide").addEventListener("click", () => {
    document.querySelector("#modal").style.display = "none";
});

document.querySelector("#user_input").addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const text = document.querySelector("#user_input");
        localStorage.setItem("notes", text.value);
        createStickyNote(text.value);
        document.querySelector("#user_input").value = "";
    }
});
createStickyNote = (text) => {
    let note = document.createElement("div");
    let details = document.createElement("div");
    let noteText = document.createElement("h1");

    note.className = "note";
    details.className = "details";
    noteText.textContent = text;


    details.appendChild(noteText);
    note.appendChild(details);

    if (index > random_colors.length - 1)
        index = 0;

    note.setAttribute("style", `margin:${random_margin[Math.floor(Math.random() * random_margin.length)]}; background-color:${random_colors[index++]}; transform:${random_degree[Math.floor(Math.random() * random_degree.length)]}`);

    note.addEventListener("dblclick", () => {
        note.remove();
    })

    document.querySelector("#all_notes").appendChild(note);
}