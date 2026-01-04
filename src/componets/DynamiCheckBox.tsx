import React, { useState } from "react";

const DynamiCheckBox = () => {
  const languages: string[] = ["React", "JavaScript", "CSS", "HTML"];

  const [selectedLang, setSelectedLang] = useState<string[]>([]);
  const handleLangCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedLang((prevValue) => [...prevValue, value]);
    } else {
      setSelectedLang((prevValue) =>
        prevValue.filter((lang) => lang !== value)
      );
    }
  };
  return (
    <>
      <h3>🔁 Dynamic Checkbox List using .map() (React + TypeScript)</h3>

      <div>
        {languages.map((lang) => (
          <p key={lang}>
            <label htmlFor={lang}>
              <input
                type="checkbox"
                value={lang}
                id={lang}
                checked={selectedLang.includes(lang)}
                onChange={handleLangCheckBox}
              />
              {lang}
            </label>
          </p>
        ))}
        <p>{selectedLang.join(", ")}</p>
      </div>
    </>
  );
};

export default DynamiCheckBox;
