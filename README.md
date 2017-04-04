# (VPM) Visual Project Manager

## About
Our vision was to develop a wep app that would allow for teams to work on projects together. The idea is that each new **Project** (a.k.a Feature) can be created along with the amount of time that the project should be completed in. Then, each Project can be clicked on which will render a new page listing all of the **Tasks** (a.k.a FeatureItem) which can be added or removed and have a radio button for completion. Upon completion, the green circular bar on the Feature needs to be updated accordingly. By comparing the green bar (progress) against the red bar (time), teams will be able to keep track of their progress/schedule.

**Our Unfinished Goals**
- Use WebSockets to allow for teams to communicate with each other on progress
- Implement the Lists page, app is currently only single page
- Create a login page for separate teams (many users on one team)

## What We Have Already Completed
Hopefully this readme will assist future contributors to this project and clarify any questions that you may have. We have already set up a webpack2 environment and hot reloading should already work. If it doesn't, you can try adding `--inline --hot` to the webpack dev server script in `package.json`. 
- To test the code, you are going to need to follow the **Back-End** part of this README.
- Run `npm install`
- Run `webpack -w` to have the bundler watch for all changes (bundles files)
- Run `npm run nodemon` to start the nodemon server
- Run `npm start` if you want you only run the webpack server with hot reloading

### Back-End ###
The Database is built on **PostreSQL** with a **Sequelize ORM**. If you are unsure how to use the database, it is quite easy to set up. We will get to that briefly. First, we have already built a fully functioning server/database with 8 main routes that cover CRUD for both the **Features** as well as the **FeatureItems**. If you want to do authorization or sockets, you will have to cover those yourself.

- Routes can be found in `./server/routes/index.js`

**Setting up your own database**
1. Make sure you have postgres installed (look up the command youselves)
2. Go to the terminal and go to the project root directory
3. Make sure to install sequelize-cli (`npm install` will not do this for you) `sudo npm install sequelize-cli` (I might be wrong on this, might have to add `-g`)
4. Type into the command line `createdb features`
5. Type `psql features` and you should be in the SQL shell
5. Then check your accounts by typing `SELECT * from pg_user;`
6. If you have the user `student`, I am assuming that your password is `ilovetesting`. If you dont, you may create `student` with the command `CREATE USER student PASSWORD "ilovetesting"`;
7. Exit the SQL shell by typing `\q` and type `sequelize db:migrate`. This command attaches the schema outlined in `./server/migrations.js` and `./server/models.js`. If you ever make any changes to the two aforementioned files, you have to follow these next steps or your code won't work.

**Dropping the Database**
- If you are changing the Schema, you only have to edit the `./server/models.js` file. The migrations will be created by the sequelize command once you migrate to the local database.
1. Make sure that you are in the root of the project folder. You're going to first have to drop your database. You cannot drop the database if you are inside of it, so first, lets create a new database. `createdb forDropping`.
2. Then `psql forDropping`.
3. Then `DROP DATABASE features;`.
4. Then `\q`.
5. Then `createdb features`
6. Then `sequelize db:migrate`

### Front-End ###
Our front end is built using **React!**. The naming here can get a little confusing, but we started with it and it just eventually stuck. So if you look in `./client` you will find all of our code. Stylesheets obviously holds all of our styles. It is all current ordered on a single css page. There isn't too much and they are generally grouped into sections... Again, sorry if the naming is confusing. Goodluck! We will help by breaking down how the files are linked together.

**React Components**
I guess this is pretty self explanatory. You just have to follow which components are being rendered, starting with `./client/App.jsx`
- `./client/feature/...` basically holds all of the information regarding the Project. **Title, Red (time) circle, Green (progress) circle, Update Info Button, Remove Feature Button** 
- `./client/checkPoint/...` is kind of named wrong. It's supposed to be all of the list items. We havent worked with this page yet really... For now, the only important file inside of this is CheckpointCtrl, I believe. It should be the one that is rendering the input fields.
- ***Notes*** - Each feature is being given its own state and we are setting the setInterval on each feature itself. It may seem a bit strange to have multiple states outside of our main state. But documentation says that this is the best way to maintain *pseudo-states*.

**Goodluck fellow cohortmates! May our project live on!**
