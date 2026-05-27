---
marp: true
theme: default
paginate: true
backgroundColor: #f4f6f9
color: #333333
style: |
  section {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 40px;
  }
  h1 {
    color: #002D62;
    font-size: 2.5em;
  }
  h2 {
    color: #002D62;
    border-bottom: 3px solid #D4AF37;
    padding-bottom: 10px;
  }
  footer {
    font-size: 0.5em;
    color: #777;
  }
  code {
    background-color: #e0e0e0;
    color: #d63384;
  }
---

# Le Protocole HTTP


---

## 1. Qu'est-ce que HTTP ?

Le protocole **HTTP** (*HyperText Transfer Protocol*) est le pilier du World Wide Web.

* **Couche Application** : Situé au-dessus de la pile TCP/IP.
* **Modèle Client-Serveur** : Le client fait une demande, le serveur répond.
* **Sans état (Stateless)** : Chaque couple Requête/Réponse est indépendant. Le protocole ne se "souvient" pas des requêtes précédentes (utilisation de cookies/tokens pour y remédier).

---

## 2. Le Cycle Requête / Réponse

La communication se déroule toujours en trois étapes clés :

1. **Le Client (ex: Navigateur)** initie la connexion et envoie une **Requête HTTP**.
2. **Le Serveur** reçoit la requête, traite l'information (requête en base de données, logique métier).
3. **Le Serveur** renvoie une **Réponse HTTP** contenant un code de statut et généralement une ressource (HTML, JSON, Image).

---

## 3. Les Verbes HTTP (Les Méthodes)

Les verbes indiquent au serveur l'action qu'il doit exécuter sur la ressource ciblée.

* `GET` : Demande une représentation de la ressource (Lecture seule).
* `POST` : Soumet des données pour **créer** une nouvelle ressource.
* `PUT` : **Remplace** intégralement la ressource ciblée par les nouvelles données.
* `PATCH` : Modifie **partiellement** une ressource existante.
* `DELETE` : **Supprime** la ressource spécifiée.

---

## 4. Propriétés des Verbes HTTP

Il est important de respecter la sémantique des verbes lors du développement (notamment pour les API REST).

| Méthode | Action CRUD | Sécurisée (Sûre) | Idempotente |
| :--- | :--- | :---: | :---: |
| **GET** | Read | **Oui** | **Oui** |
| **POST** | Create | Non | Non |
| **PUT** | Update (Total) | Non | **Oui** |
| **PATCH** | Update (Partiel) | Non | Non |
| **DELETE** | Delete | Non