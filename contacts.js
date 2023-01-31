// отримуємо доступ до усіх операцій над контактами
const contactsOperations = require('./db');



const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "getAll":
            const contacts = await contactsOperations.getAll();
            console.log(contacts);
            break;
        case "getById":
            const contact = await contactsOperations.getById(id);
            if (!contact) {
                throw Error(`Contact with id=${id} not found}`)
            }
            console.log(contact);
            break;
        case "addContact":
            // const newContact = await contactsOperations.addContact({ name: String(name), email: String(email) , phone: String(phone) });
            const newContact = await contactsOperations.addContact(name, email, phone);

            console.log(newContact);
            break;

        
        case "updateContactById":
            const updateContact = await contactsOperations.updateContactById(id, {name, email, phone});
             if (!updateContact) {
                throw Error(`Contact with id=${id} not found}`)
            }
            console.log(updateContact);
            break;
        case "removeContactById":
            const removeContact = await contactsOperations.removeContactById(id);
            if (!removeContact) {
                throw Error(`Contact with id=${id} not found}`)
            }
            console.log(removeContact);
            break;
            
        default:
            console.log("Unknown action");
    }
}

module.exports = invokeAction;



// виклик ф-ї для отримання контактів=================
// invokeAction({action: "getAll"})
// виклик ф-ї для отримання одного контакту===========
// const id = '4';
// invokeAction({action: "getById", id})

// виклик ф-ї для додавання нового контакту===========
// const newData = {
//     name: "Mayson Mount",
//     email: "mayson@mail.com",
//     phone: "(704) 398-45993"
// }

// invokeAction({action: "addContact", data: newData})

// виклик ф-ї оновлення контакту=======================
// const newData = {
//     name: "Andriy Fyl",
//     email: "fyl@mail.com",
//     phone: "(704) 398-45993"
// }

// const updateId = "9268905e-9195-4153-8b20-fdf01996e16c";

// invokeAction({action: "updateContactById", id: updateId, data: newData})

// виклик ф-ї видалення контакту=========================
// const updateId = "9268905e-9195-4153-8b20-fdf01996e16c";
// invokeAction({action: "removeContactById", id: updateId})






