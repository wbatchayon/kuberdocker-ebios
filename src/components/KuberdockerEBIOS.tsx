import { useState } from 'react';
import { Shield, Download, FileText, AlertTriangle, Target, Users, Network, Lock } from 'lucide-react';

const KuberdockerEBIOS = () => {
  const [activeSection, setActiveSection] = useState('valeurs');

  const valeursMetier = [
    {
      denomination: "Plateforme de réservation et facturation",
      nature: "Processus",
      description: "Système central permettant l'enregistrement, le traitement et le suivi des commandes clients de la prise de commande à la facturation finale",
      proprietaire: "Interne (DSI + Commerce)",
      biensSupports: ["Serveurs CloudServices", "Base de données clients", "Application web de réservation", "Système de paiement"],
      biensDescription: "Infrastructure hébergée chez CloudServices avec accès multi-services",
      biensProprietaire: "Externe (CloudServices) / Interne (gestion)"
    },
    {
      denomination: "Données R&D livraison par drones",
      nature: "Information",
      description: "Propriété intellectuelle incluant les plans, protocoles et technologies de livraison par drone - données stratégiques et confidentielles",
      proprietaire: "Interne (Direction R&D)",
      biensSupports: ["Serveurs internes Dunkerque", "Base de données R&D", "Environnement cloisonné"],
      biensDescription: "Serveurs on-premise administrés par équipe interne, environnement dédié et isolé",
      biensProprietaire: "Interne (DSI Cherbourg)"
    },
    {
      denomination: "Système logistique de gestion des conteneurs",
      nature: "Processus",
      description: "Système informatique assurant le fonctionnement des sites de stockage, l'attribution des marchandises aux conteneurs et aux porte-conteneurs",
      proprietaire: "Interne (Direction Logistique)",
      biensSupports: ["Application logistique Logisupport (SaaS)", "Capteurs GSM/satellitaires", "Système de tracking"],
      biensDescription: "Solution SaaS maintenue par Logisupport 24/7 avec capteurs IoT pour suivi temps réel",
      biensProprietaire: "Externe (Logisupport)"
    },
    {
      denomination: "Données contractuelles et commerciales",
      nature: "Information",
      description: "Informations confidentielles des contrats en cours, prospects, négociations tarifaires, conditions avec partenaires AllSea et Seafret",
      proprietaire: "Interne (Direction Juridique + Commerce)",
      biensSupports: ["Système CRM", "Base de données contractuelles", "Serveurs CloudServices"],
      biensDescription: "Données hébergées sur infrastructure cloud et serveurs internes",
      biensProprietaire: "Mixte (CloudServices + Interne)"
    },
    {
      denomination: "Données financières et comptables",
      nature: "Information",
      description: "Informations comptables, gestion fournisseurs, suivi administratif - CA 100M€",
      proprietaire: "Interne (DAF)",
      biensSupports: ["Application financière", "Serveurs Dunkerque", "Système de backup"],
      biensDescription: "Application maintenue par InfoServices, serveurs on-premise à Dunkerque",
      biensProprietaire: "Interne (maintenance InfoServices)"
    }
  ];

  const evenementsRedoutes = [
    {
      valeurMetier: "Plateforme de réservation et facturation",
      evenement: "Blocage de la plateforme pendant plus de 2 semaines",
      impacts: ["Opérationnel: Arrêt total activité", "Financier: Perte CA > 3M€", "Réputationnel: Perte clients stratégiques", "Juridique: Pénalités contractuelles"],
      gravite: 4
    },
    {
      valeurMetier: "Données R&D livraison par drones",
      evenement: "Vol et divulgation de la propriété intellectuelle R&D",
      impacts: ["Stratégique: Perte avantage concurrentiel", "Financier: Perte valorisation projet", "Réputationnel: Perte confiance investisseurs", "Juridique: Litiges propriété intellectuelle"],
      gravite: 4
    },
    {
      valeurMetier: "Système logistique",
      evenement: "Compromission et modification des données logistiques",
      impacts: ["Opérationnel: Erreurs livraison/douane", "Financier: Amendes 25% recettes trimestrielles", "Réputationnel: Rupture partenariats", "Juridique: Redressements douaniers"],
      gravite: 4
    },
    {
      valeurMetier: "Données contractuelles",
      evenement: "Fuite d'informations confidentielles vers concurrents",
      impacts: ["Commercial: Perte contrats en cours", "Financier: Manque à gagner", "Réputationnel: Défiance clients", "Juridique: Rupture clauses confidentialité"],
      gravite: 3
    },
    {
      valeurMetier: "Données financières",
      evenement: "Corruption ou perte des données comptables",
      impacts: ["Opérationnel: Impossibilité facturation", "Financier: Perte traçabilité comptable", "Juridique: Non-conformité fiscale", "Réputationnel: Perte crédibilité"],
      gravite: 3
    }
  ];

  const referentiels = [
    { nom: "PSSI de Kuberdocker", applicable: true, note: "Conformité 80% en moyenne" },
    { nom: "RGPD", applicable: true, note: "Données clients et personnelles" },
    { nom: "Guide d'hygiène informatique ANSSI", applicable: true, note: "Alignement en cours" },
    { nom: "ISO 27001", applicable: true, note: "Certification en cours" },
    { nom: "ISO 27002", applicable: true, note: "Recommandations suivies" },
    { nom: "ISO 22301", applicable: true, note: "Continuité d'activité post-incident" },
    { nom: "Code maritime international", applicable: true, note: "Partenariat AllSea" },
    { nom: "RGS", applicable: false, note: "N/A - secteur privé" }
  ];

  const sourcesRisque = [
    {
      source: "Groupe cybercriminel organisé (ransomware)",
      objectif: "Plateforme de réservation/facturation",
      motivation: 4,
      ressources: 3,
      pertinence: 4,
      justification: "Précédent de rançongiciel ciblé sur Dunkerque (2 semaines d'arrêt). Capacité de paiement identifiée. Plateforme critique pour continuité."
    },
    {
      source: "APT - Espionnage industriel",
      objectif: "Données R&D drones",
      motivation: 4,
      ressources: 4,
      pertinence: 4,
      justification: "Innovation technologique de livraison par drone = fort intérêt concurrent. Données stratégiques à haute valeur."
    },
    {
      source: "Employé malveillant / Insider",
      objectif: "Données commerciales confidentielles",
      motivation: 3,
      ressources: 3,
      pertinence: 4,
      justification: "Précédent: 3 commerciaux partis avec transmission d'infos à la concurrence. Prime commerciale incitative = motivation."
    },
    {
      source: "Hacktivist / Script kiddie",
      objectif: "Défacement site web / perturbation",
      motivation: 2,
      ressources: 2,
      pertinence: 2,
      justification: "Impact limité mais possible. Faible ciblage de Kuberdocker."
    },
    {
      source: "Concurrent malveillant",
      objectif: "Système logistique",
      motivation: 3,
      ressources: 3,
      pertinence: 3,
      justification: "Sabotage pour gagner parts de marché. Erreurs douanières = perte client vers concurrent."
    }
  ];

  const partiesPrenantes = [
    {
      categorie: "Fournisseur cloud",
      nom: "CloudServices",
      dependance: 4,
      penetration: 4,
      maturite: 3,
      confiance: 2,
      niveauMenace: 4,
      justification: "Héberge quasi-totalité du SI. Refus d'améliorer sécurité. Certifié HDS mais audit refusé. Mutualisé."
    },
    {
      categorie: "Infogérant",
      nom: "ITservices",
      dependance: 4,
      penetration: 4,
      maturite: 2,
      confiance: 2,
      niveauMenace: 4,
      justification: "Support 24/7 sur tous sites sauf Cherbourg. MAJ sécu non prioritaires. Divergences de pratiques. Projet ISO 27001 sans calendrier."
    },
    {
      categorie: "Sous-traitant logistique",
      nom: "Logisupport",
      dependance: 4,
      penetration: 3,
      maturite: 2,
      confiance: 3,
      niveauMenace: 3,
      justification: "Gère plateforme Expéditions (critique). Bonne gouvernance mais failles de config. MAJ > 6 mois. Pas de formation cyber."
    },
    {
      categorie: "Partenaire maritime",
      nom: "AllSea",
      dependance: 4,
      penetration: 3,
      maturite: 1,
      confiance: 2,
      niveauMenace: 4,
      justification: "Partenariat exclusif Shanghai/Amsterdam. Confidentialité faible. Rotation personnel élevée. Mini-serveurs sur navires. Conformité < 40%."
    },
    {
      categorie: "Tiers mainteneur",
      nom: "InfoServices",
      dependance: 3,
      penetration: 3,
      maturite: 2,
      confiance: 2,
      niveauMenace: 3,
      justification: "Maintenance à distance applications financières. PAS produit mais audit refusé. Liste mainteneurs non fournie."
    },
    {
      categorie: "Sécurité physique",
      nom: "Securvigi",
      dependance: 3,
      penetration: 2,
      maturite: 2,
      confiance: 2,
      niveauMenace: 2,
      justification: "Vidéo + gardiennage sous-traité. Niveau variable selon pays. Vols et dégradations constatés."
    },
    {
      categorie: "Partenaire maritime",
      nom: "Seafret",
      dependance: 2,
      penetration: 2,
      maturite: 2,
      confiance: 3,
      niveauMenace: 2,
      justification: "Partenariat secondaire pour délais. Moins critique qu'AllSea."
    },
    {
      categorie: "Interne",
      nom: "Employés télétravail/déplacement",
      dependance: 3,
      penetration: 4,
      maturite: 1,
      confiance: 2,
      niveauMenace: 3,
      justification: "Personnel commercial souvent en déplacement. Absences injustifiées Paris. Pas de sensibilisation cyber."
    }
  ];

  const scenarioStrategique = {
    sourceRisque: "Groupe cybercriminel organisé (ransomware-as-a-service)",
    ecosysteme: "ITservices (infogérant) → CloudServices (hébergeur) → Plateforme Kuberdocker",
    objectifKuberdocker: "Blocage plateforme de réservation/facturation pendant > 2 semaines → Arrêt activité",
    cheminAttaque: [
      "1. CONNAITRE: Reconnaissance sur employés ITservices via LinkedIn/OSINT",
      "2. RENTRER: Phishing ciblé sur admin ITservices → Accès VPN",
      "3. TROUVER: Pivoting vers CloudServices via connexions admin",
      "4. EXPLOITER: Déploiement ransomware sur serveurs plateforme + destruction backups"
    ]
  };

  const scenarioOperationnel = {
    partiePrenante: "ITservices (infogérant)",
    cheminStrategique: "Admin ITservices compromis → Accès CloudServices → Chiffrement plateforme",
    etapes: [
      {
        phase: "Reconnaissance",
        mitre: "T1589.001 - Gather Victim Identity Information",
        action: "Identification admins ITservices sur réseaux sociaux, identification outils utilisés"
      },
      {
        phase: "Initial Access",
        mitre: "T1566.002 - Spearphishing Link",
        action: "Email de phishing usurpant CloudServices avec lien malveillant vers faux portail de support"
      },
      {
        phase: "Execution",
        mitre: "T1204.001 - Malicious Link",
        action: "Clic sur lien → Download malware → Credential stealer"
      },
      {
        phase: "Persistence",
        mitre: "T1098 - Account Manipulation",
        action: "Création compte admin secondaire sur environnement ITservices"
      },
      {
        phase: "Credential Access",
        mitre: "T1555 - Credentials from Password Stores",
        action: "Extraction credentials CloudServices stockés par admin ITservices"
      },
      {
        phase: "Lateral Movement",
        mitre: "T1021.004 - SSH",
        action: "Connexion aux serveurs CloudServices hébergeant plateforme Kuberdocker"
      },
      {
        phase: "Defense Evasion",
        mitre: "T1070.004 - File Deletion",
        action: "Suppression logs de connexion sur serveurs CloudServices"
      },
      {
        phase: "Impact - Destruction",
        mitre: "T1485 - Data Destruction",
        action: "Suppression/chiffrement des sauvegardes hébergées chez CloudServices"
      },
      {
        phase: "Impact - Chiffrement",
        mitre: "T1486 - Data Encrypted for Impact",
        action: "Déploiement ransomware sur plateforme de réservation/facturation"
      },
      {
        phase: "Extorsion",
        mitre: "T1657 - Financial Theft",
        action: "Demande de rançon ciblée mentionnant le dirigeant (comme précédent)"
      }
    ],
    menaceInitiale: 4,
    mesuresSecurite: [
      "MFA obligatoire pour tous admins ITservices et CloudServices",
      "Cloisonnement réseau: accès ITservices limité au strict nécessaire",
      "EDR sur postes admins ITservices",
      "SIEM avec détection anomalies comportementales (connexions inhabituelles)",
      "Sauvegardes immutables offline (3-2-1 rule)",
      "Formation phishing trimestrielle pour IT",
      "Audit annuel de CloudServices (clause contractuelle)",
      "Segmentation: plateforme réservation isolée",
      "Plan de continuité testé semestriellement"
    ],
    menaceResiduelle: 2
  };

  const risqueResiduel = {
    avant: { vraisemblance: 4, gravite: 4, score: 16 },
    apres: { vraisemblance: 2, gravite: 3, score: 6 }
  };

  const sections = [
    { id: 'valeurs', label: 'Atelier 1: Valeurs Métier', icon: Target },
    { id: 'evenements', label: 'Atelier 1: Événements Redoutés', icon: AlertTriangle },
    { id: 'referentiels', label: 'Atelier 1: Référentiels', icon: FileText },
    { id: 'sources', label: 'Atelier 2: Sources de Risque', icon: Users },
    { id: 'parties', label: 'Atelier 3: Parties Prenantes', icon: Network },
    { id: 'strategique', label: 'Atelier 3: Scénario Stratégique', icon: Target },
    { id: 'operationnel', label: 'Atelier 4: Scénario Opérationnel', icon: Lock },
    { id: 'risque', label: 'Atelier 5: Risque Résiduel', icon: Shield }
  ];

  const exportToText = () => {
    let content = "KUBERDOCKER - ANALYSE EBIOS RISK MANAGER\n\n";
    
    content += "=== ATELIER 1: VALEURS MÉTIER ===\n\n";
    valeursMetier.forEach((vm, i) => {
      content += `Valeur Métier ${i + 1}:\n`;
      content += `Dénomination: ${vm.denomination}\n`;
      content += `Nature: ${vm.nature}\n`;
      content += `Description: ${vm.description}\n`;
      content += `Propriétaire: ${vm.proprietaire}\n`;
      content += `Biens supports: ${vm.biensSupports.join(', ')}\n\n`;
    });
    
    content += "\n=== ÉVÉNEMENTS REDOUTÉS ===\n\n";
    evenementsRedoutes.forEach((er, i) => {
      content += `ER${i + 1}: ${er.evenement}\n`;
      content += `Valeur: ${er.valeurMetier}\n`;
      content += `Impacts: ${er.impacts.join(' | ')}\n`;
      content += `Gravité: ${er.gravite}/4\n\n`;
    });

    content += "\n=== ATELIER 2: SOURCES DE RISQUE ===\n\n";
    sourcesRisque.forEach((sr, i) => {
      content += `SR${i + 1}: ${sr.source}\n`;
      content += `Objectif: ${sr.objectif}\n`;
      content += `Motivation: ${sr.motivation}/4 | Ressources: ${sr.ressources}/4 | Pertinence: ${sr.pertinence}/4\n`;
      content += `Justification: ${sr.justification}\n\n`;
    });

    content += "\n=== ATELIER 3: PARTIES PRENANTES ===\n\n";
    partiesPrenantes.forEach((pp, i) => {
      content += `PP${i + 1}: ${pp.nom} (${pp.categorie})\n`;
      content += `Dépendance: ${pp.dependance}/4 | Pénétration: ${pp.penetration}/4 | Maturité: ${pp.maturite}/4 | Confiance: ${pp.confiance}/4\n`;
      content += `Niveau menace: ${pp.niveauMenace}/4\n`;
      content += `Justification: ${pp.justification}\n\n`;
    });

    content += "\n=== SCÉNARIO OPÉRATIONNEL DÉTAILLÉ ===\n\n";
    scenarioOperationnel.etapes.forEach((etape, i) => {
      content += `${i + 1}. ${etape.phase} [${etape.mitre}]\n`;
      content += `   ${etape.action}\n\n`;
    });

    content += "\n=== MESURES DE SÉCURITÉ ===\n\n";
    scenarioOperationnel.mesuresSecurite.forEach((mesure, i) => {
      content += `${i + 1}. ${mesure}\n`;
    });

    content += `\n=== RISQUE RÉSIDUEL ===\n`;
    content += `AVANT: Vraisemblance ${risqueResiduel.avant.vraisemblance}/4 × Gravité ${risqueResiduel.avant.gravite}/4 = ${risqueResiduel.avant.score}/16 (CRITIQUE)\n`;
    content += `APRÈS: Vraisemblance ${risqueResiduel.apres.vraisemblance}/4 × Gravité ${risqueResiduel.apres.gravite}/4 = ${risqueResiduel.apres.score}/16 (ACCEPTABLE)\n`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Kuberdocker_EBIOS_Complet.txt';
    a.click();
  };

  const renderContent = () => {
    switch(activeSection) {
      case 'valeurs':
        return (
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">Atelier 1: Identification des Valeurs Metier</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {valeursMetier.map((vm, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-5 md:p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-blue-700">{vm.denomination}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${vm.nature === 'Processus' ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700'}`}>
                      {vm.nature}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{vm.description}</p>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold text-gray-700">Proprietaire:</span> <span className="text-gray-600">{vm.proprietaire}</span></p>
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Biens supports:</p>
                      <div className="flex flex-wrap gap-2">
                        {vm.biensSupports.map((bien, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">{bien}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'evenements':
        return (
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">Evenements Redoutes & Impacts</h2>
            </div>
            <div className="grid gap-4 md:gap-6">
              {evenementsRedoutes.map((er, index) => (
                <div key={index} className={`rounded-xl shadow-lg p-4 md:p-6 border-l-4 bg-gradient-to-r ${er.gravite === 4 ? 'from-red-50 to-white border-red-500' : 'from-orange-50 to-white border-orange-500'}`}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 md:mb-4 gap-2">
                    <h3 className="text-base md:text-lg font-semibold text-gray-800">ER{index + 1}: {er.evenement}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs md:text-sm font-bold ${er.gravite === 4 ? 'bg-red-600 text-white shadow-lg' : 'bg-orange-500 text-white shadow-lg'}`}>
                      Gravite: {er.gravite}/4
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-3"><strong>Valeur metier:</strong> {er.valeurMetier}</p>
                  <div>
                    <p className="font-semibold text-gray-700 mb-2">Categories d'impacts:</p>
                    <ul className="space-y-1">
                      {er.impacts.map((impact, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <span className="text-red-500 mr-2">-</span>
                          {impact}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'referentiels':
        return (
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">Referentiels Applicables a Kuberdocker</h2>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                    <tr>
                      <th className="px-3 md:px-6 py-3 text-left text-sm md:text-base rounded-tl-lg">Referentiel</th>
                      <th className="px-3 md:px-6 py-3 text-center text-sm md:text-base">Applicable</th>
                      <th className="px-3 md:px-6 py-3 text-left text-sm md:text-base rounded-tr-lg">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {referentiels.map((ref, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 hover:bg-blue-50 transition-colors' : 'bg-white hover:bg-blue-50 transition-colors'}>
                        <td className="px-3 md:px-6 py-3 md:py-4 font-medium text-gray-800 text-sm">{ref.nom}</td>
                        <td className="px-3 md:px-6 py-3 md:py-4 text-center">
                          {ref.applicable ? (
                            <span className="px-2 md:px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs md:text-sm font-semibold shadow-sm">OUI</span>
                          ) : (
                            <span className="px-2 md:px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs md:text-sm font-semibold shadow-sm">NON</span>
                          )}
                        </td>
                        <td className="px-3 md:px-6 py-3 md:py-4 text-sm text-gray-600">{ref.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'sources':
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">Sources de Risque & Objectifs Visés</h2>
            </div>
            {sourcesRisque.map((sr, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-50 via-pink-50 to-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">SR{index + 1}: {sr.source}</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="font-semibold text-gray-700 text-sm">Objectif vise:</p>
                    <p className="text-gray-800">{sr.objectif}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center bg-white rounded-lg p-2 shadow-sm">
                      <p className="text-xs text-gray-600">Motivation</p>
                      <p className="text-2xl font-bold text-purple-600">{sr.motivation}/4</p>
                    </div>
                    <div className="text-center bg-white rounded-lg p-2 shadow-sm">
                      <p className="text-xs text-gray-600">Ressources</p>
                      <p className="text-2xl font-bold text-purple-600">{sr.ressources}/4</p>
                    </div>
                    <div className="text-center bg-white rounded-lg p-2 shadow-sm">
                      <p className="text-xs text-gray-600">Pertinence</p>
                      <p className="text-2xl font-bold text-purple-600">{sr.pertinence}/4</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/70 rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-gray-700"><strong>Justification:</strong> {sr.justification}</p>
                </div>
              </div>
            ))}
          </div>
        );

      case 'parties':
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">Analyse des Parties Prenantes</h2>
            </div>
            <div className="grid gap-6">
              {partiesPrenantes.map((pp, index) => (
                <div key={index} className={`rounded-xl shadow-lg p-6 border-l-4 bg-gradient-to-r ${pp.niveauMenace >= 4 ? 'from-red-50 to-white border-red-500' : pp.niveauMenace === 3 ? 'from-orange-50 to-white border-orange-500' : 'from-yellow-50 to-white border-yellow-500'} hover:shadow-xl transition-shadow`}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{pp.nom}</h3>
                      <p className="text-sm text-gray-600">{pp.categorie}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold shadow-lg ${pp.niveauMenace >= 4 ? 'bg-red-600 text-white' : pp.niveauMenace === 3 ? 'bg-orange-500 text-white' : 'bg-yellow-500 text-white'}`}>
                      Menace: {pp.niveauMenace}/4
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-3 mb-4">
                    <div className="text-center bg-white rounded-lg p-2 shadow-sm">
                      <p className="text-xs text-gray-600">Dependance</p>
                      <p className="text-xl font-bold text-gray-800">{pp.dependance}/4</p>
                    </div>
                    <div className="text-center bg-white rounded-lg p-2 shadow-sm">
                      <p className="text-xs text-gray-600">Penetration</p>
                      <p className="text-xl font-bold text-gray-800">{pp.penetration}/4</p>
                    </div>
                    <div className="text-center bg-white rounded-lg p-2 shadow-sm">
                      <p className="text-xs text-gray-600">Maturite</p>
                      <p className="text-xl font-bold text-gray-800">{pp.maturite}/4</p>
                    </div>
                    <div className="text-center bg-white rounded-lg p-2 shadow-sm">
                      <p className="text-xs text-gray-600">Confiance</p>
                      <p className="text-xl font-bold text-gray-800">{pp.confiance}/4</p>
                    </div>
                  </div>
                  <div className="bg-white/70 rounded-lg p-3 shadow-sm">
                    <p className="text-sm text-gray-700">{pp.justification}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'strategique':
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">Scenario Strategique</h2>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl shadow-2xl p-6 md:p-8 border-2 border-red-300">
              <h3 className="text-xl md:text-2xl font-bold text-red-800 mb-6">Scenario Retenu: Ransomware via compromission infogerant</h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-5 shadow-lg">
                  <h4 className="font-bold text-lg text-gray-800 mb-3">Source de Risque</h4>
                  <p className="text-gray-700">{scenarioStrategique.sourceRisque}</p>
                </div>

                <div className="bg-white rounded-xl p-5 shadow-lg">
                  <h4 className="font-bold text-lg text-gray-800 mb-3">Ecosysteme compromis</h4>
                  <div className="flex items-center justify-center space-x-4 text-lg flex-wrap gap-2">
                    <span className="px-4 py-2 bg-blue-100 rounded-lg">ITservices</span>
                    <span className="text-2xl">→</span>
                    <span className="px-4 py-2 bg-blue-200 rounded-lg">CloudServices</span>
                    <span className="text-2xl">→</span>
                    <span className="px-4 py-2 bg-red-200 rounded-lg font-bold">Kuberdocker</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <h4 className="font-bold text-lg text-gray-800 mb-3">Objectif sur Kuberdocker</h4>
                  <p className="text-gray-700">{scenarioStrategique.objectifKuberdocker}</p>
                </div>

                <div className="bg-white rounded-xl p-5 shadow-lg">
                  <h4 className="font-bold text-lg text-gray-800 mb-4">Chemin d'attaque strategique (4 phases)</h4>
                  <div className="space-y-3">
                    {scenarioStrategique.cheminAttaque.map((phase, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{index + 1}</span>
                        <p className="text-gray-700 flex-1">{phase}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'operationnel':
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">Scenario Operationnel (MITRE ATT&CK)</h2>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6 border-l-4 border-blue-500 mb-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Contexte du scenario</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-700">Partie prenante ciblee:</p>
                  <p className="text-gray-800">{scenarioOperationnel.partiePrenante}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Chemin strategique:</p>
                  <p className="text-gray-800">{scenarioOperationnel.cheminStrategique}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Kill Chain detaillee (10 etapes)</h3>
              {scenarioOperationnel.etapes.map((etape, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-red-400 hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-red-500 to-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-gray-800">{etape.phase}</h4>
                        <span className="text-xs bg-gray-200 px-3 py-1 rounded-full font-mono">{etape.mitre}</span>
                      </div>
                      <p className="text-gray-700 text-sm">{etape.action}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl shadow-lg p-6 border-l-4 border-green-500 mt-8">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Mesures de Securite Recommandees</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {scenarioOperationnel.mesuresSecurite.map((mesure, index) => (
                  <div key={index} className="flex items-start space-x-2 bg-white p-3 rounded-lg shadow-sm">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    <p className="text-sm text-gray-700">{mesure}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="bg-gradient-to-br from-red-100 to-red-50 rounded-xl p-6 text-center border-2 border-red-300 shadow-lg">
                <p className="text-sm text-gray-600 mb-2">Menace Initiale</p>
                <p className="text-5xl font-bold text-red-600">{scenarioOperationnel.menaceInitiale}/4</p>
                <p className="text-sm text-gray-700 mt-2 font-semibold">CRITIQUE</p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-xl p-6 text-center border-2 border-green-300 shadow-lg">
                <p className="text-sm text-gray-600 mb-2">Menace Residuelle</p>
                <p className="text-5xl font-bold text-green-600">{scenarioOperationnel.menaceResiduelle}/4</p>
                <p className="text-sm text-gray-700 mt-2 font-semibold">ACCEPTABLE</p>
              </div>
            </div>
          </div>
        );

      case 'risque':
        return (
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">Diagramme de Farmer & Risque Residuel</h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl p-4 md:p-8">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 md:mb-6 text-center">Matrice de Risque: Evolution Avant/Apres Traitement</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-xs md:text-sm">
                  <thead>
                    <tr>
                      <th className="border-2 border-gray-400 bg-gray-200 p-2 md:p-3 text-center font-bold">Gravite</th>
                      <th className="border-2 border-gray-400 bg-gray-200 p-2 md:p-3 text-center" colSpan={4}>Vraisemblance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-2 border-gray-400 bg-gray-200 p-2 md:p-3 text-center font-bold">4<br/>CRITIQUE</td>
                      <td className="border-2 border-gray-400 bg-orange-300 p-4 md:p-8"></td>
                      <td className="border-2 border-gray-400 bg-red-400 p-4 md:p-8"></td>
                      <td className="border-2 border-gray-400 bg-red-500 p-4 md:p-8"></td>
                      <td className="border-2 border-gray-400 bg-red-600 p-4 md:p-8 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl md:text-4xl">X</span>
                        </div>
                        <div className="absolute top-1 md:top-2 right-1 md:right-2 bg-white px-1 md:px-2 py-0 md:py-1 rounded text-xs font-bold text-red-700">
                          AVANT
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 border-gray-400 bg-gray-200 p-2 md:p-3 text-center font-bold">3<br/>ELEVE</td>
                      <td className="border-2 border-gray-400 bg-yellow-300 p-4 md:p-8"></td>
                      <td className="border-2 border-gray-400 bg-orange-300 p-4 md:p-8 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl md:text-4xl">OK</span>
                        </div>
                        <div className="absolute top-1 md:top-2 right-1 md:right-2 bg-white px-1 md:px-2 py-0 md:py-1 rounded text-xs font-bold text-green-700">
                          APRES
                        </div>
                      </td>
                      <td className="border-2 border-gray-400 bg-red-400 p-4 md:p-8"></td>
                      <td className="border-2 border-gray-400 bg-red-500 p-4 md:p-8"></td>
                    </tr>
                    <tr>
                      <td className="border-2 border-gray-400 bg-gray-200 p-2 md:p-3 text-center font-bold">2<br/>MOYEN</td>
                      <td className="border-2 border-gray-400 bg-green-300 p-4 md:p-8"></td>
                      <td className="border-2 border-gray-400 bg-yellow-300 p-4 md:p-8"></td>
                      <td className="border-2 border-gray-400 bg-orange-300 p-4 md:p-8"></td>
                      <td className="border-2 border-gray-400 bg-orange-400 p-4 md:p-8"></td>
                    </tr>
                    <tr>
                      <td className="border-2 border-gray-400 bg-gray-200 p-2 md:p-3 text-center font-bold">1<br/>FAIBLE</td>
                      <td className="border-2 border-gray-400 bg-green-200 p-4 md:p-8"></td>
                      <td className="border-2 border-gray-400 bg-green-300 p-4 md:p-8"></td>
                      <td className="border-2 border-gray-400 bg-yellow-200 p-4 md:p-8"></td>
                      <td className="border-2 border-gray-400 bg-yellow-300 p-4 md:p-8"></td>
                    </tr>
                    <tr>
                      <td className="border-2 border-gray-400 bg-gray-200 p-2 md:p-3"></td>
                      <td className="border-2 border-gray-400 bg-gray-200 p-2 md:p-3 text-center font-bold">1</td>
                      <td className="border-2 border-gray-400 bg-gray-200 p-2 md:p-3 text-center font-bold">2</td>
                      <td className="border-2 border-gray-400 bg-gray-200 p-2 md:p-3 text-center font-bold">3</td>
                      <td className="border-2 border-gray-400 bg-gray-200 p-2 md:p-3 text-center font-bold">4</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
                <div className="bg-gradient-to-r from-red-100 to-red-200 rounded-lg p-4 md:p-6 shadow-md">
                  <h4 className="text-base md:text-lg font-bold text-red-800 mb-3 md:mb-4">Risque Initial (AVANT)</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Vraisemblance:</strong> {risqueResiduel.avant.vraisemblance}/4</p>
                    <p><strong>Gravite:</strong> {risqueResiduel.avant.gravite}/4</p>
                    <div className="bg-red-600 text-white p-3 md:p-4 rounded text-center mt-3 md:mt-4">
                      <p className="text-2xl md:text-3xl font-bold">{risqueResiduel.avant.score}/16</p>
                      <p className="text-sm">CRITIQUE</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-lg p-4 md:p-6 shadow-md">
                  <h4 className="text-base md:text-lg font-bold text-green-800 mb-3 md:mb-4">Risque Residuel (APRES)</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Vraisemblance:</strong> {risqueResiduel.apres.vraisemblance}/4 (-50%)</p>
                    <p><strong>Gravite:</strong> {risqueResiduel.apres.gravite}/4 (-25%)</p>
                    <div className="bg-green-600 text-white p-3 md:p-4 rounded text-center mt-3 md:mt-4">
                      <p className="text-2xl md:text-3xl font-bold">{risqueResiduel.apres.score}/16</p>
                      <p className="text-sm">ACCEPTABLE</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 md:p-6 mt-4 md:mt-6 border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-800 mb-2 md:mb-3">Synthese du Traitement</h4>
                <ul className="space-y-1 md:space-y-2 text-sm text-gray-700">
                  <li>- Reduction du risque: 62.5% (de 16/16 a 6/16)</li>
                  <li>- Investissement estime: 300-500k EUR sur 12 mois</li>
                  <li>- ROI: Protection CA 100M EUR</li>
                  <li>- Conformite: ISO 27001, RGPD</li>
                  <li>- Priorisation: MFA + EDR + Segmentation + Sauvegardes</li>
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-2 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-2xl p-4 md:p-8 mb-3 md:mb-6 border border-blue-400/30">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-2 md:p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <Shield className="w-8 h-8 md:w-12 md:h-12 text-white" />
              </div>
              <div>
                <h1 className="text-xl md:text-3xl font-bold text-white">Kuberdocker</h1>
                <h2 className="text-sm md:text-lg text-blue-200 font-medium">EBIOS Risk Manager</h2>
                <p className="text-blue-300 text-xs md:text-sm mt-1">Transport Maritime & Logistique Internationale</p>
              </div>
            </div>
            <button
              onClick={exportToText}
              className="flex items-center justify-center gap-2 bg-white text-blue-700 px-4 md:px-6 py-2 md:py-3 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-sm md:text-base"
            >
              <Download className="w-4 h-5" />
              <span>Exporter</span>
            </button>
          </div>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl mb-3 md:mb-6 overflow-hidden border border-white/20">
          <div className="p-2 md:p-4 overflow-x-auto">
            <div className="flex md:grid md:grid-cols-4 gap-2 min-w-max">
              {sections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center gap-2 px-3 py-2 md:px-4 md:py-3 transition-all duration-200 rounded-xl whitespace-nowrap text-xs md:text-sm font-medium ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    <Icon className={`w-4 h-4 md:w-5 md:h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                    <span>{section.label.split(':')[1].trim()}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-3 md:p-6">
          {renderContent()}
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-xl p-4 md:p-6 mt-3 md:mt-6 border border-gray-700">
          <div className="text-center">
            <p className="font-bold text-white text-base md:text-lg mb-2">Contexte Kuberdocker</p>
            <p className="text-gray-300 text-sm md:text-base">Groupe international | CA: 100M EUR | Sites: Cherbourg, Amsterdam, Shanghai</p>
            <p className="text-gray-400 text-xs md:text-sm mt-1">Activites: Transport maritime, Stockage, Logistique, Livraison par drones</p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-3">
              <span className="px-2 md:px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs md:text-sm border border-blue-500/30">PSSI 80%</span>
              <span className="px-2 md:px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs md:text-sm border border-purple-500/30">ISO 27001</span>
              <span className="px-2 md:px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-xs md:text-sm border border-green-500/30">RGPD</span>
              <span className="px-2 md:px-3 py-1 bg-orange-600/20 text-orange-300 rounded-full text-xs md:text-sm border border-orange-500/30">Maturite: 2/4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KuberdockerEBIOS;