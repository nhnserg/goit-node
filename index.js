const argv = require("yargs").argv;
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts().then(console.table);
      break;

    case "get":
      getContactById(id).then((contact) =>
        console.log(contact || "Контакт не найден")
      );
      break;

    case "add":
      addContact(name, email, phone).then(console.log);
      break;

    case "remove":
      removeContact(id).then((contact) =>
        console.log(contact || "Контакт не найден")
      );
      break;

    default:
      console.warn("\x1B[31m Неизвестный тип действия!");
  }
}

invokeAction(argv);
