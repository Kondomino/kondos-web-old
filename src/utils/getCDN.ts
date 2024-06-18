

export const getCDN = (imgURL: any) => {

    // development" | "production" | "test
    const env = process.env.NODE_ENV

    // checks if we are in dev
    if (env === "development")
        return imgURL;

    // only shows images for UAT and PROD
    return process.env.CDN + imgURL;
}
