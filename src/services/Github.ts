class Github {
  getViewSourceContent(view: string) : Promise<string> {
    const viewName = view.charAt(0).toUpperCase() + view.slice(1);
    const url = `https://api.github.com/repos/jhenriquez/jhenriquez.github.io/contents/src/views/${viewName}/index.tsx`;
    return fetch(url, {
        method: 'get',
        headers: {
          'User-Agent': 'jhenriquez.github.io',
          'Accept': 'application/vnd.github.v3.raw',
        },
    }).then(response => response.text());
  }
}

export default new Github();