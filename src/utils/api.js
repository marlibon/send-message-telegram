const token = "6153048991:AAG6ViC_vLn5E5H5HZW05n-II8IYph7yHf4";
const chatId = -965108094;
const server = `https://api.telegram.org/`;


function sendTelegram (message) {
    return fetch(`${server}bot${token}/sendMessage?chat_id=${chatId}&text=${message}&parse_mode=html`)
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка отправки: ${res.status}`))
}
export { sendTelegram };
