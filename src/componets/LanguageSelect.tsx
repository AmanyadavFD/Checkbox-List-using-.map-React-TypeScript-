import { useState, type FC } from 'react';

const LanguageSelect: FC = () => {
  const [lang, setLang] = useState<string[]>([]);

  const handleLangCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setLang((prev) => [...prev, value]);
    } else {
      setLang((prevValue) => prevValue.filter((lang) => lang !== value));
    }
  };
  return (
    <>
      <div>
        <p>
          <label htmlFor="react">
            <input
              type="checkbox"
              value="React"
              id="react"
              onChange={handleLangCheckBox}
            />
            React
          </label>
        </p>
        <p>
          <label htmlFor="js">
            <input
              type="checkbox"
              value="JavaScript"
              id="js"
              onChange={handleLangCheckBox}
            />{' '}
            JavaScript
          </label>
        </p>
        <p>
          <label htmlFor="css">
            <input
              type="checkbox"
              value="CSS"
              id="css"
              onChange={handleLangCheckBox}
            />
            CSS
          </label>
        </p>
        <p>
          <label htmlFor="html">
            <input
              type="checkbox"
              value="HTML"
              id="html"
              onChange={handleLangCheckBox}
            />
            HTML
          </label>
        </p>
        <p>{lang.join(',')}</p>
      </div>
    </>
  );
};

export default LanguageSelect;
