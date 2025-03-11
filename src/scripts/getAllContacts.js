import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('No contacts found.');
      return;
    }
    console.log('List of contacts:');
    console.table(contacts);
  } catch (error) {
    console.log('Error fetching contacts:', error);
  }
};

console.log(await getAllContacts());
