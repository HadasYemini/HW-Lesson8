//? Question1

function createName(firstName, lastName) {
  let div = document.createElement("div");
  const firstNameP = document.createElement("p");
  firstNameP.textContent = firstName;
  firstNameP.classList.add("firstName");
  const lastNameP = document.createElement("p");
  lastNameP.textContent = lastName;
  lastNameP.classList.add("lastName");
  div.append(firstNameP, lastNameP);
  document.body.append(div);
}

createName("Hadas", "Yemini");

//? Question2

const items = [
  { name: "shirt", description: "Unisex", price: 90 },
  { name: "pants", description: "Regular - Cotton", price: 150 },
  { name: "t-shirt", description: "cotton", price: 60 },
  { name: "dress", description: "Regular - Cotton - Red", price: 100 },
];

function createPriceInput() {
  const input = document.createElement("input");
  input.setAttribute("id", "price");
  input.setAttribute("placeholder", "Enter a price");
  input.classList.add("price");
  document.body.append(input);
  input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (!isNaN(input.value)) showItemsSmallPrice(input.value);
    }
  });
}

createPriceInput();

function showItemsSmallPrice(price) {
  const e = document.querySelector("table");
  if (e) e.remove();
  let table = document.createElement("table");
  table.classList.add("table");
  const header = table.insertRow();
  for (let key in items[0]) {
    const elem = header.insertCell();
    elem.textContent = key;
    elem.classList.add("header");
  }
  items.forEach((item, index) => {
    if (item.price <= price) {
      let row = table.insertRow();
      for (let key in item) {
        const elem = row.insertCell();
        elem.textContent = item[key];
        elem.classList.add(key);
      }
      document.body.append(table);
    }
  });
}

//? Class

class travel {
  constructor(name, date, kilometers) {
    this.name = name;
    this.date = date;
    this.kilometers = kilometers;
  }
}

class vehicle {
  constructor(companyName, name, rented, startKilometers, travels) {
    this.companyName = companyName;
    this.name = name;
    this.rented = rented;
    this.startKilometers = startKilometers;
    this.travels = travels;
    this.calculateKilometres()
  }
  calculateKilometres() {
    this.totalKilometers=this.startKilometers
    this.travels.forEach((travel) => this.totalKilometers+=travel.kilometers)
  }

  addTravel(travel) {
    this.travels.push(travel)
    this.totalKilometers+=travel.kilometers
  }
}

class company {
  constructor(name) {
    this.name = name;
    this.vehiclesArray = [];
  }

  addVehicle(vehicle) {
    this.vehiclesArray.push(vehicle);
  }
  getVehicleHighestMileage() {
    this.heighestVehicleMileage = this.vehiclesArray[0]
    this.vehiclesArray.forEach((vehicle) => {
      if (vehicle.totalKilometers > this.heighestVehicleMileage.totalKilometers) {
        this.heighestVehicleMileage = vehicle
      }
    })
    return this.heighestVehicleMileage
  }

  printVehiclesAvailableForRent() {
    this.vehiclesArray.forEach((vehicle) => {
      vehicle.rented ? null : console.log(`${vehicle.name} is available`)
    })
  }

  addTravel(name,travel) {
    this.vehiclesArray.forEach((vehicle) => {
      if (vehicle.name === name) {
        vehicle.addTravel(travel)
      }
    })
  }
}

const company1 = new company('Avis')

company1.addVehicle(new vehicle('company1','Toyota',false,200,[]))
company1.addVehicle(new vehicle('company1','Mazda',false,300,[]))
company1.addVehicle(new vehicle('company1','Skoda',false,400,[]))
company1.addVehicle(new vehicle('company1','Suzuki',false,500,[]))
company1.addVehicle(new vehicle('company1','Golf',false,600,[]))

console.log('---------- Avis -------------')
company1.printVehiclesAvailableForRent()
company1.addTravel('Mazda',new travel('Hadas Yemini','19/3/2024',15000))
console.log(company1.getVehicleHighestMileage().name,company1.getVehicleHighestMileage().totalKilometers)

const company2 = new company('Eldan')

company2.addVehicle(new vehicle('company2','Toyota',false,200,[new travel('Bark','1/3/2024',17000),new travel('David','19/2/2024',10000)]))
company2.addVehicle(new vehicle('company2','Mazda',false,300,[]))
company2.addVehicle(new vehicle('company2','Skoda',false,400,[]))
company2.addVehicle(new vehicle('company2','Suzuki',true,500,[new travel('Hadas Yemini','9/3/2024',1000)]))
company2.addVehicle(new vehicle('company2','Golf',false,600,[]))
company2.addVehicle(new vehicle('company2','Opel',false,600,[]))
company2.addVehicle(new vehicle('company2','Nisan',false,600,[]))

console.log('---------- Eldan -------------')
company2.addTravel('Toyota',new travel('Talya','19/3/2024',25000))
company2.addTravel('Toyota',new travel('Eliya','15/3/2024',5000))
company2.addTravel('Golf',new travel('Aviya','19/3/2024',7000))
company2.addTravel('Avi',new travel('Aviya','16/3/2024',37000))
console.log(company2.getVehicleHighestMileage().name,company2.getVehicleHighestMileage().totalKilometers)
company2.printVehiclesAvailableForRent()
