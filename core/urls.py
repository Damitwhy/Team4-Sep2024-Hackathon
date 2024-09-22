from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home'),    
    path('about/', views.about, name='about'),
    path('learn/', views.learn, name='learn'),
    #path('projects/', views.projects, name='projects'),
    #path('contact/', views.contact, name='contact'),
    #path('summernote/', include('django_summernote.urls')),  # Include Django Summernote URLs
    #path('accounts/', include('allauth.urls')),  # Include allauth URLs
]
      
