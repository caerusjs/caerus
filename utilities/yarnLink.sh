#!/bin/bash
yarn --cwd packages/cli link
yarn --cwd packages/helpers link
yarn --cwd packages/themes link
yarn --cwd packages/dalton link

yarn --cwd packages/cli link @caerusjs/helpers
yarn --cwd galileo link @caerusjs/helpers
yarn --cwd galileo link @caerusjs/cli
yarn --cwd galileo link @caerusjs/themes
yarn --cwd galileo link @caerusjs/dalton