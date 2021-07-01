This is a starter template for [Learn Next.js](https://nextjs.org/learn).

# Notes:
Next.js gives :
    - pre-rendering - allows render without JS
    - can choose between static generation and server side rendering
        - you can also export an async function called getStaticProps. If you do this, then: getStaticProps runs at build time in production, and… Inside the function, you can fetch external data and send it as props to the page.
        -  getServerSideProps - for server side rendering

    You can't fully rely on auto refresh getting variable updates correct, if in doubt refresh browser.

Next js tags:
 Image 
    - can auto scale size based on size of browser window
    - priority flag - if should preload image


