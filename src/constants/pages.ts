/*  pageKeys: A constant object that maps semantic page identifiers to symbolic string values.
    These values act as stable, type-safe keys for routing, metadata, analytics, and onboarding logic. */
export const pageKeys = {
    home                 : 'HOME',
    whatIsTea            : 'WHAT_IS_TEA',
    whereDoesTeaComeFrom : 'WHERE_DOES_TEA_COME_FROM',
    growingAndProcessing : 'GROWING_AND_PROCESSING',
    brewingMethods       : 'BREWING_METHODS',
    experiencingTea      : 'EXPERIENCING_TEA',
    teaProfiles          : 'TEA_PROFILES',
    teaware              : 'TEAWARE',
    teaTerminology       : 'TEA_TERMINOLOGY',
} as const;
  
/*  PageKeys: A type alias that extracts the keys from pageKeys as a union type. Provides type-safe 
    access to valid page identifiers like 'home' | 'whatIsTea' | ... Anywhere a page key is used, 
    TypeScript will validate against this list. */
export type PageKeys = keyof typeof pageKeys;

/*  PageMeta: Defines the shape of metadata for each page. Using an interface instead of a type alias 
    follows linting rules and keeps the structure extensible. */
interface PageMeta {
    title : string;
    path  : string;
};

/*  Pages: A metadata map that links each symbolic page key (e.g., 'HOME') to its corresponding metadata.
    Keys come from pageKeys, and the values must match the PageMeta interface. This setup provides full 
    IntelliSense, compile-time validation, and centralized control over page behavior. */
export const Pages: Record<typeof pageKeys[PageKeys], PageMeta> = {
    [pageKeys.home]: {
        title : 'Home',
        path  : '/',
    },

    [pageKeys.whatIsTea]: {
        title : 'What is tea?',
        path  : '/what-is-tea',
    },

    [pageKeys.whereDoesTeaComeFrom]: {
        title : 'Where does tea come from?',
        path  : '/where-does-tea-come-from',
    },

    [pageKeys.growingAndProcessing]: {
        title : 'Growing and processing',
        path  : '/growing-and-processing',
    },

    [pageKeys.brewingMethods]: {
        title : 'Brewing methods',
        path  : '/brewing-methods',
    },

    [pageKeys.experiencingTea]: {
        title : 'Experiencing tea',
        path : '/experiencing-tea',
    },

    [pageKeys.teaProfiles]: {
        title : 'Tea profiles',
        path  : '/tea-profiles',
    },

    [pageKeys.teaware]: {
        title : 'Teaware',
        path  : '/teaware',
    },

    [pageKeys.teaTerminology]: {
        title : 'Tea terminology',
        path  : '/terminology',
    },

} as const;