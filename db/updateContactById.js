const getAll = require("./getAll");
const updateContacts = require('./updateContacts');

const updateContactById = async (id, data) => {
    const contacts = await getAll();
    const idx = contacts.findIndex(item => item.id === String(id));
    if (idx === -1) {
        return null;
    }
    
    // Створюємо пустй об'єкт
    const notNullData = {}
    // Отримуємо всі ключі ['name', 'phone', 'email']
    const keys = Object.keys(data);
    // console.log(`___keys______________${keys}`)
    for (let i = 0; i < keys.length; i++) {
        // console.log(`___data[keys[i]]____${data[keys[i]]}`)
        // console.log(`___keys[i]_____${keys[i]}`)
        if (data[keys[i]]) {
            
            notNullData[keys[i]] = data[keys[i]];
            // console.log(`____notNullData[keys[i]]_____${notNullData[keys[i]]}`)
        }
    }


    contacts[idx] = { ...contacts[idx], ...notNullData };
    await updateContacts(contacts);
    return contacts[idx];
}

module.exports = updateContactById;


// const getAll = require("./getAll");
// const updateContacts = require('./updateContacts');

// const updateContactById = async (id, data) => {
//     const contacts = await getAll();
//     // шукємо індекс контакту
//     const idx = contacts.findIndex(item => item.id === id);
//     // якщо такого id не має, то повернеться -1, і ми це відслідковуємо через if
//     if (idx === -1) {
//         return null;
//     }
//     contacts[idx] = { ...data, id };
//     await updateContacts(contacts);
//     return contacts[idx];
 
// }

// module.exports = updateContactById;