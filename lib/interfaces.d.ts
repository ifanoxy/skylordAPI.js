export interface APIUserMoney {
    Format: string;
    Devise: string;
}
export interface APIUserWallet {
    wallet: [
        {
            BTCUSDT: string;
        },
        {
            ETHUSDT: string;
        },
        {
            LTCUSDT: string;
        },
        {
            BNBUSDT: string;
        },
        {
            SHIBUSDT: string;
        },
        {
            DOGEUSDT: string;
        },
        {
            XRPUSDT: string;
        },
        {
            ADAUSDT: string;
        },
        {
            DOTUSDT: string;
        }
    ];
}
export interface Wallet {
    BTCUSDT: string;
    ETHUSDT: string;
    LTCUSDT: string;
    BNBUSDT: string;
    SHIBUSDT: string;
    DOGEUSDT: string;
    XRPUSDT: string;
    ADAUSDT: string;
    DOTUSDT: string;
}
export type JobTypes = "mineur" | "pecheur" | "architecte" | "chasseur" | "bucheron" | "aventurier" | "fermier";
export interface APIJobs {
    Resultat: "01" | "998" | "404";
    jobs: [
        {
            Mineur: [{
                jlevel: string;
            }, {
                jmaxlvl: string;
            }, {
                jexp: string;
            }, {
                jmaxexp: string;
            }];
        },
        {
            Pecheur: [{
                jlevel: string;
            }, {
                jmaxlvl: string;
            }, {
                jexp: string;
            }, {
                jmaxexp: string;
            }];
        },
        {
            Architecte: [{
                jlevel: string;
            }, {
                jmaxlvl: string;
            }, {
                jexp: string;
            }, {
                jmaxexp: string;
            }];
        },
        {
            Chasseur: [{
                jlevel: string;
            }, {
                jmaxlvl: string;
            }, {
                jexp: string;
            }, {
                jmaxexp: string;
            }];
        },
        {
            Bucheron: [{
                jlevel: string;
            }, {
                jmaxlvl: string;
            }, {
                jexp: string;
            }, {
                jmaxexp: string;
            }];
        },
        {
            Fermier: [{
                jlevel: string;
            }, {
                jmaxlvl: string;
            }, {
                jexp: string;
            }, {
                jmaxexp: string;
            }];
        },
        {
            Aventurier: [{
                jlevel: string;
            }, {
                jmaxlvl: string;
            }, {
                jexp: string;
            }, {
                jmaxexp: string;
            }];
        }
    ];
}
export interface JobsStats {
    mineur: JobStats;
    pecheur: JobStats;
    architecte: JobStats;
    chasseur: JobStats;
    bucheron: JobStats;
    aventurier: JobStats;
    fermier: JobStats;
}
export interface JobStats {
    level: string;
    maxlevel: string;
    exp: string;
    maxexp: string;
}
