---
layout: post
title: "Machine Learning Tennis Predictions"
excerpt: <a id="img-div3" class="excerpt-link"  style="position:relative"  href="https://kevinrosenfield.com/Predict-Tennis/"><img width = "50%", height = "auto" src="/images/tennis_analytics.jpeg" alt="obtained from https://www.pinnacle.com/"><div id="img-box3" class="img-box">Read More</div></a>
---
<div style="display:grid">

<p>
</p>

<p>
What information would you need to predict the outcome of a tennis match? If you knew nothing else about the sport, the players, or the the venue, you might start by looking at the players' world rankings, which basically reflect how well they've been playing relative to their competitiors over the last year.
</p>

<p>
The  commentators may announce their ranks, or they may show up in a stats box before or during the match (the little numbers next to player names are tournament seeds, which are related, but different). You can also find player rankings very easily <a href="https://www.atptour.com/en/rankings/singles">here (Men's)</a> and <a href="https://www.atptour.com/en/rankings/singles">here (Women's)</a>.
</p>

<p>
So, do higher ranked players win more often? 
</p>

<div style="display:flex;flex-direction:column;align-items:center;font-size: calc(10px + 0.5vw);justify-self: center;">
  <div style="margin-left: 2%;margin-right: 5%;text-align:justify;font-size:calc(12px + 0.5vw)">
    Figure 1. Distribution of ranks among match winners and losers.
  </div>
  <div style="display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;">
    <div style="background-color:white;margin:3px;border-radius:20px;width:49%;height:fit-content;min-width:300px;">
      <img src="/images/tennis_ranks_win.png" width="47%" height=auto style="border-radius: 11px;width:90%">
    </div>
    <div style="background-color:white;margin:3px;border-radius:20px;width:49%;height:fit-content;min-width:300px;">
      <img src="/images/tennis_ranks_los.png" width="47%" height=auto style="border-radius: 11px;width:90%">
    </div>
  </div>
</div>

<br>

<h2>Planned Work</h2>

<p>
I am in the process of writing a python script that uses logistic regression to predict the outcomes of professional tennis matches on the basis of each players' previous match performance. The first iteration will only take into account each player's most recent match, but subsequent attempts to improve the model's predictive power will use more complex feature combinations, take momentum over multiple matches into account, and factor in the head-to-head record and statistics of each player.
</p>

<p>
I also hope to find richer data sources to incorporate into future iterations, as the data for which a large enough sample to run an adequately powered machine learning algorithm only covers the most superficial match statistics. I hope to train an initial model that can predict outcomes at least better than chance (50%), but would like to reach a much higher number.
</p>

<p>
A truly great model would correctly predict <i>upsets</i> more than 50% of the time. An upset occurs when the lower ranked player wins the match. In more prominent tournaments, seeded players defeat their unseeded opponents most of the time. Predicting upsets at this level would be a real measure of success.
</p>

<p>
This post is a work in progress!
</p>

<p>
-Kevin
</p>
</div>
