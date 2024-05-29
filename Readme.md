# Convention guide:

# Git-flow:

1. Branch Naming:
    - **`main`**: Main branch for production-ready code.
    - **`testing`**: Branch for testing code before deploying to production.
    - `feature/nike-clone`: Branch for merging to the develop.
    - `develop`: The finished branch for the project.
2. **Commit Messages**:
    - Write `clear`, descriptive commit messages in the imperative mood.
    - Include a brief `summary` of the changes in the commit message body.
3. **Code Reviews**:
    - Conduct code `reviews` on team member to maintain `code quality`.
    - Address any `feedback` or `issues` raised during the `review process`.

# HTML:

1. **HTML Structure**:
    - Utilize semantic `HTML` elements to structure content meaningfully.
    - Employ `indentation` to enhance code readability and maintainability.
    - Include `comments` to explain complex sections or provide context for easier understanding.
    - Ensure HTML structure is accessible, I have use Tailwind as inline.
    - `Responsive`:  Employ `Tailwind CSS` and `CSS` responsive classes to create layouts that seamlessly adapt to various screen sizes and devices.
    - Keep the `code clean` to avoid unnecessary repetition of classes.

# CSS:

1. CSS Styling:
    - `Group` related selectors and properties together. Use `comments` to delineate different sections of your CSS file, especially when dealing with complex styles.
    - `Responsive Design`: Implement `media queries` to ensure styles adapt to different screen sizes and devices.
    - `Spacing and Indentation`: Maintain consistent spacing and indentation throughout CSS file for readability. Use a consistent number of spaces (e.g., 2 or 4) for indentation.
    - Use clear `descriptive names` for classes and ID to indicate  purpose. Prefer using it with lowercase letters.
    - `Comments`: Add comments to explain the purpose of specific styles, especially for complex or non-obvious ones. Comments can also be used to mark sections of a CSS file for easier navigation.
    - `Prevent duplicate styles` or selectors by consolidating similar rules into a single declaration.

# JavaScript:

1. JavaScript Structure:
    - Organize JavaScript code into logical sections or modules, with each section focusing on a specific aspect of functionality.
    - meaningful names for variables, functions, and classes.
    - Add comments to explain the purpose of functions, complex logic, or sections of code.
    - Use event-listeners to handle user interactions and trigger appropriate actions.
    - Maintain consistent code formatting and indentation.
    - Optimize performance by minimizing unnecessary DOM manipulations, optimizing loops, and reducing the number of function calls or even- listeners where possible.
    
2. **Variable Declarations**:
    - Use **`const`** for variables that do not change their value, and **`let`** for variables that do.
    - Avoid using **`var`** as it has function scope, unlike **`const`** and **`let`** which have block scope.
    - Simplify class `iteration` using a concise loop to streamline repetitive tasks.