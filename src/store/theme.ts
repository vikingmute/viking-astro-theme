import { atom } from 'nanostores';

// 初始化主题
function getInitialTheme(): 'light' | 'dark' {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
        return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
    }
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}

export const theme = atom<'light' | 'dark'>(getInitialTheme());

// 更新主题
export function toggleTheme() {
    const newTheme = theme.get() === 'dark' ? 'light' : 'dark';
    theme.set(newTheme);
    localStorage.setItem('theme', newTheme);

    // 应用主题变化已经在 theme.subscribe 中处理
} 