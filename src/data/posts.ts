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
    title: "OSI: The 7 Layers That Power the Internet",
    category: "Networking 101",
    date: "2026-02-10T01:20:00Z",
    readTime: "15 min",
    image: "/OSIMODEL.jpg",
    tags: ["OSI", "7 layers", "TCP/IP", "networking"],
    content: `
One click. Message sent. Streaming with friends. Pure magic.

**But behind this simplicity hides the OSI Model** 🕵️

**Man:** So what is this? What's its role? Do we even use it? 😒

*Let's get started 🫡*

## 1. Definition and History

**OSI** stands for **O**pen **S**ystems **I**nterconnection. It's a conceptual model created by the International Organization for Standardization that enables diverse communication systems to communicate using standard protocols.

This model analyzes data flow through **seven layers** from sender to receiver.

**Man:** Nice... I make one action to send email and you tell me it's more complex? 🤔

*For better understanding, let's go back 55 years...*

The OSI model was born in 1970 due to rivalry between 3 different architectures:

1. **DSA** deployed by CII-Honeywell
2. **DNA** from DEC
3. **SNA** from IBM

**Hubert Zimmermann** was recruited in 1971 by INRIA to develop the datagram. He's the creator of the first OSI architecture. Despite his great invention, he faced opposition from the French.

In March 1978, **Charles Bachman** proposed the OSI model based on **seven layers**.

Now the big question: **How does it actually work?**

## 2. Functionality and Advantages

The OSI Model splits communication into **seven abstract layers**, each stacked upon the last. Each layer handles a **specific function**.

Even though modern Internet follows the simpler **TCP/IP suite** more closely, OSI remains **incredibly useful for troubleshooting** network problems - from a laptop that won't connect to websites down for thousands of users.

***What are the 7 layers of the OSI Model?***

## **VII. The Application Layer**

The application layer handles the **specific application** and its standardized communication methods. This layer is **closest to the user**.

**Examples:**
- Browsers communicate using **HTTPS** and **HTTP**
- Email clients use **POP3** (Post Office Protocol v3) and **SMTP** (Simple Mail Transfer Protocol)

**Important**: Some think daily applications belong here. **No, they're not** part of this layer.

## **VI. The Presentation Layer**

This layer makes data **presentable** for applications. It's responsible for:
- **Translation** between different encoding formats
- **Encryption** (SSL/TLS)
- **Compression** of data

**Key role**: Two devices may use different encodings. Layer 6 **translates** incoming data so the receiving application's layer 7 can understand it.

If communicating over encrypted connection, layer 6 **encrypts** on sender's end and **decrypts** on receiver's end, delivering **unencrypted, readable data** to layer 7.

This layer **compresses** data received from application layer before sending to layer 5.

## **V. The Session Layer**

This layer **opens and closes** communication between devices. The time between opening and closing is called a **session**.

The session layer:
- Keeps sessions open long enough for **complete data transfer**
- **Promptly closes** sessions to avoid wasting resources
- **Synchronizes** data transfer with **checkpoints**

**Example**: Transferring a 100MB file? Session layer sets checkpoints every 5MB.

## **IV. The Transport Layer**

Layer 4 handles **end-to-end communication** between devices.

**Process**:
1. Takes data from session layer
2. Breaks it into **segments**
3. Sends to layer 3

**Receiver side**: Transport layer **reassembles segments** into data session layer can consume.

**Protocols**: **TCP** (reliable) and **UDP** (fast)

## **III. The Network Layer**

Makes **data transfer between different networks** easy.

**If devices are on same network**: Network layer is unnecessary.

**Process**:
- Breaks **segments** from transport layer into **packets**
- **Routes** packets to destination (finds best physical path)
- **Reassembles** packets on receiving device

**See my routing post later!**

## **II. The Data Link Layer**

**Very similar** to network layer, but for **same network** communication only.

**Process**:
- Takes **packets** from network layer
- Breaks into smaller **frames**
- Handles **flow control** and **error control** within the same network

*(Transport layer does flow/error control for inter-network only)*

## **I. The Physical Layer**

**Last but not least**: Includes **physical equipment** - cables, switches, WiFi.

**Key tasks**:
- Converts data into **bit stream** (string of 1s and 0s)
- Both devices must agree on **signal convention** (distinguishing 1s from 0s)

**Final step** before data transmission.

> ⚠️ **Warning**: Layer order matters in OSI model. Don't neglect this!

**Man:** Wow, very smart, but is all this subdivision necessary? 🤔

**Note**: OSI was created to solve **device incompatibility**. Today you message friends on different brands (Samsung, Redmi, iPhone). It also **simplifies maintenance** when transfer problems occur.

**Today TCP/IP dominates**, but it was **built on OSI principles**.

`
}

}