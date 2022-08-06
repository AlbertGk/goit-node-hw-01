// const logger = require("./module");

// logger.listContacts();

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");


const finalFunction = async () => {
  await listContacts();
  await getContactById('2');
  await removeContact('3');
  await addContact('Abc Def', 'abc@def.com', '123-456-789')
}

finalFunction();