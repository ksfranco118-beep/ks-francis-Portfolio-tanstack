export const BLOG_POSTS: Record<string, any> = {
  "1": {
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
DESTINATION       | EXIT INTERFACE      | DISTANCE (Hops)
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
  "2": {
    title: "OSI: The 7 Layers That Power the Internet",
    category: "Networking 101",
    date: "2026-02-10T01:00:00Z", // Date mise à jour pour être plus récente
    readTime: "15 min",
    image: "/OSIMODEL.jpg",
    tags: ["OSI", "7 layers", "TCP/IP", "networking"],
    content: `
One click. Message sent. Streaming, online gaming, or online meetings. It's magic and it feels so easy 🤓. **But is it as easy as it looks? 🤔**

Behind this simplicity hides the **OSI Model** 🕵️.

> "Most people talk about it without ever getting to the point."


**Man:** So what is this? What's its role? Do we even use it? 😒

*Let's get started 🫡*

## **1. Definition and History**

**OSI** stands for **Open Systems Interconnection**. It's a conceptual model created by the International Organization for Standardization that enables diverse communication systems to communicate using **standard protocols**.

This model analyzes data flow through **seven layers** from sender to receiver.

**Man:** You said sender to receiver 🤔. Why do I never see this?

**Log:** Think of it as a standardized sequence; every bit of data is subjected to these steps before it can be transmitted.

*For better understanding, let's go back 55 years...*

The OSI model was born in the 1970s due to rivalry between 3 different architectures:
1. **DSA** (CII-Honeywell)
2. **DNA** (DEC)
3. **SNA** (IBM)

**Hubert Zimmermann** was recruited in 1971 by INRIA to develop the datagram. He's the creator of the first OSI architecture. Despite his great invention, he faced opposition at first. In March 1978, **Charles Bachman** proposed the OSI model based on seven layers.

**Man:** Why do we even need this subdivision? 🤨

> **Log:** Pay close attention: In the early days of the Internet, firms manufactured different devices that couldn't talk to each other. There was a major **compatibility problem**. We all need to send and receive data seamlessly. To solve these issues and make maintenance easier, the OSI model was born.

Now the big question: **How does it actually work?**

## **2. Functionality and Advantages**

The OSI Model splits communication into **seven abstract layers**, each stacked upon the last.

***What are the 7 layers? (Order is important 👇)***

## **VII. The Application Layer**
The closest to the user. Browsers use **HTTPS/HTTP** and email clients use **SMTP**. 
*Note: Your actual app (like Chrome) is NOT the layer, the protocol is.*

## **VI. The Presentation Layer**
Responsible for **Translation**, **Encryption** (SSL/TLS), and **Compression**. It ensures data is presentable for the next layer.

## **V. The Session Layer**
Opens, manages, and closes the communication "session". It uses **checkpoints** to ensure data integrity during long transfers.

## **IV. The Transport Layer**
Handles end-to-end communication. It breaks data into **segments**. 
*Protocols: TCP (Reliable) and UDP (Fast).*

## **III. The Network Layer**
Handles transfer between different networks. It breaks segments into **packets** and finds the best path (**Routing**).

> **For more information on this, check out my 👉 [Log_001: Network  Routing](/blog/1).**

## **II. The Data Link Layer**
Handles data transfer between devices on the **same network**. It breaks packets into **frames** and manages MAC addresses.

## **I. The Physical Layer**
The hardware: cables, switches, and radio waves. It converts everything into a **bit stream** (1s and 0s).

---

**Man:** Wow, smart, but is all this subdivision necessary? 🤔

**Note:** Yes! It allows your Samsung to talk to an iPhone, and it helps engineers find exactly where a problem is. **Today TCP/IP dominates, but it was built on these OSI principles.**

`
}}