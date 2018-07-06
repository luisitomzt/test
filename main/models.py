from django.db import models

class Escuela(models.Model):
    nombre = models.CharField(max_length=200)
    zona = models.CharField(max_length=200)
    director = models.CharField(max_length=200)
    ciudad = models.CharField(max_length=200)
    otros = models.CharField(max_length=200)
