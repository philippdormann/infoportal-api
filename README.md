# Infoportal-API
### modern API Endpoint for Infoportal (`*.eltern-portal.de`)

[![Deployment](https://badgen.net/badge/Deployment/Vercel/black)](https://infoportal-api.vercel.app)
[![donate with PayPal](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://paypal.me/philippdormann)
[![buy me a coffee](https://img.shields.io/badge/buymeacoffee-donate-yellow.svg)](https://buymeacoffee.com/philippdormann)
[![ko-fi](https://badgen.net/badge/ko-fi/donate/yellow)](https://ko-fi.com/V7V4I6I8)

## 📚 Dependencies
![Dependency Info](https://img.shields.io/david/philippd1/infoportal-api)
-   [express](https://www.npmjs.com/package/express) (minimalist web framework for node)
    -   serve the API via web server
-   [request](https://www.npmjs.com/package/request) (Simplified HTTP client)
    -   make HTTP-requests
-   [cheerio](https://www.npmjs.com/package/cheerio) (core jQuery designed specifically for the server)
    -   simplify scraping the page to a readable format
-   [html-minifier](https://www.npmjs.com/package/html-minifier) (highly configurable, well-tested, JavaScript-based HTML minifier)
    -   remove whitespace, format html to simplify scraping

## 🚀 Deployment
-   this script is deployed as a serverless function on the url <https://infoportal-api.vercel.app> with [Vercel](https://vercel.com/) ☁️
-   the code to this function is found in the `/api` folder 📁

## 🐳 Docker Deployment
This project can be deployed as a docker container.
To do so, just run this code:
```
docker-compose build && docker-compose down --remove-orphans && docker-compose up -d
```

## ❔ HOWTO: local dev with Vercel
-   `npm i -g vercel` / `yarn global add vercel`
-   `vercel dev`

## ❔ HOWTO: run without Vercel (Express Server)
- `npm i && npm run start`
- `yarn && yarn start`

## 🏫 Known schools
|shortcode|school|
|--|--|
|`riwagybay`|Richard-Wagner-Gymnasium Bayreuth|
|`michamuc`|Michaeli-Gymnasium München|
|`welfen`|Welfen-Gymnasium Schongau|
|`groebegy`|Gymnasium Gröbenzell|
|`whgga`|Werner-Heisenberg-Gymnasium Garching|
|`astipagym`|Adalbert-Stifter-Gymnasium Passau|
|`lupomuc`|Luitpold-Gymnasium München|
|`muenomuc`|Gymnasium München-Nord|
|`joguwa`|Johannes-Gutenberg-Gymnasium Waldkirchen|
|`rudigyau`|Rudolf-Diesel-Gymnasium Augsburg|
|`widipogy`|Wilhelm-Diess-Gymnasium Pocking|
|`opgypul`|Otfried-Preußler-Gymnasium Pullach|
|`ohagym`|Gymnasium Oberhaching|
|`wigywue`|Wirsberg-Gymnasium|
|`stagymu`|Staffelsee-Gymnasium Murnau|
|`peugyau`|Peutinger-Gymnasium Augsburg|
|`lessgynu`|Lessing-Gymnasium Neu-Ulm|
|`rsache`|Achental-Realschule|
|`wmrstrau`|Walter-Mohr-Realschule Traunreut|
|`marktgym`|Gymnasium Marktbreit|
|`prmpul`|Pater-Rupert-Mayer-Gymnasium|
|`gn`|Gymnasium Neubiberg|
|`witgymuc`|Wittelsbacher Gymnasium|
|`veihoegym`|Gymnasium Veitshöchheim|
|`tgrs`|Erzbischöfliche Theresia-Gerhardinger-Mädchenrealschule|
|`wvsgymuc`|Städtisches Werner-von-Siemens-Gymnasium München|
|`heraugy`|Gymnasium Herzogenaurach|
|`evbspar`|Emil-von-Behring-Gymnasium Spardorf|
|`ohagym`|TODO|
|`agbersau`|TODO|
|`grafgym`|TODO|
|`ufggym`|TODO|
|`mgf`|TODO|
|`avhgym`|TODO|
|`ufggym`|TODO|
|`rudigyau`|TODO|
|`tassimgy`|TODO|
|`shr`|TODO|
|`heraugy`|TODO|
|`donaugym`|TODO|
|`stbgym`|TODO|
|`amgydie`|TODO|
|`apgying`|TODO|
|`stagymu`|TODO|
|`asamgymuc`|TODO|
|`freicamgy`|TODO|
|`freigymuc`|TODO|
|`avegybu`|TODO|
|`widipogy`|TODO|
|`mjsmuc`|TODO|
|`csgying`|TODO|
|`nailagym`|TODO|
|`olchigym`|TODO|
|`evbspar`|TODO|
|`hoschgym`|TODO|
|`hoesiegym`|TODO|
|`omgyneu`|TODO|
|`theogymuc`|TODO|
|`stbgym`|TODO|
|`rudigyau`|TODO|
|`freigymuc`|TODO|
|`bbgymuc`|TODO|
|`donaugym`|TODO|
|`asamgymuc`|TODO|
|`mjsmuc`|TODO|
|`donaugym`|TODO|
|`ebgymuc`|TODO|
|`amgydie`|TODO|
|`avegybu`|TODO|
|`stagymu`|TODO|
|`csgying`|TODO|
|`theogymuc`|TODO|
|`widipogy`|TODO|
|`dzglan`|TODO|
|`thergymuc`|TODO|
|`gruewagym`|TODO|
|`evbspar`|TODO|
|`marbugym`|TODO|
|`tassimgy`|TODO|
|`witgymuc`|TODO|
|`lmguhag`|TODO|
|`emagyha`|TODO|
|`gisgymuc`|TODO|
|`reuingym`|TODO|
|`lshmar`|TODO|
|`hoschgym`|TODO|
|`hcgla`|TODO|
|`freicamgy`|TODO|
|`luigywas`|TODO|
|`ohagym`|TODO|
|`tgamuc`|TODO|
|`welfen`|TODO|
|`mwrsn`|TODO|
|`landau`|TODO|
|`wwgybay`|TODO|
|`casigym`|TODO|
|`trugymuc`|TODO|
|`kgbarei`|TODO|
|`khgygrae`|TODO|
|`mathemuc`|TODO|
|`roewuegy`|TODO|
|`wigywue`|TODO|
|`ksigym`|TODO|
|`kagerd`|TODO|
|`ugriegym`|TODO|
|`ovmgymuc`|TODO|
|`gympan`|TODO|
|`hilgykem`|TODO|
|`bagyeich`|TODO|
|`mwrsn`|TODO|
|`whgmuc`|TODO|
|`cavigy`|TODO|
|`sosgymuc`|TODO|
|`joheitrau`|TODO|
|`karogyro`|TODO|
|`abstgym`|TODO|
|`framagym`|TODO|
|`jpgyho`|TODO|
|`theheugym`|TODO|
|`etahgybam`|TODO|
|`baiblgy`|TODO|
|`domfreigy`|TODO|
|`halegyla`|TODO|
|`gn`|TODO|
|`wggymuc`|TODO|
|`go`|TODO|
|`ludgystra`|TODO|
|`karogyro`|TODO|
|`hsgyhoe`|TODO|
|`finrogym`|TODO|
|`gykisee`|TODO|
|`gsgstu`|TODO|
|`sontgym`|TODO|
|`michamuc`|TODO|
|`hilgykem`|TODO|
|`hertrogym`|TODO|
|`friebos`|TODO|
|`amorgym`|TODO|
|`deroko`|TODO|
|`klengymuc`|TODO|
|`rottlaugy`|TODO|
|`gnadgym`|TODO|
|`abstgym`|TODO|
|`bszneu`|TODO|
|`merali`|TODO|
|`ohgyerl`|TODO|
|`riegywue`|TODO|
|`bskoegy`|TODO|
|`muenomuc`|TODO|
|`dantemuc`|TODO|
|`hugyvat`|TODO|
|`urstragym`|TODO|
|`friedgym`|TODO|
|`iguerogym`|TODO|
|`klengymuc`|TODO|
|`wggselb`|TODO|
|`ohgyerl`|TODO|
|`seligws`|TODO|
|`rottlaugy`|TODO|
|`jonegyro`|TODO|
|`go`|TODO|
|`abstgym`|TODO|
|`iguerogym`|TODO|
|`halgywol`|TODO|
|`mtgyerl`|TODO|
|`froebelgsau`|TODO|
|`siewuegym`|TODO|
|`kagerd`|TODO|
|`bbgymuc`|TODO|
|`whgga`|TODO|
|`albgyco`|TODO|
|`widipogy`|TODO|
