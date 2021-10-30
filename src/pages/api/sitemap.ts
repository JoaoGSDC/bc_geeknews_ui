import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

const Sitemap = async (req: any, res: any) => {
  // An array with your links
  const links = [
    { url: '/categoria/[slug]', changefreq: 'daily', priority: 0.3 },
    { url: '/noticia/[slug]', changefreq: 'daily', priority: 0.3 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    'Content-Type': 'application/xml',
  });

  const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then((data: any) => data.toString());

  res.end(xmlString);
};

export default Sitemap;
