# REKAZ

## Project Overview
This project automates the coupon module using Cypress with Page Object Model (POM) for Rekaz Web platforms. The goal is to ensure that the coupon feature works as expected on the platform.

## Prerequisites
- Node.js (v14 or later)
- Cypress installed globally or in the project
- Git
- A text editor or IDE (e.g., VS Code)

## Setup Instructions

1. Clone the repository:
   ```bash
     git clone hhttps://github.com/oluwabuddy/REKAZ.git
     cd rekaz

2. Install the project dependencies:
   ```sh
   npm install

3. Run the tests in Cypress:
   ```sh
   npx cypress open

## Design Patterns Used
### Page Object Model (POM)
The POM design pattern is used to separate test logic from the UI elements. Each page in the application has its own class file with methods representing the actions users can take on that page.

Example:

- CouponPage.js encapsulates coupon functionality like entering credentials and clicking the sign-in button.

### Single Responsibility Principle (SRP)

Each page and class is responsible for only one area of the application (login page, dashboard, etc.).

### Ideas for Improvement

- Implement Data-Driven Testing: Use different sets of data (e.g., valid and invalid credentials) to test the login feature.
- Add Parallel Testing: Run tests across multiple browsers and devices simultaneously.
- Improve Error Handling: Add more robust handling for unexpected behavior such as network timeouts or asynchronous errors.
- Increase Test Coverage: Expand test cases to include edge cases like failed logins due to invalid credentials or captcha handling.

### Future Enhancements

- Integrate with CI/CD pipeline using Jenkins or GitHub Actions for automated test execution on every commit.
