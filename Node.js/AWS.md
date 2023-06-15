Intro to AWS
Before we get to AWS, the first part is to get an overview of the internet, and how systems work on the internet

DNS - Domain Name System
DNS (Domain Name System) is a hierarchical and decentralized naming system for Internet connected resources. DNS maintains a list of domain names along with the resources, such as IP addresses, that are associated with them.

The most prominent function of DNS is the translation of human-friendly domain names (such as mozilla.org) to a numeric IP address (such as 151.106.5.172); this process of mapping a domain name to the appropriate IP address is known as a DNS lookup. By contrast, a reverse DNS lookup (rDNS) is used to determine the domain name associated with an IP address.

www.ex­amp­le.com. => 93.184.21­6.119

Elements of the name:

dot: at the end is the root [first zone]
com: top level domain [TLD] [second zone]
example: domain [third zone]
www: subdomain [forth zone]
What is a Domain Name?
Domain names are a key part of the Internet infrastructure. They provide a human-readable address for any web server available on the Internet.

Any Internet-connected computer can be reached through a public IP address, either an IPv4 address (e.g. 173.194.121.32) or an IPv6 address (e.g., 2027:0da8:8b73:0000:0000:8a2e:0370:1337).

Computers can handle such addresses easily, but people have a hard time finding out who's running the server or what service the website offers. IP addresses are hard to remember and might change over time.

To solve all those problems we use human-readable addresses called domain names.

Structure of domain names
A domain name has a simple structure made of several parts (it might be one part only, two, three...), separated by dots and read from right to left:

Each of those parts provides specific information about the whole domain name.

TLD (Top-Level Domain).
TLDs tell users the general purpose of the service behind the domain name. The most generic TLDs (.com, .org, .net) don't require web services to meet any particular criteria, but some TLDs enforce stricter policies so it is clearer what their purpose is. For example:

Local TLDs such as .us, .fr, or .se can require the service to be provided in a given language or hosted in a certain country — they are supposed to indicate a resource in a particular language or country. TLDs containing .gov are only allowed to be used by government departments. The .edu TLD is only for use by educational and academic institutions. TLDs can contain special as well as latin characters. A TLD's maximum length is 63 characters, although most are around 2–3.

The full list of TLDs is maintained by ICANN.

Buying a domain name
Who owns a domain name? You cannot “buy a domain name”. This is so that unused domain names eventually become available to use again by someone else. If every domain name was bought, the web would quickly fill up with unused domain names that were locked and couldn't be used by anyone.

Instead, you pay for the right to use a domain name for one or more years. You can renew your right, and your renewal has priority over other people's applications. But you never own the domain name.

Companies called registrars use domain name registries to keep track of technical and administrative information connecting you to your domain name.

How much does it cost to do something on the Web?
When launching a website, you may spend nothing, or your costs may go through the roof. In this article we discuss how much everything costs, and how you get what you pay (or don't pay).

Docs

DNS records
A: ipv4 address [www.ex­amp­le.c­om:80]

AAAA: ipv6 address [www.ex­amp­le.c­om:80]

MX: mail exchanger [smtp.e­xam­ple.com:25]

CNAME: alias resolves to another domain name [irc.ex­amp­le.c­om­:6669]

TXT: text [darkne­t.e­xam­ple.co­m:1337]

NS: name server [ns1.ex­amp­le.com]

ANY: any record type that exists for the subject of the query

HINFO: host inform­ation. Inform­ation about the CPU type and operating system of subject of the query

WKS: well-known services or applic­ations available on this host

PTR: pointer record. Returns a host name for an IP address

SOA: start of Authority record

SRV: service record is a specif­ication of data in the Domain Name System defining the location, i.e. the hostname and port number, of servers for specified services

whois
Checks information about ownership of a domain name

$ whois [domain] - querying databases that store the registered users or assignees, such as a domain name, an IP addresses
Example: $ whois www.masaischool.com

Domain Name: masaischool.com
Registry Domain ID: 2370838678_DOMAIN_COM-VRSN
Registrar WHOIS Server: whois.godaddy.com
Registrar URL: https://www.godaddy.com
Updated Date: 2021-03-24T11:03:47Z
Creation Date: 2019-03-19T08:22:38Z
Registrar Registration Expiration Date: 2022-03-19T08:22:38Z
Registrar: GoDaddy.com, LLC
Registrar IANA ID: 146
Registrar Abuse Contact Email: abuse@godaddy.com
Registrar Abuse Contact Phone: +1.4806242505
Domain Status: clientTransferProhibited https://icann.org/epp#clientTransferProhibited
Domain Status: clientUpdateProhibited https://icann.org/epp#clientUpdateProhibited
Domain Status: clientRenewProhibited https://icann.org/epp#clientRenewProhibited
Domain Status: clientDeleteProhibited https://icann.org/epp#clientDeleteProhibited
Registrant Organization: Cryptopy Technologies Private Limited
Registrant State/Province: Maharashtra
Registrant Country: IN
Registrant Email: Select Contact Domain Holder link at https://www.godaddy.com/whois/results.aspx?domain=masaischool.com
Tech Email: Select Contact Domain Holder link at https://www.godaddy.com/whois/results.aspx?domain=masaischool.com
Admin Email: Select Contact Domain Holder link at https://www.godaddy.com/whois/results.aspx?domain=masaischool.com
Name Server: NS-693.AWSDNS-22.NET
Name Server: NS-151.AWSDNS-18.COM
Name Server: NS-1973.AWSDNS-54.CO.UK
Name Server: NS-1174.AWSDNS-18.ORG
DNSSEC: unsigned
URL of the ICANN WHOIS Data Problem Reporting System: http://wdprs.internic.net/
>>> Last update of WHOIS database: 2021-12-28T14:15:08Z <<<
DNS Prefetch
DNS-prefetch is an attempt to resolve domain names before resources get requested. This could be a file loaded later or link target a user tries to follow.

When a browser requests a resource from a (third party) server, that cross-origin’s domain name must be resolved to an IP address before the browser can issue the request. This process is known as DNS resolution. While DNS caching can help to reduce this latency, DNS resolution can add significant latency to requests. For websites that open connections to many third parties, this latency can significantly reduce loading performance.

dns-prefetch helps developers mask DNS resolution latency. The HTML element offers this functionality by way of a rel attribute value of dns-prefetch. The cross-origin domain is then specified in the href attribute:

Best Practices

CORS

DNS Providers
List of managed DNS Providers

AWS Route 53
Amazon Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service. It is designed to give developers and businesses an extremely reliable and cost effective way to route end users to Internet applications by translating names like www.example.com into the numeric IP addresses like 192.0.2.1 that computers use to connect to each other. Amazon Route 53 is fully compliant with IPv6 as well.

AWS Lightsail
Amazon Lightsail is a virtual private server (VPS) provider and is the easiest way to get started with AWS for developers, small businesses, students, and other users who need a solution to build and host their applications on cloud.

AWS EC2
An Amazon EC2 instance is a virtual server in Amazon's Elastic Compute Cloud (EC2) for running applications on the Amazon Web Services (AWS) infrastructure

Load Balancing
A load balancer distributes incoming application traffic across multiple EC2 instances in multiple Availability Zones. This increases the fault tolerance of your applications. Elastic Load Balancing detects unhealthy instances and routes traffic only to healthy instances.



A load balancer distributes incoming application traffic across multiple EC2 instances in multiple Availability Zones. This increases the fault tolerance of your applications. Elastic Load Balancing detects unhealthy instances and routes traffic only to healthy instances.

Your load balancer serves as a single point of contact for clients. This increases the availability of your application. You can add and remove instances from your load balancer as your needs change, without disrupting the overall flow of requests to your application. Elastic Load Balancing scales your load balancer as traffic to your application changes over time. Elastic Load Balancing can scale to the vast majority of workloads automatically.

Load balancing can be managed with Apache or Nginx, that can redirect users to the correct instances of your application. Genereally a Round Robin algorithm for this. You can read more here

Caching Layer
Redis and Memcached are popular, open-source, in-memory data stores. Although they are both easy to use and offer high performance, there are important differences to consider when choosing an engine. Memcached is designed for simplicity while Redis offers a rich set of features that make it effective for a wide range of use cases.

Scaling DBs
When you are working with a large scale applications, there maybe a time that you want to scale your database. Initially it might be good to scale databases in a vertical manner so as to maintain a simple architecture. If you chose to go horizontal scaling then all your application instances will need to ensure it reaches out to the correct instances to retreive infromation / do operations.

One way to scale a database is by understanding what are read operations and write operations, you can create read replicas for your DB, this will keep a master DB, and a read replica DB that will be used for reading data. By understanding how much of read queries are happening vs write, and by separating the queries on a DB, you can reduce load and optimise. Write quries can update the master database. You can have multiple read replica



Amazon RDS uses the MariaDB, Microsoft SQL Server, MySQL, Oracle, and PostgreSQL DB engines' built-in replication functionality to create a special type of DB instance called a read replica from a source DB instance. The source DB instance becomes the primary DB instance. Updates made to the primary DB instance are asynchronously copied to the read replica. You can reduce the load on your primary DB instance by routing read queries from your applications to the read replica. Using read replicas, you can elastically scale out beyond the capacity constraints of a single DB instance for read-heavy database workloads.

When you create a read replica, you first specify an existing DB instance as the source. Then Amazon RDS takes a snapshot of the source instance and creates a read-only instance from the snapshot. Amazon RDS then uses the asynchronous replication method for the DB engine to update the read replica whenever there is a change to the primary DB instance. The read replica operates as a DB instance that allows only read-only connections. Applications connect to a read replica the same way they do to any DB instance. Amazon RDS replicates all databases in the source DB instance.

AWS S3 (Simple Storage Service)
Object storage built to retrieve any amount of data from anywhere

Amazon Simple Storage Service (Amazon S3) is an object storage service offering industry-leading scalability, data availability, security, and performance. Customers of all sizes and industries can store and protect any amount of data for virtually any use case, such as data lakes, cloud-native applications, and mobile apps. With cost-effective storage classes and easy-to-use management features, you can optimize costs, organize data, and configure fine-tuned access controls to meet specific business, organizational, and compliance requirements.



AWS IAM
AWS Identity and Access Management (IAM) is a web service for securely controlling access to AWS resources. It enables you to create and control services for user authentication or limit access to a certain set of people who use your AWS resources.

Other Services
SES (Email)
SNS (Notification)
SQS (Queue)
Amplify
Lambdas
DynamoDB