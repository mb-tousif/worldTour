const url = "https://restcountries.com/v3.1/all";
const loadCountries = () =>{
    fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountries(data));
}

const displayCountries=(countries)=>{
// console.log(countries);
const countriesHTML = countries.map((country) => getCountryHTML(country));
const container = document.getElementById('countries');
container.innerHTML = countriesHTML.join(' ');
// console.log(countriesHTML[78]);
}

// const getCountryHTML= country => {
//     return `
//     <div style="background-color: #2ecc71; padding: 20px; margin: 10px;border: 4px solid goldenrod;border-radius: 20px">
//         <h2>Country Name: ${country.name.common}</h2>
//         <h2>Capital: ${country.capital}</h2>
//         <h2>Official Name: ${country.name.official}</h2>
//         <img src='${country.flags.svg}' style="width: 200px;">
//     </div>
//     `;
// }
const getCountryHTML= ({ name,capital, flags})=> {
    // Destructuring Option-two [perameter destructuring]
    // const { name,capital, flags} = country;
    return `
    <div style="background-color: #2ecc71; padding: 20px; margin: 10px;border: 4px solid goldenrod;border-radius: 20px">
        <h2>Country Name: ${name.common}</h2>
        <h2>Capital: ${capital}</h2>
        <h2>Official Name: ${name.official}</h2>
        <img src='${flags.svg}' style="width: 200px;">
    </div>
    `;
}
// const getCountryHTML= country => {
//     // Destructuring Option-one
//     const { name,capital, flags} = country;
//     return `
//     <div style="background-color: #2ecc71; padding: 20px; margin: 10px;border: 4px solid goldenrod;border-radius: 20px">
//         <h2>Country Name: ${name.common}</h2>
//         <h2>Capital: ${capital}</h2>
//         <h2>Official Name: ${name.official}</h2>
//         <img src='${flags.svg}' style="width: 200px;">
//     </div>
//     `;
// }
loadCountries();