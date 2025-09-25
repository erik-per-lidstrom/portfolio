let name = "Erik Lidström";
let role = "Frontend developer";
let wel = document.getElementById("Welcome");
wel.textContent = `wellcome to my portfolio my name is ${name} and i am a ${role}`;

const aboutme = {
  name: "Erik Lidström",
  age: 18,
  skills: ["HTML", "CSS", "Javascript"],
  location: "Stockholm",
};
let about = document.getElementById("about");
for (const item in aboutme) {
  if (item == "skills") {
    const pskill = document.createElement("p");
    pskill.textContent = `${item}:`;
    about.append(pskill);

    const ul = document.createElement("ul");
    about.append(ul);

    for (const sk of aboutme.skills) {
      console.log(sk);
      const li = document.createElement("li");
      li.textContent = sk;
      ul.append(li);
    }
  } else {
    console.log(item, aboutme[item]);
    const pskill = document.createElement("p");
    pskill.textContent = `${item}: ${aboutme[item]}`;
    about.append(pskill);
  }
}

function logSubmit(event) {
  const formname = document.getElementById("name").value;
  alert(`Hello ${formname} i will get back to you as soon as i can`);
  event.preventDefault();
}

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
//* ^ is how i got it to work
const form = document.getElementById("hire-me-form");
form.addEventListener("submit", logSubmit);
