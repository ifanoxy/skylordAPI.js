"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJobs = exports.getJob = exports.getWallet = exports.getMoney = void 0;
const axios_1 = __importDefault(require("axios"));
const baseURL = "https://apiv1.skylord.fr/api/";
/**
 * Vous permet de récupérer la monnaie d'un joueur avec son pseudo.
 *
 * @param pseudo pseudo minecraft du joueur.
 * @param devise si vous voulez la devise avec la monnaie (false par défaut)
 */
function getMoney(pseudo, devise = false) {
    if (!pseudo)
        throw new Error("Veuillez spécifier un pseudo !");
    return new Promise((resolve, reject) => {
        axios_1.default.get(baseURL + `joueur/money?pseudo=${pseudo}`)
            .then(res => res.data).then((res) => devise ? resolve(res.Format + res.Devise) : resolve(res.Format))
            .catch(reject);
    });
}
exports.getMoney = getMoney;
/**
 * Vous permet de récupérer toute les informations sur les cryptomonnaies d'un joueur
 *
 * @param pseudo pseudo minecraft du joueur.
 */
function getWallet(pseudo) {
    if (!pseudo)
        throw new Error("Veuillez spécifier un pseudo !");
    return new Promise((resolve, reject) => {
        axios_1.default.get(baseURL + `joueur/wallet?pseudo=${pseudo}`)
            .then(res => res.data).then((res) => {
            resolve({
                BTCUSTD: res.wallet[0].BTCUSTD,
                ETHUSDT: res.wallet[1].ETHUSDT,
                LTCUSDT: res.wallet[2].LTCUSDT,
                BNBUSDT: res.wallet[3].BNBUSDT,
                SHIBUSDT: res.wallet[4].SHIBUSDT,
                DOGEUSDT: res.wallet[5].DOGEUSDT,
                XRPUSDT: res.wallet[6].XRPUSDT,
                ADAUSDT: res.wallet[7].ADAUSDT,
                DOTUSDT: res.wallet[8].DOTUSDT,
            });
        })
            .catch(reject);
    });
}
exports.getWallet = getWallet;
/**
 * Vous permet de récupérer les informations sur un métier d'un joueur
 *
 * @param pseudo pseudo minecraft du joueur
 * @param job job que vous souhaitez récupérer.
 */
function getJob(pseudo, job) {
    if (!pseudo)
        throw new Error("Veuillez spécifier un pseudo !");
    return new Promise((resolve, reject) => {
        axios_1.default.get(baseURL + `joueur/jobs?pseudo=${pseudo}&jobs=${job}`)
            .then(res => res.data)
            .then((res) => {
            if (res.Resultat == "404")
                reject("Le métier est introuvable !");
            if (res.Resultat == "998")
                reject("Le joueur n'est pas en ligne ou n'existe pas");
            resolve({
                level: res.jobs[0].jlevel,
                maxlevel: res.jobs[0].jmaxlvl,
                exp: res.jobs[0].jexp,
                maxexp: res.jobs[0].jmaxexp,
            });
        })
            .catch(reject);
    });
}
exports.getJob = getJob;
/**
 * Vous permet de récupérer les informations sur tout les métiers d'un joueur
 *
 * @param pseudo pseudo minecraft du joueur
 * @param job job que vous souhaitez récupérer.
 */
function getJobs(pseudo) {
    if (!pseudo)
        throw new Error("Veuillez spécifier un pseudo !");
    return new Promise((resolve, reject) => {
        axios_1.default.get(baseURL + `joueur/jobs?pseudo=${pseudo}&jobs=all`)
            .then(res => res.data)
            .then((res) => {
            if (res.Resultat == "404")
                reject("Le métier est introuvable !");
            if (res.Resultat == "998")
                reject("Le joueur n'est pas en ligne ou n'existe pas");
            const jobs = ["mineur", "pecheur", "architecte", "chasseur", "bucheron", "aventurier"];
            let data = {};
            for (let i of [...Array(5).keys()]) {
                data[jobs[i]] = {
                    level: res.jobs[i].jlevel,
                    maxlevel: res.jobs[i].jmaxlvl,
                    exp: res.jobs[i].jexp,
                    maxexp: res.jobs[i].jmaxexp,
                };
            }
            resolve(data);
        })
            .catch(reject);
    });
}
exports.getJobs = getJobs;
