---
layout: post
title: "Pymate: Evolutionary Simulations" 
---
<div style="text-align: left">
During grad school, I learned Python and wrote a custom library, <a href="https://github.com/kevinrosenfield/pymate/blob/master/pymate.py">pymate</a>, to test hypotheses about primate mating strategies using agent-based modeling and evolutionary simulations. Pymate utilizes object-oriented programming to allow the user to create a primate society, complete with social groups that contain male and female individuals.
</div> 

<br>

<div style="text-align: left">
Real primate societies are extremely diverse in their social structures, mating systems, and much more, and pymate mirrors this diversity by including a number of user-defined parameters and stochastic components. For example, <a href="https://onlinelibrary.wiley.com/doi/pdf/10.1002/ajp.22044?casa_token=h8NieiLkMLgAAAAA:8EZr53r3-3yBYGaDpkX-U1dYXIEFiOZ99sup9a83o9y-Wyjdt3F-mzGEC6MAatj1WxLihXyv1VCG">the steepness of the male dominance hierarchy</a> is a measure of how decisively a male of a particular social rank can exert dominance over males of lower ranks. Pymate's rankFitnessCorrelation parameter gives the user control over this group-level trait, but no two model runs will produce identical hierarchies, even when rankFitnessCorrelation remains the same.
</div>

<br>

<div style="display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center">
  <img src="/images/rankFitness_0.5a.png" alt="Image" width="47%" height=auto>
  <img src="/images/rankFitness_0.5b.png" alt="Image" width="47%" height=auto>
</div>

<br>

<div style="text-align: left">
-Kevin
</div>
