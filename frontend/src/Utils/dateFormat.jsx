// create and export a function that takes in a date string and returns a formatted date string
export const dateFormat = (date) => {
	return new Date(date).toLocaleDateString("en-GB", {
		day: "numeric",
		month: "numeric",
		year: "numeric",
	});
};
