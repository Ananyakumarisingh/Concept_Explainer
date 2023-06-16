# __SD__

## <a href="https://rust-fire-2df.notion.site/9-1-System-Design-Intro-5ec69020edf1477b9700da307e9788ee"><b><u>System Design Intro (With micro services)</u></b></a>

## __Characteristics__ -

__Performance and Scalability:__ A service is scalable if it results in increased performance in a manner proportional to resources added. Generally, increasing performance means serving more units of work, but it can also be to handle larger units of work, such as when datasets grow.1

Another way to look at performance vs scalability:
- If you have a performance problem, your system is slow for a single user.
- If you have a scalability problem, your system is fast for a single user but slow under heavy load.

__Latency and Throughput__

__Latency__ is the time to perform some action or to produce some result.

__Throughput__ is the number of such actions or results per unit of time.

Generally, you should aim for maximal throughput with acceptable latency.

`Examples`

The following manufacturing example should clarify these two concepts:

A bakery produces different types of baked goods. It takes two hours to make a batch of bread and they produce sixty loaves per day.

The latency is: 2 hours.

The throughput is: 60 loaves / day or 30 loaves / hour.

An assembly line is manufacturing cars. It takes eight hours to manufacture a car and that the factory produces one hundred and twenty cars per day.

The latency is: 8 hours.

The throughput is: 120 cars / day or 5 cars / hour.

__Latency and throughput can be compared to two different aspects of a trip.__

__Latency__ is like the total time it takes to reach a destination, similar to the travel time of a trip. For example, if you want to reach a friend's house, the latency would be the amount of time it takes to get there from your starting point.

__Throughput__, on the other hand, is like the number of passengers or packages that can be transported in a single trip, similar to the number of cars that can travel on a road in a given time. For example, if you are driving a delivery truck, the throughput would be the number of packages you can deliver in a given amount of time.

- Latency
https://gist.github.com/hellerbarde/2843375

__Latency numbers every programmer should know__

| __Activity__ | __Time (ns)__ | __Time (µs)__ |
| :------ | :------ | :------ |
| L1 cache reference	0.5	 |  |
| Branch mispredict |	5	 |  |
| L2 cache reference |	7	 |  |
| Mutex lock/unlock |	25	 |  |
| Main memory reference |	100	 |  |
| Compress 1K bytes with Zippy |	3,000 |	3 |
| Send 2K bytes over 1 Gbps network |	20,000 |	20 |
| SSD random read |	150,000 |	150 |
| Read 1 MB sequentially from memory |	250,000 |	250 |
| Round trip within same datacenter |	500,000 |	0.5 |
| Read 1 MB sequentially from SSD* |	1,000,000 |	1 |
| Disk seek |	10,000,000 |	10 |
| Read 1 MB sequentially from disk |	20,000,000 |	20 |
| Send packet CA -> Netherlands -> CA  |	150,000,000	| 150 |


- __Throughput__

There are several factors that can affect the throughput of a system:

1. __System resources:__ The availability of resources such as CPU, memory, disk I/O, and network bandwidth can significantly impact the throughput of a system.
For example, if the CPU is overutilized and running at 100% utilization, it can limit the throughput of a system.

2. __Workload:__ The type and intensity of the workload being processed can affect the throughput of a system. For example, a system processing many small transactions will have a lower throughput than a system processing fewer, larger transactions.

    `For example`, a system processing a high number of complex database queries will have a lower throughput compared to a system processing simpler web page requests.
3. __Network bandwidth:__ The speed and reliability of the network connection can greatly impact the throughput of a system, especially for systems that rely on network communication.

    `For example`, a system with a slow and unreliable internet connection will have a lower throughput compared to a system with a fast and stable connection.
4. __Concurrent connections:__ The number of concurrent connections can also impact the throughput of a system. Too many connections can lead to congestion and decreased performance.

    `For example`, a web server hosting a popular website will have lower throughput if it is handling too many concurrent connections from users.

5. __Software algorithms:__ The algorithms used to process data and complete transactions can impact the throughput of a system. More efficient algorithms can improve the throughput of a system.

    `For example`, a system using an inefficient sorting algorithm will have lower throughput compared to a system using a more efficient sorting algorithm.
6. __Queuing and Scheduling:__ The way that requests are queued and scheduled for processing can affect the throughput of a system. An effective queuing and scheduling strategy can help to maximize the throughput of a system.

    `For example`, a system that processes requests in a first-come, first-serve manner will have lower throughput compared to a system using a more sophisticated scheduling algorithm that prioritizes high-priority requests.

- __Availability__

High availability refers to how often a system is working properly and able to be used. It is usually expressed as a percentage, with 100% meaning that the system never stops working. Some common services have an availability rate between 99% and 100%.

A service level agreement (SLA) is a contract between a service provider and a customer that states the amount of time the service will be available for use. Big cloud providers such as Amazon, Google, and Microsoft promise an availability rate of 99.9% or higher.

The availability rate is often described using "nines," with more nines meaning a higher level of availability.

Here is a table that shows the relationship between availability rate expressed in nines and the expected downtime per day and per year:

|  __Availability (nines)__	|  __Downtime per year__	|  __Downtime per day__ |
| :------ | :------ | :------ |
| 99% |	3.65 days |	10.96 minutes  |
| 99.9% |	8.76 hours |	43.8 minutes  |
| 99.99% |	52.56 minutes |	4.38 minutes  |
| 99.999% |	5.26 minutes |	25.9 seconds  |
| 99.9999% |	31.5 seconds |	2.59 seconds  |


- __Consistency__

In a consistent system, all __nodes see the same data simultaneously__. If we perform a read operation on a consistent system, it should return the value of the most recent write operation. The read should cause all nodes to return the same data. All users see the same data at the same time, regardless of the node they connect to. When data is written to a single node, it is then replicated across the other nodes in the system.

- __CAP Theorem__

Consistency, availability, and partitions

<a href="https://www.turing.com/kb/cap-theorem-for-system-design">What Is CAP Theorem & Ways to Implement It In System Design</a>

- Requirement Gathering

When designing a system, it is important to ensure that we are addressing the right problem. To help ensure this, it is helpful to divide the requirements into two groups:

1. Direct Client Needs: These are requirements that clients need directly, such as being able to send messages in near real-time to friends. For example, in a messaging app, the direct client need is the ability to send messages instantly and receive messages as soon as they are sent.

2. Indirect Needs: These are requirements that are necessary for the system to function properly, but not directly requested by clients. For example, in a messaging app, the indirect need is to ensure that messaging service performance does not degrade with increasing user load. This means that even if the number of users on the app increases, the messaging service should continue to work smoothly and efficiently, with no lag or delay in message delivery.

It is important to identify both direct and indirect requirements, as they are both critical to the success of a system. Focusing only on direct requirements can result in a system that meets client needs but is not sustainable or scalable in the long run. On the other hand, ignoring direct requirements in favor of indirect needs can result in a system that is efficient but does not meet client needs. By balancing both direct and indirect requirements, we can design a system that is effective, efficient, and sustainable.