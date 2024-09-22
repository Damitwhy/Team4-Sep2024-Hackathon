from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('piano/', views.piano, name='piano'),
    path('about/', views.about, name='about'),
    path('learn/', views.learn, name='learn'),
    #path('projects/', views.projects, name='projects'),
    #path('contact/', views.contact, name='contact'),
    #path('summernote/', include('django_summernote.urls')),  # Include Django Summernote URLs
    #path('accounts/', include('allauth.urls')),  # Include allauth URLs
]
      
