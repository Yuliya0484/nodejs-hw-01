import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    const count = contacts.length;
    console.log(`Total contacts: ${count}`);
  } catch (error) {
    console.log('Error counting contacts:', error);
  }
};

console.log(await countContacts());
