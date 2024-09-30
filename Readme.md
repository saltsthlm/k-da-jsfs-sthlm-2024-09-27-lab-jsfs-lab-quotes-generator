# Quotes Generator
Today we are going to explore a full-stack codebase using TDD (sort of). Following are the tasks for today:

### General

- clone this repository

For today, start with the backend. And once everything is fixed in the backend, move to the frontend.

### Backend
- Run the server by doing the following:
  - Open a terminal and navigate into the folder by running `cd quo-gen-be`
  - Install dependencies using `npm`
  - See the `package.json` to identify the command to run the server in `dev` mode.
- Observe the API calls defined in the `src/api/v1/quotes.ts` file.
  - Hint: paste the API URLs in the browser and see if they return any data.
- Run unit tests and see that they are failing
  - Make the tests pass one by one by making sure the actual implementation matches the expected results in the tests.
    - Try not to modify the tests. Until mentioned by the instructors that you can.
- Run the `lint` to see the code style is consistent/'
  - fix any issues that arise


### Frontend
- Run the frontend server by doing the following:
  - Open a terminal and navigate into the folder by running `cd quo-gen-web`
  - Install dependencies using `npm`
  - See the `package.json` to identify the command to run the server in `dev` mode.
- See the console/terminal on which url:port the app is being served at. Open that link in the browser.
- Run unit tests and see that they are failing
  - Make the tests pass one by one by making sure the actual implementation matches the expected results in the tests.
    - Try not to modify the tests. Until mentioned by the instructors that you can.
- Run the `lint` to see the code style is consistent/'
  - fix any issues that arise
- Run the end-to-end tests (if there are any) to make sure everything is working
  - `npm run e2e`

### Edit code
Your task is to make the unit test pass by editing the actual code files. That means that you shall not touch the test files. I.e. the files ending with `*.spec.ts` or `*.test.ts`.

Congratulations!!! You have just completed the first exercise :)

### Retrospective
Collect your team members and reflect over what you just did. What did you learn today?
