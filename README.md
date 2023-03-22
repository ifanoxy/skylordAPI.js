# Skylord API 

Ce module n'est pas un module officiel de skylord !
Il sera mise à jour à chaque changement sur l'api.

**Pour télécharger le module** ``npm i skylordapi``

## Récupérer la monnaie d'un joueur. 
Vous pouvez obtenir seulement la monnaie du joueur.
```js
const SkylordAPI = require("skylordapi");

// Dans une fonction non asynchrone
SkylordAPI.getMoney("pseudo")
    .then(money => console.log(money)) // --> 100

// Dans une fonction asynchrone
console.log(await SkylordAPI.getMoney("pseudo")) // --> 100
```
Mais aussi obtenir la devise.
```js
const SkylordAPI = require("skylordapi");

// Dans une fonction non asynchrone
SkylordAPI.getMoney("pseudo", true)
    .then(money => console.log(money)) // --> 100$

// Dans une fonction asynchrone
console.log(await SkylordAPI.getMoney("pseudo", true)) // --> 100$
```

## Récupérer le porte monnaie crypto (Wallet) d'un joueur.

```js
const SkylordAPI = require("skylordapi");

// Dans une fonction non asynchrone
SkylordAPI.getWallet("pseudo")
    .then(wallet => {
        console.log(wallet.BTCUSTD)
        console.log(wallet.ETHUSDT)
        console.log(wallet.LTCUSDT)
        console.log(wallet.BNBUSDT)
        console.log(wallet.SHIBUSDT)
        console.log(wallet.DOGEUSDT)
        console.log(wallet.XRPUSDT)
        console.log(wallet.ADAUSDT)
        console.log(wallet.DOTUSDT)
    })

// Dans une fonction asynchrone
console.log((await SkylordAPI.getWallet("pseudo")).BTCUSTD)
console.log((await SkylordAPI.getWallet("pseudo")).ETHUSDT)
console.log((await SkylordAPI.getWallet("pseudo")).LTCUSDT)
console.log((await SkylordAPI.getWallet("pseudo")).BNBUSDT)
console.log((await SkylordAPI.getWallet("pseudo")).SHIBUSDT)
console.log((await SkylordAPI.getWallet("pseudo")).DOGEUSDT)
console.log((await SkylordAPI.getWallet("pseudo")).XRPUSDT)
console.log((await SkylordAPI.getWallet("pseudo")).ADAUSDT)
console.log((await SkylordAPI.getWallet("pseudo")).DOTUSDT)
```

## Récupérer les jobs d'un joueur 

Vous pouvez choisir de récupérer seulement 1 job ou tout les jobs

Liste des jobs: ``"Mineur", "Pecheur", "Architecte", "Chasseur", "Bucheron", "Aventurier"``

Pour 1 job : 
```js
const SkylordAPI = require("skylordapi");

// Dans une fonction non asynchrone
SkylordAPI.getJob("pseudo", job)
    .then(jobData => {
        console.log(jobData.level)
        console.log(jobData.maxlevel)
        console.log(jobData.exp)
        console.log(jobData.maxexp)
    })

// Dans une fonction asynchrone
console.log((await SkylordAPI.getJob("pseudo", job)).level)
console.log((await SkylordAPI.getJob("pseudo", job)).maxlevel)
console.log((await SkylordAPI.getJob("pseudo", job)).exp)
console.log((await SkylordAPI.getJob("pseudo", job)).maxexp)
```

Pour tout les jobs :

```js
const SkylordAPI = require("skylordapi");

// Dans une fonction non asynchrone
SkylordAPI.getJobs("pseudo")
    .then(jobsData => {
        jobsData.mineur         // Même propriétés que pour 1 job
        jobsData.pecheur        // Même propriétés que pour 1 job
        jobsData.architecte     // Même propriétés que pour 1 job
        jobsData.chasseur       // Même propriétés que pour 1 job
        jobsData.bucheron       // Même propriétés que pour 1 job
        jobsData.aventurier     // Même propriétés que pour 1 job
    })
```
