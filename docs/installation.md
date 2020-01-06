# Installation

First, clone the repository and then cd into the project

```sh
$ git clone git@github.com:Ideea-inc/vipfs.git
$ cd vipfs
```

Next, install the required node packages by running
```sh
$ npm install
```
Finally, run the build command to compile the project.
```sh
$ npm run build
```

Now you should have a new directory called `build` in the root of the vipfs project, this is where all of the project’s compiled HTML, JS and CSS is stored.

## Development Server
Once you have successfully compiled the project, you will need to set-up the local development server so you can see your project in a browser and deploy it to IPFS. Run the command below to start the Docker containers (see docker-compose.yml)

```sh
$ docker-compose up
```
The first time you run this command it may take a while to download and build the container images. Once the containers are built, you should be able to see two running containers named app and ipfs when you run the command docker ps

To confirm you have set everything up correctly, you should be able to goto http://localhost:8000 and see the default VIPFS welcome screen.