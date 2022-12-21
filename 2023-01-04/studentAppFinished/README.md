# Codealong Notes

## Questions I have

- Why do we need Express.js?
- What does an API server do exactly?

## Things I think I learned

Ways to set PORT environment variable

- with a default fallback: `process.env.PORT || 9000` (will use 9000 if no PORT envvar)
- as a command line argument: `PORT=8888 node server.js`
- `export` in current terminal session ONLY:
```
$ export PORT=8888
$ node server.js

Listening on port 8888
```
- `export` in bash or zsh profile file (will last for multiple sessions):
```
# in bash/zsh profile
export PORT=8888

# in command line (after saving changes to profile)
$ source ~/.zshrc
$ node server.js
```
- In a `.env` file using the `dotenv` npm package
```
// server.js
require('dotenv').config() // adds envvars from .env file to current environment
```
https://www.npmjs.com/package/dotenv
> 'By default, we will never modify any environment variables that have already been set. In particular, if there is a variable in your .env file which collides with one that already exists in your environment, then that variable will be skipped'

- in terminal, use `unset PORT` to delete the PORT variable from the environment
- in terminal, use `echo $PORT` to print the value of the PORT variable

NEVER commit .env file to github!
