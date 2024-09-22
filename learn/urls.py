from django.urls import path

from . import views

urlpatterns = [
    path('play/', views.play, name='play'),
    #path('contact/', views.contact, name='contact'),
    #path('summernote/', include('django_summernote.urls')),  # Include Django Summernote URLs
    #path('accounts/', include('allauth.urls')),  # Include allauth URLs
]
      
