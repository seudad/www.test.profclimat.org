# Generated by Django 4.2.7 on 2024-03-07 01:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categories',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150, unique=True, verbose_name='Название')),
                ('slug', models.SlugField(blank=True, max_length=200, null=True, unique=True, verbose_name='URL')),
                ('description', models.TextField(blank=True, null=True, verbose_name='Описание')),
                ('title', models.CharField(max_length=150, unique=True, verbose_name='Титульник')),
            ],
            options={
                'verbose_name': 'Категорию',
                'verbose_name_plural': 'Категории',
                'db_table': 'category',
            },
        ),
        migrations.CreateModel(
            name='Compressor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150, unique=True, verbose_name='Название')),
                ('slug', models.SlugField(blank=True, max_length=200, null=True, unique=True, verbose_name='URL')),
            ],
            options={
                'verbose_name': 'Компрессор',
                'verbose_name_plural': 'Компрессоры',
                'db_table': 'compress',
            },
        ),
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150, unique=True, verbose_name='Название')),
                ('slug', models.SlugField(blank=True, max_length=200, null=True, unique=True, verbose_name='URL')),
                ('description', models.TextField(blank=True, null=True, verbose_name='Описание')),
                ('img', models.ImageField(blank=True, null=True, upload_to='prod_images', verbose_name='Изображение')),
                ('price', models.DecimalField(decimal_places=0, default=0, max_digits=10, verbose_name='Цена')),
                ('discount', models.DecimalField(decimal_places=0, default=0, max_digits=3, verbose_name='Скидка в процентах')),
                ('cooled', models.DecimalField(decimal_places=1, default=0, max_digits=4, verbose_name='Охлаждение')),
                ('heater', models.DecimalField(decimal_places=1, default=0, max_digits=4, verbose_name='Обогрев')),
                ('articul', models.DecimalField(decimal_places=0, default=0, max_digits=4, verbose_name='Артикул')),
                ('square', models.IntegerField(default=0, verbose_name='Площадь охлаждения')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='kondicionery.categories', verbose_name='Категория')),
                ('compress', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='kondicionery.compressor', verbose_name='Компрессор')),
            ],
            options={
                'verbose_name': 'Товар',
                'verbose_name_plural': 'Товары',
                'db_table': 'products',
            },
        ),
    ]