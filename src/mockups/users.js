const users = [
  {
    id: 1,
    name: "Elizabeth",
    surname: "Washington",
    age: 19,
    hometown: "Bangkok",
    vaccines: [
      {
        id: "pf-1",
        name: "Pfizer",
        timestamp: new Date("2022-08-21 21:20:32"),
      },
      {
        id: "pf-2",
        name: "Pfizer",
        timestamp: new Date("2022-09-22 20:05:16"),
      },
    ],
  },
  {
    id: 2,
    name: "John",
    surname: "Smith",
    age: 34,
    hometown: "Chiang Mai",
    vaccines: [
      {
        id: "pf-3",
        name: "Pfizer",
        timestamp: new Date("2022-06-12 16:20:32"),
      },
    ],
  },
  {
    id: 3,
    name: "Waranchaya",
    surname: "Tangtong",
    age: 21,
    hometown: "Lamphun",
    vaccines: [],
  },
];

export default users;
