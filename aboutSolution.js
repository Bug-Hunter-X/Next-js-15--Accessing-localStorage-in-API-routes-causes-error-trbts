```javascript
// pages/aboutsolution.js
import { useEffect, useState } from 'react';

export default function AboutSolution() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <h2>Welcome {user ? user.name : 'Guest'}!</h2>
    </div>
  );
}
```