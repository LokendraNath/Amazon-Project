class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;

  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  }
  displayInfo() {
    const trunkStatus = this.isTrunkOpen ? "open" : "closed";

    console.log(
      `${this.#brand} ${this.#model}, Speed: ${this.speed} km/h , Trunk : ${trunkStatus}`
    );
  }
  go() {
    if (!this.isTrunkOpen) {
      this.speed += 5;
    }

    // limit the speed tp 200
    if (this.speed > 200) {
      this.speed = 200;
    }
  }
  brake() {
    this.speed -= 5;

    // limit the speed tp 200
    if (this.speed < 0) {
      this.speed = 0;
    }
  }
  openTrunk() {
    if (this.speed === 0) {
      this.isTrunkOpen = true;
    }
  }
  closeTrunk() {
    this.isTrunkOpen = false;
  }
}




const Toyota = new Car({
  brand: "Toyota",
  model: "Corolla",
});
const Tesla = new Car({
  brand: "Tesla",
  model: "Model 3",
});


Toyota.displayInfo();
Toyota.openTrunk()
Toyota.go();
Toyota.displayInfo();

Tesla.go();
Tesla.displayInfo();

// Trunk should open since the car is not moving.
Tesla.openTrunk();
// Car should not go since the trunk is open.
Tesla.go();
Tesla.displayInfo();


class RaceCar extends Car {
  acceleration;

  constructor(carDetails) {
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go() {
    this.speed += this.acceleration;

    // limit the speed tp 200
    if (this.speed > 300) {
      this.speed = 300;
    }
  }
  openTrunk() {
    console.log("lawde race car me trunk nhi hota");
  }
  closeTrunk() {
    console.log("Chutiye Pahle khol to Sahi");
  }
}
const McLaren = new RaceCar({
  brand: "McLaren",
  model: "F1",
  acceleration: 20,
});
McLaren.go();
McLaren.displayInfo();
McLaren.go();
McLaren.displayInfo();
McLaren.go();
McLaren.displayInfo();
McLaren.openTrunk()
McLaren.displayInfo();
McLaren.closeTrunk()
McLaren.displayInfo();
McLaren.brake();
McLaren.displayInfo();
McLaren.brake();
McLaren.displayInfo();
McLaren.go();
McLaren.displayInfo();
