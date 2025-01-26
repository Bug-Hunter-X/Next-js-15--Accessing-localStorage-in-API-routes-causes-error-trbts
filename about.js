```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if the About page is accessed directly
  const user = JSON.parse(localStorage.getItem('user')); //Error: localStorage is undefined in the server-side
  return (
    <div>
      <h1>About Page</h1>
      <h2>Welcome {user ? user.name : 'Guest'}!</h2>
    </div>
  );
}
```