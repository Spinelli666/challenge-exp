from django.db import models

class Experimento(models.Model):
    experimento_id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    data = models.DateField()
    responsavel = models.CharField(max_length=100)
    trafego = models.IntegerField()
    amostras = models.IntegerField()

    def __str__(self):
        return self.nome