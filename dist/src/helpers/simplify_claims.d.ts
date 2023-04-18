import type { Claim, Claims, PropertyClaims, PropertyQualifiers, Qualifier, Qualifiers } from '../types/claim.js';
import type { SimplifiedClaim, SimplifiedClaims, SimplifiedPropertyClaims, SimplifySnakOptions, SimplifySnaksOptions } from '../types/simplify_claims.js';
export declare function simplifyClaims(claims: Claims, options?: SimplifySnaksOptions): SimplifiedClaims;
export declare function simplifyPropertyClaims(propertyClaims: PropertyClaims, options?: SimplifySnaksOptions): SimplifiedPropertyClaims;
export declare function simplifyClaim(claim: Claim, options?: SimplifySnakOptions): SimplifiedClaim;
export declare function simplifyQualifiers(qualifiers: Qualifiers, options?: SimplifySnaksOptions): any;
export declare function simplifyPropertyQualifiers(propertyQualifiers: PropertyQualifiers, options?: SimplifySnaksOptions): any;
export declare function simplifyQualifier(qualifier: Qualifier, options?: SimplifySnakOptions): any;
export declare function simplifyReferences(references: any, options: any): any;
export declare function simplifyReferenceRecord(refRecord: any, options: any): any;
//# sourceMappingURL=simplify_claims.d.ts.map