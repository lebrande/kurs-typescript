type User = {
  level: number;
  name: string;
  gold: number;
};

const user: User = { 
  name: 'Kuba',
  level: 15,
  gold: 1200,
};

const { level, ...rest } = user;
const user2 = {
  ...user,
  name: 'JS Dzem',
};

user.name = 'Adam';

const newCollection = [];
newCollection[0] = 'pierwszy element';
newCollection[1] = 'drugi element';

// niedozwolone operacje
// user = {};
// newCollection = [];