from django.db import models

class Topic(models.Model):
    """the topic which user setting"""
    text = models.CharField(max_length=200)
    date_added = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        """return the express of model"""
        return self.text

class Entry(models.Model):
    """learning some knowledge about special topic"""
    topic = models.ForeignKey('Topic', on_delete = models.CASCADE)
    text = models.TextField()
    date_added = models.DateTimeField(auto_now_add=True)
    class Meta:
        verbose_name_plural = 'entries'
    def __str__(self):
        """return the model of string"""
        return self.text[:50]+"..."
    

# Create your models here.
