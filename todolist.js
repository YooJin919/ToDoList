function AddToDo() {
    let todo = document.getElementById("context").value;
    let node = document.createElement('li');

    node.setAttribute('onclick', 'listDel()');

    node.innerHTML = todo;

    document.body.appendChild(node);
}
function listDel() {
    let stylenode = event.target;
    stylenode.style.textDecoration='line-through';
}