
const card = document.querySelector('.card')
const button = document.querySelector('#github-submit')
const input = 'monaessaid'

user('monaessaid')
async function user(username) {
    const resp = await fetch(`https://api.github.com/users/${username}`)
    const respData = await resp.json()
    // console.log(respData);
    return respData
}

button.addEventListener('click', async () => {
    const search_result = await user(input)
    console.log(search_result);
    card.innerHTML = `
    <div class="avatar">
        <img src="${search_result.avatar_url}">
    </div>
    <div class="info">
        <h2>${search_result.login}</h2>
        <p>${search_result.bio}</p>
        <a href="https://github.com/monaessaid" target="_blank" id="visit-github">Visit GitHub Profile</a>
    `
})