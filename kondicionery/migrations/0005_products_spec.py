# Generated by Django 4.2.7 on 2024-03-12 03:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kondicionery', '0004_alter_products_imgmore'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='spec',
            field=models.TextField(blank=True, null=True, verbose_name='Хар-ки'),
        ),
    ]
