clear
mkdir -p ./docs
#./node_modules/.bin/jsdoc -d ./docs ./src/lib/algorithms/sortoperations.js
./node_modules/.bin/jsdoc --configure resources/docs/jsdoc.json ./src/lib/algorithms/sortoperations.js

