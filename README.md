# 🚀 Playwright Automation Framework (UI + API)

A Playwright-based automation framework to test web UI ([Sauce Demo](https://sauce-demo.myshopify.com/)) and REST APIs ([Petstore API](https://petstore.swagger.io/)) seamlessly.

The framework is designed with **scalability, maintainability, and reusability** in mind using a modular structure and Page Object Model principles.

---

# 📌 Features

✔ UI Automation using Playwright
✔ API Testing using Playwright request library
✔ Page Object Model structure
✔ HTML test reporting : Planned for a future release.
✔ Screenshots on failure: Feature  Planned for a future release.
✔ Video recording on failure : Feature  : Planned for a future release.
✔ Environment variable support for credentials
✔ Organized UI and API test structure

---

# 🛠 Tech Stack

* **Playwright**
* **JavaScript (Node.js)**
* **Playwright Test Runner**
* **HTML Reporting**
* **Environment Variables**
* **Node-fetch api for api automation**


---
💻 Git Workflow / Branching Strategy

This project follows a professional feature-branch workflow to ensure code quality and team collaboration:

All new features or fixes are developed in feature branches

Pull requests (PRs) are required for merging into master

Direct pushes to master are prohibited, ensuring stability

PRs are reviewed and approved before merging, promoting code quality and collaboration
---

# 📂 Project Structure

```
project-root
│
├── playwright-report
│   └── api-add-to-cart-1772920699986
│       └── (HTML test reports)
│
├── src
│   │
│   ├── apiClient
│   │   └── petClient.js
│   │
│   ├── components
│   │   └── cart
│   │       └── cartSummary.component.js
│   │
│   ├── data
│   │   └── (test data files)
│   │
│   ├── pages
│   │   ├── auth
│   │   │   └── login.page.js
│   │   │
│   │   └── cart
│   │       └── cart.page.js
│   │
│   └── utils
│       ├── apiHelper.js
│       └── dataGenerator.js
│
├── tests
│   │
│   ├── api
│   │   └── pet
│   │       └── createPet.spec.js
│   │
│   └── ui
│       ├── auth
│       │   └── login.spec.js
│       │
│       └── cart
│           └── addItem.spec.js
│
├── .env
├── .gitignore
├── config.js
├── playwright.config.js
├── package.json
└── README.mdt
```

---

# ⚙️ Installation

### 1️⃣ Clone repository

```
git clone <repository-url>
cd <project-folder>
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Install Playwright browsers

```
npx playwright install chromium
```

---

# 🔐 Environment Variables

Credentials can be provided through environment variables to avoid hardcoding sensitive data.

Example:

```
export USERNAME=testuser
export PASSWORD=testpassword
```

The framework reads credentials like this:

```
const USERNAME = process.env.USERNAME || 'standardUser';
const PASSWORD = process.env.PASSWORD || 'secretSauce';
```

---

# ▶️ Running Tests

### Run all tests

```
npx playwright test
```

---

### Run UI authentication tests

```
npm run UI_Auth
```

---

### Run UI cart tests

```
npm run UI_Cart
```

---

### Run API tests

```
npm run API_AddTOCart
```

---

# 📊 Test Reports

After execution, Playwright automatically generates an **HTML report**.

### Open report

```
npx playwright show-report
```

### Report location

```
playwright-report/Testname-folder/index.html: For example: api-add-to-cart-1772920699986/index.html
```

The report contains:

* Test execution results
* Test duration details
* Failed test screenshots: Planned for a future release.
* Video recordings: Planned for a future release.
* Trace debugging : Planned for a future release.


---

# 🧪 Test Coverage

## UI Tests

* Login page validation
* Valid user authentication
* Invalid login validation
* Cart functionality

---

## API Tests

* Add item to cart
* Validate API response status
* Validate response body fields
* Verify data consistency

---

# 🧱 Framework Design

This framework follows **Page Object Model (POM)** design.

Example:

```
login.page.js
```

Handles:

* Login page locators
* Login actions
* Validation methods

Test files focus only on:

* Test scenarios
* Assertions

This separation improves:

* Maintainability
* Reusability
* Readability

---

# 📈 Example Test Execution

Run authentication tests:

```
npm run UI_Auth
```

Example console output:

```
Running 2 tests using 1 worker

✓ Valid login
✓ Invalid login

2 passed
```

---

# 🔍 Debugging Failed Tests 

Playwright automatically captures:

* Screenshots : Planned for a future release.
* Videos : Planned for a future release.
* Trace files

Trace can be opened using:

```
npx playwright show-trace trace.zip
```

---

# 🚀 Future Improvements

Possible enhancements for this framework:

* Cross-browser execution
* Parallel test execution
* CI/CD pipeline integration
* Allure reporting
* Test Data Management: A more stable and robust data model will be implemented in future releases
* API schema validation

---

# 👨‍💻 Author

Developed by **Sajidali Saiyed**.  
Automation framework built using **Playwright** for UI and API testing.  
[GitHub](https://github.com/sajidinnovationcs-coder) | [LinkedIn](https://www.linkedin.com/in/sajidali-saiyed-99aaa215a/)

---

# ⭐ Notes

This project demonstrates:

* Playwright UI automation
* API testing capabilities
* Clean test architecture
* Reusable automation utilities

The framework is designed to be **easy to extend and maintain for larger automation suites**.
