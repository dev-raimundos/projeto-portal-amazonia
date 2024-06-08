// Adiciona um listener de evento para o formulário de pesquisa
document.querySelector('#search').addEventListener('submit', async (event) => {
    event.preventDefault(); // Previne o comportamento padrão de submissão do formulário

    // Obtém o nome da cidade digitado pelo usuário
    const cityName = document.querySelector('#city_name').value;

    // Verifica se o campo da cidade está vazio
    if (!cityName) {
        // Remove a classe 'show' do elemento de previsão do tempo
        document.querySelector("#weather").classList.remove('show');
        // Exibe um alerta ao usuário para digitar uma cidade
        showAlert('Você precisa digitar uma cidade...');
        return;
    }

    // Define a chave de API e a URL da API de previsão do tempo
    const apiKey = '8a60b2de14f7a17c7a11706b2cfcd87c';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=${apiKey}&units=metric&lang=pt_br`

    // Realiza uma solicitação para a API de previsão do tempo
    const results = await fetch(apiUrl);
    const json = await results.json();

    // Verifica se a resposta da API é bem-sucedida (código 200)
    if (json.cod === 200) {
        // Exibe as informações da previsão do tempo
        showInfo({
            city: json.name,
            country: json.sys.country,
            temp: json.main.temp,
            tempMax: json.main.temp_max,
            tempMin: json.main.temp_min,
            description: json.weather[0].description,
            tempIcon: json.weather[0].icon,
            windSpeed: json.wind.speed,
            humidity: json.main.humidity,
        });
    } else {
        // Remove a classe 'show' do elemento de previsão do tempo
        document.querySelector("#weather").classList.remove('show');
        // Exibe um alerta ao usuário informando que não foi possível localizar a cidade
        showAlert(`
            Não foi possível localizar...
        `);
    }
});

// Exibe as informações da previsão do tempo
function showInfo(json){
    // Limpa qualquer alerta existente
    showAlert('');

    // Adiciona a classe 'show' ao elemento de previsão do tempo
    document.querySelector("#weather").classList.add('show');

    // Preenche as informações da previsão do tempo nos elementos HTML correspondentes
    document.querySelector('#title').innerHTML = `${json.city}, ${json.country}`;
    document.querySelector('#temp_value').innerHTML = `${json.temp.toFixed(1).toString().replace('.', ',')} <sup>C°</sup>`;
    document.querySelector('#temp_description').innerHTML = `${json.description}`;
    document.querySelector('#temp_img').setAttribute('src', `https://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);
    document.querySelector('#temp_max').innerHTML = `${json.tempMax.toFixed(1).toString().replace('.', ',')} <sup>C°</sup>`;
    document.querySelector('#temp_min').innerHTML = `${json.tempMin.toFixed(1).toString().replace('.', ',')} <sup>C°</sup>`;
    document.querySelector('#humidity').innerHTML = `${json.humidity}%`;
    document.querySelector('#wind').innerHTML = `${json.windSpeed.toFixed(1)}km/h`;
}

// Exibe um alerta na página
function showAlert(msg) {
    document.querySelector('#alert').innerHTML = msg;
}
