---
layout: post
title: Sales Tracking App
excerpt: <a id="img-div1" class="excerpt-link" style="position:relative" href="https://kevinrosenfield.com/clickstream-analytics/"><img src="/images/clickstream.png" width = "50%", height = "auto" alt= ""><div id="img-box1" class="img-box">Read More</div></a>
---
<div style="text-align: left">

<p>
Senior management at Indeed recognized a lack of alignment between the UX strategies of different product teams, By viewing adjacent Indeed products as separate, product teams risked creating a disjointed end-to-end user experience. To resolve this issue, they directed the Product Organization to create a unified framework for design, product management, and UX research, emphasizing the need to break down artificial boundaries between products to ensure a seamless user experience. I conducted foundational quantitative research and proof-of-concept development to initiate clickstream analytics research across all employer-facing products.</p>
</p>

<h2>What are Clickstream Analytics?</h2>

<p>
"The collection, analysis, and reporting of data detailing which website pages a user visits and is what order." - <a href src= "cxtoday.com">cxtoday.com</a>
"The recording of what a user click while browsing the web." - <a href src= "aunalytics.com">aunalytics.com</a>

</p>

<p>
Indeed's employer-facing products are designed to deliver an efficient, intuitive user experience. However, users are not constrained to the paths we set out for them. Understanding how users actually navigate digital products at scale requires mountains of behavioral data, such as chronological click and page view records.
</p>

<p>
I was tasked with discovering, demystifying, and standardizing the needed data so that we could conduct quantitative analyses of end-to-end user journeys. We established three goals for this work, one short-term, one medium-term, and one long-term.
</p>

<p>
Our work served as a first step in an ambitious plan to build a cloud-based clickstream analytics tool that could be used by technical and non-technical internal users to analyze user journeys across any product funnel and user segment in real-time.
</p>

<p>
My work was part proof-of-concept, because Indeed had never conducted clickstream analytics work. We wanted to show product teams the power of clickstream analytics in an effort to get buy-in for our long-term goals from team leaders.
</p>

<p>
In the short-term, we were interested in testing some of the least complex hypotheses we had about user journeys. I made substantive discoveries that led to recommendations to improve user navigation across our products.

Complex clickstream analytics requires a particular sort of data pipeline that we simply did not yet have. My clickstream analytics relied on labor-intensive data processing, so it was not practical to attempt to conduct such analyses at scale just yet.
</p>

<p>
My efforts to conduct clickstream analytics research were guided by findings from other lines of inquiry. Jobs-to-be-done (JTBD) mixed-methods research revealed the diverse goals that users pursue throughout the hiring journey, while expert review of each product funnel grounded these findings in concrete steps. Additionally, other teams conducted intercept surveys to collect satisfaction data and segmented users into distinct classes based on their unique goals and experiences.
</p>

<p>
To implement Clickstream Analytics, we faced obstacles due to data fragmentation, redundancy, incompleteness, and ambiguity. The user behavior records lacked structure and contained irrelevant data, making it difficult to identify pertinent information. Through extensive data analysis, I identified relevant data sources and discovered key insights:

Our Hive and Snowflake databases, Datadog, and Fullstory all contained relevant data.

Each source organized, labeled, and presented the data in a totally different format.

Each product team reported their product's click data differently.
</p>

<p>
To identify the best sources of user behavioral data for clickstream analytics, I performed API calls to several internal data sources and sampled their data. I used the programming language R to clean and standardize the data and prepare it for analysis. This involved transforming the data into the appropriate formats for my planned analyses, so that I could gain valuable insights into user behavior.

One SQL database contained page view data, such as user ID, URL, and time spent on page.

A second DB contained click data, such as element clicked, resulting errors, and timestamp.

Respectively, 40% and 80% of rows in each DB could not be used for one of several reasons.

I developed heuristics for identifying and excluding redundant or otherwise unhelpful data.

I translated the remaining data from complex URLs and action names to plain English.
</p>

<p>
Once I finished developing a pipeline to query, clean, and transform clickstream data relating to any product, or surface, I conducted a variety of analyses on one particular funnel as a proof-of-concept. The funnel included the pages employers might visit when evaluating candidates for a job they'd posted:

Pages listing their jobs, with metadata related to number of candidates who have applied.

Individual job pages providing all the details of a particular job, including links to candidates.

Pages listing the candidates for a particular job.

Individual candidate pages that provide all of the details for a particular candidate's application.2
</p>

<h2>Here are some of our most interesting findings:</h2>

<p>
Page in funnel skipped

Our initial expert review identified a 4 step process as our users' most likely journey to candidate pages. However, our results showed that users rarely navigated to Page 2 in the journey, the page providing details of the job they had posted.

Instead, they were able to move directly from Page 1, the jobs list, to either Page 3, the candidates list, or the final page, which contains details for a particular candidate. In only 5% of cases did they view Page 2 along the way.
</p>

<p>
Circular user journeys

When viewing our Sankey diagrams. We noticed that the majority (80%) of candidate detail page views did occur after navigation from any other page in the journey, but from another candidate detail page.

While we overlooked this path in our preliminary work, it made sense: Back and Next buttons allow users to toggle through candidates, and our data showed that they strongly preferred this method to navigating back to the candidates list.
</p>

<p>
A misleading button

When digging into our page view statistics, we noticed something strange: One page, which was not part of the main journey we were investigating, had extremely low average numbers for time spent on page. In fact, the vast majority of users spent fewer than 5 seconds on this page, not long enough to enter the information it requested.

After some further analysis, we concluded that users who clicked a button leading to this page probably thought it would take them somewhere else, and upon realizing that they had made a mistake, they immediately navigated away.
</p>

<p>
</p>

<p>
</p>

<p>
"Kevin really came through for us on the Clickstream Analytics research. He dug into issues with our data that Indeed’s been ignoring for years and came out with a very compelling and well-articulated value proposition. This deck has become the catalyst driving new investment interest with leadership, and set us on a path to begin this work." - UX Director

- “Kevin helped us diagnose systemic data logging issues that prevented us from measuring end-to-end user experiences. In doing so, he created an actionable vision for clickstream analytics at scale across a wide breadth of coterminal environments. Where other data scientists said "it's too difficult," Kevin embraced the complexity and nuance.” - UX Director

“He made me a fan after presenting his clickstream analysis. He's since been a great partner in helping analyze behavioral data in product to identify and validate journeys. I know the data isn't easy to work with, and his attitude towards the challenge of trying to answer questions with it has been tremendous.” -Lead UX Designer

“Kevin is an amazing partner to help add the quant aspect to user research. He and I worked together on a project to combine qual, quant and expert review to provide a holistic, end to end vision of the user experience and his partnership truly made the project what it was. I'd be thrilled to work with Kevin again.” - Senior UX Researcher
</p>

<p>
Socialization, workshopping, and resulting collaborations

Following the readout of my findings and publication of a companion blog post, many stakeholders expressed interest in supporting future work on clickstream analytics. Others asked me for tutorials or code to obtain and analyze data pertaining to user journeys on their particular products. Through these new collaborations, I quickly became the trusted source of information in this new and exciting topic area.
</p>

<h2>Some of the collaborations that came out of this work were:</h2>

<p>
Jupyter Notebook for Sankeys

A team of business intelligence analysts from Indeed's Job Posting group requested my help with Sankey diagrams to analyze user navigation.

I conducted a workshop and provided a Jupyter notebook template. Using these tools, they quickly visualized and quantified user journeys.

The team then utilized this data to test assumptions and inform stakeholders of journey-related findings. With real-time updates from user interactions, this tool now serves as a live user journey monitor.
</p>

<p>
Product team collaboration

A product team sought a collaboration with me to improve conventions for user action naming and logging. The goal was to make their data easier to use in clickstream analytics.

Working with their product manager, designers, and developers, I advised them on best practices for collecting and organizing clickstream data.

Buy-in from teams like this one was crucial to achieving our long-term goal of reforming data collection practices to make clickstream analytics accessible to the entire organization.
</p>

<p>
Cross-functional collaboration

In my role, I was entirely focused on the experiences of employer-users of our products, and collaborations with colleagues on job seeker-focused teams were exceedingly rare.

After learning about my work, a BI analyst from the job seeker org reached out to discuss some overlap in work we had been doing. After some discussion, we decided to form a collaboration. In addition to separate investigations of employer and job seeker behavior, we would synthesize our data to better understand interactions between the two user types.
</p>

<p>
</p>
<p>
This post is a work in progress!
</p>

<p>
-Kevin
</p>
</div>