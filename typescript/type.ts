interface Person { //is the same result of type Person = {...}
    id: number;
    name: string;
    age: number;
}

type User = {
    id: number;
    name: string;
    email: string;
    age: number;
    isAdmin?: boolean; // isAdmin is optional
}

let user_1 = {} as User
let user_2: User
const user_3: User = {
    id: 1,
    name: 'user 3',
    email: 'user3@users.com',
    age: 21,
}

// ------------------ //

type Point = {
    x: number;
    y: number;
}

function printCoord(points: Point) {
    console.log(`coord x: ${points.x}, coord y: ${points.y}`)
}

printCoord({ x: 10, y: 15 })

type UserCoord = User & Point;

let user_coord: UserCoord = {
    id: 1,
    name: 'user 3',
    email: 'user3@users.com',
    age: 21,
    x: 12,
    y: 20,
}

console.log(user_coord)