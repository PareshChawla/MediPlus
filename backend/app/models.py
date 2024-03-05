from django.db import models

class Patient(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    city = models.CharField(max_length=100)
    address = models.TextField()
    medicine = models.CharField(max_length=100)
    # changed from Imagefield to Filefield for storing .pdf format
    # ImageField Does not allow .pdf format
    prescription = models.FileField(upload_to='prescriptions')
    definition = models.TextField()
    
    def __str__(self) -> str:
        return self.name
