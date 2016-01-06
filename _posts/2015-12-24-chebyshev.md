---
layout: post
title: "Solving Simple Pendulum problem using SageMath 6.10"
date: 2015-12-24
---
<div>
$$ \frac{d^2 \theta}{dt^2} = -\frac{g}{l} \cos{\theta} $$
</div>

on:
<div>
$$ 0 &leq; t &leq; 5 $$
with the initial conditions:
$$ \theta(0)=0 $$
$$ \dot{\theta}(0)=0 $$

solved in SageMath gives the graph:
{% include image.html image="Simple_Pendulum.png" width="1140px" description="Simple Pendulum" %}
</div>

<div>
$$ \ddot{r} = \frac{l^2}{r^3}-\frac{GM}{r^2} $$
$$ \therefore \dot{r}^2 = -\frac{l^2}{r^2} + \frac{2GM}{r} + C $$
$$ \dot{r} = \sqrt{\frac{2GM}{r} - \frac{l^2}{r^2} + C} $$
$$ \dot{r} = \frac{1}{r} \sqrt{C{r^2}+2GMr-l^2} $$
</div>
