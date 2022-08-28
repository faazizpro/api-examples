const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then ( res => res.json())
    .then (data => displayCountries(data))
}

const displayCountries = countries =>{
    // for ( const country of countries){
    //     console.log(country);
    // }

    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country =>{
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        console.log(country);
        countryDiv.innerHTML = `
        <h3>Country Name: ${country.name.common}</h3>
        <h5>Capital City: ${country.capital}</h5>
        <h5>Flag: ${country.flag}</h5>
        `
        countriesContainer.appendChild(countryDiv)
    })
}

loadCountries()