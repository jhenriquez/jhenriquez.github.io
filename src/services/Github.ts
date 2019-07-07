class Github {

  async getViewSourceContent(view: string) : Promise<string> {
    const ETAG = `${view}:source:etag`;
    const MODIFIED = `${view}:source:modified`;
    const CONTENT = `${view}:source:content`;

    const v = view.charAt(0).toUpperCase() + view.slice(1);
    const url = `https://api.github.com/repos/jhenriquez/jhenriquez.github.io/contents/src/views/${v}/index.tsx`;
    const headers = new Headers();
    
    headers.append('User-Agent', 'jhenriquez.github.io');
    headers.append('Accept', 'application/vnd.github.v3.raw');

    const etagIsKnown = localStorage.getItem(ETAG);
    const modifiedSinceIsKnown = localStorage.getItem(MODIFIED);

    if (etagIsKnown) {
      headers.append('If-None-Match', etagIsKnown);
    }

    if (modifiedSinceIsKnown) {
      headers.append('If-Modified-Since', modifiedSinceIsKnown);
    }

    const response = await fetch(url, { method: 'get', headers });

    if (!response.ok && response.status !== 304) {
      throw new Error('Something went wrong with the request.');
    }

    if (response.status === 304) {
      const content: string = localStorage.getItem(CONTENT) || '';
      return content;
    }

    const etag: string = response.headers.get('ETag') || '';
    const modified: string = response.headers.get('Last-Modified') || '';
    const content = await response.text();

    localStorage.setItem(ETAG, etag);
    localStorage.setItem(MODIFIED, modified);
    localStorage.setItem(CONTENT, content);

    return content;
  }
}

export default new Github();