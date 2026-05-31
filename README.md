# Playwright Automation Framework (UI + API)

A professional Playwright-based automation framework for testing web UI ([Sauce Demo](https://sauce-demo.myshopify.com/)) and REST APIs ([Petstore API](https://petstore.swagger.io/)).

Built with **scalability, maintainability, and reusability** in mind using Page Object Model and a modular structure.

---

## Features

- UI automation using Playwright
- API testing using node-fetch
- Page Object Model (POM) architecture
- Two-stage CI/CD pipeline with GitHub Actions
- Branch protection — direct pushes to `master` blocked
- Slack failure notifications
- Environment variable support for credentials
- HTML test reporting
- Organised UI and API test structure

---

## Tech Stack

| Tool                 | Purpose                       |
| -------------------- | ----------------------------- |
| Playwright           | UI automation and test runner |
| JavaScript (Node.js) | Primary language              |
| node-fetch           | API automation                |
| GitHub Actions       | CI/CD pipeline                |
| Slack                | Failure notifications         |
| ESLint               | Code quality                  |
| Prettier             | Code formatting               |

---

## CI/CD Pipeline

This framework has a fully automated two-stage CI/CD pipeline powered by **GitHub Actions**.

### Stage 1 — Smoke Tests (on Pull Request)

**Triggered by:** Opening or updating a Pull Request against `master`
**Workflow file:** `smoke-test-pipeline.yml`

When a developer raises a PR, the smoke pipeline runs automatically:

1. Checks out the code
2. Sets up Node.js v20 LTS
3. Installs npm dependencies
4. Installs Playwright Chromium
5. Runs the smoke test suite — critical path only
6. Uploads HTML report as an artifact on failure
7. Sends Slack notification on failure

The PR cannot be merged until smoke tests pass.

---

### Stage 2 — Regression Tests (on merge to master)

**Triggered by:** A PR being approved and merged into `master`
**Workflow file:** `regression-test-pipeline.yml`

Once a PR is merged, the full regression pipeline runs automatically:

1. Checks out the code
2. Sets up Node.js v20 LTS
3. Installs npm dependencies
4. Installs Playwright Chromium
5. Runs the full regression test suite
6. Uploads HTML report as an artifact on failure
7. Sends Slack notification on failure

---

### Pipeline flow

```
Developer pushes code
        ↓
Creates Pull Request
        ↓
Smoke tests run automatically   ← smoke-test-pipeline.yml
        ↓
PR reviewed and approved
        ↓
PR merged into master
        ↓
Regression tests run automatically  ← regression-test-pipeline.yml
        ↓
Slack alert sent if anything fails
```

---

### Branch protection rules

`master` is a protected branch:

- Direct pushes to `master` are blocked
- All changes must go through a Pull Request
- PR requires at least one approval before merging
- Smoke tests must pass before merge is allowed

---

### Slack notifications

When tests fail, the team receives an instant Slack alert:

```
❌ Tests Failed!
Repository:   sajidinnovationcs-coder/githubPract-1
Branch:       master
Triggered by: sajidinnovationcs-coder
View Run:     https://github.com/...
```

---

## Git Workflow

This project follows a professional feature-branch workflow:

- All features and fixes are developed on dedicated feature branches
- Pull requests are required before merging into `master`
- Direct pushes to `master` are blocked by branch protection rules
- PRs are reviewed and approved before merging
- Smoke tests must pass before a PR can be merged

---

## Project Structure

```
project-root
│
├── .github
│   └── workflows
│       ├── smoke-test-pipeline.yml       ← runs on Pull Request
│       └── regression-test-pipeline.yml  ← runs on merge to master
│
├── playwright-report
│   └── (HTML test reports)
│
├── src
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
│   │   └── cart
│   │       └── cart.page.js
│   │
│   └── utils
│       ├── apiHelper.js
│       └── dataGenerator.js
│
├── tests
│   ├── api
│   │   └── pet
│   │       └── createPet.spec.js
│   │
│   └── ui
│       ├── auth
│       │   └── login.spec.js
│       └── cart
│           └── addItem.spec.js
│
├── .env.example                          ← example env file (never commit .env)
├── eslint.config.js                      ← ESLint configuration
├── .gitignore
├── .prettierrc                           ← Prettier configuration
├── config.js
├── playwright.config.js
├── package.json
└── README.md
```

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/sajidinnovationcs-coder/githubPract-1.git
cd githubPract-1
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright Chromium

```bash
npx playwright install chromium
```

### 4. Set up environment variables

Copy the example env file and fill in your credentials:

```bash
cp .env.example .env
```

```env
SAUCE_USERNAME=standard_user
SAUCE_PASSWORD=secret_sauce
```

---

## Running Tests

### Run all tests

```bash
npx playwright test
```

### Run UI authentication tests

```bash
npm run UI_Auth
```

### Run UI cart tests

```bash
npm run UI_Cart
```

### Run API tests

```bash
npm run API_AddTOCart
```

---

## Test Reports

Playwright automatically generates an HTML report after execution.

### Open the report

```bash
npx playwright show-report
```

### Report location

```
playwright-report/<test-folder>/index.html
```

---

## Test Coverage

### UI Tests

- Login page validation
- Valid user authentication
- Invalid login validation
- Cart functionality

### API Tests

- Add item to cart
- Validate API response status
- Validate response body fields
- Verify data consistency

---

## Framework Design

This framework follows **Page Object Model (POM)**:

```
login.page.js        → locators, actions, validation methods
login.spec.js        → test scenarios and assertions only
```

Benefits:

- Maintainability — change locator in one place
- Reusability — share page methods across tests
- Readability — tests read like plain English

---

## Roadmap

- [x] UI automation (Playwright)
- [x] API automation (node-fetch)
- [x] Page Object Model
- [x] Two-stage CI/CD pipeline (GitHub Actions)
- [x] Branch protection rules
- [x] Slack failure notifications
- [x] ESLint + Prettier code quality
- [ ] Screenshots on failure
- [ ] Video recording on failure
- [ ] Trace debugging integration
- [ ] Cross-browser execution
- [ ] Parallel test execution
- [ ] Allure reporting
- [ ] API schema validation
- [ ] Test data management

---

## Author

**Sajidali Saiyed**
Automation framework built with Playwright for UI and API testing.

[GitHub](https://github.com/sajidinnovationcs-coder) | [LinkedIn](https://www.linkedin.com/in/sajidali-saiyed-99aaa215a/)
