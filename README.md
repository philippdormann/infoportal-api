# Infoportal-API
### modern API Endpoint for Infoportal (`*.eltern-portal.de`)

[![Deployment](https://badgen.net/badge/Deployment/Vercel/black)](https://infoportal-api.vercel.app)
[![donate with PayPal](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://paypal.me/philippdormann)
[![buy me a coffee](https://img.shields.io/badge/buymeacoffee-donate-yellow.svg)](https://buymeacoffee.com/philippdormann)
[![ko-fi](https://badgen.net/badge/ko-fi/donate/yellow)](https://ko-fi.com/V7V4I6I8)
![Dependency Info](https://img.shields.io/david/philippd1/infoportal-api)

## 🚀 Deployment
- this script is deployed as a serverless function on the url <https://infoportal-api.vercel.app> with [Vercel](https://vercel.com/) ☁️
- the code to this function is found in the `/api` folder 📁

## 🐳 Docker Deployment
This project can be deployed as a docker container.
To do so, just run this code:
```
docker-compose build && docker-compose down --remove-orphans && docker-compose up -d
```

## ❔ Development
### ⚡ Express + Nodemon - **recommended**
```
npm i && npm run start`
```
or
```
yarn && yarn start`
```
### ☁ Local with Vercel
- `npm i -g vercel` / `yarn global add vercel`
- `vercel dev`

## 🏫 Known schools
> auto-generated by `node parse-institutions.js`

|shortcode|school|
|--|--|
|ohagym|Eltern-Portal Gymnasium Oberhaching|
|agbersau|Eltern-Portal Agnes-Bernauer-Realschule Augsburg|
|grafgym|Eltern-Portal Max-Mannheimer-Gymnasium Grafing|
|ufggym|Eltern-Portal Gymnasium Unterföhring|
|mgf|Eltern-Portal Maristengymnasium Fürstenzell|
|avhgym|Eltern-Portal Alexander-von-Humboldt-Gymnasium Schweinfurt|
|ufggym|Eltern-Portal Gymnasium Unterföhring|
|rudigyau|Eltern-Portal Rudolf-Diesel-Gymnasium Augsburg|
|tassimgy|Eltern-Portal Tassilo-Gymnasium Simbach am Inn|
|shr|Eltern-Portal Samuel-Heinicke-Realschule|
|heraugy|Eltern-Portal Gymnasium Herzogenaurach|
|donaugym|Eltern-Portal Gymnasium Donauwörth|
|stbgym|Eltern-Portal Gymnasium Starnberg|
|amgydie|Eltern-Portal Ammersee-Gymnasium Dießen|
|apgying|Eltern-Portal Apian-Gymnasium Ingolstadt|
|stagymu|Eltern-Portal Staffelsee-Gymnasium Murnau|
|asamgymuc|Eltern-Portal Asam-Gymnasium München|
|freicamgy|Eltern-Portal Camerloher-Gymnasium Freising|
|freigymuc|Eltern-Portal Gymnasium Freiham|
|avegybu|Eltern-Portal Aventinus-Gymnasium Burghausen|
|widipogy|Eltern-Portal Wilhelm-Diess-Gymnasium Pocking|
|mjsmuc|Eltern-Portal Staatliches Gymnasium Max-Josef-Stift München|
|csgying|Eltern-Portal Christoph-Scheiner-Gymnasium|
|nailagym|Eltern-Portal Hochfranken-Gymnasium Naila|
|olchigym|Eltern-Portal Gymnasium Olching|
|evbspar|Eltern-Portal Emil-von-Behring-Gymnasium Spardorf|
|hoschgym|Eltern-Portal Gymnasium Hohenschwangau|
|hoesiegym|Eltern-Portal Gymnasium Höhenkirchen-Siegertsbrunn|
|omgyneu|Eltern-Portal Oskar-Maria-Graf-Gymnasium|
|theogymuc|Eltern-Portal Städtisches Theodolinden-Gymnasium München|
|stbgym|Eltern-Portal Gymnasium Starnberg|
|rudigyau|Eltern-Portal Rudolf-Diesel-Gymnasium Augsburg|
|freigymuc|Eltern-Portal Gymnasium Freiham|
|bbgymuc|Eltern-Portal Städtisches Bertolt-Brecht-Gymnasium München|
|donaugym|Eltern-Portal Gymnasium Donauwörth|
|asamgymuc|Eltern-Portal Asam-Gymnasium München|
|mjsmuc|Eltern-Portal Staatliches Gymnasium Max-Josef-Stift München|
|donaugym|Eltern-Portal Gymnasium Donauwörth|
|ebgymuc|Eltern-Portal Städtisches Elsa-Brändström-Gymnasium München|
|amgydie|Eltern-Portal Ammersee-Gymnasium Dießen|
|avegybu|Eltern-Portal Aventinus-Gymnasium Burghausen|
|stagymu|Eltern-Portal Staffelsee-Gymnasium Murnau|
|csgying|Eltern-Portal Christoph-Scheiner-Gymnasium|
|theogymuc|Eltern-Portal Städtisches Theodolinden-Gymnasium München|
|widipogy|Eltern-Portal Wilhelm-Diess-Gymnasium Pocking|
|dzglan|Eltern-Portal Dominikus-Zimmermann-Gymnasium Landsberg am Lech|
|thergymuc|Eltern-Portal Theresien-Gymnasium München|
|gruewagym|Eltern-Portal Gymnasium Grünwald|
|evbspar|Eltern-Portal Emil-von-Behring-Gymnasium Spardorf|
|marbugym|Eltern-Portal Marianum Buxheim Gymnasium des Schulwerks der Diözese Augsburg|
|tassimgy|Eltern-Portal Tassilo-Gymnasium Simbach am Inn|
|witgymuc|Eltern-Portal Wittelsbacher-Gymnasium München|
|lmguhag|Eltern-Portal Lise-Meitner-Gymnasium Unterhaching|
|emagyha|Eltern-Portal Ernst-Mach-Gymnasium Haar|
|gisgymuc|Eltern-Portal Gisela-Gymnasium München|
|reuingym|Eltern-Portal Reuchlin-Gymnasium Ingolstadt|
|lshmar|Eltern-Portal Staatliches Landschulheim Marquartstein|
|hoschgym|Eltern-Portal Gymnasium Hohenschwangau|
|hcgla|Eltern-Portal Hans-Carossa-Gymnasium|
|freicamgy|Eltern-Portal Camerloher-Gymnasium Freising|
|luigywas|Eltern-Portal Luitpold-Gymnasium Wasserburg am Inn|
|ohagym|Eltern-Portal Gymnasium Oberhaching|
|tgamuc|Eltern-Portal Theresia-Gerhardinger-Gymnasium am Anger|
|welfen|Eltern-Portal Welfen-Gymnasium Schongau|
|mwrsn|Eltern-Portal Maria Ward Realschule Neuhaus|
|landau|Eltern-Portal Gymnasium Landau a.d. Isar|
|wwgybay|Eltern-Portal Wirtschaftswissenschaftliches und Naturwissenschaftlich-technologisches Gymnasium der Stadt Bayreuth|
|casigym|Eltern-Portal Gymnasium Casimirianum Coburg|
|trugymuc|Eltern-Portal Gymnasium Trudering|
|kgbarei|Eltern-Portal Karlsgymnasium Bad Reichenhall|
|khgygrae|Eltern-Portal Kurt-Huber-Gymnasium Gräfelfing|
|mathemuc|Eltern-Portal Maria-Theresia-Gymnasium|
|roewuegy|Eltern-Portal Röntgen-Gymnasium Würzburg|
|wigywue|Eltern-Portal Wirsberg-Gymnasium Würzburg|
|ksigym|Eltern-Portal Kolleg der Schulbrüder Illertissen|
|kagerd|Eltern-Portal Korbinian-Aigner-Gymnasium Erding|
|ugriegym|Eltern-Portal Gymnasium Untergriesbach|
|ovmgymuc|Eltern-Portal Oskar-von-Miller-Gymnasium München|
|gympan|Eltern-Portal Gymnasium Pfarrkirchen|
|hilgykem|Eltern-Portal Hildegardis-Gymnasium Kempten|
|bagyeich|Eltern-Portal Eichendorff-Gymnasium Bamberg|
|mwrsn|Eltern-Portal Maria Ward Realschule Neuhaus|
|whgmuc|Eltern-Portal Wilhelm-Hausenstein-Gymnasium München|
|cavigy|Eltern-Portal Caspar-Vischer-Gymnasium Kulmbach|
|sosgymuc|Eltern-Portal Städtisches Sophie-Scholl-Gymnasium München|
|joheitrau|Eltern-Portal Johannes-Heidenhain-Gymnasium Traunreut|
|karogyro|Eltern-Portal Karolinen-Gymnasium Rosenheim|
|abstgym|Eltern-Portal Anton-Bruckner-Gymnasium Straubing|
|framagym|Eltern-Portal Franz-Marc-Gymnasium|
|jpgyho|Eltern-Portal Jean-Paul-Gymnasium Hof|
|theheugym|Eltern-Portal Theodor-Heuss-Gymnasium Nördlingen|
|etahgybam|Eltern-Portal E.T.A. Hoffmann-Gymnasium Bamberg|
|baiblgy|Eltern-Portal Gymnasium Bad Aibling|
|domfreigy|Eltern-Portal Dom-Gymnasium Freising|
|halegyla|Eltern-Portal Hans-Leinberger-Gymnasium Landshut|
|gn|Eltern-Portal Gymnasium Neubiberg|
|wggymuc|Eltern-Portal Städtisches Willi-Graf-Gymnasium München|
|go|Eltern-Portal Gymnasium Ottobrunn|
|ludgystra|Eltern-Portal Ludwigsgymnasium Straubing|
|karogyro|Eltern-Portal Karolinen-Gymnasium Rosenheim|
|hsgyhoe|Eltern-Portal Hanns-Seidel-Gymnasium Hösbach|
|finrogym|Eltern-Portal Sebastian-Finsterwalder-Gymnasium Rosenheim|
|gykisee|Eltern-Portal Gymnasium Kirchseeon|
|gsgstu|Eltern-Portal Geschwister-Scholl-Gymnasium Stuttgart-Sillenbuch|
|sontgym|Eltern-Portal Gymnasium Sonthofen|
|michamuc|Eltern-Portal Michaeli-Gymnasium München|
|hilgykem|Eltern-Portal Hildegardis-Gymnasium Kempten|
|hertrogym|Eltern-Portal Hertzhaimer-Gymnasium Trostberg|
|friebos|Eltern-Portal Berufliche Oberschule Friedberg|
|amorgym|Eltern-Portal Karl-Ernst-Gymnasium Amorbach|
|deroko|Eltern-Portal Robert-Koch-Gymnasium Deggendorf|
|klengymuc|Eltern-Portal Klenze-Gymnasium München|
|rottlaugy|Eltern-Portal Rottmayr-Gymnasium Laufen|
|gnadgym|Eltern-Portal Gnadenthal-Gymnasium Ingolstadt der Diözese Eichstätt|
|abstgym|Eltern-Portal Anton-Bruckner-Gymnasium Straubing|
|bszneu||
|merali|Eltern-Portal Meranier-Gymnasium Lichtenfels|
|ohgyerl|Eltern-Portal Ohm-Gymnasium Erlangen|
|riegywue|Eltern-Portal Riemenschneider-Gymnasium Würzburg|
|bskoegy|Eltern-Portal Benedikt-Stattler-Gymnasium Bad Kötzting|
|muenomuc|Eltern-Portal Gymnasium München-Nord|
|dantemuc|Eltern-Portal Dante-Gymnasium München|
|hugyvat|Eltern-Portal Humboldt-Gymnasium-Vaterstetten|
|urstragym|Eltern-Portal Gymnasium der Ursulinen-Schulstiftung Straubing|
|friedgym|Eltern-Portal Gymnasium Friedberg|
|iguerogym|Eltern-Portal Ignaz-Günther-Gymnasium Rosenheim|
|klengymuc|Eltern-Portal Klenze-Gymnasium München|
|wggselb|Eltern-Portal Walter-Gropius-Gymnasium Selb|
|ohgyerl|Eltern-Portal Ohm-Gymnasium Erlangen|
|seligws|Eltern-Portal Wirtschaftsschule der Schulstiftung Seligenthal Landshut|
|rottlaugy|Eltern-Portal Rottmayr-Gymnasium Laufen|
|jonegyro|Eltern-Portal Johannes-Nepomuk-Gymnasium|
|go|Eltern-Portal Gymnasium Ottobrunn|
|abstgym|Eltern-Portal Anton-Bruckner-Gymnasium Straubing|
|iguerogym|Eltern-Portal Ignaz-Günther-Gymnasium Rosenheim|
|halgywol|Eltern-Portal Hallertau-Gymnasium Wolnzach|
|mtgyerl|Eltern-Portal Städtisches Marie-Therese-Gymnasium Erlangen|
|froebelgsau|Eltern-Portal Fröbel-Grundschule Augsburg-Haunstetten|
|siewuegym|Eltern-Portal Siebold-Gymnasium Würzburg|
|kagerd|Eltern-Portal Korbinian-Aigner-Gymnasium Erding|
|bbgymuc|Eltern-Portal Städtisches Bertolt-Brecht-Gymnasium München|
|whgga|Eltern-Portal Werner-Heisenberg-Gymnasium Garching|
|albgyco|Eltern-Portal Gymnasium Albertinum|
|widipogy|Eltern-Portal Wilhelm-Diess-Gymnasium Pocking|