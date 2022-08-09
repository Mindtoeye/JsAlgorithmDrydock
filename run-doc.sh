clear
mkdir -p ./docs
#./node_modules/.bin/jsdoc -d ./docs ./src/lib/algorithms/sortoperations.js
./node_modules/.bin/jsdoc --configure resources/docs/jsdoc.json ./src/lib/algorithms/sortoperations.js ./src/lib/algorithms/setoperations.js ./src/lib/algorithms/basicstatisticstests.js ./src/lib/algorithms/numericstringextract.js ./src/lib/algorithms/stackqueueoperations.js ./src/lib/algorithms/graphoperations.js ./src/lib/algorithms/hashtable.js
