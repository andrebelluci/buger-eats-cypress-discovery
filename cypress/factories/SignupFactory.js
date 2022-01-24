var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
    deliver: function() {
        
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '17991446829',
            address: {
                postalcode: '15081310',
                street: 'Rua Adélia Muanis Aydar',
                number: '971',
                details: 'Atrás da Rodorib',
                district: 'Jardim São Marco',
                city_state: 'São José do Rio Preto/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}