/*  pageIDs: A constant object that maps semantic page identifiers (the keys) to symbolic string values.
    These values act as stable, type-safe keys for routing, metadata, analytics, and onboarding logic. */
export const pageIDs = {
    home                 : 'HOME', // sidebar and navbar
    whatIsTea            : 'WHAT_IS_TEA',
    whereDoesTeaComeFrom : 'WHERE_DOES_TEA_COME_FROM',
    growingAndProcessing : 'GROWING_AND_PROCESSING',
    brewingMethods       : 'BREWING_METHODS',
    experiencingTea      : 'EXPERIENCING_TEA',
    teaProfiles          : 'TEA_PROFILES',
    teaware              : 'TEAWARE',
    teaTerminology       : 'TEA_TERMINOLOGY',
    
    about                : 'ABOUT',
    whatsNew             : 'WHATS_NEW',
    contact              : 'CONTACT',
    logIn                : 'LOG_IN',
} as const;
  
/*  PageKey: A type alias that extracts the keys from the pageIDs object as a union type (equivalent to
    "type PageKey = "home" | "whatIsTea" | "whereDoesTeaComeFrom" |..."). These semantic keys provide 
    type-safe access to valid pages throughout the app. Anywhere a page is referenced by its semantic key, 
    TypeScript will validate against this list. */
export type PageKey = keyof typeof pageIDs;
export type PageID = typeof pageIDs[PageKey];

/* Create a reverse mapping without explicitly typing it out. */
export const pageKeyByID = Object.fromEntries(
    Object.entries(pageIDs).map(([k, v]) => [v, k])
) as Record<string, PageKey>;

/*  PageMeta: Defines the shape of metadata for each page. Using an interface instead of a type alias 
    follows linting rules and keeps the structure extensible. */
interface PageMeta {
    title : string;
    path  : string;
};

/*  Pages: A metadata map providing full  IntelliSense, compile-time validation, and centralized control over page behavior. */
export const Pages: Record<typeof pageIDs[PageKey], PageMeta> = {
    [pageIDs.home]: {
        title : 'Home',
        path  : '/',
    },

    [pageIDs.whatIsTea]: {
        title : 'What is tea?',
        path  : '/what-is-tea',
    },

    [pageIDs.whereDoesTeaComeFrom]: {
        title : 'Where does tea come from?',
        path  : '/where-does-tea-come-from',
    },

    [pageIDs.growingAndProcessing]: {
        title : 'Growing and processing',
        path  : '/growing-and-processing',
    },

    [pageIDs.brewingMethods]: {
        title : 'Brewing methods',
        path  : '/brewing-methods',
    },

    [pageIDs.experiencingTea]: {
        title : 'Experiencing tea',
        path : '/experiencing-tea',
    },

    [pageIDs.teaProfiles]: {
        title : 'Tea profiles',
        path  : '/tea-profiles',
    },

    [pageIDs.teaware]: {
        title : 'Teaware',
        path  : '/teaware',
    },

    [pageIDs.teaTerminology]: {
        title : 'Tea terminology',
        path  : '/terminology',
    },

    [pageIDs.about]: {
        title : 'About',
        path  : '/terminology',
    },

    [pageIDs.whatsNew]: {
        title : 'What\'s new?',
        path  : '/whats-new',
    },

    [pageIDs.contact]: {
        title : 'Contact',
        path  : '/contact',
    },

    [pageIDs.logIn]: {
        title : 'Log in',
        path  : '/log-in',
    },

} as const;

export type Page = keyof typeof Pages;