import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('All contacts have been removed.');
  } catch (error) {
    console.log('Error removing all contacts:', error);
  }
};

removeAllContacts();
