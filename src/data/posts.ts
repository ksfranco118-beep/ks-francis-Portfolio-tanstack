export const BLOG_POSTS: Record<string, any> = {
  "1": {
    en: {
      title: "Network Routing: The GPS of the Internet",
      category: "Networking 101",
      date: "2026-02-08T10:00:00Z",
      readTime: "8 min",
      image: "/routing.jpg",
      tags: ["Routing", "Basics", "Internet", "BGP"],
      content: `
### How does your data travel across the world?

When you send a WhatsApp message to a friend on the other side of the planet, your phone doesn't actually "know" the path. It doesn't know where the server is physically located. But, your message arrives in less than a second.

Welcome to the world of **Network Routing**.

### 1. The Postal Service Metaphor
Imagine you are sending a letter. You don't know the mailman in the destination city. You simply drop your letter in the mailbox.
* **The Mailman:** This is the **Router**. Its only job is to look at the address on the envelope (the **IP Address**) and decide which post office to send it to next.
* **The Packet:** Your data is chopped into small pieces called "packets," each with its destination address.

> **IMPORTANT:** A router doesn't know the entire path! It only knows the "next step" (the **Next Hop**) to get closer to the destination.

### 2. How does the router decide? (The Routing Table)
Every router has a brain called a **Routing Table**. Think of it as a massive signpost at a highway junction.

\`\`\`text
DESTINATION        | EXIT INTERFACE      | DISTANCE (Hops)
------------------|---------------------|-----------------
Network A (London)| Port 1               | 2 hops
Network B (Tokyo) | Port 2               | 8 hops
Default (Web)     | Port 3               | ???
\`\`\`

### 3. Static vs. Dynamic Routing
There are two ways a router learns its way:

* **Static Routing:** An engineer manually types in the path. It’s precise, but if a cable is cut, the data gets stuck.
* **Dynamic Routing:** Routers talk to each other! They say: *"Hey, I found a shortcut to Google's servers!"*. They automatically adapt to failures.

> **TIP:** This is why the Internet is so resilient. If an undersea cable is cut between Europe and the USA, routers detect it in seconds and redirect traffic through a different route.

### 4. BGP: The King of the Internet
On the global web, there is one "Boss" protocol that I use every day: **BGP (Border Gateway Protocol)**. It manages the routes between countries and massive operators (like Orange, Google, or AT&T).

\`\`\`cisco
! Simplified BGP configuration example
router bgp 65000
 neighbor 1.1.1.1 remote-as 65001
 description Link to neighboring provider
 network 192.168.10.0 mask 255.255.255.0
!
\`\`\`

> **WARNING:** A single configuration error in BGP can "erase" an entire country from the Internet. This has happened to Facebook and major ISPs in the past.

### Conclusion
Routing is the art of finding the best path in a maze that changes every second. Without these silent machines sitting in air-conditioned rooms, the Internet would be nothing but a pile of useless cables.

> **NOTE:** Next time you load a YouTube video, think about the dozens of routers that collaborated to bring those pixels to your screen!
`
    },
    fr: {
      title: "Routage Réseau : Le GPS d'Internet",
      category: "Réseau 101",
      date: "2026-02-08T10:00:00Z",
      readTime: "8 min",
      image: "/routing.jpg",
      tags: ["Routage", "Bases", "Internet", "BGP"],
      content: `
### Comment vos données voyagent-elles à travers le monde ?

Quand vous envoyez un message WhatsApp à un ami à l'autre bout de la planète, votre téléphone ne connaît pas réellement le chemin. Il ne sait pas où se trouve physiquement le serveur. Pourtant, votre message arrive en moins d'une seconde.

Bienvenue dans le monde du **Routage Réseau**.

### 1. La métaphore du service postal
Imaginez que vous envoyez une lettre. Vous ne connaissez pas le facteur de la ville de destination. Vous déposez simplement votre lettre dans la boîte.
* **Le Facteur :** C'est le **Routeur**. Son seul travail est de regarder l'adresse sur l'enveloppe (l'**Adresse IP**) et de décider vers quel bureau de poste l'envoyer ensuite.
* **Le Paquet :** Vos données sont découpées en petits morceaux appelés "paquets", chacun ayant son adresse de destination.

> **IMPORTANT :** Un routeur ne connaît pas tout le chemin ! Il connaît seulement la "prochaine étape" (le **Next Hop**) pour se rapprocher de la destination.

### 2. Comment le routeur décide-t-il ? (Table de Routage)
Chaque routeur possède un cerveau appelé **Table de Routage**. Imaginez cela comme un immense panneau de signalisation à la jonction d'une autoroute.

\`\`\`text
DESTINATION        | INTERFACE SORTIE    | DISTANCE (Sauts)
------------------|---------------------|-----------------
Réseau A (Londres)| Port 1               | 2 sauts
Réseau B (Tokyo)  | Port 2               | 8 sauts
Défaut (Web)      | Port 3               | ???
\`\`\`

### 3. Routage Statique vs Dynamique
Il y a deux façons pour un routeur d'apprendre son chemin :

* **Routage Statique :** Un ingénieur tape manuellement le chemin. C’est précis, mais si un câble est coupé, les données restent bloquées.
* **Routage Dynamique :** Les routeurs se parlent entre eux ! Ils disent : *"Hé, j'ai trouvé un raccourci vers les serveurs de Google !"*. Ils s'adaptent automatiquement aux pannes.

> **ASTUCE :** C'est pourquoi Internet est si résilient. Si un câble sous-marin est coupé entre l'Europe et les USA, les routeurs le détectent en quelques secondes et redirigent le trafic via une autre route.

### 4. BGP : Le Roi d'Internet
Sur le web mondial, il existe un protocole "Boss" que j'utilise tous les jours : **BGP (Border Gateway Protocol)**. Il gère les routes entre les pays et les opérateurs massifs (comme Orange, Google ou AT&T).

\`\`\`cisco
! Exemple simplifié de configuration BGP
router bgp 65000
 neighbor 1.1.1.1 remote-as 65001
 description Link to neighboring provider
 network 192.168.10.0 mask 255.255.255.0
!
\`\`\`

> **ATTENTION :** Une seule erreur de configuration dans BGP peut "effacer" un pays entier d'Internet. C'est déjà arrivé à Facebook et à de grands fournisseurs d'accès par le passé.

### Conclusion
Le routage est l'art de trouver le meilleur chemin dans un labyrinthe qui change chaque seconde. Sans ces machines silencieuses installées dans des salles climatisées, Internet ne serait rien d'autre qu'un tas de câbles inutiles.
`
    }
  },
  "2": {
    en: {
      title: "OSI: The 7 Layers That Power the Internet",
      category: "Networking 101",
      date: "2026-02-10T01:00:00Z",
      readTime: "15 min",
      image: "/OSIMODEL.jpg",
      tags: ["OSI", "7 layers", "TCP/IP", "networking"],
      content: `
One click. Message sent. It's magic and it feels so easy 🤓. **But is it as easy as it looks? 🤔**

Behind this simplicity hides the **OSI Model** 🕵️.

## **1. Definition and History**
**OSI** stands for **Open Systems Interconnection**. It's a conceptual model created by the International Organization for Standardization that enables diverse communication systems to communicate using **standard protocols**.

The OSI model was born in the 1970s due to rivalry between 3 different architectures: DSA, DNA, and SNA. To solve compatibility issues, **Charles Bachman** proposed the OSI model in 1978.

## **2. Functionality and Advantages**

The OSI Model splits communication into **seven abstract layers**:

### **VII. The Application Layer**
The closest to the user. Browsers use **HTTPS/HTTP** and email clients use **SMTP**. Your actual app (like Chrome) is NOT the layer, the protocol is.

### **VI. The Presentation Layer**
Responsible for **Translation**, **Encryption** (SSL/TLS), and **Compression**. It ensures data is presentable for the next layer.

### **V. The Session Layer**
Opens, manages, and closes the communication "session". It uses **checkpoints** to ensure data integrity during long transfers.

### **IV. The Transport Layer**
Handles end-to-end communication. It breaks data into **segments**. Protocols: **TCP** (Reliable) and **UDP** (Fast).

### **III. The Network Layer**
Handles transfer between different networks. It breaks segments into **packets** and finds the best path (**Routing**).

### **II. The Data Link Layer**
Handles data transfer between devices on the **same network**. It breaks packets into **frames** and manages MAC addresses.

### **I. The Physical Layer**
The hardware: cables, switches, and radio waves. It converts everything into a **bit stream** (1s and 0s).

**Conclusion:** It allows your Samsung to talk to an iPhone. Today TCP/IP dominates, but it was built on these OSI principles.
`
    },
    fr: {
      title: "OSI : Les 7 Couches qui Propulsent Internet",
      category: "Réseau 101",
      date: "2026-02-10T01:00:00Z",
      readTime: "15 min",
      image: "/OSIMODEL.jpg",
      tags: ["OSI", "7 couches", "TCP/IP", "réseau"],
      content: `
Un clic. Message envoyé. Streaming, jeux en ligne ou réunions. C'est magique et cela semble si facile 🤓. **Mais est-ce aussi simple qu'il n'y paraît ? 🤔**

Derrière cette simplicité se cache le **Modèle OSI** 🕵️.

## **1. Définition et Histoire**

**OSI** signifie **Open Systems Interconnection**. C'est un modèle conceptuel créé par l'Organisation internationale de normalisation qui permet à divers systèmes de communication de communiquer à l'aide de **protocoles standard**.

Ce modèle analyse le flux de données à travers **sept couches**, de l'expéditeur au destinataire.

Le modèle OSI est né dans les années 1970 en raison de la rivalité entre 3 architectures différentes (DSA, DNA, SNA). Pour résoudre les problèmes de compatibilité, **Charles Bachman** a proposé le modèle OSI en 1978.

## **2. Fonctionnement et Avantages**

Le modèle OSI divise la communication en **sept couches abstraites** :

### **VII. La Couche Application**
La plus proche de l'utilisateur. Les navigateurs utilisent **HTTPS/HTTP** et les clients mail utilisent **SMTP**. Votre application (comme Chrome) n'est PAS la couche, le protocole l'est.

### **VI. La Couche Présentation**
Responsable de la **Traduction**, du **Chiffrement** (SSL/TLS) et de la **Compression**. Elle s'assure que les données sont présentables pour la couche suivante.

### **V. La Couche Session**
Ouvre, gère et ferme la "session" de communication. Elle utilise des **points de contrôle** pour garantir l'intégrité des données lors de transferts longs.

### **IV. La Couche Transport**
Gère la communication de bout en bout. Elle découpe les données en **segments**. Protocoles : **TCP** (Fiable) et **UDP** (Rapide).

### **III. La Couche Réseau**
Gère le transfert entre différents réseaux. Elle découpe les segments en **paquets** et trouve le meilleur chemin (**Routage**).

### **II. La Couche Liaison de Données**
Gère le transfert de données entre appareils sur le **même réseau**. Elle découpe les paquets en **trames** et gère les adresses MAC.

### **I. La Couche Physique**
Le matériel : câbles, commutateurs et ondes radio. Elle convertit tout en un **flux de bits** (1 et 0).

**Note :** Cela permet à votre Samsung de parler à un iPhone. Aujourd'hui, le TCP/IP domine, mais il a été construit sur ces principes OSI.
`
    }},
    "3": {
    en: {
      title: "TCP/IP: The 4-Layer Standard",
      category: "Networking 101",
      date: "2026-02-12T10:00:00Z",
      readTime: "20 min",
      image: "/tcpip.jpg",
      tags: ["TCP/IP", "Networking", "OSI", "4 Layers"],
      content: `
Internet runs on a hierarchical architecture that's often counterintuitive. After exploring the OSI model *(7 theoretical layers)*, let's dive into **TCP/IP** 🫡 — the stack that powers the real web.

**Why switch from OSI?** "Why change models, and why does TCP/IP seem to replace OSI?"

Simple: **OSI system is an *elegant theory* 🫠, But TCP/IP is *practical reality***.

You can already perceive the difference between these two models. But it is not all. So let me guide you to the network area 😉.

---

## **1. Definition and History**
**TCP** stands for **Transmission Control Protocol**. It is a communication standard that allows **application programs and computer devices** to exchange messages over a network. It is designed to send packets over the Internet and ensure the successful transmission of data and messages over networks.

> **History:** In the 1960s, officials at **DARPA** (Defense Advanced Research Projects Agency) realized that their computer fleet was fragmented. Computers from different manufacturers could only talk to machines of the same brand. Moreover, the system was highly *centralized*, making it extremely **vulnerable** in case of destruction of one of the sites (Cold War context 💂).

Following this observation, the project was assigned to DARPA engineers.
> **Important:** *This protocol had to allow not only heterogeneous machines to dialogue but also to build a non-centralized network where information could be distributed. Data sent had to arrive without loss to the recipient, regardless of failures and incidents encountered along the way.*

### **First Experiments**
To achieve this protocol, researchers used a theory advanced by Paul Baran and Donald Davies based on **"Packet Switching"**: the message to be sent is cut into packets, packets that take different routes on the network and are reordered at arrival to reconstituer the initial message.
This first breakthrough marked the beginning of the **ARPANET** project.

---

## **2. How it works in practice**
When you send a photo by email, it doesn't travel as one big file. Instead, TCP divides it into smaller packets. Each packet is stamped with your IP address and the destination IP address, then sent into the network.

* **Routing:** Packets don't always take the same path. One might go through a router in New York, another through London, before both reach the recipient in Paris.
* **Reassembly:** Once all data packets arrive, TCP reassembles them into the original photo, ensuring every packet is in the correct order.

> 📖 **Analogy:** A useful analogy is sending a book **one page at a time**. Each page is numbered and has the destination IP written on it so the recipient can put them back in order. If **page 45** is missing, TCP notices it and asks for a resend.

If you use a VPN, your data might take a specific route to help unblock a video stream or protect against spying.

---

## **3. THE FOUR LAYERS OF TCP/IP**

### **IV. THE APPLICATION LAYER**
This is what we actually interact with in browsers, emails, video calls, games, and more.
* **Protocols:** HTTP, HTTPS, FTP, SMTP.

### **III. THE TRANSPORT LAYER**
The transport layer ensures data reliability.
* **TCP:** The most common choice here (Reliability).
* **UDP:** Used when speed is more important than perfection (e.g., video streaming sites often choose UDP).

### **II. THE INTERNET LAYER**
The Internet layer is where data is divided into packets and labeled with specific routing instructions and **IP Addresses** to guide the message to the right destination.

### **I. THE LINK LAYER**
The link layer handles physical and local connections, such as Ethernet cables, Wi-Fi, or mobile data. This communication happens on the local network, the first step of a path that could span the globe.

> **Note:** Once again, you don't have to think about these layers when browsing, but they are all in play. For example, when you load a website, your computer connects via Wi-Fi (**Link**), uses an IP address to find the right server (**Internet**), employs TCP to deliver every packet correctly (**Transport**), and finally displays the page in your browser (**Application**).

---

## **Conclusion**
Understanding **TCP/IP** is like understanding the foundation of a building. While the **OSI model** remains a vital educational tool, TCP/IP is the "engine" that actually drives the global internet. 

In a world moving toward Cloud, IoT, and Edge Networking, these four layers remain the universal language of every connected device. Remember: **it all comes down to how these packets find their way home.** 🚀

---

### **What's Next?** 🔍
*After this cognitive immersion into the networking field, let's now try to dissect the famous **IP addresses** 🧐. It's a fairly recurring manipulation but often overlooked. However, it plays a crucial role in security... See you in the next log!*
`
    },
    fr: {
      title: "TCP/IP : La Norme des 4 Couches",
      category: "Réseau 101",
      date: "2026-02-12T10:00:00Z",
      readTime: "20 min",
      image: "/tcpip.jpg",
      tags: ["TCP/IP", "4 couches", "OSI", "réseau"],
      content: `
L'Internet repose sur une architecture hiérarchique souvent peu intuitive. Après avoir exploré le modèle OSI *(7 couches théoriques)*, passons au modèle **TCP/IP** 🫡 — celui qui fait tourner le web réel.

**Pourquoi changer de modèle ?** "Pourquoi dit-on que TCP/IP remplace l'OSI ?"

Simple : **Le système OSI est une *théorie élégante* 🫠, mais TCP/IP est la *réalité pragmatique***.

Vous pouvez déjà percevoir la différence entre ces deux modèles. Mais ce n'est pas tout. Laissez-moi vous guider dans la zone réseau 😉.

---

## **1. Définition et Histoire**
**TCP** signifie **Transmission Control Protocol**. C'est un standard de communication qui permet aux **programmes d'application et aux appareils informatiques** d'échanger des messages sur un réseau. Il est conçu pour envoyer des paquets sur Internet et assurer la transmission réussie des données et des messages sur les réseaux.

> **Histoire :** Dans les années 60, les responsables de la **DARPA** (Defense Advanced Research Projects Agency) se sont rendus compte que le parc d'ordinateurs utilisés dans le domaine militaire étant composé de machines de **constructeurs différents**, seuls les ordinateurs de même marque pouvaient communiquer entre eux. De plus, le système était très *centralisé* donc très **vulnérable** en cas de destruction d'un des sites (contexte de "guerre froide 💂").

À la suite d'un tel constat, le projet de création du modèle fut attribué aux ingénieurs de la DARPA.
> **Important :** *Ce protocole devait permettre non seulement à des machines hétérogènes de dialoguer entre elles mais également de permettre de construire un réseau non centralisé dans lequel l'information pouvait être distribuée. Les informations envoyées devaient parvenir sans perte au destinataire, quelles que soient les pannes et les incidents rencontrés en cours de route.*

### **Premières Expériences**
Pour réaliser ce protocole, les chercheurs utiliseront une théorie avancée par Paul Baran et Donald Davies basée sur la **"commutation de paquets"** : le message à envoyer est découpé en paquets, paquets qui empruntent des routes différentes sur le réseau et sont reclassés à l'arrivée pour reconstituer le message initial.
Cette première avancée va marquer le début du projet **ARPANET**.

---

## **2. Comment ça fonctionne en pratique**
Lorsque vous envoyez une photo par e-mail, elle ne voyage pas en tant que gros fichier. Au lieu de cela, TCP la divise en paquets plus petits. Chaque paquet est estampillé avec votre adresse IP et l’adresse IP de destination, puis envoyé dans le réseau.

* **Routage :** Les paquets ne prennent pas toujours le même chemin. L’un peut passer par un routeur à New York, un autre par Londres, avant que les deux n’atteignent le domicile du destinataire à Paris.
* **Réassemblage :** Une fois que tous les paquets de données arrivent, TCP les réassemble dans la photo originale, en s’assurant que chaque paquet est dans le bon ordre.

> 📖 **Analogie :** Une analogie utile est d’envoyer un livre **une page
 
---

## **Conclusion**
Comprendre le modèle **TCP/IP**, c'est comprendre les fondations mêmes de l'édifice numérique. Si le modèle OSI reste un outil pédagogique indispensable, le TCP/IP est le "moteur" réel qui propulse l'Internet mondial.

Dans un monde qui évolue vers le Cloud et l'IoT, ces quatre couches restent le langage universel de chaque appareil connecté. Souvenez-vous : **tout repose sur la capacité de ces paquets à retrouver leur chemin.** 🚀

---

### **À suivre...** 🔍
*Après cette immersion cognitive dans le domaine du réseau, cherchons maintenant à décortiquer les fameuses **adresses IP** 🧐. C'est une manipulation assez récurrente mais très négligée. Cependant, elle joue un rôle crucial dans la sécurité... Rendez-vous au prochain log !*
`}}};