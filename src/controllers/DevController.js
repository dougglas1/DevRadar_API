const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

// index, show, store, update, destroy

module.exports = {
    // Buscar Todos Usuários
    async index(request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },

    // Inserir Usuário
    async store(request, response) {
        console.log(request.body);

        const { github_username, techs, latitude, longitude } = request.body;

        // Verificar se já foi cadastrado
        let dev = await Dev.findOne({ github_username });

        if (!dev){    
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
            // continuar
            // caso o name não exista, irá adicionar o login
            const { name = login, avatar_url, bio } = apiResponse.data;
        
            // separar cada item ao encontrar vírgula e retirar os espaços (antes e depois)
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            };
        
            // Quando é o mesmo nome não é necessário, ele identifica
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })

            // Filtrar as conexões que estão no máximo 10km de distância
            // e que o novo dev tenha pelo menos uma das tecnologias filtradas

            const sendSocketMessageTo = findConnections(
                { latitude, longitude },
                techsArray,
            )

            sendMessage(sendSocketMessageTo, 'new-dev', dev);

            //console.log(sendSocketMessageTo);
        }

        return response.json(dev);
    },

    async update(){
    // Atualizar nome, avatar, bio, localização e tecnologias
    },

    async destroy(){

    }, 
};