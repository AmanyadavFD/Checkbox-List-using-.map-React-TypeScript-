

---

# Dynamic Checkbox List in React (TypeScript)

This project demonstrates how to build a **dynamic checkbox list** in **React with TypeScript**, using best practices such as controlled components, state management with arrays, and list rendering using `.map()`.

---

## 🚀 Features

* Dynamic rendering of checkboxes using `.map()`
* Multiple selection using array state
* Controlled checkbox inputs
* Proper TypeScript typings
* Clean and reusable logic
* Interview-ready React patterns

---

## 🧠 Concepts Covered

* React Functional Components
* `useState` with TypeScript
* Handling checkbox inputs
* Controlled vs uncontrolled components
* Array operations (`includes`, `filter`, spread operator)
* React reconciliation & keys

---

## 📂 Project Structure

```
src/
 └── LanguageSelect.tsx
```

---

## 🧩 Component Code

```tsx
import { useState, type FC } from 'react';

const LanguageSelect: FC = () => {
  const languages: string[] = ['React', 'JavaScript', 'CSS', 'HTML'];
  const [selectedLang, setSelectedLang] = useState<string[]>([]);

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedLang((prev) => [...prev, value]);
    } else {
      setSelectedLang((prev) =>
        prev.filter((lang) => lang !== value)
      );
    }
  };

  return (
    <div>
      {languages.map((lang) => (
        <p key={lang}>
          <label>
            <input
              type="checkbox"
              value={lang}
              checked={selectedLang.includes(lang)}
              onChange={handleCheckboxChange}
            />
            {lang}
          </label>
        </p>
      ))}

      <h3>Selected Languages:</h3>
      <p>{selectedLang.join(', ')}</p>
    </div>
  );
};

export default LanguageSelect;
```

---

## ✅ How It Works

1. Languages are stored in an array.
2. Checkboxes are rendered dynamically using `.map()`.
3. Selected values are stored in a `string[]` state.
4. `checked={selectedLang.includes(lang)}` keeps UI and state in sync.
5. `key` ensures correct React reconciliation.

---

## 🧪 Example Output

```
☑ React
☐ JavaScript
☑ CSS
☐ HTML

Selected Languages:
React, CSS
```

---

## 🎯 Best Practices Used

* ✅ Stable keys (not index)
* ✅ Controlled inputs
* ✅ Immutable state updates
* ✅ Strong TypeScript typing

---

## 👨‍💻 Author

**Aman Yadav**
Front-End Engineer | React | TypeScript | JavaScript

---


