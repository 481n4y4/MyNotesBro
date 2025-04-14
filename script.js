let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function renderNotes() {
  const list = document.getElementById("notesList");
  list.innerHTML = "";
  notes.forEach((text, index) => {
    const item = document.createElement("div");
    item.className = "note";

    const noteText = document.createElement("span");
    noteText.innerText = text;
    noteText.style.flex = "1";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "🗑️";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.onclick = () => {
      notes.splice(index, 1);
      saveNotes();
      renderNotes();
    };

    item.style.display = "flex";
    item.style.alignItems = "center";
    item.appendChild(noteText);
    item.appendChild(deleteBtn);
    list.appendChild(item);
  });
}

function addNote() {
  const noteInput = document.getElementById("noteInput");
  const noteText = noteInput.value.trim();
  if (noteText === "") return;
  notes.push(noteText);
  saveNotes();
  renderNotes();
  noteInput.value = "";
}

window.onload = () => {
  renderNotes();
};

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("show");
}
