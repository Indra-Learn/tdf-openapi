# Developer Guide

## Tools and Technology Used:

| ID | Tool Name | Tool Type | Doc | Comments |
|:---|:---------:|----------:|----:|---------:|
| 1. | **[Next.js](https://nextjs.org/docs)** | React Framework | [Learn](https://nextjs.org/learn) | [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) |
| 2. | **[Shadcn]()** | UI Design | [Install](https://ui.shadcn.com/docs/installation) | NIL |
| 3. | **[TradingView Widgets](https://www.tradingview.com/widget-docs/widgets/)** | Market Analysis | [Link]() | NIL |
| 4. | **[cloudflare](https://www.cloudflare.com/en-in/)** | Server Deployment | 1. [Dev Doc](https://developers.cloudflare.com/workers/)</br>2. [console](https://dash.cloudflare.com/389ac08ebd30bce3aaafaf686a949ed0/home/developer-platform) | NIL |
| 5. | **[MongoDB]()** | NIL | [console](https://cloud.mongodb.com/v2/67551e34633cb7760d4506e2#/overview) | NIL |
| 6. | **[Tailwind]()** | CSS Tool | 1. [Flowbite](https://flowbite.com/docs/typography/lists/)</br>2. [Shuffle](https://tailwind.build/classes) | NIL |
| 7. | **[AWS]()** | NIL | [Link]() | NIL |
| 8. | **[Better-Auth](https://www.better-auth.com)** | NIL | [Link]() | NIL |
| 9. | **[Inngest](https://www.inngest.com)** | NIL | 1. [Console](https://app.inngest.com/env/production/onboarding/create-app) | NIL |
| 10. | **[Gemini]()** | NIL | 1. [Console](https://aistudio.google.com) | NIL |
| x. | **[NIL]()** | NIL | [Link]() | NIL |


## How To Develop:

1. Ref: 
    1. youtube: https://www.youtube.com/watch?v=gu4pafNCXng&t=535s
    2. github: https://github.com/adrianhajdin/signalist_stock-tracker-app/tree/main
    3. asset: https://jsmastery.com/video-kit/7df14775-f594-4367-9941-9abce7d82de2?utm_source=youtube&utm_campaign=stocks-inngest

2. After installing **[node.js](https://nodejs.org/en/download)**, create `next.js` project setup by below command:
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

3. Setup Shadcn for Design and Other packages:
    ```zsh
    npx shadcn@latest init
    npx shadcn@latest add button
    npx shadcn@latest add dropdown-menu
    npx shadcn@latest add avatar

    npm install react-hook-form

    npx shadcn@latest add input label select

    // npm install bootstrap@5.3.8
    ```

4. Add VSCode extension:
    1. ES7+ React/Redux/React-Native snippets
    2. Prettier

5. Deploy in CLoudFlare:
    1. Ref: https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/#deploy-an-existing-nextjs-project-on-workers
    ```zsh
    npm install --save-dev @opennextjs/cloudflare@latest
    npm install wrangler --save-dev

    npm run preview:worker
    npm run deploy:worker
    ```

6. Set-up MongoDB:
    1. Install MongoDB
    ```zsh
    npm install mongodb mongoose
    ```
    2. copy the Mongodb URI and paste into `.env` file
    ```zsh
    MONGODB_URI=mongodb+srv://infoeasycloudapi:<db-password>@tdf-mongodb-cluster.xmoc8.mongodb.net/?retryWrites=true&w=majority&appName=tdf-mongodb-cluster
    ```
    3. Visit `Network Access` to modify your settings and add your current IP address.  
    4. Test the DB connection
    ```zsh
    npm run test:db
    ```
`

7. Set-up Auth:
    1. Install packages
    ```zsh
    npm install better-auth

    npx inngest-cli@latest dev
    npm install inngest

    npm install nodemailer
    npm i --save-dev @types/nodemailer
    ```
    2. create Google App password
        1. open "https://myaccount.google.com/security"
        2. Make sure "2 step verification" is enabled under "How you sign in to Google"
        3. then click "https://myaccount.google.com/apppasswords" to generate 16 digit app password.
