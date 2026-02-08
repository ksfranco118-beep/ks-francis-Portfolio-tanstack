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
Network A (London)| Port 1              | 2 hops
Network B (Tokyo) | Port 2              | 8 hops
Default (Web)     | Port 3              | ???
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
    title: "TanStack vs Next.js",
    category: "Frontend",
    date: "2026-01-28T14:30:00Z",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200",
    tags: ["React", "Routing", "Type-Safe"],
    content: `
Pourquoi le **TanStack Router** devient le standard pour les applications centrées sur la performance ?

1. **Type-safety** totale sans génération de code complexe.
2. **Gestion du cache** ultra-fine avec TanStack Query.
3. **Poids plume** comparé au moteur de Next.js.
`
  }
}