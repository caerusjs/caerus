export const createBootPostgres = (name: string) => {
  return (`#!/bin/bash
  if [[ $(pgrep postgres) ]]; then
    nohup echo "not booting Postgres, already running."& &> /dev/null
  else
    postgres $@
  fi
`)
}