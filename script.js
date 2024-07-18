let listlar = document.getElementById("lists");

let movies = ["Avatar", "Harry Potter", "Spider-man", "Shum Bola", "Tor"];


movies.push('Osmondagi bolalar', 'Jannat onalar oyogi ostida')


for (const iterator of movies) {
  console.log(iterator);
  let div = document.createElement("div");
  let h3 = document.createElement("h3");
  let btn = document.createElement("button");

  h3.innerHTML = iterator;
  btn.innerHTML = "Delete";
  div.appendChild(h3);
  div.appendChild(btn);
  div.classList.add("card");

  listlar.appendChild(div);
}