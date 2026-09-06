// JSON VS XML

// JSON v1
let animal = `{ 
    "animals" : [
      {"habitatType":"pets","categoryType":"mammal","type": "Dog","sound": "woof"},
      {"habitatType","pets","categoryType":"reptile","type": "Snake","sound": "sssss"}
]
}`;

// JSON v2

`{"animals": [
  {
    "type": {
      "habitat": "pets",
      "category": "mammal"
    },
    "breed": "dog",
    "sound": "woof"
  },
  {
    "type": {
      "habitat": "pets",
      "category": "reptile"
    },
    "breed": "snake",
    "sound": "sssss"
  }
]}`;

// XML

<animals type="pets">
  <animal type="mammal">
    <type>Dog</type>
    <sound>Woof</sound>
  </animal>
  <animal type="reptile">
    <type>Snake</type>
    <sound>SSSSS</sound>
  </animal>
</animals>;
