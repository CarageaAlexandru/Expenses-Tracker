
# Expenses Tracker
# Caragea Alexandru: 150 86 119
# Link to hosted website:  [Live](https://expenses-tracker-nine-iota.vercel.app/)
# Link to Git Repository: [Development](https://github.com/CarageaAlexandru/Expenses-Tracker)



# Introduction

This project's budget tracker application seeks to provide a solution to a common issue faced by students: effectively managing personal finances. Financial management is essential for students as they navigate their educational journey, frequently juggling multiple expenses on a limited budget. 

This application's purpose is to give students a user-friendly tool that simplifies budget monitoring and aids them in making informed financial decisions.

In the initial evaluation, it was identified the need for a budget tracker tailored to the unique needs and obstacles faced by students. 

Students frequently encounter irregular income streams, fluctuating expenses, and varying financial priorities.
 Consequently, students frequently struggle to maintain a comprehensive financial overview, resulting in tension, overspending, and poor financial practises.

The budget tracker application addresses these issues by providing a robust platform that enables students to efficiently track their income, expenses, and savings objectives. 

Utilising the power of React, Node.js, and Mongoose, the application provides a responsive and intuitive user interface, making navigation and interaction effortless.

Students can easily add and categorise their income and expenses, and see a visual graph of their income and expenses to gain valuable insights into their financial habits by utilising this budget tracker.

Through the creation of this budget tracker application, the goal is to provide students with a potent resource that promotes financial literacy, encourages disciplined spending, and ultimately contributes to their well-being and academic success. In the sections that follow, we will delve into the methodology, methods, and evaluation results to assess the solution's efficacy and provide valuable insights for future enhancements.

# Methodology

Agile methodology was selected as the development methodology for this individual project. Agile methodology emphasises incremental and iterative development, allowing for flexibility and adaptability throughout the project lifecycle.

The project was divided into several sprints, with each sprint concentrating on specific features and functionalities, in order to adapt the Agile methodology to an individual project. This method enabled a structured and manageable development process consistent with Agile's core principles.

User stories were essential for capturing requirements and guiding the development process. Each user narrative represented a particular feature or functionality from the perspective of the user. On the basis of the identified requirements of students using the budget tracker application, user stories were developed.

An example of a budget tracker application user story could include:

"As a student, I want to be able to categorise my expenses so that I can easily track where my money is being spent."

"As a student, I want to be able to have a good amount of categories for my expenses so that I can easily track where my money is being spent."

"As a student, I want to be able to categorise my income so that I can easily track where my money is comming from."

"As a student, I want to be able to have a good amount of categories for my incomes so that I can easily track where most of my money is comming from."

"As a student, I want to be able to see a visual of my income and expenses to keep them balanced."

This user narrative reflects the application's need for an intuitive categorization feature. By decomposing the project into user stories, the development process became more focused and permitted incremental progress.

During each iteration, a set of user stories were ranked according to their significance and impact. Then, these user stories were transformed into actionable tasks and distributed across the development phases. 

By adopting Agile methodology and leveraging the power of sprints and user stories, the development process for this specific project became iterative, continuous improvement, and the delivery of a functional product at the conclusion of each sprint. This strategy enabled a structured development process while allowing for adaptability to changing requirements and priorities.

# Methods

User testing and surveys were the two primary data acquisition methods used to conduct an insightful evaluation of the budget tracker application. Although the size consisted of only three students, these methods provided valuable feedback and insights into the application's usability and efficacy.

User testing was performed by distributing the application to a select group of students and observing their interactions and usage patterns. Each participant was given application-specific duties to complete while their actions, comments, and feedback were noted. This method enabled real-time observation of how users navigate the application, identification of any usability issues, and direct user feedback collection.

In addition to user testing, surveys were used to obtain more structured participant feedback. The surveys consisted of a series of questions designed to evaluate the user interface, functionality, usability, and overall satisfaction of the application. Participants were able to convey their opinions, suggestions, and any specific areas for improvement they identified while interacting with the application via the surveys.

Using qualitative and quantitative techniques, the collected data were analysed to identify common themes, trends, and areas for improvement.

Despite the small sample size, the combination of user testing and surveys provided valuable insights into the budget tracker application's strengths and weaknesses. During the development process, the participant feedback enabled iterative improvements and informed decision-making. These methods, despite their limited scope, provided a firm foundation for evaluating the user experience and gaining valuable insights to further refine the application.

# Documentation / Implementation

# Backend

The Budget Tracker backend provides a RESTful API for managing income and expense records. It is built using Node.js, Express.js, and MongoDB with Mongoose.

## Getting Started

To run the backend server locally, follow these steps:

1.  Clone the project repository from [Git Repository](https://github.com/CarageaAlexandru/Expenses-Tracker).
2. CD into backend
3.  Install the dependencies by running `npm install` in the project root directory.
4.  Create a `.env` file in the project root directory and configure the following environment variables:
    -   `PORT`: The port number on which the server will run.
    -   `MONGO_URL`: The connection URL for your MongoDB database.
5.  Start the server by running `npm start` in the project root directory.

## API Endpoints

The following API endpoints are available:

### GET /api/get-incomes

Retrieves a list of all income entries from the database.

### POST /api/add-income

Adds a new income entry to the database. Requires a JSON payload with the following fields:

-   `title`: The title of the income entry.
-   `amount`: The amount of the income.
-   `type`: The type of the income.
-   `category`: The category of the income.
-   `description`: A description of the income.
-   `date`: The date of the income.
All fields are required

### DELETE /api/delete-income/:id

Deletes an income entry specified by the `id` parameter.

### GET /api/get-expenses

Retrieves a list of all expense entries from the database.

### POST /api/add-expense

Adds a new expense entry to the database. Requires a JSON payload with the following fields:

-   `title`: The title of the expense entry.
-   `amount`: The amount of the expense.
-   `type`: The type of the expense.
-   `category`: The category of the expense.
-   `description`: A description of the expense.
-   `date`: The date of the expense.
All fields are required


### DELETE /api/delete-expense/:id

Deletes an expense entry specified by the `id` parameter.

## Error Handling

In case of errors, the API endpoints return appropriate HTTP status codes and error messages in JSON format.

## Database Connection

The backend uses MongoDB as the database. The connection to the MongoDB database is established using Mongoose. The database connection configuration can be found in the `db/db.js` file.

## Dependencies

The backend utilizes the following dependencies:

-   `express`: For building the RESTful API server.
-   `cors`: For enabling Cross-Origin Resource Sharing.
-   `mongoose`: For MongoDB database connection and object modeling.
-   `nodemon`: For faster development (this should have been installed as a dev dependency but realised just now).
-   `dotenv`: For managing env variables (this should have been installed as a dev dependency but realised just now).

Ensure that the required dependencies are installed by running `npm install` before starting the backend server.

## Conclusion

The Budget Tracker backend provides a simple and straightforward API for managing income and expense records. By utilizing the provided API endpoints, users can perform CRUD operations on income and expense entries. 
The backend is built using Node.js, Express.js, and MongoDB, ensuring a reliable foundation for the budget tracking application.


# Frontend

## Components:

1.  Dashboard:
    
    -   Displays an overview of the user's `incomes` and `expenses` using `ChartJs` library.
    -  Also, the component imports `dateFormat` to format the dates and the `useGlobalContext` hook from the global context.
    - Inside the component, the `useEffect` hook is used to fetch the incomes and expenses from the database using the `getIncomes` and `getExpenses` functions from the global context, as well as the `expenses` and `incomes` needed for displaying the chart.

2.  ExpenseForm:
    -   The ExpenseForm component is responsible for rendering a form that allows users to add new expenses.
    -   It imports the necessary dependencies such as `useState` for managing state, `DatePicker` for date input, and `useGlobalContext` hook from the global context.
    -   The component defines a state variable `inputState` using the `useState` hook, which holds the values for expense title, amount, date, category, and description.
    -   The `handleInput` function is used to update the `inputState` based on user input.
    -   The `handleSubmit` function is called when the form is submitted. It first prevents the default form submission behavior.
    -   Within the `handleSubmit` function, the `addExpense` function from the global context is called to add the expense to the database. The `inputState` object is passed as an argument.
    -   After successfully adding the expense, the form fields are reset to their initial empty values.
    -   The `getExpenses` function from the global context is then called to retrieve the updated list of expenses from the backend.
    -   The form includes input fields for the expense: title, amount, date picker, a dropdown menu for selecting the expense category, and a textarea for providing a description.
    -   The submit button will trigger the `handleSubmit` function when clicked.
    
3.  Expenses:
    
    -   The Expenses component is responsible for rendering a list of all the user's expenses.
    -   It imports the necessary dependencies such as `useEffect` and `useState` from React, `useGlobalContext` from the global context, `ExpenseForm` component, and `dateFormat` utility function.
    -   The component defines a state variable `expenseList` using the `useState` hook to hold the list of expenses.
    -   Within the `useEffect` hook, the `getExpenses` function from the global context is called to fetch the expenses from the backend when the component mounts.
    -   Another `useEffect` hook is used to update the `expenseList` whenever the `expenses` state changes (this will add the expenses on the column in real time, without needing for the component to mount again).
    -   The `handleDeleteExpense` function is called when the user clicks the delete button for an expense. 
    -   The component consists of 2 columns:
        -   The left column contains the `ExpenseForm` component, which allows users to add new expenses.
        -   The right column contains a container div with the "mt-5" class, which displays the total expenses and a list of expense cards.
    -   The total expenses are displayed using the `totalExpenses` value from the global context.
    -   The list of expenses is displayed using the `expenseList` state. For each expense, a card is created with the expense's title, amount, date, category, and description.
    -   The `dateFormat` utility function is used to format the date of each expense.
    -   A delete button is provided for each expense card, and when clicked, it triggers the `handleDeleteExpense` function with the respective expense's ID as the argument.

5.  Form:
    -  This component is almost identical to the ExpensesForm component and follows the same logic.

5.  Incomes:
    -   This component is almost identical to the expenses component and follows the same logic.

6.  NavMenu:
    
    -   This component displays user information, available money calculated.
    -   Navigation menu renders a list of menu items from he `menu-items` array.
    -   Calls the `switchViews` function to render the corresponding component based on the active view.
    -   The active menu item is determined by comparing the `active` prop with the item's ID.
    -   Clicking on a menu item updates the active state using the `setActive` function.
    - It uses the Bootstrap layout structure with 2 columns, one for navigation and one for the main content.

7.  Transactions:
    
    - The component defines two variables, `sortedExpenses` and `sortedIncomes`, which sort the `expenses` and `incomes` arrays in descending order based on the `date` property. This ensures that the most recent transactions appear at the top of the tables.
    -  The component renders the UI for the expense table first. It includes a heading and a `<table>` element with table headers for "#", "Date", "Title", and "Amount". The expense data is mapped over using the `sortedExpenses` array, and each expense is rendered as a table row (`<tr>`). The relevant properties of each expense (index, date, title, amount) are displayed in the corresponding table cells (`<td>`).
    - The index was increased by 1 for better user experience.
	- The Income table is the same as expenses table.

## Context

-   The `GlobalProvider` component is responsible for managing the state related to incomes, expenses, and errors. It provides the following functionalities:
    
    -   State variables:
        -   `incomes`: An array state variable that holds the list of incomes.
        -   `expenses`: An array state variable that holds the list of expenses.
        -   `error`: A state variable to track and handle errors.
    -   CRUD operations for incomes:
        -   `addIncome`: A function that sends a POST request to the server to add a new income and updates the `incomes` state accordingly.
        -   `getIncomes`: A function that sends a GET request to the server to fetch the list of incomes and updates the `incomes` state.
        -   `deleteIncome`: A function that sends a DELETE request to the server to remove an income based on its ID and updates the `incomes` state.
    -   CRUD operations for expenses:
        -   `addExpense`: A function that sends a POST request to the server to add a new expense and updates the `expenses` state accordingly.
        -   `getExpenses`: A function that sends a GET request to the server to fetch the list of expenses and updates the `expenses` state.
        -   `deleteExpense`: A function that sends a DELETE request to the server to remove an expense based on its ID and updates the `expenses` state.
    -   Calculated values:
        -   `totalIncome`:Calculates the total income by reducing the `incomes` array and summing the `amount` property of each income object.
        -   `totalExpenses`: Same as the `totalIncome`


=
# Deployment
  - Frontend - The React application was deployed using [Vercel](https://www.vercel.com).
  - Backend - The backend application was deployed using [Cyclic.sh](https://cyclic.sh). 
