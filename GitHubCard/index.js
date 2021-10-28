import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios
    //GET => Get data / Send http get request / PROMISE
    .get('https://api.github.com/users/jcpcabanada')
    //THEN => IF we received what is was supposed to get then do this:
    .then(res => {
    console.log(res.data);
    })
    //CATCH => If failed/did not receive do this:
    .catch(err => {
        console.error(err);
    })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
//test
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.
*/
const homieS = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

homieS.forEach(elem => {
    axios
        //GET => Get data / Send http get request / PROMISE
        .get(`https://api.github.com/users/${elem}`)
        //THEN => IF we received what is was supposed to get then do this:
        .then(res => {
            let info = res.data
            containeR.appendChild(cardMaker(info));
        })
        //CATCH => If failed/did not receive do this:
        .catch(err => {
            console.error(err);
        })
})


/*
    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:*/

const containeR = document.querySelector('.cards');

function cardMaker({avatar_url, name, login, location, html_url, followers, following, bio}) {
    const gitCard = document.createElement('div');
    const imgUser = document.createElement('img');
    const infoCard = document.createElement('div');
    const names = document.createElement('h3');
    const nameUser = document.createElement('p');
    const loCation = document.createElement('p');
    const proFile = document.createElement('p');
    const address1 = document.createElement('a');
    const folloWers = document.createElement('p');
    const folloWing = document.createElement('p');
    const biO = document.createElement('p');

    imgUser.src = avatar_url;
    proFile.textContent = `Profile: `
    names.textContent = name;
    nameUser.textContent = login;
    loCation.textContent = `location: ${location}`;
    address1.textContent = html_url;
    address1.href = html_url;
    folloWers.textContent = `Followers: ${followers}`;
    folloWing.textContent = `Following: ${following}`;
    biO.textContent = `Bio: ${bio}`;

    gitCard.classList.add('card');
    infoCard.classList.add('card-info');
    names.classList.add('name');
    nameUser.classList.add('username');

    gitCard.append( imgUser, infoCard );
    infoCard.append( names, nameUser, loCation, proFile, folloWers, folloWing, biO );
    proFile.append(address1);

    return gitCard;
}


/*
    <div class="card">

      <img src={image url of user} />
      <div class="card-info">

        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>

        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>

        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>

      </div>

    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
