# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty.
  - Incorrectly entered as URL.
- Delete a shorten link when click the delete icon

### Screenshot
- Desktop:
  
 ![image](https://github.com/ThuTrang5631/url-shortening-api-master/assets/70875419/a6ffb7b9-dafd-4781-a6b6-bbd042f36c7a)

- Tablet:
  
![image](https://github.com/ThuTrang5631/url-shortening-api-master/assets/70875419/29aa679c-fd33-4dd5-b263-bba9be659f4b)

- Mobile:

![image](https://github.com/ThuTrang5631/url-shortening-api-master/assets/70875419/8b8db788-8450-4460-986c-294fcded8ee4)
![image](https://github.com/ThuTrang5631/url-shortening-api-master/assets/70875419/dccfae8a-f1b6-4b41-9e11-0b55302854c0)



### Links

- Solution URL: https://github.com/ThuTrang5631/url-shortening-api-master.git
- Live Site URL: https://url-shortening-api-master-frontendmentorr.vercel.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- TailwindCSS
- Axios
- Typescript

### What I learned

1. How to use TailwindCSS (https://tailwindcss.com/docs/installation)
   Use class of tailwind, if you want customise value you can add class-[value].
   ```
   <form className="searchsection__form p-[20px] rounded-[8px] min-[992px]:p-[50px] ">
          <div className="searchsection__wrapinput mb-[20px] min-[992px]:mb-[0px]">
          </div>
        </form>
   ```
2. Use Clipboard API provides the ability to respond to clipboard commands. Here, I apply for copy text. (https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API).
3. Use interface to define type for Props of component.
```
interface ButtonProps {
  children: string | React.ReactElement | undefined;
  onClick?: any;
  className?: string;
}

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      className={`button ${className ? className : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

```
4. Use sessionStorage to contain list shorten. If refresh the browser, list still appear.

## Author

- Frontend Mentor - [@Thu Trang](https://www.frontendmentor.io/profile/ThuTrang5631)
- LinkedIn - [@Thu Trang](www.linkedin.com/in/thutrang5631)

