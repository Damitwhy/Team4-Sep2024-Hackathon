# Generated by Django 5.0.7 on 2024-09-22 12:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contributor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField(blank=True)),
                ('profile_picture', models.ImageField(blank=True, upload_to='media/')),
                ('link_github', models.URLField(blank=True)),
                ('link_linked_in', models.URLField(blank=True)),
            ],
        ),
    ]
