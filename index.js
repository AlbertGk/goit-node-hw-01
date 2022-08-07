const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");


// const finalFunction = async () => {
//   await listContacts();
//   await getContactById('2');
//   await removeContact('3');
//   await addContact('Abc Def', 'abc@def.com', '123-456-789')
// }

// finalFunction();
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = require('yargs').argv;

// TODO: refaktor
const invokeAction = async({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      await listContacts();
      break;

    case 'get':
      await getContactById(id);
      break;

    case 'add':
      await addContact(name, email, phone);
      break;

    case 'remove':
      await removeContact(id);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);