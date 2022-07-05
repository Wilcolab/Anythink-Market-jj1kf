# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup
### Installation
1. Install [Docker](https://docs.docker.com/get-docker/)
2. Verify installation: (> output sample)
```bash
docker -v
> Docker version 20.10.14, build a224086
docker-compose -v
> Docker Compose version v2.5.1
```
### Running app
1. Invoke ```docker-compose up``` (optional: ```-d``` for detached mode)
2. Wait for images to be pulled and started
3. Onve done, navigate to http://localhost:3000/api/ping to validate system is up
4. Navigate to http://localhost:3001/register and create your user!
