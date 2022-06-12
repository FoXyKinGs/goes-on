// db.js
import Dexie from 'dexie';

export const db = new Dexie('goesOn');
db.version(1).stores({
  income: '++id, value, addDate', // Primary key and indexed props
  expense: '++id, value, tag, addDate', // Primary key and indexed props
});
