const points: number[] = [49, 48, 25];
const cities: Array<string | number> = ['London', 'Zurich', 'New York', 55];

const emptyArray = [];

type User = [
  name: string, 
  points: number, 
  status: string
];
const user: User = ['Kuba', 49, 'active'];

const point4 = points[3];
const [, ...cities2] = cities;
const [name1, points1, status1] = user;
const someData = emptyArray[100];

const things = [...cities, 66, 0];

console.log(things);
