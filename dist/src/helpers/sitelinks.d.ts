import type { Url, WmLanguageCode } from '../types/options.js';
import type { Site } from '../types/sitelinks.js';
export interface GetSitelinkUrlOptions {
    site: Site;
    title: string;
}
export declare function getSitelinkUrl({ site, title }: GetSitelinkUrlOptions): Url;
export interface SitelinkData {
    lang: WmLanguageCode;
    project: Project;
    key: string;
    title?: string;
    url?: Url;
}
export declare function getSitelinkData(site: Site | Url): SitelinkData;
export declare const isSitelinkKey: (site: string) => boolean;
export declare const wikimediaLanguageCodes: readonly ["aa", "ab", "ace", "ady", "af", "ak", "als", "alt", "ami", "am", "ang", "anp", "an", "arc", "ar", "ary", "arz", "ast", "as", "atj", "avk", "av", "awa", "ay", "azb", "az", "ban", "bar", "bat_smg", "ba", "bcl", "be_x_old", "be", "bg", "bh", "bi", "bjn", "blk", "bm", "bn", "bo", "bpy", "br", "bs", "bug", "bxr", "ca", "cbk_zam", "cdo", "ceb", "ce", "cho", "chr", "ch", "chy", "ckb", "co", "crh", "cr", "csb", "cs", "cu", "cv", "cy", "dag", "da", "de", "din", "diq", "dsb", "dty", "dv", "dz", "ee", "el", "eml", "en", "eo", "es", "et", "eu", "ext", "fa", "ff", "fiu_vro", "fi", "fj", "fo", "frp", "frr", "fr", "fur", "fy", "gag", "gan", "ga", "gcr", "gd", "glk", "gl", "gn", "gom", "gor", "got", "guc", "gur", "gu", "guw", "gv", "hak", "ha", "haw", "he", "hif", "hi", "ho", "hr", "hsb", "ht", "hu", "hy", "hyw", "hz", "ia", "id", "ie", "ig", "ii", "ik", "ilo", "inh", "io", "is", "it", "iu", "jam", "ja", "jbo", "jv", "kaa", "kab", "ka", "kbd", "kbp", "kcg", "kg", "ki", "kj", "kk", "kl", "km", "kn", "koi", "ko", "krc", "kr", "ksh", "ks", "ku", "kv", "kw", "ky", "lad", "la", "lbe", "lb", "lez", "lfn", "lg", "lij", "li", "lld", "lmo", "ln", "lo", "lrc", "ltg", "lt", "lv", "mad", "mai", "map_bms", "mdf", "mg", "mhr", "mh", "min", "mi", "mk", "ml", "mni", "mn", "mnw", "mo", "mrj", "mr", "ms", "mt", "mus", "mwl", "myv", "my", "mzn", "nah", "nap", "na", "nds_nl", "nds", "ne", "new", "ng", "nia", "nl", "nn", "nov", "no", "nqo", "nrm", "nso", "nv", "ny", "oc", "olo", "om", "or", "os", "pag", "pam", "pap", "pa", "pcd", "pcm", "pdc", "pfl", "pih", "pi", "pl", "pms", "pnb", "pnt", "ps", "pt", "pwn", "qu", "rm", "rmy", "rn", "roa_rup", "roa_tara", "ro", "rue", "ru", "rw", "sah", "sat", "sa", "scn", "sco", "sc", "sd", "se", "sg", "shi", "shn", "sh", "shy", "simple", "si", "skr", "sk", "sl", "smn", "sm", "sn", "sources", "so", "sq", "srn", "sr", "ss", "stq", "st", "su", "sv", "sw", "szl", "szy", "ta", "tay", "tcy", "tet", "te", "tg", "th", "ti", "tk", "tl", "tn", "to", "tpi", "trv", "tr", "ts", "tt", "tum", "tw", "tyv", "ty", "udm", "ug", "uk", "ur", "uz", "vec", "vep", "ve", "vi", "vls", "vo", "war", "wa", "wo", "wuu", "xal", "xh", "xmf", "yi", "yo", "yue", "za", "zea", "zh_classical", "zh_min_nan", "zh_yue", "zh", "zu"];
declare const projectNames: readonly ("specieswiki" | "commons" | "mediawiki" | "meta" | "wikidata" | "wikimania" | "wikipedia" | "wikisource" | "wikiquote" | "wiktionary" | "wikibooks" | "wikiversity" | "wikivoyage" | "wikinews")[];
export type Project = typeof projectNames[number];
export {};
//# sourceMappingURL=sitelinks.d.ts.map