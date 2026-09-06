// javascript object

let user = {
  firstname: "Wally",
  secondname: "warthog",
  getName: function () {
    console.log(`Firstname: ${this.firstname}, Surname: ${this.secondname}`);
  },
};

user.getName();

// JSON is not that powerful

('[{"firstname":"wally"}, {"secondname":"warthog"}]');
