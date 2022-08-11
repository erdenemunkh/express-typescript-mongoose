Backend: Nodejs, Mongodb, Express Typescript

Docker create mongo DB

DB_NAME=dbname
➜ ~ docker run -d -p <whateverport>:27017 --name $DB_NAME \
-e MONGO_INITDB_ROOT_USERNAME=$DB_NAME \
-e MONGO_INITDB_ROOT_PASSWORD=$DB_NAME \
mongo

Run db

mongo mongodb://username:password@localhost:27028/dbname

mongo mongodb://username:password@localhost:27028

Create a new folder for your app, you can call it anything, on your terminal navigate to the newly created folder and run this command

npm init
this will create a package.json file for us.

install the following dependencies

npm install typescript --save-dev
npm install express body-parser --save
The next thing is to create a tsconfig file for typescript,

run this command on the terminal

npx tsc --init
if you are having issues with this or this is throwing an error, install typescript globally like this:

npm install typescript -g

We do not have a type definition file for our express package, typescript analyzes our code for errors. When we install and import a third-party module, typescript doesn’t know the type required for this module, we need to install a type definition file to inform typescript about the types, arguments, and return types of this package. The type definition file always ends in .d.ts, in the case of our express package, for instance, we need to install the @types/express module to inform typescript about the types and other information required by our express package

npm install @types/express --save-dev

Note that Node cannot run our typescript code directly, so we have to compile it down to Javascript, but with the help of a package ts-node we can run typescript directly with node, but we are going to use ts-node-dev instead because it will watch our files for any changes and restart the server, just like nodemon. let’s install this package

npm install ts-node-dev --save-dev

Connect to MongoDB
npm install mongoose

Typescript is flagging our mongoose package. if we hover over it we’ll see that typescript is telling us that it cannot find a file declaration for mongoose module. As discussed earlier on, we need to install type definitions for all our installed packages, just like we did with express. for mongoose run this to install the type definitions.

npm install @types/mongoose --save-dev

source: https://medium.com/swlh/typescript-with-mongoose-and-node-express-24073d51d2ee

apt-get update && apt-get install -y docker.io

[https://www.cloudbees.com/blog/how-to-install-and-run-jenkins-with-docker-compose]
