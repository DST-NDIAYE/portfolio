import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://serigne-ndiaye-data-ai.sound-reed-8650.chatgpt.site'),
  title: 'Serigne Bassirou NDIAYE — Data Scientist & AI Engineer',
  description: 'Machine Learning, NLP et IA générative. Découvrez les projets et le parcours de Serigne Bassirou NDIAYE, Data Scientist.',
  openGraph: { title: 'Serigne Bassirou NDIAYE — Data & AI', description: 'Du document à la connaissance : Machine Learning, NLP et IA générative.', locale: 'fr_FR', type: 'website' },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="fr"><body>{children}</body></html>; }
