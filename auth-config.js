export default {
    endpoint: "auth",
    configureEndpoints: ["auth", "core", "master", "pos", "inventory"],

    loginUrl: "/authenticate",
    profileUrl: "/me",

    authTokenType:"Bearer",
    //authTokenType: "JWT",
    accessTokenProp: "data",

    storageChangedReload: true
};