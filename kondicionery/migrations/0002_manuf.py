# Generated by Django 4.2.7 on 2024-03-11 17:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kondicionery', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Manuf',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150, unique=True, verbose_name='Название')),
                ('slug', models.SlugField(blank=True, max_length=200, null=True, unique=True, verbose_name='URL')),
            ],
            options={
                'verbose_name': 'Производитель',
                'verbose_name_plural': 'Производители',
                'db_table': 'manuf',
            },
        ),
    ]
