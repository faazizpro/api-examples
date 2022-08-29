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
        // console.log(country);
        countryDiv.innerHTML = `
        <h3>Country Name: ${country.name.common}</h3>
        <h5>Capital City: ${country.capital}</h5>
        <h5>Flag: ${country.flag}</h5>
        <button onclick= "loadCountryDetail('${country.cca2}')">Details</button>
        `
        countriesContainer.appendChild(countryDiv)
    })
}

const loadCountryDetail = (code) => {
    //https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('get country details: ', code);
    // console.log(url);
    fetch(url)
    .then (res => res.json())
    .then (data => displayCountryDetail(data[0]));
}

const displayCountryDetail = cInfo =>{
    console.log(cInfo);
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
    <h3>Details: ${cInfo.name.common}</h3>
    <img src="${cInfo.flags.png}">
    `
}


loadCountries();