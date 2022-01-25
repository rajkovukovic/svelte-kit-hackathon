# svelte-kit hackathon

## Requirements

This project is build using Docker and VSCode with remote-containers extension.  
This keeps your physical machine cleaner (no need for installing of nodeJS which makes your machine safer for nodeJS and dependency related vulnerabilities) and your project will play nicer with a cloud.

- Linux, macOS or Windows (only if you really hate yourself) machine
- [Docker](https://docs.docker.com/get-docker/)
- [VSCode](https://code.visualstudio.com/download)
  - [VSCode Remote Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

## Developing

- Launch Docker
- Open this project in VSCode and press `Ctrl + Shift + P` (on macOS `Cmd + Shift + P`),  
  type `Remote-Containers: Reopen in Container` and press `Enter`. This will start development of your project inside a Docker container and will wire your VSCode to the container.
- Install dependencies `yarn install`
- Start a development server:

```bash
yarn dev

# or start the server and open the app in a new browser tab
yarn dev -- --open
```

## Building

```bash
yarn build
```

> You can preview the built app with `yarn preview`. This should _not_ be used to serve your app in production.
