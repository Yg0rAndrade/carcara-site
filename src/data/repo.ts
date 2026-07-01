// Estatísticas do repositório no GitHub (estrelas). Buscadas em tempo de build
// para a página nascer já com o número, e atualizadas no cliente por
// RefreshStarsScript.astro. Se a API falhar (offline, rate limit), fica null e
// o número simplesmente não aparece — o selo "GitHub" continua valendo.

import { REPO } from './release';

export const REPO_API = `https://api.github.com/repos/${REPO}`;
export const REPO_URL = `https://github.com/${REPO}`;

/** Abaixo deste nº de estrelas, não mostramos a contagem (sinal fraco). */
export const STAR_MIN = 8;

/** Formata a contagem de estrelas: 1234 -> "1,2k". */
export function formatStars(n: number): string {
  if (n < 1000) return String(n);
  return (n / 1000).toFixed(1).replace('.0', '').replace('.', ',') + 'k';
}

async function fetchStars(): Promise<number | null> {
  try {
    const res = await fetch(REPO_API, {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'carcara-code-site',
      },
    });
    if (!res.ok) return null;
    const data = await res.json();
    const n = data?.stargazers_count;
    return typeof n === 'number' ? n : null;
  } catch {
    return null;
  }
}

export const stars: number | null = await fetchStars();
