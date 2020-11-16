#!/bin/bash
yarn --cwd packages/helpers build
yarn --cwd packages/dalton build
yarn --cwd packages/themes build
yarn --cwd packages/cli build