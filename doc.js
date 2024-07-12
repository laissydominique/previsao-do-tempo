const apiKey = "241f26e574d60edb19d26bd1042eaf6a";

const cidadeInput = document.querySelector("#cidade_input");
const btn = document.querySelector(".btn");

const cidadeElemento = document.querySelector("#city");
const temperaturaElemento = document.querySelector("#temperature span");
const descElementos = document.querySelector("#description");
const iconePrevisao = document.querySelector("#weather-icon");
const paisElemento = document.querySelector("#country");
const umidadeElemento = document.querySelector("#umidity span");
const ventoElemento = document.querySelector("#wind span");
const resultado = document.querySelector(".resultado-clima");
const conteudo = document.querySelector(".conteudo");

const consultaInformacoes = async (city) => {
  const apiPrevisaoUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

  const res = await fetch(apiPrevisaoUrl);
  const data = await res.json();
  const erro = document.querySelector(".error");
  const resultado = document.querySelector(".resultado-clima");

  try {
    cidadeElemento.innerText = data.name;
    temperaturaElemento.innerText = ` ${parseInt(data.main.temp)} °C`;
    descElementos.innerText = data.weather[0].description;
    iconePrevisao.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    );
    umidadeElemento.innerText = `${data.main.humidity}%`;
    ventoElemento.innerText = `${data.wind.speed}  km/h`;
    console.log(data);
  } catch {
    erro.innerHTML = "Error no servidor interno";
    erro.classList.add("hidden");
  }

  if (!data.name) {
    erro.classList.remove("hidden");
    resultado.classList.add("hidden");
    conteudo.style.height = "300px";
  } else {
    resultado.classList.remove("hidden");
    erro.classList.add("hidden");
    conteudo.style.height = "500px";
  }
};

const mostrarPrevisao = async (city) => {
  const data = await consultaInformacoes(city);
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const city = cidadeInput.value;
  mostrarPrevisao(city);
});
