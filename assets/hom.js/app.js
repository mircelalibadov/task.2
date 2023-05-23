const hosting = document.querySelector(".hosting_section");
console.log(hosting);
fetch("https://northwind.vercel.app/api/categories")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const div = document.createElement("div");
      const img = document.createElement("img");
      const h2 = document.createElement("h2");
      const p = document.createElement("p");
      div.classList.add("box");
      h2.innerText = data[i].img[i].name;
      p.innerText = data[i].img[i].years;
      img.src= data[i].img[i].img_src;
      div.append(img, h2, p);
      hosting.append(div);
    }
  });
