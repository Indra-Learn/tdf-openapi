# Developer Guide

## Tools and Technology Used:

| ID | Tool Name | Tool Type | Doc | Comments |
|:---|:---------:|----------:|:-----:|---------:|
| 1. | **[Next.js](https://nextjs.org/docs)** | React Framework | [Learn](https://nextjs.org/learn) | [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) |
| 2. | **[Shadcn]()** | UI Design | [Install](https://ui.shadcn.com/docs/installation) | NIL |
| 3. | **[Stock Widgets](https://www.tradingview.com/widget-docs/widgets/)** | NIL | [Link]() | NIL |
| x. | **[NIL]()** | NIL | [Link]() | NIL |


## How To Develop:

1. Ref: 
    1. youtube: https://www.youtube.com/watch?v=gu4pafNCXng&t=535s
    2. github: https://github.com/adrianhajdin/signalist_stock-tracker-app/tree/main
    3. asset: https://jsmastery.com/video-kit/7df14775-f594-4367-9941-9abce7d82de2?utm_source=youtube&utm_campaign=stocks-inngest

2. After installing **node.js**, create `next.js` project setup by below command:
    ```shell
    npx create-next-app

    ✔ What is your project named? … .
    ✔ Would you like to use TypeScript? … No / Yes
    ✔ Which linter would you like to use? › ESLint
    ✔ Would you like to use Tailwind CSS? … No / Yes
    ✔ Would you like your code inside a `src/` directory? … No / Yes
    ✔ Would you like to use App Router? (recommended) … No / Yes
    ✔ Would you like to use Turbopack? (recommended) … No / Yes
    ✔ Would you like to customize the import alias (`@/*` by default)? … No / Yes
    Creating a new Next.js app in /Users/indranilpal/git_repos/tdf-openapi.

    npm run dev
    ```

3. Setup Shadcn for Design
    ```zsh
    npx shadcn@latest init
    npx shadcn@latest add button
    npx shadcn@latest add dropdown-menu
    npx shadcn@latest add avatar
    ```

4. Add VSCode extension:
    1. ES7+ React/Redux/React-Native snippets