# London Prime

Website of London Prime, a London based developer of luxury properties. 
## Installation

```bash
git init
git add .
git commit -m “First commit”
git log --oneline
git remote add origin <repository URL>
git push -u origin master
npm init [entry point index.html]
npm install lite-server --save-dev

package.json:
{
    "name": "london-prime",
    "version": "1.0.0",
    "description": "London Prime",
    "main": "index.html",
    "scripts": {
        "start": "npm run lite",
        "test": "echo \"Error: no test specified\" && exit 1",
        "lite": "lite-server"
    },
    "repository": {
        "type": "git",
        "url": "git+https://github.com/lowner75/london-prime.git"
    },
    "author": "Bryan Lown",
    "license": "ISC",
    "bugs": {
        "url": "https://github.com/lowner75/london-prime/issues"
    },
    "homepage": "https://github.com/lowner75/london-prime#readme",
    "devDependencies": {
        "lite-server": "^2.6.1"
    }
}

npm install --save-dev bootstrap@4.0.0
npm install --save-dev jquery@3.3.1 popper.js@1.12.9
npm install --save-dev node-sass@4.7.2 
npm install --save-dev onchange@3.3.0
npm install --save-dev parallelshell@3.0.2 // Throws an error, use 3.0.1...
npm install --save-dev parallelshell@3.0.1
npm install --save-dev @openfonts/open-sans_all
npm install --save-dev @openfonts/nunito-sans_all
npm install --save-dev @openfonts/roboto-condensed_all
npm install --save-dev @openfonts/roboto_all
npm install --save-dev @openfonts/cormorant-garamond_all
npm install --save-dev font-awesome@4.7.0
npm install --save-dev bootstrap-social
npm install --save-dev luxy.js
```
## License
[MIT](https://choosealicense.com/licenses/mit/)