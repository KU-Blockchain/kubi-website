Currently deployed on Vercel [here](https://kubi-website.vercel.app/) 

# What is the KU Blockchain Institute (KUBI)?

The KU Blockchain Institute aims to promote blockchain technology education and adoption in the midwest, but what is blockchain? Essentialy, a blockchain is a permanent, decentralized, immutable ledger of transactions where blocks hold the transactions linked in a chain. We believe the inherent properties of this technology is the future of the internet, allowing communities to form where ownership does not come from a single entity.

# Workflow for editing the KUBI Website

## Starting out

1. Clone the repository and open a terminal.
2. Install the package manager yarn [here](https://classic.yarnpkg.com/lang/en/docs/install/) if you don’t have it already.
3. Install all package dependences using the command **`yarn`**.
4. Make all your changes on your own Git branch using **`git checkout <yourFirstName>-branch`**.
    - Example: **`git checkout micah-branch`**
5. Set up the private .env file to hold secret keys. Reach out to a contributor for this information.

## Development

1. Run **`yarn dev`** to start the development server.
    - Open [http://localhost:3000](http://localhost:3000/) with your browser to see the result.
    - Changes made in the code will be reflected immediately in the browser window.

## Production

1. Test your changes in a production server. First, build the application using **`yarn build`**.
2. Run **`yarn start`** to start the production server with the built assets.
    - Open [http://localhost:3000](http://localhost:3000/) with your browser to see the result.
    - This is an optimized production build, not meant for making changes.

## Pushing Changes

1. Use **`git add .`** to stage all the files you’ve made changes to.
2. Commit your changes by using **`git commit -m "<yourCommitMessag>"`**.
    - Example: **`git commit -m "changed bio and headshot for micah"`**
3. Create a pull request by going to the Github repository and requesting to merge into the main branch.