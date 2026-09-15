# HMR stops updating after client navigation

```sh
npm ci
npm run dev
```

1. Open http://127.0.0.1:3000/.
2. Click **Page B**.
3. Edit the heading in `app/b/label.js` and save. It stays unchanged in the browser.
4. Reload the page. The edit appears.
5. Edit it again. It now updates without reloading.

Expected: step 3 updates without a reload.

For comparison, stop the server and run `npm run dev:webpack`. Repeat from
step 1; the first edit updates correctly.

Reproduced with Next.js 16.3.5 and 16.4.0-canary.31, React 19.2.6,
Node 24.14.1, and Arc and Chrome on macOS. This repo pins the canary version.
