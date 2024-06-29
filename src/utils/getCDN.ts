

export const getCDN = (kondoSlug: string, image: string) => {

    // development" | "production" | "test
    const env = process.env.NODE_ENV

    // checks if we are in dev
    if (env === "development")
        return image;

    // only shows images for UAT and PROD
    // https://kondo-medias.s3.amazonaws.com/kondos/lumina/lumina-1.jpeg
    return process.env.CDN + 'kondos/' + kondoSlug + '/' + image;
}
