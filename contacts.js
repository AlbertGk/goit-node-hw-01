const fs = require("fs").promises;
const path = require("node:path");

const contactsPath = path.join(__dirname, "db", "contacts.json");
const updateContactsFile = async (writtenData) => { await fs.writeFile(contactsPath, JSON.stringify(writtenData)); };


const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const parseData = JSON.parse(data);
  // console.log(parseData);
  return parseData;
};

const getContactById = async (contactId) => {
  const data = await fs.readFile(contactsPath);
  const parseData = JSON.parse(data);
  const selectedContact = parseData.find((el) => el.id === contactId);
  // console.log(selectedContact);
  return selectedContact;
};

const removeContact = async (contactId) => {
  const data = await listContacts();
  const updatedContacts = data.filter((el) => el.id !== contactId);
  await updateContactsFile(updatedContacts);
  // console.log(updatedContacts);
  return updatedContacts;
};

const addContact = async (name, email, phone) => {
  const data = await listContacts();
  const addedContact = {
    id: `${Math.random()}`,
    name,
    email,
    phone,
  };
  data.push(addedContact);
  // console.log(data);
  await updateContactsFile(data); 
  return addedContact  ;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
