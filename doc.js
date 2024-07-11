const apiKey = "241f26e574d60edb19d26bd1042eaf6a";
const urlCountry = "https://flagsapi.com/:country_code/:style/:size.png";

const cidadeInput = document.querySelector("#cidade_input");
const btn = document.querySelector(".btn");

const cidadeElemento = document.querySelector("#city");
const temperaturaElemento = document.querySelector("#temperature span");
const descElementos= document.querySelector("#description");
const idPrevisao = document.querySelector("#weather-icon");
const paisElemento = document.querySelector("#country");
const umidadeElemento = document.querySelector("#umidity span");
const ventoElemento = document.querySelector("#wind span");

const consultaInformacoes = async (city) => {
  const apiPrevisaoUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric$lang=pt_br`;

  const res = await fetch(apiPrevisaoUrl);
  const data = await res.json();

  cidadeElemento.innerText = data.name;
  temperaturaElemento.innerText = parseInt(data.main.temp)
  console.log(data);
};

const mostrarPrevisao = async (city) => {
  const data = await consultaInformacoes(city);
};

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const city = cidadeInput.value;
  mostrarPrevisao(city);
});
