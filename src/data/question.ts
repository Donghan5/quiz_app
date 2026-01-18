export type Question = {
	id: number
	question: string;
	options: string[];
	answer: string;
}

export const quizData: Question[] = [
	{
		id: 1,
		question: "What is the capital of France?",
		options: ["Paris", "London", "Berlin", "Madrid"],
		answer: "Paris"
	},
	{
		id: 2,
		question: "Who is the author of 'To Kill a Mockingbird'?",
		options: ["Harper Lee", "F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck"],
		answer: "Harper Lee"
	},
	{
		id: 3,
		question: "What is the chemical symbol for water?",
		options: ["H2O", "CO2", "O2", "NaCl"],
		answer: "H2O"
	},
	{
		id: 4,
		question: "What is the largest planet in our solar system?",
		options: ["Earth", "Mars", "Jupiter", "Saturn"],
		answer: "Jupiter"
	},
	{
		id: 5,
		question: "What is the smallest planet in our solar system?",
		options: ["Mercury", "Venus", "Earth", "Mars"],
		answer: "Mercury"
	}
]