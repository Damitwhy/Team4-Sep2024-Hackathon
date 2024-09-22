from django.shortcuts import render
from .models import Contributor

# Create your views here.
def home(request):
    return render(request, 'core/home.html')

def learn(request):
    return render(request, 'core/learn.html')

def learn(request):
    return render(request, 'core/learn.html')

def about(request):
    contributors = Contributor.objects.all()
    return render(request, 'core/about.html', {'contributors': contributors})

