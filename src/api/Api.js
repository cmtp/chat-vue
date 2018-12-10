/**
 * Mocking client-server processing
 */
const contacts = [
  {
    id: 1,
    name: 'Juan Perez',
    age: 12,
    isOnline: true,
  },
];

export default {
  getContacts(cb) {
    setTimeout(() => cb(contacts), 100);
  },
};
