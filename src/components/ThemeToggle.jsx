import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const [dark, setDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        document.body.className = dark ? 'dark' : 'light';
        localStorage.setItem('theme', dark ? 'dark' : 'light');
    }, [dark]);


    return (
        <button onClick={() => setDark(!dark)}>
            {dark ? '🌞 Light' : '🌙 Dark'}
        </button>
    );
}
