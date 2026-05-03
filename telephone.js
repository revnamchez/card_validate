class Telephone {
  constructor() {
    this.phoneNumbers = new Set();
    this.observers = [];
  }

  // --- Core Phone Methods ---
  addPhoneNumber(number) {
    this.phoneNumbers.add(number);
    console.log(`Number ${number} added.`);
  }

  removePhoneNumber(number) {
    if (this.phoneNumbers.has(number)) {
      this.phoneNumbers.delete(number);
      console.log(`Number ${number} removed.`);
    } else {
      console.log("Number not found.");
    }
  }

  dialPhoneNumber(number) {
    if (this.phoneNumbers.has(number)) {
      this.notifyObservers(number);
    } else {
      console.log(`Cannot dial ${number}: Number must be added first.`);
    }
  }

  // --- Observer Pattern Methods ---
  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers(number) {
    this.observers.forEach(observer => observer.update(number));
  }
}

// --- Observer Classes ---
class PrintNumberObserver {
  update(number) {
    console.log(number);
  }
}

class DialingMessageObserver {
  update(number) {
    console.log(`Now Dialling ${number}`);
  }
}

// --- Usage ---
const myPhone = new Telephone();

const obs1 = new PrintNumberObserver();
const obs2 = new DialingMessageObserver();

myPhone.addObserver(obs1);
myPhone.addObserver(obs2);

myPhone.addPhoneNumber("2347023232");
myPhone.dialPhoneNumber("2347023232");
