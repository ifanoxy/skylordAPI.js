import { Wallet, JobTypes, JobsStats, JobStats } from "./interfaces";
/**
 * Vous permet de récupérer la monnaie d'un joueur avec son pseudo.
 *
 * @param pseudo pseudo minecraft du joueur.
 * @param devise si vous voulez la devise avec la monnaie (false par défaut)
 */
export declare function getMoney(pseudo: string, devise?: boolean): Promise<string>;
/**
 * Vous permet de récupérer toute les informations sur les cryptomonnaies d'un joueur
 *
 * @param pseudo pseudo minecraft du joueur.
 */
export declare function getWallet(pseudo: string): Promise<Wallet>;
/**
 * Vous permet de récupérer les informations sur un métier d'un joueur
 *
 * @param pseudo pseudo minecraft du joueur
 * @param job job que vous souhaitez récupérer.
 */
export declare function getJob(pseudo: string, job: JobTypes): Promise<JobStats>;
/**
 * Vous permet de récupérer les informations sur tout les métiers d'un joueur
 *
 * @param pseudo pseudo minecraft du joueur
 * @param job job que vous souhaitez récupérer.
 */
export declare function getJobs(pseudo: string): Promise<JobsStats>;
