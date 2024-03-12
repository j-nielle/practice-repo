/**
 * pre-requisites in learning TypeScript:
 * 
 * JAVASCRIPT
 * - variables, arrays, objects, functions, arrow functions, destructuring
 */

let age: number = 20;

if (age < 50) 
	age += 10;

console.log(age)

let sales: number = 123_456_789;
console.log(sales);

let accomplishment;
accomplishment = 10;
accomplishment = '10';

// FUNCTIONS

function render(doc: any){
	return doc
}

const add = (x: number, y: number) : number => {
	return x + y;
}

// ALIAS

type person = {
	name: string,
	age: number,
	motto?: string
}

const peepo: person = {
	name: 'John',
	age: 20,
}

// READONLY PROPERTY 

type animal = {
	name: string,
	readonly scientificName: string,
	weight: number,
}

// INTERSECTION TYPE, combines objects

type Course = {
	courseTitle: string,
	courseId: number,
}

type Student = {
	studentId: string,
	studentName: string
}

type StudentCourse = Course & Student; 

const oneStudent: StudentCourse = {
	studentId: '20203234343',
	studentName: 'Marie Dunkin',
	courseId: 2343,
	courseTitle: 'Physics'
}

// INTERFACES, extends an object

interface Employee {
	employeeId: string,
	employeeName: string,
	department: string,
}

interface Manager extends Employee {
	numberOfSubordinates: number,
}

const manager: Manager = {
	employeeId: '20203234343',
	employeeName: 'Marie Dunkin',
	department: 'Physics',
	numberOfSubordinates: 20
}

// GENERICS

// "A Box of Type is something whose contents have type Type"
interface Box<Type> {
  contents: Type;
}

interface StringBox {
  contents: string;
}
 
let boxA: Box<string> = { contents: "hello" };
boxA.contents;
        
let boxB: StringBox = { contents: "world" };
boxB.contents;

let boxC: Box<number> = { contents: 10 };
boxC.contents;

// UNION TYPES

type StringOrNumber = string | number;

function addWithUnion(arg1: StringOrNumber, arg2: StringOrNumber) {
	return arg1.toString() + arg2.toString();
}

// LITERAL TYPES

let WindowStates: "open" | "closed" | "minimized";

let test: 1 | 2 | 'a' | 'b';
