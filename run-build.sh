clear

which curl &> /dev/null

if [[ $? = 0 ]]; then
  curl https://knossys.com/banner.txt
fi

if [ ! -d "node_modules" ]; then
  echo "Error: no node_modules folder found, please execute 'run-prep.sh first"
  exit
fi

#export NODE_OPTIONS=--openssl-legacy-provider
# This will create the ./public folder
npm run build

# This will create the ./public/docs folder
./node_modules/.bin/jsdoc --configure resources/docs/jsdoc.json ./src/lib/algorithms/sortoperations.js ./src/lib/algorithms/setoperations.js ./src/lib/algorithms/basicstatisticstests.js ./src/lib/algorithms/numericstringextract.js ./src/lib/algorithms/stackqueueoperations.js ./src/lib/algorithms/graphoperations.js ./src/lib/algorithms/hashtable.js
cp -v ./views/docs.html ./public/docs/
cp -v ./views/api.html ./public/docs/
