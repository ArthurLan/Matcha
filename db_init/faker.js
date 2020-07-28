
const axios = require('axios');
const faker = require('faker');

const instance = axios.create({
    baseURL: 'http://localhost:5000',
});

const createRandomUser = () => {
    const email = faker.internet.email();
    const firstname = faker.name.firstName();
    const lastname = faker.name.lastName()
    const gender = ['female', 'male'][Math.floor(Math.random() * ['female', 'male'].length)];
    const bio = faker.lorem.sentence();

    return { email, firstname, lastname, gender, bio }

};

////////////////////////////////////////////////////////////////
// Create n users

const n = 100;
for (let step = 0; step < n; step++) {
    const user = createRandomUser();

    instance.post('/users', user)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => { console.log(error) })
}