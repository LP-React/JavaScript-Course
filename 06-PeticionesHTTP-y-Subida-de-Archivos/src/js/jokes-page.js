import { getJoke } from "./http-provider";

const body = document.body;
let btnCreate, olList, orderItem = 0;

const createJokesHtml = () => {
    const html = `<h1 class="mt-5">Jokes</h1>
    <button class="btn btn-primary">Load joke</button>
    <ol class="mt-2 list-group">
    </ol>`;

    const divJokes = document.createElement('div');
    divJokes.innerHTML = html;

    body.append(divJokes);
}

const events = () => {
    olList = document.querySelector('ol');
    btnCreate = document.querySelector('button');

    btnCreate.addEventListener('click', async () => {
        btnCreate.disabled = true;
        drawnJoke(await getJoke())
        btnCreate.disabled = false;
    })

}

const drawnJoke = (joke) => {
    const olItem = document.createElement('li');
    orderItem++;
    olItem.innerHTML = `<b>${orderItem}. ${joke.id}</b>: ${joke.value}`;
    olItem.classList.add('list-group-item');
    olList.append(olItem);
}

export const init = () => {
    createJokesHtml();
    events();
}