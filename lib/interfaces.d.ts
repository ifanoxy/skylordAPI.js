export interface APIUserMoney {
    Format: string;
    Devise: string;
}
export interface APIUserWallet {
    wallet: [
        {
            BTCUSTD: string;
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
    BTCUSTD: string;
    ETHUSDT: string;
    LTCUSDT: string;
    BNBUSDT: string;
    SHIBUSDT: string;
    DOGEUSDT: string;
    XRPUSDT: string;
    ADAUSDT: string;
    DOTUSDT: string;
}
export type JobTypes = "Mineur" | "Pecheur" | "Architecte" | "Chasseur" | "Bucheron" | "Aventurier";
export interface APIJobs {
    Resultat: "01" | "998" | "404";
    jobs: {
        jlevel: string;
        jmaxlvl: string;
        jexp: string;
        jmaxexp: string;
    }[];
}
export interface JobsStats {
    mineur: JobStats;
    pecheur: JobStats;
    architecte: JobStats;
    chasseur: JobStats;
    bucheron: JobStats;
    aventurier: JobStats;
}
export interface JobStats {
    level: string;
    maxlevel: string;
    exp: string;
    maxexp: string;
}
