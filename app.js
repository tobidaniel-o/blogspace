fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((response) => response.json())
  .then((data) => display(data));

const blogList = document.querySelector("#blog-list");
const title = document.createElement('h4')

function display(data) {
  const fiveList = data.slice(0, 5)
  console.log(fiveList);

  for (let i = 0; i < fiveList.length; i++) {
    title.textContent = fiveList[i].title
    blogList.appendChild(title)
    blogList.innerHTML += `<br /> ${fiveList[i].body}`;
  }
  return blogList;
}
