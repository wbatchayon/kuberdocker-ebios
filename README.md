# Kuberdocker EBIOS Risk Manager

Application web interactive pour l'analyse de risques cybersecurite selon la methode EBIOS Risk Manager (ANSSI).

## Contexte Kuberdocker

- Groupe international de transport maritime et logistique
- Chiffre d'affaires: 100M EUR
- Sites: Cherbourg, Amsterdam, Shanghai
- Activites: Transport maritime, stockage, logistique, livraison par drones

## Analyse EBIOS-RM

L'application couvre les 5 ateliers de la methode EBIOS-RM:

| Atelier | Contenu | Status |
|---------|---------|--------|
| Atelier 1 | Valeurs metier, evenements redoutes, referentiels | OK |
| Atelier 2 | Sources de risque et objectifs vises | OK |
| Atelier 3 | Parties prenantes, scenarios strategiques | OK |
| Atelier 4 | Scenarios operationnels (MITRE ATT&CK) | OK |
| Atelier 5 | Risque residuel et traitement | OK |

## Referentiels Conformite

- PSSI Kuberdocker (80% conformite)
- RGPD (donnees personnelles)
- ISO 27001 (en cours de certification)
- ISO 27002, ISO 22301
- Guide d'hygiene ANSSI

## Scenario Operationnel

- Menace: Ransomware via compromission infogérant
- Kill Chain: 10 etapes MITRE ATT&CK
- Risque initial: 16/16 (CRITIQUE)
- Risque residuel: 6/16 (ACCEPTABLE)
- Reduction: 62.5%

## Stack Technique

- React 19
- TypeScript 5.9
- Vite 7
- Tailwind CSS 3
- Lucide React
- Playwright (tests E2E)

## Installation

```bash
npm install
npm run dev
```

## Commands

```bash
npm run dev          # Development server
npm run build        # Production build
npm run lint         # ESLint
npm run test:e2e     # Playwright tests
```

## Fichiers Principaux

- src/components/KuberdockerEBIOS.tsx - Composant principal EBIOS
- .github/workflows/ci-cd.yml - Pipeline CI/CD
- Dockerfile - Containerisation
- docker-compose.yml - Orchestration

## Licence

MIT
